import type { Metadata, Viewport } from "next";
import { DM_Sans } from "next/font/google";
import { MotionConfig } from "motion/react";

import { siteConfig } from "@/content/site";
import { withBasePath } from "@/lib/base-path";

import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-body",
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.canonicalUrl),
  title: "Gettao — Enterprise AI for Financial Services",
  description:
    "Accelerate lending, modernize banking, and transform insurance operations with secure, enterprise-grade AI solutions designed to automate complex workflows, improve decision-making, and deliver measurable business outcomes.",
  alternates: { canonical: siteConfig.canonicalUrl },
  applicationName: siteConfig.name,
  keywords: [
    "enterprise AI",
    "financial services AI",
    "AI for mortgage lending",
    "AI for banking",
    "AI for insurance",
    "document intelligence",
    "intelligent automation",
    "Gettao",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.canonicalUrl,
    siteName: siteConfig.name,
    title: "Gettao — Enterprise AI for Financial Services",
    description:
      "Accelerate lending, modernize banking, and transform insurance operations with secure, enterprise-grade AI solutions.",
    images: [
      {
        url: withBasePath("/opengraph-image.png"),
        width: 1200,
        height: 630,
        alt: "Gettao — Enterprise AI for Financial Services",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gettao — Enterprise AI for Financial Services",
    description:
      "AI that powers the future of financial services. Document intelligence, AI agents, workflow automation, and predictive analytics for mortgage, banking, and insurance.",
    images: [withBasePath("/opengraph-image.png")],
  },
};

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#01629E",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${dmSans.variable}`}
    >
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        <MotionConfig reducedMotion="user">{children}</MotionConfig>
      </body>
    </html>
  );
}
