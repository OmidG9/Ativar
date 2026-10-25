import Link from "next/link";
import { ServiceDepth } from "@/components/sections/service-depth";
import { CTA_LABELS } from "@/lib/cta";
import { createMetadata } from "@/lib/metadata";
import { faNumber } from "@/lib/number";

export const metadata = createMetadata({
  title: "مشاوره و تحول دیجیتال",
  description:
    "خدمات مشاوره راهبردی فین‌تک، تحول دیجیتال، راهبرد هوش مصنوعی سازمانی، معماری سازمانی و امکان‌سنجی فنی و اقتصادی آتیوار.",
  path: "/services/consulting",
});

const services = [
  {
    title: "مشاوره راهبردی فین‌تک",
    description:
      "بررسی فرصت‌های فناوری مالی، تحلیل نیازهای کسب‌وکار، طراحی مدل عملیاتی و تدوین نقشه راه توسعه راهکارهای دیجیتال مالی.",
    outputs: [
      "تحلیل مسئله و نیاز کسب‌وکار",
      "بررسی گزینه‌های فنی و عملیاتی",
      "ارزیابی اولیه هزینه، ریسک و پیچیدگی",
      "طراحی معماری مفهومی",
      "تدوین نقشه راه اجرا",
      "تعیین وابستگی‌ها و الزامات یکپارچه‌سازی",
    ],
  },
  {
    title: "مشاوره تحول دیجیتال",
    description:
      "کمک به سازمان برای شناسایی فرایندهای قابل بهبود، تعیین اولویت‌های تحول و طراحی مسیر اجرایی متناسب با ظرفیت سازمان.",
    outputs: [
      "ارزیابی وضعیت موجود",
      "شناسایی گلوگاه‌ها و دوباره‌کاری‌ها",
      "تحلیل فرایندهای اولویت‌دار",
      "تعریف وضعیت هدف",
      "تدوین نقشه راه مرحله‌ای",
      "تعریف شاخص‌های ارزیابی پیشرفت",
    ],
  },
  {
    title: "راهبرد هوش مصنوعی سازمانی",
    description:
      "شناسایی موارد استفاده مناسب از هوش مصنوعی و تعیین اینکه کدام مسئله ارزش اجرای آزمایشی یا استقرار عملیاتی دارد.",
    outputs: [
      "ارزیابی آمادگی سازمان",
      "اولویت‌بندی موارد استفاده",
      "بررسی منابع داده و دانش",
      "ارزیابی گزینه‌های مدل و زیرساخت",
      "تحلیل ریسک‌های امنیتی و عملیاتی",
      "طراحی برنامه اجرای آزمایشی",
      "تعریف شاخص‌های سنجش ارزش",
    ],
  },
  {
    title: "معماری سازمانی و سامانه‌ها",
    description:
      "طراحی ساختار کلان راهکارها و ارتباط میان سامانه‌ها، داده‌ها، کاربران و فرایندها؛ با هدف کاهش پیچیدگی، افزایش قابلیت توسعه و روشن‌شدن وابستگی‌های فنی.",
  },
  {
    title: "امکان‌سنجی فنی و اقتصادی",
    description:
      "ارزیابی گزینه‌های اجرایی از نظر هزینه، پیچیدگی، منابع مورد نیاز، ریسک، زمان‌بندی و ارزش اقتصادی مورد انتظار.",
    note: "هدف: جلوگیری از تصمیم‌های پرهزینه‌ای که بدون شناخت کافی از نیاز، محدودیت‌ها و مسیر اجرا اتخاذ می‌شوند.",
  },
];

const managerValue = [
  "شفاف‌تر شدن مسئله‌ای که قرار است حل شود",
  "امکان مقایسه گزینه‌ها پیش از سرمایه‌گذاری",
  "اولویت‌بندی پروژه‌ها بر اساس اهمیت و امکان اجرا",
  "مشخص‌شدن منابع، وابستگی‌ها و ریسک‌ها",
  "تعیین شاخص‌های قابل سنجش برای ارزیابی نتیجه",
  "ایجاد زبان مشترک میان مدیریت، کسب‌وکار و فناوری اطلاعات",
];

