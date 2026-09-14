import { ArrowUpRight } from "lucide-react";

import { ClosingCta } from "@/components/closing-cta";
import { ContactForm } from "@/components/contact-form";
import { FaqSection } from "@/components/faq-section";
import { HeroCopy } from "@/components/hero-copy";
import { HeroVisual } from "@/components/hero-visual";
import { ProcessList } from "@/components/process-list";
import { PrincipleList } from "@/components/principle-list";
import { SiteFooter } from "@/components/site-footer";
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
          <div className="site-shell hero-inner">
            <HeroCopy accessUrl={accessUrl} />
            <HeroVisual />
          </div>
        </section>

        {/* Who we serve */}
        <section className="section-pad border-b border-border bg-muted/30" aria-labelledby="serve-title">
          <div className="site-shell text-center">
            <Reveal>
              <p className="eyebrow justify-center">Who we serve</p>
              <h2 id="serve-title" className="mb-4 text-center">Built for the Financial Industry</h2>
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
                description="Purpose-built for regulated financial work, with people kept in control of every consequential decision."
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
            <ul className="grid list-none gap-4 p-0 sm:grid-cols-2 lg:grid-cols-4">
              {resources.items.map((item) => (
                <li key={item} className="rounded-lg border border-border bg-background p-5 text-center font-medium">
                  {item}
                </li>
              ))}
            </ul>
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
                  Everything you need to know about Gettao&apos;s enterprise AI platform for financial services.
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

      <SiteFooter />

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
      <h3 className="mb-3 text-xl font-semibold text-primary">{industry.title}</h3>
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
      <h3 className="mb-3 text-lg font-semibold text-primary">{feature.title}</h3>
      <p className="text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
    </article>
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
