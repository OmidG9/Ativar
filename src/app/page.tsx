import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import { faNumber } from "@/lib/number";

export const metadata = createMetadata({
  title: "مشاوره فین‌تک، هوش مصنوعی سازمانی و راهکارهای هوشمند کسب‌وکار | آتیوار",
  description:
    "آتیوار شریک پروژه‌محور سازمان‌ها در مشاوره، معماری، طراحی و اجرای راهکارهای فین‌تک، معماری مالی دیجیتال و هوش مصنوعی سازمانی؛ با رویکرد کنترل‌شده، امن و قابل اجرا.",
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
    description: "تحلیل نیاز، شناسایی فرصت‌ها، تدوین نقشه راه و ارزیابی اقتصادی سرمایه‌گذاری فناوری.",
    output: "نقشه راه اجرایی و اولویت‌بندی‌شده",
    href: "/services/consulting",
  },
  {
    title: "هوش مصنوعی سازمانی",
    description: "طراحی محیط‌های هوش مصنوعی اختصاصی متناسب با دانش، داده، فرایندها و الزامات امنیتی سازمان.",
    output: "محیط یا دستیار هوشمند سازمانی",
    href: "/solutions/enterprise-ai",
  },
  {
    title: "راهکارهای فین‌تک",
    description: "طراحی معماری خدمات مالی دیجیتال، یکپارچه‌سازی و راهکارهای متناسب با نیازهای کسب‌وکار.",
    output: "سند معماری فنی و برنامه پیاده‌سازی",
    href: "/solutions/fintech",
  },
  {
    title: "طراحی و اجرای پروژه",
    description: "از معماری و تحلیل تا توسعه، یکپارچه‌سازی، استقرار، آموزش و پشتیبانی مرحله‌ای.",
    output: "راهکار اجراشده با معیارهای پذیرش از پیش تعیین‌شده",
    href: "/services/implementation",
  },
];

const process = [
  { title: "شناخت مسئله", desc: "بررسی اهداف راهبردی، فرایندها، داده‌ها و محدودیت‌های سازمان" },
  { title: "ارزیابی فنی و اقتصادی", desc: "تحلیل زیرساخت، ریسک‌ها، اولویت‌ها و توجیه‌پذیری سرمایه‌گذاری" },
  { title: "طراحی راهکار", desc: "تهیه معماری، دامنه کار، زمان‌بندی، هزینه و معیارهای پذیرش شفاف" },
  { title: "اجرا و استقرار", desc: "پیاده‌سازی مرحله‌ای، یکپارچه‌سازی، آزمون و آموزش تیم" },
  { title: "سنجش، انتقال دانش و پشتیبانی", desc: "ارزیابی دستیابی به اهداف، انتقال دانش و راهنمایی برای توسعه تدریجی" },
];

const journey = [
  {
    step: "۰۱",
    title: "داده و دانش سازمان",
    desc: "یکپارچه‌سازی اسناد، گزارش‌ها، سامانه‌ها و منابع اطلاعاتی",
  },
  {
    step: "۰۲",
    title: "بینش و تحلیل هوشمند",
    desc: "تبدیل داده‌ها به داشبوردها و بینش‌های قابل اقدام برای مدیریت",
  },
  {
    step: "۰۳",
    title: "دانش قابل جست‌وجو",
    desc: "ایجاد پایگاه دانش سازمانی با قابلیت جست‌وجوی معنایی",
  },
  {
    step: "۰۴",
    title: "محیط هوش مصنوعی اختصاصی",
    desc: "دستیار هوشمند با کنترل دسترسی، سیاست‌های امنیتی و نظارت انسانی",
  },
];

