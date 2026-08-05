import type { Metadata } from "next";
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
  title: "AI Solutions for Banks | Intelligent Banking Automation | Gettao",
  description:
    "Empower your bank with enterprise AI to automate operations, detect fraud, enhance customer service, improve compliance, and accelerate decision-making with Gettao.",
  alternates: { canonical: `${siteConfig.canonicalUrl}solutions/banking` },
  openGraph: {
    title: "AI Solutions for Banks | Gettao",
    description:
      "Empower your bank with enterprise AI to automate operations, detect fraud, enhance customer service, and accelerate decision-making.",
  },
};

const challenges = [
  {
    title: "Rising Customer Expectations",
    description:
      "Customers expect instant service, personalized recommendations, and seamless digital experiences across every channel.",
  },
  {
    title: "Fraud & Financial Crime",
    description:
      "Fraud schemes continue to evolve, making early detection and prevention more critical than ever.",
  },
  {
    title: "Regulatory Compliance",
    description:
      "Banks must meet strict compliance requirements while maintaining operational efficiency.",
  },
  {
    title: "Legacy Systems",
    description:
      "Many institutions rely on disconnected systems that slow down operations and create data silos.",
  },
  {
    title: "Manual Processes",
    description:
      "Routine administrative work limits employee productivity and increases operational costs.",
  },
  {
    title: "Data Overload",
    description:
      "Banks generate massive amounts of customer, transaction, and operational data that often go underutilized.",
  },
];

const solutions = [
  {
    title: "AI Customer Service",
    description: "Deliver faster, more personalized support with AI-powered virtual assistants.",
    capabilities: [
      "24/7 customer support",
      "Account inquiries",
      "Loan information",
      "FAQs",
      "Intelligent routing",
      "Personalized assistance",
    ],
    benefits: [
      "Faster response times",
      "Improved customer satisfaction",
      "Reduced support workload",
      "Consistent service quality",
    ],
  },
  {
    title: "Fraud Detection & Monitoring",
    description: "Identify suspicious activities and support fraud investigation with AI-driven insights.",
    capabilities: [
      "Transaction monitoring",
      "Pattern recognition",
      "Anomaly detection",
      "Risk scoring",
      "Alert prioritization",
    ],
    benefits: [
      "Faster fraud detection",
      "Reduced financial losses",
      "Improved investigation efficiency",
      "Stronger customer protection",
    ],
  },
  {
    title: "Intelligent Compliance",
    description: "Simplify compliance processes through automation and continuous monitoring.",
    capabilities: [
      "Policy validation",
      "Regulatory checks",
      "Document verification",
      "Audit support",
      "Exception management",
    ],
    benefits: [
      "Reduced compliance effort",
      "Better audit readiness",
      "Lower operational risk",
      "Consistent governance",
    ],
  },
  {
    title: "AI Workflow Automation",
    description: "Automate repetitive banking operations across departments.",
    capabilities: [
      "Customer onboarding",
      "KYC document processing",
      "Internal approvals",
      "Account servicing",
      "Case management",
      "Back-office operations",
    ],
  },
  {
    title: "Decision Intelligence",
    description: "Support business teams with AI-powered insights.",
    capabilities: [
      "Customer analytics",
      "Operational dashboards",
      "Predictive forecasting",
      "Risk assessment",
      "Trend analysis",
    ],
  },
];

const processSteps = [
  { step: "1", text: "Connect Gettao with your existing banking systems." },
  { step: "2", text: "AI securely analyzes documents, transactions, and operational data." },
  { step: "3", text: "Intelligent workflows automate repetitive processes." },
  { step: "4", text: "Employees receive AI-assisted recommendations and insights." },
  { step: "5", text: "Customers benefit from faster, more personalized banking experiences." },
];

const whyGettao = [
  { title: "Secure by Design", description: "Enterprise-grade security helps protect customer data and critical banking operations." },
  { title: "Seamless Integration", description: "Works alongside your existing core banking systems, CRMs, and enterprise applications." },
  { title: "Responsible AI", description: "AI provides recommendations and insights while keeping people in control of final decisions." },
  { title: "Scalable Platform", description: "Expand from a single workflow to enterprise-wide automation as your organization grows." },
];

