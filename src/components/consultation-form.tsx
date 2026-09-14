"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowUpRight } from "lucide-react";
import { useState, useSyncExternalStore } from "react";
import { useForm, type FieldErrors } from "react-hook-form";

import {
  ErrorSummary,
  FormField,
  RequiredNote,
  firstInvalid,
} from "@/components/form-field";
import { MailtoStatus, type StatusHeadingLevel } from "@/components/mailto-status";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  buildConsultationMailtoLink,
  consultationFormDefaults,
  consultationFormSchema,
  type ConsultationFormValues,
  teamSizeLabels,
  teamSizeValues,
  todayIsoDate,
  useCaseLabels,
  useCaseValues,
} from "@/lib/contact";

const fieldOrder = [
  "name",
  "email",
  "company",
  "jobTitle",
  "industry",
  "companySize",
  "challenges",
  "existingSystems",
  "meetingDate",
  "meetingTime",
  "notes",
] as const satisfies readonly (keyof ConsultationFormValues)[];

const noopSubscribe = () => () => {};

/**
 * Today's date on the client; undefined during prerender and hydration so the
 * static HTML and first client render match.
 */
function useClientToday(): string | undefined {
  return useSyncExternalStore(noopSubscribe, () => todayIsoDate(), () => undefined);
}

type ConsultationFormProps = {
  defaultIndustry?: string;
  onOpenDraft?: (href: string) => void;
  statusHeadingLevel?: StatusHeadingLevel;
};

export function ConsultationForm({
  defaultIndustry,
  onOpenDraft,
  statusHeadingLevel = 2,
}: ConsultationFormProps) {
  const [draftOpened, setDraftOpened] = useState(false);
  const [summaryCount, setSummaryCount] = useState(0);
  const today = useClientToday();

  const {
    register,
    handleSubmit,
    setFocus,
    formState: { errors },
  } = useForm<ConsultationFormValues>({
    resolver: zodResolver(consultationFormSchema),
    defaultValues: consultationFormDefaults(defaultIndustry),
    mode: "onBlur",
    shouldFocusError: false,
  });

  const errorCount = Object.keys(errors).length;

  function openDraft(values: ConsultationFormValues) {
    setSummaryCount(0);
    const href = buildConsultationMailtoLink(values);
    if (onOpenDraft) {
      onOpenDraft(href);
    } else {
      window.location.assign(href);
    }
    setDraftOpened(true);
  }

  function onInvalid(invalid: FieldErrors<ConsultationFormValues>) {
    setSummaryCount(Object.keys(invalid).length);
    const first = firstInvalid(fieldOrder, invalid);
    if (first) setFocus(first);
  }

  function editMessage() {
    setDraftOpened(false);
    requestAnimationFrame(() => setFocus("name"));
  }

  return (
    <>
      {draftOpened ? (
        <MailtoStatus headingLevel={statusHeadingLevel} onEdit={editMessage} />
      ) : null}
      <form
        className="grid gap-5"
        noValidate
        hidden={draftOpened}
        onSubmit={handleSubmit(openDraft, onInvalid)}
        aria-label="AI Consultation"
      >
        <RequiredNote />
        <div className="grid gap-5 sm:grid-cols-2">
          <FormField label="Full Name" error={errors.name?.message} required>
            <Input autoComplete="name" {...register("name")} />
          </FormField>
          <FormField label="Work Email" error={errors.email?.message} required>
            <Input type="email" autoComplete="email" {...register("email")} />
          </FormField>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <FormField label="Company Name" error={errors.company?.message} required>
            <Input autoComplete="organization" {...register("company")} />
          </FormField>
          <FormField label="Job Title" error={errors.jobTitle?.message} required>
            <Input autoComplete="organization-title" {...register("jobTitle")} />
          </FormField>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <FormField label="Industry" error={errors.industry?.message} required>
            <select className="form-select" {...register("industry")}>
              {useCaseValues.map((value) => (
                <option key={value} value={value}>
                  {useCaseLabels[value]}
                </option>
              ))}
            </select>
          </FormField>
          <FormField label="Company Size" error={errors.companySize?.message} required>
            <select className="form-select" {...register("companySize")}>
              {teamSizeValues.map((value) => (
                <option key={value} value={value}>
                  {teamSizeLabels[value]}
                </option>
              ))}
            </select>
          </FormField>
        </div>

        <FormField
          label="Current Business Challenges"
          error={errors.challenges?.message}
          required
        >
          <Textarea
            rows={4}
            placeholder="Describe the challenges your organization is facing and what you'd like to explore with AI."
            {...register("challenges")}
          />
        </FormField>

        <FormField
          label="Existing Systems (optional)"
          error={errors.existingSystems?.message}
        >
          <Input
            placeholder="e.g. Encompass, Salesforce, core banking platform"
            {...register("existingSystems")}
          />
        </FormField>

        <div className="grid gap-5 sm:grid-cols-2">
          <FormField
            label="Preferred Meeting Date"
            error={errors.meetingDate?.message}
            required
          >
            <Input type="date" min={today} {...register("meetingDate")} />
          </FormField>
          <FormField
            label="Preferred Meeting Time"
            error={errors.meetingTime?.message}
            required
          >
            <Input type="time" {...register("meetingTime")} />
          </FormField>
        </div>

        <FormField label="Additional Notes (optional)" error={errors.notes?.message}>
          <Textarea
            rows={3}
            placeholder="Any additional information you'd like to share."
            {...register("notes")}
          />
        </FormField>

        <ErrorSummary count={summaryCount > 0 ? errorCount : 0} />

        <div className="flex flex-col items-start gap-3 pt-2 sm:flex-row sm:items-center">
          <Button type="submit" size="lg" className="h-12 px-5">
            Request a Consultation
            <ArrowUpRight aria-hidden="true" />
          </Button>
          <p className="max-w-sm text-sm text-muted-foreground">
            Opens a prefilled email in your email app for you to review and send.
          </p>
        </div>
      </form>
    </>
  );
}
