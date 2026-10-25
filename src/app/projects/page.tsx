import Link from "next/link";
import { CTA_LABELS } from "@/lib/cta";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "پروژه‌ها و مطالعات موردی",
  description:
    "تجربه‌ها، راهکارها و مطالعات موردی آتیوار بر اساس اطلاعات قابل تأیید؛ با الگوی استاندارد انتشار و تفکیک اطلاعات محرمانه.",
  path: "/projects",
});

const caseStudyTemplate = [
  {
    title: "عنوان پروژه",
    description: "یک عنوان توصیفی بر اساس مسئله یا راهکار، نه یک عنوان تبلیغاتی مبهم.",
  },
  {
    title: "مسئله کسب‌وکار",
    description: "چه نیازی وجود داشت؟ چه محدودیتی باعث شد راهکار جدید بررسی شود؟",
  },
  {
    title: "نقش آتیوار",
    description:
      "آتیوار دقیقاً چه مسئولیتی بر عهده داشت؟ مشاوره، طراحی معماری، توسعه، یکپارچه‌سازی یا مدیریت اجرا؟",
  },
  {
    title: "راهکار",
    description: "چه اجزایی طراحی یا پیاده‌سازی شدند و چگونه به مسئله پاسخ می‌دادند؟",
  },
  {
    title: "فرایند اجرا",
    description: "چه مراحلی طی شد و چه وابستگی‌ها یا محدودیت‌هایی وجود داشت؟",
  },
  {
    title: "خروجی قابل مشاهده",
    description: "چه محصول، سند، قابلیت یا فرایند مشخصی ایجاد شد؟",
  },
  {
    title: "نتایج مستند",
    description:
      "اگر شاخص معتبر وجود دارد، نتیجه همراه با دوره سنجش و مبنای مقایسه اعلام شود. اگر شاخص کمی موجود نیست، از توصیف دقیق خروجی‌ها استفاده شود و عددسازی صورت نگیرد.",
  },
  {
    title: "محدودیت انتشار",
    description:
      "نام مشتری، تصویر، اطلاعات فنی یا داده‌ای که مجوز انتشار آن وجود ندارد، نباید نمایش داده شود.",
  },
];

