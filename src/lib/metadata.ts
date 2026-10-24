import type { Metadata } from "next";
import { siteConfig } from "./site";

type PageMetadataInput = {
  title: string;
  description: string;
  path: `/${string}` | "/";
};

/**
 * Builds page-level metadata with a correct, page-specific canonical URL.
 * The canonical must never be defined in the root layout, otherwise every
 * route inherits the home page URL.
 */
export function createMetadata({ title, description, path }: PageMetadataInput): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      type: "website",
      locale: "fa_IR",
      url: path,
      siteName: siteConfig.name,
      title,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
