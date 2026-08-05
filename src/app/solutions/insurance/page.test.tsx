import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";

import InsurancePage from "@/app/solutions/insurance/page";

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

describe("InsurancePage", () => {
  it("renders the hero narrative", () => {
    render(<InsurancePage />);

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: "Modernize Insurance Operations with Enterprise AI",
      }),
    ).toBeVisible();

    expect(
      screen.getAllByRole("link", { name: /Book a Demo/ })[0],
    ).toHaveAttribute("href", "#contact");

    expect(screen.getAllByRole("heading", { level: 1 })).toHaveLength(1);
  });

  it("renders the overview section", () => {
    render(<InsurancePage />);

    expect(
      screen.getByRole("heading", { level: 2, name: "AI Built for the Modern Insurance Industry" }),
    ).toBeVisible();
  });

  it("renders solution sections", () => {
    render(<InsurancePage />);

    expect(
      screen.getByRole("heading", { level: 3, name: "AI Claims Processing" }),
    ).toBeVisible();
    expect(
      screen.getByRole("heading", { level: 3, name: "AI Underwriting Assistant" }),
    ).toBeVisible();
    expect(
      screen.getByRole("heading", { level: 3, name: "Fraud Detection" }),
    ).toBeVisible();
    expect(
      screen.getByRole("heading", { level: 3, name: "Customer Experience" }),
    ).toBeVisible();
    expect(
      screen.getByRole("heading", { level: 3, name: "Compliance Automation" }),
    ).toBeVisible();
  });

  it("renders the shared footer logo identical to the navbar logo", () => {
    render(<InsurancePage />);

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
