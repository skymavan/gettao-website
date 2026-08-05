import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import { SiteHeader } from "@/components/site-header";

describe("SiteHeader", () => {
  it("renders the logo image and CTA", () => {
    render(<SiteHeader />);

    const logoLink = screen.getByRole("link", { name: "Gettao Home" });
    const logoImg = logoLink.querySelector("img") as HTMLImageElement;
    expect(logoImg).not.toBeNull();
    expect(logoImg.src).toContain("logo.png");
    expect(logoLink).toHaveAttribute("href", "/");
    expect(
      screen.getAllByRole("link", { name: "Book a Demo" })[0],
    ).toHaveAttribute("href", "#contact");
    expect(screen.queryByRole("combobox", { name: "Choose theme" })).toBeNull();
  });

  it("renders the Industries dropdown trigger", () => {
    render(<SiteHeader />);

    const triggers = screen.getAllByRole("button", { name: "Industries" });
    expect(triggers.length).toBe(2);
    expect(triggers[0]).toHaveAttribute("aria-haspopup", "true");
    expect(triggers[0]).toHaveAttribute("aria-expanded", "false");
  });

  it("opens an accessible mobile menu", async () => {
    const user = userEvent.setup();
    render(<SiteHeader />);

    await user.click(screen.getByRole("button", { name: "Open navigation" }));
    expect(
      screen.getByRole("dialog", { name: "Site navigation" }),
    ).toBeVisible();
  });

  it("opens the Industries dropdown in mobile and shows solution links", async () => {
    const user = userEvent.setup();
    render(<SiteHeader />);

    await user.click(screen.getByRole("button", { name: "Open navigation" }));
    const sheet = screen.getByRole("dialog", { name: "Site navigation" });

    const triggers = within(sheet).getAllByRole("button", { name: "Industries" });
    const mobileTrigger = triggers.find((b) => !b.hasAttribute("aria-haspopup")) ?? triggers[1];
    await user.click(mobileTrigger);

    expect(
      within(sheet).getByRole("link", { name: /Mortgage AI/ }),
    ).toHaveAttribute("href", "/solutions/mortgage");
    expect(
      within(sheet).getByRole("link", { name: /Banking AI/ }),
    ).toHaveAttribute("href", "/solutions/banking");
    expect(
      within(sheet).getByRole("link", { name: /Insurance AI/ }),
    ).toHaveAttribute("href", "/solutions/insurance");
  });
});
