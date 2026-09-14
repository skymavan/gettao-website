import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";

import { ConsultationForm } from "@/components/consultation-form";
import { todayIsoDate } from "@/lib/contact";

describe("ConsultationForm", () => {
  it("prefills a known industry from the query value", () => {
    render(<ConsultationForm defaultIndustry="banking" onOpenDraft={vi.fn()} />);
    expect(screen.getByLabelText(/^Industry/)).toHaveValue("banking");
  });

  it("falls back to 'Not sure yet' for unknown industries", () => {
    render(<ConsultationForm defaultIndustry="crypto" onOpenDraft={vi.fn()} />);
    expect(screen.getByLabelText(/^Industry/)).toHaveValue("not-sure");
  });

  it("does not allow picking a past meeting date", () => {
    render(<ConsultationForm onOpenDraft={vi.fn()} />);
    expect(screen.getByLabelText(/^Preferred Meeting Date/)).toHaveAttribute(
      "min",
      todayIsoDate(),
    );
  });

  it("focuses the first invalid field and announces a single summary", async () => {
    const user = userEvent.setup();
    const onOpenDraft = vi.fn();
    render(<ConsultationForm onOpenDraft={onOpenDraft} />);

    await user.click(screen.getByRole("button", { name: /Request a Consultation/ }));

    expect(onOpenDraft).not.toHaveBeenCalled();
    expect(screen.queryAllByRole("alert")).toHaveLength(0);
    await waitFor(() => expect(screen.getByLabelText(/^Full Name/)).toHaveFocus());
    expect(screen.getByLabelText(/^Job Title/)).toHaveAccessibleDescription(
      "Job title is required.",
    );
    expect(screen.getByText("7 fields need attention")).toBeInTheDocument();
  });

  it("opens a consultation draft and shows the status panel with an H2", async () => {
    const user = userEvent.setup();
    const onOpenDraft = vi.fn();
    render(<ConsultationForm defaultIndustry="insurance" onOpenDraft={onOpenDraft} />);

    await user.type(screen.getByLabelText(/^Full Name/), "Asha Rao");
    await user.type(screen.getByLabelText(/^Work Email/), "asha@example.com");
    await user.type(screen.getByLabelText(/^Company Name/), "Northstar Mutual");
    await user.type(screen.getByLabelText(/^Job Title/), "COO");
    await user.type(
      screen.getByLabelText(/^Current Business Challenges/),
      "Claims intake is manual and slow across three regions.",
    );
    fireEvent.change(screen.getByLabelText(/^Preferred Meeting Date/), {
      target: { value: "2099-01-15" },
    });
    fireEvent.change(screen.getByLabelText(/^Preferred Meeting Time/), {
      target: { value: "10:30" },
    });

    await user.click(screen.getByRole("button", { name: /Request a Consultation/ }));

    expect(onOpenDraft).toHaveBeenCalledOnce();
    const decoded = decodeURIComponent(onOpenDraft.mock.calls[0][0]);
    expect(decoded).toContain("Gettao AI consultation request — Insurance operations");
    expect(decoded).toContain("Preferred meeting date: 2099-01-15");

    const heading = screen.getByRole("heading", { level: 2, name: "Check your email app" });
    await waitFor(() => expect(heading).toHaveFocus());
    expect(document.body).not.toHaveTextContent(/has received your request/i);
  });
});
