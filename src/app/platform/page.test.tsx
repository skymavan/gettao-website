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

  it("renders the shared footer logo identical to the navbar logo", () => {
    render(<PlatformPage />);

    const headerLogo = document.querySelector(".site-header img") as HTMLImageElement;
    const footerLogo = document.querySelector(".footer-brand img") as HTMLImageElement;

    expect(headerLogo).not.toBeNull();
    expect(footerLogo).not.toBeNull();
    expect(footerLogo.getAttribute("src")).toContain("logo.png");
    expect(footerLogo.getAttribute("src")).toBe(headerLogo.getAttribute("src"));
    expect(footerLogo.getAttribute("width")).toBe("1536");
    expect(footerLogo.getAttribute("height")).toBe("1024");
    expect(footerLogo.className).toContain("h-[7.5rem]");
  });
});
