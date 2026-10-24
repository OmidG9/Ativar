import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "DNA آتیوار",
  description: "معرفی تیم آتیوار، تخصص‌ها و رویکرد مسئله‌محور در مشاوره فین‌تک و هوش مصنوعی سازمانی.",
};

const members = [
  {
    name: "امیرعلی ریاضی",
    role: "راهبرد کسب‌وکار و معماری راهکارهای سازمانی",
    focus: ["استراتژی و توسعه کسب‌وکار", "معماری راهکارهای سازمانی", "مدیریت پروژه‌های پیچیده"],
    bio: "تمرکز بر تبدیل مسائل کسب‌وکار به راهکارهای فناورانه قابل اجرا و توجیه اقتصادی.",
  },
  {
    name: "امید قنبری",
    role: "فناوری و معماری راهکار",
    focus: ["معماری نرم‌افزار و یکپارچه‌سازی", "تحول دیجیتال", "طراحی راهکارهای فنی"],
    bio: "پروفایل بر اساس رزومه مستند و تأییدشده تکمیل خواهد شد.",
  },
  {
    name: "محمدمهدی پازوکی",
    role: "فناوری و هوش مصنوعی",
    focus: ["هوش مصنوعی سازمانی", "معماری داده و یکپارچه‌سازی", "راهکارهای عملیاتی"],
    bio: "پروفایل بر اساس مستندات واقعی تکمیل خواهد شد.",
  },
  {
    name: "آقای رسولی",
    role: "مشاوره و توسعه کسب‌وکار",
    focus: ["تحلیل نیازمندی سازمانی", "امکان‌سنجی و توسعه کسب‌وکار", "همکاری‌های استراتژیک"],
    bio: "اطلاعات تکمیلی در صورت دریافت رزومه تأییدشده اضافه خواهد شد.",
  },
  {
    name: "حمید علیزاده",
    role: "مسئولیت حقوقی و قراردادی",
    focus: ["مدیریت ریسک حقوقی", "قراردادهای فناوری و پروژه", "بررسی الزامات قانونی مرتبط با پروژه‌ها"],
    bio: "با محوریت امور حقوقی و قراردادی، متناسب با دامنه پروژه‌ها همکاری می‌شود.",
  },
];

export default function TeamPage() {
  return (
    <>
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="section-title">DNA آتیوار</h1>
            <p className="section-subtitle">
              آتیوار تیمی از متخصصان با تجربه در مشاوره کسب‌وکار، معماری فناوری، هوش مصنوعی، فین‌تک و مدیریت پروژه‌های پیچیده است.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-brand-light/60">
        <div className="container-custom">
          <h2 className="section-title">اعضای تیم</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {members.map((member) => (
              <div key={member.name} className="card flex h-full flex-col p-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-primary to-brand-accent text-white text-lg font-bold">
                    {member.name.slice(0, 2)}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-text-primary">{member.name}</h3>
                    <p className="text-sm text-text-secondary">{member.role}</p>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-text-secondary">{member.bio}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {member.focus.map((f) => (
                    <span key={f} className="rounded-full border border-border px-3 py-1 text-xs text-text-secondary">
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-text-secondary">
            اطلاعات کامل پروفایل‌ها با تأیید مستندات تکمیلی به‌روزرسانی خواهد شد. از درج اطلاعات ساختگی خودداری شده است.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="card p-8 lg:p-10">
            <div className="grid gap-6 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="text-2xl font-bold text-text-primary">همراهی از مشاوره تا اجرا</h2>
                <p className="mt-4 text-lg leading-relaxed text-text-secondary">
                  رویکرد آتیوار، همراهی مستقیم با تیم کسب‌وکار و فناوری اطلاعات سازمان برای رسیدن به راهکاری عملی، قابل اجرا و قابل اندازه‌گیری است.
                </p>
              </div>
              <div className="flex flex-col items-start gap-3 lg:items-end">
                <Link href="/contact" className="btn btn-primary">
                  درخواست جلسه مشاوره
                </Link>
                <Link href="/projects" className="text-sm font-semibold text-brand-primary">
                  مشاهده پروژه‌ها و تجربه‌ها
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
