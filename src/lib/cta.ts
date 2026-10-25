/**
 * Approved call-to-action labels.
 *
 * Keeping every CTA in one place prevents the site from drifting into several
 * slightly different phrasings for the same action (see the content brief,
 * section 14). Pages should import these labels instead of hard-coding text.
 */
export const CTA_LABELS = {
  consult: "درخواست جلسه مشاوره",
  aiAssessment: "درخواست ارزیابی هوش مصنوعی سازمان",
  viewSolutions: "مشاهده راهکارها",
  fintech: "بررسی خدمات فین‌تک",
  workspace: "بررسی ATIVAR AI Workspace",
  technicalProposal: "درخواست پیشنهاد فنی",
  caseStudies: "مشاهده مطالعات موردی",
  aiEconomics: "بررسی فرصت‌های اقتصادی هوش مصنوعی",
  talk: "گفت‌وگو درباره نیاز سازمان",
  submit: "ارسال درخواست همکاری",
} as const;

export type CtaKey = keyof typeof CTA_LABELS;
