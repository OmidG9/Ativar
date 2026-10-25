import Link from "next/link";
import { CTA_LABELS } from "@/lib/cta";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "DNA آتیوار",
  description:
    "ترکیب تجربه، تحلیل و توان اجرایی برای حل مسائل پیچیده سازمانی؛ معرفی اعضای تیم آتیوار و اصول انتشار پروفایل‌های حرفه‌ای.",
  path: "/about/team",
});

const members = [
  {
    name: "امیرعلی ریاضی",
    focus: ["استراتژی و توسعه کسب‌وکار", "معماری راهکارهای سازمانی", "مدیریت پروژه‌های پیچیده"],
  },
  {
    name: "امید قنبری",
    focus: ["معماری نرم‌افزار و یکپارچه‌سازی", "تحول دیجیتال", "طراحی راهکارهای فنی"],
  },
  {
    name: "محمدمهدی پازوکی",
    focus: ["هوش مصنوعی سازمانی", "معماری داده و یکپارچه‌سازی", "راهکارهای عملیاتی"],
  },
  {
    name: "حمید علیزاده",
    focus: ["مدیریت ریسک حقوقی", "قراردادهای فناوری و پروژه", "بررسی الزامات قانونی مرتبط با پروژه‌ها"],
  },
];

const principles = [
  "عنوان شغلی دقیق",
  "تخصص‌های مرتبط با خدمات آتیوار",
  "تجربه‌های حرفه‌ای قابل تأیید",
  "پروژه‌های قابل انتساب به همان فرد",
  "مسئولیت فعلی در آتیوار",
  "تحصیلات و گواهی‌های قابل استناد، در صورت تمایل و ارتباط",
];

export default function TeamPage() {
  return (
    <>
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold tracking-wide text-brand-accent">DNA آتیوار</p>
            <h1 className="section-title mt-3">
              ترکیب تجربه، تحلیل و توان اجرایی برای حل مسائل پیچیده سازمانی
            </h1>
            <p className="section-subtitle">
              پروژه‌های فناوری سازمانی به ترکیبی از شناخت کسب‌وکار، نگاه راهبردی، معماری فنی، توان
              اجرا و توجه به الزامات حقوقی و عملیاتی نیاز دارند.
            </p>
            <p className="mt-4 text-base leading-8 text-text-secondary">
              DNA آتیوار بر همکاری تخصص‌های مکمل شکل گرفته است؛ با هدف تبدیل نیازهای سازمانی به
              راهکارهایی که از نظر کسب‌وکار قابل دفاع و از نظر فنی قابل اجرا باشند.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding border-y border-border bg-brand-light/50">
        <div className="container-custom">
          <h2 className="section-title">معرفی اعضای تیم</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {members.map((member) => (
              <div key={member.name} className="card flex h-full flex-col p-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-primary to-brand-accent text-lg font-bold text-white">
                    {member.name.slice(0, 2)}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-text-primary">{member.name}</h3>
                    <p className="mt-1 text-xs leading-6 text-text-secondary">
                      عنوان شغلی: پس از تأیید سمت رسمی درج می‌شود.
                    </p>
                  </div>
                </div>
                <div className="mt-5">
                  <p className="text-xs font-semibold text-text-secondary">حوزه‌های کاری</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {member.focus.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-border px-3 py-1 text-xs text-text-secondary"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                <p className="mt-4 text-xs leading-6 text-text-secondary">
                  معرفی کامل بر اساس رزومه تأییدشده، سوابق مستند و مسئولیت واقعی در آتیوار تکمیل
                  خواهد شد.
                </p>
              </div>
            ))}
          </div>
          <p className="mt-6 max-w-3xl text-sm leading-7 text-text-secondary">
            عنوان‌های شغلی، تصاویر و رزومه‌های کامل اعضا پس از دریافت مستندات تأییدشده به‌روزرسانی
            می‌شوند. از درج اطلاعات ساختگی خودداری شده است.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
            <div>
              <p className="text-xs font-semibold tracking-wide text-brand-accent">اصول معرفی اعضا</p>
              <h2 className="section-title mt-3">پیش از انتشار چه اطلاعاتی تأیید می‌شود</h2>
              <p className="section-subtitle">
                برای هر عضو، این اطلاعات جمع‌آوری و سپس منتشر می‌شود.
              </p>
            </div>
            <div>
              <ul className="border-t border-border">
                {principles.map((item) => (
                  <li key={item} className="border-b border-border py-4 text-sm leading-7 text-text-primary">
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-6 rounded-2xl border border-brand-primary/20 bg-brand-light/60 p-5">
                <p className="text-sm font-semibold text-text-primary">
                  از نسبت‌دادن پروژه‌های کارفرمایان قبلی به آتیوار خودداری می‌شود.
                </p>
                <p className="mt-2 text-sm leading-7 text-text-secondary">
                  تجربه حرفه‌ای یک عضو را می‌توان با انتساب روشن به همان فرد معرفی کرد، اما نباید
                  به‌عنوان پروژه اجراشده توسط آتیوار نمایش داده شود.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding border-t border-border">
        <div className="container-custom">
          <div className="card p-8 lg:p-10">
            <div className="grid gap-6 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="text-2xl font-bold text-text-primary">همراهی از مشاوره تا اجرا</h2>
                <p className="mt-4 text-lg leading-7 text-text-secondary">
                  رویکرد آتیوار، همراهی مستقیم با تیم کسب‌وکار و فناوری اطلاعات سازمان برای رسیدن به
                  راهکاری عملی، قابل اجرا و قابل اندازه‌گیری است.
                </p>
              </div>
              <div className="flex flex-col items-start gap-3 lg:items-end">
                <Link href="/contact" className="btn btn-primary">
                  {CTA_LABELS.consult}
                </Link>
                <Link
                  href="/projects"
                  className="text-sm font-semibold text-brand-primary underline-offset-4 hover:underline"
                >
                  {CTA_LABELS.caseStudies}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
