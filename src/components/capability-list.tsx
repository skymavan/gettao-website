"use client";

import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion, type Variants } from "motion/react";

import { EASE_OUT, VIEWPORT_ONCE, fadeRise, fadeRiseSm } from "@/lib/motion";
import { industries } from "@/content/site";

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
  const url = accessUrl ?? "#contact";

  if (reduce) {
    return (
      <div className="capability-list">
        {industries.map((industry) => (
          <article key={industry.id} id={industry.id} className="capability-row">
            <div className="capability-index">{industry.useCases.indexOf(industry.useCases[0]) + 1}</div>
            <div>
              <h3>{industry.title}</h3>
              <p>{industry.description}</p>
              <a href={url} className="text-link">
                Learn more <ArrowRight aria-hidden="true" />
              </a>
            </div>
            <ul aria-label={`${industry.title} use cases`}>
              {industry.useCases.map((useCase) => (
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
      {industries.map((industry) => (
        <motion.article
          key={industry.id}
          id={industry.id}
          className="capability-row"
          variants={fadeRise}
          transition={{ duration: 0.8, ease: EASE_OUT }}
        >
          <div className="capability-index">{industry.useCases.indexOf(industry.useCases[0]) + 1}</div>
          <div>
            <h3>{industry.title}</h3>
            <p>{industry.description}</p>
            <a href={url} className="text-link">
              Learn more <ArrowRight aria-hidden="true" />
            </a>
          </div>
          <motion.ul
            aria-label={`${industry.title} use cases`}
            variants={useCaseParent}
          >
            {industry.useCases.map((useCase) => (
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
