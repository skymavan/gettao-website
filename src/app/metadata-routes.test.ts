import { describe, expect, it } from "vitest";

import robots, { dynamic as robotsDynamic } from "@/app/robots";
import sitemap, { dynamic as sitemapDynamic } from "@/app/sitemap";

describe("metadata routes", () => {
  it("declares metadata handlers static for export builds", () => {
    expect(robotsDynamic).toBe("force-static");
    expect(sitemapDynamic).toBe("force-static");
  });

  it("publishes every exported page in the sitemap with canonical www URLs", () => {
    expect(sitemap().map((entry) => entry.url)).toEqual([
      "https://www.gettao.ai/",
      "https://www.gettao.ai/platform/",
      "https://www.gettao.ai/solutions/mortgage/",
      "https://www.gettao.ai/solutions/banking/",
      "https://www.gettao.ai/solutions/insurance/",
      "https://www.gettao.ai/contact/",
    ]);
    expect(sitemap()[0]).toEqual(
      expect.objectContaining({ lastModified: expect.any(Date), priority: 1 }),
    );
  });

  it("allows search and AI citation crawlers", () => {
    const result = robots();
    const rules = Array.isArray(result.rules) ? result.rules : [result.rules];
    const agents = rules.flatMap((rule) => rule.userAgent);

    expect(agents).toEqual(
      expect.arrayContaining([
        "*",
        "GPTBot",
        "ChatGPT-User",
        "PerplexityBot",
        "ClaudeBot",
        "anthropic-ai",
        "Google-Extended",
        "Bingbot",
      ]),
    );
    expect(result.sitemap).toBe("https://www.gettao.ai/sitemap.xml");
    expect(result.host).toBe("www.gettao.ai");
  });
});
