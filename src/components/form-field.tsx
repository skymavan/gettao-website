import { cloneElement, useId, type ReactElement } from "react";

import { Label } from "@/components/ui/label";

type ControlProps = {
  id?: string;
  "aria-describedby"?: string;
  "aria-invalid"?: boolean;
};

export function FormField({
  label,
  error,
  required = false,
  children,
}: {
  label: string;
  error?: string;
  required?: boolean;
  children: ReactElement<ControlProps>;
}) {
  const id = useId();
  const errorId = `${id}-error`;

  return (
    <div className="grid gap-2">
      <Label htmlFor={id} className="text-sm font-semibold">
        {/* One inline run so the accessible name is "Label required", not
            "Labelrequired" (the Label is a flex container). */}
        <span>
          {label}
          {required ? (
            <>
              {" "}
              <span className="sr-only">required</span>
            </>
          ) : null}
        </span>
        {required ? (
          <span aria-hidden="true" className="form-required-marker">
            *
          </span>
        ) : null}
      </Label>
      {cloneElement(children, {
        id,
        "aria-invalid": Boolean(error),
        "aria-describedby": error ? errorId : undefined,
      })}
      {error ? (
        <p id={errorId} className="text-sm text-destructive">
          {error}
        </p>
      ) : null}
    </div>
  );
}

export function RequiredNote() {
  return (
    <p className="text-sm text-muted-foreground">
      <span aria-hidden="true" className="form-required-marker">
        *
      </span>{" "}
      required
    </p>
  );
}

/** One polite announcement for a failed submit instead of one per field. */
export function ErrorSummary({ count }: { count: number }) {
  return (
    <p role="status" aria-live="polite" className="text-sm font-semibold text-destructive">
      {count > 0
        ? `${count} ${count === 1 ? "field needs" : "fields need"} attention`
        : ""}
    </p>
  );
}

/** First field (in visual order) that has an error. */
export function firstInvalid<T extends string>(
  order: readonly T[],
  errors: Partial<Record<T, unknown>>,
): T | undefined {
  return order.find((name) => errors[name]);
}
