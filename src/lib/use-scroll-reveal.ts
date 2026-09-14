"use client";

import { useEffect, useState, type RefObject } from "react";

export type RevealPhase = "static" | "hidden" | "visible";

export type ScrollRevealOptions = {
  /** IntersectionObserver rootMargin used to trigger the entrance. */
  margin?: string;
};

/** Elements whose top edge is above this fraction of the viewport are "above the fold". */
export const ABOVE_FOLD_RATIO = 0.88;

const DEFAULT_MARGIN = "0px 0px -12% 0px";

/**
 * Scroll-triggered reveal that only ever *enhances* already-visible content.
 *
 * - Server render and first client render are always "static" (fully visible),
 *   so static HTML never ships hidden content and hydration trees match.
 * - Reduced motion, missing IntersectionObserver, or an element already on
 *   screen at mount keep the phase "static" forever.
 * - Otherwise the element is hidden (off-screen, instantly) and becomes
 *   "visible" the first time it intersects.
 */
export function useScrollReveal(
  ref: RefObject<Element | null>,
  { margin = DEFAULT_MARGIN }: ScrollRevealOptions = {},
): RevealPhase {
  const [phase, setPhase] = useState<RevealPhase>("static");

  useEffect(() => {
    const element = ref.current;
    if (!element || typeof window === "undefined") return;

    if (
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    if (typeof window.IntersectionObserver === "undefined") return;

    const viewportHeight =
      window.innerHeight || document.documentElement.clientHeight || 0;
    if (viewportHeight <= 0) return;

    const { top } = element.getBoundingClientRect();
    if (top < viewportHeight * ABOVE_FOLD_RATIO) return;

    setPhase("hidden");

    const observer = new window.IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setPhase("visible");
          observer.disconnect();
        }
      },
      { rootMargin: margin },
    );
    observer.observe(element);

    return () => observer.disconnect();
  }, [ref, margin]);

  return phase;
}
