"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("[app-error]", error.digest ?? "unknown");
  }, [error]);

  return (
    <section className="section-padding">
      <div className="container-custom flex flex-col items-center text-center">
        <p className="text-xs font-medium text-text-secondary">خطای غیرمنتظره</p>
        <h1 className="mt-4 text-2xl font-bold text-text-primary sm:text-3xl">
          در پردازش این صفحه خطایی رخ داد
        </h1>
        <p className="mt-4 max-w-md text-base leading-8 text-text-secondary">
          لطفاً دوباره تلاش کنید. اگر مشکل ادامه داشت، از طریق صفحه تماس با ما اطلاع دهید.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button type="button" onClick={reset} className="btn btn-primary">
            تلاش دوباره
          </button>
          <Link href="/" className="btn btn-outline">
            بازگشت به صفحه اصلی
          </Link>
        </div>
      </div>
    </section>
  );
}
