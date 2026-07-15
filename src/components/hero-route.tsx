"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";

import { EASE_OUT } from "@/lib/motion";

const STAGES = [
  { index: "01", label: "Observe", human: false },
  { index: "02", label: "Reason", human: false },
  { index: "03", label: "Approve", human: true },
  { index: "04", label: "Act", human: false },
  { index: "05", label: "Learn", human: false },
] as const;

const routeParent: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2, delayChildren: 1.15 } },
};

const routeItem: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE_OUT } },
};

export function HeroRoute() {
  const reduce = useReducedMotion();

  if (reduce) {
    return (
      <ol className="site-shell hero-route" aria-label="Operating loop">
        {STAGES.map((stage) => (
          <li key={stage.index} className={stage.human ? "hero-route-human" : undefined}>
            <span aria-hidden="true">{stage.index}</span>
            <strong>{stage.label}</strong>
          </li>
        ))}
      </ol>
    );
  }

  return (
    <motion.ol
      className="site-shell hero-route"
      aria-label="Operating loop"
      variants={routeParent}
      initial="hidden"
      animate="visible"
    >
      {STAGES.map((stage) => (
        <motion.li
          key={stage.index}
          className={stage.human ? "hero-route-human" : undefined}
          variants={routeItem}
        >
          <span aria-hidden="true">{stage.index}</span>
          <strong>{stage.label}</strong>
        </motion.li>
      ))}
    </motion.ol>
  );
}
