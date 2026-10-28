import Link from "next/link";
import { TeamSlider } from "@/components/sections/team-slider";
import { Credentials } from "@/components/sections/credentials";
import { teamMembers } from "@/content/team";
import { CTA_LABELS } from "@/lib/cta";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "DNA آتیوار",
  description:
    "ترکیب تجربه، تحلیل و توان اجرایی برای حل مسائل پیچیده سازمانی؛ معرفی اعضای تیم آتیوار و حوزه‌های تخصصی هر عضو.",
  path: "/about/team",
});

export default function TeamPage() {
  return (
    <>
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold tracking-wide text-brand-accent">DNA آتیوار</p>
            <h1 className="section-title mt-3">
              ترکیب تجربه، تحلیل و توان اجرایی برای حل مسائل پیچیده سازمانی
            </h1>
            <p className="section-subtitle">
              پروژه‌های فناوری سازمانی به ترکیبی از شناخت کسب‌وکار، نگاه راهبردی، معماری فنی، توان
              اجرا و توجه به الزامات حقوقی و عملیاتی نیاز دارند.
            </p>
            <p className="mt-4 text-base leading-8 text-text-secondary">
              DNA آتیوار بر همکاری تخصص‌های مکمل شکل گرفته است؛ با هدف تبدیل نیازهای سازمانی به
              راهکارهایی که از نظر کسب‌وکار قابل دفاع و از نظر فنی قابل اجرا باشند.
            </p>
          </div>
        </div>
      </section>

      <Credentials />

      <TeamSlider members={teamMembers} />

      <section className="section-padding">
        <div className="container-custom">
          <div className="card p-8 lg:p-10">
            <div className="grid gap-6 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="text-2xl font-bold text-text-primary">همراهی از مشاوره تا اجرا</h2>
                <p className="mt-4 text-lg leading-7 text-text-secondary">
                  رویکرد آتیوار، همراهی مستقیم با تیم کسب‌وکار و فناوری اطلاعات سازمان برای رسیدن به
                  راهکاری عملی، قابل اجرا و قابل اندازه‌گیری است.
                </p>
              </div>
              <div className="flex flex-col items-start gap-3 lg:items-end">
                <Link href="/contact" className="btn btn-primary">
                  {CTA_LABELS.consult}
                </Link>
                <Link
                  href="/projects"
                  className="text-sm font-semibold text-brand-primary underline-offset-4 hover:underline"
                >
                  {CTA_LABELS.caseStudies}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
