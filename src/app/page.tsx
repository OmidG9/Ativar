import Link from "next/link";

const problems = [
  {
    title: "اطلاعات سازمان در جای‌های مختلف پراکنده است",
    description: "فایل‌ها، گزارش‌ها و سامانه‌های متعدد باعث می‌شود دسترسی سریع به اطلاعات درست دشوار باشد.",
  },
  {
    title: "فرایندهای تکراری زمان و منابع را می‌بلعند",
    description: "بسیاری از فعالیت‌ها دستی و تکراری هستند و فرصت تحلیل و تصمیم‌گیری را کاهش می‌دهند.",
  },
  {
    title: "مدیران به گزارش‌های دقیق و به‌موقع نیاز دارند",
    description: "برای تصمیم‌گیری سریع و آگاهانه، باید داده‌های سازمان در قالب بینش مدیریتی در دسترس باشد.",
  },
  {
    title: "استفاده از هوش مصنوعی بدون کنترل ریسک ایجاد می‌کند",
    description: "بدون سیاست دسترسی، محل پردازش و نظارت انسانی، استفاده سازمانی از AI می‌تواند مخاطراتی داشته باشد.",
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
    output: "محیط یا دستیار متناسب با نیاز سازمان",
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
  { step: "۱", title: "شناخت مسئله", desc: "بررسی اهداف، فرایندها و محدودیت‌های سازمان" },
  { step: "۲", title: "ارزیابی و امکان‌سنجی", desc: "تحلیل داده‌ها، زیرساخت و ریسک‌های احتمالی" },
  { step: "۳", title: "طراحی راهکار و برآورد", desc: "معماری، دامنه کار، هزینه و زمان‌بندی شفاف" },
  { step: "۴", title: "اجرا و استقرار", desc: "پیاده‌سازی مرحله‌ای با نظارت و آزمون کیفیت" },
  { step: "۵", title: "سنجش نتایج و بهبود", desc: "ارزیابی بر اساس معیارهای پذیرش و توسعه تدریجی" },
];

const values = [
  { title: "کاهش هزینه و افزایش بهره‌وری", desc: "شناسایی و بهبود فرایندهای پرهزینه و زمان‌بر" },
  { title: "تصمیم‌گیری مبتنی بر داده", desc: "تبدیل اطلاعات پراکنده به بینش مدیریتی قابل استفاده" },
  { title: "هوش مصنوعی اختصاصی سازمان", desc: "ایجاد محیطی متناسب با دانش، داده و نیازهای سازمان" },
  { title: "طراحی تا اجرای پروژه", desc: "همراهی از تعریف مسئله تا استقرار و ارزیابی نتایج" },
];

export default function HomePage() {
  return (
    <>
      <section className="section-padding">
        <div className="container-custom grid items-center gap-10 lg:grid-cols-2">
          <div>
            <div className="inline-flex items-center rounded-full border border-border px-3 py-1 text-sm text-text-secondary">
              هوش مصنوعی، در خدمت تصمیم بهتر و عملکرد برتر سازمان شما
            </div>
            <h1 className="mt-6 text-3xl font-bold leading-tight text-text-primary sm:text-4xl lg:text-5xl">
              هوش مصنوعی را به یک مزیت واقعی برای کسب‌وکار خود تبدیل کنید
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-text-secondary">
              آتیوار به سازمان‌ها کمک می‌کند هزینه‌ها و فرایندهای خود را بهینه کنند، از دانش سازمانی بهتر استفاده کنند و راهکارهای مالی و هوشمند متناسب با نیاز خود بسازند؛ از مشاوره و طراحی تا اجرا و استقرار.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className="btn btn-primary">
                درخواست جلسه مشاوره
              </Link>
              <Link href="/services/consulting" className="btn btn-outline">
                مشاهده خدمات و راهکارها
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="card overflow-hidden">
              <div className="relative h-[320px] w-full bg-gradient-to-br from-brand-light via-white to-brand-accentLight sm:h-[420px]">
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 text-center">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-2xl border border-border bg-white px-6 py-4 shadow-subtle">
                      <p className="text-sm text-text-secondary">داده‌های سازمان</p>
                    </div>
                    <div className="rounded-2xl border border-border bg-white px-6 py-4 shadow-subtle">
                      <p className="text-sm text-text-secondary">سامانه‌های سازمانی</p>
                    </div>
                    <div className="rounded-2xl border border-brand-accent/40 bg-brand-accentLight px-6 py-4 shadow-subtle">
                      <p className="text-sm font-medium text-brand-primary">محیط هوش مصنوعی اختصاصی</p>
                    </div>
                    <div className="rounded-2xl border border-brand-primary/40 bg-brand-blueLight px-6 py-4 shadow-subtle">
                      <p className="text-sm font-medium text-brand-primary">تصمیم‌گیری مدیریتی</p>
                    </div>
                  </div>
                  <p className="max-w-sm text-sm text-text-secondary">
                    فناوری در خدمت سازمان، نه برعکس
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-white">
        <div className="container-custom grid gap-6 py-8 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((item) => (
            <div key={item.title} className="flex flex-col gap-2">
              <h3 className="text-base font-semibold text-text-primary">{item.title}</h3>
              <p className="text-sm leading-relaxed text-text-secondary">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h2 className="section-title">فناوری زمانی ارزشمند است که یک مسئله واقعی را حل کند.</h2>
            <p className="section-subtitle">
              آتیوار با رویکرد مسئله‌محور، قبل از پیشنهاد فناوری، مسئله سازمان را شناسایی و راهکار متناسب طراحی می‌کند.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {problems.map((item) => (
              <div key={item.title} className="card p-6">
                <h3 className="text-lg font-semibold text-text-primary">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-brand-light/60">
        <div className="container-custom">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <h2 className="section-title">خدمات اصلی</h2>
              <p className="section-subtitle">
                هر خدمت با خروجی ملموس و قابل اندازه‌گیری برای سازمان تعریف شده است.
              </p>
            </div>
            <Link href="/services/consulting" className="btn btn-outline">
              مشاهده همه خدمات
            </Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {services.map((item) => (
              <div key={item.title} className="card flex h-full flex-col p-6">
                <h3 className="text-lg font-semibold text-text-primary">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">{item.description}</p>
                <div className="mt-4 rounded-xl bg-brand-light px-4 py-3">
                  <p className="text-xs text-text-secondary">خروجی مورد انتظار</p>
                  <p className="mt-1 text-sm font-medium text-text-primary">{item.output}</p>
                </div>
                <div className="mt-6">
                  <Link href={item.href} className="text-sm font-semibold text-brand-primary">
                    جزئیات بیشتر ←
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <h2 className="section-title">یک محیط هوش مصنوعی متناسب با سازمان شما</h2>
              <p className="section-subtitle">
                تصور کنید کارکنان سازمان بتوانند در یک محیط کنترل‌شده، از اطلاعات، اسناد و دانش داخلی برای جست‌وجو، تحلیل و انجام وظایف تخصصی استفاده کنند.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                <div className="card p-4 text-center">
                  <p className="text-sm font-semibold text-text-primary">شناخت نیاز و بررسی داده‌ها</p>
                </div>
                <div className="card p-4 text-center">
                  <p className="text-sm font-semibold text-text-primary">طراحی محیط و الزامات امنیتی</p>
                </div>
                <div className="card p-4 text-center">
                  <p className="text-sm font-semibold text-text-primary">استقرار، آموزش و ارزیابی</p>
                </div>
              </div>
              <div className="mt-8">
                <Link href="/products/ai-workspace" className="btn btn-primary">
                  اطلاعات بیشتر درباره ATIVAR AI Workspace
                </Link>
              </div>
            </div>
            <div className="card p-8">
              <h3 className="text-lg font-semibold text-text-primary">مسیر اطلاعات در محیط اختصاصی</h3>
              <div className="mt-6 flex flex-col gap-4 text-sm text-text-secondary">
                <div className="rounded-xl border border-border px-4 py-3">اسناد و داده‌های سازمان ←</div>
                <div className="rounded-xl border border-brand-accent/40 bg-brand-accentLight px-4 py-3 text-text-primary">محیط هوش مصنوعی کنترل‌شده ←</div>
                <div className="rounded-xl border border-border px-4 py-3">پاسخ یا تحلیل ←</div>
                <div className="rounded-xl border border-brand-primary/40 bg-brand-blueLight px-4 py-3 text-text-primary">تأیید و استفاده توسط کاربر</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-brand-light/60">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h2 className="section-title">آتیوار چگونه کار می‌کند؟</h2>
            <p className="section-subtitle">
              پیش از اجرای پروژه، دامنه کار، هزینه، زمان‌بندی، مسئولیت‌ها و معیارهای پذیرش به‌صورت شفاف مشخص می‌شوند.
            </p>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-5">
            {process.map((item) => (
              <div key={item.step} className="card p-5 text-center">
                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-brand-primary text-white">
                  {item.step}
                </div>
                <h3 className="mt-3 text-base font-semibold text-text-primary">{item.title}</h3>
                <p className="mt-2 text-sm text-text-secondary">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="card overflow-hidden">
            <div className="grid items-center gap-8 p-8 lg:grid-cols-2 lg:p-12">
              <div>
                <h2 className="text-2xl font-bold text-text-primary sm:text-3xl">
                  برای مسئله سازمان شما، راهکار مناسب چیست؟
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-text-secondary">
                  در یک جلسه اولیه، مسئله، هدف مورد انتظار و محدودیت‌های سازمان شما را بررسی می‌کنیم. در صورت تناسب، مسیر ارزیابی، طراحی راهکار و برآورد اجرای پروژه مشخص خواهد شد.
                </p>
              </div>
              <div className="flex flex-col items-start gap-3 lg:items-end">
                <Link href="/contact" className="btn btn-primary">
                  درخواست جلسه مشاوره
                </Link>
                <Link href="/insights" className="text-sm font-semibold text-brand-primary">
                  مطالعه مقالات تخصصی
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
