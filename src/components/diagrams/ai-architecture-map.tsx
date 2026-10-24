import { faNumber } from "@/lib/number";

const layers = [
  {
    tag: "ورودی",
    title: "منابع داده و دانش سازمان",
    detail: "اسناد، پایگاه‌های داده، سامانه‌های داخلی و فرایندهای کاری",
  },
  {
    tag: "داده",
    title: "پردازش و آماده‌سازی",
    detail: "استخراج، پاک‌سازی، قطعه‌بندی متن و نمایه‌سازی معنایی",
  },
  {
    tag: "هوش",
    title: "مدل و سرویس هوش مصنوعی",
    detail: "مدل‌های زبانی، سرویس‌های تخصصی و زنجیره‌های انجام وظیفه",
  },
  {
    tag: "تجربه",
    title: "دستیار و رابط کاربری",
    detail: "پرسش و پاسخ، تحلیل، تولید پیش‌نویس و گردش‌کار سازمانی",
  },
];

const controls = [
  "کنترل دسترسی و نقش‌های کاربری",
  "سیاست نگهداری و محل پردازش داده",
  "ثبت رویداد و قابلیت ردیابی",
  "ارزیابی کیفیت پاسخ و منابع",
  "نظارت انسانی در تصمیم‌های حساس",
];

/**
 * Brand-specific AI architecture diagram. Intentionally static so it stays
 * readable without JavaScript, keyboard-operable and RTL-safe.
 */
export function AiArchitectureMap() {
  return (
    <figure className="mt-10">
      <div className="grid gap-6 lg:grid-cols-[1.4fr_0.6fr] lg:gap-10">
        <div>
          <div className="flex items-center justify-between text-xs text-text-secondary">
            <p className="font-medium">جریان کار از داده تا تصمیم</p>
            <p>۴ لایه</p>
          </div>

          <ol className="mt-4">
            {layers.map((layer, index) => (
              <li
                key={layer.title}
                className="grid gap-2 border-t border-border py-4 sm:grid-cols-[auto_1fr] sm:items-baseline sm:gap-5"
              >
                <span className="text-[11px] tabular-nums text-text-secondary">
                  {faNumber(index + 1)}
                </span>
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="text-sm font-semibold text-text-primary">{layer.title}</p>
                    <span className="rounded-full border border-border px-2 py-0.5 text-[10px] text-text-secondary">
                      {layer.tag}
                    </span>
                  </div>
                  <p className="mt-1 text-xs leading-6 text-text-secondary">{layer.detail}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="border-t border-border pt-4">
            <p className="text-xs text-text-secondary">
              خروجی: پاسخ مستند، تحلیل قابل بررسی و پشتیبانی از تصمیم — نه جایگزینی برای تصمیم‌گیرنده.
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-brand-light/50 p-5">
          <p className="text-xs font-medium text-text-secondary">حاکمیت و کنترل</p>
          <p className="mt-2 text-sm font-semibold text-text-primary">
            در همه لایه‌ها اعمال می‌شود
          </p>
          <ul className="mt-4 space-y-2.5 text-xs leading-6 text-text-secondary">
            {controls.map((control) => (
              <li key={control} className="flex gap-2">
                <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-brand-accent" aria-hidden="true" />
                {control}
              </li>
            ))}
          </ul>
          <p className="mt-5 border-t border-border pt-4 text-xs leading-6 text-text-secondary">
            شکل و شدت این کنترل‌ها بر اساس الزامات سازمان و سطح حساسیت داده تعیین می‌شود.
          </p>
        </div>
      </div>

      <figcaption className="sr-only">
        نقشه معماری راهکار هوش مصنوعی سازمانی آتیوار در چهار لایه: منابع داده و دانش، پردازش و
        آماده‌سازی، مدل و سرویس هوش مصنوعی، و دستیار و رابط کاربری. کنترل دسترسی، سیاست داده،
        ثبت رویداد، ارزیابی کیفیت پاسخ و نظارت انسانی در تمام لایه‌ها اعمال می‌شود.
      </figcaption>
    </figure>
  );
}
