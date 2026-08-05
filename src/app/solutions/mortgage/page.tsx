import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { ClosingCta } from "@/components/closing-cta";
import { ContactForm } from "@/components/contact-form";
import { FaqSection } from "@/components/faq-section";
import { Logo } from "@/components/logo";
import { SiteHeader } from "@/components/site-header";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/reveal";
import { siteConfig, footerLinks } from "@/content/site";
import { internalHref } from "@/lib/base-path";

export const metadata: Metadata = {
  title: "AI Solutions for Mortgage Lenders | Intelligent Mortgage Automation | Gettao",
  description:
    "Accelerate loan origination, automate document processing, streamline underwriting, and improve borrower experiences with Gettao's enterprise AI platform for mortgage lenders.",
  alternates: { canonical: `${siteConfig.canonicalUrl}solutions/mortgage` },
  openGraph: {
    title: "AI Solutions for Mortgage Lenders | Gettao",
    description:
      "Accelerate loan origination, automate document processing, and streamline underwriting with enterprise AI for mortgage lenders.",
  },
};

const challenges = [
  {
    title: "Manual Document Processing",
    description:
      "Income statements, bank statements, tax returns, identity documents, and supporting paperwork require extensive manual review.",
  },
  {
    title: "Slow Loan Approvals",
    description:
      "Disconnected systems and repetitive verification steps delay decisions and increase turnaround times.",
  },
  {
    title: "Underwriting Bottlenecks",
    description:
      "Underwriters spend valuable time gathering information instead of evaluating risk and making lending decisions.",
  },
  {
    title: "Compliance Complexity",
    description:
      "Keeping up with evolving regulations while maintaining complete documentation requires significant operational effort.",
  },
  {
    title: "Customer Expectations",
    description:
      "Borrowers expect digital-first experiences, faster approvals, and timely updates throughout the loan journey.",
  },
  {
    title: "Operational Costs",
    description:
      "Manual workflows consume valuable resources and reduce overall productivity.",
  },
];

const solutions = [
  {
    title: "AI Document Intelligence",
    description: "Automatically classify, extract, validate, and organize mortgage documents.",
    items: [
      "Pay Slips",
      "Bank Statements",
      "Tax Returns",
      "Employment Verification",
      "Identity Documents",
      "Credit Reports",
      "Property Documents",
      "Financial Statements",
    ],
    benefits: [
      "Faster document review",
      "Higher accuracy",
      "Reduced manual effort",
      "Improved compliance",
    ],
  },
  {
    title: "Intelligent Loan Origination",
    description: "Streamline the entire loan application process.",
    items: [
      "Automated application review",
      "Document collection",
      "Missing information detection",
      "Borrower communication",
      "Status tracking",
      "Workflow automation",
    ],
  },
  {
    title: "AI Underwriting Assistant",
    description: "Support underwriters with intelligent recommendations while keeping final decisions in human hands.",
    items: [
      "Financial analysis",
      "Risk indicators",
      "Borrower profile summaries",
      "Document validation",
      "Policy guidance",
      "Intelligent recommendations",
    ],
  },
  {
    title: "Compliance Automation",
    description: "Reduce compliance risk through intelligent verification and automated checks.",
    items: [
      "Required document verification",
      "Policy validation",
      "Audit preparation",
      "Compliance monitoring",
      "Exception management",
    ],
  },
  {
    title: "Borrower Experience",
    description: "Deliver a faster and more transparent lending experience.",
    items: [
      "Instant application updates",
      "AI-powered support assistant",
      "Personalized communication",
      "Self-service document uploads",
      "Intelligent FAQs",
    ],
  },
];

const processSteps = [
  { step: "1", text: "Borrower submits application and supporting documents." },
  { step: "2", text: "AI automatically classifies and extracts relevant information." },
  { step: "3", text: "Missing or inconsistent information is identified instantly." },
  { step: "4", text: "Underwriters receive organized insights instead of raw documents." },
  { step: "5", text: "Compliance checks run automatically." },
  { step: "6", text: "Loans move through approval faster with reduced manual intervention." },
];

