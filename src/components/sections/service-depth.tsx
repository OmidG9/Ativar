import { faNumber } from "@/lib/number";

export type DepthItem = {
  title: string;
  description: string;
};

export type ServiceDepthProps = {
  problem: {
    heading: string;
    lead: string;
    signals: string[];
  };
  approach: {
    heading: string;
    lead: string;
    steps: DepthItem[];
  };
  value: {
    heading: string;
    lead: string;
    outcomes: DepthItem[];
  };
  faq: {
    heading: string;
    items: Array<{ question: string; answer: string }>;
  };
};

/**
 * Editorial depth block shared by service and solution pages: the problem we
 * address, how we work, what changes for the organisation, and honest answers
 * to the questions that usually come up before an engagement.
 *
 * Rendered entirely on the server; the FAQ uses native <details> so it stays
 * keyboard accessible and works without JavaScript.
 */
export function ServiceDepth({ problem, approach, value, faq }: ServiceDepthProps) {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <section id="problem" className="section-padding border-t border-border">
        <div className="container-custom">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.4fr)] lg:gap-16">
            <div>
              <p className="text-xs font-semibold tracking-wide text-brand-accent">مسئله</p>
              <h2 className="section-title mt-3">{problem.heading}</h2>
            </div>
            <div>
              <p className="text-base leading-8 text-text-secondary sm:text-lg">{problem.lead}</p>
              <ul className="mt-8 divide-y divide-border border-y border-border">
                {problem.signals.map((signal) => (
                  <li key={signal} className="flex items-start gap-3 py-4 text-sm leading-7">
                    <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-accent" />
                    <span className="text-text-primary">{signal}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="approach" className="section-padding bg-brand-light/60">
        <div className="container-custom">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-wide text-brand-accent">رویکرد</p>
            <h2 className="section-title mt-3">{approach.heading}</h2>
            <p className="section-subtitle">{approach.lead}</p>
          </div>
          <ol className="mt-10 border-t border-border">
            {approach.steps.map((step, index) => (
              <li
                key={step.title}
                className="grid gap-3 border-b border-border py-6 sm:grid-cols-[4rem_minmax(0,1fr)] sm:gap-6"
              >
                <span className="text-sm font-semibold tabular-nums text-brand-primary">
                  {faNumber(index + 1)}
                </span>
                <div>
                  <h3 className="text-base font-semibold text-text-primary">{step.title}</h3>
                  <p className="mt-2 max-w-2xl text-sm leading-7 text-text-secondary">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="value" className="section-padding border-b border-border">
        <div className="container-custom">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-wide text-brand-accent">ارزش</p>
            <h2 className="section-title mt-3">{value.heading}</h2>
            <p className="section-subtitle">{value.lead}</p>
          </div>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {value.outcomes.map((outcome) => (
              <div key={outcome.title} className="border-t border-brand-primary/20 pt-5">
                <h3 className="text-base font-semibold text-text-primary">{outcome.title}</h3>
                <p className="mt-2 text-sm leading-7 text-text-secondary">{outcome.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="section-padding">
        <div className="container-custom">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.6fr)] lg:gap-16">
            <div>
              <p className="text-xs font-semibold tracking-wide text-brand-accent">پرسش‌های متداول</p>
              <h2 className="section-title mt-3">{faq.heading}</h2>
            </div>
            <div className="border-t border-border">
              {faq.items.map((item) => (
                <details key={item.question} className="group border-b border-border">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-5 text-base font-semibold text-text-primary marker:hidden">
                    <span>{item.question}</span>
                    <span
                      aria-hidden="true"
                      className="mt-0.5 shrink-0 text-xl font-normal leading-none text-brand-primary transition-transform group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>
                  <p className="pb-5 text-sm leading-7 text-text-secondary">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c") }}
      />
    </>
  );
}
