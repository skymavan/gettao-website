"use client";

import { motion, type Variants } from "motion/react";
import { useRef } from "react";

import { howItWorks } from "@/content/site";
import { EASE_OUT, HIDE_INSTANTLY, fadeRise, staggerParentFor } from "@/lib/motion";
import { useScrollReveal } from "@/lib/use-scroll-reveal";

/**
 * The rail animates a unitless `--rail-progress` custom property (0 → 1).
 * CSS maps it to `scaleX` on desktop and `scaleY` on the stacked mobile layout,
 * defaulting to 1 so the rail is complete without JS.
 */
const railVariant: Variants = {
  hidden: { "--rail-progress": 0, transition: HIDE_INSTANTLY },
  visible: {
    "--rail-progress": 1,
    transition: { duration: 1, ease: EASE_OUT, delay: 0.1 },
  },
};

const parent = staggerParentFor(howItWorks.length);

export function ProcessList() {
  const ref = useRef<HTMLDivElement>(null);
  const phase = useScrollReveal(ref);
  const target = phase === "hidden" ? "hidden" : "visible";

  return (
    <div ref={ref} className="process-list-wrap">
      <motion.div
        className="process-progress-rail"
        aria-hidden="true"
        variants={railVariant}
        initial={false}
        animate={target}
      />
      <motion.ol
        className="process-list"
        aria-label="Delivery process"
        variants={parent}
        initial={false}
        animate={target}
      >
        {howItWorks.map((step) => (
          <motion.li
            key={step.title}
            className={step.human ? "process-stage-human" : undefined}
            variants={fadeRise}
          >
            <span className="process-number">{step.index}</span>
            <div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          </motion.li>
        ))}
      </motion.ol>
    </div>
  );
}
