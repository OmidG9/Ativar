# ATIVAR brand assets

این پوشه به‌صورت خودکار از فایل مادر زیر ساخته می‌شود:

```
public/ativar_logo_transparent_5000x5000.svg
```

برای بازسازی همهٔ فایل‌ها بعد از تغییر لوگو:

```bash
node scripts/generate-brand-assets.mjs
```

> اسکریپت از `sharp` استفاده می‌کند که همراه Next.js نصب می‌شود.

## لوگوها

| فایل | کاربرد |
| --- | --- |
| `ativar-logo.svg` | لوگوی کامل (نماد + نوشته) برای وب، مقیاس‌پذیر |
| `ativar-logo.png` | لوگوی کامل، ۱۲۰۰ پیکسل عرض، پس‌زمینه شفاف |
| `ativar-logo-white.png` | نسخه سفید لوگوی کامل برای پس‌زمینه تیره |
| `ativar-mark.svg` | فقط نماد (نشان) برای وب |
| `ativar-mark.png` | فقط نماد، ۵۱۲ پیکسل عرض، شفاف |
| `ativar-mark-white.png` | نماد سفید برای پس‌زمینه تیره |
| `ativar-wordmark.svg` | فقط نوشته ATIVAR برای وب |
| `ativar-wordmark.png` | فقط نوشته ATIVAR، ۱۲۰۰ پیکسل عرض |

## آیکون‌ها

| فایل | کاربرد |
| --- | --- |
| `favicon.ico` (و `public/favicon.ico`) | فاوآیکون کلاسیک ۱۶/۳۲/۴۸ |
| `favicon-16.png` / `favicon-32.png` / `favicon-48.png` | فاوآیکون PNG |
| `icon-96.png` … `icon-512.png` | آیکون اپلیکیشن / PWA |
| `apple-touch-icon.png` | آیکون ۱۸۰×۱۸۰ برای iOS (پس‌زمینه سفید) |
| `icon-maskable-512.png` | آیکون maskable اندروید (پس‌زمینه سفید) |

آیکون‌ها از «نماد» لوگو ساخته می‌شوند و داخل بوم مربع با حاشیهٔ ۱۰٪ قرار می‌گیرند.

## رنگ‌های برند

- نارنجی: `#FB5900`
- آبی: `#002E90`

فایل مادر (`public/ativar_logo_transparent_5000x5000.svg`) در واقع یک PNG ۵۰۰۰×۵۰۰۰ است که داخل SVG جاسازی شده؛ برای همین در وب از خروجی‌های بهینهٔ همین پوشه استفاده می‌شود، نه از فایل مادر.
