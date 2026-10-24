import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import { faNumber } from "@/lib/number";

export const metadata = createMetadata({
  title: "مشاوره فین‌تک، هوش مصنوعی سازمانی و راهکارهای هوشمند کسب‌وکار",
  description:
    "آتیوار مجموعه تخصصی مشاوره، طراحی و اجرای راهکارهای فین‌تک، معماری مالی دیجیتال و هوش مصنوعی سازمانی؛ از مشاوره و طراحی تا اجرا و بهره‌برداری.",
  path: "/",
});

const problems = [
  {
    title: "اطلاعات سازمان پراکنده است",
    description: "فایل‌ها، گزارش‌ها و سامانه‌های متعدد، دسترسی سریع به اطلاعات درست را دشوار می‌کند.",
  },
  {
    title: "فرایندهای تکراری زمان می‌برند",
    description: "فعالیت‌های دستی و تکراری، فرصت تحلیل و تصمیم‌گیری را از تیم می‌گیرند.",
  },
  {
    title: "گزارش‌های مدیریتی به‌موقع نیستند",
    description: "تصمیم سریع، به داده‌های دقیق و در دسترس در قالب بینش مدیریتی نیاز دارد.",
  },
  {
    title: "هوش مصنوعی بدون کنترل، ریسک است",
    description: "بدون سیاست دسترسی، محل پردازش و نظارت انسانی، استفاده سازمانی از AI مخاطره‌آمیز است.",
  },
];

const services = [
  {
    title: "مشاوره و تحول دیجیتال",
    description: "تحلیل نیاز، تدوین نقشه راه و ارزیابی اقتصادی سرمایه‌گذاری فناوری.",
    output: "نقشه راه و اولویت‌های اجرایی",
    href: "/services/consulting",
  },
  {
    title: "هوش مصنوعی سازمانی",
    description: "طراحی دستیارهای هوشمند، استفاده از دانش سازمان و هوشمندسازی فرایندها.",
    output: "محیط یا دستیار متناسب با سازمان",
    href: "/solutions/enterprise-ai",
  },
  {
    title: "راهکارهای فین‌تک",
    description: "طراحی معماری خدمات مالی دیجیتال، زیرساخت‌های مالی و راهکارهای مرتبط.",
    output: "سند معماری و برنامه پیاده‌سازی",
    href: "/solutions/fintech",
  },
  {
    title: "طراحی و اجرای پروژه",
    description: "معماری، یکپارچه‌سازی، توسعه، استقرار و پشتیبانی راهکارهای تخصصی.",
    output: "راهکار اجراشده با معیار پذیرش مشخص",
    href: "/services/implementation",
  },
];

const process = [
  { title: "شناخت مسئله", desc: "بررسی اهداف، فرایندها و محدودیت‌ها" },
  { title: "ارزیابی", desc: "تحلیل داده، زیرساخت و ریسک‌ها" },
  { title: "طراحی راهکار", desc: "معماری، دامنه کار و برآورد شفاف" },
  { title: "اجرا و استقرار", desc: "پیاده‌سازی مرحله‌ای و آزمون کیفیت" },
  { title: "سنجش و بهبود", desc: "ارزیابی نتایج و توسعه تدریجی" },
];

const layers = [
  "داده و دانش سازمان",
  "مدل‌ها و سرویس‌های هوش مصنوعی",
  "محیط اختصاصی و کنترل دسترسی",
  "دستیارها و پشتیبانی از تصمیم",
];

