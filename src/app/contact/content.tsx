"use client";

import { ArrowUpRight } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

import { ConsultationForm } from "@/components/consultation-form";
import { ContactForm } from "@/components/contact-form";
import { Reveal } from "@/components/motion/reveal";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteConfig } from "@/content/site";

/**
 * Heading, intro and email link. Needs no search params, so it can be
 * prerendered into the static HTML (e.g. as a Suspense fallback).
 */
export function ContactIntro({ isConsultation = false }: { isConsultation?: boolean }) {
  return (
    <Reveal className="access-intro">
      <p className="eyebrow">{isConsultation ? "AI Consultation" : "Contact Us"}</p>
      <h1 id="contact-title">
        {isConsultation ? "Talk to a Gettao AI Expert" : "Get in Touch"}
      </h1>
      {isConsultation ? (
        <>
          <p className="section-lede">
            Discuss your business challenges, explore AI opportunities, review
            implementation strategies, and receive expert guidance from our
            enterprise AI team.
          </p>
          <p className="mt-6 font-semibold">Ready to get started?</p>
        </>
      ) : (
        <p className="section-lede">
          Have a question or want to learn more? Reach out to our team and
          we&apos;ll get back to you.
        </p>
      )}
      <a className="access-email" href={`mailto:${siteConfig.email}`}>
        {siteConfig.email} <ArrowUpRight aria-hidden="true" />
      </a>
    </Reveal>
  );
}

/** Intro + form for either variant. Server-safe (no search params). */
export function ContactBody({
  isConsultation = false,
  industry,
}: {
  isConsultation?: boolean;
  industry?: string;
}) {
  return (
    <>
      <ContactIntro isConsultation={isConsultation} />
      <div className="access-form-wrap">
        {isConsultation ? (
          <ConsultationForm defaultIndustry={industry} statusHeadingLevel={2} />
        ) : (
          <ContactForm statusHeadingLevel={2} />
        )}
      </div>
    </>
  );
}

function ContactBodyFromParams() {
  const searchParams = useSearchParams();
  return (
    <ContactBody
      isConsultation={searchParams.get("type") === "consultation"}
      industry={searchParams.get("industry") ?? undefined}
    />
  );
}

export function ContactPageContent() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main-content">
        <section id="contact" className="section-pad" aria-labelledby="contact-title">
          <div className="site-shell access-grid">
            {/* Only the search-param-dependent part bails out to client rendering;
                the static HTML gets the general contact variant. */}
            <Suspense fallback={<ContactBody />}>
              <ContactBodyFromParams />
            </Suspense>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
