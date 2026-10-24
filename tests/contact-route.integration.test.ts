import { createServer, type Server } from "node:http";
import type { AddressInfo } from "node:net";
import { afterAll, afterEach, beforeAll, describe, expect, it, vi } from "vitest";

type CapturedRequest = {
  path: string;
  authorization?: string;
  body: Record<string, unknown>;
};

/**
 * Integration coverage for the contact endpoint: a real HTTP server stands in
 * for Telegram and Resend so the whole chain (route -> validation -> parallel
 * delivery -> status code) is exercised without touching the network.
 */
describe("POST /api/contact", () => {
  let server: Server;
  let baseUrl: string;
  let requests: CapturedRequest[] = [];
  let statusFor: (path: string) => number = () => 200;

  beforeAll(async () => {
    server = createServer((request, response) => {
      const chunks: Buffer[] = [];

      request.on("data", (chunk: Buffer) => chunks.push(chunk));
      request.on("end", () => {
        const path = request.url ?? "/";
        requests.push({
          path,
          authorization: request.headers.authorization,
          body: JSON.parse(Buffer.concat(chunks).toString("utf8") || "{}") as Record<
            string,
            unknown
          >,
        });

        response.writeHead(statusFor(path), { "Content-Type": "application/json" });
        response.end("{}");
      });
    });

    await new Promise<void>((resolve) => server.listen(0, "127.0.0.1", resolve));
    const { port } = server.address() as AddressInfo;
    baseUrl = `http://127.0.0.1:${port}`;
  });

  afterAll(async () => {
    await new Promise<void>((resolve, reject) =>
      server.close((error) => (error ? reject(error) : resolve())),
    );
  });

  afterEach(() => {
    requests = [];
    statusFor = () => 200;
    vi.unstubAllEnvs();
    vi.restoreAllMocks();
  });

  function configureChannels() {
    vi.stubEnv("TELEGRAM_BOT_TOKEN", "123:ABC");
    vi.stubEnv("TELEGRAM_CHAT_ID", "-100123");
    vi.stubEnv("TELEGRAM_API_BASE", baseUrl);
    vi.stubEnv("RESEND_API_KEY", "re_test");
    vi.stubEnv("CONTACT_TO_EMAIL", "team@example.com");
    vi.stubEnv("CONTACT_FROM_EMAIL", "site@example.com");
    vi.stubEnv("RESEND_API_BASE", baseUrl);
  }

  function buildRequest(ip: string, overrides: Record<string, unknown> = {}) {
    return new Request("http://localhost/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json", "x-forwarded-for": ip },
      body: JSON.stringify({
        fullName: "سارا محمدی",
        organization: "سازمان نمونه",
        title: "مدیر فناوری",
        email: "sara@example.com",
        phone: "02100000000",
        requestType: "درخواست جلسه مشاوره",
        projectScale: "هنوز مشخص نیست",
        timeline: "۱ تا ۳ ماه",
        message: "برای طراحی معماری راهکار هوش مصنوعی نیاز به مشاوره داریم.",
        privacy: true,
        ...overrides,
      }),
    });
  }

  it("delivers to Telegram and email in parallel and returns 200", async () => {
    configureChannels();
    const { POST } = await import("../src/app/api/contact/route");

    const response = await POST(buildRequest("10.0.0.1"));

    expect(response.status).toBe(200);
    expect(await response.json()).toEqual({ ok: true });
    expect(requests.map((request) => request.path).sort()).toEqual([
      "/bot123:ABC/sendMessage",
      "/emails",
    ]);

    const telegram = requests.find((request) => request.path.includes("sendMessage"));
    const email = requests.find((request) => request.path === "/emails");

    expect(telegram?.body.chat_id).toBe("-100123");
    expect(telegram?.body.parse_mode).toBe("HTML");
    expect(email?.authorization).toBe("Bearer re_test");
    expect(email?.body.reply_to).toBe("sara@example.com");
  });

  it("returns 200 when one channel fails but the other delivers", async () => {
    configureChannels();
    statusFor = (path) => (path.includes("sendMessage") ? 500 : 200);
    const errorLog = vi.spyOn(console, "error").mockImplementation(() => {});
    const { POST } = await import("../src/app/api/contact/route");

    const response = await POST(buildRequest("10.0.0.2"));

    expect(response.status).toBe(200);
    expect(errorLog).toHaveBeenCalled();
    expect(String(errorLog.mock.calls[0][0])).toContain("ارسال ناقص");
  });

  it("returns 502 when every configured channel fails", async () => {
    configureChannels();
    statusFor = () => 503;
    vi.spyOn(console, "error").mockImplementation(() => {});
    const { POST } = await import("../src/app/api/contact/route");

    const response = await POST(buildRequest("10.0.0.3"));

    expect(response.status).toBe(502);
  });

  it("returns 503 in production when no destination is configured", async () => {
    vi.stubEnv("NODE_ENV", "production");
    const { POST } = await import("../src/app/api/contact/route");

    const response = await POST(buildRequest("10.0.0.4"));

    expect(response.status).toBe(503);
    expect(requests).toHaveLength(0);
  });

  it("rejects invalid input before calling any destination", async () => {
    configureChannels();
    const { POST } = await import("../src/app/api/contact/route");

    const response = await POST(buildRequest("10.0.0.5", { email: "not-an-email" }));
    const body = (await response.json()) as { fields?: Record<string, string> };

    expect(response.status).toBe(422);
    expect(body.fields?.email).toBeDefined();
    expect(requests).toHaveLength(0);
  });

  it("silently drops honeypot submissions", async () => {
    configureChannels();
    const { POST } = await import("../src/app/api/contact/route");

    const response = await POST(buildRequest("10.0.0.6", { website: "spam.example" }));

    expect(response.status).toBe(200);
    expect(requests).toHaveLength(0);
  });

  it("rate limits repeated submissions from one client", async () => {
    configureChannels();
    const { POST } = await import("../src/app/api/contact/route");

    for (let attempt = 0; attempt < 5; attempt += 1) {
      const response = await POST(buildRequest("10.0.0.7"));
      expect(response.status).toBe(200);
    }

    const blocked = await POST(buildRequest("10.0.0.7"));
    expect(blocked.status).toBe(429);
    expect(blocked.headers.get("Retry-After")).toBeTruthy();
  });
});
