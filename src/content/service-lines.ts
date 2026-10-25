/**
 * The canonical definition of ATIVAR's product and service names.
 *
 * These rows are the single source of truth for menus, introduction pages,
 * commercial proposals and sales documents. The same wording must be reused
 * everywhere so that similarly named offerings are not confused with each
 * other (content brief, section 12).
 */
export type ServiceLine = {
  name: string;
  definition: string;
  role: string;
};

export const serviceLines: ServiceLine[] = [
  {
    name: "ATIVAR Enterprise AI",
    definition: "مجموعه خدمات هوش مصنوعی سازمانی",
    role: "خانواده خدمات و راهکارها",
  },
  {
    name: "ATIVAR Data Intelligence",
    definition: "تحلیل و سامان‌دهی داده",
    role: "سطح اول خدمات",
  },
  {
    name: "ATIVAR Knowledge Intelligence",
    definition: "مدیریت دانش و جست‌وجوی هوشمند",
    role: "سطح دوم خدمات",
  },
  {
    name: "ATIVAR Enterprise LLM",
    definition: "معماری و قابلیت‌های مبتنی بر مدل‌های زبانی سازمانی",
    role: "سطح سوم خدمات",
  },
  {
    name: "ATIVAR AI Workspace",
    definition: "محیط کاربردی استفاده از هوش مصنوعی",
    role: "محصول یا محیط بهره‌برداری، متناسب با دامنه پیاده‌سازی",
  },
  {
    name: "ATIVAR AI Business Platform",
    definition: "ظرفیت توسعه و ارائه خدمات هوشمند به دیگران",
    role: "مسیر توسعه کسب‌وکار و درآمد",
  },
];
