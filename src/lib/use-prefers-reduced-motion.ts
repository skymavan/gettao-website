"use client";

import { useSyncExternalStore } from "react";

const QUERY = "(prefers-reduced-motion: reduce)";

function subscribe(onChange: () => void) {
  if (typeof window === "undefined" || typeof window.matchMedia !== "function") {
    return () => {};
  }
  const media = window.matchMedia(QUERY);
  media.addEventListener?.("change", onChange);
  return () => media.removeEventListener?.("change", onChange);
}

function getSnapshot() {
  return typeof window.matchMedia === "function" && window.matchMedia(QUERY).matches;
}

/**
 * Reduced-motion preference that is hydration-safe: the server snapshot assumes
 * reduced motion, so SSR output never depends on animation, and the client
 * re-renders with the real preference right after hydration.
 */
export function usePrefersReducedMotion(): boolean {
  return useSyncExternalStore(subscribe, getSnapshot, () => true);
}
