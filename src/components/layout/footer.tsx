import Link from "next/link";
import { Logo } from "@/components/brand/logo";

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
      { href: "/insights", label: "دانش و تحلیل" },
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
    <footer className="border-t border-border">
      <div className="container-custom py-14">
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
              آتیوار، مجموعه تخصصی مشاوره، طراحی و اجرای راهکارهای فین‌تک و هوش مصنوعی سازمانی؛ همراه سازمان‌ها از تعریف مسئله تا استقرار و بهره‌برداری.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-3 lg:col-span-8">
            {groups.map((group) => (
              <div key={group.title}>
                <h2 className="text-sm font-semibold text-text-primary">{group.title}</h2>
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
          <p className="text-xs text-text-secondary">
            © {new Date().getFullYear().toLocaleString("fa-IR", { useGrouping: false })} آتیوار. تمامی حقوق محفوظ است.
          </p>
          <Link
            href="/contact"
            className="rounded text-xs font-medium text-brand-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent/50"
          >
            درخواست جلسه مشاوره ←
          </Link>
        </div>
      </div>
    </footer>
  );
}
