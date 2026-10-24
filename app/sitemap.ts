import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { insights } from "@/content/insights";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const pages = [
    { route: "", priority: 1, changeFrequency: "monthly" as const },
    { route: "/group", priority: 0.8, changeFrequency: "monthly" as const },
    { route: "/divisions", priority: 0.9, changeFrequency: "monthly" as const },
    { route: "/markets", priority: 0.9, changeFrequency: "monthly" as const },
    { route: "/insights", priority: 0.8, changeFrequency: "weekly" as const },
    { route: "/about", priority: 0.7, changeFrequency: "yearly" as const },
    { route: "/contact", priority: 0.7, changeFrequency: "yearly" as const },
  ];

  const articles = insights.map((insight) => ({
    url: `${site.url}/insights/${insight.slug}`,
    lastModified: now,
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  return [
    ...pages.map((page) => ({
      url: `${site.url}${page.route}`,
      lastModified: now,
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    })),
    ...articles,
  ];
}
