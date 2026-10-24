import { NextResponse } from "next/server";

export const runtime = "nodejs";

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX = 5;
const MAX_BODY_BYTES = 20_000;

type RateLimitEntry = { count: number; resetAt: number };
const rateLimitStore = new Map<string, RateLimitEntry>();

type Lead = {
  fullName: string;
  organization: string;
  title: string;
  email: string;
  phone: string;
  requestType: string;
  projectScale: string;
  timeline: string;
  message: string;
  privacy: boolean;
};

const REQUEST_TYPES = [
  "درخواست جلسه مشاوره",
  "درخواست ارزیابی هوش مصنوعی",
  "درخواست طراحی معماری",
  "درخواست اجرای پروژه",
  "درخواست راهکار فین‌تک",
  "درخواست همکاری راهبردی",
] as const;

const PROJECT_SCALES = ["کمتر از ۵۰۰ میلیون تومان", "۵۰۰ میلیون تا ۲ میلیارد تومان", "بیش از ۲ میلیارد تومان", "هنوز مشخص نیست"] as const;
const TIMELINES = ["فوری (کمتر از یک ماه)", "۱ تا ۳ ماه", "۳ تا ۶ ماه", "بیش از ۶ ماه", "هنوز مشخص نیست"] as const;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function clean(value: unknown, maxLength: number): string {
  if (typeof value !== "string") return "";
  return value
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, "")
    .trim()
    .slice(0, maxLength);
}

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

function validate(body: Record<string, unknown>): { lead: Lead; errors: Record<string, string> } {
  const lead: Lead = {
    fullName: clean(body.fullName, 120),
    organization: clean(body.organization, 160),
    title: clean(body.title, 120),
    email: clean(body.email, 200),
    phone: clean(body.phone, 40),
    requestType: clean(body.requestType, 80),
    projectScale: clean(body.projectScale, 80),
    timeline: clean(body.timeline, 80),
    message: clean(body.message, 4000),
    privacy: body.privacy === true,
  };

  const errors: Record<string, string> = {};

  if (lead.fullName.length < 3) errors.fullName = "نام و نام خانوادگی را کامل وارد کنید.";
  if (!EMAIL_PATTERN.test(lead.email)) errors.email = "ایمیل کاری معتبر وارد کنید.";
  if (lead.message.length < 20) errors.message = "شرح مسئله باید حداقل ۲۰ کاراکتر باشد.";
  if (!lead.privacy) errors.privacy = "موافقت با سیاست حریم خصوصی الزامی است.";
  if (lead.requestType && !REQUEST_TYPES.includes(lead.requestType as (typeof REQUEST_TYPES)[number])) {
    errors.requestType = "نوع درخواست معتبر نیست.";
  }
  if (lead.projectScale && !PROJECT_SCALES.includes(lead.projectScale as (typeof PROJECT_SCALES)[number])) {
    errors.projectScale = "مقیاس پروژه معتبر نیست.";
  }
  if (lead.timeline && !TIMELINES.includes(lead.timeline as (typeof TIMELINES)[number])) {
    errors.timeline = "زمان‌بندی معتبر نیست.";
  }

  return { lead, errors };
}

function formatLead(lead: Lead): string {
  return [
    `نام: ${lead.fullName}`,
    `سازمان: ${lead.organization || "—"}`,
    `سمت: ${lead.title || "—"}`,
    `ایمیل: ${lead.email}`,
    `تلفن: ${lead.phone || "—"}`,
    `نوع درخواست: ${lead.requestType || "—"}`,
    `مقیاس پروژه: ${lead.projectScale || "—"}`,
    `زمان‌بندی: ${lead.timeline || "—"}`,
    "",
    "شرح مسئله:",
    lead.message,
  ].join("\n");
}

async function deliverLead(lead: Lead): Promise<"webhook" | "email" | "unconfigured"> {
  const webhookUrl = process.env.CONTACT_WEBHOOK_URL;

  if (webhookUrl) {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...lead, submittedAt: new Date().toISOString() }),
      signal: AbortSignal.timeout(10_000),
    });

    if (!response.ok) throw new Error(`Webhook responded with ${response.status}`);
    return "webhook";
  }

  const resendKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;

  if (resendKey && to && from) {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: lead.email,
        subject: `درخواست جدید: ${lead.requestType || "تماس"} — ${lead.fullName}`,
        text: formatLead(lead),
      }),
      signal: AbortSignal.timeout(10_000),
    });

    if (!response.ok) throw new Error(`Email provider responded with ${response.status}`);
    return "email";
  }

  return "unconfigured";
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

  const { lead, errors } = validate(body);
  if (Object.keys(errors).length > 0) {
    return NextResponse.json(
      { error: "لطفاً فیلدهای مشخص‌شده را اصلاح کنید.", fields: errors },
      { status: 422 },
    );
  }

  try {
    const channel = await deliverLead(lead);

    if (channel === "unconfigured") {
      if (process.env.NODE_ENV === "production") {
        return NextResponse.json(
          { error: "سرویس دریافت درخواست هنوز پیکربندی نشده است. لطفاً بعداً تلاش کنید." },
          { status: 503 },
        );
      }

      // Development fallback: never log personal data.
      console.info("[contact] درخواست دریافت شد اما هیچ مقصدی پیکربندی نشده است (محیط توسعه).");
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
