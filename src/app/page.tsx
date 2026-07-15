import { ArrowUpRight } from "lucide-react";

import { CapabilityList } from "@/components/capability-list";
import { ClosingCta } from "@/components/closing-cta";
import { ContactForm } from "@/components/contact-form";
import { FaqSection } from "@/components/faq-section";
import { HeroCopy } from "@/components/hero-copy";
import { HeroRoute } from "@/components/hero-route";
import { HeroVisual } from "@/components/hero-visual";
import { PricingGrid } from "@/components/pricing-grid";
import { PrincipleList } from "@/components/principle-list";
import { ProcessList } from "@/components/process-list";
import { SiteHeader } from "@/components/site-header";
import { SystemRoute } from "@/components/system-route";
import { Reveal } from "@/components/motion/reveal";
import {
  siteConfig,
  useCases,
  whyGetTAO,
} from "@/content/site";
import { createStructuredData } from "@/lib/structured-data";

export default function Home() {
  const schema = JSON.stringify(createStructuredData()).replace(/</g, "\\u003c");
  const accessUrl = siteConfig.accessUrl ?? "#access";

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <SiteHeader />

      <main id="main-content">
        <section id="top" className="hero-section" aria-labelledby="hero-title">
          <HeroVisual />
          <div className="site-shell hero-inner">
            <HeroCopy accessUrl={accessUrl} />
          </div>
          <HeroRoute />
        </section>

        <section id="capabilities" className="section-pad" aria-labelledby="capabilities-title">
          <div className="site-shell">
            <Reveal>
              <SectionHeading
                eyebrow="What it does"
                title="Capabilities that run your operations."
                description="GetTAO is built around three capabilities that work together: autonomous agents do the work, connected workflows move it across your tools, and human control keeps every consequential decision with a person."
                id="capabilities-title"
              />
            </Reveal>
            <CapabilityList accessUrl={accessUrl} />
          </div>
        </section>

        <section id="why-gettao" className="operations-section section-pad" aria-labelledby="why-title">
          <div className="site-shell operations-grid">
            <div className="operations-visual" aria-label="The operating loop">
              <p className="route-kicker">The operating loop</p>
              <SystemRoute />
            </div>

            <Reveal className="operations-copy">
              <p className="eyebrow">Why GetTAO</p>
              <h2 id="why-title">
                Autonomy you can observe and reverse.
              </h2>
              <p className="section-lede">
                An operator, not a copilot. GetTAO runs the repetitive work
                inside guardrails you define, pauses for a person whenever a
                decision matters, and records every action so nothing is ever a
                black box.
              </p>
              <PrincipleList items={whyGetTAO} />
            </Reveal>
          </div>
        </section>

        <section id="how-it-works" className="section-pad" aria-labelledby="how-title">
          <div className="site-shell">
            <Reveal>
              <SectionHeading
                eyebrow="How it works"
                title="A loop that keeps running, and keeps learning."
                description="Five stages, repeated continuously. Agents observe your systems, reason about what needs doing, pause for human approval on anything consequential, act across your tools, and feed the outcome back so the next cycle is sharper."
                id="how-title"
              />
            </Reveal>
            <ProcessList />
          </div>
        </section>

        <section id="use-cases" className="section-pad" aria-labelledby="use-cases-title">
          <div className="site-shell">
            <Reveal>
              <SectionHeading
                eyebrow="Where it fits"
                title="Built for the operations that slow teams down."
                description="GetTAO connects to the tools each function already uses. Start with the workflow that hurts the most, then expand as trust and value grow."
                id="use-cases-title"
              />
            </Reveal>
            <PrincipleList items={useCases} ariaLabel="Use cases by team" />
          </div>
        </section>

        <section id="pricing" className="operations-section section-pad" aria-labelledby="pricing-title">
          <div className="site-shell">
            <Reveal>
              <SectionHeading
                eyebrow="Pricing"
                title="Start with one workflow. Scale when you are ready."
                description="Transparent starting points. Every plan includes the operating loop, human approval gates, and a full audit trail. Final pricing is confirmed after we understand your workflows."
                id="pricing-title"
              />
            </Reveal>
            <PricingGrid accessUrl={accessUrl} />
            <p className="pricing-note">
              All prices are starting points in USD. Connect your tools, define your guardrails, and expand from there.
            </p>
          </div>
        </section>

        <section id="faq" className="section-pad" aria-labelledby="faq-title">
          <div className="site-shell faq-grid">
            <Reveal>
              <div>
                <p className="eyebrow">Questions, answered</p>
                <h2 id="faq-title">How autonomous operations actually work.</h2>
                <p className="section-lede">
                  What it does, how approvals work, what it connects to, and what
                  happens when an agent gets it wrong — answered directly.
                </p>
              </div>
            </Reveal>
            <FaqSection />
          </div>
        </section>

        <section id="access" className="access-section section-pad" aria-labelledby="access-title">
          <div className="site-shell access-grid">
            <Reveal className="access-intro">
              <p className="eyebrow">Request access</p>
              <h2 id="access-title">Tell us what should run autonomously.</h2>
              <p className="section-lede">
                Describe the workflow consuming too much time, the system that
                does not connect, or the manual process that should have been
                automated years ago. We will reply with a clear assessment and a
                recommended next step.
              </p>
              <a className="access-email" href={`mailto:${siteConfig.email}`}>
                {siteConfig.email} <ArrowUpRight aria-hidden="true" />
              </a>
            </Reveal>
            <div className="access-form-wrap">
              <ContactForm />
            </div>
          </div>
        </section>

        <ClosingCta accessUrl={accessUrl} />
      </main>

      <footer className="site-footer">
        <Reveal className="site-shell footer-grid">
          <div className="footer-brand-wrap">
            <a href="#top" className="footer-brand">
              GetTAO
            </a>
            <p>Autonomous operations, with a human on the throttle.</p>
            <div className="footer-socials" aria-label="Social links">
              {siteConfig.socialLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  title={link.label}
                >
                  {link.icon === "linkedin" ? (
                    <LinkedInIcon />
                  ) : link.icon === "github" ? (
                    <GitHubIcon />
                  ) : (
                    <XIcon />
                  )}
                </a>
              ))}
            </div>
          </div>
          <nav aria-label="Footer quick actions" className="footer-nav">
            <p className="footer-heading">Quick actions</p>
            <a href="#capabilities">Capabilities</a>
            <a href="#how-it-works">How it works</a>
            <a href="#use-cases">Use cases</a>
            <a href="#pricing">Pricing</a>
            <a href="#faq">FAQ</a>
          </nav>
          <div className="footer-meta">
            <p className="footer-heading">Get in touch</p>
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            <span>Built for operations teams everywhere</span>
          </div>
          <div className="footer-legal">
            <span>© 2026 GetTAO. All rights reserved.</span>
          </div>
        </Reveal>
      </footer>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: schema }}
      />
    </>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M20.45 20.45h-3.56v-5.56c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.95v5.65H9.35V9h3.41v1.56h.05c.48-.9 1.66-1.85 3.42-1.85 3.66 0 4.33 2.41 4.33 5.54v6.2ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM3.56 20.45h3.56V9H3.56v11.45Z"
      />
    </svg>
  );
}

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.66l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117l11.966 15.644Z"
      />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.31.678.921.678 1.856 0 1.34-.012 2.424-.012 2.752 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.523 2 12 2Z"
      />
    </svg>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
  id,
}: {
  eyebrow: string;
  title: string;
  description: string;
  id: string;
}) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2 id={id}>{title}</h2>
      <p>{description}</p>
    </div>
  );
}
