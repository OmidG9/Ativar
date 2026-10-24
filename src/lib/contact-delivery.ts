import { formatLead, formatTelegramLead, type Lead } from "./contact";

export type DeliveryChannel = "telegram" | "email" | "webhook";

export type DeliveryResult = {
  channel: DeliveryChannel;
  ok: boolean;
  error?: string;
};

export type DeliveryReport = {
  configured: number;
  results: DeliveryResult[];
};

export type DeliveryEnv = Record<string, string | undefined>;

type DeliveryOptions = {
  env?: DeliveryEnv;
  fetchImpl?: typeof fetch;
};

const REQUEST_TIMEOUT_MS = 10_000;
const DEFAULT_TELEGRAM_API_BASE = "https://api.telegram.org";
const DEFAULT_RESEND_API_BASE = "https://api.resend.com";

function trimTrailingSlash(value: string): string {
  return value.replace(/\/+$/, "");
}

export function hasTelegramConfig(env: DeliveryEnv): boolean {
  return Boolean(env.TELEGRAM_BOT_TOKEN && env.TELEGRAM_CHAT_ID);
}

export function hasEmailConfig(env: DeliveryEnv): boolean {
  return Boolean(env.RESEND_API_KEY && env.CONTACT_TO_EMAIL && env.CONTACT_FROM_EMAIL);
}

export function hasWebhookConfig(env: DeliveryEnv): boolean {
  return Boolean(env.CONTACT_WEBHOOK_URL);
}

export function configuredChannels(env: DeliveryEnv = process.env): DeliveryChannel[] {
  const channels: DeliveryChannel[] = [];
  if (hasTelegramConfig(env)) channels.push("telegram");
  if (hasEmailConfig(env)) channels.push("email");
  if (hasWebhookConfig(env)) channels.push("webhook");
  return channels;
}

async function postJson(
  fetchImpl: typeof fetch,
  url: string,
  init: { headers?: Record<string, string>; body: unknown },
): Promise<void> {
  const response = await fetchImpl(url, {
    method: "POST",
    headers: { "Content-Type": "application/json", ...init.headers },
    body: JSON.stringify(init.body),
    signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
  });

  if (!response.ok) {
    throw new Error(`responded with ${response.status}`);
  }
}

async function sendTelegram(
  lead: Lead,
  env: DeliveryEnv,
  fetchImpl: typeof fetch,
): Promise<DeliveryResult> {
  try {
    const base = trimTrailingSlash(env.TELEGRAM_API_BASE || DEFAULT_TELEGRAM_API_BASE);
    await postJson(fetchImpl, `${base}/bot${env.TELEGRAM_BOT_TOKEN}/sendMessage`, {
      body: {
        chat_id: env.TELEGRAM_CHAT_ID,
        text: formatTelegramLead(lead),
        parse_mode: "HTML",
        disable_web_page_preview: true,
      },
    });
    return { channel: "telegram", ok: true };
  } catch (error) {
    return {
      channel: "telegram",
      ok: false,
      error: error instanceof Error ? error.message : "unknown error",
    };
  }
}

async function sendEmail(
  lead: Lead,
  env: DeliveryEnv,
  fetchImpl: typeof fetch,
): Promise<DeliveryResult> {
  try {
    const base = trimTrailingSlash(env.RESEND_API_BASE || DEFAULT_RESEND_API_BASE);
    await postJson(fetchImpl, `${base}/emails`, {
      headers: { Authorization: `Bearer ${env.RESEND_API_KEY}` },
      body: {
        from: env.CONTACT_FROM_EMAIL,
        to: [env.CONTACT_TO_EMAIL],
        reply_to: lead.email,
        subject: `درخواست جدید: ${lead.requestType || "تماس"} — ${lead.fullName}`,
        text: formatLead(lead),
      },
    });
    return { channel: "email", ok: true };
  } catch (error) {
    return {
      channel: "email",
      ok: false,
      error: error instanceof Error ? error.message : "unknown error",
    };
  }
}

async function sendWebhook(
  lead: Lead,
  env: DeliveryEnv,
  fetchImpl: typeof fetch,
): Promise<DeliveryResult> {
  try {
    await postJson(fetchImpl, env.CONTACT_WEBHOOK_URL as string, {
      body: { ...lead, submittedAt: new Date().toISOString() },
    });
    return { channel: "webhook", ok: true };
  } catch (error) {
    return {
      channel: "webhook",
      ok: false,
      error: error instanceof Error ? error.message : "unknown error",
    };
  }
}

/**
 * Sends the lead to every configured destination in parallel.
 * A submission counts as delivered when at least one channel succeeds.
 */
export async function deliverLead(
  lead: Lead,
  { env = process.env, fetchImpl = fetch }: DeliveryOptions = {},
): Promise<DeliveryReport> {
  const channels = configuredChannels(env);

  const results = await Promise.all(
    channels.map((channel) => {
      if (channel === "telegram") return sendTelegram(lead, env, fetchImpl);
      if (channel === "email") return sendEmail(lead, env, fetchImpl);
      return sendWebhook(lead, env, fetchImpl);
    }),
  );

  return { configured: channels.length, results };
}
