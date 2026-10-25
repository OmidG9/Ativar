import { describe, expect, it } from "vitest";
import { configuredChannels, deliverLead } from "../src/lib/contact-delivery";
import type { Lead } from "../src/lib/contact";

const lead: Lead = {
  fullName: "سارا محمدی",
  organization: "سازمان نمونه",
  title: "مدیر فناوری",
  email: "sara@example.com",
  phone: "02100000000",
  requestType: "مشاوره راهبردی و تحول دیجیتال",
  projectScale: "هنوز مشخص نیست",
  timeline: "۱ تا ۳ ماه",
  message: "برای طراحی معماری راهکار هوش مصنوعی نیاز به مشاوره داریم.",
  privacy: true,
};

const fullEnv = {
  TELEGRAM_BOT_TOKEN: "123:ABC",
  TELEGRAM_CHAT_ID: "-100123",
  RESEND_API_KEY: "re_test",
  CONTACT_TO_EMAIL: "team@example.com",
  CONTACT_FROM_EMAIL: "site@example.com",
  CONTACT_WEBHOOK_URL: "https://hooks.example.com/lead",
};

type RecordedCall = { url: string; body: Record<string, unknown>; headers: Record<string, string> };

function createFetch(statusFor: (url: string) => number) {
  const calls: RecordedCall[] = [];

  const fetchImpl = (async (input: RequestInfo | URL, init?: RequestInit) => {
    const url = String(input);
    calls.push({
      url,
      body: JSON.parse(String(init?.body ?? "{}")) as Record<string, unknown>,
      headers: (init?.headers ?? {}) as Record<string, string>,
    });

    return new Response(null, { status: statusFor(url) });
  }) as typeof fetch;

  return { calls, fetchImpl };
}

describe("configuredChannels", () => {
  it("returns nothing when no destination is configured", () => {
    expect(configuredChannels({})).toEqual([]);
  });

  it("requires every field of a channel", () => {
    expect(configuredChannels({ TELEGRAM_BOT_TOKEN: "x" })).toEqual([]);
    expect(configuredChannels({ RESEND_API_KEY: "x", CONTACT_TO_EMAIL: "a@b.co" })).toEqual([]);
  });

  it("returns every configured channel in a stable order", () => {
    expect(configuredChannels(fullEnv)).toEqual(["telegram", "email", "webhook"]);
  });
});

describe("deliverLead", () => {
  it("reports zero configured channels without calling fetch", async () => {
    const { calls, fetchImpl } = createFetch(() => 200);

    const report = await deliverLead(lead, { env: {}, fetchImpl });

    expect(report.configured).toBe(0);
    expect(report.results).toEqual([]);
    expect(calls).toHaveLength(0);
  });

  it("sends the lead to Telegram and email at the same time", async () => {
    const { calls, fetchImpl } = createFetch(() => 200);

    const report = await deliverLead(lead, {
      env: {
        TELEGRAM_BOT_TOKEN: "123:ABC",
        TELEGRAM_CHAT_ID: "-100123",
        RESEND_API_KEY: "re_test",
        CONTACT_TO_EMAIL: "team@example.com",
        CONTACT_FROM_EMAIL: "site@example.com",
      },
      fetchImpl,
    });

    expect(report.configured).toBe(2);
    expect(report.results.every((result) => result.ok)).toBe(true);
    expect(calls).toHaveLength(2);

    const telegramCall = calls.find((call) => call.url.includes("api.telegram.org"));
    const emailCall = calls.find((call) => call.url.includes("api.resend.com"));

    expect(telegramCall?.url).toBe("https://api.telegram.org/bot123:ABC/sendMessage");
    expect(telegramCall?.body.parse_mode).toBe("HTML");
    expect(telegramCall?.body.chat_id).toBe("-100123");
    expect(String(telegramCall?.body.text)).toContain("درخواست جدید");
    expect(String(telegramCall?.body.text)).toContain("سارا محمدی");

    expect(emailCall?.url).toBe("https://api.resend.com/emails");
    expect(emailCall?.headers.Authorization).toBe("Bearer re_test");
    expect(emailCall?.body.to).toEqual(["team@example.com"]);
    expect(emailCall?.body.reply_to).toBe("sara@example.com");
    expect(emailCall?.body.subject).toBe("درخواست جدید: مشاوره راهبردی و تحول دیجیتال — سارا محمدی");
  });

  it("honours custom API base URLs", async () => {
    const { calls, fetchImpl } = createFetch(() => 200);

    await deliverLead(lead, {
      env: {
        TELEGRAM_BOT_TOKEN: "token",
        TELEGRAM_CHAT_ID: "chat",
        TELEGRAM_API_BASE: "http://localhost:8081/",
        RESEND_API_KEY: "key",
        CONTACT_TO_EMAIL: "team@example.com",
        CONTACT_FROM_EMAIL: "site@example.com",
        RESEND_API_BASE: "http://localhost:8082/",
      },
      fetchImpl,
    });

    expect(calls.map((call) => call.url)).toEqual([
      "http://localhost:8081/bottoken/sendMessage",
      "http://localhost:8082/emails",
    ]);
  });

  it("still succeeds when one channel fails but another delivers", async () => {
    const { fetchImpl } = createFetch((url) => (url.includes("telegram") ? 500 : 200));

    const report = await deliverLead(lead, {
      env: {
        TELEGRAM_BOT_TOKEN: "token",
        TELEGRAM_CHAT_ID: "chat",
        RESEND_API_KEY: "key",
        CONTACT_TO_EMAIL: "team@example.com",
        CONTACT_FROM_EMAIL: "site@example.com",
      },
      fetchImpl,
    });

    const telegram = report.results.find((result) => result.channel === "telegram");
    const email = report.results.find((result) => result.channel === "email");

    expect(telegram?.ok).toBe(false);
    expect(telegram?.error).toContain("500");
    expect(email?.ok).toBe(true);
  });

  it("reports failure when every channel fails", async () => {
    const { fetchImpl } = createFetch(() => 503);

    const report = await deliverLead(lead, { env: fullEnv, fetchImpl });

    expect(report.configured).toBe(3);
    expect(report.results.filter((result) => result.ok)).toHaveLength(0);
  });

  it("does not crash when fetch rejects", async () => {
    const fetchImpl = (async () => {
      throw new Error("network down");
    }) as typeof fetch;

    const report = await deliverLead(lead, {
      env: { CONTACT_WEBHOOK_URL: "https://hooks.example.com/lead" },
      fetchImpl,
    });

    expect(report.results[0].ok).toBe(false);
    expect(report.results[0].error).toBe("network down");
  });
});