export default function ProjectsPage() {
  return (
    <>
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold tracking-wide text-brand-accent">پروژه‌ها و تجربه‌ها</p>
            <h1 className="section-title mt-3">تجربه‌ها، راهکارها و مطالعات موردی آتیوار</h1>
            <p className="section-subtitle">
              هر پروژه فناوری با یک مسئله واقعی آغاز می‌شود. بررسی مسئله، معماری انتخاب‌شده، دامنه
              اجرا و نتایج قابل اثبات کمک می‌کند سازمان‌ها بهتر ارزیابی کنند که یک راهکار چگونه
              می‌تواند به نیازهای آن‌ها پاسخ دهد.
            </p>
            <p className="mt-4 text-base leading-8 text-text-secondary">
              در این بخش، پروژه‌ها و مطالعات موردی بر اساس اطلاعات قابل تأیید معرفی می‌شوند. در
              مواردی که محدودیت محرمانگی وجود داشته باشد، اطلاعات حساس حذف یا به‌صورت غیرقابل
              شناسایی ارائه خواهد شد.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding border-y border-border bg-brand-light/50">
        <div className="container-custom">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
            <div className="rounded-2xl border border-border bg-white p-6 sm:p-8">
              <p className="inline-flex items-center rounded-full border border-border px-3 py-1 text-xs text-text-secondary">
                مطالعه موردی
              </p>
              <h2 className="mt-4 text-xl font-semibold text-text-primary">
                از محصول تخصصی تا توسعه قابلیت‌های دیجیتال
              </h2>
              <p className="mt-4 text-sm leading-7 text-text-secondary">
                آتیوار فعالیت محصولی خود را در حوزه سامانه‌های مرتبط با فلزات گران‌بها آغاز کرده است.
                این تجربه، زمینه‌ای برای شناخت نیازهای یک بازار تخصصی و بررسی چالش‌های طراحی و توسعه
                راهکارهای دیجیتال فراهم می‌کند.
              </p>
              <p className="mt-3 text-sm leading-7 text-text-secondary">
                معرفی دقیق دامنه محصول، قابلیت‌های پیاده‌سازی‌شده، نقش تیم و نتایج قابل انتشار باید
                بر اساس مستندات واقعی تکمیل شود.
              </p>
              <p className="mt-3 text-sm leading-7 text-text-secondary">
                این سابقه به‌عنوان نقطه آغاز مسیر توسعه آتیوار معرفی می‌شود؛ نه به‌عنوان مدرک خودکار
                برای اجرای پروژه‌های دیگر یا اثبات نتایج کمی که مستند نشده‌اند.
              </p>
              <Link
                href="/projects/precious-metals-platform"
                className="mt-6 inline-flex text-sm font-semibold text-brand-primary underline-offset-4 hover:underline"
              >
                {CTA_LABELS.caseStudies} ←
              </Link>
            </div>

            <div className="rounded-2xl border border-border bg-white p-6 sm:p-8">
              <h2 className="text-xl font-semibold text-text-primary">سیاست معرفی پروژه‌ها</h2>
              <p className="mt-4 text-sm leading-7 text-text-secondary">
                آتیوار در معرفی خدمات، سوابق و مطالعات موردی خود بر شفافیت در نقش‌ها، دامنه فعالیت و
                اطلاعات قابل تأیید تأکید دارد. هر پروژه بر اساس نقش واقعی آتیوار یا اعضای تیم معرفی
                می‌شود و اطلاعات محرمانه یا فاقد مجوز انتشار در سایت درج نخواهد شد.
              </p>
              <div className="mt-6 space-y-3 text-sm leading-7 text-text-secondary">
                <p>• نام مشتری بدون اجازه صریح منتشر نمی‌شود.</p>
                <p>• نتیجه عددی فقط با دوره سنجش و مبنای مقایسه اعلام می‌شود.</p>
                <p>• تجربه حرفه‌ای اعضا به آتیوار نسبت داده نمی‌شود.</p>
                <p>• اطلاعات فنی حساس یا فاقد مجوز انتشار نمایش داده نمی‌شود.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-wide text-brand-accent">الگوی انتشار</p>
            <h2 className="section-title mt-3">الگوی استاندارد انتشار هر مطالعه موردی</h2>
            <p className="section-subtitle">
              هر مطالعه موردی بر پایه این ساختار منتشر می‌شود تا مقایسه و ارزیابی آن برای سازمان‌ها
              ممکن باشد.
            </p>
          </div>
          <div className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2">
            {caseStudyTemplate.map((item, index) => (
              <div key={item.title} className="border-t border-border pt-5">
                <p className="text-xs tabular-nums text-text-secondary">{index + 1}</p>
                <h3 className="mt-2 text-base font-semibold text-text-primary">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-text-secondary">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding border-t border-border">
        <div className="container-custom">
          <div className="card p-8 lg:p-10">
            <div className="grid gap-6 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="text-2xl font-bold text-text-primary">آیا پروژه مشابهی دارید؟</h2>
                <p className="mt-4 text-lg leading-7 text-text-secondary">
                  مسئله خود را با ما در میان بگذارید. در جلسه اولیه، امکان‌سنجی و مسیر مناسب را
                  بررسی می‌کنیم.
                </p>
              </div>
              <div className="flex flex-col items-start gap-3 lg:items-end">
                <Link href="/contact" className="btn btn-primary">
                  {CTA_LABELS.talk}
                </Link>
                <Link
                  href="/services/implementation"
                  className="text-sm font-semibold text-brand-primary underline-offset-4 hover:underline"
                >
                  بررسی معماری و اجرای پروژه
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
