import { render, screen, within } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";

import Home from "@/app/page";

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

describe("Home", () => {
  it("presents the digital-workers hero narrative", () => {
    render(<Home />);

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: "Digital workers for financial operations.",
      }),
    ).toBeVisible();
    expect(
      screen.getByText(
        /Gettao automates document-heavy work across mortgage, banking, and insurance/,
      ),
    ).toBeVisible();
    expect(
      screen.getAllByRole("link", { name: /Book a Demo/ })[0],
    ).toHaveAttribute("href", "#contact");
    expect(
      screen.getAllByRole("heading", { level: 1 }),
    ).toHaveLength(1);
  });

  it("renders the footer social links as external destinations", () => {
    render(<Home />);

    for (const [label, href] of [
      ["LinkedIn", "https://www.linkedin.com/company/gettao"],
      ["X", "https://x.com/gettao"],
      ["GitHub", "https://github.com/gettao"],
    ] as const) {
      const link = screen.getByRole("link", { name: `${label} (opens in a new tab)` });
      expect(link).toHaveAttribute("href", href);
      expect(link).toHaveAttribute("target", "_blank");
      expect(link).toHaveAttribute("rel", expect.stringContaining("noopener"));
    }
  });

  it("shows the five-stage delivery process", () => {
    render(<Home />);

    const processList = screen.getByRole("list", { name: "Delivery process" });
    expect(within(processList).getAllByRole("listitem")).toHaveLength(5);
    for (const label of ["Discover", "Design", "Build", "Deploy", "Optimize"]) {
      expect(within(processList).getByText(label)).toBeVisible();
    }
  });

  it("renders the hero photograph with responsive sources", () => {
    render(<Home />);

    const sources = screen.getAllByRole("img", { hidden: true });
    expect(sources.length).toBeGreaterThanOrEqual(1);

    const heroImg = document.querySelector(".hero-image") as HTMLImageElement;
    expect(heroImg).not.toBeNull();
    expect(heroImg.src).toContain("gettao-hero-office-v3-desktop.webp");

    const avifSources = document.querySelectorAll('source[type="image/avif"]');
    expect(avifSources.length).toBeGreaterThanOrEqual(1);
    const lastAvif = avifSources[avifSources.length - 1] as HTMLSourceElement;
    expect(lastAvif.srcset).toContain("gettao-hero-office-v3-desktop.avif");
  });

  it("renders the header and footer logo images", () => {
    render(<Home />);

    const headerLogo = document.querySelector(".site-header img") as HTMLImageElement;
    expect(headerLogo).not.toBeNull();
    expect(headerLogo.src).toContain("logo.png");

    const footerLogo = document.querySelector(".footer-brand img") as HTMLImageElement;
    expect(footerLogo).not.toBeNull();
    expect(footerLogo.src).toContain("logo.png");
  });

  it("keeps the footer logo identical to the navbar logo", () => {
    render(<Home />);

    const headerLogo = document.querySelector(".site-header img") as HTMLImageElement;
    const footerLogo = document.querySelector(".footer-brand img") as HTMLImageElement;

    expect(footerLogo.getAttribute("src")).toBe(headerLogo.getAttribute("src"));
    expect(footerLogo.getAttribute("width")).toBe(headerLogo.getAttribute("width"));
    expect(footerLogo.getAttribute("height")).toBe(headerLogo.getAttribute("height"));
    expect(footerLogo.className).toContain("h-[7.5rem]");
    expect(footerLogo.className).toBe(headerLogo.className);
  });
});
