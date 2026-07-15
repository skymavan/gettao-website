import { describe, expect, it } from "vitest";

import {
  buildMailtoLink,
  contactFormSchema,
  type ContactFormValues,
} from "@/lib/contact";

const validRequest: ContactFormValues = {
  name: "Asha Rao",
  email: "asha@example.com",
  company: "Northstar Labs",
  teamSize: "11-50",
  useCase: "support-ops",
  details: "We want an agent that triages incoming support tickets automatically.",
};

describe("contact form", () => {
  it("accepts a request at every approved boundary", () => {
    expect(contactFormSchema.safeParse(validRequest).success).toBe(true);
    expect(
      contactFormSchema.safeParse({
        ...validRequest,
        name: "Al",
        company: "",
        details: "x".repeat(20),
      }).success,
    ).toBe(true);
  });

  it("rejects invalid identity, team size, and request details", () => {
    const invalid = contactFormSchema.safeParse({
      ...validRequest,
      name: "A",
      email: "not-an-email",
      teamSize: "unknown",
      details: "Too short",
    });

    expect(invalid.success).toBe(false);
    if (!invalid.success) {
      const fields = invalid.error.issues.map((issue) => issue.path[0]);
      expect(fields).toEqual(
        expect.arrayContaining(["name", "email", "teamSize", "details"]),
      );
    }
  });

  it("creates a transparent encoded access-request email", () => {
    const href = buildMailtoLink(validRequest);
    const decoded = decodeURIComponent(href);

    expect(href).toMatch(/^mailto:hello@gettao\.io\?/);
    expect(decoded).toContain("GetTAO access request — Support operations");
    expect(decoded).toContain("Name: Asha Rao");
    expect(decoded).toContain("Company: Northstar Labs");
    expect(decoded).toContain(validRequest.details);
  });
});
