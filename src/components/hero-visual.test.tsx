import { fireEvent, render } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { HeroVisual } from "@/components/hero-visual";

type MediaFlags = { finePointer: boolean; reducedMotion: boolean };

function mockMedia({ finePointer, reducedMotion }: MediaFlags) {
  window.matchMedia = vi.fn().mockImplementation((query: string) => ({
    matches: query.includes("prefers-reduced-motion")
      ? reducedMotion
      : query.includes("pointer: fine")
        ? finePointer
        : false,
    media: query,
    onchange: null,
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    addListener: vi.fn(),
    removeListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })) as unknown as typeof window.matchMedia;
}

function renderVisual() {
  const utils = render(<HeroVisual />);
  const visual = utils.container.querySelector<HTMLElement>(".hero-visual")!;
  const picture = utils.container.querySelector<HTMLElement>(".hero-picture")!;
  visual.getBoundingClientRect = () =>
    ({ left: 0, top: 0, width: 1000, height: 500 }) as DOMRect;
  return { ...utils, visual, picture };
}

describe("HeroVisual", () => {
  const originalMatchMedia = window.matchMedia;
  let frames: FrameRequestCallback[] = [];

  beforeEach(() => {
    frames = [];
    vi.stubGlobal("requestAnimationFrame", (cb: FrameRequestCallback) => {
      frames.push(cb);
      return frames.length;
    });
    vi.stubGlobal("cancelAnimationFrame", vi.fn());
  });

  afterEach(() => {
    window.matchMedia = originalMatchMedia;
    vi.unstubAllGlobals();
  });

  function flushFrames() {
    const pending = frames;
    frames = [];
    pending.forEach((cb) => cb(0));
  }

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
    expect(sources[0]?.getAttribute("srcset")).toContain("gettao-hero-office-v3-desktop.avif");
    expect(sources[0]?.getAttribute("srcset")).toContain("gettao-hero-office-v3-mobile.avif");
    expect(sources[1]?.getAttribute("srcset")).toContain("gettao-hero-office-v3-desktop.webp");
    expect(sources[1]?.getAttribute("srcset")).toContain("gettao-hero-office-v3-mobile.webp");

    const img = container.querySelector(".hero-image") as HTMLImageElement;
    expect(img.src).toContain("gettao-hero-office-v3-desktop.webp");
    expect(img.alt).toBe("");
    expect(img.width).toBe(1440);
    expect(img.height).toBe(1080);
  });

  it("translates the picture within the cap on a fine pointer and resets on leave", () => {
    mockMedia({ finePointer: true, reducedMotion: false });
    const { visual, picture } = renderVisual();

    fireEvent.pointerMove(visual, { clientX: 1000, clientY: 0 });
    expect(picture.style.transform).toBe("");
    flushFrames();
    expect(picture.style.transform).toBe("translate3d(8px, -5px, 0)");

    fireEvent.pointerLeave(visual);
    expect(picture.style.transform).toBe("");
  });

  it("throttles pointer updates to one animation frame", () => {
    mockMedia({ finePointer: true, reducedMotion: false });
    const { visual, picture } = renderVisual();

    fireEvent.pointerMove(visual, { clientX: 0, clientY: 0 });
    fireEvent.pointerMove(visual, { clientX: 250, clientY: 250 });
    fireEvent.pointerMove(visual, { clientX: 500, clientY: 500 });
    expect(frames).toHaveLength(1);

    flushFrames();
    // Uses the latest pointer position: x centre, y bottom edge.
    expect(picture.style.transform).toBe("translate3d(0px, 5px, 0)");
  });

  it("stays static for coarse pointers", () => {
    mockMedia({ finePointer: false, reducedMotion: false });
    const { visual, picture } = renderVisual();

    fireEvent.pointerMove(visual, { clientX: 1000, clientY: 0 });
    flushFrames();
    expect(frames).toHaveLength(0);
    expect(picture.style.transform).toBe("");
  });

  it("stays static when reduced motion is preferred", () => {
    mockMedia({ finePointer: true, reducedMotion: true });
    const { visual, picture } = renderVisual();

    fireEvent.pointerMove(visual, { clientX: 1000, clientY: 0 });
    flushFrames();
    expect(picture.style.transform).toBe("");
  });

  it("removes its listeners on unmount", () => {
    mockMedia({ finePointer: true, reducedMotion: false });
    const { visual, unmount } = renderVisual();
    const remove = vi.spyOn(visual, "removeEventListener");

    unmount();
    expect(remove).toHaveBeenCalledWith("pointermove", expect.any(Function));
    expect(remove).toHaveBeenCalledWith("pointerleave", expect.any(Function));
  });
});
