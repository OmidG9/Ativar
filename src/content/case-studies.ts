export type CaseStudySection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type CaseStudy = {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  facts: Array<{ label: string; value: string }>;
  sections: CaseStudySection[];
  publicationNote: string;
};

/**
 * Only facts already published on the site are included here. Technical
 * details, roles and measured results stay out until the client approves
 * their publication; nothing is estimated or invented.
 */
export const caseStudies: CaseStudy[] = [
  {
    slug: "precious-metals-platform",
    title: "پروژه مرتبط با فروش و مدیریت فرایندهای فلزات گران‌بها",
    eyebrow: "نقطه آغاز تخصص فین‌تک آتیوار",
    summary:
      "این پروژه به‌عنوان آغاز مسیر تکامل آتیوار معرفی می‌شود؛ تجربه‌ای عملی در ساماندهی فرایندهای فروش و مدیریت در حوزه فلزات گران‌بها.",
    facts: [
      { label: "حوزه", value: "فلزات گران‌بها" },
      { label: "نوع همکاری", value: "طراحی سامانه و بهبود فرایند" },
      { label: "جایگاه در مسیر آتیوار", value: "نقطه آغاز تخصص فین‌تک" },
      { label: "وضعیت انتشار جزئیات", value: "در انتظار تأیید کارفرما" },
    ],
    sections: [
      {
        heading: "زمینه",
        paragraphs: [
          "آتیوار مسیر تخصصی خود در حوزه فین‌تک را از پروژه‌ای مرتبط با فروش و مدیریت فرایندهای فلزات گران‌بها آغاز کرد. این تجربه نقطه شروع شکل‌گیری رویکرد فعلی مجموعه در طراحی راهکارهای مالی دیجیتال است.",
        ],
      },
      {
        heading: "مسئله",
        paragraphs: [
          "نیاز به ساماندهی فرایندهای فروش و مدیریت مرتبط با فلزات گران‌بها، نقطه شروع این همکاری بود. تمرکز اولیه بر روشن کردن جریان‌های عملیاتی و ایجاد ساختاری منظم برای مدیریت اطلاعات و فرایندها قرار گرفت.",
        ],
      },
      {
        heading: "رویکرد",
        paragraphs: [
          "رویکرد این پروژه، طراحی یک سامانه تخصصی همراه با بهبود جریان‌های عملیاتی بود؛ به‌گونه‌ای که فناوری در خدمت فرایند قرار بگیرد و نه صرفاً جایگزین ظاهری آن شود.",
        ],
      },
      {
        heading: "مسیر توسعه",
        paragraphs: [
          "پس از تثبیت پایه‌های سامانه، مسیر توسعه به سمت افزودن قابلیت‌های هوشمند و گسترش به راهکارهای سازمانی ادامه یافت. همین مسیر، مبنای شکل‌گیری حوزه‌های فعلی فعالیت آتیوار شد.",
        ],
      },
      {
        heading: "وضعیت مستندسازی",
        paragraphs: [
          "جزئیات فنی، نقش دقیق اجراکنندگان و شاخص‌های عملکردی تنها در صورت وجود مستندات قابل اتکا و کسب مجوز انتشار در این صفحه درج می‌شوند. تا آن زمان، این صفحه صرفاً چارچوب مطالعه موردی و اطلاعات تأییدشده را ارائه می‌کند.",
        ],
        bullets: [
          "هیچ آمار یا نتیجه‌ای بدون مستندات منتشر نمی‌شود.",
          "نام کارفرما بدون اجازه صریح منتشر نمی‌شود.",
          "معماری سطح بالا پس از تأیید، در همین بخش اضافه خواهد شد.",
        ],
      },
    ],
    publicationNote:
      "این مطالعه موردی در حال تکمیل است. اطلاعات تکمیلی پس از دریافت مستندات و تأیید کارفرما منتشر می‌شود.",
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug);
}