const intelligenceLevels = [
  {
    title: "ATIVAR Data Intelligence",
    description: "داده‌های پراکنده سازمان یکپارچه و به بینش مدیریتی قابل اقدام تبدیل می‌شوند.",
    items: ["یکپارچه‌سازی منابع داده", "داشبوردهای مدیریتی", "تحلیل روند و پیش‌بینی"],
  },
  {
    title: "ATIVAR Knowledge Intelligence",
    description: "دانش، تجربه و اسناد سازمان به منبعی هوشمند و جست‌وجوپذیر تبدیل می‌شود.",
    items: ["جست‌وجوی معنایی", "بازیابی دانش سازمان", "پاسخ‌گویی مبتنی بر اسناد"],
  },
  {
    title: "ATIVAR Enterprise LLM",
    description: "محیط هوش مصنوعی اختصاصی با کنترل دسترسی، سیاست امنیتی و نظارت انسانی.",
    items: ["دستیار هوشمند اختصاصی", "کنترل دسترسی و سیاست‌ها", "استقرار خصوصی"],
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-border">
        <div className="container-custom grid gap-14 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:py-24">
          <div>
            <p className="flex items-center gap-3 text-xs font-medium text-text-secondary">
              <span className="h-px w-8 bg-brand-accent" aria-hidden="true" />
              مشاوره، معماری و اجرا
            </p>

            <h1 className="mt-6 text-balance text-[2.1rem] font-bold leading-[1.35] tracking-tight text-text-primary sm:text-5xl sm:leading-[1.3] lg:text-[3.3rem]">
              زیرساخت هوش مصنوعی برای
              <span className="text-brand-primary"> تصمیم‌های بهتر </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-text-secondary sm:text-lg sm:leading-9">
              آتیوار شریک سازمان‌ها در طراحی، استقرار و توسعه راهکارهای فین‌تک و هوش مصنوعی سازمانی است؛ از مشاوره راهبردی و معماری تا اجرا و انتقال دانش.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3">
              <Link href="/contact" className="btn btn-primary">
                درخواست جلسه مشاوره
              </Link>
              <Link
                href="/services/consulting"
                className="text-sm font-semibold text-brand-primary underline-offset-4 hover:underline"
              >
                مشاهده خدمات و راهکارها ←
              </Link>
            </div>

            <ul className="mt-12 flex flex-wrap gap-x-7 gap-y-3 text-sm text-text-secondary">
              {["مسئله‌محور", "کنترل‌شده", "قابل اجرا"].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-brand-accent" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-border bg-white p-6 sm:p-8">
            <div className="flex items-center justify-between">
              <p className="text-xs font-medium text-text-secondary">لایه‌های راهکار</p>
              <span className="h-1.5 w-1.5 rounded-full bg-brand-accent" aria-hidden="true" />
            </div>
            <ol className="mt-6 space-y-2.5">
              {layers.map((layer, index) => (
                <li
                  key={layer}
                  className="flex items-center gap-3 rounded-xl border border-border/70 px-4 py-3"
                >
                  <span className="text-[11px] tabular-nums text-text-secondary">
                    {faNumber(index + 1)}
                  </span>
                  <span className="text-sm text-text-primary">{layer}</span>
                </li>
              ))}
            </ol>
            <p className="mt-6 text-xs leading-6 text-text-secondary">
              هر لایه بر اساس نیاز، زیرساخت و الزامات امنیتی سازمان طراحی و پیکربندی می‌شود.
            </p>
          </div>
        </div>
      </section>

      {/* Problems */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <div>
              <p className="text-xs font-medium text-text-secondary">۰۱ / مسئله</p>
              <h2 className="section-title mt-4">
                فناوری زمانی ارزشمند است که مسئله واقعی را حل کند.
              </h2>
              <p className="section-subtitle">
                آتیوار پیش از پیشنهاد فناوری، مسئله سازمان را شناسایی و راهکار متناسب طراحی می‌کند.
              </p>
            </div>

            <div className="grid gap-x-10 sm:grid-cols-2">
              {problems.map((item, index) => (
                <div key={item.title} className="border-t border-border py-5">
                  <p className="text-[11px] tabular-nums text-text-secondary">
                    {faNumber(index + 1)}
                  </p>
                  <h3 className="mt-2 text-base font-semibold text-text-primary">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-text-secondary">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding border-y border-border bg-[#FAFCFD]">
        <div className="container-custom">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-medium text-text-secondary">۰۲ / خدمات</p>
              <h2 className="section-title mt-4">از تعریف مسئله تا اجرا</h2>
              <p className="section-subtitle">
                هر خدمت با خروجی ملموس و قابل اندازه‌گیری تعریف شده است.
              </p>
            </div>
            <Link
              href="/services/consulting"
              className="text-sm font-semibold text-brand-primary underline-offset-4 hover:underline"
            >
              مشاهده همه خدمات ←
            </Link>
          </div>

          <div className="mt-10 border-t border-border">
            {services.map((service, index) => (
              <Link
                key={service.title}
                href={service.href}
                className="group grid gap-3 border-b border-border py-6 transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent/40 sm:grid-cols-[auto_1.2fr_1fr_auto] sm:items-center sm:gap-6 sm:px-2"
              >
                <span className="text-xs tabular-nums text-text-secondary">
                  {faNumber(index + 1)}
                </span>
                <div>
                  <h3 className="text-base font-semibold text-text-primary group-hover:text-brand-primary">
                    {service.title}
                  </h3>
                  <p className="mt-1 text-sm leading-7 text-text-secondary">{service.description}</p>
                </div>
                <p className="text-xs leading-6 text-text-secondary">
                  <span className="block text-text-secondary">خروجی</span>
                  {service.output}
                </p>
                <span
                  aria-hidden="true"
                  className="hidden text-brand-primary transition-transform group-hover:-translate-x-1 sm:block"
                >
                  ←
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Intelligence levels */}
      <section className="section-padding">
        <div className="container-custom">
          <p className="text-xs font-medium text-text-secondary">۰۳ / هوش مصنوعی سازمانی</p>
          <div className="mt-4 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="section-title">سه سطح هوشمندی سازمانی</h2>
            <p className="max-w-md text-sm leading-7 text-text-secondary">
              مسیر تحول هوشمند سازمان از داده تا تصمیم‌گیری، با کنترل، امنیت و نظارت انسانی.
            </p>
          </div>

          <div className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-3">
            {intelligenceLevels.map((level, index) => (
              <div key={level.title} className="border-t border-border pt-5">
                <p className="text-xs tabular-nums text-text-secondary">{faNumber(index + 1)}</p>
                <h3 className="mt-2 text-base font-semibold text-text-primary">{level.title}</h3>
                <p className="mt-2 text-sm leading-7 text-text-secondary">{level.description}</p>
                <ul className="mt-4 space-y-1.5 text-sm text-text-secondary">
                  {level.items.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="h-1 w-1 rounded-full bg-brand-accent" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Link
              href="/solutions/enterprise-ai"
              className="text-sm font-semibold text-brand-primary underline-offset-4 hover:underline"
            >
              بررسی راهکارهای هوش مصنوعی سازمانی ←
            </Link>
          </div>
        </div>
      </section>

      {/* AI Workspace */}
      <section className="section-padding">
        <div className="container-custom grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <p className="text-xs font-medium text-text-secondary">۰۴ / محصول</p>
            <h2 className="section-title mt-4">یک محیط هوش مصنوعی متناسب با سازمان شما</h2>
            <p className="section-subtitle">
              کارکنان سازمان در یک محیط کنترل‌شده از اسناد، داده و دانش داخلی برای جست‌وجو، تحلیل و انجام وظایف تخصصی استفاده می‌کنند.
            </p>
            <Link
              href="/products/ai-workspace"
              className="mt-8 inline-flex text-sm font-semibold text-brand-primary underline-offset-4 hover:underline"
            >
              معرفی ATIVAR AI Workspace ←
            </Link>
          </div>

          <div className="flex flex-col gap-3 text-sm">
            <div className="rounded-xl border border-border px-5 py-4 text-text-secondary">
              اسناد و داده‌های سازمان
            </div>
            <div className="flex items-center gap-3 px-5 text-xs text-text-secondary">
              <span className="h-px flex-1 bg-border" aria-hidden="true" />
              پردازش کنترل‌شده
            </div>
            <div className="rounded-xl border border-brand-primary/20 bg-brand-light px-5 py-4 font-medium text-text-primary">
              محیط اختصاصی هوش مصنوعی
            </div>
            <div className="flex items-center gap-3 px-5 text-xs text-text-secondary">
              <span className="h-px flex-1 bg-border" aria-hidden="true" />
              نظارت انسانی
            </div>
            <div className="rounded-xl border border-border px-5 py-4 text-text-secondary">
              پاسخ، تحلیل و پشتیبانی از تصمیم
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding border-y border-border bg-[#FAFCFD]">
        <div className="container-custom">
          <p className="text-xs font-medium text-text-secondary">۰۵ / فرایند</p>
          <div className="mt-4 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="section-title">آتیوار چگونه کار می‌کند؟</h2>
            <p className="max-w-md text-sm leading-7 text-text-secondary">
              دامنه کار، هزینه، زمان‌بندی، مسئولیت‌ها و معیارهای پذیرش پیش از شروع مشخص می‌شوند.
            </p>
          </div>

          <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
            {process.map((step, index) => (
              <li key={step.title} className="border-t border-border pt-5">
                <p className="text-xs tabular-nums text-text-secondary">
                  {faNumber(index + 1)}
                </p>
                <h3 className="mt-2 text-base font-semibold text-text-primary">{step.title}</h3>
                <p className="mt-2 text-sm leading-7 text-text-secondary">{step.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-custom max-w-3xl text-center">
          <h2 className="section-title">برای مسئله سازمان شما، راهکار مناسب چیست؟</h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-text-secondary">
            در یک جلسه اولیه، مسئله، هدف مورد انتظار و محدودیت‌های سازمان شما را بررسی می‌کنیم.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link href="/contact" className="btn btn-primary">
              درخواست جلسه مشاوره
            </Link>
            <Link
              href="/insights"
              className="text-sm font-semibold text-text-primary underline-offset-4 hover:underline"
            >
              مطالعه مقالات تخصصی ←
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
