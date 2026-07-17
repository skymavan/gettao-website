import { describe, expect, it } from "vitest";

import {
  faqItems,
  navigation,
  siteConfig,
} from "@/content/site";

describe("site content", () => {
  it("uses the approved Gettao identity", () => {
    expect(siteConfig).toMatchObject({
      name: "Gettao",
      canonicalUrl: "https://gettao.ai/",
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

  it("provides extractable FAQ answers", () => {
    expect(faqItems).toHaveLength(5);
    expect(faqItems.every((item) => item.answer.length >= 30)).toBe(true);
  });
});
