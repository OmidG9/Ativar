import { faNumber } from "@/lib/number";

const domains = [
  {
    title: "راهبرد و مدل کسب‌وکار",
    items: ["تحلیل بازار و رقبا", "طراحی مدل درآمد", "نقشه راه محصول", "ارزیابی ریسک"],
  },
  {
    title: "معماری و زیرساخت",
    items: ["معماری سامانه‌های مالی", "طراحی و مستندسازی API", "یکپارچه‌سازی سامانه‌ها", "پایداری و مقیاس‌پذیری"],
  },
  {
    title: "داده و هوش",
    items: ["مدل داده مالی", "گزارش مدیریتی", "تحلیل و پیش‌بینی", "هوش مصنوعی با نظارت انسانی"],
  },
  {
    title: "کنترل و انطباق",
    items: ["کنترل دسترسی", "ردگیری و ثبت رویداد", "تفکیک وظایف", "الزامات مجوز و انطباق"],
  },
];

const shared = ["امنیت", "کیفیت داده", "مستندسازی", "مدیریت تغییر"];

/**
 * Capability map for the FinTech page. Shows the consulting and engineering
 * domains only; it deliberately does not imply any licensed financial service.
 */
export function FintechCapabilityMap() {
  return (
    <figure className="mt-10">
      <div className="grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
        {domains.map((domain, index) => (
          <div key={domain.title} className="border-t border-border pt-5">
            <p className="text-[11px] tabular-nums text-text-secondary">{faNumber(index + 1)}</p>
            <h3 className="mt-2 text-sm font-semibold text-text-primary">{domain.title}</h3>
            <ul className="mt-3 space-y-1.5 text-xs leading-6 text-text-secondary">
              {domain.items.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-brand-accent" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-8 flex flex-col gap-3 rounded-2xl border border-border bg-brand-light/50 p-5 sm:flex-row sm:items-center sm:gap-6">
        <p className="text-xs font-medium text-text-secondary">لایه مشترک همه حوزه‌ها</p>
        <ul className="flex flex-wrap gap-x-5 gap-y-2 text-xs text-text-primary">
          {shared.map((item) => (
            <li key={item} className="flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-brand-accent" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      <figcaption className="sr-only">
        نقشه قابلیت‌های فین‌تک آتیوار در چهار حوزه: راهبرد و مدل کسب‌وکار، معماری و زیرساخت، داده
        و هوش، و کنترل و انطباق. امنیت، کیفیت داده، مستندسازی و مدیریت تغییر در همه حوزه‌ها مشترک است.
        این نقشه صرفاً مشاوره، معماری و مهندسی نرم‌افزار را پوشش می‌دهد.
      </figcaption>
    </figure>
  );
}
