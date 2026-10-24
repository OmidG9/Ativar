import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "طراحی و اجرای پروژه",
  description: "معماری، یکپارچه‌سازی، توسعه، استقرار و پشتیبانی راهکارهای تخصصی فناوری با دامنه کار شفاف و معیار پذیرش مشخص.",
};

const services = [
  "تحلیل نیازمندی",
  "طراحی معماری راهکار",
  "تهیه اسناد فنی و RFP",
  "انتخاب فناوری و طراحی زیرساخت",
  "مدیریت پروژه",
  "مدیریت پیمانکاران",
  "توسعه و یکپارچه‌سازی سامانه‌ها",
  "پیاده‌سازی راهکارهای هوش مصنوعی",
  "آزمون امنیت و کیفیت",
  "استقرار و انتقال دانش",
  "پشتیبانی و بهبود مستمر",
];

const models = [
  { title: "مشاوره مستقل", desc: "طراحی، بررسی و راهنمایی فنی" },
  { title: "قرارداد طراحی و معماری", desc: "تهیه اسناد فنی، معماری و برنامه اجرایی" },
  { title: "قرارداد اجرای مرحله‌ای", desc: "اجرای محدود با اهداف و معیارهای مشخص" },
  { title: "پیمانکاری یکپارچه", desc: "طراحی تا استقرار با مسئولیت مشخص" },
  { title: "قرارداد پشتیبانی و بهبود مستمر", desc: "پشتیبانی، نظارت و بهبود تدریجی" },
];

export default function ImplementationPage() {
  return (
    <>
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="section-title">طراحی و اجرای پروژه‌های فناوری سازمانی</h1>
            <p className="section-subtitle">
              از تعریف مسئله تا استقرار و انتقال دانش؛ با دامنه کار شفاف، معیارهای پذیرش مشخص و مسئولیت‌های تعریف‌شده.
            </p>
            <div className="mt-8">
              <Link href="/contact" className="btn btn-primary">
                درخواست بررسی و برآورد پروژه
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-brand-light/60">
        <div className="container-custom">
          <h2 className="section-title">خدمات اجرایی</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((item) => (
              <div key={item} className="card p-4">
                <p className="text-sm font-medium text-text-primary">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <h2 className="section-title">مدل‌های قرارداد</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {models.map((item) => (
              <div key={item.title} className="card p-6">
                <h3 className="text-base font-semibold text-text-primary">{item.title}</h3>
                <p className="mt-2 text-sm text-text-secondary">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-text-secondary">
            در هر پروژه، دامنه کار، معیارهای پذیرش، زمان‌بندی، مسئولیت‌ها، الزامات امنیتی و نحوه نظارت پیش از شروع توافق می‌شود.
          </p>
        </div>
      </section>
    </>
  );
}
