import { faqItems, pricingTiers, siteConfig } from "@/content/site";

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
        alternateName: siteConfig.nameLong,
        url: siteConfig.canonicalUrl,
        email: siteConfig.email,
        description:
          "GetTAO — Get The Autonomous Operations — is a platform that runs business operations autonomously, with human approval on every consequential action.",
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
        applicationSubCategory: "AI Operations Platform",
        operatingSystem: "Web",
        url: siteConfig.canonicalUrl,
        description:
          "GetTAO is an autonomous operations platform. Purpose-built agents run recurring operational work across your existing tools, with configurable approval gates, confidence thresholds, and a full audit trail on every action.",
        offers: pricingTiers
          .filter((tier) => tier.price !== "Custom")
          .map((tier) => ({
            "@type": "Offer",
            price: tier.price.replace(/[^0-9.]/g, ""),
            priceCurrency: "USD",
            description: tier.description,
          })),
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
