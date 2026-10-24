import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "سیاست حریم خصوصی",
  description: "سیاست حریم خصوصی وب‌سایت آتیوار در خصوص جمع‌آوری، استفاده و حفاظت از اطلاعات کاربران.",
};

export default function PrivacyPage() {
  return (
    <section className="section-padding">
      <div className="container-custom max-w-4xl">
        <h1 className="section-title">سیاست حریم خصوصی</h1>
        <p className="section-subtitle">
          این سیاست نحوه جمع‌آوری، استفاده، نگهداری و حفاظت از اطلاعات کاربران وب‌سایت آتیوار را توضیح می‌دهد.
        </p>
        <div className="mt-10 space-y-8 text-sm leading-relaxed text-text-secondary">
          <div>
            <h2 className="text-lg font-semibold text-text-primary">۱. اطلاعات جمع‌آوری‌شده</h2>
            <p className="mt-2">
              در صورت استفاده از فرم‌های تماس، تنها اطلاعاتی که شما داوطلبانه وارد می‌کنید (نام، نام خانوادگی، نام سازمان، سمت، ایمیل کاری، شماره تماس، نوع درخواست و شرح مسئله) جمع‌آوری می‌شود.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-text-primary">۲. هدف استفاده از اطلاعات</h2>
            <p className="mt-2">
              اطلاعات جمع‌آوری‌شده صرفاً برای بررسی درخواست، ارتباط با شما، ارزیابی نیاز سازمان و ارائه پیشنهاد در صورت تناسب با خدمات آتیوار مورد استفاده قرار می‌گیرد.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-text-primary">۳. حفاظت از اطلاعات</h2>
            <p className="mt-2">
              آتیوار تلاش می‌کند از اطلاعات ارسالی در برابر دسترسی غیرمجاز، افشا، تغییر یا حذف محافظت کند. با این حال، هیچ روش انتقال یا ذخیره‌سازی اطلاعات در اینترنت نمی‌تواند صددرصد امن باشد.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-text-primary">۴. اشتراک‌گذاری اطلاعات</h2>
            <p className="mt-2">
              اطلاعات شخصی شما بدون رضایت کتبی، به اشخاص ثالث منتقل نخواهد شد، مگر در مواردی که الزام قانونی وجود داشته باشد.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-text-primary">۵. به‌روزرسانی سیاست</h2>
            <p className="mt-2">
              این سیاست ممکن است در آینده به‌روزرسانی شود. هرگونه تغییر از طریق همین صفحه اطلاع‌رسانی خواهد شد.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
