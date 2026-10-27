import Link from "next/link";
import Image from "next/image";
import { Logo } from "@/components/brand/logo";
import { CTA_LABELS } from "@/lib/cta";

const groups = [
  {
    title: "خدمات و راهکارها",
    links: [
      { href: "/services/consulting", label: "مشاوره و تحول دیجیتال" },
      { href: "/services/implementation", label: "طراحی و اجرای پروژه" },
      { href: "/solutions/enterprise-ai", label: "هوش مصنوعی سازمانی" },
      { href: "/solutions/fintech", label: "راهکارهای فین‌تک" },
      { href: "/products/ai-workspace", label: "ATIVAR AI Workspace" },
    ],
  },
  {
    title: "آتیوار",
    links: [
      { href: "/about/team", label: "DNA آتیوار" },
      { href: "/projects", label: "پروژه‌ها و تجربه‌ها" },
      { href: "/insights", label: "بینش‌ها و تحلیل" },
      { href: "/contact", label: "تماس و همکاری" },
    ],
  },
  {
    title: "حقوقی",
    links: [
      { href: "/privacy", label: "حریم خصوصی" },
      { href: "/terms", label: "شرایط استفاده" },
      { href: "/disclaimer", label: "سلب مسئولیت" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border">
      {/* Background image */}
      <Image
        src="/img/PastelBlueFloralCornerBorder.webp"
        alt=""
        aria-hidden
        fill
        sizes="100vw"
        priority={false}
        className="pointer-events-none select-none object-fill opacity-20"
      />
      <div className="relative container-custom py-14">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link
              href="/"
              className="inline-flex rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent/50"
              aria-label="آتیوار ATIVAR، صفحه اصلی"
            >
              <Logo />
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-7 text-text-secondary">
              آتیوار، مجموعه تخصصی مشاوره، طراحی و اجرای راهکارهای فین‌تک و هوش
              مصنوعی سازمانی؛ همراه سازمان‌ها از تعریف مسئله تا استقرار و
              بهره‌برداری.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-3 lg:col-span-8">
            {groups.map((group) => (
              <div key={group.title}>
                <h2 className="text-sm font-semibold text-text-primary">
                  {group.title}
                </h2>
                <ul className="mt-4 space-y-2.5">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="rounded text-sm text-text-secondary transition-colors hover:text-brand-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent/50"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-center sm:flex-row sm:text-right">
          <div className="flex flex-col items-center gap-1 sm:items-start">
            <p className="text-xs text-text-secondary">
              ©{" "}
              {new Date()
                .getFullYear()
                .toLocaleString("fa-IR", { useGrouping: false })}{" "}
              آتیوار. تمامی حقوق محفوظ است.
            </p>
            <p className="text-xs text-text-secondary/80">
              این سایت توسط هوش مصنوعی آتیوار ساخته شده است
            </p>
          </div>
          <Link
            href="/contact"
            className="rounded text-xs font-medium text-brand-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent/50"
          >
            {CTA_LABELS.consult} ←
          </Link>
        </div>
      </div>
    </footer>
  );
}
