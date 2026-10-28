"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const certifications = [
  {
    id: 1,
    src: "/certifications/photo_2026-10-28_10-01-17.webp",
    alt: "تاییدیه و مجوز آتیوار",
    title: "تاییدیه و مجوز رسمی",
  },
  {
    id: 2,
    src: "/certifications/1299_Page_1.webp",
    alt: "تاییدیه و مجوز آتیوار",
    title: "تاییدیه و مجوز رسمی",
  },
  {
    id: 3,
    src: "/certifications/17ba305a-28a0-4167-b93a-7f5af313d195_Page_1.webp",
    alt: "تاییدیه و مجوز آتیوار",
    title: "تاییدیه و مجوز رسمی",
  },
  {
    id: 4,
    src: "/certifications/479799fd-f6c0-40ec-bc0f-d8e5da4cfcfa_Page_1.webp",
    alt: "تاییدیه و مجوز آتیوار",
    title: "تاییدیه و مجوز رسمی",
  },
  {
    id: 5,
    src: "/certifications/5d56e648-dccf-46fa-b142-484aa7b3f393_Page_1.webp",
    alt: "تاییدیه و مجوز آتیوار",
    title: "تاییدیه و مجوز رسمی",
  },
  {
    id: 6,
    src: "/certifications/f6ecbb08-6a3e-4f5d-ba47-e7d86012da68_Page_1.webp",
    alt: "تاییدیه و مجوز آتیوار",
    title: "تاییدیه و مجوز رسمی",
  },
];

function MagnifyIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
      <path d="M11 8v6M8 11h6" />
    </svg>
  );
}

function ChevronIcon({ direction }: { direction: "prev" | "next" }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {direction === "next" ? <path d="m9 18 6-6-6-6" /> : <path d="m15 18-6-6 6-6" />}
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}

