import { fireEvent, render } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { HeroVisual } from "@/components/hero-visual";

describe("HeroVisual", () => {
  it("renders the telemetry orbit and grid without remote video or images", () => {
    const { container } = render(<HeroVisual />);

    expect(container.querySelector(".telemetry-grid")).not.toBeNull();
    expect(container.querySelector(".telemetry-orbit")).not.toBeNull();
    expect(container.querySelector("video")).toBeNull();
    expect(container.querySelector("img")).toBeNull();
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
