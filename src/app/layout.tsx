import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

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
  metadataBase: new URL("https://ativar.ir"),
  title: {
    default: "آتیوار | مشاوره فین‌تک، هوش مصنوعی سازمانی و راهکارهای هوشمند کسب‌وکار",
    template: "%s | آتیوار",
  },
  description:
    "آتیوار مجموعه تخصصی مشاوره، طراحی و اجرای راهکارهای فین‌تک، معماری مالی دیجیتال و هوش مصنوعی سازمانی. از مشاوره و طراحی تا اجرا و بهره‌برداری.",
  keywords: [
    "آتیوار",
    "ATIVAR",
    "مشاوره فین‌تک",
    "هوش مصنوعی سازمانی",
    "راهکارهای مالی دیجیتال",
    "تحول دیجیتال سازمانی",
    "محیط اختصاصی هوش مصنوعی",
    "معماری راهکارهای سازمانی",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "fa_IR",
    url: "https://ativar.ir",
    siteName: "آتیوار",
    title: "آتیوار | مشاوره فین‌تک، هوش مصنوعی سازمانی و راهکارهای هوشمند کسب‌وکار",
    description:
      "شریک سازمان‌ها در طراحی، استقرار و توسعه زیرساخت‌های مالی دیجیتال و راهکارهای هوش مصنوعی سازمانی.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" className={vazirmatn.variable}>
      <body className="font-sans">
        <Header />
        <main className="min-h-[calc(100vh-320px)]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