const integrations = [
  "Core Banking Platforms",
  "CRM Systems",
  "Identity Verification Services",
  "Document Management Systems",
  "Payment Platforms",
  "Microsoft 365",
  "Salesforce",
  "AWS",
  "Microsoft Azure",
  "Google Cloud",
  "REST APIs",
];

export default function BankingPage() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <SiteHeader />
      <main id="main-content">
        {/* Hero */}
        <section className="section-pad" aria-labelledby="banking-hero-title">
          <div className="site-shell text-center">
            <Reveal>
              <p className="eyebrow">Banking AI Solutions</p>
              <h1 id="banking-hero-title" className="hero-title mx-auto max-w-4xl">
                Build Smarter, Faster, and More Secure Banking Operations
              </h1>
              <p className="mx-auto mt-6 max-w-3xl text-muted-foreground">
                Gettao helps financial institutions modernize operations with enterprise AI that automates
                workflows, augments employee decision-making, and enables secure, scalable digital transformation.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <a href="#contact" className="group/button inline-flex shrink-0 items-center justify-center rounded-full border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 bg-primary text-primary-foreground hover:bg-primary/80 gap-1.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 h-12 px-5">
                  Book a Demo <ArrowUpRight aria-hidden="true" />
                </a>
                <a href={internalHref("/contact?type=consultation&industry=banking")} className="group/button inline-flex shrink-0 items-center justify-center rounded-full border bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 border-border bg-background hover:bg-muted hover:text-foreground gap-1.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 h-12 px-5">
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
                The Future of Banking Is Intelligent
              </h2>
              <div className="mx-auto max-w-4xl space-y-4 text-muted-foreground">
                <p>
                  Modern banking requires more than digital tools — it requires intelligent systems that can
                  analyze data, automate repetitive work, and deliver actionable insights in real time.
                </p>
                <p>
                  Gettao&apos;s AI platform helps banks streamline internal operations, improve customer
                  interactions, strengthen risk management, and accelerate business decisions without replacing
                  existing core banking systems.
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
                Challenges Facing Today&apos;s Banks
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
                Enterprise AI for Modern Banking
              </h2>
            </Reveal>
            <div className="grid gap-10">
              {solutions.map((sol, i) => (
                <BankingSolutionBlock key={sol.title} solution={sol} index={i} />
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
                How Gettao Works
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
                Deliver Better Banking Outcomes
              </h2>
            </Reveal>
            <StaggerGroup className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                "Improve operational efficiency",
                "Accelerate customer onboarding",
                "Reduce manual processing",
                "Enhance fraud detection",
                "Strengthen compliance",
                "Improve employee productivity",
                "Deliver better customer experiences",
                "Scale operations confidently",
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

        {/* Why Gettao */}
        <section className="section-pad" aria-labelledby="why-title">
          <div className="site-shell">
            <Reveal>
              <p className="eyebrow">Why Gettao</p>
              <h2 id="why-title" className="mb-6">
                Built for Financial Institutions
              </h2>
            </Reveal>
            <StaggerGroup className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
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
        <section className="section-pad border-y border-border bg-muted/30" aria-labelledby="integrations-title">
          <div className="site-shell">
            <Reveal>
              <p className="eyebrow">Integrations</p>
              <h2 id="integrations-title" className="mb-6">
                Gettao Integrates With Your Existing Stack
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
        <section className="section-pad" aria-labelledby="faq-title">
          <div className="site-shell faq-grid">
            <Reveal>
              <div>
                <p className="eyebrow">FAQ</p>
                <h2 id="faq-title">Frequently asked questions.</h2>
                <p className="section-lede">
                  Everything you need to know about Gettao for banking.
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
              <h2 id="access-title">Transform Banking with Enterprise AI</h2>
              <p className="section-lede">
                Empower your teams, strengthen security, improve customer experiences, and modernize banking
                operations with Gettao&apos;s enterprise AI platform.
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

function BankingSolutionBlock({ solution, index }: { solution: (typeof solutions)[number]; index: number }) {
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
            {solution.capabilities.map((item) => (
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
