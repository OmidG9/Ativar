import Link from "next/link";
import { EngagementJourney } from "@/components/diagrams/engagement-journey";
import { ServiceDepth } from "@/components/sections/service-depth";
import { CTA_LABELS } from "@/lib/cta";
import { createMetadata } from "@/lib/metadata";
import { faNumber } from "@/lib/number";

export const metadata = createMetadata({
  title: "معماری و اجرای پروژه",
  description:
    "تبدیل نیاز کسب‌وکار به مشخصات فنی، معماری، برنامه اجرا و راهکار عملیاتی؛ با دامنه کار شفاف و معیار پذیرش مشخص.",
  path: "/services/implementation",
});

const services = [
  {
    title: "تحلیل نیازمندی‌ها",
    description: "مستندسازی نیازهای کسب‌وکار، کاربران، محدودیت‌ها و معیارهای پذیرش.",
  },
  {
    title: "طراحی معماری راهکار",
    description: "تعریف اجزای سامانه، جریان اطلاعات، ارتباطات فنی، الزامات امنیتی و قابلیت توسعه.",
  },
  {
    title: "تدوین اسناد فنی و RFP",
    description: "تهیه مستندات لازم برای انتخاب تأمین‌کننده، مقایسه پیشنهادها و تعریف انتظارات اجرایی.",
  },
  {
    title: "مدیریت و راهبری پروژه",
    description: "تعیین مراحل، وابستگی‌ها، مسئولیت‌ها، نقاط کنترل و سازوکار گزارش‌دهی.",
  },
  {
    title: "توسعه و یکپارچه‌سازی",
    description:
      "اجرای اجزای توافق‌شده و اتصال راهکار به سامانه‌های موجود، متناسب با دامنه قرارداد و توان اجرایی.",
  },
  {
    title: "آزمون و پذیرش",
    description: "تعریف سناریوهای آزمون، معیارهای پذیرش، مستندسازی نتایج و پیگیری رفع اشکالات.",
  },
  {
    title: "استقرار و انتقال دانش",
    description: "آماده‌سازی بهره‌برداری، مستندسازی فنی و انتقال دانش لازم به تیم داخلی.",
  },
];

const outputs = [
  "سند نیازمندی‌ها",
  "سند معماری راهکار",
  "نقشه راه اجرا",
  "برنامه زمان‌بندی و وابستگی‌ها",
  "مستندات یکپارچه‌سازی",
  "برنامه آزمون و معیارهای پذیرش",
  "مستندات بهره‌برداری و انتقال دانش",
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
            <p className="text-xs font-semibold tracking-wide text-brand-accent">
              معماری و اجرای پروژه
            </p>
            <h1 className="section-title mt-3">از نیاز کسب‌وکار تا راهکار قابل اجرا</h1>
            <p className="section-subtitle">
              موفقیت یک پروژه فناوری تنها به انتخاب نرم‌افزار یا ابزار مناسب وابسته نیست. تعریف دقیق
              مسئله، طراحی معماری، تعیین دامنه، مدیریت وابستگی‌ها و آزمون خروجی‌ها نقش مهمی در
              کیفیت نهایی پروژه دارند.
            </p>
            <p className="mt-4 text-base leading-8 text-text-secondary">
              آتیوار به سازمان‌ها کمک می‌کند نیازهای کسب‌وکار را به مشخصات اجرایی روشن تبدیل کنند و
              مسیر طراحی، توسعه، یکپارچه‌سازی و استقرار را با چارچوبی قابل پیگیری پیش ببرند.
            </p>
            <div className="mt-8">
              <Link href="/contact" className="btn btn-primary">
                {CTA_LABELS.technicalProposal}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding border-y border-border bg-brand-light/50">
        <div className="container-custom">
          <h2 className="section-title">خدمات</h2>
          <div className="mt-10 grid gap-x-10 sm:grid-cols-2">
            {services.map((service, index) => (
              <div key={service.title} className="border-t border-border py-5">
                <p className="text-xs tabular-nums text-text-secondary">{faNumber(index + 1)}</p>
                <h3 className="mt-2 text-base font-semibold text-text-primary">{service.title}</h3>
                <p className="mt-2 text-sm leading-7 text-text-secondary">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <div>
              <h2 className="section-title">خروجی‌های قابل تعریف</h2>
              <p className="section-subtitle">
                نوع و سطح هر خروجی در قرارداد پروژه تعیین می‌شود.
              </p>
            </div>
            <ul className="border-t border-border">
              {outputs.map((output) => (
                <li key={output} className="flex items-start gap-3 border-b border-border py-4">
                  <span
                    aria-hidden="true"
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-accent"
                  />
                  <span className="text-sm leading-7 text-text-primary">{output}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-padding border-y border-border bg-brand-light/50">
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
            در هر پروژه، دامنه کار، معیارهای پذیرش، زمان‌بندی، مسئولیت‌ها، الزامات امنیتی و نحوه
            نظارت پیش از شروع توافق می‌شود.
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
                دامنه اولیه، محدودیت‌ها و زمان‌بندی مورد انتظار را برای ما بنویسید تا گام بعدی را با
                هم مشخص کنیم.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Link href="/contact" className="btn btn-primary">
                {CTA_LABELS.technicalProposal}
              </Link>
              <Link href="/solutions/enterprise-ai" className="btn btn-outline">
                راهکار هوش مصنوعی سازمانی
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
