import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";

import { ClosingCta } from "@/components/closing-cta";
import { ContactForm } from "@/components/contact-form";
import { FaqSection } from "@/components/faq-section";
import { Button } from "@/components/ui/button";
import { Photo } from "@/components/photo";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/reveal";
import { siteConfig } from "@/content/site";
import { internalHref } from "@/lib/base-path";

export const metadata: Metadata = {
  title: "AI Solutions for Banks | Intelligent Banking Automation | Gettao",
  description:
    "Empower your bank with enterprise AI to automate operations, detect fraud, enhance customer service, improve compliance, and accelerate decision-making with Gettao.",
  alternates: { canonical: `${siteConfig.canonicalUrl}solutions/banking/` },
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
              <h1 id="banking-hero-title" className="subpage-title mx-auto">
                Build Smarter, Faster, and More Secure Banking Operations
              </h1>
              <p className="mx-auto mt-6 max-w-3xl text-muted-foreground">
                Gettao helps financial institutions modernize operations with enterprise AI that automates
                workflows, augments employee decision-making, and enables secure, scalable digital transformation.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Button asChild variant="accent" size="lg" className="h-12 px-6 text-base">
                  <a href="#contact">
                  Book a Demo <ArrowUpRight aria-hidden="true" />
                </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="h-12 px-6 text-base">
                  <a href={internalHref("/contact/?type=consultation&industry=banking")}>
                  Talk to an AI Expert
                </a>
                </Button>
              </div>
            </Reveal>
            <Photo
              name="banking"
              ratio="21 / 9"
              position="center 35%"
              className="subpage-hero-photo"
              sizes="(min-width: 1400px) 1400px, 100vw"
              priority
            />
          </div>
        </section>

        {/* Overview */}
        <section className="section-pad bg-muted/30" aria-labelledby="overview-title">
          <div className="site-shell">
            <Reveal>
              <p className="eyebrow">Overview</p>
              <h2 id="overview-title" className="mb-6">
                The Future of Banking Is Intelligent
              </h2>
              <div className="max-w-3xl space-y-4 text-muted-foreground">
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
                    <h3 className="mb-3 text-lg font-semibold text-primary">{c.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{c.description}</p>
                  </article>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </section>

        {/* Solutions */}
        <section id="solutions" className="section-pad bg-muted/30" aria-labelledby="solutions-title">
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
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                      {step.step}
                    </span>
                    <p className="pt-2 text-muted-foreground">{step.text}</p>
                  </div>
                  {i < processSteps.length - 1 && (
                    <div aria-hidden="true" className="ml-5 h-8 w-px bg-border" />
                  )}
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Business Impact */}
        <section className="section-pad bg-muted/30" aria-labelledby="impact-title">
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
                    <h3 className="mb-3 text-lg font-semibold text-primary">{w.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{w.description}</p>
                  </article>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </section>

        {/* Integrations */}
        <section className="section-pad bg-muted/30" aria-labelledby="integrations-title">
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
        <section id="faq" className="section-pad" aria-labelledby="faq-title">
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

      <SiteFooter />
    </>
  );
}

function BankingSolutionBlock({ solution, index }: { solution: (typeof solutions)[number]; index: number }) {
  const isReversed = index % 2 === 1;
  return (
    <Reveal>
      <article className={`flex flex-col gap-8 ${isReversed ? "md:flex-row-reverse" : "md:flex-row"} items-start rounded-xl border border-border bg-background p-8`}>
        <div className="flex-1">
          <h3 className="mb-4 text-2xl font-semibold">{solution.title}</h3>
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



