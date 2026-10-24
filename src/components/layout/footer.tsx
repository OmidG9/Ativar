import Link from "next/link";

const services = [
  { href: "/services/consulting", label: "مشاوره و تحول دیجیتال" },
  { href: "/services/implementation", label: "طراحی و اجرای پروژه" },
  { href: "/solutions/enterprise-ai", label: "هوش مصنوعی سازمانی" },
  { href: "/solutions/fintech", label: "راهکارهای فین‌تک" },
];

const company = [
  { href: "/about/team", label: "DNA آتیوار" },
  { href: "/projects", label: "پروژه‌ها و تجربیات" },
  { href: "/insights", label: "دانش و تحلیل" },
  { href: "/contact", label: "تماس و همکاری" },
];

const legal = [
  { href: "/privacy", label: "سیاست حریم خصوصی" },
  { href: "/terms", label: "شرایط استفاده" },
  { href: "/disclaimer", label: "سلب مسئولیت" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-white">
      <div className="container-custom section-padding">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-primary to-brand-accent text-white font-bold">
                AT
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-lg font-bold text-text-primary">آتیوار</span>
                <span className="text-xs text-text-secondary">ATIVAR</span>
              </div>
            </div>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-text-secondary">
              آتیوار، مجموعه تخصصی مشاوره، طراحی و اجرای راهکارهای فین‌تک و هوش مصنوعی سازمانی است. از مشاوره و طراحی تا اجرا و بهره‌برداری، همراه سازمان‌ها در مسیر تصمیم‌گیری بهتر و عملکرد برتر.
            </p>
            <p className="mt-4 text-sm text-text-secondary">
              شعار: «هوش مصنوعی، در خدمت تصمیم بهتر و عملکرد برتر سازمان شما»
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:col-span-7 lg:grid-cols-3">
            <div>
              <h3 className="text-sm font-semibold text-text-primary">خدمات و راهکارها</h3>
              <ul className="mt-4 space-y-2">
                {services.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="text-sm text-text-secondary hover:text-brand-primary">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-text-primary">آتیوار</h3>
              <ul className="mt-4 space-y-2">
                {company.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="text-sm text-text-secondary hover:text-brand-primary">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-text-primary">اطلاعات حقوقی</h3>
              <ul className="mt-4 space-y-2">
                {legal.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="text-sm text-text-secondary hover:text-brand-primary">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 text-center sm:flex-row sm:text-right">
          <p className="text-sm text-text-secondary">© {new Date().getFullYear()} آتیوار. تمامی حقوق محفوظ است.</p>
          <Link href="/contact" className="btn btn-primary">
            درخواست جلسه مشاوره
          </Link>
        </div>
      </div>
    </footer>
  );
}
