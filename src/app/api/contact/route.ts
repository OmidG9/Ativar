import { NextResponse } from "next/server";
import { clean, validateLead } from "@/lib/contact";
import { deliverLead } from "@/lib/contact-delivery";

export const runtime = "nodejs";

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX = 5;
const MAX_BODY_BYTES = 20_000;

type RateLimitEntry = { count: number; resetAt: number };
const rateLimitStore = new Map<string, RateLimitEntry>();

function getClientKey(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0]?.trim() || "unknown";
  return request.headers.get("x-real-ip") || "unknown";
}

function checkRateLimit(key: string): { allowed: boolean; retryAfterSeconds: number } {
  const now = Date.now();

  for (const [entryKey, entry] of rateLimitStore) {
    if (entry.resetAt <= now) rateLimitStore.delete(entryKey);
  }

  const current = rateLimitStore.get(key);
  if (!current) {
    rateLimitStore.set(key, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return { allowed: true, retryAfterSeconds: 0 };
  }

  if (current.count >= RATE_LIMIT_MAX) {
    return {
      allowed: false,
      retryAfterSeconds: Math.max(1, Math.ceil((current.resetAt - now) / 1000)),
    };
  }

  current.count += 1;
  return { allowed: true, retryAfterSeconds: 0 };
}

export async function POST(request: Request) {
  if (!request.headers.get("content-type")?.includes("application/json")) {
    return NextResponse.json({ error: "نوع درخواست پشتیبانی نمی‌شود." }, { status: 415 });
  }

  const contentLength = Number(request.headers.get("content-length") ?? 0);
  if (contentLength > MAX_BODY_BYTES) {
    return NextResponse.json({ error: "حجم درخواست بیش از حد مجاز است." }, { status: 413 });
  }

  const rateLimit = checkRateLimit(getClientKey(request));
  if (!rateLimit.allowed) {
    return NextResponse.json(
      { error: "تعداد درخواست‌ها زیاد است. لطفاً کمی بعد دوباره تلاش کنید." },
      { status: 429, headers: { "Retry-After": String(rateLimit.retryAfterSeconds) } },
    );
  }

  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "بدنه درخواست معتبر نیست." }, { status: 400 });
  }

  if (typeof payload !== "object" || payload === null || Array.isArray(payload)) {
    return NextResponse.json({ error: "بدنه درخواست معتبر نیست." }, { status: 400 });
  }

  const body = payload as Record<string, unknown>;

  // Honeypot: real users never fill this hidden field. Answer normally but drop it.
  if (clean(body.website, 200).length > 0) {
    return NextResponse.json({ ok: true });
  }

  const { lead, errors } = validateLead(body);
  if (Object.keys(errors).length > 0) {
    return NextResponse.json(
      { error: "لطفاً فیلدهای مشخص‌شده را اصلاح کنید.", fields: errors },
      { status: 422 },
    );
  }

  try {
    const report = await deliverLead(lead);

    if (report.configured === 0) {
      if (process.env.NODE_ENV === "production") {
        return NextResponse.json(
          { error: "سرویس دریافت درخواست هنوز پیکربندی نشده است. لطفاً بعداً تلاش کنید." },
          { status: 503 },
        );
      }

      // Development fallback: never log personal data.
      console.info("[contact] درخواست دریافت شد اما هیچ مقصدی پیکربندی نشده است (محیط توسعه).");
      return NextResponse.json({ ok: true });
    }

    const delivered = report.results.filter((result) => result.ok);

    if (delivered.length === 0) {
      console.error(
        "[contact] همه مقصدها ناموفق بودند:",
        report.results.map((result) => `${result.channel}: ${result.error}`).join(" | "),
      );
      return NextResponse.json(
        { error: "ارسال درخواست انجام نشد. لطفاً دوباره تلاش کنید." },
        { status: 502 },
      );
    }

    if (delivered.length < report.results.length) {
      console.error(
        "[contact] ارسال ناقص؛ مقصدهای ناموفق:",
        report.results
          .filter((result) => !result.ok)
          .map((result) => `${result.channel}: ${result.error}`)
          .join(" | "),
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error(
      "[contact] delivery failed:",
      error instanceof Error ? error.message : "unknown error",
    );
    return NextResponse.json(
      { error: "ارسال درخواست انجام نشد. لطفاً دوباره تلاش کنید." },
      { status: 502 },
    );
  }
}
