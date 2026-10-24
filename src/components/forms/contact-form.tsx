"use client";

import { useState } from "react";

type FormState = {
  fullName: string;
  organization: string;
  title: string;
  email: string;
  phone: string;
  requestType: string;
  message: string;
  privacy: boolean;
};

const initialState: FormState = {
  fullName: "",
  organization: "",
  title: "",
  email: "",
  phone: "",
  requestType: "درخواست جلسه مشاوره",
  message: "",
  privacy: false,
};

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [error, setError] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setForm((prev) => ({ ...prev, [name]: checked }));
      return;
    }
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!form.fullName.trim() || !form.email.trim() || !form.message.trim() || !form.privacy) {
      setError("لطفاً فیلدهای ضروری را تکمیل و با سیاست حریم خصوصی موافقت کنید.");
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        throw new Error("خطا در ارسال درخواست");
      }

      setStatus("success");
      setForm(initialState);
    } catch (err) {
      setStatus("error");
      setError("متأسفانه در ارسال درخواست خطایی رخ داد. لطفاً دوباره تلاش کنید.");
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-border bg-white p-6 text-center">
        <h3 className="text-lg font-semibold text-text-primary">درخواست شما با موفقیت ثبت شد</h3>
        <p className="mt-2 text-sm text-text-secondary">
          ممنون از تماس شما. همکاران آتیوار در اسرع وقت با شما ارتباط خواهند گرفت.
        </p>
        <button className="btn btn-outline mt-6" onClick={() => setStatus("idle")}>
          ثبت درخواست جدید
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-text-primary">نام و نام خانوادگی *</label>
          <input
            name="fullName"
            value={form.fullName}
            onChange={handleChange}
            className="rounded-xl border border-border px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-accent/30"
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-text-primary">نام سازمان</label>
          <input
            name="organization"
            value={form.organization}
            onChange={handleChange}
            className="rounded-xl border border-border px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-accent/30"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-text-primary">سمت سازمانی</label>
          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            className="rounded-xl border border-border px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-accent/30"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-text-primary">ایمیل کاری *</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="rounded-xl border border-border px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-accent/30"
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-text-primary">شماره تماس</label>
          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            className="rounded-xl border border-border px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-accent/30"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-text-primary">نوع درخواست</label>
          <select
            name="requestType"
            value={form.requestType}
            onChange={handleChange}
            className="rounded-xl border border-border px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-accent/30"
          >
            <option>درخواست جلسه مشاوره</option>
            <option>درخواست ارزیابی هوش مصنوعی</option>
            <option>درخواست طراحی معماری</option>
            <option>درخواست اجرای پروژه</option>
            <option>درخواست راهکار فین‌تک</option>
            <option>درخواست همکاری راهبردی</option>
          </select>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-text-primary">شرح مسئله *</label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={5}
          className="rounded-xl border border-border px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-accent/30"
          placeholder="لطفاً مسئله سازمان، هدف مورد انتظار و محدودیت‌های کلی را شرح دهید."
          required
        />
      </div>
      <label className="flex items-start gap-2 text-sm text-text-secondary">
        <input type="checkbox" name="privacy" checked={form.privacy} onChange={handleChange} className="mt-1" />
        <span>
          با <a href="/privacy" className="text-brand-primary">سیاست حریم خصوصی</a> آتیوار موافقم.
        </span>
      </label>
      {error && <p className="text-sm text-red-600">{error}</p>}
      <button type="submit" className="btn btn-primary w-fit" disabled={status === "submitting"}>
        {status === "submitting" ? "در حال ارسال..." : "ارسال درخواست"}
      </button>
    </form>
  );
}
