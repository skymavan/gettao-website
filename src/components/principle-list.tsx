"use client";

import { motion } from "motion/react";
import { useRef } from "react";

import { fadeRise, staggerParentFor } from "@/lib/motion";
import { useScrollReveal } from "@/lib/use-scroll-reveal";

type Item = { title: string; description: string };

export function PrincipleList({
  items,
  ariaLabel,
}: {
  items: ReadonlyArray<Item>;
  ariaLabel?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const phase = useScrollReveal(ref);

  return (
    <motion.div
      ref={ref}
      className="principle-list"
      variants={staggerParentFor(items.length)}
      initial={false}
      animate={phase === "hidden" ? "hidden" : "visible"}
      {...(ariaLabel ? { "aria-label": ariaLabel } : {})}
    >
      {items.map((item) => (
        <motion.article key={item.title} variants={fadeRise}>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </motion.article>
      ))}
    </motion.div>
  );
}
