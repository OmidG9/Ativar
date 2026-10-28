"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

const certifications = [
  {
    id: 1,
    src: "/certifications/photo_2026-10-28_10-01-17.webp",
    alt: "تاییدیه و مجوز آتیوار",
    title: "تاییدیه و مجوز",
  },
  {
    id: 2,
    src: "/certifications/1299_Page_1.webp",
    alt: "تاییدیه و مجوز آتیوار",
    title: "تاییدیه و مجوز",
  },
  {
    id: 3,
    src: "/certifications/17ba305a-28a0-4167-b93a-7f5af313d195_Page_1.webp",
    alt: "تاییدیه و مجوز آتیوار",
    title: "تاییدیه و مجوز",
  },
  {
    id: 4,
    src: "/certifications/479799fd-f6c0-40ec-bc0f-d8e5da4cfcfa_Page_1.webp",
    alt: "تاییدیه و مجوز آتیوار",
    title: "تاییدیه و مجوز",
  },
  {
    id: 5,
    src: "/certifications/5d56e648-dccf-46fa-b142-484aa7b3f393_Page_1.webp",
    alt: "تاییدیه و مجوز آتیوار",
    title: "تاییدیه و مجوز",
  },
  {
    id: 6,
    src: "/certifications/f6ecbb08-6a3e-4f5d-ba47-e7d86012da68_Page_1.webp",
    alt: "تاییدیه و مجوز آتیوار",
    title: "تاییدیه و مجوز",
  },
];

export function Credentials() {
  const [active, setActive] = useState<(typeof certifications)[number] | null>(
    null,
  );

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="mx-auto mb-12 max-w-3xl text-center lg:mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-accent">
            اعتبار، شفافیت و تطابق
          </p>
          <h2 className="section-title mt-3">تاییدیه‌ها، مجوزها و گواهی‌نامه‌ها</h2>
          <p className="section-subtitle mt-4">
            آتیوار فعالیت خود را بر پایه شفافیت، رعایت الزامات قانونی و استانداردهای
            حرفه‌ای پیش می‌برد. برای مشاهده بزرگ‌تر هر گواهی، روی کارت کلیک کنید.
          </p>
        </div>

        <div className="relative">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-40 top-1/2 h-[26rem] w-[26rem] -translate-y-1/2 rounded-full opacity-40 blur-3xl"
            style={{
              background:
                "radial-gradient(circle, rgba(23, 107, 155, 0.16), transparent 70%)",
            }}
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-40 top-1/2 h-[26rem] w-[26rem] -translate-y-1/2 rounded-full opacity-40 blur-3xl"
            style={{
              background:
                "radial-gradient(circle, rgba(18, 175, 193, 0.18), transparent 70%)",
            }}
          />

          <div className="relative z-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
            {certifications.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setActive(item)}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-white text-right shadow-[0_30px_70px_-40px_rgba(23,107,155,0.5)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_40px_90px_-40px_rgba(23,107,155,0.6)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent/40 focus-visible:ring-offset-4 focus-visible:ring-offset-white"
              >
                <figure className="flex h-full flex-col">
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/5" />
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      sizes="(min-width: 1280px) 28vw, (min-width: 1024px) 33vw, (min-width: 640px) 48vw, 90vw"
                      className="object-contain p-3 transition-transform duration-700 group-hover:scale-[1.01]"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-white/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-medium text-text-secondary opacity-0 shadow-subtle transition-opacity duration-500 group-hover:opacity-100">
                      مشاهده بزرگ‌تر
                    </span>
                  </div>
                  <figcaption className="flex items-center justify-center border-t border-border/80 px-3 py-2 text-center text-xs font-medium text-text-primary">
                    {item.title}
                  </figcaption>
                </figure>
              </button>
            ))}
          </div>
        </div>
      </div>

      {active ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-6 sm:px-6"
          role="dialog"
          aria-modal="true"
          aria-label={active.title}
        >
          <button
            type="button"
            aria-label="بستن نمایش بزرگ"
            className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
            onClick={() => setActive(null)}
          />
          <div className="relative z-10 flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl bg-white shadow-[0_60px_140px_-60px_rgba(15,23,42,0.9)]">
            <div className="flex items-center justify-between border-b border-border px-5 py-3 sm:px-6">
              <div>
                <p className="text-sm font-semibold text-text-primary">
                  {active.title}
                </p>
                <p className="text-xs text-text-secondary">{active.alt}</p>
              </div>
              <button
                type="button"
                onClick={() => setActive(null)}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-text-secondary transition-colors hover:border-brand-primary/40 hover:text-brand-primary"
                aria-label="بستن"
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>
            </div>
            <div className="relative flex-1 overflow-auto p-4 sm:p-6">
              <div className="relative mx-auto aspect-[4/3] w-full max-w-[900px]">
                <Image
                  src={active.src}
                  alt={active.alt}
                  fill
                  sizes="(min-width: 1024px) 900px, 95vw"
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