const intelligenceLevels = [
  {
    title: "ATIVAR Data Intelligence",
    description: "داده‌های پراکنده سازمان یکپارچه و به بینش‌های مدیریتی قابل اقدام تبدیل می‌شوند.",
    items: ["یکپارچه‌سازی منابع داده", "داشبوردهای هوشمند مدیریتی", "تحلیل روند و پیش‌بینی"],
  },
  {
    title: "ATIVAR Knowledge Intelligence",
    description: "دانش، تجربه و اسناد سازمان به منبعی هوشمند، جست‌وجوپذیر و قابل استفاده تبدیل می‌شود.",
    items: ["جست‌وجوی معنایی", "بازیابی دانش سازمان", "پاسخ‌گویی مبتنی بر اسناد"],
  },
  {
    title: "ATIVAR Enterprise LLM",
    description: "محیط هوش مصنوعی اختصاصی با کنترل دسترسی، سیاست امنیتی، محرمانگی و نظارت انسانی.",
    items: ["دستیار هوشمند اختصاصی", "کنترل دسترسی و نقش‌محور", "استقرار در زیرساخت سازمان یا خصوصی"],
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border pt-8 pb-8">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(1200px_600px_at_80%_-10%,rgba(18,175,193,0.08),transparent)]" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(900px_500px_at_10%_-20%,rgba(23,107,155,0.07),transparent)]" />
        <div className="container-custom grid items-center gap-12 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:py-24">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-white/80 px-4 py-1.5 text-xs text-text-secondary shadow-subtle backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-accent" aria-hidden="true" />
              مشاوره، معماری و اجرای راهکارهای فین‌تک و هوش مصنوعی سازمانی
            </div>

            <h1 className="mt-6 text-balance text-[2.15rem] font-bold leading-[1.32] tracking-tight text-text-primary sm:text-5xl sm:leading-[1.28] lg:text-[3.6rem]">
              زیرساخت هوش مصنوعی کنترل‌شده برای
              <span className="text-brand-primary"> تصمیم‌های آگاهانه‌تر سازمان</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-text-secondary sm:text-lg sm:leading-9">
              آتیوار شریک پروژه‌محور سازمان‌ها در طراحی، معماری و استقرار راهکارهای هوش مصنوعی سازمانی و فین‌تک است.
              ما پیش از پیشنهاد هر فناوری، مسئله واقعی را شناسایی کرده و راهکاری امن، مسئله‌محور و کاملاً قابل اجرا ارائه می‌دهیم.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link href="/contact" className="btn btn-primary">
                درخواست جلسه مشاوره تخصصی
              </Link>
              <Link
                href="/solutions/enterprise-ai"
                className="btn btn-outline"
              >
                بررسی راهکارهای هوش مصنوعی سازمانی
              </Link>
            </div>

            <ul className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-text-secondary">
              {["مسئله‌محور", "امن و کنترل‌شده", "قابل استقرار در زیرساخت سازمان", "پروژه‌محور و نتیجه‌گرا"].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-brand-accent" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="absolute -left-6 -top-6 -z-10 hidden h-40 w-40 rounded-full bg-brand-accent/10 blur-3xl lg:block" />
            <div className="absolute -bottom-10 -right-10 -z-10 hidden h-48 w-48 rounded-full bg-brand-primary/10 blur-3xl lg:block" />
            <div className="relative overflow-hidden rounded-2xl border border-border bg-white shadow-[0_60px_120px_-80px_rgba(23,107,155,0.45)]">
              <div className="flex items-center justify-between border-b border-border/70 px-6 py-4 sm:px-8">
                <div>
                  <p className="text-sm font-semibold text-text-primary">مسیر هوشمندسازی سازمان</p>
                  <p className="mt-1 text-xs text-text-secondary">از داده تا دستیار هوشمند اختصاصی با نظارت انسانی</p>
                </div>
                <span className="h-2 w-2 rounded-full bg-brand-accent shadow-[0_0_0_6px_rgba(18,175,193,0.08)]" aria-hidden="true" />
              </div>
              <div className="relative px-6 py-6 sm:px-8 sm:py-7">
                <div className="absolute right-[2.35rem] top-6 bottom-6 hidden w-px bg-gradient-to-b from-brand-primary/40 via-brand-accent/30 to-transparent sm:block" />
                <ol className="space-y-4">
                  {journey.map((item) => (
                    <li key={item.step} className="relative flex gap-4 sm:gap-5">
                      <span className="relative z-10 flex h-9 w-9 items-center justify-center rounded-full border border-brand-primary/30 bg-white text-xs tabular-nums text-brand-primary shadow-subtle">
                        {item.step}
                      </span>
                      <div className="flex-1 rounded-xl border border-border/80 px-4 py-3 transition-colors hover:border-brand-primary/25 hover:bg-brand-light/40 sm:px-5 sm:py-4">
                        <p className="text-sm font-semibold text-text-primary">{item.title}</p>
                        <p className="mt-1 text-sm leading-7 text-text-secondary">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
              <div className="border-t border-border/70 px-6 py-4 text-xs leading-6 text-text-secondary sm:px-8">
                طراحی شده بر پایه کنترل دسترسی، حریم داده، استقرار خصوصی و پیش‌بینی نظارت انسانی
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* Trust Bar */}
      <section className="relative overflow-hidden border-b border-border bg-white py-5">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="group w-full overflow-hidden" dir="ltr">
          <div className="animate-marquee flex w-max items-center">
            <div className="flex items-center gap-12 whitespace-nowrap">
              <span className="text-sm text-text-primary">مشاوره فین‌تک</span>
              <span className="h-1 w-1 rounded-full bg-brand-accent" />
              <span className="text-sm text-text-primary">معماری مالی دیجیتال</span>
              <span className="h-1 w-1 rounded-full bg-brand-accent" />
              <span className="text-sm text-text-primary">هوش مصنوعی سازمانی</span>
              <span className="h-1 w-1 rounded-full bg-brand-accent" />
              <span className="text-sm text-text-primary">راهکارهای پروژه‌محور</span>
              <span className="h-1 w-1 rounded-full bg-brand-accent" />
              <span className="text-sm text-text-secondary">تمرکز بر سازمان‌های فنی، مالی و مدیریتی</span>
              <span className="h-1 w-1 rounded-full bg-brand-accent" />
              <span className="text-sm font-semibold text-text-primary">+۲۵</span>
              <span className="text-sm text-text-secondary">پروژه موفق در حوزه فین‌تک و هوش مصنوعی سازمانی</span>
              <span className="h-1 w-1 rounded-full bg-brand-accent" />
              <span className="text-sm text-text-primary">محیط هوش مصنوعی اختصاصی و کنترل‌شده</span>
              <span className="h-1 w-1 rounded-full bg-brand-accent" />
              <span className="text-sm text-text-primary">نظارت انسانی، محرمانگی و حریم داده</span>
              <span className="h-1 w-1 rounded-full bg-brand-accent" />
              <span className="text-sm text-text-primary">قابل استقرار در زیرساخت سازمان (On-Premise)</span>
              <span className="h-1 w-1 rounded-full bg-brand-accent" />
              <span className="text-sm text-text-primary">طراحی معماری، یکپارچه‌سازی و انتقال دانش</span>
              <span className="h-1 w-1 rounded-full bg-brand-accent" />
              <span className="text-sm text-text-primary">رویکرد مسئله‌محور و نتیجه‌گرا</span>
              <span className="h-1 w-1 rounded-full bg-brand-accent" />
              <span className="text-sm text-text-primary">شناسایی، ارزیابی و اجرای راهکارهای کاربردی</span>
              <span className="h-1 w-1 rounded-full bg-brand-accent" />
            </div>
            <div className="flex items-center gap-12 whitespace-nowrap" aria-hidden="true">
              <span className="text-sm text-text-primary">مشاوره فین‌تک</span>
              <span className="h-1 w-1 rounded-full bg-brand-accent" />
              <span className="text-sm text-text-primary">معماری مالی دیجیتال</span>
              <span className="h-1 w-1 rounded-full bg-brand-accent" />
              <span className="text-sm text-text-primary">هوش مصنوعی سازمانی</span>
              <span className="h-1 w-1 rounded-full bg-brand-accent" />
              <span className="text-sm text-text-primary">راهکارهای پروژه‌محور</span>
              <span className="h-1 w-1 rounded-full bg-brand-accent" />
              <span className="text-sm text-text-secondary">تمرکز بر سازمان‌های فنی، مالی و مدیریتی</span>
              <span className="h-1 w-1 rounded-full bg-brand-accent" />
              <span className="text-sm font-semibold text-text-primary">+۲۵</span>
              <span className="text-sm text-text-secondary">پروژه موفق در حوزه فین‌تک و هوش مصنوعی سازمانی</span>
              <span className="h-1 w-1 rounded-full bg-brand-accent" />
              <span className="text-sm text-text-primary">محیط هوش مصنوعی اختصاصی و کنترل‌شده</span>
              <span className="h-1 w-1 rounded-full bg-brand-accent" />
              <span className="text-sm text-text-primary">نظارت انسانی، محرمانگی و حریم داده</span>
              <span className="h-1 w-1 rounded-full bg-brand-accent" />
              <span className="text-sm text-text-primary">قابل استقرار در زیرساخت سازمان (On-Premise)</span>
              <span className="h-1 w-1 rounded-full bg-brand-accent" />
              <span className="text-sm text-text-primary">طراحی معماری، یکپارچه‌سازی و انتقال دانش</span>
              <span className="h-1 w-1 rounded-full bg-brand-accent" />
              <span className="text-sm text-text-primary">رویکرد مسئله‌محور و نتیجه‌گرا</span>
              <span className="h-1 w-1 rounded-full bg-brand-accent" />
              <span className="text-sm text-text-primary">شناسایی، ارزیابی و اجرای راهکارهای کاربردی</span>
              <span className="h-1 w-1 rounded-full bg-brand-accent" />
            </div>
          </div>
        </div>
      </section>

      {/* Problems */}
      <section className="py-16 sm:py-24 lg:py-28">
        <div className="container-custom">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <div>
              <p className="text-xs font-medium text-text-secondary">۰۱ / چالش‌های رایج سازمان‌ها</p>
              <h2 className="section-title mt-4">
                فناوری زمانی ارزش آفرین می‌شود که مسئله واقعی سازمان را حل کند.
              </h2>
              <p className="section-subtitle">
                آتیوار پیش از پیشنهاد هر راهکار، با نگاهی مسئله‌محور، ریشه چالش را بررسی و متناسب با واقعیت سازمان طراحی می‌کند.
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
      <section className="py-16 sm:py-24 lg:py-28 border-y border-border bg-[#FAFCFD]">
        <div className="container-custom">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-medium text-text-secondary">۰۲ / خدمات و ظرفیت اجرایی</p>
              <h2 className="section-title mt-4">از تعریف مسئله تا استقرار عملی</h2>
              <p className="section-subtitle">
                هر خدمت با دامنه شفاف، خروجی ملموس و معیار پذیرش مشخص تعریف می‌شود.
              </p>
            </div>
            <Link
              href="/services/consulting"
              className="text-sm font-semibold text-brand-primary underline-offset-4 hover:underline"
            >
              مشاهده همه خدمات و راهکارها ←
            </Link>
          </div>

          <div className="mt-10 border-t border-border">
            {services.map((service, index) => (
              <Link
                key={service.title}
                href={service.href}
                className="group grid gap-3 border-b border-border py-6 transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent/40 sm:grid-cols-[auto_1.2fr_1fr_auto] sm:items-center sm:gap-6 sm:px-3"
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
                  <span className="block text-text-secondary/80">خروجی</span>
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
      <section className="py-16 sm:py-24 lg:py-28">
        <div className="container-custom">
          <p className="text-xs font-medium text-text-secondary">۰۳ / هوش مصنوعی سازمانی آتیوار</p>
          <div className="mt-4 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="section-title">سه سطح هوشمندی سازمانی</h2>
            <p className="max-w-md text-sm leading-7 text-text-secondary">
              مسیر تحول هوشمند از داده تا تصمیم‌گیری؛ با امنیت، کنترل، محرمانگی و نظارت انسانی.
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
              بررسی کامل راهکارهای هوش مصنوعی سازمانی ←
            </Link>
          </div>
        </div>
      </section>

      {/* AI Workspace */}
      <section className="py-16 sm:py-24 lg:py-28">
        <div className="container-custom grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <p className="text-xs font-medium text-text-secondary">۰۴ / محصول</p>
            <h2 className="section-title mt-4">محیط هوش مصنوعی اختصاصی، متناسب با سازمان شما</h2>
            <p className="section-subtitle">
              با ATIVAR AI Workspace، تیم‌ها می‌توانند در محیطی کاملاً کنترل‌شده از اسناد، دانش و داده‌های داخلی سازمان،
              جست‌وجو، تحلیل، خلاصه‌سازی و پشتیبانی از تصمیم‌های تخصصی را انجام دهند.
            </p>
            <Link
              href="/products/ai-workspace"
              className="mt-8 inline-flex text-sm font-semibold text-brand-primary underline-offset-4 hover:underline"
            >
              معرفی ATIVAR AI Workspace ←
            </Link>
          </div>

          <div className="flex flex-col gap-3 text-sm">
            <div className="rounded-xl border border-border px-5 py-4 text-text-secondary">اسناد، فایل‌ها و دانش سازمانی</div>
            <div className="flex items-center gap-3 px-5 text-xs text-text-secondary">
              <span className="h-px flex-1 bg-border" aria-hidden="true" />
              پردازش کنترل‌شده با سیاست‌های دسترسی
            </div>
            <div className="rounded-xl border border-brand-primary/25 bg-brand-light px-5 py-4 font-medium text-text-primary">
              محیط اختصاصی هوش مصنوعی سازمان
            </div>
            <div className="flex items-center gap-3 px-5 text-xs text-text-secondary">
              <span className="h-px flex-1 bg-border" aria-hidden="true" />
              نظارت انسانی و ارجاع به منبع
            </div>
            <div className="rounded-xl border border-border px-5 py-4 text-text-secondary">
              پاسخ، خلاصه، تحلیل و پشتیبانی از تصمیم‌گیری
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 sm:py-24 lg:py-28 border-y border-border bg-[#FAFCFD]">
        <div className="container-custom">
          <p className="text-xs font-medium text-text-secondary">۰۵ / روش همکاری</p>
          <div className="mt-4 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="section-title">رویکرد آتیوار در اجرا</h2>
            <p className="max-w-md text-sm leading-7 text-text-secondary">
              شفافیت در دامنه، هزینه، زمان‌بندی، مسئولیت‌ها و معیارهای پذیرش، از همان آغاز همکاری تضمین می‌شود.
            </p>
          </div>

          <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
            {process.map((step, index) => (
              <li key={step.title} className="border-t border-border pt-5">
                <p className="text-xs tabular-nums text-text-secondary">{faNumber(index + 1)}</p>
                <h3 className="mt-2 text-base font-semibold text-text-primary">{step.title}</h3>
                <p className="mt-2 text-sm leading-7 text-text-secondary">{step.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24 lg:py-28">
        <div className="container-custom max-w-4xl text-center">
          <div className="relative overflow-hidden rounded-3xl border border-border bg-white px-6 py-12 sm:px-10 sm:py-14">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(700px_300px_at_50%_-20%,rgba(18,175,193,0.09),transparent)]" />
            <h2 className="section-title">آماده شناسایی بهترین راهکار برای سازمان خود هستید؟</h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-text-secondary">
              در جلسه اولیه و رایگان، چالش‌های کلیدی، اهداف مورد انتظار و محدودیت‌های سازمان بررسی می‌شود.
              خروجی این جلسه، دیدی شفاف و عملی برای گام بعدی خواهد بود.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link href="/contact" className="btn btn-primary">
                ثبت درخواست جلسه مشاوره
              </Link>
              <Link
                href="/insights"
                className="text-sm font-semibold text-text-primary underline-offset-4 hover:underline"
              >
                مطالعه بینش‌های تخصصی آتیوار ←
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 