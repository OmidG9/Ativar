import Link from "next/link";
import { articles } from "@/content/articles";
import { formatPersianDate } from "@/lib/date";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "دانش و تحلیل",
  description: "مقالات تخصصی و کاربردی آتیوار برای مدیران در حوزه فین‌تک، هوش مصنوعی سازمانی و تحول دیجیتال.",
  path: "/insights",
});

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

      <section className="pb-16 sm:pb-24">
        <div className="container-custom">
          <div className="border-t border-border">
            {articles.map((article) => (
              <article key={article.slug} className="border-b border-border py-8">
                <div className="grid gap-4 md:grid-cols-[10rem_minmax(0,1fr)] md:gap-8">
                  <div className="text-xs leading-6 text-text-secondary">
                    <p>{formatPersianDate(article.publishedAt)}</p>
                    <p>{article.readingMinutes} دقیقه مطالعه</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold tracking-wide text-brand-accent">
                      {article.category}
                    </p>
                    <h2 className="mt-2 text-lg font-semibold leading-8 text-text-primary sm:text-xl">
                      <Link
                        href={`/insights/${article.slug}`}
                        className="hover:text-brand-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent/40"
                      >
                        {article.title}
                      </Link>
                    </h2>
                    <p className="mt-2 max-w-2xl text-sm leading-7 text-text-secondary">
                      {article.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-brand-light/60">
        <div className="container-custom">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="text-2xl font-bold text-text-primary">آیا موضوع خاصی مدنظرتان است؟</h2>
              <p className="mt-2 max-w-xl text-sm leading-7 text-text-secondary">
                اگر به موضوع خاصی در حوزه فین‌تک یا هوش مصنوعی سازمانی نیاز دارید، می‌توانید آن را در جلسه مشاوره مطرح کنید.
              </p>
            </div>
            <Link href="/contact" className="btn btn-primary shrink-0">
              درخواست جلسه مشاوره
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
