import { afterEach, describe, expect, it, vi } from "vitest";

import {
  buildConsultationMailtoLink,
  buildMailtoLink,
  consultationFormDefaults,
  consultationFormSchema,
  contactFormSchema,
  type ConsultationFormValues,
  type ContactFormValues,
  isUseCase,
  todayIsoDate,
} from "@/lib/contact";

const validRequest: ContactFormValues = {
  name: "Asha Rao",
  email: "asha@example.com",
  company: "Northstar Labs",
  teamSize: "11-50",
  useCase: "mortgage",
  details: "We want an agent that triages incoming support tickets automatically.",
};

const validConsultation: ConsultationFormValues = {
  name: "Asha Rao",
  email: "asha@example.com",
  company: "Northstar Bank",
  jobTitle: "COO",
  industry: "banking",
  companySize: "51-200",
  challenges: "Manual KYC review is slowing our onboarding pipeline.",
  existingSystems: "",
  meetingDate: "2099-01-15",
  meetingTime: "10:30",
  notes: "",
};

afterEach(() => {
  vi.useRealTimers();
});

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

    expect(href).toMatch(/^mailto:hello@gettao\.ai\?/);
    expect(decoded).toContain("Gettao demo request — Mortgage lending");
    expect(decoded).toContain("Name: Asha Rao");
    expect(decoded).toContain("Company: Northstar Labs");
    expect(decoded).toContain(validRequest.details);
  });

  it("marks a missing company as not provided", () => {
    const decoded = decodeURIComponent(buildMailtoLink({ ...validRequest, company: "" }));
    expect(decoded).toContain("Company: Not provided");
  });
});

describe("consultation form", () => {
  it("shares industry and company-size options with the contact form", () => {
    expect(consultationFormSchema.shape.industry.options).toEqual(
      contactFormSchema.shape.useCase.options,
    );
    expect(consultationFormSchema.shape.companySize.options).toEqual(
      contactFormSchema.shape.teamSize.options,
    );
  });

  it("accepts a complete request", () => {
    expect(consultationFormSchema.safeParse(validConsultation).success).toBe(true);
  });

  it("requires company, job title, date, and time", () => {
    const result = consultationFormSchema.safeParse({
      ...validConsultation,
      company: " ",
      jobTitle: "",
      meetingDate: "",
      meetingTime: "",
    });
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.issues.map((issue) => issue.path[0])).toEqual(
        expect.arrayContaining(["company", "jobTitle", "meetingDate", "meetingTime"]),
      );
    }
  });

  it("rejects meeting dates before today but accepts today", () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date(2026, 8, 14, 9, 0));

    expect(todayIsoDate()).toBe("2026-09-14");
    expect(
      consultationFormSchema.safeParse({ ...validConsultation, meetingDate: "2026-09-13" })
        .success,
    ).toBe(false);
    expect(
      consultationFormSchema.safeParse({ ...validConsultation, meetingDate: "2026-09-14" })
        .success,
    ).toBe(true);
  });

  it("prefills a known industry and ignores unknown values", () => {
    expect(consultationFormDefaults("insurance").industry).toBe("insurance");
    expect(consultationFormDefaults("crypto").industry).toBe("not-sure");
    expect(consultationFormDefaults(undefined).industry).toBe("not-sure");
    expect(isUseCase("banking")).toBe(true);
    expect(isUseCase(null)).toBe(false);
  });

  it("builds an encoded consultation email", () => {
    const href = buildConsultationMailtoLink(validConsultation);
    const decoded = decodeURIComponent(href);

    expect(href).toMatch(/^mailto:hello@gettao\.ai\?subject=/);
    expect(decoded).toContain("Gettao AI consultation request — Banking operations");
    expect(decoded).toContain("Job title: COO");
    expect(decoded).toContain("Company size: 51–200 people");
    expect(decoded).toContain("Preferred meeting date: 2099-01-15");
    expect(decoded).toContain("Existing systems: Not provided");
  });
});
