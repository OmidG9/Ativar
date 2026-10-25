import Link from "next/link";
import { CTA_LABELS } from "@/lib/cta";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "ATIVAR AI Workspace",
  description:
    "محیط اختصاصی هوش مصنوعی برای کار و دانش سازمانی؛ دسترسی کنترل‌شده به دستیارهای تخصصی، ابزارهای اسناد و قابلیت‌های منتخب هوش مصنوعی.",
  path: "/products/ai-workspace",
});

const capabilities = [
  {
    title: "محیط یکپارچه استفاده از هوش مصنوعی",
    description: "فراهم‌کردن نقطه دسترسی مشترک برای قابلیت‌های تأییدشده و مورد نیاز کاربران سازمان.",
  },
  {
    title: "ابزارهای کار با اسناد",
    description:
      "خلاصه‌سازی، دسته‌بندی و استخراج اطلاعات از اسناد، متناسب با مدل انتخابی، منابع مجاز و دامنه پیاده‌سازی.",
  },
  {
    title: "دستیارهای تخصصی",
    description: "طراحی دستیارهای متناسب با نقش‌ها و نیازهای کاری مختلف.",
  },
  {
    title: "مدیریت کاربران و دسترسی‌ها",
    description:
      "تعریف کاربران، نقش‌ها و محدوده دسترسی متناسب با معماری و سیاست‌های سازمان.",
  },
  {
    title: "امکان استقرار متناسب با زیرساخت",
    description:
      "بررسی گزینه‌های استقرار داخلی، محیط خصوصی مدیریت‌شده یا سرویس ابری تأییدشده بر اساس محرمانگی داده، الزامات فنی و هزینه.",
  },
  {
    title: "قابلیت توسعه و یکپارچه‌سازی",
    description: "بررسی امکان اتصال به منابع اطلاعاتی و سامانه‌های منتخب بر اساس دامنه پروژه.",
  },
];

const benefits = [
  "ساده‌تر شدن دسترسی کارکنان به ابزارهای هوش مصنوعی",
  "امکان مدیریت متمرکزتر استفاده از قابلیت‌های منتخب",
  "کاهش پراکندگی ابزارها در صورت جایگزینی راهکارهای نامنسجم",
  "فراهم‌شدن بستر توسعه دستیارهای تخصصی",
  "امکان تعیین سیاست‌های استفاده و ارزیابی کیفیت",
  "ایجاد پایه‌ای برای توسعه تدریجی قابلیت‌های هوشمند",
];

const deploymentModels = [
  {
    title: "زیرساخت اختصاصی مشتری",
    description: "پردازش و داده‌ها در زیرساخت سازمان مشتری.",
  },
  {
    title: "زیرساخت خصوصی مدیریت‌شده",
    description: "طراحی و مدیریت توسط آتیوار با رعایت الزامات امنیتی توافق‌شده.",
  },
  {
    title: "زیرساخت ابری یا محیط مورد تأیید طرفین",
    description: "بر اساس نیاز، هزینه، الزامات و ضوابط سازمان.",
  },
];

export default function AIWorkspacePage() {
  return (
    <>
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold tracking-wide text-brand-accent">ATIVAR AI Workspace</p>
            <h1 className="section-title mt-3">محیط اختصاصی هوش مصنوعی برای کار و دانش سازمانی</h1>
            <p className="section-subtitle">
              ATIVAR AI Workspace با هدف فراهم‌کردن محیطی سازمانی برای استفاده کنترل‌شده از
              قابلیت‌های هوش مصنوعی طراحی می‌شود؛ محیطی که بتواند متناسب با نیازهای کاری،
              سیاست‌های دسترسی و الزامات زیرساختی سازمان توسعه پیدا کند.
            </p>
            <p className="mt-4 text-base leading-8 text-text-secondary">
              این محیط می‌تواند نقطه ورود کارکنان به دستیارهای هوشمند، ابزارهای کار با اسناد و
              قابلیت‌های منتخب هوش مصنوعی باشد؛ بدون آنکه سازمان ناچار باشد برای هر نیاز، ابزار
              جداگانه‌ای انتخاب و مدیریت کند.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact?type=ai-workspace" className="btn btn-primary">
                {CTA_LABELS.consult}
              </Link>
              <Link href="/solutions/enterprise-ai" className="btn btn-outline">
                معرفی هوش مصنوعی سازمانی
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding border-y border-border bg-brand-light/50">
        <div className="container-custom">
          <div className="max-w-2xl">
            <h2 className="section-title">قابلیت‌های قابل طراحی</h2>
            <p className="section-subtitle">
              هر قابلیت بر اساس نیاز سازمان، منابع مجاز و دامنه پیاده‌سازی تعریف و ارزیابی می‌شود.
            </p>
          </div>
          <div className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((capability) => (
              <div key={capability.title} className="border-t border-border pt-5">
                <h3 className="text-base font-semibold text-text-primary">{capability.title}</h3>
                <p className="mt-2 text-sm leading-7 text-text-secondary">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-16">
            <div>
              <h2 className="section-title">مزایای سازمانی</h2>
              <ul className="mt-8 border-t border-border">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3 border-b border-border py-4">
                    <span
                      aria-hidden="true"
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-accent"
                    />
                    <span className="text-sm leading-7 text-text-primary">{benefit}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-xs leading-6 text-text-secondary">
                هیچ ادعایی مبنی بر درصد صرفه‌جویی قطعی بدون داده معتبر ارائه نمی‌شود. میزان تحقق
                مزایا به دامنه پیاده‌سازی و شرایط سازمان وابسته است.
              </p>
            </div>

            <div>
              <h2 className="section-title">مدل‌های استقرار</h2>
              <div className="mt-8 space-y-4">
                {deploymentModels.map((model, index) => (
                  <div key={model.title} className="card p-5">
                    <h3 className="text-base font-semibold text-text-primary">
                      {index + 1}. {model.title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-text-secondary">{model.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding border-t border-border">
        <div className="container-custom">
          <div className="rounded-2xl border border-border bg-brand-light/60 p-6 sm:p-8">
            <h2 className="text-xl font-bold text-text-primary">شفافیت در دامنه محصول</h2>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-text-secondary">
              قابلیت‌های واقعی هر استقرار باید در پیشنهاد فنی و قرارداد مشخص شوند. امکاناتی مانند
              اتصال به سامانه‌های سازمان، مدیریت پیشرفته کاربران، گزارش مصرف، API، پردازش محلی یا
              اتصال به پایگاه دانش فقط زمانی به‌عنوان ویژگی آماده معرفی می‌شوند که پیاده‌سازی و
              آزمون آن‌ها تأیید شده باشد.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Link href="/contact?type=ai-workspace" className="btn btn-primary">
                {CTA_LABELS.consult}
              </Link>
              <Link href="/contact" className="btn btn-outline">
                {CTA_LABELS.talk}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
