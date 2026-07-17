import type { MetadataRoute } from "next";

import { siteConfig } from "@/content/site";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Gettao — Enterprise AI for Financial Services",
    short_name: siteConfig.name,
    description:
      "Accelerate lending, modernize banking, and transform insurance operations with secure, enterprise-grade AI solutions.",
    start_url: "/",
    display: "standalone",
    background_color: "#FFFFFF",
    theme_color: "#01629E",
    icons: [
      { src: "/icon.png", sizes: "512x512", type: "image/png" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  };
}
