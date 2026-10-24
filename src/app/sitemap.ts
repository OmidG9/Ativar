import { MetadataRoute } from "next";

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

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
