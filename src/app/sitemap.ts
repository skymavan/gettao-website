import type { MetadataRoute } from "next";

import { siteConfig } from "@/content/site";

export const dynamic = "force-static";

const routes: ReadonlyArray<{ path: string; priority: number }> = [
  { path: "", priority: 1 },
  { path: "platform/", priority: 0.9 },
  { path: "solutions/mortgage/", priority: 0.8 },
  { path: "solutions/banking/", priority: 0.8 },
  { path: "solutions/insurance/", priority: 0.8 },
  { path: "contact/", priority: 0.6 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map(({ path, priority }) => ({
    url: `${siteConfig.canonicalUrl}${path}`,
    lastModified,
    changeFrequency: "monthly",
    priority,
  }));
}
