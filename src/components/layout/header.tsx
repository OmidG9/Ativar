"use client";

import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/services/consulting", label: "خدمات مشاوره" },
  { href: "/solutions/enterprise-ai", label: "هوش مصنوعی سازمانی" },
  { href: "/products/ai-workspace", label: "محیط اختصاصی هوش مصنوعی" },
  { href: "/solutions/fintech", label: "فین‌تک" },
  { href: "/projects", label: "پروژه‌ها و تجربه‌ها" },
  { href: "/about/team", label: "درباره آتیوار" },
  { href: "/contact", label: "تماس با ما" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-border">
      <div className="container-custom flex items-center justify-between gap-4 py-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-primary to-brand-accent text-white font-bold">
            AT
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-lg font-bold text-text-primary">آتیوار</span>
            <span className="text-xs text-text-secondary">ATIVAR</span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-text-primary hover:text-brand-primary transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Link href="/contact" className="btn btn-primary">
            درخواست جلسه مشاوره
          </Link>
        </div>

        <button
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border"
          onClick={() => setOpen((v) => !v)}
          aria-label="منوی ناوبری"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-white">
          <nav className="container-custom flex flex-col py-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="py-2 text-sm text-text-primary"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link href="/contact" className="btn btn-primary mt-3 w-full" onClick={() => setOpen(false)}>
              درخواست جلسه مشاوره
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
