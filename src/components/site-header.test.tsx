import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import { SiteHeader } from "@/components/site-header";

describe("SiteHeader", () => {
  it("renders the exact wordmark and journey actions", () => {
    render(<SiteHeader />);

    const wordmark = screen.getByRole("link", { name: "GetTAO home" });
    expect(wordmark.querySelector("img")).toBeNull();
    expect(wordmark).toHaveTextContent("GetTAO");
    expect(wordmark).toHaveAttribute("href", "#top");
    expect(
      screen.getAllByRole("link", { name: "Request access" })[0],
    ).toHaveAttribute("href", "#access");
    expect(screen.queryByRole("combobox", { name: "Choose theme" })).toBeNull();
  });

  it("renders anchor navigation and opens an accessible mobile menu", async () => {
    const user = userEvent.setup();
    render(<SiteHeader />);

    expect(
      screen.getAllByRole("link", { name: "Capabilities" })[0],
    ).toHaveAttribute("href", "#capabilities");

    await user.click(screen.getByRole("button", { name: "Open navigation" }));
    expect(
      screen.getByRole("dialog", { name: "Site navigation" }),
    ).toBeVisible();
  });

  it("routes mobile navigation links to the matching section hash", async () => {
    const user = userEvent.setup();
    render(<SiteHeader />);

    await user.click(screen.getByRole("button", { name: "Open navigation" }));
    await user.click(screen.getByRole("link", { name: "Pricing" }));
    expect(window.location.hash).toBe("#pricing");
  });
});
