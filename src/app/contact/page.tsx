import { ContactForm } from "@/components/forms/contact-form";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "تماس و همکاری",
  description:
    "درباره مسئله سازمان خود با آتیوار گفت‌وگو کنید؛ مشاوره راهبردی، هوش مصنوعی سازمانی، تحلیل داده، مدیریت دانش، فین‌تک و معماری و اجرای پروژه.",
  path: "/contact",
});

const topics = [
  {
    title: "مشاوره راهبردی و تحول دیجیتال",
    description: "تعیین اولویت‌ها، مسیر اجرا و تصمیم‌های کلان فناوری",
  },
  {
    title: "هوش مصنوعی سازمانی",
    description: "انتخاب مسئله، امکان‌سنجی و طراحی راهکار هوش مصنوعی",
  },
  {
    title: "تحلیل هوشمند داده",
    description: "ساماندهی داده و ایجاد قابلیت تحلیل برای تصمیم‌گیری",
  },
  {
    title: "مدیریت دانش سازمانی",
    description: "سازماندهی دانش پراکنده و دسترسی کنترل‌شده به آن",
  },
  {
    title: "AI Workspace یا LLM سازمانی",
    description: "محیط کاربردی هوش مصنوعی و مدل‌های زبانی متناسب با سازمان",
  },
  {
    title: "فین‌تک",
    description: "معماری، یکپارچه‌سازی و توسعه راهکارهای فناوری مالی",
  },
  {
    title: "معماری و اجرای پروژه",
    description: "نیازمندی، طراحی معماری، اجرا و پذیرش راهکار",
  },
  {
    title: "توسعه خدمات هوشمند درآمدزا",
    description: "بررسی ظرفیت توسعه خدمات مبتنی بر فناوری و هوش مصنوعی",
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold tracking-wide text-brand-accent">تماس و همکاری</p>
            <h1 className="section-title mt-3">درباره مسئله سازمان خود با آتیوار گفت‌وگو کنید</h1>
            <p className="section-subtitle">
              اگر برای بهبود فرایندها، توسعه راهکارهای فین‌تک، مدیریت دانش، تحلیل داده یا
              پیاده‌سازی هوش مصنوعی سازمانی برنامه دارید، می‌توانید موضوع را با ما در میان بگذارید.
            </p>
            <p className="mt-4 text-base leading-8 text-text-secondary">
              درخواست شما بررسی می‌شود تا مشخص شود مسئله در چه حوزه‌ای قرار می‌گیرد، چه اطلاعاتی
              برای ارزیابی اولیه نیاز است و مسیر مناسب برای ادامه گفت‌وگو چیست.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-brand-light/60">
        <div className="container-custom grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="card p-6 sm:p-8">
              <h2 className="text-xl font-semibold text-text-primary">فرم درخواست همکاری</h2>
              <p className="mt-2 text-sm leading-7 text-text-secondary">
                برای بررسی اولیه، اطلاعات زیر کافی است. فیلدهای ضروری با ستاره مشخص شده‌اند.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="card p-6 sm:p-8">
              <h2 className="text-xl font-semibold text-text-primary">
                موضوعاتی که می‌توانید مطرح کنید
              </h2>
              <p className="mt-2 text-sm leading-7 text-text-secondary">
                اگر موضوع شما در این فهرست نیست، گزینه «سایر موارد» را انتخاب کنید و مسئله را
                به‌اختصار توضیح دهید.
              </p>
              <div className="mt-6 space-y-3">
                {topics.map((topic) => (
                  <div key={topic.title} className="rounded-xl border border-border p-4">
                    <p className="text-sm font-medium text-text-primary">{topic.title}</p>
                    <p className="mt-1 text-sm leading-6 text-text-secondary">
                      {topic.description}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-xl bg-brand-accentLight p-4 text-sm text-text-primary">
                <p className="font-semibold">اصل اولویت</p>
                <p className="mt-1 leading-7">
                  مسئله سازمان مهم‌تر از انتخاب فناوری است. ابتدا مشکل را تعریف کنید، سپس راهکار
                  بررسی می‌شود.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
