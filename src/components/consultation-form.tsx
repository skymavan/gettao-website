"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowUpRight } from "lucide-react";
import { cloneElement, type ReactElement, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { siteConfig } from "@/content/site";

const industryValues = ["mortgage", "banking", "insurance", "other"] as const;

const industryLabels: Record<(typeof industryValues)[number], string> = {
  mortgage: "Mortgage",
  banking: "Banking",
  insurance: "Insurance",
  other: "Other",
};

const companySizeValues = ["1-10", "11-50", "51-200", "200-plus"] as const;

const companySizeLabels: Record<(typeof companySizeValues)[number], string> = {
  "1-10": "1–10 employees",
  "11-50": "11–50 employees",
  "51-200": "51–200 employees",
  "200-plus": "200+ employees",
};

const consultationFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter at least 2 characters.")
    .max(80, "Please keep your name under 80 characters."),
  email: z.string().email("Enter a valid work email address."),
  company: z
    .string()
    .trim()
    .min(1, "Company name is required.")
    .max(100, "Please keep the company name under 100 characters."),
  jobTitle: z
    .string()
    .trim()
    .min(1, "Job title is required.")
    .max(100, "Please keep the job title under 100 characters."),
  industry: z.enum(industryValues, {
    error: "Select your industry.",
  }),
  companySize: z.enum(companySizeValues, {
    error: "Select your company size.",
  }),
  challenges: z
    .string()
    .trim()
    .min(20, "Share at least 20 characters so we understand your challenges.")
    .max(2000, "Please keep details under 2,000 characters."),
  existingSystems: z.string().trim().max(500).optional(),
  meetingDate: z.string().min(1, "Select a preferred meeting date."),
  meetingTime: z.string().min(1, "Select a preferred meeting time."),
  notes: z.string().trim().max(1000).optional(),
});

type ConsultationFormValues = z.infer<typeof consultationFormSchema>;

type ConsultationFormProps = {
  defaultIndustry?: string;
};

