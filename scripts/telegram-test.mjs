/**
 * Tests the Telegram notification path used by the contact form.
 *
 * Usage:
 *   node scripts/telegram-test.mjs
 *   node scripts/telegram-test.mjs --form
 *   node scripts/telegram-test.mjs --form --url=http://localhost:4647/api/contact
 *
 * Without --form, sends a short message through the Bot API.
 * With --form, posts a sample lead to the running app's /api/contact endpoint.
 *
 * The token is read from .env / .env.local and is never printed.
 */
import fs from "node:fs";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");

function parseEnvFile(filePath) {
  if (!fs.existsSync(filePath)) return {};

  const values = {};
  for (const rawLine of fs.readFileSync(filePath, "utf8").split(/\r?\n/)) {
    const line = rawLine.trim();
    if (!line || line.startsWith("#")) continue;

    const match = line.match(/^(?:export\s+)?([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(.*)$/);
    if (!match) continue;

    let value = match[2].trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    values[match[1]] = value;
  }
  return values;
}

function loadEnv() {
  const fileEnv = {
    ...parseEnvFile(path.join(root, ".env")),
    ...parseEnvFile(path.join(root, ".env.local")),
  };

  // Real process variables win, matching Next.js precedence.
  for (const [key, value] of Object.entries(process.env)) {
    if (value !== undefined) fileEnv[key] = value;
  }
  return fileEnv;
}

const args = process.argv.slice(2);
const useForm = args.includes("--form");
const urlArg = args.find((arg) => arg.startsWith("--url="));
const endpoint = urlArg
  ? urlArg.slice("--url=".length)
  : process.env.CONTACT_TEST_URL || "http://localhost:4646/api/contact";

const env = loadEnv();
const token = env.TELEGRAM_BOT_TOKEN?.trim();
const apiBase = (env.TELEGRAM_API_BASE || "https://api.telegram.org").replace(/\/+$/, "");

function fail(message) {
  console.error(`\n✖ ${message}\n`);
  process.exit(1);
}

async function botApi(method, payload) {
  const response = await fetch(`${apiBase}/bot${token}/${method}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
    signal: AbortSignal.timeout(20_000),
  });

  const data = await response.json().catch(() => ({}));
  if (!response.ok || data.ok !== true) {
    throw new Error(data.description || `HTTP ${response.status}`);
  }
  return data.result;
}

function chatLabel(chat) {
  return [chat.title, chat.first_name, chat.username && `@${chat.username}`]
    .filter(Boolean)
    .join(" — ");
}

async function discoverChatId() {
  const updates = await botApi("getUpdates", { limit: 100, timeout: 0 });
  const chats = new Map();

  for (const update of updates) {
    const chat =
      update.message?.chat ||
      update.channel_post?.chat ||
      update.my_chat_member?.chat ||
      update.callback_query?.message?.chat;
    if (chat && !chats.has(chat.id)) chats.set(chat.id, chat);
  }

  return [...chats.values()];
}

function printStartInstructions() {
  console.log("هیچ پیامی از ربات پیدا نشد.");
  console.log("۱. در تلگرام به https://t.me/ativarnotifbot بروید.");
  console.log("۲. دکمه Start را بزنید یا یک پیام مثل «سلام» بفرستید.");
  console.log("۳. همین دستور را دوباره اجرا کنید.");
  console.log("\nاگر می‌خواهید پیام‌ها به گروه برسند، ربات را به گروه اضافه کنید و یک پیام در گروه بفرستید.");
}

async function main() {
  if (!token) {
    fail("TELEGRAM_BOT_TOKEN در .env تنظیم نشده است.");
  }

  let chatId = env.TELEGRAM_CHAT_ID?.trim();

  if (!chatId) {
    console.log("TELEGRAM_CHAT_ID خالی است؛ در حال جست‌وجوی chat_id از پیام‌های اخیر ربات…");
    const chats = await discoverChatId();

    if (chats.length === 0) {
      printStartInstructions();
      process.exit(1);
    }

    for (const chat of chats) {
      console.log(`• chat_id=${chat.id}  kind=${chat.type}  ${chatLabel(chat)}`);
    }

    chatId = String(chats[chats.length - 1].id);
    console.log(`\nاز chat_id=${chatId} برای آزمایش استفاده می‌شود.`);
    console.log("برای استفاده دائمی این خط را در .env اضافه کنید:");
    console.log(`TELEGRAM_CHAT_ID=${chatId}\n`);
  }

  if (!useForm) {
    await botApi("sendMessage", {
      chat_id: chatId,
      text: [
        "✅ <b>اتصال ربات آتیوار برقرار است</b>",
        "",
        "این یک پیام آزمایشی است. اگر آن را می‌بینید، توکن و chat_id درست هستند.",
        `زمان: ${new Date().toLocaleString("fa-IR")}`,
      ].join("\n"),
      parse_mode: "HTML",
      disable_web_page_preview: true,
    });

    console.log("✔ پیام آزمایشی به تلگرام ارسال شد.");
    console.log("حالا برای تست کامل فرم اجرا کنید: npm run contact:test");
    return;
  }

  const payload = {
    fullName: "کاربر آزمایشی",
    organization: "آزمون آتیوار",
    title: "تست فرم تماس",
    email: "test@example.com",
    phone: "09120000000",
    requestType: "مشاوره راهبردی و تحول دیجیتال",
    projectScale: "هنوز مشخص نیست",
    timeline: "هنوز مشخص نیست",
    message:
      "این یک درخواست آزمایشی برای بررسی ارسال نوتیفیکیشن فرم تماس به تلگرام است. لطفاً آن را واقعی در نظر نگیرید.",
    privacy: true,
    website: "",
  };

  console.log(`در حال ارسال درخواست آزمایشی به ${endpoint} …`);

  let response;
  try {
    response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(25_000),
    });
  } catch (error) {
    fail(`اتصال به سرور برقرار نشد: ${error.message}\nمطمئن شوید dev server روی این پورت در حال اجراست.`);
  }

  const body = await response.json().catch(() => ({}));

  if (!response.ok) {
    fail(`سرور پاسخ ${response.status} داد: ${JSON.stringify(body)}`);
  }

  console.log(`✔ پاسخ سرور: ${JSON.stringify(body)}`);
  console.log("پیام «درخواست جدید از وب‌سایت آتیوار» باید در تلگرام نمایش داده شود.");
  console.log("اگر پیامی نیامد، مقادیر .env را بررسی و dev server را دوباره راه‌اندازی کنید.");
}

main().catch((error) => {
  fail(`خطا: ${error.message}`);
});
