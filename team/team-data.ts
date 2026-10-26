export interface TeamSocials {
  linkedin?: string;
  github?: string;
  website?: string;
  email?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  roles: string[];
  bio: string;
  skills: string[];
  /** Path under /public, e.g. "/team/amirali-riazi.jpg". Falls back to a monogram placeholder when omitted. */
  image?: string;
  socials: TeamSocials;
}

export const teamMembers: TeamMember[] = [
  {
    id: "amirali-riazi",
    name: "امیرعلی ریاضی",
    roles: [
      "مشاور راهبردی فناوری",
      "معمار تحول دیجیتال",
      "راهبر پروژه‌های پیچیده سازمانی",
    ],
    bio: "به سازمان‌ها کمک می‌کنم تا پروژه‌های پیچیده فناوری را از مرحله ایده و ابهام، به تصمیم، اجرا و نتیجه تبدیل کنند.",
    skills: [
      "Technology Strategy",
      "Digital Transformation",
      "Enterprise Architecture",
      "IT Governance",
      "Leadership",
      "Project Management",
    ],
    image: "/team/amirali-riazi.webp",
    socials: {},
  },
  {
    id: "omid-ghanbari",
    name: "امید قنبری",
    roles: ["توسعه‌دهنده راهکارهای هوش مصنوعی", "سازنده محصولات دیجیتال"],
    bio: "به کسب‌وکارها کمک می‌کنم تا با بهره‌گیری از هوش مصنوعی، طراحی وب مدرن و توسعه نرم‌افزار، ایده‌های خود را به محصولات دیجیتال سریع، مقیاس‌پذیر و ارزش‌آفرین تبدیل کنند.",
    skills: [
      "Artificial Intelligence",
      "System Design",
      "UI Engineering",
      "Automation",
    ],
    image: "/team/omid-ghanbari.webp",
    socials: {},
  },
  {
    id: "mohammadmehdi-pazouki",
    name: "محمدمهدی پازوکی",
    roles: [
      "رهبر فنی و توسعه‌دهنده بک‌اند",
      "معمار نرم‌افزار و راهکار",
      "متخصص سامانه‌های مقیاس‌پذیر و امن",
    ],
    bio: "به سازمان‌ها کمک می‌کنم تا سامانه‌های نرم‌افزاری امن، مقیاس‌پذیر و قابل اعتماد را از مرحله طراحی و معماری تا توسعه و اجرا ایجاد و هدایت کنند.",
    skills: [
      "Backend Engineering",
      "Software Architecture",
      "Scalable Systems",
      "Security Engineering",
      "Technical Leadership",
    ],
    image: "/team/mohammadmehdi-pazouki.webp",
    socials: {},
  },
  {
    id: "hamid-alizadeh",
    name: "حمید علیزاده",
    roles: ["مشاور حقوقی", "قراردادهای فناوری و کسب‌وکارهای دیجیتال"],
    bio: "با تمرکز بر حقوق قراردادها و نیازهای حقوقی کسب‌وکارهای نوآور، در زمینه تنظیم، بررسی و تحلیل قراردادهای تجاری و فناوری‌محور فعالیت می‌کنم. حوزه‌های مورد توجه من شامل قراردادهای فین‌تک، تجارت الکترونیک، توسعه نرم‌افزار، خدمات دیجیتال و همکاری‌های تجاری است.\n\nهدف از ارائه مشاوره حقوقی، کمک به کسب‌وکارها برای شفاف‌سازی تعهدات قراردادی، پیش‌بینی ریسک‌های حقوقی، صیانت از منافع طرفین و ایجاد چارچوبی مطمئن برای همکاری‌های تجاری و توسعه پایدار کسب‌وکار است.",
    skills: [
      "Contract Law",
      "FinTech",
      "E-Commerce Law",
      "Commercial Contracts",
      "Legal Risk",
    ],
    image: "/team/hamid-alizadeh.webp",
    socials: {},
  },
];
