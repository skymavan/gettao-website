"use client";

import type { PointerEvent } from "react";

import { withBasePath } from "@/lib/base-path";

const MAX_SHIFT_X = 8;
const MAX_SHIFT_Y = 5;

function setDepth(element: HTMLElement, x: number, y: number) {
  element.style.setProperty("--hero-shift-x", `${x}px`);
  element.style.setProperty("--hero-shift-y", `${y}px`);
}

export function HeroVisual() {
  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    const element = event.currentTarget;
    const bounds = element.getBoundingClientRect();

    if (bounds.width <= 0 || bounds.height <= 0) {
      setDepth(element, 0, 0);
      return;
    }

    const normalizedX = Math.max(
      -1,
      Math.min(1, ((event.clientX - bounds.left) / bounds.width - 0.5) * 2),
    );
    const normalizedY = Math.max(
      -1,
      Math.min(1, ((event.clientY - bounds.top) / bounds.height - 0.5) * 2),
    );

    setDepth(
      element,
      Number((normalizedX * MAX_SHIFT_X).toFixed(2)),
      Number((normalizedY * MAX_SHIFT_Y).toFixed(2)),
    );
  }

  function resetDepth(event: PointerEvent<HTMLDivElement>) {
    setDepth(event.currentTarget, 0, 0);
  }

  return (
    <div
      className="hero-visual"
      aria-hidden="true"
      onPointerMove={handlePointerMove}
      onPointerLeave={resetDepth}
    >
      <picture className="hero-picture">
        <source
          type="image/avif"
          srcSet={`${withBasePath("/gettao-hero-workflow-v2-desktop.avif")} 1440w, ${withBasePath("/gettao-hero-workflow-v2-mobile.avif")} 768w`}
          sizes="(min-width: 768px) 50vw, 100vw"
        />
        <source
          type="image/webp"
          srcSet={`${withBasePath("/gettao-hero-workflow-v2-desktop.webp")} 1440w, ${withBasePath("/gettao-hero-workflow-v2-mobile.webp")} 768w`}
          sizes="(min-width: 768px) 50vw, 100vw"
        />
        <img
          className="hero-image"
          src={withBasePath("/gettao-hero-workflow-v2-desktop.webp")}
          alt=""
          width="1440"
          height="1080"
          decoding="async"
          fetchPriority="high"
        />
      </picture>
    </div>
  );
}
