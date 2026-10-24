import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { caseStudies, getCaseStudy } from "@/content/case-studies";
import { createMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

type CaseStudyPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return {};

  return createMetadata({
    title: study.title,
    description: study.summary,
    path: `/projects/${study.slug}` as `/${string}`,
  });
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const study = getCaseStudy(slug);

  if (!study) notFound();

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "خانه",
        item: siteConfig.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "پروژه‌ها",
        item: `${siteConfig.url}/projects`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: study.title,
        item: `${siteConfig.url}/projects/${study.slug}`,
      },
    ],
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
                  <Link href="/projects" className="hover:text-text-primary">
                    پروژه‌ها
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li aria-current="page" className="text-text-primary">
                  مطالعه موردی
                </li>
              </ol>
            </nav>

            <div className="mt-8 max-w-3xl">
              <p className="text-xs font-semibold tracking-wide text-brand-accent">{study.eyebrow}</p>
              <h1 className="section-title mt-3">{study.title}</h1>
              <p className="section-subtitle">{study.summary}</p>
            </div>
          </div>
        </header>

        <div className="section-padding">
          <div className="container-custom">
            <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_18rem] lg:gap-16">
              <div className="max-w-3xl">
                {study.sections.map((section) => (
                  <section key={section.heading} className="mb-10 last:mb-0">
                    <h2 className="text-xl font-bold leading-8 text-text-primary sm:text-2xl">
                      {section.heading}
                    </h2>
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph} className="mt-4 text-base leading-8 text-text-secondary">
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

                <div role="note" className="mt-10 rounded-2xl border border-border bg-brand-light/70 p-6">
                  <h2 className="text-sm font-semibold text-text-primary">وضعیت انتشار</h2>
                  <p className="mt-2 text-sm leading-7 text-text-secondary">{study.publicationNote}</p>
                </div>
              </div>

              <aside aria-labelledby="facts-heading">
                <div className="rounded-2xl border border-border p-6">
                  <h2 id="facts-heading" className="text-sm font-semibold text-text-primary">
                    مشخصات پروژه
                  </h2>
                  <dl className="mt-4 divide-y divide-border">
                    {study.facts.map((fact) => (
                      <div key={fact.label} className="py-3">
                        <dt className="text-xs text-text-secondary">{fact.label}</dt>
                        <dd className="mt-1 text-sm font-medium text-text-primary">{fact.value}</dd>
                      </div>
                    ))}
                  </dl>
                  <Link href="/contact" className="btn btn-primary mt-6 w-full">
                    بررسی پروژه مشابه
                  </Link>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </article>

      <section className="section-padding border-t border-border">
        <div className="container-custom">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="text-xl font-bold text-text-primary">پروژه مشابهی دارید؟</h2>
              <p className="mt-2 max-w-xl text-sm leading-7 text-text-secondary">
                مسئله خود را با ما در میان بگذارید. در جلسه اولیه، امکان‌سنجی و مسیر مناسب را بررسی
                می‌کنیم.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Link href="/contact" className="btn btn-primary">
                درخواست جلسه مشاوره
              </Link>
              <Link href="/solutions/fintech" className="btn btn-outline">
                راهکارهای فین‌تک
              </Link>
            </div>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, "\\u003c"),
        }}
      />
    </>
  );
}
