import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  articles,
  getArticle,
  getArticleCategory,
  getRelatedArticles,
} from "@/content/articles";
import { CTA_LABELS } from "@/lib/cta";
import { formatPersianDate } from "@/lib/date";
import { createMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

type ArticlePageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};

  const description = article.description;
  const path = `/insights/${article.slug}` as `/${string}`;

  return {
    ...createMetadata({ title: article.title, description, path }),
    openGraph: {
      type: "article",
      locale: "fa_IR",
      url: path,
      siteName: siteConfig.name,
      title: article.title,
      description,
      publishedTime: article.publishedAt,
    },
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticle(slug);

  if (!article) notFound();

  const related = getRelatedArticles(article.slug);
  const categoryInfo = getArticleCategory(article.category);
  const url = `${siteConfig.url}/insights/${article.slug}`;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    datePublished: article.publishedAt,
    dateModified: article.publishedAt,
    inLanguage: "fa-IR",
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    author: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/brand/ativar-logo.png`,
      },
    },
  };

  return (
    <>
      <article>
        <header className="section-padding border-b border-border">
          <div className="container-custom">
            <nav aria-label="مسیر صفحه" className="text-xs text-text-secondary">
              <ol className="flex flex-wrap items-center gap-2">
                <li>
                  <Link href="/" className="hover:text-text-primary">
                    خانه
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <Link href="/insights" className="hover:text-text-primary">
                    بینش‌ها و تحلیل
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li aria-current="page" className="text-text-primary">
                  {article.category}
                </li>
              </ol>
            </nav>

            <div className="mt-8 max-w-3xl">
              <p className="text-xs font-semibold tracking-wide text-brand-accent">
                {article.category}
              </p>
              <h1 className="section-title mt-3">{article.title}</h1>
              <p className="section-subtitle">{article.description}</p>
              <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-text-secondary">
                <span>{formatPersianDate(article.publishedAt)}</span>
                <span aria-hidden="true">•</span>
                <span>زمان مطالعه: حدود {article.readingMinutes} دقیقه</span>
              </div>
            </div>
          </div>
        </header>

        <div className="section-padding">
          <div className="container-custom">
            <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_18rem] lg:gap-16">
              <div className="max-w-3xl">
                {article.sections.map((section) => (
                  <section key={section.heading} className="mb-10 last:mb-0">
                    <h2 className="text-xl font-bold leading-8 text-text-primary sm:text-2xl">
                      {section.heading}
                    </h2>
                    {section.paragraphs?.map((paragraph) => (
                      <p
                        key={paragraph}
                        className="mt-4 text-base leading-8 text-text-secondary"
                      >
                        {paragraph}
                      </p>
                    ))}
                    {section.bullets && (
                      <ul className="mt-5 divide-y divide-border border-y border-border">
                        {section.bullets.map((bullet) => (
                          <li
                            key={bullet}
                            className="flex items-start gap-3 py-3 text-sm leading-7 text-text-primary"
                          >
                            <span
                              aria-hidden="true"
                              className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-accent"
                            />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </section>
                ))}
              </div>

              <aside aria-labelledby="takeaways-heading" className="lg:pt-2">
                <div className="rounded-2xl border border-border bg-brand-light/70 p-6">
                  <h2
                    id="takeaways-heading"
                    className="text-sm font-semibold text-text-primary"
                  >
                    خلاصه کاربردی
                  </h2>
                  <ul className="mt-4 space-y-3">
                    {article.takeaways.map((takeaway) => (
                      <li
                        key={takeaway}
                        className="text-sm leading-7 text-text-secondary"
                      >
                        {takeaway}
                      </li>
                    ))}
                  </ul>
                  {categoryInfo && (
                    <div className="mt-6 border-t border-border pt-5">
                      <p className="text-xs text-text-secondary">خدمات مرتبط</p>
                      <Link
                        href={categoryInfo.serviceHref}
                        className="mt-2 inline-flex text-sm font-semibold text-brand-primary underline-offset-4 hover:underline"
                      >
                        {categoryInfo.serviceLabel} ←
                      </Link>
                    </div>
                  )}
                  <Link href="/contact" className="btn btn-primary mt-6 w-full">
                    {CTA_LABELS.consult}
                  </Link>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </article>

      {related.length > 0 && (
        <section className="section-padding border-t border-border">
          <div className="container-custom">
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-xl font-bold text-text-primary">
                مقالات مرتبط
              </h2>
              <Link
                href="/insights"
                className="text-sm font-semibold text-brand-primary"
              >
                همه بینش‌ها
              </Link>
            </div>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {related.map((item) => (
                <article
                  key={item.slug}
                  className="border-t border-border pt-5"
                >
                  <p className="text-xs text-text-secondary">{item.category}</p>
                  <h3 className="mt-2 text-base font-semibold leading-7 text-text-primary">
                    <Link
                      href={`/insights/${item.slug}`}
                      className="hover:text-brand-primary"
                    >
                      {item.title}
                    </Link>
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-text-secondary">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleJsonLd).replace(/</g, "\\u003c"),
        }}
      />
    </>
  );
}
