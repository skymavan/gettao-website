"use client";

import { ArrowUpRight } from "lucide-react";
import { useSearchParams } from "next/navigation";

import { ConsultationForm } from "@/components/consultation-form";
import { SiteHeader } from "@/components/site-header";
import { Reveal } from "@/components/motion/reveal";
import { siteConfig } from "@/content/site";

export function ContactPageContent() {
  const searchParams = useSearchParams();
  const type = searchParams.get("type");
  const isConsultation = type === "consultation";
  const industryParam = searchParams.get("industry") ?? undefined;

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <SiteHeader />
      <main id="main-content">
        <section className="section-pad" aria-labelledby="contact-title">
          <div className="site-shell access-grid">
            <Reveal className="access-intro">
              <p className="eyebrow">
                {isConsultation ? "AI Consultation" : "Contact Us"}
              </p>
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
            <div className="access-form-wrap">
              {isConsultation ? (
                <ConsultationForm defaultIndustry={industryParam} />
              ) : (
                <p className="text-sm text-muted-foreground">
                  For general inquiries, please email{" "}
                  <a href={`mailto:${siteConfig.email}`} className="underline underline-offset-2 hover:text-primary">
                    {siteConfig.email}
                  </a>
                  .
                </p>
              )}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
