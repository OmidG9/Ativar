# وب‌سایت آتیوار | ATIVAR

وب‌سایت سازمانی آتیوار؛ مشاوره فین‌تک، هوش مصنوعی سازمانی، معماری راهکارهای مالی دیجیتال و اجرای پروژه‌های فناوری.

## ویژگی‌ها

- فارسی و RTL با فونت محلی Vazirmatn
- Next.js 15 (App Router) + TypeScript + Tailwind CSS
- طراحی مینیمال و مسئله‌محور با تمرکز بر تبدیل بازدیدکننده به سرنخ
- متادیتای اختصاصی و Canonical برای هر صفحه، Open Graph، sitemap، robots و manifest
- داده ساختاریافته Organization و WebSite (JSON-LD)
- فرم تماس با اعتبارسنجی دوطرفه، ضداسپم (Honeypot + Rate Limit) و ارسال هم‌زمان به **بات تلگرام** و **ایمیل**
- بخش «مسئله / رویکرد / ارزش / پرسش‌های متداول» در صفحات خدمات و راهکارها، همراه با FAQ Schema
- صفحات مقاله با متادیتای اختصاصی، Article Schema و فهرست خودکار در sitemap
- صفحه مطالعه موردی با ساختار شفاف و تفکیک اطلاعات تأییدشده از اطلاعات در انتظار انتشار
- CI با GitHub Actions: lint، typecheck، تست و build
- هدرهای امنیتی، دسترس‌پذیری پایه (Skip Link، Focus State، برچسب فرم‌ها) و احترام به `prefers-reduced-motion`

## راه‌اندازی

```bash
npm install
npm run dev
```

سایت روی `http://localhost:3000` در دسترس است.

### اسکریپت‌ها

| دستور | توضیح |
|---|---|
| `npm run dev` | اجرای محیط توسعه |
| `npm run build` | ساخت نسخه تولید |
| `npm run start` | اجرای نسخه ساخته‌شده |
| `npm run lint` | بررسی ESLint |
| `npm run typecheck` | بررسی TypeScript |
| `npm test` | اجرای تست‌های واحد و یکپارچه (Vitest) |
| `npm run test:watch` | اجرای تست‌ها در حالت watch |

## پیکربندی فرم تماس

فرم در `src/app/api/contact/route.ts` اعتبارسنجی می‌شود و سپس از طریق `src/lib/contact-delivery.ts` به **همه مقصدهای فعال** و به‌صورت موازی ارسال می‌گردد. فایل `.env.example` را به `.env.local` کپی کنید.

**۱) بات تلگرام (پیشنهادی برای اطلاع سریع):**

```env
TELEGRAM_BOT_TOKEN=123456:ABC...
TELEGRAM_CHAT_ID=-1001234567890
```

ربات را با BotFather بسازید، به گروه یا چت موردنظر اضافه کنید و `chat_id` را از `getUpdates` یا `@userinfobot` بگیرید.

**۲) ایمیل با Resend:**

```env
RESEND_API_KEY=re_...
CONTACT_TO_EMAIL=info@example.com
CONTACT_FROM_EMAIL=website@example.com
```

**۳) وبهوک عمومی (اختیاری):**

```env
CONTACT_WEBHOOK_URL=https://example.com/webhook
```

### رفتار ارسال

- درخواست هم‌زمان به همه مقصدهای فعال ارسال می‌شود و **اگر دست‌کم یکی موفق شود**، ثبت درخواست موفق در نظر گرفته می‌شود.
- اگر یکی از مقصدها خطا بدهد، خطا فقط در لاگ سرور (بدون اطلاعات شخصی) ثبت می‌شود و کاربر پیام موفقیت می‌بیند.
- اگر **همه** مقصدها ناموفق باشند، پاسخ `502` برگردانده می‌شود.
- اگر هیچ مقصدی تنظیم نشده باشد:
  - در محیط توسعه درخواست پذیرفته می‌شود اما ارسال نمی‌گردد (بدون ثبت اطلاعات شخصی در لاگ).
  - در production پاسخ `503` برگردانده می‌شود. هیچ موفقیت ساختگی نمایش داده نمی‌شود.

> برای آزمون محلی می‌توانید `TELEGRAM_API_BASE` و `RESEND_API_BASE` را به یک سرور mock اشاره دهید. تست‌های `tests/contact-route.integration.test.ts` همین مسیر را با HTTP واقعی پوشش می‌دهند.

> محدودیت نرخ درخواست در حافظه سرور نگهداری می‌شود. برای استقرار چندنمونه‌ای (serverless) از یک سرویس مشترک مانند Redis استفاده کنید.

## تحلیل بازدید و Search Console

به‌صورت پیش‌فرض هیچ اسکریپت تحلیلی بارگذاری نمی‌شود. برای فعال‌سازی:

```env
NEXT_PUBLIC_ANALYTICS_SRC=https://plausible.io/js/script.js
NEXT_PUBLIC_ANALYTICS_DOMAIN=ativar.ir
```

سازگار با Plausible، Umami و سرویس‌های مشابه. برای تأیید مالکیت در Google Search Console نیز می‌توانید `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` را تنظیم کنید.

## ساختار پروژه

```text
src/
├── app/                  # صفحات، API و فایل‌های SEO
│   ├── api/contact/      # دریافت، اعتبارسنجی و ارسال فرم
│   ├── insights/[slug]/  # صفحات مقاله
│   ├── projects/[slug]/  # مطالعه موردی
│   ├── opengraph-image.tsx
│   ├── manifest.ts
│   ├── sitemap.ts
│   ├── robots.ts
│   ├── error.tsx
│   └── loading.tsx
├── components/
│   ├── brand/            # لوگو
│   ├── diagrams/         # نقشه معماری AI، نقشه قابلیت فین‌تک، مسیر همکاری
│   ├── forms/            # فرم تماس
│   ├── layout/           # هدر و فوتر
│   ├── sections/         # بخش مشترک مسئله/رویکرد/ارزش/FAQ
│   └── analytics.tsx     # اتصال اختیاری تحلیل بازدید
├── content/              # محتوای مقالات و مطالعات موردی
└── lib/                  # تنظیمات سایت، متادیتا، شماره‌گذاری فارسی، ارسال فرم
tests/                    # تست‌های واحد و یکپارچه
.github/workflows/ci.yml  # lint + typecheck + test + build
```

> برای ساخت ایزوله در زمانی که یک dev server روی `.next` کار می‌کند، می‌توانید `NEXT_DIST_DIR=.next-verify npm run build` را اجرا کنید.

## سیاست محتوا

هیچ آمار، مشتری، مجوز یا رزومه ساختگی در سایت درج نشده است. اطلاعات ناقص با متن شفاف مشخص شده‌اند.

## اطلاعات لازم برای انتشار نهایی

- لوگوی رسمی (نسخه SVG نهایی)
- تصاویر و رزومه تأییدشده اعضای تیم
- مستندات کامل مطالعه موردی فلزات گران‌بها (نتایج و مجوز انتشار)
- اطلاعات تماس رسمی (ایمیل، تلفن، نشانی)
- اعتبارنامه بات تلگرام، کلید Resend و ایمیل مقصد
- مجوزها یا گواهینامه‌های قابل انتشار
- انتخاب سرویس تحلیل بازدید و تأیید Search Console

## لایسنس

تمامی حقوق برای برند آتیوار محفوظ است.
