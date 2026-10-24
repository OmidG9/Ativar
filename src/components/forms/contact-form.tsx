"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type FormState = {
  fullName: string;
  organization: string;
  title: string;
  email: string;
  phone: string;
  requestType: string;
  projectScale: string;
  timeline: string;
  message: string;
  privacy: boolean;
  website: string;
};

const initialState: FormState = {
  fullName: "",
  organization: "",
  title: "",
  email: "",
  phone: "",
  requestType: "درخواست جلسه مشاوره",
  projectScale: "هنوز مشخص نیست",
  timeline: "هنوز مشخص نیست",
  message: "",
  privacy: false,
  website: "",
};

const inputClass =
  "w-full rounded-xl border border-border bg-white px-4 py-2.5 text-sm text-text-primary placeholder:text-text-secondary focus:border-brand-accent/60 focus:outline-none focus:ring-2 focus:ring-brand-accent/20";

const fieldOrder = [
  "fullName",
  "email",
  "message",
  "privacy",
] as const;

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="text-xs text-red-600">
      {message}
    </p>
  );
}

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [error, setError] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Deep links from product pages can preselect the relevant request type.
  useEffect(() => {
    const requestedType = new URLSearchParams(window.location.search).get("type");
    if (requestedType === "ai-workspace") {
      setForm((previous) => ({ ...previous, requestType: "درخواست ارزیابی هوش مصنوعی" }));
    }
  }, []);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value, type } = event.target;

    if (type === "checkbox") {
      const checked = (event.target as HTMLInputElement).checked;
      setForm((previous) => ({ ...previous, [name]: checked }));
    } else {
      setForm((previous) => ({ ...previous, [name]: value }));
    }

    setErrors((previous) => {
      if (!previous[name]) return previous;
      const next = { ...previous };
      delete next[name];
      return next;
    });
  };

  const validate = (): Record<string, string> => {
    const nextErrors: Record<string, string> = {};

    if (form.fullName.trim().length < 3) {
      nextErrors.fullName = "نام و نام خانوادگی را کامل وارد کنید.";
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email.trim())) {
      nextErrors.email = "ایمیل کاری معتبر وارد کنید.";
    }
    if (form.message.trim().length < 20) {
      nextErrors.message = "شرح مسئله باید حداقل ۲۰ کاراکتر باشد.";
    }
    if (!form.privacy) {
      nextErrors.privacy = "موافقت با سیاست حریم خصوصی الزامی است.";
    }

    return nextErrors;
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError("");

    const nextErrors = validate();
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setStatus("error");
      setError("لطفاً فیلدهای مشخص‌شده را اصلاح کنید.");
      const firstInvalid = fieldOrder.find((field) => nextErrors[field]);
      if (firstInvalid) document.getElementById(firstInvalid)?.focus();
      return;
    }

    setErrors({});
    setStatus("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        const data = (await response.json().catch(() => null)) as
          | { error?: string; fields?: Record<string, string> }
          | null;

        if (data?.fields) setErrors(data.fields);
        throw new Error(data?.error || "خطا در ارسال درخواست");
      }

      setStatus("success");
      setForm(initialState);
    } catch (submissionError) {
      setStatus("error");
      setError(
        submissionError instanceof Error && submissionError.message
          ? submissionError.message
          : "متأسفانه در ارسال درخواست خطایی رخ داد. لطفاً دوباره تلاش کنید.",
      );
    }
  };

  if (status === "success") {
    return (
      <div role="status" className="rounded-2xl border border-border bg-white p-8 text-center">
        <h3 className="text-lg font-semibold text-text-primary">درخواست شما ثبت شد</h3>
        <p className="mt-2 text-sm leading-7 text-text-secondary">
          ممنون از تماس شما. همکاران آتیوار در اولین فرصت با شما ارتباط خواهند گرفت.
        </p>
        <button
          type="button"
          className="btn btn-outline mt-6"
          onClick={() => {
            setStatus("idle");
            setError("");
          }}
        >
          ثبت درخواست جدید
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="grid gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="fullName" className="text-sm font-medium text-text-primary">
            نام و نام خانوادگی *
          </label>
          <input
            id="fullName"
            name="fullName"
            value={form.fullName}
            onChange={handleChange}
            autoComplete="name"
            required
            aria-invalid={Boolean(errors.fullName)}
            aria-describedby={errors.fullName ? "fullName-error" : undefined}
            className={inputClass}
          />
          <FieldError id="fullName-error" message={errors.fullName} />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="organization" className="text-sm font-medium text-text-primary">
            نام سازمان
          </label>
          <input
            id="organization"
            name="organization"
            value={form.organization}
            onChange={handleChange}
            autoComplete="organization"
            className={inputClass}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="title" className="text-sm font-medium text-text-primary">
            سمت سازمانی
          </label>
          <input
            id="title"
            name="title"
            value={form.title}
            onChange={handleChange}
            autoComplete="organization-title"
            className={inputClass}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm font-medium text-text-primary">
            ایمیل کاری *
          </label>
          <input
            id="email"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            autoComplete="email"
            inputMode="email"
            dir="ltr"
            required
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={`${inputClass} text-left`}
          />
          <FieldError id="email-error" message={errors.email} />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="phone" className="text-sm font-medium text-text-primary">
            شماره تماس
          </label>
          <input
            id="phone"
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            autoComplete="tel"
            inputMode="tel"
            dir="ltr"
            className={`${inputClass} text-left`}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="requestType" className="text-sm font-medium text-text-primary">
            نوع درخواست
          </label>
          <select
            id="requestType"
            name="requestType"
            value={form.requestType}
            onChange={handleChange}
            className={inputClass}
          >
            <option>درخواست جلسه مشاوره</option>
            <option>درخواست ارزیابی هوش مصنوعی</option>
            <option>درخواست طراحی معماری</option>
            <option>درخواست اجرای پروژه</option>
            <option>درخواست راهکار فین‌تک</option>
            <option>درخواست همکاری راهبردی</option>
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="projectScale" className="text-sm font-medium text-text-primary">
            مقیاس تقریبی پروژه
          </label>
          <select
            id="projectScale"
            name="projectScale"
            value={form.projectScale}
            onChange={handleChange}
            className={inputClass}
          >
            <option>هنوز مشخص نیست</option>
            <option>کمتر از ۵۰۰ میلیون تومان</option>
            <option>۵۰۰ میلیون تا ۲ میلیارد تومان</option>
            <option>بیش از ۲ میلیارد تومان</option>
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="timeline" className="text-sm font-medium text-text-primary">
            زمان‌بندی مورد انتظار
          </label>
          <select
            id="timeline"
            name="timeline"
            value={form.timeline}
            onChange={handleChange}
            className={inputClass}
          >
            <option>هنوز مشخص نیست</option>
            <option>فوری (کمتر از یک ماه)</option>
            <option>۱ تا ۳ ماه</option>
            <option>۳ تا ۶ ماه</option>
            <option>بیش از ۶ ماه</option>
          </select>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-sm font-medium text-text-primary">
          شرح مسئله *
        </label>
        <textarea
          id="message"
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={5}
          maxLength={4000}
          required
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : "message-hint"}
          className={inputClass}
          placeholder="مسئله سازمان، هدف مورد انتظار و محدودیت‌های کلی را شرح دهید."
        />
        {errors.message ? (
          <FieldError id="message-error" message={errors.message} />
        ) : (
          <p id="message-hint" className="text-xs text-text-secondary">
            حداقل ۲۰ کاراکتر. اطلاعات محرمانه یا داده شخصی حساس ارسال نکنید.
          </p>
        )}
      </div>

      <div className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
        <label htmlFor="website">وب‌سایت</label>
        <input
          id="website"
          name="website"
          value={form.website}
          onChange={handleChange}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="flex items-start gap-2.5 text-sm leading-6 text-text-secondary">
          <input
            id="privacy"
            type="checkbox"
            name="privacy"
            checked={form.privacy}
            onChange={handleChange}
            aria-invalid={Boolean(errors.privacy)}
            aria-describedby={errors.privacy ? "privacy-error" : undefined}
            className="mt-1 h-4 w-4 accent-[#176B9B]"
          />
          <span>
            با{" "}
            <Link href="/privacy" className="text-brand-primary underline underline-offset-4">
              سیاست حریم خصوصی
            </Link>{" "}
            آتیوار موافقم.
          </span>
        </label>
        <FieldError id="privacy-error" message={errors.privacy} />
      </div>

      {error && (
        <p role="alert" className="text-sm text-red-600">
          {error}
        </p>
      )}

      <div className="flex flex-wrap items-center gap-4">
        <button type="submit" className="btn btn-primary" disabled={status === "submitting"}>
          {status === "submitting" ? "در حال ارسال…" : "ارسال درخواست"}
        </button>
        <p className="text-xs text-text-secondary">
          پاسخ‌گویی در ساعات کاری، حداکثر تا یک روز کاری.
        </p>
      </div>
    </form>
  );
}
