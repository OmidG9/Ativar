import Link from "next/link";
import Image from "next/image";
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
  {
    title: "شناخت",
    desc: "بررسی نیاز کسب‌وکار، وضعیت موجود، محدودیت‌ها و اهداف سازمان.",
  },
  {
    title: "طراحی",
    desc: "تدوین راهکار، معماری، دامنه پروژه، برآورد اولیه و شاخص‌های موفقیت.",
  },
  {
    title: "برنامه‌ریزی",
    desc: "تعیین مراحل اجرا، منابع، مسئولیت‌ها و الزامات فنی و امنیتی.",
  },
  {
    title: "اجرا",
    desc: "پیاده‌سازی، یکپارچه‌سازی، آزمون و آماده‌سازی برای بهره‌برداری.",
  },
  {
    title: "ارزیابی و توسعه",
    desc: "سنجش نتایج و تصمیم‌گیری درباره اصلاح یا گسترش راهکار.",
  },
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

const heroValueCards = [
  {
    number: "۰۱",
    title: "شناخت و طراحی راهبرد",
    description:
      "درک نیازهای واقعی سازمان، ارزیابی آمادگی داده و فناوری، و تدوین نقشه راه اجرایی هوش مصنوعی.",
  },
  {
    number: "۰۲",
    title: "معماری و پیاده‌سازی",
    description:
      "طراحی راهکارهای متناسب با نیاز سازمان و یکپارچه‌سازی هوش مصنوعی با دانش، داده‌ها و سامانه‌های موجود.",
  },
  {
    number: "۰۳",
    title: "بهره‌برداری و خلق ارزش",
    description:
      "تمرکز بر افزایش بهره‌وری، بهبود تصمیم‌گیری، کنترل ریسک و سنجش نتایج کسب‌وکار.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate flex min-h-[calc(100vh-4rem)] items-center overflow-hidden supports-[height:100svh]:min-h-[calc(100svh-4rem)]">
        {/* Full-bleed background image (portrait crop on phones/tablets, landscape on desktop) */}
        <div className="absolute inset-0 -z-10">
          <picture>
            <source
              media="(min-width: 1024px)"
              srcSet="/heropage-vids.mp4"
            />
            <img
              src="/img/hero-enterprise-mobile.webp"
              alt="محیط واقعی سازمانی با تیم حرفه‌ای در حال گفتگو و همکاری"
              className="absolute inset-0 h-full w-full object-cover object-center"
              fetchPriority="high"
              decoding="async"
            />
          </picture>
          {/* Subtle scrim keeps the photo visible while text stays readable */}
          <div
            className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.4)_0%,rgba(255,255,255,0.16)_45%,rgba(255,255,255,0)_72%)] md:bg-[linear-gradient(to_right,rgba(255,255,255,0.34)_0%,rgba(255,255,255,0.1)_48%,rgba(255,255,255,0)_74%)]"
            aria-hidden="true"
          />
          <div
            className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white/85 via-white/35 to-transparent"
            aria-hidden="true"
          />
        </div>

        <div className="relative mx-auto w-full max-w-[1500px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
          <div className="relative ms-auto w-full max-w-xl lg:max-w-2xl">
            <div
              className="absolute -inset-x-4 -inset-y-6 -z-10 rounded-[2rem] border border-white/70 bg-white/60 shadow-[0_30px_90px_-50px_rgba(21,54,83,0.55)] backdrop-blur-md sm:-inset-x-5 sm:-inset-y-8 md:bg-white/70 lg:-inset-x-6 lg:-inset-y-10"
              aria-hidden="true"
            />
            <div className="inline-flex items-center gap-2 rounded-full border border-[#DCEAF2] bg-white/90 px-4 py-1.5 text-xs text-[#24384B] shadow-[0_1px_2px_rgba(36,56,75,0.02)] backdrop-blur">
              <span
                className="h-1.5 w-1.5 rounded-full bg-[#21B5C8]"
                aria-hidden="true"
              />
              <span>هوش مصنوعی سازمانی | معماری راهکارهای هوشمند</span>
            </div>

            <h1 className="mt-6 text-balance text-[2.25rem] font-bold leading-[1.32] tracking-tight text-[#153653] sm:text-5xl sm:leading-[1.28] lg:text-[3.5rem] lg:leading-[1.26]">
              هوش مصنوعی برای حل مسائل واقعی سازمان شما
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#24384B] sm:text-lg sm:leading-9">
              آتیوار به سازمان‌ها کمک می‌کند دانش، داده‌ها، فرایندها و سامانه‌های
              خود را به راهکارهای هوشمند، یکپارچه و قابل‌کنترل تبدیل کنند؛ از
              تدوین نقشه راه تا طراحی، پیاده‌سازی و بهبود مستمر.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#079BC5] px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_35px_-22px_rgba(7,155,197,0.9)] transition-colors hover:bg-[#08799D] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#21B5C8]/40 focus-visible:ring-offset-2"
              >
                {CTA_LABELS.aiAssessment || "ارزیابی آمادگی هوش مصنوعی سازمان"}
              </Link>
              <Link
                href="/about/team"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#DCEAF2] bg-white/95 px-6 py-3 text-sm font-semibold text-[#153653] transition-colors hover:border-[#21B5C8]/40 hover:bg-[#E8F7FC] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#21B5C8]/40 focus-visible:ring-offset-2"
              >
                معرفی آتیوار
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Three Core Value Cards */}
      <section className="relative z-10 -mt-16 pb-10 sm:-mt-20 lg:-mt-24 lg:pb-14">
        <div className="container-custom">
          <div className="grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
            {heroValueCards.map((card) => (
              <div
                key={card.number}
                className="group relative overflow-hidden rounded-2xl border border-white/70 bg-white/95 p-5 shadow-[0_20px_60px_-45px_rgba(21,54,83,0.6)] backdrop-blur-md transition-shadow hover:bg-white hover:shadow-[0_25px_70px_-40px_rgba(21,54,83,0.55)] sm:p-6"
              >
                <div
                  className="absolute -left-10 -top-10 h-24 w-24 rounded-full bg-[#E8F7FC]/70 blur-2xl"
                  aria-hidden="true"
                />
                <div className="relative">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#E8F7FC] text-sm font-semibold text-[#079BC5]">
                      {card.number}
                    </span>
                    <span className="text-[#21B5C8]" aria-hidden="true">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                      >
                        <path
                          d="M6 13L11 9L6 5"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-[#153653]">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-[#24384B]">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section
        aria-label="حوزه‌های تخصصی آتیوار"
        className="relative overflow-hidden border-b border-border bg-white py-5"
      >
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
                  <span
                    key={`${copy}-${item}`}
                    className="flex items-center gap-12"
                  >
                    <span className="text-sm text-text-primary">{item}</span>
                    <span
                      className="h-1 w-1 rounded-full bg-brand-accent"
                      aria-hidden="true"
                    />
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section
        id="services"
        className="relative overflow-hidden scroll-mt-20 border-b border-border bg-[#FAFCFD] py-16 sm:py-24 lg:py-28"
      >
        <Image
          src="/img/Light Blue Floral Mandala Line Art.webp"
          alt=""
          aria-hidden="true"
          width={900}
          height={900}
          className="pointer-events-none absolute -right-6 top-2 hidden h-[320px] w-auto rotate-180 opacity-25 lg:block xl:-right-10 xl:top-0 xl:h-[380px]"
          priority
        />
        <Image
          src="/img/Light Blue Floral Mandala Line Art.webp"
          alt=""
          aria-hidden="true"
          width={900}
          height={900}
          className="pointer-events-none absolute -left-8 bottom-0 hidden h-[260px] w-auto rotate-0 opacity-30 lg:block xl:-left-12 xl:bottom-[-10px] xl:h-[320px]"
          priority
        />
        <div className="container-custom relative">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-medium text-text-secondary">
                ۰۱ / خدمات اصلی
              </p>
              <h2 className="section-title mt-4">
                راهکارهایی برای مسائل واقعی سازمان‌ها
              </h2>
              <p className="section-subtitle">
                هر خدمت با دامنه روشن، خروجی قابل تعریف و معیار پذیرش مشخص ارائه
                می‌شود.
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
                  <p className="mt-1 text-sm leading-7 text-text-secondary">
                    {service.description}
                  </p>
                </div>
                <p className="text-xs leading-6 text-text-secondary">
                  <span className="block text-text-secondary/80">
                    خروجی قابل تعریف
                  </span>
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
              <p className="text-xs font-medium text-text-secondary">
                ۰۲ / ارزش پیشنهادی
              </p>
              <h2 className="section-title mt-4">
                فناوری زمانی ارزشمند است که نتیجه آن در عملکرد سازمان دیده شود
              </h2>
              <p className="section-subtitle">
                آتیوار به سازمان کمک می‌کند پیش از انتخاب فناوری، مسئله و هدف را
                روشن کند؛ سپس راهکاری متناسب با شرایط واقعی طراحی کند و امکان
                سنجش نتیجه را از ابتدا در پروژه بگنجاند.
              </p>
            </div>

            <div>
              <ul className="grid gap-x-10 border-t border-border sm:grid-cols-2">
                {valuePoints.map((item, index) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 border-b border-border py-4"
                  >
                    <span className="mt-0.5 text-xs tabular-nums text-brand-primary">
                      {faNumber(index + 1)}
                    </span>
                    <span className="text-sm leading-7 text-text-primary">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm leading-7 text-text-secondary">
                میزان تحقق هر یک از این نتایج به شرایط سازمان، دامنه پروژه و
                کیفیت اجرا وابسته است؛ به همین دلیل، آتیوار بر ارزیابی اولیه و
                تعریف شاخص‌های قابل سنجش تأکید می‌کند.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Intelligence levels */}
      <section className="border-y border-border bg-[#FAFCFD] py-16 sm:py-24 lg:py-28">
        <div className="container-custom">
          <p className="text-xs font-medium text-text-secondary">
            ۰۳ / هوش مصنوعی سازمانی آتیوار
          </p>
          <div className="mt-4 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="section-title">
              سازمان خود را در سه سطح به هوش مصنوعی مجهز کنید
            </h2>
            <p className="max-w-md text-sm leading-7 text-text-secondary">
              از داده تا دانش، از دانش تا هوش مصنوعی اختصاصی؛ سازمان می‌تواند از
              هر یک از سه سطح آغاز کند.
            </p>
          </div>

          <div className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-3">
            {intelligenceLevels.map((level, index) => (
              <div key={level.title} className="border-t border-border pt-5">
                <p className="text-xs tabular-nums text-text-secondary">
                  {faNumber(index + 1)}
                </p>
                <h3 className="mt-2 text-base font-semibold text-text-primary">
                  {level.title}
                </h3>
                <p className="mt-1 text-xs font-medium text-brand-accent">
                  {level.tagline}
                </p>
                <p className="mt-2 text-sm leading-7 text-text-secondary">
                  {level.description}
                </p>
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
            <p className="text-xs font-medium text-text-secondary">
              ۰۴ / محیط کاربردی
            </p>
            <h2 className="section-title mt-4">
              محیط اختصاصی هوش مصنوعی برای کار و دانش سازمانی
            </h2>
            <p className="section-subtitle">
              ATIVAR AI Workspace با هدف فراهم‌کردن محیطی سازمانی برای استفاده
              کنترل‌شده از قابلیت‌های هوش مصنوعی طراحی می‌شود؛ محیطی که بتواند
              متناسب با نیازهای کاری، سیاست‌های دسترسی و الزامات زیرساختی سازمان
              توسعه پیدا کند.
            </p>
            <p className="mt-4 text-sm leading-7 text-text-secondary">
              این محیط می‌تواند نقطه ورود کارکنان به دستیارهای هوشمند، ابزارهای
              کار با اسناد و قابلیت‌های منتخب هوش مصنوعی باشد؛ بدون آنکه سازمان
              ناچار باشد برای هر نیاز، ابزار جداگانه‌ای انتخاب و مدیریت کند.
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
          <p className="text-xs font-medium text-text-secondary">
            ۰۵ / روش همکاری
          </p>
          <div className="mt-4 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="section-title">از مسئله تا راهکار قابل اجرا</h2>
            <p className="max-w-md text-sm leading-7 text-text-secondary">
              هر مرحله خروجی مشخص دارد و مرحله بعد بر پایه نتیجه مرحله قبل تعریف
              می‌شود.
            </p>
          </div>

          <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
            {process.map((step, index) => (
              <li key={step.title} className="border-t border-border pt-5">
                <p className="text-xs tabular-nums text-text-secondary">
                  {faNumber(index + 1)}
                </p>
                <h3 className="mt-2 text-base font-semibold text-text-primary">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-7 text-text-secondary">
                  {step.desc}
                </p>
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
            <h2 className="section-title">
              برای سازمان شما چه راهکاری مناسب است؟
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-text-secondary">
              اگر سازمان شما با گزارش‌گیری زمان‌بر، دانش پراکنده، فرایندهای
              ناکارآمد، پیچیدگی سامانه‌های مالی یا نیاز به توسعه خدمات دیجیتال
              مواجه است، نقطه شروع، شناخت دقیق مسئله است.
            </p>
            <p className="mx-auto mt-3 max-w-2xl text-base leading-8 text-text-secondary">
              در جلسه اولیه، مسئله و هدف موردنظر را بررسی می‌کنیم تا مشخص شود چه
              نوع مشاوره یا راهکاری می‌تواند برای سازمان شما مناسب باشد.
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
