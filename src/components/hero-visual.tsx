"use client";

import type { PointerEvent } from "react";

const MAX_SHIFT_X = 8;
const MAX_SHIFT_Y = 5;

function setDepth(element: HTMLElement, x: number, y: number) {
  element.style.setProperty("--hero-shift-x", `${x}px`);
  element.style.setProperty("--hero-shift-y", `${y}px`);
}

const ORBIT = [
  { x: 400, y: 100, human: false },
  { x: 685, y: 307, human: false },
  { x: 576, y: 643, human: true },
  { x: 224, y: 643, human: false },
  { x: 115, y: 307, human: false },
];

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
      <div className="telemetry-grid" />
      <svg
        className="telemetry-orbit"
        viewBox="0 0 800 800"
        preserveAspectRatio="xMidYMid meet"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="400"
          cy="400"
          r="300"
          fill="none"
          stroke="hsl(var(--signal) / 0.18)"
          strokeWidth="1"
        />
        <circle
          cx="400"
          cy="400"
          r="180"
          fill="none"
          stroke="hsl(var(--signal) / 0.08)"
          strokeWidth="1"
        />
        {ORBIT.map((node) => (
          <g key={`${node.x}-${node.y}`}>
            <circle
              cx={node.x}
              cy={node.y}
              r={node.human ? 9 : 6}
              fill={node.human ? "hsl(var(--human))" : "hsl(var(--signal))"}
            />
            {node.human && (
              <circle
                cx={node.x}
                cy={node.y}
                r="9"
                fill="none"
                stroke="hsl(var(--human))"
                strokeWidth="2"
                className="telemetry-pulse"
              />
            )}
          </g>
        ))}
      </svg>
    </div>
  );
}
