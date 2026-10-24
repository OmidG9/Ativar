import Link from "next/link";
import { FintechCapabilityMap } from "@/components/diagrams/fintech-capability-map";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "راهکارهای فین‌تک",
  description: "طراحی راهکارهای مالی دیجیتال، معماری سامانه‌های مالی، زیرساخت خدمات مالی و مشاوره فین‌تک با تفکیک از فعالیت‌های نیازمند مجوز.",
  path: "/solutions/fintech",
});

const items = [
  { title: "مشاوره راهبردی فین‌تک", desc: "تحلیل بازار، مدل کسب‌وکار، نقشه راه و ارزیابی ریسک" },
  { title: "طراحی معماری سامانه‌های مالی دیجیتال", desc: "طراحی معماری سطح بالا، اجزا، جریان‌ها و یکپارچه‌سازی" },
  { title: "زیرساخت‌های خدمات دیجیتال مالی", desc: "طراحی زیرساخت، امنیت، پایداری و مقیاس‌پذیری" },
  { title: "راهکارهای دیجیتال بازار فلزات گران‌بها", desc: "بر پایه تجربه آغازین آتیوار در این حوزه" },
  { title: "طراحی فرایندهای مرتبط با دارایی و وثیقه", desc: "بهینه‌سازی فرایندها با رویکرد کنترل و شفافیت" },
  { title: "معماری API و یکپارچه‌سازی سامانه‌ها", desc: "طراحی اینترفیس‌های کنترل‌شده و مستندسازی" },
  { title: "هوش مصنوعی در تحلیل اطلاعات مالی", desc: "کاربردهای هدفمند با نظارت انسانی" },
  { title: "اتوماسیون فرایندهای مالی", desc: "کاهش فعالیت‌های تکراری با حفظ کنترل‌های لازم" },
];

export default function FintechPage() {
  return (
    <>
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="section-title">طراحی راهکارهای مالی دیجیتال، از ایده تا اجرا</h1>
            <p className="section-subtitle">
              آتیوار در حوزه مشاوره، معماری و فناوری فین‌تک فعالیت می‌کند. خدمات مشاوره و فناوری از فعالیت‌های مالی نیازمند مجوز به‌خوبی تفکیک شده‌اند.
            </p>
            <div className="mt-8">
              <Link href="/contact" className="btn btn-primary">
                درخواست بررسی راهکار فین‌تک
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding border-b border-border">
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

      <section className="section-padding bg-brand-light/60">
        <div className="container-custom">
          <h2 className="section-title">حوزه‌های فعالیت</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {items.map((item) => (
              <div key={item.title} className="card p-6">
                <h3 className="text-base font-semibold text-text-primary">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="card p-8">
            <h2 className="text-xl font-semibold text-text-primary">توضیح مهم درباره محدوده فعالیت</h2>
            <p className="mt-4 text-sm leading-relaxed text-text-secondary">
              آتیوار صرفاً در زمینه مشاوره فنی، طراحی معماری، تحلیل و پیاده‌سازی راهکارهای نرم‌افزاری فعالیت می‌کند. هیچ‌گونه ادعایی مبنی بر ارائه خدمات بانکی، پرداخت‌یار، کارگزاری، مؤسسه اعتباری، صادرکننده گواهی مالی یا سایر خدمات نیازمند مجوز در این وب‌سایت وجود ندارد. در صورت نیاز به فعالیت‌های مجوزمحور، الزام به داشتن مجوزهای قانونی لازم کاملاً مورد توجه قرار می‌گیرد.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