export function ConsultationForm({ defaultIndustry }: ConsultationFormProps) {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ConsultationFormValues>({
    resolver: zodResolver(consultationFormSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      jobTitle: "",
      industry: (industryValues as readonly string[]).includes(defaultIndustry ?? "")
        ? (defaultIndustry as (typeof industryValues)[number])
        : "other",
      companySize: "1-10",
      challenges: "",
      existingSystems: "",
      meetingDate: "",
      meetingTime: "",
      notes: "",
    },
    mode: "onBlur",
  });

  function openDraft(values: ConsultationFormValues) {
    const subject = `AI Consultation request — ${industryLabels[values.industry]}`;
    const body = [
      `Name: ${values.name}`,
      `Email: ${values.email}`,
      `Company: ${values.company}`,
      `Job Title: ${values.jobTitle}`,
      `Industry: ${industryLabels[values.industry]}`,
      `Company Size: ${companySizeLabels[values.companySize]}`,
      "",
      "Current Business Challenges:",
      values.challenges,
      "",
      `Existing Systems: ${values.existingSystems || "Not provided"}`,
      "",
      `Preferred Meeting Date: ${values.meetingDate}`,
      `Preferred Meeting Time: ${values.meetingTime}`,
      "",
      `Additional Notes: ${values.notes || "Not provided"}`,
    ].join("\n");

    const href = `mailto:${siteConfig.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.assign(href);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-xl border border-border bg-background p-8 text-center">
        <div className="mx-auto mb-4 flex size-16 items-center justify-center rounded-full bg-primary/10">
          <ArrowUpRight className="size-6 text-primary" aria-hidden="true" />
        </div>
        <h3 className="mb-4 text-xl font-bold">Thank you for contacting Gettao</h3>
        <p className="mx-auto max-w-xl leading-relaxed text-muted-foreground">
          Our AI solutions team has received your request and will reach out within one business day to
          schedule your consultation.
        </p>
      </div>
    );
  }

  return (
    <form
      className="grid gap-5"
      noValidate
      onSubmit={handleSubmit(openDraft)}
      aria-label="AI Consultation"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <FormField label="Full Name" error={errors.name?.message} required>
          <Input
            autoComplete="name"
            aria-invalid={Boolean(errors.name)}
            {...register("name")}
          />
        </FormField>
        <FormField label="Work Email" error={errors.email?.message} required>
          <Input
            type="email"
            autoComplete="email"
            aria-invalid={Boolean(errors.email)}
            {...register("email")}
          />
        </FormField>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <FormField label="Company Name" error={errors.company?.message} required>
          <Input
            autoComplete="organization"
            aria-invalid={Boolean(errors.company)}
            {...register("company")}
          />
        </FormField>
        <FormField label="Job Title" error={errors.jobTitle?.message} required>
          <Input
            autoComplete="organization-title"
            aria-invalid={Boolean(errors.jobTitle)}
            {...register("jobTitle")}
          />
        </FormField>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <FormField label="Industry" error={errors.industry?.message} required>
          <select
            className="form-select"
            aria-invalid={Boolean(errors.industry)}
            {...register("industry")}
          >
            {industryValues.map((value) => (
              <option key={value} value={value}>
                {industryLabels[value]}
              </option>
            ))}
          </select>
        </FormField>
        <FormField label="Company Size" error={errors.companySize?.message} required>
          <select
            className="form-select"
            aria-invalid={Boolean(errors.companySize)}
            {...register("companySize")}
          >
            {companySizeValues.map((value) => (
              <option key={value} value={value}>
                {companySizeLabels[value]}
              </option>
            ))}
          </select>
        </FormField>
      </div>

      <FormField label="Current Business Challenges" error={errors.challenges?.message} required>
        <Textarea
          rows={4}
          aria-invalid={Boolean(errors.challenges)}
          placeholder="Describe the challenges your organization is facing and what you'd like to explore with AI."
          {...register("challenges")}
        />
      </FormField>

      <FormField label="Existing Systems (optional)" error={errors.existingSystems?.message}>
        <Input
          placeholder="e.g. Encompass, Salesforce, core banking platform"
          aria-invalid={Boolean(errors.existingSystems)}
          {...register("existingSystems")}
        />
      </FormField>

      <div className="grid gap-5 sm:grid-cols-2">
        <FormField label="Preferred Meeting Date" error={errors.meetingDate?.message} required>
          <Input
            type="date"
            aria-invalid={Boolean(errors.meetingDate)}
            {...register("meetingDate")}
          />
        </FormField>
        <FormField label="Preferred Meeting Time" error={errors.meetingTime?.message} required>
          <Input
            type="time"
            aria-invalid={Boolean(errors.meetingTime)}
            {...register("meetingTime")}
          />
        </FormField>
      </div>

      <FormField label="Additional Notes (optional)" error={errors.notes?.message}>
        <Textarea
          rows={3}
          aria-invalid={Boolean(errors.notes)}
          placeholder="Any additional information you'd like to share."
          {...register("notes")}
        />
      </FormField>

      <div className="flex flex-col items-start gap-3 pt-2 sm:flex-row sm:items-center">
        <Button type="submit" size="lg" className="h-12 px-5">
          Request a Consultation
          <ArrowUpRight aria-hidden="true" />
        </Button>
        <p className="max-w-sm text-sm text-muted-foreground">
          We&apos;ll follow up within one business day.
        </p>
      </div>
    </form>
  );
}

function FormField({
  label,
  error,
  required = false,
  children,
}: {
  label: string;
  error?: string;
  required?: boolean;
  children: ReactElement<{
    id?: string;
    "aria-describedby"?: string;
    "aria-required"?: boolean;
  }>;
}) {
  const id = `field-${label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
  const errorId = `${id}-error`;

  return (
    <div className="grid gap-2">
      <Label htmlFor={id} className="text-sm font-semibold">
        {label}
      </Label>
      {cloneElement(children, {
        id,
        "aria-describedby": error ? errorId : undefined,
        "aria-required": required || undefined,
      })}
      {error ? (
        <p id={errorId} role="alert" className="text-sm text-destructive">
          {error}
        </p>
      ) : null}
    </div>
  );
}
