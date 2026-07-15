import { z } from "zod";

import { siteConfig } from "@/content/site";

export const teamSizeValues = [
  "solo",
  "11-50",
  "51-200",
  "200-plus",
  "not-sure",
] as const;

export const useCaseValues = [
  "support-ops",
  "revenue-ops",
  "internal-ops",
  "finance-ops",
  "data-ops",
  "devops",
  "not-sure",
] as const;

export const teamSizeLabels: Record<(typeof teamSizeValues)[number], string> = {
  solo: "1–10 people",
  "11-50": "11–50 people",
  "51-200": "51–200 people",
  "200-plus": "200+ people",
  "not-sure": "Not sure yet",
};

export const useCaseLabels: Record<(typeof useCaseValues)[number], string> = {
  "support-ops": "Support operations",
  "revenue-ops": "Revenue operations",
  "internal-ops": "Internal operations",
  "finance-ops": "Finance operations",
  "data-ops": "Data operations",
  devops: "DevOps & infrastructure",
  "not-sure": "Not sure yet",
};

export const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter at least 2 characters.")
    .max(80, "Please keep your name under 80 characters."),
  email: z.email("Enter a valid work email address."),
  company: z
    .string()
    .trim()
    .max(100, "Please keep the company name under 100 characters."),
  teamSize: z.enum(teamSizeValues, {
    error: "Choose your approximate team size.",
  }),
  useCase: z.enum(useCaseValues, {
    error: "Choose the area you want to automate first.",
  }),
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

export function buildMailtoLink(values: ContactFormValues): string {
  const subject = `GetTAO access request — ${useCaseLabels[values.useCase]}`;
  const body = [
    `Name: ${values.name}`,
    `Email: ${values.email}`,
    `Company: ${values.company || "Not provided"}`,
    `Team size: ${teamSizeLabels[values.teamSize]}`,
    `Primary use case: ${useCaseLabels[values.useCase]}`,
    "",
    "What should run autonomously:",
    values.details,
  ].join("\n");

  return `mailto:${siteConfig.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
