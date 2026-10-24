import Link from "next/link";
import { FintechCapabilityMap } from "@/components/diagrams/fintech-capability-map";
import { ServiceDepth } from "@/components/sections/service-depth";
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

      <ServiceDepth
        problem={{
          heading: "ابهام در مرز فناوری، کسب‌وکار و الزامات مجوز",
          lead: "طراحی محصول مالی دیجیتال هم‌زمان به مدل کسب‌وکار، معماری فناوری و الزامات قانونی وابسته است. اگر این سه حوزه از ابتدا تفکیک نشوند، تغییرات پرهزینه در میانه راه اجتناب‌ناپذیر می‌شود. آتیوار مسئولیت فنی و مشاوره‌ای را از فعالیت‌های نیازمند مجوز جدا نگه می‌دارد.",
          signals: [
            "ابهام در اینکه کدام بخش از محصول نیازمند مجوز است",
            "سامانه‌های قدیمی و هزینه بالای یکپارچه‌سازی",
            "نبود تصویر روشن از جریان داده و مرز مسئولیت‌ها",
            "ریسک عملیاتی در فرایندهای مرتبط با دارایی و وثیقه",
            "تجربه کاربری ناهمگون در کانال‌های مختلف خدمت",
          ],
        }}
        approach={{
          heading: "از مدل کسب‌وکار تا آمادگی اجرا",
          lead: "کار با روشن کردن محدوده مجاز و جریان ارزش آغاز می‌شود؛ طراحی فنی پس از آن و بر پایه همین محدوده انجام می‌گیرد.",
          steps: [
            {
              title: "تثبیت مدل کسب‌وکار و محدوده مجاز",
              description:
                "روشن کردن جریان ارزش، بازیگران و مرز خدمات فنی در برابر فعالیت‌هایی که نیازمند مجوز مستقل هستند.",
            },
            {
              title: "طراحی معماری و یکپارچه‌سازی",
              description:
                "تعریف اجزا، اینترفیس‌ها، مدل داده و مسیر اتصال به سامانه‌های موجود با در نظر گرفتن محدودیت‌های واقعی.",
            },
            {
              title: "کنترل‌ها، امنیت و تاب‌آوری",
              description:
                "طراحی دسترسی، ثبت رخداد، پایش و سناریوهای تداوم خدمت متناسب با حساسیت داده و فرایند.",
            },
            {
              title: "آماده‌سازی اجرا و ارزیابی",
              description:
                "تدوین نقشه اجرا، معیار پذیرش و برنامه آزمون پیش از ورود به فاز پیاده‌سازی.",
            },
          ],
        }}
        value={{
          heading: "ارزش قابل انتظار در یک پروژه فین‌تک",
          lead: "هدف، ساخت سریع یک محصول نیست؛ ایجاد راهکاری است که بتواند با رشد کسب‌وکار و الزامات جدید تکامل یابد.",
          outcomes: [
            {
              title: "شفافیت محدوده",
              description:
                "تفکیک روشن مسئولیت فنی از فعالیت مجوزمحور، مبنای همکاری با شرکای مجاز را روشن می‌کند.",
            },
            {
              title: "معماری مقیاس‌پذیر",
              description:
                "طراحی ماژولار امکان افزودن کانال‌ها و محصولات جدید را بدون بازنویسی کامل فراهم می‌کند.",
            },
            {
              title: "کاهش ریسک یکپارچه‌سازی",
              description:
                "شناسایی وابستگی‌ها و تعریف اینترفیس‌ها پیش از اجرا، هزینه تغییر در مراحل پایانی را کاهش می‌دهد.",
            },
            {
              title: "آمادگی برای ارزیابی",
              description:
                "مستندسازی تصمیم‌ها و کنترل‌ها، بررسی فنی و انطباق را برای ذی‌نفعان و شرکا ساده‌تر می‌کند.",
            },
          ],
        }}
        faq={{
          heading: "پرسش‌های رایج درباره محدوده کار",
          items: [
            {
              question: "آیا آتیوار مجوز خدمات مالی دارد؟",
              answer:
                "نه. آتیوار در حوزه مشاوره فنی، طراحی معماری و پیاده‌سازی نرم‌افزار فعالیت می‌کند و خدمات بانکی، پرداخت، کارگزاری یا سایر فعالیت‌های نیازمند مجوز ارائه نمی‌دهد. در پروژه‌هایی که فعالیت مجوزمحور لازم است، همکاری با دارنده مجوز معتبر پیش‌بینی می‌شود.",
            },
            {
              question: "همکاری با شرکت‌های دارای مجوز چگونه است؟",
              answer:
                "آتیوار می‌تواند نقش تأمین‌کننده فنی یا مشاور را در کنار نهاد دارای مجوز داشته باشد. محدوده مسئولیت‌ها و مرز خدمات پیش از شروع در قرارداد و اسناد پروژه مشخص می‌شود.",
            },
            {
              question: "با سامانه‌های قدیمی هم یکپارچه می‌شوید؟",
              answer:
                "بله، مشروط به وجود اینترفیس فنی یا امکان ایجاد آن. در غیر این صورت گزینه‌های لایه واسط، همگام‌سازی دوره‌ای یا جایگزینی تدریجی ارزیابی و پیشنهاد می‌شود.",
            },
            {
              question: "درباره تجربه در حوزه فلزات گران‌بها چه اطلاعاتی ارائه می‌کنید؟",
              answer:
                "تجربه آغازین آتیوار در این حوزه است و به‌صورت محافظه‌کارانه و بدون ارائه آمار یا ادعای تأییدنشده بیان می‌شود. جزئیات قابل ارائه، پس از هماهنگی و با رضایت کارفرما در اختیار قرار می‌گیرد.",
            },
            {
              question: "برای شروع چه اطلاعاتی لازم است؟",
              answer:
                "توضیح مدل کسب‌وکار، فهرست سامانه‌ها و شرکای فنی موجود، محدوده تقریبی محصول و الزامات قانونی شناخته‌شده. بر همین پایه دامنه بررسی و گام بعدی تعیین می‌شود.",
            },
          ],
        }}
      />

      <section className="section-padding border-t border-border">
        <div className="container-custom">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="text-2xl font-bold text-text-primary">راهکار فین‌تک خود را بررسی کنیم</h2>
              <p className="mt-2 max-w-xl text-sm leading-7 text-text-secondary">
                محدوده فعلی، سامانه‌های موجود و گام بعدی را در یک جلسه اولیه مرور می‌کنیم.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Link href="/contact" className="btn btn-primary">
                درخواست بررسی راهکار
              </Link>
              <Link href="/services/consulting" className="btn btn-outline">
                مشاوره و تحول دیجیتال
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
