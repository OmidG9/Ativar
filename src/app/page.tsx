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
      <section className="relative overflow-hidden section-padding">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-40 right-[-10%] h-[420px] w-[420px] rounded-full bg-brand-accent/10 blur-3xl" />
          <div className="absolute top-20 left-[-15%] h-[360px] w-[360px] rounded-full bg-brand-primary/8 blur-3xl" />
          <div className="grid-glow absolute inset-0 opacity-60" />
        </div>
        <div className="container-custom grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="stagger">
            <div className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-white/80 px-4 py-1 text-sm text-text-secondary shadow-subtle backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-accent" />
              هوش مصنوعی، در خدمت تصمیم بهتر و عملکرد برتر سازمان شما
            </div>
            <h1 className="mt-6 text-3xl font-bold leading-tight tracking-tight text-text-primary sm:text-4xl lg:text-5xl xl:text-6xl">
              زیرساخت هوش مصنوعی برای
              <span className="bg-gradient-to-l from-brand-primary via-brand-accent to-brand-primary bg-clip-text text-transparent"> تصمیم‌گیری هوشمندانه </span>
              سازمان شما
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-text-secondary">
              آتیوار شریک سازمان‌ها در طراحی، استقرار و توسعه راهکارهای فین‌تک و هوش مصنوعی سازمانی است؛ از مشاوره راهبردی و معماری تا استقرار محیط‌های اختصاصی و هوشمندسازی فرایندها.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link href="/contact" className="btn btn-primary">
                درخواست جلسه مشاوره
              </Link>
              <Link href="/services/consulting" className="btn btn-outline">
                مشاهده خدمات و راهکارها
              </Link>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-border/70 bg-white/80 px-5 py-4 shadow-subtle backdrop-blur">
                <p className="text-2xl font-bold text-text-primary">مسئله‌محور</p>
                <p className="mt-1 text-sm text-text-secondary">قبل از فناوری، نیاز کسب‌وکار</p>
              </div>
              <div className="rounded-2xl border border-border/70 bg-white/80 px-5 py-4 shadow-subtle backdrop-blur">
                <p className="text-2xl font-bold text-text-primary">کنترل‌شده</p>
                <p className="mt-1 text-sm text-text-secondary">امنیت، دسترسی و نظارت انسانی</p>
              </div>
              <div className="rounded-2xl border border-border/70 bg-white/80 px-5 py-4 shadow-subtle backdrop-blur">
                <p className="text-2xl font-bold text-text-primary">قابل اجرا</p>
                <p className="mt-1 text-sm text-text-secondary">طراحی تا استقرار و انتقال دانش</p>
              </div>
            </div>
          </div>
          <div className="relative fade-in">
            <div className="absolute -top-10 -left-6 h-24 w-24 rounded-full bg-brand-accent/10 blur-2xl" />
            <div className="card relative overflow-hidden shadow-glow">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-accent/60 to-transparent" />
              <div className="relative h-[360px] w-full sm:h-[460px]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(245,250,252,1),rgba(255,255,255,1))]" />
                <div className="absolute inset-0 grid-glow opacity-40" />
                <svg className="absolute inset-0 h-full w-full" viewBox="0 0 640 520" preserveAspectRatio="xMidYMid meet">
                  <defs>
                    <linearGradient id="line" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="rgba(18,175,193,0)" />
                      <stop offset="50%" stopColor="rgba(18,175,193,0.6)" />
                      <stop offset="100%" stopColor="rgba(23,107,155,0)" />
                    </linearGradient>
                  </defs>
                  <g opacity="0.8">
                    <circle cx="320" cy="260" r="150" fill="none" stroke="rgba(23,107,155,0.12)" strokeWidth="1" />
                    <circle cx="320" cy="260" r="110" fill="none" stroke="rgba(18,175,193,0.14)" strokeWidth="1" />
                    <circle cx="320" cy="260" r="72" fill="none" stroke="rgba(23,107,155,0.16)" strokeWidth="1" />
                  </g>
                  <g>
                    <path d="M160 200 L240 230" stroke="url(#line)" strokeWidth="1" className="animate-pulse" />
                    <path d="M480 200 L400 230" stroke="url(#line)" strokeWidth="1" className="animate-pulse" />
                    <path d="M160 320 L240 290" stroke="url(#line)" strokeWidth="1" className="animate-pulse" />
                    <path d="M480 320 L400 290" stroke="url(#line)" strokeWidth="1" className="animate-pulse" />
                  </g>
                  <g>
                    <foreignObject x="110" y="170" width="110" height="60">
                      <div className="flex h-full items-center justify-center rounded-2xl border border-border bg-white/90 px-3 text-center text-xs text-text-secondary shadow-subtle">
                        داده‌های سازمان
                      </div>
                    </foreignObject>
                    <foreignObject x="420" y="170" width="110" height="60">
                      <div className="flex h-full items-center justify-center rounded-2xl border border-border bg-white/90 px-3 text-center text-xs text-text-secondary shadow-subtle">
                        دانش سازمانی
                      </div>
                    </foreignObject>
                    <foreignObject x="110" y="290" width="110" height="60">
                      <div className="flex h-full items-center justify-center rounded-2xl border border-border bg-white/90 px-3 text-center text-xs text-text-secondary shadow-subtle">
                        سامانه‌های عملیاتی
                      </div>
                    </foreignObject>
                    <foreignObject x="420" y="290" width="110" height="60">
                      <div className="flex h-full items-center justify-center rounded-2xl border border-border bg-white/90 px-3 text-center text-xs text-text-secondary shadow-subtle">
                        فرایندهای کسب‌وکار
                      </div>
                    </foreignObject>
                    <foreignObject x="255" y="230" width="130" height="70">
                      <div className="flex h-full flex-col items-center justify-center rounded-2xl border border-brand-accent/40 bg-gradient-to-br from-brand-accentLight to-white px-3 text-center shadow-card">
                        <p className="text-sm font-semibold text-brand-primary">ATIVAR AI Workspace</p>
                        <p className="mt-1 text-xs text-text-secondary">محیط اختصاصی کنترل‌شده</p>
                      </div>
                    </foreignObject>
                    <foreignObject x="255" y="320" width="130" height="60">
                      <div className="flex h-full items-center justify-center rounded-2xl border border-brand-primary/30 bg-brand-blueLight/70 px-3 text-center text-xs font-medium text-brand-primary shadow-subtle">
                        تصمیم‌گیری هوشمندانه
                      </div>
                    </foreignObject>
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative border-y border-border/70 bg-white/80 backdrop-blur">
        <div className="container-custom grid gap-6 py-8 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((item) => (
            <div key={item.title} className="group flex flex-col gap-2 rounded-2xl border border-transparent px-4 py-3 transition-all hover:border-border/80 hover:bg-white">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-accent transition-transform group-hover:scale-125" />
                <h3 className="text-base font-semibold text-text-primary">{item.title}</h3>
              </div>
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
