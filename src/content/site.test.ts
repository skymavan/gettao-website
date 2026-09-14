import { describe, expect, it } from "vitest";

import {
  faqItems,
  footerLinks,
  navigation,
  siteConfig,
} from "@/content/site";

describe("site content", () => {
  it("uses the approved Gettao identity", () => {
    expect(siteConfig).toMatchObject({
      name: "Gettao",
      canonicalUrl: "https://www.gettao.ai/",
      email: "hello@gettao.ai",
    });
    expect(siteConfig.socialLinks).toEqual([
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/company/gettao",
        icon: "linkedin",
      },
      {
        label: "X",
        href: "https://x.com/gettao",
        icon: "x",
      },
      {
        label: "GitHub",
        href: "https://github.com/gettao",
        icon: "github",
      },
    ]);
  });

  it("keeps navigation anchors unique", () => {
    expect(new Set(navigation.map((item) => item.href)).size).toBe(
      navigation.length,
    );
  });

  it("uses real, trailing-slash internal destinations for nav and footer links", () => {
    const hrefs = [
      ...navigation.map((item) => item.href),
      ...Object.values(footerLinks).flat().map((link) => link.href),
    ];
    for (const href of hrefs) {
      expect(href).not.toBe("#");
      expect(href.startsWith("/")).toBe(true);
      expect(href.split("#")[0]).toMatch(/\/$/);
    }
  });

  it("provides extractable FAQ answers", () => {
    expect(faqItems).toHaveLength(5);
    expect(faqItems.every((item) => item.answer.length >= 30)).toBe(true);
  });
});
