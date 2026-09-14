"use client";

import { useEffect, useRef } from "react";

import { withBasePath } from "@/lib/base-path";

export const MAX_SHIFT_X = 8;
export const MAX_SHIFT_Y = 5;

/** Parallax only for precise pointers on non-small screens (see DESIGN.md). */
export const PARALLAX_POINTER_QUERY = "(pointer: fine) and (min-width: 768px)";
const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";
const SETTLE_TRANSITION = "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)";

function clampUnit(value: number) {
  return Math.max(-1, Math.min(1, value));
}

export function HeroVisual() {
  const rootRef = useRef<HTMLDivElement>(null);
  const pictureRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    const picture = pictureRef.current;
    if (!root || !picture || typeof window.matchMedia !== "function") return;

    const pointerQuery = window.matchMedia(PARALLAX_POINTER_QUERY);
    const reducedQuery = window.matchMedia(REDUCED_MOTION_QUERY);

    let frame = 0;
    let clientX = 0;
    let clientY = 0;

    const setShift = (x: number, y: number) => {
      picture.style.transform =
        x === 0 && y === 0 ? "" : `translate3d(${x}px, ${y}px, 0)`;
    };

    const update = () => {
      frame = 0;
      const bounds = root.getBoundingClientRect();
      if (bounds.width <= 0 || bounds.height <= 0) {
        setShift(0, 0);
        return;
      }
      const nx = clampUnit(((clientX - bounds.left) / bounds.width - 0.5) * 2);
      const ny = clampUnit(((clientY - bounds.top) / bounds.height - 0.5) * 2);
      setShift(
        Number((nx * MAX_SHIFT_X).toFixed(2)),
        Number((ny * MAX_SHIFT_Y).toFixed(2)),
      );
    };

    const handleMove = (event: PointerEvent) => {
      if (!pointerQuery.matches || reducedQuery.matches) return;
      clientX = event.clientX;
      clientY = event.clientY;
      picture.style.transition = SETTLE_TRANSITION;
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    const handleLeave = () => {
      if (frame) {
        window.cancelAnimationFrame(frame);
        frame = 0;
      }
      setShift(0, 0);
    };

    root.addEventListener("pointermove", handleMove);
    root.addEventListener("pointerleave", handleLeave);

    return () => {
      root.removeEventListener("pointermove", handleMove);
      root.removeEventListener("pointerleave", handleLeave);
      if (frame) window.cancelAnimationFrame(frame);
      picture.style.transform = "";
      picture.style.transition = "";
    };
  }, []);

  return (
    <div ref={rootRef} className="hero-visual" aria-hidden="true">
      <picture ref={pictureRef} className="hero-picture">
        <source
          type="image/avif"
          srcSet={`${withBasePath("/gettao-hero-office-v3-desktop.avif")} 1440w, ${withBasePath("/gettao-hero-office-v3-mobile.avif")} 768w`}
          sizes="(min-width: 768px) 50vw, 100vw"
        />
        <source
          type="image/webp"
          srcSet={`${withBasePath("/gettao-hero-office-v3-desktop.webp")} 1440w, ${withBasePath("/gettao-hero-office-v3-mobile.webp")} 768w`}
          sizes="(min-width: 768px) 50vw, 100vw"
        />
        <img
          className="hero-image"
          src={withBasePath("/gettao-hero-office-v3-desktop.webp")}
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
