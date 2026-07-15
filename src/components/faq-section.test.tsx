import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import { FaqSection } from "@/components/faq-section";

describe("FaqSection", () => {
  it("reveals the visible answer associated with a question", async () => {
    const user = userEvent.setup();
    render(<FaqSection />);

    const question = screen.getByRole("button", {
      name: "How do human approvals work?",
    });
    expect(question).toHaveAttribute("aria-expanded", "false");

    await user.click(question);

    expect(question).toHaveAttribute("aria-expanded", "true");
    expect(
      screen.getByText(/configurable approval gates/i),
    ).toBeVisible();
  });
});
