import { act, render } from "@testing-library/react";
import { useRef } from "react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { useScrollReveal } from "@/lib/use-scroll-reveal";

function Probe() {
  const ref = useRef<HTMLDivElement>(null);
  const phase = useScrollReveal(ref);
  return <div ref={ref} data-testid="probe" data-phase={phase} />;
}

function mockReducedMotion(reduce: boolean) {
  window.matchMedia = vi.fn().mockImplementation((query: string) => ({
    matches: query.includes("prefers-reduced-motion") ? reduce : false,
    media: query,
    onchange: null,
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    addListener: vi.fn(),
    removeListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })) as unknown as typeof window.matchMedia;
}

function mockTop(top: number) {
  vi.spyOn(Element.prototype, "getBoundingClientRect").mockReturnValue({
    top,
    left: 0,
    bottom: top + 100,
    right: 100,
    width: 100,
    height: 100,
    x: 0,
    y: top,
    toJSON: () => ({}),
  } as DOMRect);
}

class ControlledObserver {
  static instances: ControlledObserver[] = [];
  callback: IntersectionObserverCallback;
  targets: Element[] = [];
  disconnected = false;
  constructor(callback: IntersectionObserverCallback) {
    this.callback = callback;
    ControlledObserver.instances.push(this);
  }
  observe(target: Element) {
    this.targets.push(target);
  }
  unobserve() {}
  disconnect() {
    this.disconnected = true;
  }
  takeRecords() {
    return [];
  }
  trigger(isIntersecting: boolean) {
    this.callback(
      this.targets.map(
        (target) => ({ isIntersecting, target }) as IntersectionObserverEntry,
      ),
      this as unknown as IntersectionObserver,
    );
  }
}

describe("useScrollReveal", () => {
  const originalMatchMedia = window.matchMedia;
  const originalObserver = window.IntersectionObserver;

  beforeEach(() => {
    ControlledObserver.instances = [];
    window.IntersectionObserver =
      ControlledObserver as unknown as typeof IntersectionObserver;
    Object.defineProperty(window, "innerHeight", { configurable: true, value: 800 });
  });

  afterEach(() => {
    window.matchMedia = originalMatchMedia;
    window.IntersectionObserver = originalObserver;
    vi.restoreAllMocks();
  });

  it("stays static when reduced motion is preferred", () => {
    mockReducedMotion(true);
    mockTop(2000);
    const { getByTestId } = render(<Probe />);

    expect(getByTestId("probe")).toHaveAttribute("data-phase", "static");
    expect(ControlledObserver.instances).toHaveLength(0);
  });

  it("stays static when the element is already above the fold", () => {
    mockReducedMotion(false);
    mockTop(300);
    const { getByTestId } = render(<Probe />);

    expect(getByTestId("probe")).toHaveAttribute("data-phase", "static");
    expect(ControlledObserver.instances).toHaveLength(0);
  });

  it("stays static without IntersectionObserver", () => {
    mockReducedMotion(false);
    mockTop(2000);
    // @ts-expect-error simulate an environment without the API
    delete window.IntersectionObserver;
    const { getByTestId } = render(<Probe />);

    expect(getByTestId("probe")).toHaveAttribute("data-phase", "static");
  });

  it("hides below-the-fold content, then reveals it on intersection", () => {
    mockReducedMotion(false);
    mockTop(2000);
    const { getByTestId } = render(<Probe />);
    const probe = getByTestId("probe");

    expect(probe).toHaveAttribute("data-phase", "hidden");
    const [observer] = ControlledObserver.instances;
    expect(observer?.targets).toEqual([probe]);

    act(() => observer?.trigger(false));
    expect(probe).toHaveAttribute("data-phase", "hidden");

    act(() => observer?.trigger(true));
    expect(probe).toHaveAttribute("data-phase", "visible");
    expect(observer?.disconnected).toBe(true);
  });

  it("disconnects the observer on unmount", () => {
    mockReducedMotion(false);
    mockTop(2000);
    const { unmount } = render(<Probe />);

    unmount();
    expect(ControlledObserver.instances.at(-1)?.disconnected).toBe(true);
  });
});
