import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";

import PlatformPage from "@/app/platform/page";

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

describe("PlatformPage", () => {
  it("renders the hero narrative", () => {
    render(<PlatformPage />);

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: "One Intelligent Platform. Every Financial Workflow.",
      }),
    ).toBeVisible();

    expect(
      screen.getAllByRole("link", { name: /Book a Demo/ })[0],
    ).toHaveAttribute("href", "#contact");

    expect(
      screen.getAllByRole("heading", { level: 1 }),
    ).toHaveLength(1);
  });

  it("renders core capability blocks", () => {
    render(<PlatformPage />);

    expect(
      screen.getByRole("heading", { level: 3, name: "AI Document Intelligence" }),
    ).toBeVisible();
    expect(
      screen.getByRole("heading", { level: 3, name: "AI Agents" }),
    ).toBeVisible();
    expect(
      screen.getByRole("heading", { level: 3, name: "Workflow Automation" }),
    ).toBeVisible();
  });

  it("renders the comparison table", () => {
    render(<PlatformPage />);

    expect(
      screen.getByRole("table", { name: /Why Organizations Choose Gettao/i }),
    ).toBeVisible();
  });

  it("renders footer social links", () => {
    render(<PlatformPage />);

    for (const [label, href] of [
      ["LinkedIn", "https://www.linkedin.com/company/gettao"],
      ["X", "https://x.com/gettao"],
      ["GitHub", "https://github.com/gettao"],
    ] as const) {
      const link = screen.getByRole("link", { name: label });
      expect(link).toHaveAttribute("href", href);
      expect(link).toHaveAttribute("target", "_blank");
      expect(link).toHaveAttribute("rel", expect.stringContaining("noopener"));
    }
  });
});
