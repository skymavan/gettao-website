import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";

import BankingPage from "@/app/solutions/banking/page";

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

describe("BankingPage", () => {
  it("renders the hero narrative", () => {
    render(<BankingPage />);

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: "Build Smarter, Faster, and More Secure Banking Operations",
      }),
    ).toBeVisible();

    expect(
      screen.getAllByRole("link", { name: /Book a Demo/ })[0],
    ).toHaveAttribute("href", "#contact");

    expect(screen.getAllByRole("heading", { level: 1 })).toHaveLength(1);
  });

  it("renders the overview section", () => {
    render(<BankingPage />);

    expect(
      screen.getByRole("heading", { level: 2, name: "The Future of Banking Is Intelligent" }),
    ).toBeVisible();
  });

  it("renders solution sections", () => {
    render(<BankingPage />);

    expect(
      screen.getByRole("heading", { level: 3, name: "AI Customer Service" }),
    ).toBeVisible();
    expect(
      screen.getByRole("heading", { level: 3, name: "Fraud Detection & Monitoring" }),
    ).toBeVisible();
    expect(
      screen.getByRole("heading", { level: 3, name: "Intelligent Compliance" }),
    ).toBeVisible();
    expect(
      screen.getByRole("heading", { level: 3, name: "AI Workflow Automation" }),
    ).toBeVisible();
    expect(
      screen.getByRole("heading", { level: 3, name: "Decision Intelligence" }),
    ).toBeVisible();
  });
});