const useCases = [
  { title: "Mortgage Loan Origination", description: "Automate repetitive administrative work so loan officers can focus on borrowers." },
  { title: "Income Verification", description: "Extract and validate financial information from supporting documents automatically." },
  { title: "Underwriting Support", description: "Provide underwriters with structured borrower insights, document summaries, and policy guidance." },
  { title: "Closing Preparation", description: "Ensure documentation is complete before closing to reduce delays and last-minute issues." },
  { title: "Customer Support", description: "Deploy AI assistants that answer borrower questions and provide real-time application updates." },
];

const whyGettao = [
  { title: "Industry Expertise", description: "Designed around real mortgage workflows." },
  { title: "Enterprise Security", description: "Protect sensitive borrower information with enterprise-grade security controls." },
  { title: "Responsible AI", description: "AI supports lending decisions while maintaining transparency and human oversight." },
  { title: "Seamless Integration", description: "Integrates with existing loan origination systems, CRMs, and document management platforms." },
  { title: "Faster Time to Value", description: "Deploy quickly and begin improving operational efficiency without replacing your existing systems." },
];

const integrations = [
  "Loan Origination Systems (LOS)",
  "CRM Platforms",
  "Document Management Systems",
  "Identity Verification Services",
  "Core Banking Platforms",
  "Cloud Storage",
  "REST APIs",
];

