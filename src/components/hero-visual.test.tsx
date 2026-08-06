import { fireEvent, render } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { HeroVisual } from "@/components/hero-visual";

describe("HeroVisual", () => {
  it("renders the hero picture element with responsive sources", () => {
    const { container } = render(<HeroVisual />);

    expect(container.querySelector(".hero-visual")).not.toBeNull();
    expect(container.querySelector(".hero-picture")).not.toBeNull();
    expect(container.querySelector(".hero-image")).not.toBeNull();
    expect(container.querySelector("video")).toBeNull();

    const visual = container.querySelector(".hero-visual");
    expect(visual?.getAttribute("aria-hidden")).toBe("true");

    const sources = Array.from(container.querySelectorAll(".hero-picture source"));
    expect(sources).toHaveLength(2);
    expect(sources[0]?.getAttribute("srcset")).toContain(
      "gettao-hero-workflow-v2-desktop.avif",
    );
    expect(sources[0]?.getAttribute("srcset")).toContain(
      "gettao-hero-workflow-v2-mobile.avif",
    );
    expect(sources[1]?.getAttribute("srcset")).toContain(
      "gettao-hero-workflow-v2-desktop.webp",
    );
    expect(sources[1]?.getAttribute("srcset")).toContain(
      "gettao-hero-workflow-v2-mobile.webp",
    );

    const img = container.querySelector(".hero-image") as HTMLImageElement;
    expect(img.src).toContain("gettao-hero-workflow-v2-desktop.webp");
    expect(img.alt).toBe("");
    expect(img.width).toBe(1440);
    expect(img.height).toBe(1080);
  });

  it("caps pointer depth and resets it when the pointer leaves", () => {
    const { container } = render(<HeroVisual />);
    const visual = container.querySelector<HTMLElement>(".hero-visual");
    expect(visual).not.toBeNull();
    if (!visual) return;

    visual.getBoundingClientRect = () =>
      ({ left: 0, top: 0, width: 1000, height: 500 }) as DOMRect;

    fireEvent.pointerMove(visual, { clientX: 1000, clientY: 0 });
    expect(visual.style.getPropertyValue("--hero-shift-x")).toBe("8px");
    expect(visual.style.getPropertyValue("--hero-shift-y")).toBe("-5px");

    fireEvent.pointerLeave(visual);
    expect(visual.style.getPropertyValue("--hero-shift-x")).toBe("0px");
    expect(visual.style.getPropertyValue("--hero-shift-y")).toBe("0px");
  });
});
