import { ArrowUpRight } from "lucide-react";

import { ClosingCta } from "@/components/closing-cta";
import { ContactForm } from "@/components/contact-form";
import { FaqSection } from "@/components/faq-section";
import { HeroCopy } from "@/components/hero-copy";
import { HeroVisual } from "@/components/hero-visual";
import { ProcessList } from "@/components/process-list";
import { PrincipleList } from "@/components/principle-list";
import { SiteHeader } from "@/components/site-header";
import { Reveal } from "@/components/motion/reveal";
import {
  siteConfig,
  industries,
  platformFeatures,
  whyGettao,
  challenges,
  businessImpact,
  security,
  resources,
  footerLinks,
} from "@/content/site";
import { createStructuredData } from "@/lib/structured-data";

export default function Home() {
  const schema = JSON.stringify(createStructuredData()).replace(/</g, "\\u003c");
  const accessUrl = "#contact";

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <SiteHeader />

      <main id="main-content">
        {/* Hero */}
        <section id="top" className="hero-section" aria-labelledby="hero-title">
          <HeroVisual />
          <div className="site-shell hero-inner">
            <HeroCopy accessUrl={accessUrl} />
          </div>
        </section>

        {/* Trusted By */}
        <section className="section-pad border-b border-border bg-muted/30" aria-label="Trusted by the financial industry">
          <div className="site-shell text-center">
            <Reveal>
              <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">Trusted By</p>
              <h2 className="mb-4 text-center">Built for the Financial Industry</h2>
              <p className="mx-auto mb-8 max-w-3xl text-muted-foreground">
                Gettao is purpose-built to support organizations operating in highly regulated financial environments.
                Our AI platform empowers organizations across the financial ecosystem to automate operations, improve accuracy, reduce costs, and deliver exceptional customer experiences.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {["Mortgage Lenders", "Banks", "Credit Unions", "Insurance Providers", "FinTech Companies"].map((item) => (
                  <span key={item} className="rounded-full border border-border bg-background px-5 py-2 text-sm font-medium">
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* Industries */}
        <section id="industries" className="section-pad" aria-labelledby="industries-title">
          <div className="site-shell">
            <Reveal>
              <SectionHeading
                eyebrow="Industries"
                title="AI Solutions Designed for Every Financial Institution"
                description="Every financial organization faces unique operational challenges. Gettao delivers industry-specific AI solutions that integrate seamlessly with your existing systems while helping teams work faster and make smarter decisions."
                id="industries-title"
              />
            </Reveal>
            <div className="grid gap-8 md:grid-cols-3">
              {industries.map((industry) => (
                <IndustryCard key={industry.id} industry={industry} />
              ))}
            </div>
          </div>
        </section>

        {/* Platform */}
        <section id="platform" className="section-pad bg-muted/30" aria-labelledby="platform-title">
          <div className="site-shell">
            <Reveal>
              <SectionHeading
                eyebrow="Platform"
                title="One Enterprise AI Platform. Endless Possibilities."
                description="Gettao brings together intelligent automation, AI agents, document intelligence, and predictive analytics into one secure platform designed specifically for financial services."
                id="platform-title"
              />
            </Reveal>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {platformFeatures.map((feature) => (
                <PlatformCard key={feature.id} feature={feature} />
              ))}
            </div>
          </div>
        </section>

        {/* Challenges */}
        <section id="challenges" className="section-pad border-y border-border" aria-labelledby="challenges-title">
          <div className="site-shell">
            <Reveal>
              <SectionHeading
                eyebrow="Challenges"
                title="Solving the Challenges That Slow Financial Institutions Down"
                description="Financial organizations face increasing operational complexity. Manual processes, disconnected systems, compliance requirements, and growing customer expectations create significant challenges. Gettao helps eliminate these barriers through intelligent automation and enterprise AI."
                id="challenges-title"
              />
            </Reveal>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {challenges.items.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-lg border border-border bg-background p-4">
                  <span className="mt-1.5 size-2 shrink-0 rounded-full bg-accent" />
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="section-pad" aria-labelledby="how-title">
          <div className="site-shell">
            <Reveal>
              <SectionHeading
                eyebrow="How It Works"
                title="From Strategy to Production"
                description="A proven five-stage approach to delivering enterprise AI that drives real results."
                id="how-title"
              />
            </Reveal>
            <ProcessList />
          </div>
        </section>

        {/* Why Gettao */}
        <section id="why-gettao" className="section-pad bg-muted/30" aria-labelledby="why-title">
          <div className="site-shell">
            <Reveal>
              <SectionHeading
                eyebrow="Why Gettao"
                title="Why Financial Institutions Choose Gettao"
                description=""
                id="why-title"
              />
            </Reveal>
            <PrincipleList items={whyGettao} />
          </div>
        </section>

        {/* Business Impact */}
        <section id="impact" className="section-pad border-y border-border" aria-labelledby="impact-title">
          <div className="site-shell">
            <Reveal>
              <SectionHeading
                eyebrow="Business Impact"
                title="AI That Delivers Measurable Results"
                description="Organizations use Gettao to improve operational performance across every stage of their business."
                id="impact-title"
              />
            </Reveal>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {businessImpact.outcomes.map((outcome) => (
                <div key={outcome} className="rounded-lg border border-border bg-background p-5 text-center">
                  <p className="font-semibold">{outcome}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Security */}
        <section id="security" className="section-pad" aria-labelledby="security-title">
          <div className="site-shell">
            <Reveal>
              <SectionHeading
                eyebrow="Security"
                title="Enterprise Security Built Into Everything We Do"
                description="Trust is the foundation of every AI solution we build. Our platform is designed to protect sensitive financial information while supporting enterprise governance and regulatory requirements."
                id="security-title"
              />
            </Reveal>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {security.features.map((feature) => (
                <div key={feature} className="flex items-start gap-3 rounded-lg border border-border bg-muted/30 p-4">
                  <span className="mt-1.5 size-2 shrink-0 rounded-full bg-primary" />
                  <span className="text-sm font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Resources */}
        <section id="resources" className="section-pad bg-muted/30" aria-labelledby="resources-title">
          <div className="site-shell">
            <Reveal>
              <SectionHeading
                eyebrow="Resources"
                title="Insights for the Future of Financial AI"
                description="Stay ahead with expert perspectives on artificial intelligence, automation, and digital transformation in financial services."
                id="resources-title"
              />
            </Reveal>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {resources.items.map((item) => (
                <div key={item} className="rounded-lg border border-border bg-background p-5 text-center font-medium transition-colors hover:border-accent hover:text-accent">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="section-pad" aria-labelledby="faq-title">
          <div className="site-shell faq-grid">
            <Reveal>
              <div>
                <p className="eyebrow">FAQ</p>
                <h2 id="faq-title">Frequently asked questions.</h2>
                <p className="section-lede">
                  Everything you need to know about Gettao's enterprise AI platform for financial services.
                </p>
              </div>
            </Reveal>
            <FaqSection />
          </div>
        </section>

        {/* Contact / Final CTA */}
        <section id="contact" className="access-section section-pad" aria-labelledby="access-title">
          <div className="site-shell access-grid">
            <Reveal className="access-intro">
              <p className="eyebrow">Get Started</p>
              <h2 id="access-title">Transform Financial Operations with Enterprise AI</h2>
              <p className="section-lede">
                Modern financial institutions require intelligent systems that improve efficiency,
                strengthen compliance, and enable faster decision-making. Gettao helps organizations
                embrace AI with confidence through secure, scalable, enterprise-ready solutions.
              </p>
              <p className="mt-6 font-semibold">Ready to see what&apos;s possible?</p>
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
              Gettao
            </a>
            <p>Enterprise AI for Financial Services</p>
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
          <nav aria-label="Solutions" className="footer-nav">
            <p className="footer-heading">Solutions</p>
            {footerLinks.solutions.map((link) => (
              <a key={link.label} href={link.href}>{link.label}</a>
            ))}
          </nav>
          <nav aria-label="Platform" className="footer-nav">
            <p className="footer-heading">Platform</p>
            {footerLinks.platform.map((link) => (
              <a key={link.label} href={link.href}>{link.label}</a>
            ))}
          </nav>
          <nav aria-label="Resources" className="footer-nav">
            <p className="footer-heading">Resources</p>
            {footerLinks.resources.map((link) => (
              <a key={link.label} href={link.href}>{link.label}</a>
            ))}
          </nav>
          <nav aria-label="Company" className="footer-nav">
            <p className="footer-heading">Company</p>
            {footerLinks.company.map((link) => (
              <a key={link.label} href={link.href}>{link.label}</a>
            ))}
          </nav>
          <div className="footer-meta">
            <p className="footer-heading">Get in touch</p>
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            <span>Enterprise AI for Financial Services</span>
          </div>
          <div className="footer-legal">
            <span>&copy; 2026 Gettao. All rights reserved.</span>
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

function IndustryCard({ industry }: { industry: typeof industries[number] }) {
  return (
    <article className="rounded-lg border border-border bg-background p-6">
      <h3 className="mb-3 text-xl font-bold text-primary">{industry.title}</h3>
      <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{industry.description}</p>
      <ul className="space-y-2">
        {industry.useCases.map((useCase) => (
          <li key={useCase} className="flex items-center gap-2 text-sm">
            <span className="size-1.5 shrink-0 rounded-full bg-accent" />
            {useCase}
          </li>
        ))}
      </ul>
    </article>
  );
}

function PlatformCard({ feature }: { feature: typeof platformFeatures[number] }) {
  return (
    <article className="rounded-lg border border-border bg-background p-6">
      <h3 className="mb-3 text-lg font-bold text-primary">{feature.title}</h3>
      <p className="text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
    </article>
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
      {description && <p>{description}</p>}
    </div>
  );
}
