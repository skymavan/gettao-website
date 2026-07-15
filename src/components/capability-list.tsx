"use client";

import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion, type Variants } from "motion/react";

import { EASE_OUT, VIEWPORT_ONCE, fadeRise, fadeRiseSm } from "@/lib/motion";
import { capabilities } from "@/content/site";

const parent: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.16, delayChildren: 0.08 } },
};

const useCaseParent: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.14 } },
};

export function CapabilityList({ accessUrl }: { accessUrl?: string }) {
  const reduce = useReducedMotion();
  const url = accessUrl ?? "#access";

  if (reduce) {
    return (
      <div className="capability-list">
        {capabilities.map((capability) => (
          <article key={capability.id} id={capability.id} className="capability-row">
            <div className="capability-index">{capability.index}</div>
            <div>
              <h3>{capability.title}</h3>
              <p>{capability.description}</p>
              <a href={url} className="text-link">
                Request access for {capability.shortTitle.toLowerCase()}
                <ArrowRight aria-hidden="true" />
              </a>
            </div>
            <ul aria-label={`${capability.title} examples`}>
              {capability.useCases.map((useCase) => (
                <li key={useCase}>
                  <span aria-hidden="true" /> {useCase}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    );
  }

  return (
    <motion.div
      className="capability-list"
      variants={parent}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT_ONCE}
    >
      {capabilities.map((capability) => (
        <motion.article
          key={capability.id}
          id={capability.id}
          className="capability-row"
          variants={fadeRise}
          transition={{ duration: 0.8, ease: EASE_OUT }}
        >
          <div className="capability-index">{capability.index}</div>
          <div>
            <h3>{capability.title}</h3>
            <p>{capability.description}</p>
            <a href={url} className="text-link">
              Request access for {capability.shortTitle.toLowerCase()}
              <ArrowRight aria-hidden="true" />
            </a>
          </div>
          <motion.ul
            aria-label={`${capability.title} examples`}
            variants={useCaseParent}
          >
            {capability.useCases.map((useCase) => (
              <motion.li key={useCase} variants={fadeRiseSm}>
                <span aria-hidden="true" /> {useCase}
              </motion.li>
            ))}
          </motion.ul>
        </motion.article>
      ))}
    </motion.div>
  );
}
