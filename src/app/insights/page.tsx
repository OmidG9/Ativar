import Link from "next/link";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "دانش و تحلیل",
  description: "مقالات تخصصی و کاربردی آتیوار برای مدیران در حوزه فین‌تک، هوش مصنوعی سازمانی و تحول دیجیتال.",
  path: "/insights",
});

const articles = [
  { title: "چگونه قبل از سرمایه‌گذاری در AI، توجیه اقتصادی آن را بسنجیم؟", cat: "هوش مصنوعی سازمانی" },
  { title: "هوش مصنوعی چگونه هزینه‌های سازمان را کاهش می‌دهد؟", cat: "هوش مصنوعی سازمانی" },
  { title: "چگونه از اطلاعات داخلی سازمان برای پاسخ‌گویی هوشمند استفاده کنیم؟", cat: "مدیریت دانش" },
  { title: "چه خطراتی در استفاده سازمانی از هوش مصنوعی وجود دارد؟", cat: "امنیت و حاکمیت داده" },
  { title: "چگونه یک پروژه فناوری را مرحله‌ای و قابل کنترل اجرا کنیم؟", cat: "مدیریت پروژه فناوری" },
  { title: "ماشین مجازی هوش مصنوعی چه تفاوتی با پلتفرم AI سازمانی دارد؟", cat: "معماری راهکار" },
];

export default function InsightsPage() {
  return (
    <>
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="section-title">دانش و تحلیل</h1>
            <p className="section-subtitle">
              مقالات کوتاه و کاربردی برای کمک به تصمیم‌گیری مدیران در حوزه فناوری، فین‌تک و هوش مصنوعی سازمانی.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-brand-light/60">
        <div className="container-custom">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {articles.map((article) => (
              <article key={article.title} className="card flex h-full flex-col p-6">
                <span className="inline-flex w-fit rounded-full border border-border px-3 py-1 text-xs text-text-secondary">
                  {article.cat}
                </span>
                <h2 className="mt-4 text-lg font-semibold leading-relaxed text-text-primary">{article.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                  این مقاله در حال آماده‌سازی است و به‌زودی منتشر خواهد شد.
                </p>
                <div className="mt-6">
                  <span className="text-sm text-text-secondary">به‌زودی</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="card p-8 lg:p-10">
            <div className="grid gap-6 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="text-2xl font-bold text-text-primary">آیا موضوع خاصی مدنظرتان است؟</h2>
                <p className="mt-4 text-lg leading-relaxed text-text-secondary">
                  اگر به موضوع خاصی در حوزه فین‌تک یا هوش مصنوعی سازمانی نیاز دارید، می‌توانید آن را در جلسه مشاوره مطرح کنید.
                </p>
              </div>
              <div className="flex flex-col items-start gap-3 lg:items-end">
                <Link href="/contact" className="btn btn-primary">
                  درخواست جلسه مشاوره
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
