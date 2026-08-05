import { describe, expect, it } from "vitest";

import { internalHref, withBasePath } from "@/lib/base-path";

describe("withBasePath", () => {
  it("keeps root-hosted assets unchanged", () => {
    expect(withBasePath("/assets/hero.webp", "")).toBe("/assets/hero.webp");
  });

  it("prefixes project-site assets exactly once", () => {
    expect(withBasePath("/assets/hero.webp", "/gettao")).toBe(
      "/gettao/assets/hero.webp",
    );
    expect(withBasePath("/gettao/assets/hero.webp", "/gettao")).toBe(
      "/gettao/assets/hero.webp",
    );
  });
});

describe("internalHref", () => {
  it("returns non-slash hrefs unchanged", () => {
    expect(internalHref("#contact", "/gettao")).toBe("#contact");
    expect(internalHref("https://example.com/x", "/gettao")).toBe(
      "https://example.com/x",
    );
    expect(internalHref("mailto:hello@gettao.ai", "/gettao")).toBe(
      "mailto:hello@gettao.ai",
    );
  });

  it("keeps protocol-relative urls unchanged", () => {
    expect(internalHref("//fonts.example.com/x", "/gettao")).toBe(
      "//fonts.example.com/x",
    );
  });

  it("returns root-hosted internal hrefs unchanged", () => {
    expect(internalHref("/solutions/mortgage", "")).toBe("/solutions/mortgage");
  });

  it("prefixes internal hrefs exactly once under a base path", () => {
    expect(internalHref("/solutions/mortgage", "/gettao-website")).toBe(
      "/gettao-website/solutions/mortgage",
    );
    expect(internalHref("/gettao-website/solutions/mortgage", "/gettao-website")).toBe(
      "/gettao-website/solutions/mortgage",
    );
  });

  it("preserves query strings and hash fragments", () => {
    expect(internalHref("/contact?type=consultation&industry=banking", "/gettao")).toBe(
      "/gettao/contact?type=consultation&industry=banking",
    );
    expect(internalHref("/platform#capabilities", "/gettao")).toBe(
      "/gettao/platform#capabilities",
    );
  });
});
