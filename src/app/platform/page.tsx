import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";

import { ClosingCta } from "@/components/closing-cta";
import { ContactForm } from "@/components/contact-form";
import { FaqSection } from "@/components/faq-section";
import { SiteHeader } from "@/components/site-header";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/reveal";
import { siteConfig, footerLinks } from "@/content/site";

export const metadata: Metadata = {
  title: "Enterprise AI Platform for Financial Services | Gettao",
  description:
    "Discover the Gettao Enterprise AI Platform built for mortgage lenders, banks, and insurance providers. Automate workflows, accelerate decisions, and scale securely with AI.",
  alternates: { canonical: `${siteConfig.canonicalUrl}platform` },
  openGraph: {
    title: "Enterprise AI Platform for Financial Services | Gettao",
    description:
      "One intelligent platform. Every financial workflow. AI document intelligence, AI agents, workflow automation, and more for financial institutions.",
  },
};

const capabilities = [
  {
    id: "document-intelligence",
    title: "AI Document Intelligence",
    summary: "Transform unstructured documents into structured, actionable information.",
    capabilities: [
      "Intelligent document classification",
      "Data extraction",
      "Document validation",
      "Identity verification",
      "Automated document routing",
      "Compliance checks",
    ],
    benefits: [
      "Reduce manual review",
      "Improve processing speed",
      "Increase accuracy",
      "Lower operational costs",
    ],
  },
  {
    id: "ai-agents",
    title: "AI Agents",
    summary: "Deploy AI-powered assistants that support employees and customers around the clock.",
    useCases: [
      "Customer Support",
      "Internal Knowledge Assistant",
      "Employee Productivity",
      "Operations Support",
      "Process Guidance",
    ],
    benefits: [
      "Faster responses",
      "Improved productivity",
      "Consistent customer experiences",
      "Reduced support workload",
    ],
  },
  {
    id: "workflow-automation",
    title: "Workflow Automation",
    summary: "Automate repetitive processes across every department.",
    examples: [
      "Loan approvals",
      "Claims processing",
      "Customer onboarding",
      "Compliance reviews",
      "Internal approvals",
      "Case management",
    ],
    benefits: [
      "Eliminate bottlenecks",
      "Reduce human error",
      "Increase operational efficiency",
      "Standardize business processes",
    ],
  },
  {
    id: "predictive-intelligence",
    title: "Predictive Intelligence",
    summary: "Turn historical and real-time data into proactive business insights.",
    capabilitiesList: [
      "Risk analysis",
      "Customer insights",
      "Forecasting",
      "Trend analysis",
      "Anomaly detection",
    ],
    benefits: [
      "Better decisions",
      "Improved forecasting",
      "Reduced business risk",
      "Enhanced planning",
    ],
  },
  {
    id: "enterprise-search",
    title: "Enterprise Search",
    summary:
      "Find trusted information instantly across enterprise systems. Instead of searching multiple platforms manually, employees can retrieve accurate answers from internal documents, policies, procedures, and knowledge bases using AI-powered enterprise search.",
    benefits: [
      "Faster information access",
      "Improved employee productivity",
      "Reduced duplicated work",
      "Better decision support",
    ],
  },
] as const;

const whyPlatform = [
  {
    title: "Built for Regulated Industries",
    description:
      "Every capability is designed with the operational and compliance needs of financial institutions in mind.",
  },
  {
    title: "Enterprise Security",
    description:
      "Protect sensitive information using enterprise-grade encryption, access controls, and secure infrastructure.",
  },
  {
    title: "Scalable by Design",
    description:
      "Start with one workflow and expand across departments as your organization grows.",
  },
  {
    title: "Seamless Integration",
    description:
      "Connect with your existing applications, cloud platforms, CRMs, loan origination systems, and internal databases.",
  },
  {
    title: "Faster Time to Value",
    description:
      "Deliver measurable business improvements quickly with streamlined deployment and implementation.",
  },
  {
    title: "Future-Ready AI",
    description:
      "Continuously evolve with new AI capabilities without replacing your existing systems.",
  },
];

