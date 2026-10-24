import type { Metadata } from "next";
import { ContactForm } from "@/components/forms/contact-form";

export const metadata: Metadata = {
  title: "تماس و همکاری",
  description: "درخواست جلسه مشاوره، ارزیابی هوش مصنوعی سازمان، طراحی معماری یا اجرای پروژه با آتیوار.",
};

export default function ContactPage() {
  return (
    <>
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="section-title">تماس و همکاری</h1>
            <p className="section-subtitle">
              مسئله سازمان خود را مطرح کنید. در جلسه اولیه، نیاز، هدف و محدودیت‌ها را بررسی می‌کنیم و در صورت تناسب، مسیر ارزیابی و طراحی راهکار مشخص خواهد شد.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-brand-light/60">
        <div className="container-custom grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="card p-6 sm:p-8">
              <h2 className="text-xl font-semibold text-text-primary">فرم درخواست همکاری</h2>
              <p className="mt-2 text-sm text-text-secondary">
                اطلاعات مورد نیاز برای اولین بررسی کافی است. فیلدهای ضروری با ستاره مشخص شده‌اند.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="card p-6 sm:p-8">
              <h2 className="text-xl font-semibold text-text-primary">راهکارهای رایج برای شروع</h2>
              <div className="mt-6 space-y-4 text-sm text-text-secondary">
                <div className="rounded-xl border border-border p-4">
                  <p className="font-medium text-text-primary">درخواست جلسه مشاوره</p>
                  <p className="mt-1">بررسی کلی مسئله و تعیین مسیر مناسب</p>
                </div>
                <div className="rounded-xl border border-border p-4">
                  <p className="font-medium text-text-primary">درخواست ارزیابی هوش مصنوعی</p>
                  <p className="mt-1">بررسی آمادگی داده، دانش و زیرساخت سازمان</p>
                </div>
                <div className="rounded-xl border border-border p-4">
                  <p className="font-medium text-text-primary">درخواست طراحی معماری</p>
                  <p className="mt-1">تهیه سند معماری و برنامه پیاده‌سازی</p>
                </div>
                <div className="rounded-xl border border-border p-4">
                  <p className="font-medium text-text-primary">درخواست اجرای پروژه</p>
                  <p className="mt-1">برآورد دامنه، زمان‌بندی و معیارهای پذیرش</p>
                </div>
              </div>
              <div className="mt-6 rounded-xl bg-brand-accentLight p-4 text-sm text-text-primary">
                <p className="font-medium">اصل اولویت</p>
                <p className="mt-1 text-text-secondary">
                  مسئله سازمان مهم‌تر از انتخاب فناوری است. ابتدا مشکل را تعریف کنید، سپس راهکار بررسی می‌شود.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
