import { MetadataRoute } from "next";
import { articles } from "@/content/articles";
import { caseStudies } from "@/content/case-studies";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://ativar.ir";
  const routes = [
    "",
    "/services/consulting",
    "/services/implementation",
    "/solutions/enterprise-ai",
    "/solutions/fintech",
    "/products/ai-workspace",
    "/projects",
    "/about/team",
    "/insights",
    "/contact",
    "/privacy",
    "/terms",
    "/disclaimer",
  ];

  const pageEntries: MetadataRoute.Sitemap = routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));

  const articleEntries: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${baseUrl}/insights/${article.slug}`,
    lastModified: new Date(article.publishedAt),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const caseStudyEntries: MetadataRoute.Sitemap = caseStudies.map((study) => ({
    url: `${baseUrl}/projects/${study.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...pageEntries, ...articleEntries, ...caseStudyEntries];
}