const securityFeatures = [
  "End-to-End Encryption",
  "Role-Based Access Control",
  "Multi-Factor Authentication Support",
  "Secure API Gateway",
  "Audit Logs",
  "Data Privacy Controls",
  "Continuous Monitoring",
  "Secure Cloud Deployment",
];

const deploymentOptions = [
  {
    title: "Cloud Deployment",
    description: "Launch quickly using secure cloud infrastructure.",
  },
  {
    title: "Hybrid Deployment",
    description: "Combine cloud services with existing on-premises systems.",
  },
  {
    title: "Enterprise Integration",
    description:
      "Connect seamlessly with your existing business applications without disrupting operations.",
  },
];

const comparisonRows = [
  { traditional: "Manual workflows", gettao: "Intelligent automation" },
  { traditional: "Siloed data", gettao: "Connected enterprise knowledge" },
  { traditional: "Slow decisions", gettao: "AI-assisted decision support" },
  { traditional: "Multiple disconnected tools", gettao: "Unified AI platform" },
  { traditional: "Limited scalability", gettao: "Enterprise-ready architecture" },
];

export default function PlatformPage() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <SiteHeader />

      <main id="main-content">
        {/* Hero */}
        <section className="section-pad" aria-labelledby="platform-hero-title">
          <div className="site-shell text-center">
            <Reveal>
              <p className="eyebrow">Enterprise AI Platform</p>
              <h1 id="platform-hero-title" className="hero-title mx-auto max-w-4xl">
                One Intelligent Platform. Every Financial Workflow.
              </h1>
              <p className="mx-auto mt-6 max-w-3xl text-muted-foreground">
                The Gettao Platform unifies intelligent automation, AI agents, document intelligence,
                predictive analytics, and enterprise search into a single secure platform built for
                financial institutions.
              </p>
              <p className="mx-auto mt-4 max-w-3xl text-muted-foreground">
                Whether you are processing loans, managing banking operations, or streamlining insurance
                claims, Gettao helps your teams move faster, make better decisions, and deliver
                exceptional customer experiences.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <a href="#contact" className="group/button inline-flex shrink-0 items-center justify-center rounded-full border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 bg-primary text-primary-foreground hover:bg-primary/80 gap-1.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 h-12 px-5">
                  Book a Demo <ArrowUpRight aria-hidden="true" />
                </a>
                <a href="#capabilities" className="group/button inline-flex shrink-0 items-center justify-center rounded-full border bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 border-border bg-background hover:bg-muted hover:text-foreground gap-1.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 h-12 px-5">
                  Explore Solutions
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Overview */}
        <section className="section-pad border-y border-border bg-muted/30" aria-labelledby="overview-title">
          <div className="site-shell">
            <Reveal>
              <p className="eyebrow">Platform Overview</p>
              <h2 id="overview-title" className="mb-6">
                Enterprise AI Built for Financial Services
              </h2>
              <div className="mx-auto max-w-4xl space-y-4 text-muted-foreground">
                <p>
                  Financial institutions rely on multiple systems, complex workflows, and strict regulatory
                  requirements. Traditional software often creates disconnected processes, manual work, and
                  operational inefficiencies.
                </p>
                <p>
                  Gettao brings everything together in one intelligent platform. Our platform connects your
                  people, documents, data, and workflows through enterprise-grade AI — enabling organizations
                  to automate repetitive tasks, uncover insights, and improve decision-making at scale.
                </p>
                <p>
                  Whether deployed for mortgage lending, banking, or insurance, Gettao adapts to your existing
                  technology ecosystem without disrupting day-to-day operations.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Why Gettao Platform */}
        <section className="section-pad" aria-labelledby="why-platform-title">
          <div className="site-shell">
            <Reveal>
              <p className="eyebrow">Why the Gettao Platform</p>
              <h2 id="why-platform-title" className="mb-6">
                Designed for Modern Financial Organizations
              </h2>
            </Reveal>
            <StaggerGroup className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {whyPlatform.map((item) => (
                <StaggerItem key={item.title}>
                  <article className="rounded-lg border border-border bg-background p-6">
                    <h3 className="mb-3 text-lg font-bold text-primary">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                  </article>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </section>

        {/* Core Capabilities */}
        <section id="capabilities" className="section-pad border-y border-border bg-muted/30" aria-labelledby="capabilities-title">
          <div className="site-shell">
            <Reveal>
              <p className="eyebrow">Core Platform Capabilities</p>
              <h2 id="capabilities-title" className="mb-6">
                One Platform. Every Capability You Need.
              </h2>
            </Reveal>
            <div className="grid gap-10">
              {capabilities.map((cap, i) => (
                <CapabilityBlock key={cap.id} feature={cap} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* Architecture */}
        <section className="section-pad" aria-labelledby="architecture-title">
          <div className="site-shell">
            <Reveal>
              <p className="eyebrow">Platform Architecture</p>
              <h2 id="architecture-title" className="mb-6">
                Designed to Fit Your Existing Technology Stack
              </h2>
              <p className="mb-8 max-w-3xl text-muted-foreground">
                The Gettao Platform integrates with the systems your business already depends on.
              </p>
            </Reveal>
            <StaggerGroup className="mb-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {[
                "Loan Origination Systems",
                "Core Banking Platforms",
                "Insurance Management Systems",
                "CRM Platforms",
                "Document Management Systems",
                "Microsoft 365",
                "Salesforce",
                "AWS",
                "Microsoft Azure",
                "Google Cloud",
                "REST APIs",
              ].map((integration) => (
                <StaggerItem key={integration}>
                  <div className="rounded-lg border border-border bg-background px-5 py-3 text-sm font-medium">
                    {integration}
                  </div>
                </StaggerItem>
              ))}
            </StaggerGroup>
            <Reveal>
              <p className="text-center text-sm text-muted-foreground">
                No rip-and-replace strategy. Simply connect, automate, and scale.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Security */}
        <section className="section-pad border-y border-border bg-muted/30" aria-labelledby="platform-security-title">
          <div className="site-shell">
            <Reveal>
              <p className="eyebrow">Enterprise Security</p>
              <h2 id="platform-security-title" className="mb-6">
                Security at Every Layer
              </h2>
              <p className="mb-8 max-w-3xl text-muted-foreground">
                Trust is essential in financial services. The Gettao Platform is designed to help
                organizations protect sensitive data while supporting governance and compliance requirements.
              </p>
            </Reveal>
            <StaggerGroup className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {securityFeatures.map((feature) => (
                <StaggerItem key={feature}>
                  <div className="flex items-start gap-3 rounded-lg border border-border bg-background p-4">
                    <span className="mt-1.5 size-2 shrink-0 rounded-full bg-primary" />
                    <span className="text-sm font-medium">{feature}</span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </section>

        {/* Responsible AI */}
        <section className="section-pad" aria-labelledby="responsible-ai-title">
          <div className="site-shell">
            <Reveal>
              <p className="eyebrow">Responsible AI</p>
              <h2 id="responsible-ai-title" className="mb-6">
                AI You Can Trust
              </h2>
              <p className="mb-8 max-w-3xl text-muted-foreground">
                Artificial intelligence should support better decisions — not create uncertainty. Gettao is
                committed to building AI that is transparent, explainable, secure, and aligned with
                responsible business practices.
              </p>
            </Reveal>
            <StaggerGroup className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                "Human Oversight",
                "Explainable AI",
                "Transparent Decision Support",
                "Privacy-First Design",
                "Responsible Data Usage",
                "Continuous Improvement",
              ].map((principle) => (
                <StaggerItem key={principle}>
                  <div className="rounded-lg border border-border bg-background p-5 text-center font-medium">
                    {principle}
                  </div>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </section>

        {/* Deployment */}
        <section className="section-pad border-y border-border bg-muted/30" aria-labelledby="deployment-title">
          <div className="site-shell">
            <Reveal>
              <p className="eyebrow">Deployment</p>
              <h2 id="deployment-title" className="mb-6">
                Flexible Deployment Options
              </h2>
            </Reveal>
            <StaggerGroup className="grid gap-6 md:grid-cols-3">
              {deploymentOptions.map((option) => (
                <StaggerItem key={option.title}>
                  <article className="rounded-lg border border-border bg-background p-6">
                    <h3 className="mb-3 text-lg font-bold text-primary">{option.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{option.description}</p>
                  </article>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </section>

        {/* Business Impact */}
        <section className="section-pad" aria-labelledby="impact-title">
          <div className="site-shell">
            <Reveal>
              <p className="eyebrow">Business Impact</p>
              <h2 id="impact-title" className="mb-6">
                Deliver Measurable Results
              </h2>
              <p className="mb-8 max-w-3xl text-muted-foreground">
                Organizations use Gettao to improve efficiency, accelerate decision-making, and modernize
                financial operations.
              </p>
            </Reveal>
            <StaggerGroup className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                "Faster loan processing",
                "Improved underwriting efficiency",
                "Reduced operational costs",
                "Enhanced customer satisfaction",
                "Better regulatory compliance",
                "Increased employee productivity",
                "Stronger fraud prevention",
                "Scalable AI adoption",
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

        {/* Comparison */}
        <section className="section-pad border-y border-border bg-muted/30" aria-labelledby="comparison-title">
          <div className="site-shell">
            <Reveal>
              <p className="eyebrow">Platform Comparison</p>
              <h2 id="comparison-title" className="mb-8">
                Why Organizations Choose Gettao
              </h2>
            </Reveal>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-left text-sm" aria-label="Why Organizations Choose Gettao">
                <thead>
                  <tr className="border-b border-border">
                    <th className="px-4 py-3 font-semibold text-muted-foreground">Traditional Software</th>
                    <th className="px-4 py-3 font-semibold text-primary">Gettao Platform</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row) => (
                    <tr key={row.traditional} className="border-b border-border last:border-none">
                      <td className="px-4 py-3 text-muted-foreground">{row.traditional}</td>
                      <td className="px-4 py-3 font-medium">{row.gettao}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-pad" aria-labelledby="platform-faq-title">
          <div className="site-shell faq-grid">
            <Reveal>
              <div>
                <p className="eyebrow">FAQ</p>
                <h2 id="platform-faq-title">Frequently asked questions.</h2>
                <p className="section-lede">
                  Everything you need to know about the Gettao Enterprise AI Platform.
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
              <h2 id="access-title">Ready to Build the Future of Financial Operations?</h2>
              <p className="section-lede">
                Modern organizations need more than automation — they need intelligent systems that
                adapt, scale, and deliver measurable business value. With Gettao, you can streamline
                operations, improve decision-making, and accelerate digital transformation through
                enterprise AI.
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
    </>
  );
}

function CapabilityBlock({ feature, index }: { feature: (typeof capabilities)[number]; index: number }) {
  const isReversed = index % 2 === 1;

  return (
    <Reveal>
      <article
        id={feature.id}
        className={`flex flex-col gap-8 ${isReversed ? "md:flex-row-reverse" : "md:flex-row"} items-start rounded-xl border border-border bg-background p-8`}
      >
        <div className="flex-1">
          <h3 className="mb-4 text-2xl font-bold">{feature.title}</h3>
          <p className="mb-6 leading-relaxed text-muted-foreground">{feature.summary}</p>
        </div>
        <div className="flex-1">
          {"capabilities" in feature && feature.capabilities && (
            <ListSection title="Capabilities" items={feature.capabilities} />
          )}
          {"useCases" in feature && feature.useCases && (
            <ListSection title="Use Cases" items={feature.useCases} />
          )}
          {"examples" in feature && feature.examples && (
            <ListSection title="Example Workflows" items={feature.examples} />
          )}
          {"capabilitiesList" in feature && feature.capabilitiesList && (
            <ListSection title="Capabilities" items={feature.capabilitiesList} />
          )}
          <div className="mt-4">
            <p className="mb-2 text-sm font-semibold text-primary">Business Benefits</p>
            <ul className="space-y-1">
              {feature.benefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-2 text-sm">
                  <span className="size-1.5 shrink-0 rounded-full bg-accent" />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

function ListSection({ title, items }: { title: string; items: ReadonlyArray<string> }) {
  return (
    <div className="mb-4">
      <p className="mb-2 text-sm font-semibold text-primary">{title}</p>
      <ul className="space-y-1">
        {items.map((item) => (
          <li key={item} className="flex items-center gap-2 text-sm">
            <span className="size-1.5 shrink-0 rounded-full bg-accent" />
            {item}
          </li>
        ))}
      </ul>
    </div>
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
