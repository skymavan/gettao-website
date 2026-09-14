import { ArrowLeft } from "lucide-react";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import { withBasePath } from "@/lib/base-path";

export default function NotFound() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <SiteHeader />
      <main
        id="main-content"
        className="grid min-h-[80svh] place-items-center bg-background px-6 pb-16 pt-32 text-foreground"
      >
        <div className="max-w-xl text-center">
          <p className="eyebrow justify-center">404 / Page not found</p>
          <h1 className="text-5xl font-semibold tracking-[-0.02em] sm:text-6xl">
            We couldn&apos;t find that page.
          </h1>
          <p className="mx-auto mt-6 max-w-md text-lg text-muted-foreground">
            The link may be out of date. Head back to the homepage to explore Gettao&apos;s
            AI solutions for mortgage, banking, and insurance.
          </p>
          <Button asChild variant="accent" size="lg" className="mt-8 h-12 px-6 text-base">
            <a href={withBasePath("/")}>
              <ArrowLeft aria-hidden="true" /> Back to Gettao
            </a>
          </Button>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
