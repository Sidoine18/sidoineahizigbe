import type { MetadataRoute } from "next";
import { navRoutes, projectRoutes } from "@/data/nav";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://sidoineahizigbe.online";
  const now = new Date();

  const staticRoutes = navRoutes.map((route) => ({
    url: `${base}${route.path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: route.path === "/" ? 1 : 0.7,
  }));

  const projectDetailRoutes = projectRoutes.map((route) => ({
    url: `${base}${route.path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...projectDetailRoutes];
}
