import Link from "next/link";
import { AiArchitectureMap } from "@/components/diagrams/ai-architecture-map";
import { ServiceDepth } from "@/components/sections/service-depth";
import { serviceLines } from "@/content/service-lines";
import { CTA_LABELS } from "@/lib/cta";
import { createMetadata } from "@/lib/metadata";
import { faNumber } from "@/lib/number";

export const metadata = createMetadata({
  title: "هوش مصنوعی سازمانی | تحلیل داده، مدیریت دانش و LLM",
  description:
    "راهکارهای هوش مصنوعی سازمانی آتیوار برای تحلیل داده، مدیریت دانش، دستیارهای تخصصی و طراحی محیط هوش مصنوعی متناسب با نیاز و زیرساخت سازمان.",
  path: "/solutions/enterprise-ai",
});

const levels = [
  {
    title: "ATIVAR Data Intelligence",
    tagline: "از داده به تصمیم",
    description:
      "سامان‌دهی و تحلیل داده‌های سازمان برای تهیه گزارش‌های مدیریتی منسجم‌تر، شناسایی روندها و مغایرت‌ها و پشتیبانی از تصمیم‌گیری.",
  },
  {
    title: "ATIVAR Knowledge Intelligence",
    tagline: "از دانش به دسترسی",
    description:
      "تبدیل اسناد، دستورالعمل‌ها و دانش سازمانی به پایگاه دانشی قابل جست‌وجو، همراه با پاسخ‌های مستند در صورت پیاده‌سازی قابلیت ارجاع به منابع.",
  },
  {
    title: "ATIVAR Enterprise LLM",
    tagline: "از هوش مصنوعی به خدمت",
    description:
      "طراحی محیط هوش مصنوعی سازمانی برای توسعه دستیارهای تخصصی، اتصال به منابع مجاز و پیاده‌سازی گردش‌کارها و خدمات هوشمند.",
  },
];

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

const benefits = [
  "گزارش‌گیری سریع‌تر و دسترسی بهتر به اطلاعات",
  "کاهش فعالیت‌های دستی و تکراری در موارد منتخب",
  "دسترسی مؤثرتر به دانش و تجربه سازمان",
  "توسعه دستیارهای متناسب با نیاز واحدها",
  "امکان طراحی معماری مبتنی بر زیرساخت داخلی، در صورت تناسب فنی",
  "امکان توسعه خدمات هوشمند برای شرکت‌های تابعه و مشتریان",
  "قابلیت تعریف شاخص برای سنجش کیفیت، استفاده و ارزش اقتصادی",
];

