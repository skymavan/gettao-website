import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";

import { ClosingCta } from "@/components/closing-cta";
import { HeroCopy } from "@/components/hero-copy";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/reveal";
import { PrincipleList } from "@/components/principle-list";
import { ProcessList } from "@/components/process-list";

// Matches `opacity:0` but not `opacity:0.5`.
const HIDDEN_OPACITY = /opacity:\s*0(?![.\d])/;

describe("static markup ships visible content", () => {
  it("Reveal renders without hidden opacity", () => {
    const html = renderToStaticMarkup(
      <Reveal delay={0.2} y={40}>
        <p>Visible copy</p>
      </Reveal>,
    );
    expect(html).toContain("Visible copy");
    expect(html).not.toMatch(HIDDEN_OPACITY);
  });

  it("StaggerGroup and StaggerItem render without hidden opacity", () => {
    const html = renderToStaticMarkup(
      <StaggerGroup delay={0.1}>
        {Array.from({ length: 12 }, (_, i) => (
          <StaggerItem key={i}>Item {i}</StaggerItem>
        ))}
      </StaggerGroup>,
    );
    expect(html).toContain("Item 11");
    expect(html).not.toMatch(HIDDEN_OPACITY);
  });

  it("section components render without hidden opacity or zero-scale rails", () => {
    const html = renderToStaticMarkup(
      <>
        <HeroCopy />
        <ProcessList />
        <PrincipleList items={[{ title: "A", description: "B" }]} />
        <ClosingCta />
      </>,
    );
    expect(html).not.toMatch(HIDDEN_OPACITY);
    expect(html).not.toMatch(/--rail-progress:\s*0(?![.\d])/);
    expect(html).toContain("Digital workers for <em>financial operations.</em>");
  });
});
