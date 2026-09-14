import type { Transition, Variants } from "motion/react";

export const EASE_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1];

/** Default reveal duration (seconds). Keeps any single entrance well under 1s. */
export const REVEAL_DURATION = 0.6;

/** Hiding is never animated: it only happens off-screen, before an entrance. */
export const HIDE_INSTANTLY: Transition = { duration: 0 };

/** Upper bound on per-child stagger. */
export const MAX_STAGGER = 0.08;

/** Total time budget spread across a group's stagger offsets. */
export const STAGGER_BUDGET = 0.4;

export const fadeRise: Variants = {
  hidden: { opacity: 0, y: 24, transition: HIDE_INSTANTLY },
  visible: { opacity: 1, y: 0, transition: { duration: REVEAL_DURATION, ease: EASE_OUT } },
};

export const fadeRiseSm: Variants = {
  hidden: { opacity: 0, y: 16, transition: HIDE_INSTANTLY },
  visible: { opacity: 1, y: 0, transition: { duration: REVEAL_DURATION, ease: EASE_OUT } },
};

export const fadeOnly: Variants = {
  hidden: { opacity: 0, transition: HIDE_INSTANTLY },
  visible: { opacity: 1, transition: { duration: REVEAL_DURATION, ease: EASE_OUT } },
};

/**
 * Stagger offset for a group of `count` children: at most MAX_STAGGER, and
 * shrinking for large groups so the last child starts within STAGGER_BUDGET.
 */
export function staggerFor(count: number): number {
  if (count <= 1) return 0;
  return Math.min(MAX_STAGGER, STAGGER_BUDGET / (count - 1));
}

/**
 * Parent variants for a stagger group. The hidden state has no stagger and no
 * duration so children disappear in a single frame.
 */
export function staggerParentFor(count: number, delay = 0): Variants {
  return {
    hidden: { transition: { ...HIDE_INSTANTLY, staggerChildren: 0, delayChildren: 0 } },
    visible: {
      transition: { staggerChildren: staggerFor(count), delayChildren: 0.05 + delay },
    },
  };
}

export const staggerParent: Variants = staggerParentFor(6);

export const revealTransition: Transition = { duration: REVEAL_DURATION, ease: EASE_OUT };
