import { faNumber } from "@/lib/number";

const steps = [
  {
    title: "جلسه اولیه",
    detail: "شناخت مسئله، هدف مورد انتظار و محدودیت‌های سازمان.",
    output: "خلاصه مسئله و گزینه‌های همکاری",
  },
  {
    title: "ارزیابی و امکان‌سنجی",
    detail: "بررسی داده، زیرساخت، ریسک و برآورد هزینه و زمان.",
    output: "گزارش ارزیابی و برآورد اولیه",
  },
  {
    title: "تعریف دامنه و توافق",
    detail: "دامنه کار، معیار پذیرش، زمان‌بندی و مسئولیت‌ها.",
    output: "سند دامنه کار",
  },
  {
    title: "طراحی و اجرای مرحله‌ای",
    detail: "معماری، پیاده‌سازی و آزمون در بازه‌های قابل بررسی.",
    output: "نسخه قابل ارزیابی",
  },
  {
    title: "استقرار و انتقال دانش",
    detail: "راه‌اندازی، آموزش کاربران و تحویل مستندات.",
    output: "راهکار عملیاتی و مستندات",
  },
  {
    title: "سنجش و بهبود",
    detail: "پایش نتایج، رفع اشکال و توسعه تدریجی.",
    output: "گزارش عملکرد و برنامه بهبود",
  },
];

/**
 * Shared engagement journey. Each step states a concrete deliverable so the
 * process stays verifiable instead of decorative.
 */
export function EngagementJourney() {
  return (
    <figure className="mt-10">
      <ol className="grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
        {steps.map((step, index) => (
          <li key={step.title} className="border-t border-border pt-5">
            <p className="text-[11px] tabular-nums text-text-secondary">{faNumber(index + 1)}</p>
            <h3 className="mt-2 text-sm font-semibold text-text-primary">{step.title}</h3>
            <p className="mt-1.5 text-xs leading-6 text-text-secondary">{step.detail}</p>
            <p className="mt-3 text-xs leading-6 text-text-secondary">
              <span className="text-text-secondary">خروجی: </span>
              <span className="text-text-primary">{step.output}</span>
            </p>
          </li>
        ))}
      </ol>

      <p className="mt-8 border-t border-border pt-4 text-xs leading-6 text-text-secondary">
        بازه زمانی، هزینه و سطح تعهد هر مرحله پیش از شروع نوشته و توافق می‌شود؛ مرحله بعد تنها با
        تأیید خروجی مرحله قبل آغاز می‌گردد.
      </p>

      <figcaption className="sr-only">
        مسیر همکاری آتیوار در شش مرحله: جلسه اولیه، ارزیابی و امکان‌سنجی، تعریف دامنه و توافق،
        طراحی و اجرای مرحله‌ای، استقرار و انتقال دانش، و سنجش و بهبود. هر مرحله خروجی مشخصی دارد.
      </figcaption>
    </figure>
  );
}
