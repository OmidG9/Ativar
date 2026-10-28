# تنظیم GitHub Actions: Secrets & Variables برای Ativar

برو به: `Repository > Settings > Secrets and variables > Actions`

## ۱) Variables (برای بیلد)

این مقادیر با `NEXT_PUBLIC_` شروع می‌شن و داخل Dockerfile در زمان بیلد تزریق می‌شن. کافیه به‌صورت **Variables** ست شه، نیازی به Secrets ندارن.

| Name | Required | Example | توضیح |
|---|---|---|---|
| `NEXT_PUBLIC_ANALYTICS_SRC` | اختیاری | `https://plausible.io/js/script.js` | اسکریپت آنالیتیکس (Plausible/Umami و...) |
| `NEXT_PUBLIC_ANALYTICS_DOMAIN` | اختیاری | `ativar.ir` | دامنه تعریف شده برای آنالیتیکس |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | اختیاری | `xxxxxxxxxxxxxxxxxxxx` | کد تایید گوگل سرچ کنسول |
| `ATIVAR_ENV_FILE` | اختیاری | `/etc/ativar/ativar.env` | مسیر فایل env روی سرور (پیشنهاد شده همین بمونه) |

## ۲) Secrets (فقط Runtime)

این مقادیر **هیچ‌وقت** داخل ایمیج نمی‌رن و فقط توی فایل `/etc/ativar/ativar.env` روی سرور استفاده می‌شن.

| Name | Required | توضیح |
|---|---|---|
| `TELEGRAM_BOT_TOKEN` | اختیاری | توکن ربات تلگرام از BotFather |
| `TELEGRAM_CHAT_ID` | اختیاری | Chat ID مقصد برای دریافت فرم تماس |
| `RESEND_API_KEY` | اختیاری | API Key سرویس Resend |
| `CONTACT_TO_EMAIL` | اختیاری | ایمیل گیرنده فرم تماس |
| `CONTACT_FROM_EMAIL` | اختیاری | ایمیل فرستنده (باید در Resend Verify شده باشه) |
| `CONTACT_WEBHOOK_URL` | اختیاری | وبهوک دلخواه (Make, n8n, Zapier, Slack و...) |

> اگه هیچ‌کدوم از این مقادیر ست نشده باشن، طبق منطق پروژه در محیط `production` درخواست‌های فرم تماس با `503` رد می‌شن.
