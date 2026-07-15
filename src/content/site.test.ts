import { describe, expect, it } from "vitest";

import {
  capabilities,
  capabilityIds,
  faqItems,
  navigation,
  siteConfig,
} from "@/content/site";

describe("site content", () => {
  it("uses the approved GetTAO identity", () => {
    expect(siteConfig).toMatchObject({
      name: "GetTAO",
      canonicalUrl: "https://gettao.io/",
      email: "hello@gettao.io",
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

  it("keeps navigation and capability anchors unique", () => {
    expect(new Set(navigation.map((item) => item.href)).size).toBe(
      navigation.length,
    );
    expect(new Set(capabilities.map((capability) => capability.id)).size).toBe(
      capabilities.length,
    );
    expect(capabilities.map((capability) => capability.id)).toEqual(
      capabilityIds,
    );
  });

  it("provides extractable FAQ answers", () => {
    expect(faqItems).toHaveLength(7);
    expect(faqItems.every((item) => item.answer.length >= 90)).toBe(true);
  });
});
