"use client";

import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion, type Variants } from "motion/react";

import { Button } from "@/components/ui/button";
import { EASE_OUT } from "@/lib/motion";

const HEADLINE_LEAD = ["Digital", "workers"];
const HEADLINE_EMPHASIS = ["for", "financial", "operations."];

const heroStagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.16, delayChildren: 0.08 } },
};

const heroChild: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.95, ease: EASE_OUT } },
};

const headlineParent: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: EASE_OUT, staggerChildren: 0.1, delayChildren: 0.08 },
  },
};

const headlineWord: Variants = {
  hidden: { opacity: 0, y: "0.4em" },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE_OUT } },
};

function StaticHeadline() {
  return (
    <h1 id="hero-title" className="hero-title">
      Digital workers for <em>financial operations.</em>
    </h1>
  );
}

function AnimatedHeadline() {
  return (
    <motion.h1
      id="hero-title"
      className="hero-title"
      variants={headlineParent}
    >
      <span className="sr-only">Digital workers for financial operations.</span>
      <span aria-hidden="true" style={{ display: "block" }}>
        {HEADLINE_LEAD.map((word) => (
          <span key={word} className="hero-word-wrap">
            <motion.span className="hero-word" variants={headlineWord}>
              {word}
            </motion.span>
          </span>
        ))}
        <em className="hero-emphasis">
          {HEADLINE_EMPHASIS.map((word) => (
            <span key={word} className="hero-word-wrap">
              <motion.span className="hero-word" variants={headlineWord}>
                {word}
              </motion.span>
            </span>
          ))}
        </em>
      </span>
    </motion.h1>
  );
}

const EYEBROW = "DIGITAL WORKERS · FINANCIAL OPERATIONS · HUMAN CONTROL";
const DESCRIPTION =
  "Gettao automates document-heavy work across mortgage, banking, and insurance\u2014from intake and validation to compliance and follow-up\u2014with human review at every critical step.";

function Actions({ accessUrl }: { accessUrl: string }) {
  return (
    <div className="hero-actions">
      <Button
        asChild
        size="lg"
        className="hero-primary-action rounded-full"
      >
        <a href={accessUrl}>
          Book a Demo <ArrowUpRight aria-hidden="true" />
        </a>
      </Button>
      <a href="#how-it-works" className="hero-secondary-action">
        See how it works <ArrowDownRight aria-hidden="true" />
      </a>
    </div>
  );
}

export function HeroCopy({ accessUrl }: { accessUrl?: string }) {
  const reduce = useReducedMotion();
  const url = accessUrl ?? "#contact";

  if (reduce) {
    return (
      <div className="hero-copy">
        <p className="eyebrow">{EYEBROW}</p>
        <StaticHeadline />
        <p className="hero-description">{DESCRIPTION}</p>
        <Actions accessUrl={url} />
      </div>
    );
  }

  return (
    <motion.div
      className="hero-copy"
      variants={heroStagger}
      initial="hidden"
      animate="visible"
    >
      <motion.p className="eyebrow" variants={heroChild}>
        {EYEBROW}
      </motion.p>
      <AnimatedHeadline />
      <motion.p className="hero-description" variants={heroChild}>
        {DESCRIPTION}
      </motion.p>
      <motion.div variants={heroChild}>
        <Actions accessUrl={url} />
      </motion.div>
    </motion.div>
  );
}
