import { render, screen, waitFor, within } from "@testing-library/react";
import userEvent, { type UserEvent } from "@testing-library/user-event";
import { afterEach, describe, expect, it, vi } from "vitest";

import { ContactForm } from "@/components/contact-form";

async function fillValidForm(user: UserEvent) {
  await user.type(screen.getByLabelText(/^Name/), "Asha Rao");
  await user.type(screen.getByLabelText(/^Work email/), "asha@example.com");
  await user.type(screen.getByLabelText("Company (optional)"), "Northstar");
  await user.selectOptions(screen.getByLabelText(/^Team size/), "11-50");
  await user.selectOptions(screen.getByLabelText(/^Industry/), "mortgage");
  await user.type(
    screen.getByLabelText(/^Tell us about your needs/),
    "We want to explore AI for mortgage document processing and underwriting assistance.",
  );
}

afterEach(() => {
  vi.restoreAllMocks();
});

describe("ContactForm", () => {
  it("marks required fields visibly and for assistive tech", () => {
    render(<ContactForm onOpenDraft={vi.fn()} />);

    expect(screen.getByRole("textbox", { name: "Name required" })).toBeInTheDocument();
    expect(screen.getByRole("textbox", { name: "Company (optional)" })).toBeInTheDocument();
    expect(screen.getByText("required", { selector: "p" })).toBeInTheDocument();
  });

  it("links errors to fields, focuses the first invalid field, and announces one summary", async () => {
    const user = userEvent.setup();
    const onOpenDraft = vi.fn();
    render(<ContactForm onOpenDraft={onOpenDraft} />);

    await user.click(screen.getByRole("button", { name: /Book a Demo/ }));

    expect(onOpenDraft).not.toHaveBeenCalled();
    expect(screen.queryAllByRole("alert")).toHaveLength(0);

    const name = screen.getByLabelText(/^Name/);
    await waitFor(() => expect(name).toHaveFocus());
    expect(name).toHaveAttribute("aria-invalid", "true");
    expect(name).toHaveAccessibleDescription("Please enter at least 2 characters.");

    const email = screen.getByLabelText(/^Work email/);
    expect(email).toHaveAttribute("aria-invalid", "true");
    expect(email).toHaveAccessibleDescription("Enter a valid work email address.");

    const company = screen.getByLabelText("Company (optional)");
    expect(company).toHaveAttribute("aria-invalid", "false");
    expect(company).not.toHaveAttribute("aria-describedby");

    expect(screen.getByText("3 fields need attention")).toHaveAttribute("role", "status");
  });

  it("opens a draft and shows an honest status panel instead of claiming it was sent", async () => {
    const user = userEvent.setup();
    const onOpenDraft = vi.fn();
    render(<ContactForm onOpenDraft={onOpenDraft} />);

    await fillValidForm(user);
    await user.click(screen.getByRole("button", { name: /Book a Demo/ }));

    expect(onOpenDraft).toHaveBeenCalledOnce();
    expect(onOpenDraft.mock.calls[0][0]).toMatch(/^mailto:hello@gettao\.ai\?/);

    const heading = screen.getByRole("heading", { level: 3, name: "Check your email app" });
    await waitFor(() => expect(heading).toHaveFocus());

    const panel = heading.closest("[role='status']") as HTMLElement;
    expect(panel).not.toBeNull();
    expect(panel).toHaveTextContent(/should have opened with your message ready to send/);
    expect(panel).not.toHaveTextContent(/received|has been sent|we got/i);
    expect(within(panel).getByRole("link", { name: "hello@gettao.ai" })).toHaveAttribute(
      "href",
      "mailto:hello@gettao.ai",
    );
    expect(screen.queryByRole("form", { name: "Book a demo" })).not.toBeInTheDocument();
  });

  it("returns to the filled form with Edit message", async () => {
    const user = userEvent.setup();
    render(<ContactForm onOpenDraft={vi.fn()} />);

    await fillValidForm(user);
    await user.click(screen.getByRole("button", { name: /Book a Demo/ }));
    await user.click(screen.getByRole("button", { name: "Edit message" }));

    expect(screen.queryByRole("heading", { name: "Check your email app" })).not.toBeInTheDocument();
    const name = screen.getByLabelText(/^Name/);
    expect(name).toBeVisible();
    expect(name).toHaveValue("Asha Rao");
    await waitFor(() => expect(name).toHaveFocus());
  });

  it("uses window.location.assign when no handler is given", async () => {
    const user = userEvent.setup();
    const assign = vi.fn();
    const original = window.location;
    Object.defineProperty(window, "location", {
      configurable: true,
      value: { ...original, assign },
    });

    try {
      render(<ContactForm />);
      await fillValidForm(user);
      await user.click(screen.getByRole("button", { name: /Book a Demo/ }));
      expect(assign).toHaveBeenCalledWith(expect.stringMatching(/^mailto:hello@gettao\.ai\?/));
    } finally {
      Object.defineProperty(window, "location", { configurable: true, value: original });
    }
  });

  it("copies the email address and confirms politely", async () => {
    const user = userEvent.setup();
    const writeText = vi.fn().mockResolvedValue(undefined);
    Object.defineProperty(navigator, "clipboard", {
      configurable: true,
      value: { writeText },
    });

    render(<ContactForm onOpenDraft={vi.fn()} />);
    await fillValidForm(user);
    await user.click(screen.getByRole("button", { name: /Book a Demo/ }));
    await user.click(screen.getByRole("button", { name: "Copy email address" }));

    expect(writeText).toHaveBeenCalledWith("hello@gettao.ai");
    const confirmation = await screen.findByText("Copied");
    expect(confirmation).toHaveAttribute("aria-live", "polite");
  });

  it("falls back when the clipboard API is unavailable", async () => {
    const user = userEvent.setup();
    Object.defineProperty(navigator, "clipboard", { configurable: true, value: undefined });
    const execCommand = vi.fn().mockReturnValue(true);
    Object.defineProperty(document, "execCommand", { configurable: true, value: execCommand });

    render(<ContactForm onOpenDraft={vi.fn()} />);
    await fillValidForm(user);
    await user.click(screen.getByRole("button", { name: /Book a Demo/ }));
    await user.click(screen.getByRole("button", { name: "Copy email address" }));

    expect(execCommand).toHaveBeenCalledWith("copy");
    expect(await screen.findByText("Copied")).toBeInTheDocument();
  });
});
