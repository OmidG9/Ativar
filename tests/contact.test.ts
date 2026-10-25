import { describe, expect, it } from "vitest";
import {
  clean,
  escapeHtml,
  formatLead,
  formatTelegramLead,
  validateLead,
  type Lead,
} from "../src/lib/contact";

const validBody = {
  fullName: "سارا محمدی",
  organization: "سازمان نمونه",
  title: "مدیر فناوری",
  email: "sara@example.com",
  phone: "02100000000",
  requestType: "مشاوره راهبردی و تحول دیجیتال",
  projectScale: "هنوز مشخص نیست",
  timeline: "۱ تا ۳ ماه",
  message: "برای طراحی معماری راهکار هوش مصنوعی نیاز به مشاوره داریم.",
  privacy: true,
};

describe("validateLead", () => {
  it("accepts a complete, valid submission", () => {
    const { lead, errors } = validateLead(validBody);

    expect(errors).toEqual({});
    expect(lead.fullName).toBe("سارا محمدی");
    expect(lead.email).toBe("sara@example.com");
    expect(lead.privacy).toBe(true);
  });

  it("rejects an invalid email address", () => {
    const { errors } = validateLead({ ...validBody, email: "not-an-email" });

    expect(errors.email).toBeDefined();
  });

  it("requires a message of at least 20 characters", () => {
    const { errors } = validateLead({ ...validBody, message: "کوتاه" });

    expect(errors.message).toBeDefined();
  });

  it("requires privacy consent", () => {
    const { errors } = validateLead({ ...validBody, privacy: false });

    expect(errors.privacy).toBeDefined();
  });

  it("rejects options outside the allowed lists", () => {
    const { errors } = validateLead({
      ...validBody,
      requestType: "درخواست نامعتبر",
      projectScale: "عدد نامعتبر",
      timeline: "فردا",
    });

    expect(errors.requestType).toBeDefined();
    expect(errors.projectScale).toBeDefined();
    expect(errors.timeline).toBeDefined();
  });

  it("ignores non-string values instead of throwing", () => {
    const { lead, errors } = validateLead({
      ...validBody,
      fullName: 42,
      message: null,
    });

    expect(lead.fullName).toBe("");
    expect(lead.message).toBe("");
    expect(errors.fullName).toBeDefined();
    expect(errors.message).toBeDefined();
  });
});

describe("clean", () => {
  it("trims whitespace, removes control characters and enforces the limit", () => {
    expect(clean("  سلام\u0000 دنیا  ", 20)).toBe("سلام دنیا");
    expect(clean("abcdef", 3)).toBe("abc");
    expect(clean(undefined, 10)).toBe("");
  });
});

describe("escapeHtml", () => {
  it("escapes characters that could break Telegram HTML", () => {
    expect(escapeHtml('<a href="x">&</a>')).toBe('&lt;a href="x"&gt;&amp;&lt;/a&gt;');
  });
});

describe("formatTelegramLead", () => {
  const lead: Lead = {
    fullName: "سارا محمدی",
    organization: "سازمان <نمونه>",
    title: "",
    email: "sara@example.com",
    phone: "",
    requestType: "مشاوره راهبردی و تحول دیجیتال",
    projectScale: "هنوز مشخص نیست",
    timeline: "۱ تا ۳ ماه",
    message: "نیاز به مشاوره داریم.",
    privacy: true,
  };

  it("includes key fields and omits empty ones", () => {
    const message = formatTelegramLead(lead);

    expect(message).toContain("<b>نام:</b> سارا محمدی");
    expect(message).toContain("&lt;نمونه&gt;");
    expect(message).not.toContain("<b>سمت:</b>");
    expect(message).toContain("<b>شرح مسئله:</b>");
  });

  it("truncates very long descriptions", () => {
    const message = formatTelegramLead({ ...lead, message: "ا".repeat(5000) });

    expect(message.length).toBeLessThan(4096);
    expect(message).toContain("…");
  });
});

describe("formatLead", () => {
  it("renders a readable plain-text summary", () => {
    const text = formatLead({
      fullName: "سارا محمدی",
      organization: "",
      title: "",
      email: "sara@example.com",
      phone: "",
      requestType: "مشاوره راهبردی و تحول دیجیتال",
      projectScale: "",
      timeline: "",
      message: "نیاز به مشاوره داریم.",
      privacy: true,
    });

    expect(text).toContain("نام: سارا محمدی");
    expect(text).toContain("سازمان: —");
    expect(text).toContain("شرح مسئله:");
  });
});
