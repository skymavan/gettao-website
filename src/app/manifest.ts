import type { MetadataRoute } from "next";

import { siteConfig } from "@/content/site";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "GetTAO — Autonomous Operations Platform",
    short_name: siteConfig.name,
    description:
      "GetTAO runs business operations autonomously, with human approval on every consequential action and a full audit trail.",
    start_url: "/",
    display: "standalone",
    background_color: "#0A1210",
    theme_color: "#0A1210",
    icons: [
      { src: "/icon.png", sizes: "512x512", type: "image/png" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  };
}
