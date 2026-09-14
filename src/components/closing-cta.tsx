"use client";

import { ArrowUpRight } from "lucide-react";
import { motion, type Variants } from "motion/react";
import { useRef } from "react";

import {
  EASE_OUT,
  HIDE_INSTANTLY,
  REVEAL_DURATION,
  STAGGER_BUDGET,
  staggerParentFor,
} from "@/lib/motion";
import { useScrollReveal } from "@/lib/use-scroll-reveal";

const STATEMENT = "Transform financial operations with enterprise AI.".split(" ");

const parent = staggerParentFor(STATEMENT.length);

const word: Variants = {
  hidden: { opacity: 0, y: "0.35em", transition: HIDE_INSTANTLY },
  visible: { opacity: 1, y: 0, transition: { duration: REVEAL_DURATION, ease: EASE_OUT } },
};

const link: Variants = {
  hidden: { opacity: 0, y: 16, transition: HIDE_INSTANTLY },
  visible: {
    opacity: 1,
    y: 0,
    // Lands with the last word so the whole block settles in ~1s.
    transition: { duration: REVEAL_DURATION, ease: EASE_OUT, delay: STAGGER_BUDGET },
  },
};

export function ClosingCta({ accessUrl }: { accessUrl?: string }) {
  const url = accessUrl ?? "#contact";
  const ref = useRef<HTMLDivElement>(null);
  const phase = useScrollReveal(ref);
  const target = phase === "hidden" ? "hidden" : "visible";

  return (
    <section className="closing-section" aria-label="Closing call to action">
      <div ref={ref} className="site-shell closing-inner">
        <motion.p variants={parent} initial={false} animate={target}>
          <span className="sr-only">{STATEMENT.join(" ")}</span>
          <span aria-hidden="true">
            {STATEMENT.map((w, i) => (
              <span key={`${w}-${i}`} className="closing-word-wrap">
                <motion.span className="closing-word" variants={word}>
                  {w}
                </motion.span>
              </span>
            ))}
          </span>
        </motion.p>
        <motion.a
          href={url}
          className="closing-link"
          variants={link}
          initial={false}
          animate={target}
        >
          Book a Demo <ArrowUpRight aria-hidden="true" />
        </motion.a>
      </div>
    </section>
  );
}
