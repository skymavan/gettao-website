import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";

import MortgagePage from "@/app/solutions/mortgage/page";

beforeEach(() => {
  vi.stubGlobal(
    "matchMedia",
    vi.fn((query: string) => ({
      matches: query.includes("prefers-reduced-motion"),
      media: query,
      onchange: null,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      addListener: vi.fn(),
      removeListener: vi.fn(),
      dispatchEvent: vi.fn(),
    })),
  );
});

describe("MortgagePage", () => {
  it("renders the hero narrative", () => {
    render(<MortgagePage />);

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: "Accelerate Every Stage of the Mortgage Journey with Enterprise AI",
      }),
    ).toBeVisible();

    expect(
      screen.getAllByRole("link", { name: /Book a Demo/ })[0],
    ).toHaveAttribute("href", "#contact");

    expect(screen.getAllByRole("heading", { level: 1 })).toHaveLength(1);
  });

  it("renders solution sections", () => {
    render(<MortgagePage />);

    expect(
      screen.getByRole("heading", { level: 3, name: "AI Document Intelligence" }),
    ).toBeVisible();
    expect(
      screen.getByRole("heading", { level: 3, name: "Intelligent Loan Origination" }),
    ).toBeVisible();
  });
});
