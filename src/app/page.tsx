import Link from "next/link";
import { CTA_LABELS } from "@/lib/cta";
import { createMetadata } from "@/lib/metadata";
import { faNumber } from "@/lib/number";

export const metadata = createMetadata({
  title: "آتیوار | مشاوره فین‌تک، هوش مصنوعی سازمانی و تحول دیجیتال",
  description:
    "آتیوار در زمینه مشاوره، طراحی معماری و اجرای راهکارهای فین‌تک و هوش مصنوعی سازمانی فعالیت می‌کند؛ از تحلیل داده و مدیریت دانش تا توسعه راهکارهای دیجیتال.",
  path: "/",
  absoluteTitle: true,
});

const services = [
  {
    title: "مشاوره راهبردی و تحول دیجیتال",
    description:
      "شناخت مسائل کلیدی، ارزیابی فرصت‌ها، تدوین نقشه راه و طراحی برنامه اجرایی برای بهبود عملکرد و توسعه قابلیت‌های دیجیتال سازمان.",
    output: "نقشه راه و برنامه اجرایی",
    href: "/services/consulting",
  },
  {
    title: "هوش مصنوعی سازمانی",
    description:
      "طراحی و استقرار راهکارهای هوش مصنوعی برای تحلیل داده، مدیریت دانش، توسعه دستیارهای تخصصی و بهبود فرایندهای منتخب.",
    output: "محیط یا دستیار هوش مصنوعی سازمانی",
    href: "/solutions/enterprise-ai",
  },
  {
    title: "راهکارهای فین‌تک",
    description:
      "مشاوره، طراحی معماری و اجرای راهکارهای فناوری مالی متناسب با نیازهای کسب‌وکار، ساختار عملیاتی و الزامات فنی و قانونی.",
    output: "معماری و برنامه اجرای راهکار مالی",
    href: "/solutions/fintech",
  },
  {
    title: "معماری و اجرای پروژه‌های فناوری",
    description:
      "تبدیل نیاز کسب‌وکار به معماری، مشخصات فنی، برنامه اجرا و راهکار عملیاتی؛ با همکاری تیم‌های داخلی و تأمین‌کنندگان تخصصی متناسب با پروژه.",
    output: "سند فنی و راهکار عملیاتی",
    href: "/services/implementation",
  },
];

const valuePoints = [
  "تصمیم‌گیری بر پایه اطلاعات منسجم‌تر",
  "کاهش فعالیت‌های دستی و تکراری در فرایندهای منتخب",
  "دسترسی بهتر به دانش و تجربه سازمانی",
  "طراحی راهکارهای قابل توسعه و یکپارچه با سامانه‌های موجود",
  "شفافیت بیشتر در هزینه، دامنه و معیارهای پذیرش پروژه",
  "شناسایی فرصت‌های توسعه محصولات و خدمات دیجیتال",
];

const intelligenceLevels = [
  {
    title: "ATIVAR Data Intelligence",
    tagline: "از داده به تصمیم",
    description:
      "سامان‌دهی و تحلیل داده‌های سازمان برای تهیه گزارش‌های مدیریتی منسجم‌تر، شناسایی روندها و مغایرت‌ها و پشتیبانی از تصمیم‌گیری.",
  },
  {
    title: "ATIVAR Knowledge Intelligence",
    tagline: "از دانش به دسترسی",
    description:
      "تبدیل اسناد، دستورالعمل‌ها و دانش سازمانی به پایگاه دانشی قابل جست‌وجو، همراه با پاسخ‌های مستند در صورت پیاده‌سازی قابلیت ارجاع به منابع.",
  },
  {
    title: "ATIVAR Enterprise LLM",
    tagline: "از هوش مصنوعی به خدمت",
    description:
      "طراحی محیط هوش مصنوعی سازمانی برای توسعه دستیارهای تخصصی، اتصال به منابع مجاز و پیاده‌سازی گردش‌کارها و خدمات هوشمند.",
  },
];

const process = [
  { title: "شناخت", desc: "بررسی نیاز کسب‌وکار، وضعیت موجود، محدودیت‌ها و اهداف سازمان." },
  { title: "طراحی", desc: "تدوین راهکار، معماری، دامنه پروژه، برآورد اولیه و شاخص‌های موفقیت." },
  { title: "برنامه‌ریزی", desc: "تعیین مراحل اجرا، منابع، مسئولیت‌ها و الزامات فنی و امنیتی." },
  { title: "اجرا", desc: "پیاده‌سازی، یکپارچه‌سازی، آزمون و آماده‌سازی برای بهره‌برداری." },
  { title: "ارزیابی و توسعه", desc: "سنجش نتایج و تصمیم‌گیری درباره اصلاح یا گسترش راهکار." },
];