export default function ConsultingPage() {
  return (
    <>
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold tracking-wide text-brand-accent">مشاوره و تحول دیجیتال</p>
            <h1 className="section-title mt-3">تصمیم‌های راهبردی را به برنامه اجرایی تبدیل کنید</h1>
            <p className="section-subtitle">
              تحول دیجیتال با خرید فناوری آغاز نمی‌شود؛ با شناخت مسئله، تعیین اولویت‌ها و طراحی
              مسیری آغاز می‌شود که با اهداف، منابع و توان اجرایی سازمان سازگار باشد.
            </p>
            <p className="mt-4 text-base leading-8 text-text-secondary">
              آتیوار در حوزه مشاوره راهبردی فناوری، تحول دیجیتال، هوش مصنوعی سازمانی و راهکارهای
              فین‌تک به سازمان‌ها کمک می‌کند فرصت‌ها را ارزیابی کنند، گزینه‌های پیش رو را بسنجند و
              برای اجرای تصمیم‌ها برنامه‌ای روشن داشته باشند.
            </p>
            <div className="mt-8">
              <Link href="/contact" className="btn btn-primary">
                {CTA_LABELS.consult}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding border-y border-border bg-brand-light/50">
        <div className="container-custom">
          <h2 className="section-title">خدمات مشاوره‌ای آتیوار</h2>
          <div className="mt-10 border-t border-border">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="grid gap-4 border-b border-border py-7 lg:grid-cols-[3rem_minmax(0,1fr)_minmax(0,1fr)] lg:gap-8"
              >
                <span className="text-sm tabular-nums text-brand-primary">{faNumber(index + 1)}</span>
                <div>
                  <h3 className="text-lg font-semibold text-text-primary">{service.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-text-secondary">{service.description}</p>
                  {service.note && (
                    <p className="mt-3 rounded-xl border border-border bg-white px-4 py-3 text-xs leading-6 text-text-secondary">
                      {service.note}
                    </p>
                  )}
                </div>
                {service.outputs && (
                  <div className="rounded-xl border border-border bg-white p-5">
                    <p className="text-xs font-semibold text-text-secondary">خروجی‌های قابل تعریف</p>
                    <ul className="mt-3 space-y-2 text-sm text-text-primary">
                      {service.outputs.map((output) => (
                        <li key={output} className="flex items-start gap-2 leading-6">
                          <span
                            aria-hidden="true"
                            className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand-accent"
                          />
                          {output}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm leading-7 text-text-secondary">
            نوع و سطح هر خروجی پیش از شروع همکاری در پیشنهاد فنی و قرارداد مشخص می‌شود.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-wide text-brand-accent">ارزش برای مدیران ارشد</p>
            <h2 className="section-title mt-3">چه چیزی برای تصمیم‌گیری مدیریتی تغییر می‌کند</h2>
          </div>
          <ul className="mt-10 grid gap-x-10 border-t border-border sm:grid-cols-2">
            {managerValue.map((item) => (
              <li key={item} className="border-b border-border py-4 text-sm leading-7 text-text-primary">
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <Link href="/contact" className="btn btn-primary">
              {CTA_LABELS.consult}
            </Link>
          </div>
        </div>
      </section>

      <ServiceDepth
        problem={{
          heading: "وقتی فناوری پیش از مسئله انتخاب می‌شود",
          lead: "بسیاری از پروژه‌های فناوری نه به‌دلیل ضعف فنی، بلکه به‌دلیل تعریف نشدن مسئله، دامنه و معیار موفقیت متوقف می‌شوند. مشاوره آتیوار با روشن کردن این سه عنصر آغاز می‌شود تا سرمایه‌گذاری بعدی بر پایه تصمیم قابل دفاع انجام شود.",
          signals: [
            "تصمیم‌های فناوری موازی یا متناقض در واحدهای مختلف",
            "پروژه‌هایی که پس از پایلوت به بهره‌برداری نمی‌رسند",
            "داده‌های پراکنده و نبود تصویر واحد از وضعیت سازمان",
            "فشار برای کاهش هزینه بدون شناخت گلوگاه واقعی",
            "ابهام در مرز مسئولیت تیم داخلی و پیمانکاران",
          ],
        }}
        approach={{
          heading: "از شناخت وضعیت تا نقشه راه اجرایی",
          lead: "هر همکاری مشاوره در فازهای کوتاه و با خروجی مشخص پیش می‌رود؛ فاز بعد تنها پس از تأیید خروجی فاز قبل آغاز می‌شود.",
          steps: [
            {
              title: "شناخت وضعیت و ذی‌نفعان",
              description:
                "مصاحبه با ذی‌نفعان کلیدی و بررسی اسناد، سامانه‌ها و جریان‌های کاری برای رسیدن به تصویری مشترک از وضعیت فعلی.",
            },
            {
              title: "تحلیل شکاف و اولویت‌بندی",
              description:
                "تفکیک مسئله‌های ساختاری از نشانه‌ها، ارزیابی اثر و فوریت، و انتخاب محدوده‌ای که در بازه منطقی قابل تغییر است.",
            },
            {
              title: "طراحی گزینه‌ها و ارزیابی اقتصادی",
              description:
                "تدوین چند گزینه راهکار همراه با برآورد هزینه کل مالکیت، ریسک‌ها و پیش‌نیازهای سازمانی هر گزینه.",
            },
            {
              title: "نقشه راه و معیار سنجش",
              description:
                "تبدیل گزینه منتخب به برنامه مرحله‌ای با مسئولیت‌ها، وابستگی‌ها و شاخص‌هایی که پیشرفت را قابل اندازه‌گیری می‌کند.",
            },
          ],
        }}
        value={{
          heading: "چه چیزی تغییر می‌کند",
          lead: "خروجی مشاوره یک سند عمومی نیست؛ تصمیمی است که تیم اجرایی بتواند بر پایه آن برنامه‌ریزی کند.",
          outcomes: [
            {
              title: "تصمیم قابل دفاع",
              description:
                "گزینه منتخب با مفروضات، هزینه‌ها و ریسک‌های روشن برای ارائه به تیم مدیریت یا هیئت‌مدیره تدوین می‌شود.",
            },
            {
              title: "دامنه شفاف",
              description:
                "مرز کار، مسئولیت‌ها و تحویل‌دادنی‌ها پیش از شروع اجرا مشخص است و انتظارات دو طرف هم‌راستا می‌شود.",
            },
            {
              title: "کاهش دوباره‌کاری",
              description:
                "اولویت‌بندی مبتنی بر اثر، از شروع پروژه‌هایی که بعداً متوقف یا بازطراحی می‌شوند جلوگیری می‌کند.",
            },
            {
              title: "آمادگی برای اجرا",
              description:
                "نقشه راه به‌گونه‌ای تدوین می‌شود که به سند نیازمندی، معماری و برنامه اجرایی قابل تبدیل باشد.",
            },
          ],
        }}
        faq={{
          heading: "پیش از شروع همکاری",
          items: [
            {
              question: "یک پروژه مشاوره چقدر طول می‌کشد؟",
              answer:
                "مدت به دامنه، تعداد ذی‌نفعان و آمادگی اسناد بستگی دارد. پیش از شروع، فازها، خروجی هر فاز و زمان‌بندی توافق و مکتوب می‌شود؛ در پروژه‌های چندفازی، هر فاز مستقل قابل توقف است.",
            },
            {
              question: "چه اطلاعاتی از سازمان لازم است؟",
              answer:
                "دسترسی به اسناد راهبردی، فهرست سامانه‌ها و فرایندهای اصلی و امکان گفت‌وگو با چند ذی‌نفع کلیدی. اگر این اطلاعات کامل نباشد، مرحله شناخت شامل جمع‌آوری و ساختاردهی آن خواهد بود.",
            },
            {
              question: "آیا خروجی برای ارائه به هیئت‌مدیره مناسب است؟",
              answer:
                "بله. گزارش نهایی شامل تصویر وضعیت، گزینه‌ها، ارزیابی اقتصادی، ریسک‌ها و پیشنهاد اجرایی است و می‌تواند مبنای تصمیم‌گیری در جلسات مدیریتی باشد.",
            },
            {
              question: "آیا آتیوار اجرای پروژه را هم بر عهده می‌گیرد؟",
              answer:
                "بله، اما این دو خدمت از هم جدا هستند. می‌توانید فقط مشاوره دریافت کنید، یا پس از تأیید نقشه راه، طراحی و اجرا را نیز به آتیوار بسپارید. این تفکیک در قرارداد مشخص می‌شود.",
            },
            {
              question: "نحوه قیمت‌گذاری چگونه است؟",
              answer:
                "بر پایه دامنه کار، فازها و سطح مشارکت تیم آتیوار برآورد می‌شود. پیش از قرارداد، دامنه و خروجی‌ها مکتوب و قیمت هر فاز شفاف می‌شود تا هزینه‌ای خارج از توافق ایجاد نشود.",
            },
          ],
        }}
      />

      <section className="section-padding border-t border-border">
        <div className="container-custom">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="text-2xl font-bold text-text-primary">مسئله را روشن کنیم؟</h2>
              <p className="mt-2 max-w-xl text-sm leading-7 text-text-secondary">
                یک جلسه اولیه برای شناخت وضعیت و بررسی اینکه مشاوره در کدام مرحله بیشترین اثر را
                دارد.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Link href="/contact" className="btn btn-primary">
                {CTA_LABELS.consult}
              </Link>
              <Link href="/services/implementation" className="btn btn-outline">
                بررسی معماری و اجرای پروژه
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
