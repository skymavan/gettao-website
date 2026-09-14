import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";

import { FaqSection } from "@/components/faq-section";
import { faqItems } from "@/content/site";

describe("FaqSection", () => {
  it("reveals the visible answer associated with a question", async () => {
    const user = userEvent.setup();
    render(<FaqSection />);

    const question = screen.getByRole("button", {
      name: "What industries does Gettao serve?",
    });
    expect(question).toHaveAttribute("aria-expanded", "false");

    await user.click(question);

    expect(question).toHaveAttribute("aria-expanded", "true");
    expect(
      screen.getByText(/mortgage lenders|banks|insurance providers/i),
    ).toBeVisible();
  });

  it("renders every question visible in static markup", () => {
    const html = renderToStaticMarkup(<FaqSection />);

    expect(html).not.toMatch(/opacity:\s*0(?![.\d])/);
    for (const item of faqItems) {
      expect(html).toContain(item.question.replace(/'/g, "&#x27;"));
    }
  });
});