const trustItems = [
  "مشاوره فین‌تک",
  "معماری مالی دیجیتال",
  "هوش مصنوعی سازمانی",
  "تحلیل داده و مدیریت دانش",
  "تجربه در طراحی و توسعه راهکارهای دیجیتال، فین‌تک و هوش مصنوعی سازمانی",
  "طراحی معماری، یکپارچه‌سازی و انتقال دانش",
  "رویکرد مسئله‌محور و نتیجه‌گرا",
  "راهکارهای متناسب با زیرساخت و الزامات سازمان",
];

const collaborationScope = [
  { title: "مشاوره راهبردی و تحول دیجیتال", href: "/services/consulting" },
  { title: "هوش مصنوعی سازمانی", href: "/solutions/enterprise-ai" },
  { title: "راهکارهای فین‌تک", href: "/solutions/fintech" },
  { title: "معماری و اجرای پروژه", href: "/services/implementation" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border pt-8 pb-8">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(1200px_600px_at_80%_-10%,rgba(18,175,193,0.08),transparent)]" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(900px_500px_at_10%_-20%,rgba(23,107,155,0.07),transparent)]" />
        <div className="container-custom grid items-center gap-12 pt-[calc(4rem+20px)] pb-[calc(4rem+20px)] lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:pt-[calc(6rem+20px)] lg:pb-[calc(6rem+20px)]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-white/80 px-4 py-1.5 text-xs text-text-secondary shadow-subtle backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-accent" aria-hidden="true" />
              مشاوره، معماری و اجرای راهکارهای هوش مصنوعی و فین‌تک
            </div>

            <h1 className="mt-6 text-balance text-[2.15rem] font-bold leading-[1.32] tracking-tight text-text-primary sm:text-5xl sm:leading-[1.28] lg:text-[3.6rem]">
              هوش مصنوعی و فناوری مالی، در خدمت
              <span className="text-brand-primary"> عملکرد بهتر کسب‌وکار</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-text-secondary sm:text-lg sm:leading-9">
              آتیوار به سازمان‌ها کمک می‌کند مسائل پیچیده کسب‌وکار را به راهکارهای دیجیتال قابل اجرا
              تبدیل کنند؛ از مشاوره راهبردی و طراحی معماری تا استقرار هوش مصنوعی سازمانی، توسعه
              راهکارهای فین‌تک و یکپارچه‌سازی سامانه‌ها.
            </p>

            <p className="mt-4 max-w-2xl text-base leading-8 text-text-secondary">
              تمرکز ما بر ایجاد قابلیت‌هایی است که به سازمان کمک کنند تصمیم‌های آگاهانه‌تری بگیرند،
              از داده و دانش خود بهتر استفاده کنند، فرایندهای کاری را بهبود دهند و فرصت‌های جدیدی
              برای توسعه خدمات و درآمد شناسایی کنند.
            </p>

            <p className="mt-6 text-base font-semibold leading-8 text-text-primary">
              از شناخت مسئله تا طراحی، اجرا و توسعه راهکار؛ آتیوار در کنار سازمان شماست.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link href="/contact" className="btn btn-primary">
                {CTA_LABELS.consult}
              </Link>
              <Link href="#services" className="btn btn-outline">
                {CTA_LABELS.viewSolutions}
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-6 -top-6 -z-10 hidden h-40 w-40 rounded-full bg-brand-accent/10 blur-3xl lg:block" />
            <div className="absolute -bottom-10 -right-10 -z-10 hidden h-48 w-48 rounded-full bg-brand-primary/10 blur-3xl lg:block" />
            <div className="relative overflow-hidden rounded-2xl border border-border bg-white shadow-[0_60px_120px_-80px_rgba(23,107,155,0.45)]">
              <div className="flex items-center justify-between border-b border-border/70 px-6 py-4 sm:px-8">
                <div>
                  <p className="text-sm font-semibold text-text-primary">دامنه همکاری آتیوار</p>
                  <p className="mt-1 text-xs text-text-secondary">از شناخت مسئله تا اجرا و توسعه راهکار</p>
                </div>
                <span className="h-2 w-2 rounded-full bg-brand-accent shadow-[0_0_0_6px_rgba(18,175,193,0.08)]" aria-hidden="true" />
              </div>
              <div className="px-6 py-6 sm:px-8 sm:py-7">
                <ul className="space-y-3">
                  {collaborationScope.map((item, index) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="group flex items-center justify-between gap-4 rounded-xl border border-border/80 px-4 py-3.5 transition-colors hover:border-brand-primary/25 hover:bg-brand-light/40 sm:px-5"
                      >
                        <span className="flex items-center gap-3">
                          <span className="text-xs tabular-nums text-text-secondary">
                            {faNumber(index + 1)}
                          </span>
                          <span className="text-sm font-medium text-text-primary">{item.title}</span>
                        </span>
                        <span
                          aria-hidden="true"
                          className="text-brand-primary transition-transform group-hover:-translate-x-1"
                        >
                          ←
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="border-t border-border/70 px-6 py-4 text-xs leading-6 text-text-secondary sm:px-8">
                راهکارها بر پایه شرایط واقعی سازمان طراحی و دامنه هر پروژه در پیشنهاد فنی مشخص می‌شود.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section aria-label="حوزه‌های تخصصی آتیوار" className="relative overflow-hidden border-b border-border bg-white py-5">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="group w-full overflow-hidden" dir="ltr">
          <div className="animate-marquee flex w-max items-center">
            {[0, 1].map((copy) => (
              <div
                key={copy}
                aria-hidden={copy === 1}
                className="flex items-center gap-12 whitespace-nowrap"
              >
                {trustItems.map((item) => (
                  <span key={`${copy}-${item}`} className="flex items-center gap-12">
                    <span className="text-sm text-text-primary">{item}</span>
                    <span className="h-1 w-1 rounded-full bg-brand-accent" aria-hidden="true" />
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="scroll-mt-20 border-b border-border bg-[#FAFCFD] py-16 sm:py-24 lg:py-28">
        <div className="container-custom">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-medium text-text-secondary">۰۱ / خدمات اصلی</p>
              <h2 className="section-title mt-4">راهکارهایی برای مسائل واقعی سازمان‌ها</h2>
              <p className="section-subtitle">
                هر خدمت با دامنه روشن، خروجی قابل تعریف و معیار پذیرش مشخص ارائه می‌شود.
              </p>
            </div>
            <Link
              href="/services/consulting"
              className="text-sm font-semibold text-brand-primary underline-offset-4 hover:underline"
            >
              مشاهده جزئیات خدمات ←
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
                  <span className="block text-text-secondary/80">خروجی قابل تعریف</span>
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

      {/* Value proposition */}
      <section className="py-16 sm:py-24 lg:py-28">
        <div className="container-custom">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <div>
              <p className="text-xs font-medium text-text-secondary">۰۲ / ارزش پیشنهادی</p>
              <h2 className="section-title mt-4">
                فناوری زمانی ارزشمند است که نتیجه آن در عملکرد سازمان دیده شود
              </h2>
              <p className="section-subtitle">
                آتیوار به سازمان کمک می‌کند پیش از انتخاب فناوری، مسئله و هدف را روشن کند؛ سپس
                راهکاری متناسب با شرایط واقعی طراحی کند و امکان سنجش نتیجه را از ابتدا در پروژه
                بگنجاند.
              </p>
            </div>

            <div>
              <ul className="grid gap-x-10 border-t border-border sm:grid-cols-2">
                {valuePoints.map((item, index) => (
                  <li key={item} className="flex items-start gap-3 border-b border-border py-4">
                    <span className="mt-0.5 text-xs tabular-nums text-brand-primary">
                      {faNumber(index + 1)}
                    </span>
                    <span className="text-sm leading-7 text-text-primary">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm leading-7 text-text-secondary">
                میزان تحقق هر یک از این نتایج به شرایط سازمان، دامنه پروژه و کیفیت اجرا وابسته است؛
                به همین دلیل، آتیوار بر ارزیابی اولیه و تعریف شاخص‌های قابل سنجش تأکید می‌کند.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Intelligence levels */}
      <section className="border-y border-border bg-[#FAFCFD] py-16 sm:py-24 lg:py-28">
        <div className="container-custom">
          <p className="text-xs font-medium text-text-secondary">۰۳ / هوش مصنوعی سازمانی آتیوار</p>
          <div className="mt-4 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="section-title">سازمان خود را در سه سطح به هوش مصنوعی مجهز کنید</h2>
            <p className="max-w-md text-sm leading-7 text-text-secondary">
              از داده تا دانش، از دانش تا هوش مصنوعی اختصاصی؛ سازمان می‌تواند از هر یک از سه سطح
              آغاز کند.
            </p>
          </div>

          <div className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-3">
            {intelligenceLevels.map((level, index) => (
              <div key={level.title} className="border-t border-border pt-5">
                <p className="text-xs tabular-nums text-text-secondary">{faNumber(index + 1)}</p>
                <h3 className="mt-2 text-base font-semibold text-text-primary">{level.title}</h3>
                <p className="mt-1 text-xs font-medium text-brand-accent">{level.tagline}</p>
                <p className="mt-2 text-sm leading-7 text-text-secondary">{level.description}</p>
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
            <p className="text-xs font-medium text-text-secondary">۰۴ / محیط کاربردی</p>
            <h2 className="section-title mt-4">محیط اختصاصی هوش مصنوعی برای کار و دانش سازمانی</h2>
            <p className="section-subtitle">
              ATIVAR AI Workspace با هدف فراهم‌کردن محیطی سازمانی برای استفاده کنترل‌شده از
              قابلیت‌های هوش مصنوعی طراحی می‌شود؛ محیطی که بتواند متناسب با نیازهای کاری،
              سیاست‌های دسترسی و الزامات زیرساختی سازمان توسعه پیدا کند.
            </p>
            <p className="mt-4 text-sm leading-7 text-text-secondary">
              این محیط می‌تواند نقطه ورود کارکنان به دستیارهای هوشمند، ابزارهای کار با اسناد و
              قابلیت‌های منتخب هوش مصنوعی باشد؛ بدون آنکه سازمان ناچار باشد برای هر نیاز، ابزار
              جداگانه‌ای انتخاب و مدیریت کند.
            </p>
            <Link
              href="/products/ai-workspace"
              className="mt-8 inline-flex text-sm font-semibold text-brand-primary underline-offset-4 hover:underline"
            >
              {CTA_LABELS.workspace} ←
            </Link>
          </div>

          <div className="flex flex-col gap-3 text-sm">
            <div className="rounded-xl border border-border px-5 py-4 text-text-secondary">
              اسناد، دستورالعمل‌ها و دانش سازمانی
            </div>
            <div className="flex items-center gap-3 px-5 text-xs text-text-secondary">
              <span className="h-px flex-1 bg-border" aria-hidden="true" />
              پردازش کنترل‌شده متناسب با سیاست‌های دسترسی
            </div>
            <div className="rounded-xl border border-brand-primary/25 bg-brand-light px-5 py-4 font-medium text-text-primary">
              محیط اختصاصی هوش مصنوعی سازمان
            </div>
            <div className="flex items-center gap-3 px-5 text-xs text-text-secondary">
              <span className="h-px flex-1 bg-border" aria-hidden="true" />
              پاسخ مستند و نظارت انسانی در تصمیم‌های حساس
            </div>
            <div className="rounded-xl border border-border px-5 py-4 text-text-secondary">
              دستیارهای تخصصی، گردش‌کارهای هوشمند و توسعه تدریجی قابلیت‌ها
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="border-y border-border bg-[#FAFCFD] py-16 sm:py-24 lg:py-28">
        <div className="container-custom">
          <p className="text-xs font-medium text-text-secondary">۰۵ / روش همکاری</p>
          <div className="mt-4 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="section-title">از مسئله تا راهکار قابل اجرا</h2>
            <p className="max-w-md text-sm leading-7 text-text-secondary">
              هر مرحله خروجی مشخص دارد و مرحله بعد بر پایه نتیجه مرحله قبل تعریف می‌شود.
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

      {/* Closing CTA */}
      <section className="py-16 sm:py-24 lg:py-28">
        <div className="container-custom max-w-4xl text-center">
          <div className="relative overflow-hidden rounded-3xl border border-border bg-white px-6 py-12 sm:px-10 sm:py-14">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(700px_300px_at_50%_-20%,rgba(18,175,193,0.09),transparent)]" />
            <h2 className="section-title">برای سازمان شما چه راهکاری مناسب است؟</h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-text-secondary">
              اگر سازمان شما با گزارش‌گیری زمان‌بر، دانش پراکنده، فرایندهای ناکارآمد، پیچیدگی
              سامانه‌های مالی یا نیاز به توسعه خدمات دیجیتال مواجه است، نقطه شروع، شناخت دقیق مسئله
              است.
            </p>
            <p className="mx-auto mt-3 max-w-2xl text-base leading-8 text-text-secondary">
              در جلسه اولیه، مسئله و هدف موردنظر را بررسی می‌کنیم تا مشخص شود چه نوع مشاوره یا
              راهکاری می‌تواند برای سازمان شما مناسب باشد.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link href="/contact" className="btn btn-primary">
                {CTA_LABELS.consult}
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
