import Link from "next/link";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "ATIVAR AI Workspace",
  description: "محیط اختصاصی هوش مصنوعی آتیوار؛ تبدیل دانش و اطلاعات سازمان به یک ابزار هوشمند قابل کنترل و توسعه.",
  path: "/products/ai-workspace",
});

export default function AIWorkspacePage() {
  return (
    <>
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="section-title">دانش و اطلاعات سازمان خود را به یک ابزار هوشمند تبدیل کنید</h1>
            <p className="section-subtitle">
              ATIVAR AI Workspace محیطی است برای استقرار و استفاده سازمانی از قابلیت‌های هوش مصنوعی که متناسب با نیاز، زیرساخت، سیاست‌های امنیتی و دانش اختصاصی هر سازمان پیکربندی می‌شود.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className="btn btn-primary">
                درخواست ارزیابی و طراحی محیط اختصاصی
              </Link>
              <Link href="/solutions/enterprise-ai" className="btn btn-outline">
                معرفی هوش مصنوعی سازمانی
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-brand-light/60">
        <div className="container-custom">
          <h2 className="section-title">قابلیت‌های قابل طراحی و توسعه</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "محیط اختصاصی برای هر سازمان",
              "تعریف کاربران و نقش‌ها",
              "اتصال به اسناد و دانش سازمان",
              "جست‌وجو و پاسخ‌گویی مبتنی بر منابع",
              "انتخاب یا پیکربندی مدل‌های هوش مصنوعی",
              "مدیریت اتصال به داده‌ها و سامانه‌ها",
              "ثبت رویدادهای مهم",
              "کنترل دسترسی و سیاست‌های استفاده",
              "گزارش‌گیری و پایش عملکرد",
              "قابلیت استقرار متناسب با الزامات مشتری",
            ].map((item) => (
              <div key={item} className="card p-4">
                <p className="text-sm font-medium text-text-primary">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="section-title">مدل‌های استقرار</h2>
              <div className="mt-6 space-y-4">
                <div className="card p-5">
                  <h3 className="text-base font-semibold text-text-primary">۱. زیرساخت اختصاصی مشتری</h3>
                  <p className="mt-2 text-sm text-text-secondary">پردازش و داده‌ها در زیرساخت سازمان مشتری</p>
                </div>
                <div className="card p-5">
                  <h3 className="text-base font-semibold text-text-primary">۲. زیرساخت خصوصی مدیریت‌شده</h3>
                  <p className="mt-2 text-sm text-text-secondary">طراحی و مدیریت توسط آتیوار با رعایت الزامات امنیتی توافق‌شده</p>
                </div>
                <div className="card p-5">
                  <h3 className="text-base font-semibold text-text-primary">۳. زیرساخت ابری یا محیط مورد تأیید طرفین</h3>
                  <p className="mt-2 text-sm text-text-secondary">بر اساس نیاز، هزینه، الزامات و ضوابط سازمان</p>
                </div>
              </div>
            </div>
            <div className="card p-8">
              <h3 className="text-lg font-semibold text-text-primary">ارزش کسب‌وکار</h3>
              <div className="mt-6 space-y-3 text-sm text-text-secondary">
                <p>• دسترسی سازمانی به هوش مصنوعی با کنترل</p>
                <p>• کاهش زمان جست‌وجو و پردازش اطلاعات</p>
                <p>• استفاده مؤثرتر از دانش داخلی</p>
                <p>• افزایش بهره‌وری فرایندهای دانشی</p>
                <p>• امکان کنترل دسترسی و سیاست‌های استفاده</p>
                <p>• قابلیت توسعه تدریجی بر اساس نیاز سازمان</p>
              </div>
              <p className="mt-6 text-xs text-text-secondary">
                هیچ ادعایی مبنی بر درصد صرفه‌جویی قطعی بدون داده معتبر ارائه نمی‌شود.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
