import type { Metadata, Viewport } from "next";
import { Fraunces, Hanken_Grotesk } from "next/font/google";
import { MotionConfig } from "motion/react";

import { siteConfig } from "@/content/site";

import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-display",
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

const hankenGrotesk = Hanken_Grotesk({
  variable: "--font-body",
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.canonicalUrl),
  title: "GetTAO — Autonomous Operations Platform with Human Oversight",
  description:
    "GetTAO runs your business operations autonomously. Purpose-built agents handle the repetitive work across your existing tools, with human approval on every consequential action and a full audit trail.",
  alternates: { canonical: siteConfig.canonicalUrl },
  applicationName: siteConfig.name,
  keywords: [
    "autonomous operations",
    "AI operations platform",
    "autonomous AI agents",
    "workflow automation",
    "human-in-the-loop AI",
    "agentic operations",
    "GetTAO",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.canonicalUrl,
    siteName: siteConfig.name,
    title: "GetTAO — Get The Autonomous Operations",
    description:
      "An autonomous operations platform. Agents run the work; a human approves what matters. Observable, reversible, and connected to your stack.",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "GetTAO — Autonomous operations with a human on the throttle",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GetTAO — Autonomous Operations Platform",
    description:
      "Autonomous agents run your operations. Human approval on every consequential action. Connected to the tools you already use.",
    images: ["/opengraph-image.png"],
  },
};

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#0A1210",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${fraunces.variable} ${hankenGrotesk.variable} dark`}
    >
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        <MotionConfig reducedMotion="user">{children}</MotionConfig>
      </body>
    </html>
  );
}
