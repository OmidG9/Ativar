import Link from "next/link";
import { articleCategories, articles } from "@/content/articles";
import { CTA_LABELS } from "@/lib/cta";
import { formatPersianDate } from "@/lib/date";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "بینش‌ها و تحلیل",
  description:
    "مقالات تحلیلی آتیوار درباره هوش مصنوعی سازمانی، مدیریت داده و دانش، فین‌تک و معماری سامانه‌ها، و اقتصاد پروژه‌های فناوری.",
  path: "/insights",
});

export default function InsightsPage() {
  return (
    <>
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold tracking-wide text-brand-accent">بینش‌ها و تحلیل</p>
            <h1 className="section-title mt-3">
              بینش‌هایی برای تصمیم‌های بهتر در فناوری، فین‌تک و هوش مصنوعی سازمانی
            </h1>
            <p className="section-subtitle">
              تصمیم‌های فناوری زمانی قابل دفاع هستند که بر شناخت مسئله، داده واقعی و محدودیت‌های
              اجرا استوار باشند. این بخش به موضوعاتی می‌پردازد که پیش از سرمایه‌گذاری، طراحی یا
              گسترش راهکارهای دیجیتال باید روشن شوند.
            </p>
            <p className="mt-4 text-base leading-8 text-text-secondary">
              مقالات بر پایه تجربه عملی و چارچوب‌های قابل بررسی نوشته می‌شوند؛ بدون آمارسازی یا
              وعده نتیجه‌ای که مستند نیست.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-16 sm:pb-24">
        <div className="container-custom">
          <div className="space-y-14">
            {articleCategories.map((category) => {
              const categoryArticles = articles
                .filter((article) => article.category === category.title)
                .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));

              if (categoryArticles.length === 0) {
                return null;
              }

              return (
                <div key={category.title}>
                  <div className="max-w-2xl border-t border-border pt-6">
                    <div className="flex flex-wrap items-baseline justify-between gap-3">
                      <h2 className="text-xl font-semibold text-text-primary sm:text-2xl">
                        {category.title}
                      </h2>
                      <Link
                        href={category.serviceHref}
                        className="text-xs font-semibold text-brand-primary underline-offset-4 hover:underline"
                      >
                        {category.serviceLabel} ←
                      </Link>
                    </div>
                    <p className="mt-3 text-sm leading-7 text-text-secondary">
                      {category.description}
                    </p>
                  </div>

                  <div className="mt-4 border-t border-border">
                    {categoryArticles.map((article) => (
                      <article key={article.slug} className="border-b border-border py-8">
                        <div className="grid gap-4 md:grid-cols-[10rem_minmax(0,1fr)] md:gap-8">
                          <div className="text-xs leading-6 text-text-secondary">
                            <p>{formatPersianDate(article.publishedAt)}</p>
                            <p>{article.readingMinutes} دقیقه مطالعه</p>
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold leading-8 text-text-primary sm:text-xl">
                              <Link
                                href={`/insights/${article.slug}`}
                                className="hover:text-brand-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent/40"
                              >
                                {article.title}
                              </Link>
                            </h3>
                            <p className="mt-2 max-w-2xl text-sm leading-7 text-text-secondary">
                              {article.description}
                            </p>
                            <Link
                              href={`/insights/${article.slug}`}
                              className="mt-3 inline-flex text-xs font-semibold text-brand-primary underline-offset-4 hover:underline"
                            >
                              مطالعه مقاله ←
                            </Link>
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-padding border-t border-border bg-brand-light/60">
        <div className="container-custom">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="text-2xl font-bold text-text-primary">
                موضوعی برای بررسی در سازمان خود دارید؟
              </h2>
              <p className="mt-2 max-w-xl text-sm leading-7 text-text-secondary">
                اگر یکی از این موضوعات به مسئله مشخصی در سازمان شما مربوط است، می‌توانید آن را در
                جلسه مشاوره مطرح کنید تا دامنه بررسی و مسیر مناسب مشخص شود.
              </p>
            </div>
            <Link href="/contact" className="btn btn-primary shrink-0">
              {CTA_LABELS.consult}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
