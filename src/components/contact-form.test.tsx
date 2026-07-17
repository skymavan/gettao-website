import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";

import { ContactForm } from "@/components/contact-form";

describe("ContactForm", () => {
  it("announces validation errors instead of opening an empty draft", async () => {
    const user = userEvent.setup();
    const onOpenDraft = vi.fn();
    render(<ContactForm onOpenDraft={onOpenDraft} />);

    await user.click(screen.getByRole("button", { name: /Book a Demo/ }));

    expect(onOpenDraft).not.toHaveBeenCalled();
    expect(await screen.findAllByRole("alert")).toHaveLength(3);
  });

  it("opens a structured draft after a valid demo request", async () => {
    const user = userEvent.setup();
    const onOpenDraft = vi.fn();
    render(<ContactForm onOpenDraft={onOpenDraft} />);

    await user.type(screen.getByLabelText("Name"), "Asha Rao");
    await user.type(screen.getByLabelText("Work email"), "asha@example.com");
    await user.type(screen.getByLabelText("Company (optional)"), "Northstar");
    await user.selectOptions(screen.getByLabelText("Team size"), "11-50");
    await user.selectOptions(
      screen.getByLabelText("Industry"),
      "mortgage",
    );
    await user.type(
      screen.getByLabelText("Tell us about your needs"),
      "We want to explore AI for mortgage document processing and underwriting assistance.",
    );

    await user.click(screen.getByRole("button", { name: /Book a Demo/ }));

    expect(onOpenDraft).toHaveBeenCalledOnce();
    expect(onOpenDraft.mock.calls[0][0]).toMatch(/^mailto:hello@gettao\.ai\?/);
  });
});