export function Credentials() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const active = activeIndex !== null ? certifications[activeIndex] : null;

  const goPrev = useCallback(() => {
    if (activeIndex === null) return;
    setActiveIndex((prev) =>
      prev === null ? null : (prev - 1 + certifications.length) % certifications.length,
    );
  }, [activeIndex]);

  const goNext = useCallback(() => {
    if (activeIndex === null) return;
    setActiveIndex((prev) =>
      prev === null ? null : (prev + 1) % certifications.length,
    );
  }, [activeIndex]);

  const close = useCallback(() => setActiveIndex(null), []);

  useEffect(() => {
    if (activeIndex === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowRight") goPrev();
      if (event.key === "ArrowLeft") goNext();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIndex, close, goNext, goPrev]);

  return (
    <section className="section-padding relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[32rem] bg-gradient-to-b from-brand-light/80 via-white to-white"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-48 top-24 h-[28rem] w-[28rem] rounded-full opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(23, 107, 155, 0.14), transparent 70%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-48 bottom-10 h-[26rem] w-[26rem] rounded-full opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(18, 175, 193, 0.16), transparent 70%)",
        }}
      />

      <div className="container-custom relative z-10">
        <div className="mx-auto mb-12 max-w-3xl text-center lg:mb-16">
          <div className="mb-4 flex items-center justify-center gap-2">
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-brand-accent/60" />
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-brand-accent">
              اعتبار، شفافیت و تطابق
            </p>
            <span className="h-px w-8 bg-gradient-to-l from-transparent to-brand-accent/60" />
          </div>
          <h2 className="section-title">تاییدیه‌ها، مجوزها و گواهی‌نامه‌ها</h2>
          <p className="section-subtitle mt-4">
            آتیوار فعالیت خود را بر پایه شفافیت، رعایت الزامات قانونی و استانداردهای
            حرفه‌ای پیش می‌برد. با کلیک بر روی هر تصویر می‌توانید نسخه بزرگ‌تر و با
            کیفیت‌تر آن را مشاهده کنید.
          </p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {certifications.map((item, index) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveIndex(index)}
                className="group relative overflow-hidden rounded-3xl border border-border/80 bg-white text-right shadow-[0_40px_90px_-60px_rgba(23,107,155,0.7)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_60px_120px_-60px_rgba(23,107,155,0.8)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent/40 focus-visible:ring-offset-4 focus-visible:ring-offset-white"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(248,251,253,1),rgba(255,255,255,1))]" />
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(min-width: 1280px) 30vw, (min-width: 1024px) 45vw, (min-width: 640px) 48vw, 92vw"
                    className="object-contain p-4 transition-transform duration-700 ease-out group-hover:scale-[1.015] sm:p-5"
                  />
                  <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-slate-950/10 to-transparent" />
                    <div className="absolute right-4 top-4 flex items-center gap-2 rounded-full bg-white/95 px-3 py-1.5 text-xs font-medium text-text-primary shadow-[0_10px_40px_-20px_rgba(15,23,42,0.9)] backdrop-blur-sm">
                      <MagnifyIcon />
                      <span>مشاهده بزرگ‌تر</span>
                    </div>
                  </div>
                  <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/60" />
                </div>
                <div className="flex items-center justify-between gap-3 border-t border-border/70 px-5 py-3 sm:px-6">
                  <div>
                    <p className="text-sm font-semibold text-text-primary">
                      {item.title}
                    </p>
                    <p className="mt-1 text-xs text-text-secondary">
                      {item.alt}
                    </p>
                  </div>
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-border/80 text-text-secondary transition-all duration-500 group-hover:-translate-x-1 group-hover:border-brand-primary/40 group-hover:text-brand-primary">
                    <ChevronIcon direction="prev" />
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {active && activeIndex !== null ? (
        <div
          className="fixed inset-0 z-[110] flex items-center justify-center px-3 py-4 sm:px-6"
          role="dialog"
          aria-modal="true"
          aria-label={active.title}
        >
          <button
            type="button"
            aria-label="بستن لایت‌باکس"
            className="absolute inset-0 bg-slate-950/90 backdrop-blur-md"
            onClick={close}
          />

          <button
            type="button"
            onClick={goPrev}
            aria-label="تصویر قبلی"
            className="absolute right-2 top-1/2 z-20 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white shadow-[0_30px_80px_-40px_rgba(255,255,255,0.8)] transition-all duration-300 hover:bg-white/20 hover:shadow-[0_40px_100px_-40px_rgba(255,255,255,0.9)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 sm:right-6"
          >
            <ChevronIcon direction="prev" />
          </button>

          <button
            type="button"
            onClick={goNext}
            aria-label="تصویر بعدی"
            className="absolute left-2 top-1/2 z-20 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white shadow-[0_30px_80px_-40px_rgba(255,255,255,0.8)] transition-all duration-300 hover:bg-white/20 hover:shadow-[0_40px_100px_-40px_rgba(255,255,255,0.9)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 sm:left-6"
          >
            <ChevronIcon direction="next" />
          </button>

          <div className="relative z-10 flex max-h-[94vh] w-full max-w-6xl flex-col overflow-hidden rounded-[1.75rem] border border-white/10 bg-white shadow-[0_80px_160px_-80px_rgba(15,23,42,0.95)]">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border/70 px-4 py-2.5 sm:px-6">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-brand-primary to-brand-accent text-white shadow-subtle">
                  <MagnifyIcon />
                </div>
                <div>
                  <p className="text-sm font-semibold text-text-primary">
                    {active.title}
                  </p>
                  <p className="text-xs text-text-secondary">
                    {activeIndex + 1} / {certifications.length} • {active.alt}
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={close}
                className="flex items-center gap-2 rounded-full border border-border/80 px-3 py-1.5 text-xs font-medium text-text-secondary transition-colors hover:border-brand-primary/40 hover:text-brand-primary"
              >
                <CloseIcon />
                بستن
              </button>
            </div>
            <div className="relative flex-1 overflow-auto bg-[radial-gradient(circle_at_top,rgba(248,251,253,1),rgba(255,255,255,1))]">
              <div className="relative mx-auto aspect-[16/10] w-full max-w-5xl p-4 sm:p-8 lg:p-10">
                <Image
                  src={active.src}
                  alt={active.alt}
                  fill
                  sizes="(min-width: 1280px) 1280px, 95vw"
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
