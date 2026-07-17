"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";

import { EASE_OUT } from "@/lib/motion";

const STAGES = [
  { index: "01", label: "Discover", human: false },
  { index: "02", label: "Design", human: false },
  { index: "03", label: "Build", human: false },
  { index: "04", label: "Deploy", human: false },
  { index: "05", label: "Optimize", human: false },
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
      <ol className="site-shell hero-route" aria-label="Delivery process">
        {STAGES.map((stage) => (
          <li key={stage.index}>
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
      aria-label="Delivery process"
      variants={routeParent}
      initial="hidden"
      animate="visible"
    >
      {STAGES.map((stage) => (
        <motion.li
          key={stage.index}
          variants={routeItem}
        >
          <span aria-hidden="true">{stage.index}</span>
          <strong>{stage.label}</strong>
        </motion.li>
      ))}
    </motion.ol>
  );
}
