import Link from "next/link";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "پروژه‌ها و تجربه‌ها",
  description: "مطالعات موردی و تجربه‌های واقعی آتیوار در حوزه فین‌تک، هوش مصنوعی سازمانی و اجرای پروژه‌های فناوری.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <>
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="section-title">پروژه‌ها و تجربه‌ها</h1>
            <p className="section-subtitle">
              توانمندی‌های آتیوار از طریق تجربه‌های مستند و قابل اثبات معرفی می‌شود. در صورت عدم وجود مطالعه موردی قابل انتشار، این بخش با توضیح رویکرد اجرایی تکمیل خواهد شد.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-brand-light/60">
        <div className="container-custom">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="card p-8">
              <div className="inline-flex items-center rounded-full border border-border px-3 py-1 text-xs text-text-secondary">
                نقطه آغاز تخصص فین‌تک آتیوار
              </div>
              <h2 className="mt-4 text-xl font-semibold text-text-primary">پروژه مرتبط با فروش و مدیریت فرایندهای فلزات گران‌بها</h2>
              <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                این پروژه به‌عنوان آغاز مسیر تکامل آتیوار معرفی می‌شود. جزئیات دقیق فنی، نقش‌ها و نتایج مستند در صورت کسب مجوز انتشار، در این بخش درج خواهد شد.
              </p>
              <div className="mt-6 space-y-2 text-sm text-text-secondary">
                <p>• مسئله: نیاز به ساماندهی فرایندهای فروش و مدیریت مرتبط با فلزات گران‌بها</p>
                <p>• رویکرد: طراحی سامانه تخصصی و بهبود جریان‌های عملیاتی</p>
                <p>• مسیر توسعه: افزودن قابلیت‌های هوشمند و گسترش به راهکارهای سازمانی</p>
              </div>
              <Link
                href="/projects/precious-metals-platform"
                className="mt-6 inline-flex text-sm font-semibold text-brand-primary"
              >
                مشاهده مطالعه موردی
              </Link>
            </div>
            <div className="card p-8">
              <h2 className="text-xl font-semibold text-text-primary">رویکرد مطالعه موردی در آتیوار</h2>
              <div className="mt-4 space-y-3 text-sm text-text-secondary">
                <p>۱. مسئله کسب‌وکار</p>
                <p>۲. پیچیدگی‌های فنی و عملیاتی</p>
                <p>۳. نقش دقیق اجراکنندگان</p>
                <p>۴. راهکار طراحی‌شده و معماری سطح بالا</p>
                <p>۵. مراحل اجرا و معیارهای پذیرش</p>
                <p>۶. نتایج مستند و شاخص‌های عملکردی</p>
              </div>
              <p className="mt-6 text-sm text-text-secondary">
                تنها اطلاعاتی که دارای پشتوانه مستند و مجوز انتشار هستند، درج خواهند شد.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="card p-8 lg:p-10">
            <div className="grid gap-6 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="text-2xl font-bold text-text-primary">آیا پروژه مشابهی دارید؟</h2>
                <p className="mt-4 text-lg leading-relaxed text-text-secondary">
                  مسئله خود را با ما در میان بگذارید. در جلسه اولیه، امکان‌سنجی و مسیر مناسب را بررسی می‌کنیم.
                </p>
              </div>
              <div className="flex flex-col items-start gap-3 lg:items-end">
                <Link href="/contact" className="btn btn-primary">
                  درخواست جلسه مشاوره
                </Link>
                <Link href="/services/implementation" className="text-sm font-semibold text-brand-primary">
                  طراحی و اجرای پروژه
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
