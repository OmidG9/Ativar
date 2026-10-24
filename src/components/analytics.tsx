import Script from "next/script";

/**
 * Privacy-friendly analytics wiring. Nothing loads until both variables are
 * configured, so the site ships with zero third-party requests by default.
 *
 * Works with Plausible, Umami and similar script-based providers.
 */
export function Analytics() {
  const src = process.env.NEXT_PUBLIC_ANALYTICS_SRC;
  const domain = process.env.NEXT_PUBLIC_ANALYTICS_DOMAIN;

  if (!src || !domain) return null;

  return <Script src={src} data-domain={domain} strategy="afterInteractive" defer />;
}
