import Link from "next/link";
import { FintechCapabilityMap } from "@/components/diagrams/fintech-capability-map";
import { ServiceDepth } from "@/components/sections/service-depth";
import { CTA_LABELS } from "@/lib/cta";
import { createMetadata } from "@/lib/metadata";
import { faNumber } from "@/lib/number";

export const metadata = createMetadata({
  title: "مشاوره و معماری فین‌تک | طراحی و اجرای راهکارهای مالی",
  description:
    "مشاوره، طراحی معماری، یکپارچه‌سازی و اجرای راهکارهای فناوری مالی متناسب با نیاز کسب‌وکار و الزامات فنی و عملیاتی سازمان.",
  path: "/solutions/fintech",
});

const services = [
  {
    title: "معماری سامانه‌های مالی",
    description: "طراحی ساختار سامانه، اجزای کلیدی، جریان داده، ارتباطات فنی و نیازمندی‌های توسعه.",
  },
  {
    title: "تحلیل و طراحی فرایندهای مالی دیجیتال",
    description: "بررسی فرایندهای موجود، شناسایی گلوگاه‌ها و طراحی مسیر بهبود متناسب با نیاز کسب‌وکار.",
  },
  {
    title: "یکپارچه‌سازی سامانه‌ها",
    description:
      "بررسی و طراحی ارتباط میان سامانه‌های منتخب، منابع اطلاعاتی و اجزای نرم‌افزاری بر اساس امکان فنی و الزامات دسترسی.",
  },
  {
    title: "هوش مصنوعی در فرایندهای مالی",
    description:
      "بررسی کاربردهایی مانند تحلیل اسناد، استخراج اطلاعات، گزارش‌سازی، جست‌وجوی دانش و کمک به فعالیت‌های کارشناسی.",
  },
  {
    title: "راهکارهای مرتبط با فلزات گران‌بها",
    description:
      "تجربه محصولی آتیوار در حوزه فلزات گران‌بها می‌تواند نقطه شروع معرفی توانمندی‌های مرتبط با سامانه‌های تخصصی این بازار باشد. دامنه قابلیت‌ها، نقش آتیوار و سوابق قابل انتشار بر اساس مستندات واقعی معرفی می‌شوند.",
  },
  {
    title: "امکان‌سنجی و طراحی مسیر اجرا",
    description:
      "بررسی گزینه‌های فنی، هزینه‌ها، پیچیدگی اجرا، وابستگی‌ها و الزامات قانونی مرتبط با پروژه.",
  },
];

const valuePoints = [
  "شفاف‌تر شدن نیازمندی‌ها پیش از توسعه",
  "کاهش ابهام در دامنه و معماری پروژه",
  "بهبود هماهنگی میان سامانه‌ها",
  "افزایش قابلیت نگهداری و توسعه راهکار",
  "فراهم‌شدن امکان سنجش کیفیت و پذیرش پروژه",
  "کاهش ریسک ناشی از تصمیم‌های فنی بدون امکان‌سنجی کافی",
];