export default function EnterpriseAIPage() {
  return (
    <>
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold tracking-wide text-brand-accent">ATIVAR Enterprise AI</p>
            <h1 className="section-title mt-3">سازمان خود را در سه سطح به هوش مصنوعی مجهز کنید</h1>
            <p className="mt-4 text-sm font-medium text-brand-primary">
              از داده تا دانش، از دانش تا هوش مصنوعی اختصاصی
            </p>
            <p className="section-subtitle">
              آتیوار به سازمان‌ها کمک می‌کند داده‌ها را به بینش مدیریتی، دانش را به دارایی قابل
              استفاده و هوش مصنوعی را به قابلیتی عملیاتی و قابل توسعه تبدیل کنند.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className="btn btn-primary">
                {CTA_LABELS.aiAssessment}
              </Link>
              <Link href="/products/ai-workspace" className="btn btn-outline">
                {CTA_LABELS.workspace}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="levels" className="section-padding scroll-mt-20 border-y border-border bg-brand-light/50">
        <div className="container-custom">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="section-title">سه سطح خدمات آتیوار</h2>
            <p className="max-w-md text-sm leading-7 text-text-secondary">
              سازمان می‌تواند از هر یک از سه سطح آغاز کند. انتخاب مسیر مناسب به نیاز واقعی، وضعیت
              داده، آمادگی زیرساخت، الزامات امنیتی و اهداف اقتصادی بستگی دارد.
            </p>
          </div>
          <div className="mt-10 border-t border-border">
            {levels.map((level, index) => (
              <div
                key={level.title}
                className="grid gap-3 border-b border-border py-7 sm:grid-cols-[3rem_minmax(0,1fr)] sm:gap-6"
              >
                <span className="text-sm tabular-nums text-brand-primary">{faNumber(index + 1)}</span>
                <div>
                  <p className="text-xs font-medium text-text-secondary">سطح {faNumber(index + 1)}</p>
                  <h3 className="mt-1 text-lg font-semibold text-text-primary">{level.title}</h3>
                  <p className="mt-1 text-sm font-medium text-brand-accent">{level.tagline}</p>
                  <p className="mt-2 max-w-2xl text-sm leading-7 text-text-secondary">
                    {level.description}
                  </p>
                </div>
              </div>
            ))}
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
          <p className="mt-6 max-w-3xl text-sm leading-7 text-text-secondary">
            هیچ قابلیت پیاده‌سازی‌نشده‌ای به‌عنوان ویژگی قطعی محصول معرفی نمی‌شود. وضعیت هر قابلیت در
            طراحی و قرارداد مشخص خواهد شد.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
            <div>
              <h2 className="section-title">مزایای سازمانی</h2>
              <p className="section-subtitle">
                ارزش راهکار با تغییر قابل مشاهده در دسترسی به اطلاعات، انجام کار و کیفیت تصمیم
                سنجیده می‌شود.
              </p>
            </div>
            <ul className="border-t border-border">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3 border-b border-border py-4">
                  <span
                    aria-hidden="true"
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-accent"
                  />
                  <span className="text-sm leading-7 text-text-primary">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-padding border-y border-border bg-brand-light/50">
        <div className="container-custom">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-16">
            <div>
              <h2 className="section-title">امنیت، کنترل و نظارت انسانی</h2>
              <p className="section-subtitle">
                استفاده سازمانی از هوش مصنوعی باید با کنترل دسترسی، تعیین محل پردازش، نظارت انسانی
                در تصمیم‌های حساس و رعایت الزامات قانونی همراه باشد.
              </p>
              <div className="mt-6 space-y-3 text-sm text-text-secondary">
                <p>• تعریف سطح دسترسی کاربران و نقش‌ها</p>
                <p>• بررسی محل نگهداری و پردازش داده</p>
                <p>• طراحی سیاست‌های محرمانگی و استفاده</p>
                <p>• ارجاع به منابع و ارزیابی کیفیت پاسخ</p>
                <p>• پیش‌بینی نظارت انسانی در تصمیم‌های حساس</p>
              </div>
            </div>
            <div className="card p-6 sm:p-8">
              <h3 className="text-lg font-semibold text-text-primary">مسیر اجرا</h3>
              <p className="mt-3 text-sm leading-7 text-text-secondary">
                سازمان می‌تواند از هر یک از سه سطح آغاز کند. انتخاب مسیر مناسب به نیاز واقعی، وضعیت
                داده، آمادگی زیرساخت، الزامات امنیتی و اهداف اقتصادی بستگی دارد.
              </p>
              <div className="mt-6 rounded-xl border border-border p-4">
                <p className="text-sm font-medium text-text-primary">گام اول: ارزیابی اولیه</p>
                <p className="mt-1 text-sm leading-7 text-text-secondary">
                  بررسی نیاز، داده، زیرساخت و محدودیت‌ها برای تعیین نقطه شروع مناسب.
                </p>
              </div>
              <div className="mt-3 rounded-xl border border-border p-4">
                <p className="text-sm font-medium text-text-primary">گام دوم: اجرای محدود و سنجش</p>
                <p className="mt-1 text-sm leading-7 text-text-secondary">
                  اجرای یک مورد کاربردی منتخب، سنجش نتیجه و تصمیم درباره گسترش.
                </p>
              </div>
              <Link href="/contact" className="btn btn-primary mt-6 w-full">
                {CTA_LABELS.aiAssessment}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-wide text-brand-accent">جایگاه محصولات و خدمات</p>
            <h2 className="section-title mt-3">یک تعریف واحد برای نام‌های مشابه</h2>
            <p className="section-subtitle">
              برای جلوگیری از هم‌پوشانی نام‌ها و سردرگمی مشتری، این تعریف‌ها در منوها، صفحات معرفی،
              پیشنهادهای تجاری و اسناد فروش یکسان به کار می‌روند.
            </p>
          </div>

          <div className="mt-8 overflow-x-auto rounded-2xl border border-border bg-white">
            <table className="w-full min-w-[42rem] border-collapse text-right text-sm">
              <thead>
                <tr className="border-b border-border bg-brand-light/60">
                  <th scope="col" className="px-5 py-4 font-semibold text-text-primary">نام</th>
                  <th scope="col" className="px-5 py-4 font-semibold text-text-primary">تعریف پیشنهادی</th>
                  <th scope="col" className="px-5 py-4 font-semibold text-text-primary">نقش در سبد خدمات</th>
                </tr>
              </thead>
              <tbody>
                {serviceLines.map((line) => (
                  <tr key={line.name} className="border-b border-border last:border-b-0">
                    <td className="px-5 py-4 font-medium text-text-primary">{line.name}</td>
                    <td className="px-5 py-4 text-text-secondary">{line.definition}</td>
                    <td className="px-5 py-4 text-text-secondary">{line.role}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-10 grid gap-6 rounded-2xl border border-border bg-brand-light/50 p-6 sm:p-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
            <div>
              <p className="text-xs font-semibold tracking-wide text-brand-accent">
                ATIVAR AI Business Platform
              </p>
              <h3 className="mt-2 text-xl font-bold text-text-primary">
                توسعه خدمات هوشمند درآمدزا برای دیگران
              </h3>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-text-secondary">
                آتیوار می‌تواند بر پایه قابلیت‌های Data Intelligence، Knowledge Intelligence و
                Enterprise LLM، مسیر توسعه و ارائه خدمات هوشمند به شرکت‌های تابعه و مشتریان را طراحی
                کند. دامنه این مسیر بر اساس مدل کسب‌وکار، زیرساخت و الزامات هر سازمان تعیین می‌شود.
              </p>
            </div>
            <Link href="/contact" className="btn btn-outline shrink-0">
              {CTA_LABELS.aiEconomics}
            </Link>
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
                {CTA_LABELS.aiAssessment}
              </Link>
              <Link href="/products/ai-workspace" className="btn btn-outline">
                {CTA_LABELS.workspace}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
