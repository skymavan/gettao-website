"use client";

import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { animate } from "motion/react";
import { useEffect, useRef } from "react";

import { Button } from "@/components/ui/button";
import { EASE_OUT } from "@/lib/motion";

const EYEBROW = "DIGITAL WORKERS · FINANCIAL OPERATIONS · HUMAN CONTROL";
const DESCRIPTION =
  "Gettao automates document-heavy work across mortgage, banking, and insurance—from intake and validation to compliance and follow-up—with human review at every critical step.";

/** Subtle settle offset (px). Opacity is never touched: hero copy is LCP content. */
const SETTLE_OFFSET = 10;
const SETTLE_DURATION = 0.7;

export function HeroCopy({ accessUrl }: { accessUrl?: string }) {
  const url = accessUrl ?? "#contact";
  const eyebrowRef = useRef<HTMLParagraphElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const actionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (
      typeof window.matchMedia !== "function" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    // DESIGN.md timing: headline/eyebrow 0ms, description 200ms, actions 400ms.
    const sequence = [
      [eyebrowRef.current, 0],
      [descriptionRef.current, 0.2],
      [actionsRef.current, 0.4],
    ] as const;

    const controls = sequence.flatMap(([element, delay]) => {
      if (!element) return [];
      // Offset everything in the same frame so later items don't jump mid-sequence.
      element.style.transform = `translateY(${SETTLE_OFFSET}px)`;
      return [
        animate(
          element,
          { y: [SETTLE_OFFSET, 0] },
          { duration: SETTLE_DURATION, delay, ease: EASE_OUT },
        ),
      ];
    });

    const elements = sequence.map(([element]) => element);
    return () => {
      controls.forEach((control) => control.stop());
      elements.forEach((element) => {
        if (element) element.style.transform = "";
      });
    };
  }, []);

  return (
    <div className="hero-copy">
      <p ref={eyebrowRef} className="eyebrow">
        {EYEBROW}
      </p>
      <h1 id="hero-title" className="hero-title">
        Digital workers for <em>financial operations.</em>
      </h1>
      <p ref={descriptionRef} className="hero-description">
        {DESCRIPTION}
      </p>
      <div ref={actionsRef} className="hero-actions">
        <Button asChild size="lg" className="hero-primary-action rounded-full">
          <a href={url}>
            Book a Demo <ArrowUpRight aria-hidden="true" />
          </a>
        </Button>
        <a href="#how-it-works" className="hero-secondary-action">
          See how it works <ArrowDownRight aria-hidden="true" />
        </a>
      </div>
    </div>
  );
}
