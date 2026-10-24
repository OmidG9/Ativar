import Link from "next/link";
import { EngagementJourney } from "@/components/diagrams/engagement-journey";
import { ServiceDepth } from "@/components/sections/service-depth";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "طراحی و اجرای پروژه",
  description: "معماری، یکپارچه‌سازی، توسعه، استقرار و پشتیبانی راهکارهای تخصصی فناوری با دامنه کار شفاف و معیار پذیرش مشخص.",
  path: "/services/implementation",
});

const services = [
  "تحلیل نیازمندی",
  "طراحی معماری راهکار",
  "تهیه اسناد فنی و RFP",
  "انتخاب فناوری و طراحی زیرساخت",
  "مدیریت پروژه",
  "مدیریت پیمانکاران",
  "توسعه و یکپارچه‌سازی سامانه‌ها",
  "پیاده‌سازی راهکارهای هوش مصنوعی",
  "آزمون امنیت و کیفیت",
  "استقرار و انتقال دانش",
  "پشتیبانی و بهبود مستمر",
];

const models = [
  { title: "مشاوره مستقل", desc: "طراحی، بررسی و راهنمایی فنی" },
  { title: "قرارداد طراحی و معماری", desc: "تهیه اسناد فنی، معماری و برنامه اجرایی" },
  { title: "قرارداد اجرای مرحله‌ای", desc: "اجرای محدود با اهداف و معیارهای مشخص" },
  { title: "پیمانکاری یکپارچه", desc: "طراحی تا استقرار با مسئولیت مشخص" },
  { title: "قرارداد پشتیبانی و بهبود مستمر", desc: "پشتیبانی، نظارت و بهبود تدریجی" },
];

