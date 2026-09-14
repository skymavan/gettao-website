"use client";

import { useEffect, useRef } from "react";

import { CopyEmail } from "@/components/copy-email";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/content/site";

export type StatusHeadingLevel = 2 | 3;

/**
 * Shown after a mailto form "submit". Nothing has been sent at this point:
 * the visitor's email app was asked to open a prefilled draft.
 */
export function MailtoStatus({
  headingLevel = 3,
  onEdit,
}: {
  headingLevel?: StatusHeadingLevel;
  onEdit: () => void;
}) {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const Heading = headingLevel === 2 ? "h2" : "h3";

  useEffect(() => {
    headingRef.current?.focus();
  }, []);

  return (
    <div role="status" className="form-status grid gap-4">
      <Heading ref={headingRef} tabIndex={-1} className="text-xl font-bold">
        Check your email app
      </Heading>
      <p className="leading-relaxed text-muted-foreground">
        Your email app should have opened with your message ready to send. It
        hasn&apos;t been sent yet: review it and press send. Once it arrives,
        we&apos;ll follow up within one business day.
      </p>
      <p className="leading-relaxed text-muted-foreground">
        If nothing opened, email us directly at{" "}
        <a
          href={`mailto:${siteConfig.email}`}
          className="font-semibold underline underline-offset-2"
        >
          {siteConfig.email}
        </a>
        .
      </p>
      <CopyEmail email={siteConfig.email} />
      <div>
        <Button type="button" variant="ghost" onClick={onEdit}>
          Edit message
        </Button>
      </div>
    </div>
  );
}
