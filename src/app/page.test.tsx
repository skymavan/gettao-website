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
  it("presents the approved autonomous-operations hero narrative", () => {
    render(<Home />);

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: "Autonomous operations, human on the throttle.",
      }),
    ).toBeVisible();
    expect(
      screen.getByText(
        "GetTAO runs the repetitive operational work across the tools you already use — triage, reconciliation, reporting, follow-ups. Autonomous agents do the work; a human approves every consequential action. Observable, reversible, and never a black box.",
      ),
    ).toBeVisible();
    expect(
      screen.getAllByRole("link", { name: /Request access/ })[0],
    ).toHaveAttribute("href", "#access");
    expect(screen.getByRole("link", { name: "See how it works" })).toHaveAttribute(
      "href",
      "#how-it-works",
    );
    expect(screen.getAllByRole("heading", { level: 1 })).toHaveLength(1);
  });

  it("renders the footer social links as external destinations", () => {
    render(<Home />);

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

  it("shows the five-stage hero loop with human approval called out", () => {
    render(<Home />);

    const loops = screen.getAllByRole("list", { name: "Operating loop" });
    const heroRoute = loops[0];
    expect(within(heroRoute).getAllByRole("listitem")).toHaveLength(5);
    for (const label of ["Observe", "Reason", "Approve", "Act", "Learn"]) {
      expect(within(heroRoute).getByText(label)).toBeVisible();
    }
  });

  it("explains the operating loop as a semantic five-stage route", () => {
    render(<Home />);

    const loops = screen.getAllByRole("list", { name: "Operating loop" });
    const systemRoute = loops[1];
    expect(within(systemRoute).getAllByRole("listitem")).toHaveLength(5);
    for (const label of ["Observe", "Reason", "Approve", "Act", "Learn"]) {
      expect(within(systemRoute).getByText(label)).toBeVisible();
    }
  });
});
