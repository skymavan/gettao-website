import type { Metadata } from "next";

import { siteConfig } from "@/content/site";

import { ContactPageContent } from "./content";

export const metadata: Metadata = {
  title: "Contact Gettao | Book a Demo or Talk to an AI Expert",
  description:
    "Book a demo or request a consultation with Gettao to explore enterprise AI for mortgage, banking, and insurance operations.",
  alternates: { canonical: `${siteConfig.canonicalUrl}contact/` },
  openGraph: {
    title: "Contact Gettao",
    description: "Book a demo or talk to an AI expert about enterprise AI for financial services.",
    url: `${siteConfig.canonicalUrl}contact/`,
  },
};

export default function ContactPage() {
  return <ContactPageContent />;
}
