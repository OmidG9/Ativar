import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "سلب مسئولیت",
  description: "سلب مسئولیت عمومی خدمات مشاوره‌ای آتیوار.",
  path: "/disclaimer",
});

export default function DisclaimerPage() {
  return (
    <section className="section-padding">
      <div className="container-custom max-w-4xl">
        <h1 className="section-title">سلب مسئولیت</h1>
        <p className="section-subtitle">
          اطلاعات ارائه‌شده در این وب‌سایت صرفاً جنبه اطلاع‌رسانی و تبلیغاتی دارد.
        </p>
        <div className="mt-10 space-y-8 text-sm leading-relaxed text-text-secondary">
          <div>
            <h2 className="text-lg font-semibold text-text-primary">۱. ماهیت خدمات</h2>
            <p className="mt-2">
              خدمات آتیوار در حوزه مشاوره، طراحی، معماری و اجرای راهکارهای فناوری است. این وب‌سایت جایگزین مشاوره تخصصی، حقوقی، مالی یا فنی دقیق برای هر سازمان خاص نمی‌باشد.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-text-primary">۲. تفکیک از خدمات نیازمند مجوز</h2>
            <p className="mt-2">
              آتیوار فعالیت‌های مشاوره‌ای و فنی را ارائه می‌دهد. هیچ‌گونه ادعایی مبنی بر ارائه خدمات بانکی، پرداختی، کارگزاری، مؤسسه اعتباری یا سایر خدمات نیازمند مجوز خاص در این وب‌سایت وجود ندارد.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-text-primary">۳. نتایج پروژه‌ها</h2>
            <p className="mt-2">
              هر پروژه متناسب با شرایط، داده‌ها، زیرساخت و همکاری سازمان مشتری اجرا می‌شود و هیچ‌گونه تضمین مطلقی برای نتایج مالی یا عملکردی بدون بررسی موارد فوق ارائه نمی‌گردد.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
