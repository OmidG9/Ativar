"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "@/components/brand/logo";
import { CTA_LABELS } from "@/lib/cta";
import { cn } from "@/lib/utils";

type NavItem = {
  href: string;
  label: string;
  external?: boolean;
};

const navItems: NavItem[] = [
  { href: "/services/consulting", label: "مشاوره" },
  { href: "/solutions/enterprise-ai", label: "هوش مصنوعی سازمانی" },
  { href: "/products/ai-workspace", label: "AI Workspace" },
  { href: "/solutions/fintech", label: "فین‌تک" },
  { href: "/projects", label: "پروژه‌ها" },
  { href: "https://hub.ativar.ir", label: "هاب فلزات گران‌بها", external: true },
  { href: "/about/team", label: "درباره آتیوار" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-white/90 backdrop-blur">
      <div className="container-custom flex h-16 items-center justify-between gap-4">
        <Link
          href="/"
          className="rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent/50"
          aria-label="آتیوار ATIVAR، صفحه اصلی"
        >
          <Logo />
        </Link>

        <nav aria-label="ناوبری اصلی" className="hidden items-center gap-5 lg:flex">
          {navItems.map((item) => {
            const isExternal = item.external;
            const active = !isExternal && pathname === item.href;
            if (isExternal) {
              return (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md py-2 text-[13px] font-medium text-text-secondary transition-colors hover:text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent/50"
                >
                  {item.label}
                </a>
              );
            }
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "rounded-md py-2 text-[13px] font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent/50",
                  active ? "text-brand-primary" : "text-text-secondary hover:text-text-primary",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link href="/contact" className="btn btn-primary whitespace-nowrap px-4 py-2.5">
            {CTA_LABELS.consult}
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent/50 lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "بستن منو" : "باز کردن منو"}
        >
          <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            {open ? (
              <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            ) : (
              <path d="M3 6h14M3 10h14M3 14h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div id="mobile-menu" className="border-t border-border bg-white lg:hidden">
          <nav aria-label="ناوبری موبایل" className="container-custom flex flex-col py-3">
            {navItems.map((item) => {
              const isExternal = item.external;
              if (isExternal) {
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg px-2 py-2.5 text-sm text-text-primary hover:bg-brand-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent/50"
                  >
                    {item.label}
                  </a>
                );
              }
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={pathname === item.href ? "page" : undefined}
                  className="rounded-lg px-2 py-2.5 text-sm text-text-primary hover:bg-brand-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent/50"
                >
                  {item.label}
                </Link>
              );
            })}
            <Link href="/contact" className="btn btn-primary mt-3 w-full">
              {CTA_LABELS.consult}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
