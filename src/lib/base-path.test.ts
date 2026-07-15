import { describe, expect, it } from "vitest";

import { withBasePath } from "@/lib/base-path";

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
