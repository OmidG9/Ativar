export const REQUEST_TYPES = [
  "مشاوره راهبردی و تحول دیجیتال",
  "هوش مصنوعی سازمانی",
  "تحلیل هوشمند داده",
  "مدیریت دانش سازمانی",
  "AI Workspace یا LLM سازمانی",
  "فین‌تک",
  "معماری و اجرای پروژه",
  "توسعه خدمات هوشمند درآمدزا",
  "سایر موارد",
] as const;

export const PROJECT_SCALES = [
  "کمتر از ۵۰۰ میلیون تومان",
  "۵۰۰ میلیون تا ۲ میلیارد تومان",
  "بیش از ۲ میلیارد تومان",
  "هنوز مشخص نیست",
] as const;

export const TIMELINES = [
  "فوری (کمتر از یک ماه)",
  "۱ تا ۳ ماه",
  "۳ تا ۶ ماه",
  "بیش از ۶ ماه",
  "هنوز مشخص نیست",
] as const;

export const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export const MAX_FIELD_LENGTHS = {
  fullName: 120,
  organization: 160,
  title: 120,
  email: 200,
  phone: 40,
  requestType: 80,
  projectScale: 80,
  timeline: 80,
  message: 4000,
} as const;

export type Lead = {
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

export function clean(value: unknown, maxLength: number): string {
  if (typeof value !== "string") return "";
  return value
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, "")
    .trim()
    .slice(0, maxLength);
}

export function validateLead(body: Record<string, unknown>): {
  lead: Lead;
  errors: Record<string, string>;
} {
  const lead: Lead = {
    fullName: clean(body.fullName, MAX_FIELD_LENGTHS.fullName),
    organization: clean(body.organization, MAX_FIELD_LENGTHS.organization),
    title: clean(body.title, MAX_FIELD_LENGTHS.title),
    email: clean(body.email, MAX_FIELD_LENGTHS.email),
    phone: clean(body.phone, MAX_FIELD_LENGTHS.phone),
    requestType: clean(body.requestType, MAX_FIELD_LENGTHS.requestType),
    projectScale: clean(body.projectScale, MAX_FIELD_LENGTHS.projectScale),
    timeline: clean(body.timeline, MAX_FIELD_LENGTHS.timeline),
    message: clean(body.message, MAX_FIELD_LENGTHS.message),
    privacy: body.privacy === true,
  };

  const errors: Record<string, string> = {};

  if (lead.fullName.length < 3) errors.fullName = "نام و نام خانوادگی را کامل وارد کنید.";
  if (!EMAIL_PATTERN.test(lead.email)) errors.email = "ایمیل کاری معتبر وارد کنید.";
  if (lead.message.length < 20)
    errors.message = "شرح مسئله یا هدف سازمان باید حداقل ۲۰ کاراکتر باشد.";
  if (!lead.privacy) errors.privacy = "موافقت با سیاست حریم خصوصی الزامی است.";
  if (
    lead.requestType &&
    !REQUEST_TYPES.includes(lead.requestType as (typeof REQUEST_TYPES)[number])
  ) {
    errors.requestType = "نوع درخواست معتبر نیست.";
  }
  if (
    lead.projectScale &&
    !PROJECT_SCALES.includes(lead.projectScale as (typeof PROJECT_SCALES)[number])
  ) {
    errors.projectScale = "مقیاس پروژه معتبر نیست.";
  }
  if (lead.timeline && !TIMELINES.includes(lead.timeline as (typeof TIMELINES)[number])) {
    errors.timeline = "زمان‌بندی معتبر نیست.";
  }

  return { lead, errors };
}

export function formatLead(lead: Lead): string {
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

export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

const TELEGRAM_DESCRIPTION_LIMIT = 2400;

/** Compact HTML message for Telegram. Truncated before escaping to stay under the API limit. */
export function formatTelegramLead(lead: Lead): string {
  const description =
    lead.message.length > TELEGRAM_DESCRIPTION_LIMIT
      ? `${lead.message.slice(0, TELEGRAM_DESCRIPTION_LIMIT)}…`
      : lead.message;

  const rows: Array<[string, string]> = [
    ["نام", lead.fullName],
    ["سازمان", lead.organization],
    ["سمت", lead.title],
    ["ایمیل", lead.email],
    ["تلفن", lead.phone],
    ["نوع درخواست", lead.requestType],
    ["مقیاس پروژه", lead.projectScale],
    ["زمان‌بندی", lead.timeline],
  ];

  const lines = [
    "<b>درخواست جدید از وب‌سایت آتیوار</b>",
    "",
    ...rows
      .filter(([, value]) => value)
      .map(([label, value]) => `<b>${label}:</b> ${escapeHtml(value)}`),
    "",
    "<b>شرح مسئله:</b>",
    escapeHtml(description),
  ];

  return lines.join("\n");
}
