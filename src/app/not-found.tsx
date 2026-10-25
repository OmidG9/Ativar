import Link from "next/link";
import { CTA_LABELS } from "@/lib/cta";

export default function NotFound() {
  return (
    <section className="section-padding">
      <div className="container-custom flex flex-col items-center text-center">
        <p className="text-sm text-text-secondary">خطای ۴۰۴</p>
        <h1 className="mt-4 text-3xl font-bold text-text-primary sm:text-4xl">صفحه مورد نظر یافت نشد</h1>
        <p className="mt-4 max-w-md text-lg text-text-secondary">
          صفحه‌ای که به دنبال آن هستید وجود ندارد یا جابجا شده است.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/" className="btn btn-primary">
            بازگشت به صفحه اصلی
          </Link>
          <Link href="/contact" className="btn btn-outline">
            {CTA_LABELS.consult}
          </Link>
        </div>
      </div>
    </section>
  );
}
