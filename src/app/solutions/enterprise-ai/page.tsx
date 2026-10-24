import Link from "next/link";
import { AiArchitectureMap } from "@/components/diagrams/ai-architecture-map";
import { ServiceDepth } from "@/components/sections/service-depth";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "هوش مصنوعی سازمانی",
  description: "طراحی و استقرار محیط‌های هوش مصنوعی اختصاصی متناسب با دانش، داده، فرایندها و الزامات امنیتی سازمان.",
  path: "/solutions/enterprise-ai",
});

const caps = [
  "دستیار هوشمند اختصاصی سازمان",
  "جست‌وجوی معنایی و بازیابی دانش سازمان",
  "تحلیل اسناد و استخراج اطلاعات",
  "اتوماسیون فرایندهای سازمانی",
  "اتصال کنترل‌شده به سامانه‌ها و پایگاه‌های داده",
  "تحلیل اطلاعات و پشتیبانی از تصمیم‌گیری",
  "طراحی گردش‌کارهای مبتنی بر هوش مصنوعی",
  "ارزیابی کیفیت و قابلیت اطمینان مدل‌ها",
  "مدیریت دسترسی و سیاست‌های استفاده",
  "استقرار در زیرساخت مناسب سازمان",
];

export default function EnterpriseAIPage() {
  return (
    <>
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="section-title">هوش مصنوعی اختصاصی؛ متناسب با دانش، داده و فرایند سازمان شما</h1>
            <p className="section-subtitle">
              آتیوار به سازمان‌ها کمک می‌کند محیط‌های هوش مصنوعی متناسب با نیازهای عملیاتی خود ایجاد کنند؛ محیط‌هایی که می‌توانند به دانش سازمان متصل شوند، وظایف تخصصی را پشتیبانی کنند و با رعایت سیاست‌های امنیتی و سطوح دسترسی به کار گرفته شوند.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className="btn btn-primary">
                درخواست ارزیابی هوش مصنوعی سازمان
              </Link>
              <Link href="/products/ai-workspace" className="btn btn-outline">
                معرفی ATIVAR AI Workspace
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding border-b border-border">
        <div className="container-custom">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="section-title">معماری راهکار، از داده تا تصمیم</h2>
            <p className="max-w-md text-sm leading-7 text-text-secondary">
              راهکار در چهار لایه طراحی می‌شود و کنترل دسترسی، سیاست داده و نظارت انسانی در تمام
              لایه‌ها اعمال می‌گردد.
            </p>
          </div>
          <AiArchitectureMap />
        </div>
      </section>

      <section className="section-padding bg-brand-light/60">
        <div className="container-custom">
          <h2 className="section-title">قابلیت‌های قابل بررسی</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {caps.map((item) => (
              <div key={item} className="card p-4">
                <p className="text-sm font-medium text-text-primary">{item}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-text-secondary">
            هیچ قابلیت پیاده‌سازی‌نشده‌ای به‌عنوان ویژگی قطعی محصول معرفی نمی‌شود. وضعیت هر قابلیت در طراحی و قرارداد مشخص خواهد شد.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="section-title">امنیت، کنترل و نظارت انسانی</h2>
              <p className="section-subtitle">
                استفاده سازمانی از هوش مصنوعی باید با کنترل دسترسی، تعیین محل پردازش، نظارت انسانی در تصمیم‌های حساس و رعایت الزامات قانونی همراه باشد.
              </p>
              <div className="mt-6 space-y-3 text-sm text-text-secondary">
                <p>• تعریف سطح دسترسی کاربران و نقش‌ها</p>
                <p>• بررسی محل نگهداری و پردازش داده</p>
                <p>• طراحی سیاست‌های محرمانگی و استفاده</p>
                <p>• ارجاع به منابع و ارزیابی کیفیت پاسخ</p>
                <p>• پیش‌بینی نظارت انسانی در تصمیم‌های حساس</p>
              </div>
            </div>
            <div className="card p-8">
              <h3 className="text-lg font-semibold text-text-primary">سه سطح هوشمندی سازمانی آتیوار</h3>
              <div className="mt-6 space-y-4 text-sm">
                <div className="rounded-xl border border-border p-4">
                  <p className="font-medium text-text-primary">سطح اول: ATIVAR Data Intelligence</p>
                  <p className="mt-1 text-text-secondary">داده‌های سازمان به بینش مدیریتی تبدیل می‌شوند</p>
                </div>
                <div className="rounded-xl border border-border p-4">
                  <p className="font-medium text-text-primary">سطح دوم: ATIVAR Knowledge Intelligence</p>
                  <p className="mt-1 text-text-secondary">دانش سازمان به منبعی جست‌وجوپذیر و قابل استفاده تبدیل می‌شود</p>
                </div>
                <div className="rounded-xl border border-brand-accent/40 bg-brand-accentLight p-4">
                  <p className="font-semibold text-text-primary">سطح سوم: ATIVAR Enterprise LLM</p>
                  <p className="mt-1 text-text-primary">محیط هوش مصنوعی اختصاصی با کنترل و قابلیت توسعه</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ServiceDepth
        problem={{
          heading: "شکاف میان آزمایش هوش مصنوعی و کاربرد عملیاتی",
          lead: "بسیاری از سازمان‌ها هوش مصنوعی را آزمایش کرده‌اند، اما استفاده روزمره و قابل اتکا همچنان محدود است. فاصله اصلی معمولاً فناوری نیست؛ نبود مورد کاربردی روشن، داده آماده، کنترل دسترسی و مالکیت فرایند است.",
          signals: [
            "استفاده پراکنده از ابزارهای عمومی بدون سیاست سازمانی",
            "دانش سازمان در فایل‌ها و سامانه‌های پراکنده و غیرقابل جست‌وجو",
            "نگرانی درباره محل پردازش و نگهداری داده",
            "پاسخ‌هایی که منبع و مبنای قابل بررسی ندارند",
            "نبود مالک مشخص برای بهبود کیفیت و پایش استفاده",
          ],
        }}
        approach={{
          heading: "از یک مورد کاربردی تا استقرار قابل اتکا",
          lead: "به‌جای شروع از مدل یا ابزار، از یک وظیفه مشخص با کاربر واقعی آغاز می‌کنیم و دامنه را تا رسیدن به نتیجه قابل ارزیابی محدود نگه می‌داریم.",
          steps: [
            {
              title: "انتخاب مورد کاربردی",
              description:
                "شناسایی وظایفی که زمان‌بر، تکرارشونده یا دانش‌محور هستند و می‌توان اثر آن‌ها را با معیار روشن سنجید.",
            },
            {
              title: "آماده‌سازی داده و دانش",
              description:
                "ساختاردهی منابع، تعیین سطح دسترسی، کیفیت‌سنجی و تعریف اینکه کدام دانش مجاز به استفاده در محیط هوش مصنوعی است.",
            },
            {
              title: "طراحی معماری و کنترل‌ها",
              description:
                "انتخاب محل پردازش، تعریف نقش‌ها، ثبت رخداد، ارجاع به منبع و نظارت انسانی در تصمیم‌های حساس.",
            },
            {
              title: "ارزیابی با کاربران واقعی",
              description:
                "آزمون با نمونه‌های واقعی، سنجش کیفیت پاسخ و اصلاح گردش‌کار پیش از گسترش به جمع بیشتری از کاربران.",
            },
            {
              title: "استقرار تدریجی و پایش",
              description:
                "عرضه مرحله‌ای، آموزش کاربران، پایش استفاده و تعریف مسیر بهبود بر پایه بازخورد عملیاتی.",
            },
          ],
        }}
        value={{
          heading: "ارزشی که می‌توان سنجید",
          lead: "معیار موفقیت، تعداد قابلیت‌ها نیست؛ تغییر قابل مشاهده در زمان انجام کار، کیفیت تصمیم یا دسترسی به دانش است.",
          outcomes: [
            {
              title: "کاهش کار تکراری",
              description:
                "وظایف مستندسازی، جست‌وجو و جمع‌بندی اطلاعات با حفظ بازبینی انسانی سریع‌تر انجام می‌شود.",
            },
            {
              title: "دسترسی به دانش سازمان",
              description:
                "دانش پراکنده به منبعی قابل جست‌وجو تبدیل می‌شود که پاسخ آن قابل ارجاع به منبع اصلی است.",
            },
            {
              title: "تصمیم بهتر",
              description:
                "تحلیل سریع‌تر اسناد و داده‌ها، زمان بیشتری برای بررسی و تصمیم‌گیری مدیریتی فراهم می‌کند.",
            },
            {
              title: "کنترل ریسک",
              description:
                "سیاست دسترسی، محل پردازش و نظارت انسانی از ابتدا تعریف می‌شود، نه پس از بروز مشکل.",
            },
          ],
        }}
        faq={{
          heading: "پرسش‌های رایج سازمان‌ها",
          items: [
            {
              question: "آیا داده سازمان برای پردازش به بیرون منتقل می‌شود؟",
              answer:
                "این تصمیم بخشی از طراحی است، نه یک انتخاب پیش‌فرض. بسته به الزامات سازمان، گزینه‌های استقرار در زیرساخت داخلی، محیط ابری اختصاصی یا ترکیبی بررسی می‌شود و محل پردازش هر نوع داده در سند معماری مشخص می‌گردد.",
            },
            {
              question: "آیا باید از ابتدا مدل اختصاصی آموزش بدهیم؟",
              answer:
                "لزوماً نه. در بسیاری از موارد، ترکیب مدل‌های موجود با دانش سازمان و کنترل دسترسی، پاسخ مناسب‌تری با هزینه کمتر می‌دهد. تصمیم درباره آموزش مدل اختصاصی پس از ارزیابی مورد کاربردی و کیفیت داده گرفته می‌شود.",
            },
            {
              question: "کیفیت پاسخ‌ها چگونه کنترل می‌شود؟",
              answer:
                "با مجموعه‌ای از نمونه‌های ارزیابی، بررسی منبع پاسخ، بازخورد کاربران و نظارت انسانی در نقاط حساس. کیفیت یک عدد ثابت نیست و پایش مستمر بخشی از استقرار است.",
            },
            {
              question: "آیا می‌توان با یک حوزه کوچک شروع کرد؟",
              answer:
                "بله و همین روش توصیه می‌شود. یک مورد کاربردی محدود با کاربر واقعی، سریع‌تر قابل ارزیابی است و پیش از سرمایه‌گذاری گسترده، فرض‌ها را می‌آزماید.",
            },
            {
              question: "چه تفاوتی با خرید یک ابزار آماده دارد؟",
              answer:
                "ابزار آماده نقطه شروع است، نه راهکار کامل. تفاوت در اتصال به دانش و سامانه‌های سازمان، تعریف دسترسی، طراحی گردش‌کار و پایش کیفیت است؛ چیزی که ابزار به‌تنهایی فراهم نمی‌کند.",
            },
          ],
        }}
      />

      <section className="section-padding border-t border-border">
        <div className="container-custom">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="text-2xl font-bold text-text-primary">از کدام وظیفه شروع کنیم؟</h2>
              <p className="mt-2 max-w-xl text-sm leading-7 text-text-secondary">
                در یک جلسه اولیه، وظایف پرتکرار سازمان را بررسی می‌کنیم و مناسب‌ترین نقطه شروع را
                مشخص می‌کنیم.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Link href="/contact" className="btn btn-primary">
                درخواست ارزیابی هوش مصنوعی
              </Link>
              <Link href="/products/ai-workspace" className="btn btn-outline">
                ATIVAR AI Workspace
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

