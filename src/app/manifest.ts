import type { MetadataRoute } from "next";

import { siteConfig } from "@/content/site";
import { withBasePath } from "@/lib/base-path";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Gettao — Enterprise AI for Financial Services",
    short_name: siteConfig.name,
    description:
      "Accelerate lending, modernize banking, and transform insurance operations with secure, enterprise-grade AI solutions.",
    start_url: withBasePath("/"),
    display: "standalone",
    background_color: "#FFFFFF",
    theme_color: "#01629E",
    icons: [
      { src: withBasePath("/icon.png"), sizes: "512x512", type: "image/png" },
      { src: withBasePath("/apple-icon.png"), sizes: "180x180", type: "image/png" },
    ],
  };
}