export default function MortgagePage() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <SiteHeader />
      <main id="main-content">
        {/* Hero */}
        <section className="section-pad" aria-labelledby="mortgage-hero-title">
          <div className="site-shell text-center">
            <Reveal>
              <p className="eyebrow">Mortgage AI Solutions</p>
              <h1 id="mortgage-hero-title" className="hero-title mx-auto max-w-4xl">
                Accelerate Every Stage of the Mortgage Journey with Enterprise AI
              </h1>
              <p className="mx-auto mt-6 max-w-3xl text-muted-foreground">
                Gettao empowers mortgage lenders with enterprise AI that automates repetitive work, supports
                underwriters with intelligent insights, and accelerates loan processing without compromising
                accuracy or compliance.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link href="/#contact" className="group/button inline-flex shrink-0 items-center justify-center rounded-full border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 bg-primary text-primary-foreground hover:bg-primary/80 gap-1.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 h-12 px-5">
                  Book a Demo <ArrowUpRight aria-hidden="true" />
                </Link>
                <a href={internalHref("/contact?type=consultation&industry=mortgage")} className="group/button inline-flex shrink-0 items-center justify-center rounded-full border bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 border-border bg-background hover:bg-muted hover:text-foreground gap-1.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 h-12 px-5">
                  Talk to an AI Expert
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Overview */}
        <section className="section-pad border-y border-border bg-muted/30" aria-labelledby="overview-title">
          <div className="site-shell">
            <Reveal>
              <p className="eyebrow">Overview</p>
              <h2 id="overview-title" className="mb-6">
                Modern Mortgage Operations Need More Than Automation
              </h2>
              <div className="mx-auto max-w-4xl space-y-4 text-muted-foreground">
                <p>
                  Mortgage teams spend countless hours reviewing documents, verifying borrower information,
                  checking compliance requirements, and managing manual workflows.
                </p>
                <p>
                  These repetitive tasks slow down approvals, increase operational costs, and create
                  inconsistent customer experiences.
                </p>
                <p>
                  Gettao combines intelligent automation, AI document processing, predictive analytics, and AI
                  assistants into one platform that helps lenders process loans faster while maintaining quality
                  and regulatory standards.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Challenges */}
        <section className="section-pad" aria-labelledby="challenges-title">
          <div className="site-shell">
            <Reveal>
              <p className="eyebrow">Industry Challenges</p>
              <h2 id="challenges-title" className="mb-6">
                The Challenges Facing Modern Mortgage Lenders
              </h2>
            </Reveal>
            <StaggerGroup className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {challenges.map((c) => (
                <StaggerItem key={c.title}>
                  <article className="rounded-lg border border-border bg-background p-6">
                    <h3 className="mb-3 text-lg font-bold text-primary">{c.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{c.description}</p>
                  </article>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </section>

        {/* Solutions */}
        <section id="solutions" className="section-pad border-y border-border bg-muted/30" aria-labelledby="solutions-title">
          <div className="site-shell">
            <Reveal>
              <p className="eyebrow">Solutions</p>
              <h2 id="solutions-title" className="mb-6">
                Purpose-Built AI for Mortgage Operations
              </h2>
            </Reveal>
            <div className="grid gap-10">
              {solutions.map((sol, i) => (
                <SolutionBlock key={sol.title} solution={sol} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="section-pad" aria-labelledby="process-title">
          <div className="site-shell">
            <Reveal>
              <p className="eyebrow">How It Works</p>
              <h2 id="process-title" className="mb-8">
                How Gettao Transforms the Mortgage Process
              </h2>
            </Reveal>
            <div className="mx-auto max-w-3xl">
              {processSteps.map((step, i) => (
                <Reveal key={step.step}>
                  <div className="flex items-start gap-6">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                      {step.step}
                    </span>
                    <p className="pt-2 text-muted-foreground">{step.text}</p>
                  </div>
                  {i < processSteps.length - 1 && (
                    <div className="ml-5 h-8 border-l-2 border-border" />
                  )}
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Business Impact */}
        <section className="section-pad border-y border-border bg-muted/30" aria-labelledby="impact-title">
          <div className="site-shell">
            <Reveal>
              <p className="eyebrow">Business Impact</p>
              <h2 id="impact-title" className="mb-6">
                Deliver Better Outcomes Across the Lending Lifecycle
              </h2>
            </Reveal>
            <StaggerGroup className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                "Accelerate loan processing",
                "Reduce document review time",
                "Improve underwriting productivity",
                "Increase operational efficiency",
                "Strengthen compliance readiness",
                "Enhance borrower satisfaction",
                "Reduce manual errors",
                "Scale operations without proportionally increasing staffing",
              ].map((outcome) => (
                <StaggerItem key={outcome}>
                  <div className="rounded-lg border border-border bg-background p-5 text-center font-medium">
                    {outcome}
                  </div>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </section>

        {/* Use Cases */}
        <section className="section-pad" aria-labelledby="use-cases-title">
          <div className="site-shell">
            <Reveal>
              <p className="eyebrow">Use Cases</p>
              <h2 id="use-cases-title" className="mb-6">
                Mortgage AI in Action
              </h2>
            </Reveal>
            <StaggerGroup className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {useCases.map((uc) => (
                <StaggerItem key={uc.title}>
                  <article className="rounded-lg border border-border bg-background p-6">
                    <h3 className="mb-3 text-lg font-bold text-primary">{uc.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{uc.description}</p>
                  </article>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </section>

        {/* Why Gettao */}
        <section className="section-pad border-y border-border bg-muted/30" aria-labelledby="why-title">
          <div className="site-shell">
            <Reveal>
              <p className="eyebrow">Why Gettao</p>
              <h2 id="why-title" className="mb-6">
                Built Specifically for Mortgage Lenders
              </h2>
            </Reveal>
            <StaggerGroup className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {whyGettao.map((w) => (
                <StaggerItem key={w.title}>
                  <article className="rounded-lg border border-border bg-background p-6">
                    <h3 className="mb-3 text-lg font-bold text-primary">{w.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{w.description}</p>
                  </article>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </section>

        {/* Integrations */}
        <section className="section-pad" aria-labelledby="integrations-title">
          <div className="site-shell">
            <Reveal>
              <p className="eyebrow">Integrations</p>
              <h2 id="integrations-title" className="mb-6">
                Connect Gettao with Your Mortgage Technology Ecosystem
              </h2>
            </Reveal>
            <StaggerGroup className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {integrations.map((item) => (
                <StaggerItem key={item}>
                  <div className="rounded-lg border border-border bg-background px-5 py-3 text-sm font-medium">
                    {item}
                  </div>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-pad border-y border-border bg-muted/30" aria-labelledby="faq-title">
          <div className="site-shell faq-grid">
            <Reveal>
              <div>
                <p className="eyebrow">FAQ</p>
                <h2 id="faq-title">Frequently asked questions.</h2>
                <p className="section-lede">
                  Everything you need to know about Gettao for mortgage lenders.
                </p>
              </div>
            </Reveal>
            <FaqSection />
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="access-section section-pad" aria-labelledby="access-title">
          <div className="site-shell access-grid">
            <Reveal className="access-intro">
              <p className="eyebrow">Get Started</p>
              <h2 id="access-title">Transform Mortgage Lending with Enterprise AI</h2>
              <p className="section-lede">
                Reduce manual work, accelerate loan approvals, empower underwriting teams, and deliver
                exceptional borrower experiences with Gettao.
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

        <ClosingCta />
      </main>

      <footer className="site-footer">
        <Reveal className="site-shell footer-grid">
          <div className="footer-brand-wrap">
            <a href="#top" className="footer-brand" aria-label="Gettao Home">
              <Logo />
            </a>
            <p>Enterprise AI for Financial Services</p>
            <div className="footer-socials" aria-label="Social links">
              {siteConfig.socialLinks.map((link) => (
                <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label} title={link.label}>
                  {link.icon === "linkedin" ? <LinkedInIcon /> : link.icon === "github" ? <GitHubIcon /> : <XIcon />}
                </a>
              ))}
            </div>
          </div>
          <nav aria-label="Solutions" className="footer-nav">
            <p className="footer-heading">Solutions</p>
            {footerLinks.solutions.map((link) => (
              <a key={link.label} href={internalHref(link.href)}>{link.label}</a>
            ))}
          </nav>
          <nav aria-label="Platform" className="footer-nav">
            <p className="footer-heading">Platform</p>
            {footerLinks.platform.map((link) => (
              <a key={link.label} href={internalHref(link.href)}>{link.label}</a>
            ))}
          </nav>
          <nav aria-label="Resources" className="footer-nav">
            <p className="footer-heading">Resources</p>
            {footerLinks.resources.map((link) => (
              <a key={link.label} href={internalHref(link.href)}>{link.label}</a>
            ))}
          </nav>
          <nav aria-label="Company" className="footer-nav">
            <p className="footer-heading">Company</p>
            {footerLinks.company.map((link) => (
              <a key={link.label} href={internalHref(link.href)}>{link.label}</a>
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
    </>
  );
}

function SolutionBlock({ solution, index }: { solution: (typeof solutions)[number]; index: number }) {
  const isReversed = index % 2 === 1;
  return (
    <Reveal>
      <article className={`flex flex-col gap-8 ${isReversed ? "md:flex-row-reverse" : "md:flex-row"} items-start rounded-xl border border-border bg-background p-8`}>
        <div className="flex-1">
          <h3 className="mb-4 text-2xl font-bold">{solution.title}</h3>
          <p className="mb-6 leading-relaxed text-muted-foreground">{solution.description}</p>
        </div>
        <div className="flex-1">
          <p className="mb-2 text-sm font-semibold text-primary">Capabilities</p>
          <ul className="space-y-1">
            {solution.items.map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm">
                <span className="size-1.5 shrink-0 rounded-full bg-accent" />
                {item}
              </li>
            ))}
          </ul>
          {"benefits" in solution && solution.benefits && (
            <div className="mt-4">
              <p className="mb-2 text-sm font-semibold text-primary">Benefits</p>
              <ul className="space-y-1">
                {solution.benefits.map((b) => (
                  <li key={b} className="flex items-center gap-2 text-sm">
                    <span className="size-1.5 shrink-0 rounded-full bg-accent" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </article>
    </Reveal>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path fill="currentColor" d="M20.45 20.45h-3.56v-5.56c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.95v5.65H9.35V9h3.41v1.56h.05c.48-.9 1.66-1.85 3.42-1.85 3.66 0 4.33 2.41 4.33 5.54v6.2ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM3.56 20.45h3.56V9H3.56v11.45Z" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path fill="currentColor" d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.66l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117l11.966 15.644Z" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path fill="currentColor" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.31.678.921.678 1.856 0 1.34-.012 2.424-.012 2.752 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.523 2 12 2Z" />
    </svg>
  );
}
