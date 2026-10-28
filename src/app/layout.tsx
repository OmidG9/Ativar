import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Analytics } from "@/components/analytics";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { siteConfig } from "@/lib/site";

const vazirmatn = localFont({
  src: [
    {
      path: "../../public/fonts/Vazirmatn-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Vazirmatn-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/Vazirmatn-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/Vazirmatn-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-vazirmatn",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  applicationName: siteConfig.name,
  title: {
    default: "آتیوار | مشاوره فین‌تک، هوش مصنوعی سازمانی و تحول دیجیتال",
    template: "%s | آتیوار",
  },
  description: siteConfig.description,
  keywords: [
    "آتیوار",
    "ATIVAR",
    "مشاوره فین‌تک",
    "هوش مصنوعی سازمانی",
    "راهکارهای مالی دیجیتال",
    "تحول دیجیتال سازمانی",
    "تحلیل داده سازمانی",
    "مدیریت دانش سازمانی",
    "محیط اختصاصی هوش مصنوعی",
    "معماری راهکارهای سازمانی",
  ],
  openGraph: {
    type: "website",
    locale: "fa_IR",
    siteName: siteConfig.name,
    title: "آتیوار | مشاوره فین‌تک، هوش مصنوعی سازمانی و تحول دیجیتال",
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/brand/favicon-32.png", type: "image/png", sizes: "32x32" },
      { url: "/brand/favicon-16.png", type: "image/png", sizes: "16x16" },
      { url: "/brand/favicon-48.png", type: "image/png", sizes: "48x48" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      {
        url: "/brand/apple-touch-icon.png",
        type: "image/png",
        sizes: "180x180",
      },
    ],
  },
  ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? {
        verification: {
          google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
        },
      }
    : {}),
};

export const viewport: Viewport = {
  themeColor: "#176B9B",
  colorScheme: "light",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteConfig.url}/#organization`,
      name: siteConfig.name,
      alternateName: siteConfig.nameEn,
      url: siteConfig.url,
      logo: `${siteConfig.url}/brand/ativar-logo.png`,
      description: siteConfig.description,
    },
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      url: siteConfig.url,
      name: siteConfig.name,
      inLanguage: "fa-IR",
      publisher: { "@id": `${siteConfig.url}/#organization` },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" className={vazirmatn.variable} suppressHydrationWarning>
      <body className="font-sans">
        <a href="#main-content" className="skip-link">
          پرش به محتوای اصلی
        </a>
        <Header />
        <main
          id="main-content"
          tabIndex={-1}
          className="min-h-[60vh] outline-none"
        >
          {children}
        </main>
        <Footer />
        <Analytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
      </body>
    </html>
  );
}
