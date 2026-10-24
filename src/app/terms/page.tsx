import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "شرایط استفاده",
  description: "شرایط استفاده از وب‌سایت و خدمات آتیوار.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <section className="section-padding">
      <div className="container-custom max-w-4xl">
        <h1 className="section-title">شرایط استفاده</h1>
        <p className="section-subtitle">
          با استفاده از وب‌سایت آتیوار، شرایط زیر را می‌پذیرید.
        </p>
        <div className="mt-10 space-y-8 text-sm leading-relaxed text-text-secondary">
          <div>
            <h2 className="text-lg font-semibold text-text-primary">۱. استفاده از محتوا</h2>
            <p className="mt-2">
              محتوای این وب‌سایت صرفاً برای اطلاع‌رسانی درباره خدمات آتیوار ارائه شده است. هرگونه استفاده تجاری، تکثیر یا بازنشر بدون مجوز کتبی ممنوع می‌باشد.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-text-primary">۲. دقت اطلاعات</h2>
            <p className="mt-2">
              تلاش شده است اطلاعات با دقت ارائه شود، اما آتیوار هیچ‌گونه تضمینی برای کامل بودن، به‌روز بودن یا صحت مطلق اطلاعات نمی‌دهد.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-text-primary">۳. لینک‌های خارجی</h2>
            <p className="mt-2">
              در صورت وجود لینک به وب‌سایت‌های دیگر، مسئولیت محتوای آن‌ها بر عهده آتیوار نیست.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-text-primary">۴. تغییرات</h2>
            <p className="mt-2">
              آتیوار حق تغییر، به‌روزرسانی یا حذف هر بخش از وب‌سایت را بدون اطلاع قبلی محفوظ می‌دارد.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
