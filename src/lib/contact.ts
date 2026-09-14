import { z } from "zod";

import { siteConfig } from "@/content/site";

/* ------------------------------------------------------------------ */
/* Shared options                                                      */
/* ------------------------------------------------------------------ */

export const teamSizeValues = [
  "solo",
  "11-50",
  "51-200",
  "200-plus",
  "not-sure",
] as const;

export type TeamSize = (typeof teamSizeValues)[number];

export const useCaseValues = [
  "mortgage",
  "banking",
  "insurance",
  "fintech",
  "other",
  "not-sure",
] as const;

export type UseCase = (typeof useCaseValues)[number];

export const teamSizeLabels: Record<TeamSize, string> = {
  solo: "1–10 people",
  "11-50": "11–50 people",
  "51-200": "51–200 people",
  "200-plus": "200+ people",
  "not-sure": "Not sure yet",
};

export const useCaseLabels: Record<UseCase, string> = {
  mortgage: "Mortgage lending",
  banking: "Banking operations",
  insurance: "Insurance operations",
  fintech: "FinTech",
  other: "Other financial services",
  "not-sure": "Not sure yet",
};

export function isUseCase(value: unknown): value is UseCase {
  return (
    typeof value === "string" &&
    (useCaseValues as readonly string[]).includes(value)
  );
}

/* ------------------------------------------------------------------ */
/* Shared field schemas                                                */
/* ------------------------------------------------------------------ */

export const nameField = z
  .string()
  .trim()
  .min(2, "Please enter at least 2 characters.")
  .max(80, "Please keep your name under 80 characters.");

export const emailField = z.email("Enter a valid work email address.");

const companyMax = "Please keep the company name under 100 characters.";

export const optionalCompanyField = z.string().trim().max(100, companyMax);

export const requiredCompanyField = z
  .string()
  .trim()
  .min(1, "Company name is required.")
  .max(100, companyMax);

export const teamSizeField = z.enum(teamSizeValues, {
  error: "Choose your approximate team size.",
});

export const useCaseField = z.enum(useCaseValues, {
  error: "Choose your industry.",
});

/** Today's date in the visitor's local timezone, as YYYY-MM-DD. */
export function todayIsoDate(now: Date = new Date()): string {
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, "0");
  const d = String(now.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

/* ------------------------------------------------------------------ */
/* General contact / demo form                                         */
/* ------------------------------------------------------------------ */

export const contactFormSchema = z.object({
  name: nameField,
  email: emailField,
  company: optionalCompanyField,
  teamSize: teamSizeField,
  useCase: useCaseField,
  details: z
    .string()
    .trim()
    .min(20, "Share at least 20 characters so we understand the workflow.")
    .max(1500, "Please keep details under 1,500 characters."),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

export const contactFormDefaults: ContactFormValues = {
  name: "",
  email: "",
  company: "",
  teamSize: "not-sure",
  useCase: "not-sure",
  details: "",
};

/* ------------------------------------------------------------------ */
/* Consultation form                                                   */
/* ------------------------------------------------------------------ */

export const consultationFormSchema = z.object({
  name: nameField,
  email: emailField,
  company: requiredCompanyField,
  jobTitle: z
    .string()
    .trim()
    .min(1, "Job title is required.")
    .max(100, "Please keep the job title under 100 characters."),
  industry: useCaseField,
  companySize: teamSizeField,
  challenges: z
    .string()
    .trim()
    .min(20, "Share at least 20 characters so we understand your challenges.")
    .max(2000, "Please keep details under 2,000 characters."),
  existingSystems: z
    .string()
    .trim()
    .max(500, "Please keep this under 500 characters."),
  meetingDate: z
    .string()
    .min(1, "Select a preferred meeting date.")
    .refine((value) => value >= todayIsoDate(), {
      error: "Choose today or a later date.",
    }),
  meetingTime: z.string().min(1, "Select a preferred meeting time."),
  notes: z.string().trim().max(1000, "Please keep notes under 1,000 characters."),
});

export type ConsultationFormValues = z.infer<typeof consultationFormSchema>;

export function consultationFormDefaults(
  industry?: string | null,
): ConsultationFormValues {
  return {
    name: "",
    email: "",
    company: "",
    jobTitle: "",
    industry: isUseCase(industry) ? industry : "not-sure",
    companySize: "not-sure",
    challenges: "",
    existingSystems: "",
    meetingDate: "",
    meetingTime: "",
    notes: "",
  };
}

/* ------------------------------------------------------------------ */
/* mailto building                                                     */
/* ------------------------------------------------------------------ */

export function buildMailto(subject: string, bodyLines: string[]): string {
  return `mailto:${siteConfig.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyLines.join("\n"))}`;
}

export function buildMailtoLink(values: ContactFormValues): string {
  return buildMailto(`Gettao demo request — ${useCaseLabels[values.useCase]}`, [
    `Name: ${values.name}`,
    `Email: ${values.email}`,
    `Company: ${values.company || "Not provided"}`,
    `Team size: ${teamSizeLabels[values.teamSize]}`,
    `Industry: ${useCaseLabels[values.useCase]}`,
    "",
    "Details:",
    values.details,
  ]);
}

export function buildConsultationMailtoLink(
  values: ConsultationFormValues,
): string {
  return buildMailto(
    `Gettao AI consultation request — ${useCaseLabels[values.industry]}`,
    [
      `Name: ${values.name}`,
      `Email: ${values.email}`,
      `Company: ${values.company}`,
      `Job title: ${values.jobTitle}`,
      `Industry: ${useCaseLabels[values.industry]}`,
      `Company size: ${teamSizeLabels[values.companySize]}`,
      "",
      "Current business challenges:",
      values.challenges,
      "",
      `Existing systems: ${values.existingSystems || "Not provided"}`,
      "",
      `Preferred meeting date: ${values.meetingDate}`,
      `Preferred meeting time: ${values.meetingTime}`,
      "",
      `Additional notes: ${values.notes || "Not provided"}`,
    ],
  );
}
