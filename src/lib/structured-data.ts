import { faqItems, siteConfig } from "@/content/site";

export function createStructuredData() {
  const organizationId = `${siteConfig.canonicalUrl}#organization`;
  const websiteId = `${siteConfig.canonicalUrl}#website`;
  const applicationId = `${siteConfig.canonicalUrl}#software`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": organizationId,
        name: siteConfig.name,
        url: siteConfig.canonicalUrl,
        email: siteConfig.email,
        description:
          "Gettao is an enterprise AI platform helping mortgage lenders, banks, and insurance providers automate operations, improve decision-making, and accelerate digital transformation through secure, scalable artificial intelligence.",
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: siteConfig.canonicalUrl,
        name: siteConfig.name,
        publisher: { "@id": organizationId },
        inLanguage: "en",
      },
      {
        "@type": "SoftwareApplication",
        "@id": applicationId,
        name: siteConfig.name,
        applicationCategory: "BusinessApplication",
        applicationSubCategory: "AI Platform for Financial Services",
        operatingSystem: "Web",
        url: siteConfig.canonicalUrl,
        description:
          "Gettao brings together intelligent automation, AI agents, document intelligence, and predictive analytics into one secure platform designed specifically for financial services.",
        publisher: { "@id": organizationId },
      },
      {
        "@type": "FAQPage",
        "@id": `${siteConfig.canonicalUrl}#faq`,
        mainEntity: faqItems.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
    ],
  } as const;
}
