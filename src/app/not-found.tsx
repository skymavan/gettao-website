import { ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/button";
import { withBasePath } from "@/lib/base-path";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center bg-background px-6 text-foreground">
      <div className="max-w-xl text-center">
        <div className="mx-auto mb-8 flex w-fit items-center gap-2">
          <span className="wordmark">GetTAO</span>
        </div>
        <p className="eyebrow justify-center">404 / Route not found</p>
        <h1 className="font-heading text-5xl font-normal tracking-[-0.03em] sm:text-7xl">
          This path is outside the loop.
        </h1>
        <p className="mx-auto mt-6 max-w-md text-lg text-muted-foreground">
          The page you are looking for does not exist. Return to the homepage to
          explore how GetTAO runs operations autonomously.
        </p>
        <Button asChild size="lg" className="mt-8 h-12 px-5">
          <a href={withBasePath("/")}>
            <ArrowLeft aria-hidden="true" /> Back to GetTAO
          </a>
        </Button>
      </div>
    </main>
  );
}
