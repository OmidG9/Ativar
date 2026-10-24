import Link from "next/link";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "مشاوره و تحول دیجیتال",
  description: "خدمات مشاوره راهبردی فین‌تک، تحول دیجیتال، استراتژی هوش مصنوعی، معماری سازمانی و امکان‌سنجی فنی و اقتصادی آتیوار.",
  path: "/services/consulting",
});

const items = [
  { title: "مشاوره راهبردی فین‌تک", desc: "تحلیل بازار، طراحی مدل کسب‌وکار، تدوین نقشه راه و ارزیابی ریسک", out: "نقشه راه و اولویت‌های اجرایی" },
  { title: "مشاوره تحول دیجیتال", desc: "ارزیابی بلوغ دیجیتال، بازطراحی فرایندها و اولویت‌بندی سرمایه‌گذاری‌های فناوری", out: "برنامه تحول دیجیتال" },
  { title: "استراتژی هوش مصنوعی", desc: "شناسایی کاربردهای مناسب، ارزیابی آمادگی داده و تدوین نقشه راه استقرار AI", out: "نقشه راه هوش مصنوعی سازمانی" },
  { title: "معماری سازمانی و فناوری", desc: "طراحی معماری کسب‌وکار، داده، نرم‌افزار، زیرساخت و یکپارچه‌سازی", out: "سند معماری سازمانی" },
  { title: "امکان‌سنجی فنی و اقتصادی", desc: "تحلیل هزینه کل مالکیت، ROI، ریسک‌ها و گزینه‌های فنی", out: "گزارش امکان‌سنجی و برآورد" },
  { title: "حاکمیت فناوری و داده", desc: "چارچوب مدیریت دسترسی، امنیت، کیفیت داده، ارزیابی مدل و کنترل ریسک", out: "چارچوب حاکمیت فناوری و داده" },
];

export default function ConsultingPage() {
  return (
    <>
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="section-title">مشاوره و تحول دیجیتال</h1>
            <p className="section-subtitle">
              قبل از سرمایه‌گذاری در فناوری، مسئله را شناسایی، راهکار را طراحی و توجیه اقتصادی را بررسی می‌کنیم.
            </p>
            <div className="mt-8">
              <Link href="/contact" className="btn btn-primary">
                درخواست جلسه مشاوره
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-brand-light/60">
        <div className="container-custom">
          <h2 className="section-title">خدمات مشاوره‌ای</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {items.map((item) => (
              <div key={item.title} className="card flex h-full flex-col p-6">
                <h3 className="text-lg font-semibold text-text-primary">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">{item.desc}</p>
                <div className="mt-4 rounded-xl bg-white px-4 py-3">
                  <p className="text-xs text-text-secondary">خروجی قابل تحویل</p>
                  <p className="mt-1 text-sm font-medium text-text-primary">{item.out}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="card p-8 lg:p-10">
            <div className="grid gap-6 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="text-2xl font-bold text-text-primary">رویکرد مسئله‌محور آتیوار</h2>
                <p className="mt-4 text-lg leading-relaxed text-text-secondary">
                  هر پروژه با شناخت مسئله کسب‌وکار آغاز می‌شود. تمرکز بر منفعت عملیاتی، کنترل ریسک و قابلیت اجرایی، اولویت اصلی است.
                </p>
              </div>
              <div className="flex flex-col items-start gap-3 lg:items-end">
                <Link href="/contact" className="btn btn-primary">
                  درخواست بررسی نیازمندی
                </Link>
                <Link href="/services/implementation" className="text-sm font-semibold text-brand-primary">
                  مشاهده طراحی و اجرای پروژه
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
