"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";

import { EASE_OUT, VIEWPORT_ONCE, fadeRise } from "@/lib/motion";
import { pricingTiers } from "@/content/site";

const parent: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14, delayChildren: 0.08 } },
};

export function PricingGrid({ accessUrl }: { accessUrl?: string }) {
  const reduce = useReducedMotion();
  const url = accessUrl ?? "#access";

  const cards = (
    <>
      {pricingTiers.map((tier) => (
        <motion.article
          key={tier.id}
          id={tier.id}
          className={`pricing-card ${tier.featured ? "pricing-card-featured" : ""}`}
          variants={fadeRise}
          transition={{ duration: 0.75, ease: EASE_OUT }}
        >
          {tier.featured && <span className="pricing-card-flag">Most popular</span>}
          <div className="pricing-tier-index">{tier.index}</div>
          <h3>{tier.name}</h3>
          <p className="pricing-price">
            {tier.price}
            {tier.cadence && <small>{tier.cadence}</small>}
          </p>
          <p className="text-sm text-muted-foreground">{tier.description}</p>
          <ul>
            {tier.features.map((feature) => (
              <li key={feature}>
                <span aria-hidden="true" /> {feature}
              </li>
            ))}
          </ul>
          <a href={url} className="text-link">
            {tier.ctaLabel}
          </a>
        </motion.article>
      ))}
    </>
  );

  if (reduce) {
    return <div className="pricing-grid">{cards}</div>;
  }

  return (
    <motion.div
      className="pricing-grid"
      variants={parent}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT_ONCE}
    >
      {cards}
    </motion.div>
  );
}
