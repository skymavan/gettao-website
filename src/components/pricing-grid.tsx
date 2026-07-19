"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";

import { EASE_OUT, VIEWPORT_ONCE, fadeRise } from "@/lib/motion";
import { platformFeatures } from "@/content/site";

const parent: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14, delayChildren: 0.08 } },
};

export function PricingGrid() {
  const reduce = useReducedMotion();

  const cards = (
    <>
      {platformFeatures.map((feature) => (
        <motion.article
          key={feature.id}
          className="rounded-lg border border-border bg-background p-6"
          variants={fadeRise}
          transition={{ duration: 0.75, ease: EASE_OUT }}
        >
          <h3 className="mb-3 text-lg font-bold text-primary">{feature.title}</h3>
          <p className="text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
        </motion.article>
      ))}
    </>
  );

  if (reduce) {
    return <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{cards}</div>;
  }

  return (
    <motion.div
      className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
      variants={parent}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT_ONCE}
    >
      {cards}
    </motion.div>
  );
}
