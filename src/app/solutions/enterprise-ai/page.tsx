import Link from "next/link";
import { AiArchitectureMap } from "@/components/diagrams/ai-architecture-map";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "هوش مصنوعی سازمانی",
  description: "طراحی و استقرار محیط‌های هوش مصنوعی اختصاصی متناسب با دانش، داده، فرایندها و الزامات امنیتی سازمان.",
  path: "/solutions/enterprise-ai",
});

const caps = [
  "دستیار هوشمند اختصاصی سازمان",
  "جست‌وجوی معنایی و بازیابی دانش سازمان",
  "تحلیل اسناد و استخراج اطلاعات",
  "اتوماسیون فرایندهای سازمانی",
  "اتصال کنترل‌شده به سامانه‌ها و پایگاه‌های داده",
  "تحلیل اطلاعات و پشتیبانی از تصمیم‌گیری",
  "طراحی گردش‌کارهای مبتنی بر هوش مصنوعی",
  "ارزیابی کیفیت و قابلیت اطمینان مدل‌ها",
  "مدیریت دسترسی و سیاست‌های استفاده",
  "استقرار در زیرساخت مناسب سازمان",
];

export default function EnterpriseAIPage() {
  return (
    <>
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="section-title">هوش مصنوعی اختصاصی؛ متناسب با دانش، داده و فرایند سازمان شما</h1>
            <p className="section-subtitle">
              آتیوار به سازمان‌ها کمک می‌کند محیط‌های هوش مصنوعی متناسب با نیازهای عملیاتی خود ایجاد کنند؛ محیط‌هایی که می‌توانند به دانش سازمان متصل شوند، وظایف تخصصی را پشتیبانی کنند و با رعایت سیاست‌های امنیتی و سطوح دسترسی به کار گرفته شوند.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className="btn btn-primary">
                درخواست ارزیابی هوش مصنوعی سازمان
              </Link>
              <Link href="/products/ai-workspace" className="btn btn-outline">
                معرفی ATIVAR AI Workspace
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding border-b border-border">
        <div className="container-custom">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="section-title">معماری راهکار، از داده تا تصمیم</h2>
            <p className="max-w-md text-sm leading-7 text-text-secondary">
              راهکار در چهار لایه طراحی می‌شود و کنترل دسترسی، سیاست داده و نظارت انسانی در تمام
              لایه‌ها اعمال می‌گردد.
            </p>
          </div>
          <AiArchitectureMap />
        </div>
      </section>

      <section className="section-padding bg-brand-light/60">
        <div className="container-custom">
          <h2 className="section-title">قابلیت‌های قابل بررسی</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {caps.map((item) => (
              <div key={item} className="card p-4">
                <p className="text-sm font-medium text-text-primary">{item}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-text-secondary">
            هیچ قابلیت پیاده‌سازی‌نشده‌ای به‌عنوان ویژگی قطعی محصول معرفی نمی‌شود. وضعیت هر قابلیت در طراحی و قرارداد مشخص خواهد شد.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="section-title">امنیت، کنترل و نظارت انسانی</h2>
              <p className="section-subtitle">
                استفاده سازمانی از هوش مصنوعی باید با کنترل دسترسی، تعیین محل پردازش، نظارت انسانی در تصمیم‌های حساس و رعایت الزامات قانونی همراه باشد.
              </p>
              <div className="mt-6 space-y-3 text-sm text-text-secondary">
                <p>• تعریف سطح دسترسی کاربران و نقش‌ها</p>
                <p>• بررسی محل نگهداری و پردازش داده</p>
                <p>• طراحی سیاست‌های محرمانگی و استفاده</p>
                <p>• ارجاع به منابع و ارزیابی کیفیت پاسخ</p>
                <p>• پیش‌بینی نظارت انسانی در تصمیم‌های حساس</p>
              </div>
            </div>
            <div className="card p-8">
              <h3 className="text-lg font-semibold text-text-primary">سه سطح هوشمندی سازمانی آتیوار</h3>
              <div className="mt-6 space-y-4 text-sm">
                <div className="rounded-xl border border-border p-4">
                  <p className="font-medium text-text-primary">سطح اول: ATIVAR Data Intelligence</p>
                  <p className="mt-1 text-text-secondary">داده‌های سازمان به بینش مدیریتی تبدیل می‌شوند</p>
                </div>
                <div className="rounded-xl border border-border p-4">
                  <p className="font-medium text-text-primary">سطح دوم: ATIVAR Knowledge Intelligence</p>
                  <p className="mt-1 text-text-secondary">دانش سازمان به منبعی جست‌وجوپذیر و قابل استفاده تبدیل می‌شود</p>
                </div>
                <div className="rounded-xl border border-brand-accent/40 bg-brand-accentLight p-4">
                  <p className="font-semibold text-text-primary">سطح سوم: ATIVAR Enterprise LLM</p>
                  <p className="mt-1 text-text-primary">محیط هوش مصنوعی اختصاصی با کنترل و قابلیت توسعه</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