export default function ImplementationPage() {
  return (
    <>
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="section-title">طراحی و اجرای پروژه‌های فناوری سازمانی</h1>
            <p className="section-subtitle">
              از تعریف مسئله تا استقرار و انتقال دانش؛ با دامنه کار شفاف، معیارهای پذیرش مشخص و مسئولیت‌های تعریف‌شده.
            </p>
            <div className="mt-8">
              <Link href="/contact" className="btn btn-primary">
                درخواست بررسی و برآورد پروژه
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-brand-light/60">
        <div className="container-custom">
          <h2 className="section-title">خدمات اجرایی</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((item) => (
              <div key={item} className="card p-4">
                <p className="text-sm font-medium text-text-primary">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding border-b border-border">
        <div className="container-custom">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="section-title">مسیر همکاری در شش مرحله</h2>
            <p className="max-w-md text-sm leading-7 text-text-secondary">
              هر مرحله یک خروجی مشخص دارد و مرحله بعد پس از تأیید آن آغاز می‌شود.
            </p>
          </div>
          <EngagementJourney />
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <h2 className="section-title">مدل‌های قرارداد</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {models.map((item) => (
              <div key={item.title} className="card p-6">
                <h3 className="text-base font-semibold text-text-primary">{item.title}</h3>
                <p className="mt-2 text-sm text-text-secondary">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-text-secondary">
            در هر پروژه، دامنه کار، معیارهای پذیرش، زمان‌بندی، مسئولیت‌ها، الزامات امنیتی و نحوه نظارت پیش از شروع توافق می‌شود.
          </p>
        </div>
      </section>

      <ServiceDepth
        problem={{
          heading: "پروژه‌ای که دامنه‌اش روشن نیست، قابل مدیریت نیست",
          lead: "در پروژه‌های فناوری سازمانی، بخش بزرگی از تأخیر و هزینه اضافی از ابهام در دامنه، مسئولیت‌ها و معیار پذیرش ناشی می‌شود. آتیوار این سه عنصر را پیش از شروع تثبیت می‌کند تا پیشرفت قابل اندازه‌گیری و اختلاف‌ها قابل ارجاع باشد.",
          signals: [
            "تغییر مکرر نیازمندی‌ها بدون فرایند کنترل تغییر",
            "مرز نامشخص مسئولیت میان تیم داخلی و پیمانکاران",
            "تحویل بدون معیار پذیرش مکتوب و قابل آزمون",
            "یکپارچه‌سازی دیرهنگام با سامانه‌های موجود",
            "انتقال دانش ناقص و وابستگی بلندمدت به تأمین‌کننده",
          ],
        }}
        approach={{
          heading: "اجرا در مراحل قابل کنترل",
          lead: "پروژه به بسته‌های کاری تقسیم می‌شود؛ هر بسته خروجی، معیار پذیرش و وابستگی مشخص دارد و پس از تأیید، مرحله بعد آغاز می‌شود.",
          steps: [
            {
              title: "تثبیت دامنه و معیار پذیرش",
              description:
                "تبدیل نیازمندی به دامنه مکتوب، تحویل‌دادنی‌های قابل بررسی و معیارهای پذیرش که پیش از شروع مورد توافق قرار می‌گیرند.",
            },
            {
              title: "معماری و اسناد فنی",
              description:
                "طراحی معماری راهکار، تعریف اینترفیس‌ها، مدل داده، الزامات امنیتی و مستندسازی تصمیم‌های فنی کلیدی.",
            },
            {
              title: "اجرای مرحله‌ای و نظارت",
              description:
                "پیاده‌سازی در بسته‌های کاری کوتاه با جلسات پیشرفت منظم، کنترل تغییر و شفافیت در وضعیت و ریسک‌ها.",
            },
            {
              title: "آزمون، استقرار و انتقال دانش",
              description:
                "آزمون کارکردی و امنیتی، آماده‌سازی محیط عملیاتی، استقرار مرحله‌ای و مستندسازی و آموزش تیم داخلی.",
            },
            {
              title: "پشتیبانی و بهبود مستمر",
              description:
                "پایش وضعیت پس از تحویل، رفع نقص‌های توافق‌شده و برنامه بهبود تدریجی بر پایه بازخورد عملیاتی.",
            },
          ],
        }}
        value={{
          heading: "ارزش قابل انتظار از اجرای منظم",
          lead: "هدف، تحویل یک نرم‌افزار نیست؛ ایجاد قابلیتی است که سازمان بتواند آن را بهره‌برداری و نگهداری کند.",
          outcomes: [
            {
              title: "پیش‌بینی‌پذیری",
              description:
                "دامنه و معیار پذیرش روشن، امکان برنامه‌ریزی واقع‌بینانه و تشخیص زودهنگام انحراف را فراهم می‌کند.",
            },
            {
              title: "کاهش ریسک یکپارچه‌سازی",
              description:
                "شناسایی وابستگی‌ها و طراحی اینترفیس‌ها در ابتدا، هزینه تغییر در مراحل پایانی را کاهش می‌دهد.",
            },
            {
              title: "مالکیت داخلی",
              description:
                "مستندسازی و انتقال دانش، وابستگی به افراد یا تأمین‌کننده خاص را کم می‌کند.",
            },
            {
              title: "مسیر بهبود",
              description:
                "پس از استقرار، معیارهای عملیاتی مشخص می‌کنند کدام بهبودها بیشترین اثر را دارند.",
            },
          ],
        }}
        faq={{
          heading: "پیش از شروع اجرا",
          items: [
            {
              question: "مدل قرارداد چگونه انتخاب می‌شود؟",
              answer:
                "بر اساس میزان قطعیت دامنه، آمادگی تیم داخلی و سطح مسئولیتی که می‌خواهید واگذار کنید. مدل‌های مشاوره مستقل، طراحی و معماری، اجرای مرحله‌ای، پیمانکاری یکپارچه و پشتیبانی در این صفحه معرفی شده‌اند و پیش از قرارداد جزئیات هرکدام توافق می‌شود.",
            },
            {
              question: "آیا می‌توانید فقط بر اجرای پیمانکار نظارت کنید؟",
              answer:
                "بله. در این مدل، آتیوار مسئولیت تعریف معیارهای پذیرش، بررسی تحویل‌دادنی‌ها و گزارش وضعیت را بر عهده می‌گیرد؛ اجرای فنی بر عهده پیمانکار منتخب شما باقی می‌ماند.",
            },
            {
              question: "اگر نیازمندی‌ها در میانه پروژه تغییر کند چه می‌شود؟",
              answer:
                "تغییر نیازمندی اجتناب‌ناپذیر است، اما باید کنترل‌شده باشد. هر تغییر از نظر اثر بر دامنه، زمان و هزینه ارزیابی و پیش از اجرا مکتوب می‌شود تا تصمیم درباره پذیرش یا تعویق آن شفاف باشد.",
            },
            {
              question: "پس از تحویل چه پشتیبانی ارائه می‌شود؟",
              answer:
                "دامنه و مدت پشتیبانی در قرارداد مشخص می‌شود. حداقل شامل رفع نقص‌های مرتبط با تحویل و انتقال دانش است؛ پشتیبانی بلندمدت و بهبود مستمر می‌تواند در قالب قرارداد جداگانه تعریف شود.",
            },
            {
              question: "آیا تیم داخلی سازمان در جریان کار قرار می‌گیرد؟",
              answer:
                "بله. مشارکت تیم داخلی از مرحله طراحی آغاز می‌شود تا دانش فنی در سازمان بماند. سطح این مشارکت پیش از شروع توافق می‌شود و در برنامه پروژه جای مشخص دارد.",
            },
          ],
        }}
      />

      <section className="section-padding border-t border-border">
        <div className="container-custom">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="text-2xl font-bold text-text-primary">برای برآورد پروژه آماده‌اید؟</h2>
              <p className="mt-2 max-w-xl text-sm leading-7 text-text-secondary">
                دامنه اولیه، محدودیت‌ها و زمان‌بندی مورد انتظار را برای ما بنویسید تا گام بعدی را
                با هم مشخص کنیم.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Link href="/contact" className="btn btn-primary">
                درخواست بررسی و برآورد
              </Link>
              <Link href="/solutions/enterprise-ai" className="btn btn-outline">
                راهکار هوش مصنوعی
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
