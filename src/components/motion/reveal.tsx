"use client";

import { motion } from "motion/react";
import { Children, useRef, type ReactNode } from "react";

import {
  EASE_OUT,
  HIDE_INSTANTLY,
  REVEAL_DURATION,
  fadeRise,
  staggerParentFor,
} from "@/lib/motion";
import { useScrollReveal } from "@/lib/use-scroll-reveal";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
};

export function Reveal({ children, className, delay = 0, y = 26 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const phase = useScrollReveal(ref);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={false}
      animate={
        phase === "hidden"
          ? { opacity: 0, y, transition: HIDE_INSTANTLY }
          : {
              opacity: 1,
              y: 0,
              transition: { duration: REVEAL_DURATION, ease: EASE_OUT, delay },
            }
      }
    >
      {children}
    </motion.div>
  );
}

type StaggerGroupProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function StaggerGroup({ children, className, delay = 0 }: StaggerGroupProps) {
  const ref = useRef<HTMLDivElement>(null);
  const phase = useScrollReveal(ref);

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={staggerParentFor(Children.count(children), delay)}
      initial={false}
      animate={phase === "hidden" ? "hidden" : "visible"}
    >
      {children}
    </motion.div>
  );
}

type StaggerItemProps = {
  children: ReactNode;
  className?: string;
};

export function StaggerItem({ children, className }: StaggerItemProps) {
  return (
    <motion.div className={className} variants={fadeRise}>
      {children}
    </motion.div>
  );
}
