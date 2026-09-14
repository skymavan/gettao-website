"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
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
  buildMailtoLink,
  contactFormDefaults,
  contactFormSchema,
  type ContactFormValues,
  teamSizeLabels,
  teamSizeValues,
  useCaseLabels,
  useCaseValues,
} from "@/lib/contact";

const fieldOrder = [
  "name",
  "email",
  "company",
  "teamSize",
  "useCase",
  "details",
] as const satisfies readonly (keyof ContactFormValues)[];

type ContactFormProps = {
  onOpenDraft?: (href: string) => void;
  /** Heading level for the post-submit panel; match the surrounding outline. */
  statusHeadingLevel?: StatusHeadingLevel;
};

export function ContactForm({ onOpenDraft, statusHeadingLevel = 3 }: ContactFormProps) {
  const [draftOpened, setDraftOpened] = useState(false);
  const [summaryCount, setSummaryCount] = useState(0);

  const {
    register,
    handleSubmit,
    setFocus,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: contactFormDefaults,
    mode: "onBlur",
    shouldFocusError: false,
  });

  const errorCount = Object.keys(errors).length;

  function openDraft(values: ContactFormValues) {
    setSummaryCount(0);
    const href = buildMailtoLink(values);
    if (onOpenDraft) {
      onOpenDraft(href);
    } else {
      window.location.assign(href);
    }
    setDraftOpened(true);
  }

  function onInvalid(invalid: FieldErrors<ContactFormValues>) {
    setSummaryCount(Object.keys(invalid).length);
    const first = firstInvalid(fieldOrder, invalid);
    if (first) setFocus(first);
  }

  function editMessage() {
    setDraftOpened(false);
    // Wait for the form to be visible again before moving focus into it.
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
        aria-label="Book a demo"
      >
        <RequiredNote />
        <div className="grid gap-5 sm:grid-cols-2">
          <FormField label="Name" error={errors.name?.message} required>
            <Input autoComplete="name" {...register("name")} />
          </FormField>
          <FormField label="Work email" error={errors.email?.message} required>
            <Input type="email" autoComplete="email" {...register("email")} />
          </FormField>
        </div>

        <FormField label="Company (optional)" error={errors.company?.message}>
          <Input autoComplete="organization" {...register("company")} />
        </FormField>

        <div className="grid gap-5 sm:grid-cols-2">
          <FormField label="Team size" error={errors.teamSize?.message} required>
            <select className="form-select" {...register("teamSize")}>
              {teamSizeValues.map((value) => (
                <option key={value} value={value}>
                  {teamSizeLabels[value]}
                </option>
              ))}
            </select>
          </FormField>
          <FormField label="Industry" error={errors.useCase?.message} required>
            <select className="form-select" {...register("useCase")}>
              {useCaseValues.map((value) => (
                <option key={value} value={value}>
                  {useCaseLabels[value]}
                </option>
              ))}
            </select>
          </FormField>
        </div>

        <FormField
          label="Tell us about your needs"
          error={errors.details?.message}
          required
        >
          <Textarea
            rows={6}
            placeholder="Describe your institution, the challenges you're facing, and what you'd like to explore."
            {...register("details")}
          />
        </FormField>

        <ErrorSummary count={summaryCount > 0 ? errorCount : 0} />

        <div className="flex flex-col items-start gap-3 pt-2 sm:flex-row sm:items-center">
          <Button type="submit" size="lg" className="h-12 px-5">
            Book a Demo
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
