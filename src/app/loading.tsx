export default function Loading() {
  return (
    <section className="section-padding" aria-busy="true" aria-live="polite">
      <div className="container-custom">
        <div className="h-3 w-24 animate-pulse rounded bg-border" />
        <div className="mt-6 h-8 w-2/3 max-w-xl animate-pulse rounded bg-border" />
        <div className="mt-4 h-4 w-full max-w-2xl animate-pulse rounded bg-border/70" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[0, 1, 2].map((item) => (
            <div key={item} className="h-36 animate-pulse rounded-2xl border border-border bg-brand-light/50" />
          ))}
        </div>
      </div>
      <span className="sr-only">در حال بارگذاری صفحه…</span>
    </section>
  );
}