export default function FintechPage() {
  return (
    <>
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold tracking-wide text-brand-accent">راهکارهای فین‌تک</p>
            <h1 className="section-title mt-3">
              طراحی و اجرای راهکارهای فناوری مالی متناسب با کسب‌وکار
            </h1>
            <p className="section-subtitle">
              در کسب‌وکارهای مالی، کیفیت معماری، یکپارچگی سامانه‌ها، قابلیت ردیابی عملیات و تناسب
              فناوری با فرایندهای واقعی اهمیت زیادی دارد.
            </p>
            <p className="mt-4 text-base leading-8 text-text-secondary">
              آتیوار در زمینه مشاوره، طراحی معماری و اجرای راهکارهای فنی و دیجیتال مرتبط با
              کسب‌وکارهای مالی فعالیت می‌کند؛ با تمرکز بر شناخت نیاز، طراحی راهکار قابل توسعه و توجه
              به الزامات عملیاتی، امنیتی و قانونی.
            </p>
            <div className="mt-8">
              <Link href="/contact" className="btn btn-primary">
                {CTA_LABELS.consult}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding border-y border-border">
        <div className="container-custom">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="section-title">نقشه قابلیت‌های فین‌تک</h2>
            <p className="max-w-md text-sm leading-7 text-text-secondary">
              چهار حوزه به‌هم‌پیوسته؛ از راهبرد و مدل کسب‌وکار تا معماری، داده و کنترل‌های لازم.
            </p>
          </div>
          <FintechCapabilityMap />
        </div>
      </section>

      <section className="section-padding bg-brand-light/50">
        <div className="container-custom">
          <div className="max-w-2xl">
            <h2 className="section-title">خدمات فین‌تک</h2>
            <p className="section-subtitle">
              هر خدمت با دامنه روشن و خروجی قابل تعریف ارائه می‌شود؛ مرز خدمات فنی از فعالیت‌های
              نیازمند مجوز جدا نگه داشته می‌شود.
            </p>
          </div>
          <div className="mt-10 grid gap-x-10 sm:grid-cols-2">
            {services.map((service, index) => (
              <div key={service.title} className="border-t border-border py-6">
                <p className="text-xs tabular-nums text-text-secondary">{faNumber(index + 1)}</p>
                <h3 className="mt-2 text-base font-semibold text-text-primary">{service.title}</h3>
                <p className="mt-2 text-sm leading-7 text-text-secondary">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <div>
              <h2 className="section-title">ارزش برای سازمان</h2>
              <p className="section-subtitle">
                هدف، ساخت سریع یک محصول نیست؛ ایجاد راهکاری است که بتواند با رشد کسب‌وکار و
                الزامات جدید تکامل یابد.
              </p>
            </div>
            <ul className="border-t border-border">
              {valuePoints.map((item) => (
                <li key={item} className="flex items-start gap-3 border-b border-border py-4">
                  <span
                    aria-hidden="true"
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-accent"
                  />
                  <span className="text-sm leading-7 text-text-primary">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-12 rounded-2xl border border-brand-primary/20 bg-brand-light/60 p-6 sm:p-8">
            <h3 className="text-base font-semibold text-text-primary">مرزبندی ضروری</h3>
            <p className="mt-3 max-w-4xl text-sm leading-7 text-text-secondary">
              خدمات آتیوار در حوزه فناوری و مشاوره مالی به‌خودی‌خود به معنای ارائه خدمات مالی
              مجوزمحور نیست. هر فعالیتی که مستلزم مجوز یا تأیید قانونی باشد، باید بر اساس الزامات
              مربوط و وضعیت مجوزهای لازم بررسی شود.
            </p>
          </div>
        </div>
      </section>

      <ServiceDepth
        problem={{
          heading: "ابهام در مرز فناوری، کسب‌وکار و الزامات مجوز",
          lead: "طراحی محصول مالی دیجیتال هم‌زمان به مدل کسب‌وکار، معماری فناوری و الزامات قانونی وابسته است. اگر این سه حوزه از ابتدا تفکیک نشوند، تغییرات پرهزینه در میانه راه اجتناب‌ناپذیر می‌شود. آتیوار مسئولیت فنی و مشاوره‌ای را از فعالیت‌های نیازمند مجوز جدا نگه می‌دارد.",
          signals: [
            "ابهام در اینکه کدام بخش از محصول نیازمند مجوز است",
            "سامانه‌های قدیمی و هزینه بالای یکپارچه‌سازی",
            "نبود تصویر روشن از جریان داده و مرز مسئولیت‌ها",
            "ریسک عملیاتی در فرایندهای مرتبط با دارایی و وثیقه",
            "تجربه کاربری ناهمگون در کانال‌های مختلف خدمت",
          ],
        }}
        approach={{
          heading: "از مدل کسب‌وکار تا آمادگی اجرا",
          lead: "کار با روشن کردن محدوده مجاز و جریان ارزش آغاز می‌شود؛ طراحی فنی پس از آن و بر پایه همین محدوده انجام می‌گیرد.",
          steps: [
            {
              title: "تثبیت مدل کسب‌وکار و محدوده مجاز",
              description:
                "روشن کردن جریان ارزش، بازیگران و مرز خدمات فنی در برابر فعالیت‌هایی که نیازمند مجوز مستقل هستند.",
            },
            {
              title: "طراحی معماری و یکپارچه‌سازی",
              description:
                "تعریف اجزا، اینترفیس‌ها، مدل داده و مسیر اتصال به سامانه‌های موجود با در نظر گرفتن محدودیت‌های واقعی.",
            },
            {
              title: "کنترل‌ها، امنیت و تاب‌آوری",
              description:
                "طراحی دسترسی، ثبت رخداد، پایش و سناریوهای تداوم خدمت متناسب با حساسیت داده و فرایند.",
            },
            {
              title: "آماده‌سازی اجرا و ارزیابی",
              description:
                "تدوین نقشه اجرا، معیار پذیرش و برنامه آزمون پیش از ورود به فاز پیاده‌سازی.",
            },
          ],
        }}
        value={{
          heading: "ارزش قابل انتظار در یک پروژه فین‌تک",
          lead: "هدف، ساخت سریع یک محصول نیست؛ ایجاد راهکاری است که بتواند با رشد کسب‌وکار و الزامات جدید تکامل یابد.",
          outcomes: [
            {
              title: "شفافیت محدوده",
              description:
                "تفکیک روشن مسئولیت فنی از فعالیت مجوزمحور، مبنای همکاری با شرکای مجاز را روشن می‌کند.",
            },
            {
              title: "معماری مقیاس‌پذیر",
              description:
                "طراحی ماژولار امکان افزودن کانال‌ها و محصولات جدید را بدون بازنویسی کامل فراهم می‌کند.",
            },
            {
              title: "کاهش ریسک یکپارچه‌سازی",
              description:
                "شناسایی وابستگی‌ها و تعریف اینترفیس‌ها پیش از اجرا، هزینه تغییر در مراحل پایانی را کاهش می‌دهد.",
            },
            {
              title: "آمادگی برای ارزیابی",
              description:
                "مستندسازی تصمیم‌ها و کنترل‌ها، بررسی فنی و انطباق را برای ذی‌نفعان و شرکا ساده‌تر می‌کند.",
            },
          ],
        }}
        faq={{
          heading: "پرسش‌های رایج درباره محدوده کار",
          items: [
            {
              question: "آیا آتیوار مجوز خدمات مالی دارد؟",
              answer:
                "نه. آتیوار در حوزه مشاوره فنی، طراحی معماری و پیاده‌سازی نرم‌افزار فعالیت می‌کند و خدمات بانکی، پرداخت، کارگزاری یا سایر فعالیت‌های نیازمند مجوز ارائه نمی‌دهد. در پروژه‌هایی که فعالیت مجوزمحور لازم است، همکاری با دارنده مجوز معتبر پیش‌بینی می‌شود.",
            },
            {
              question: "همکاری با شرکت‌های دارای مجوز چگونه است؟",
              answer:
                "آتیوار می‌تواند نقش تأمین‌کننده فنی یا مشاور را در کنار نهاد دارای مجوز داشته باشد. محدوده مسئولیت‌ها و مرز خدمات پیش از شروع در قرارداد و اسناد پروژه مشخص می‌شود.",
            },
            {
              question: "با سامانه‌های قدیمی هم یکپارچه می‌شوید؟",
              answer:
                "بله، مشروط به وجود اینترفیس فنی یا امکان ایجاد آن. در غیر این صورت گزینه‌های لایه واسط، همگام‌سازی دوره‌ای یا جایگزینی تدریجی ارزیابی و پیشنهاد می‌شود.",
            },
            {
              question: "درباره تجربه در حوزه فلزات گران‌بها چه اطلاعاتی ارائه می‌کنید؟",
              answer:
                "تجربه آغازین آتیوار در این حوزه است و به‌صورت محافظه‌کارانه و بدون ارائه آمار یا ادعای تأییدنشده بیان می‌شود. جزئیات قابل ارائه، پس از هماهنگی و با رضایت کارفرما در اختیار قرار می‌گیرد.",
            },
            {
              question: "برای شروع چه اطلاعاتی لازم است؟",
              answer:
                "توضیح مدل کسب‌وکار، فهرست سامانه‌ها و شرکای فنی موجود، محدوده تقریبی محصول و الزامات قانونی شناخته‌شده. بر همین پایه دامنه بررسی و گام بعدی تعیین می‌شود.",
            },
          ],
        }}
      />

      <section className="section-padding border-t border-border">
        <div className="container-custom">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="text-2xl font-bold text-text-primary">راهکار فین‌تک خود را بررسی کنیم</h2>
              <p className="mt-2 max-w-xl text-sm leading-7 text-text-secondary">
                محدوده فعلی، سامانه‌های موجود و گام بعدی را در یک جلسه اولیه مرور می‌کنیم.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Link href="/contact" className="btn btn-primary">
                {CTA_LABELS.consult}
              </Link>
              <Link href="/services/implementation" className="btn btn-outline">
                بررسی معماری و اجرای پروژه
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
