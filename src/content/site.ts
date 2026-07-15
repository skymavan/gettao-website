export type SiteConfig = {
  name: string;
  nameLong: string;
  tagline: string;
  canonicalUrl: string;
  email: string;
  accessUrl?: string;
  socialLinks: ReadonlyArray<{ label: string; href: string; icon: "linkedin" | "x" | "github" }>;
};

export type CapabilityId = "autonomous-agents" | "connected-workflows" | "human-control";

export type Capability = {
  id: CapabilityId;
  index: string;
  title: string;
  shortTitle: string;
  description: string;
  useCases: ReadonlyArray<string>;
};

export type LoopStage = {
  index: string;
  title: string;
  description: string;
  human?: boolean;
};

export type PricingTier = {
  id: string;
  index: string;
  name: string;
  price: string;
  cadence: string;
  description: string;
  features: ReadonlyArray<string>;
  featured?: boolean;
  ctaLabel: string;
};

export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export const siteConfig: SiteConfig = {
  name: "GetTAO",
  nameLong: "Get The Autonomous Operations",
  tagline: "Autonomous operations, with a human on the throttle.",
  canonicalUrl: "https://gettao.io/",
  email: "hello@gettao.io",
  accessUrl: "#access",
  socialLinks: [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/company/gettao",
      icon: "linkedin",
    },
    {
      label: "X",
      href: "https://x.com/gettao",
      icon: "x",
    },
    {
      label: "GitHub",
      href: "https://github.com/gettao",
      icon: "github",
    },
  ],
};

export const navigation = [
  { label: "Capabilities", href: "#capabilities" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Use cases", href: "#use-cases" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
] as const;

export const capabilityIds = [
  "autonomous-agents",
  "connected-workflows",
  "human-control",
] as const;

export const capabilities: ReadonlyArray<Capability> = [
  {
    id: "autonomous-agents",
    index: "01",
    title: "Autonomous agents that run your operations",
    shortTitle: "Autonomous Agents",
    description:
      "Purpose-built agents handle the recurring operational work that consumes your team's day — triaging requests, reconciling data, drafting reports, chasing follow-ups. They run on a schedule, inside guardrails you define, and pause for a person whenever a decision matters. Not a copilot you drive, an operator that works while you focus elsewhere.",
    useCases: [
      "Triage and route incoming support and internal requests",
      "Reconcile records across CRM, billing, and databases",
      "Draft and dispatch recurring operational reports",
      "Monitor systems and surface anomalies before they escalate",
      "Chase approvals, follow-ups, and outstanding actions",
    ],
  },
  {
    id: "connected-workflows",
    index: "02",
    title: "Workflows that connect the systems you already use",
    shortTitle: "Connected Workflows",
    description:
      "Operations live in the handoffs between your tools. GetTAO orchestrates work across your CRM, helpdesk, databases, Slack, and email so information moves without manual data entry. Every step is observable, and every handoff is logged — no work lost between systems, no one copy-pasting between tabs.",
    useCases: [
      "Sync and enrich records across CRM, ERP, and billing",
      "Route multi-step approvals to the right person automatically",
      "Triage Slack and email requests into structured actions",
      "Trigger downstream updates across your stack from one event",
      "Bridge legacy systems with modern APIs",
    ],
  },
  {
    id: "human-control",
    index: "03",
    title: "Human control built into every consequential action",
    shortTitle: "Human Control",
    description:
      "Autonomy without control is a liability. GetTAO treats human oversight as a first-class stage, not an afterthought. Confidence thresholds decide what runs on its own and what pauses for review. Approval gates, escalation paths, and instant rollback mean nothing lands unchecked — and nothing is irreversible.",
    useCases: [
      "Configurable approval gates on any consequential action",
      "Confidence thresholds that auto-run safe steps and pause risky ones",
      "Escalation paths that reach the right human, fast",
      "Instant rollback and full audit trail on every action",
      "Role-based control over what agents can touch",
    ],
  },
];

export const whyGetTAO = [
  {
    title: "Runs autonomously, guided by humans",
    description:
      "GetTAO is an operator, not a copilot. Agents do the work on a schedule; a human stays on the throttle for anything that matters.",
  },
  {
    title: "Every action is observable",
    description:
      "No black boxes. Every decision, input, and output is logged in a clear audit trail you can inspect at any time.",
  },
  {
    title: "Nothing is irreversible",
    description:
      "Approved actions can be rolled back. Mistakes are recoverable because the system records what it did and why.",
  },
  {
    title: "Connects to what you already use",
    description:
      "No rip-and-replace. GetTAO works across your existing CRM, helpdesk, databases, Slack, and email from day one.",
  },
  {
    title: "Guardrails by default",
    description:
      "Confidence thresholds, approval gates, and escalation are built in — not bolted on after something goes wrong.",
  },
  {
    title: "Built to evolve",
    description:
      "Swap models, add workflows, and scale across teams without rebuilding. The platform adapts as your operations grow.",
  },
] as const;

export const useCases = [
  {
    title: "Support Operations",
    description:
      "Triage tickets, draft replies, escalate exceptions, and keep response times low while a human approves sensitive responses.",
  },
  {
    title: "Revenue Operations",
    description:
      "Enrich and route leads, sync CRM data, trigger follow-ups, and surface pipeline risks before the quarter slips.",
  },
  {
    title: "Internal Operations",
    description:
      "Handle internal requests, approve access changes, reconcile systems, and keep the back office running without bottlenecks.",
  },
  {
    title: "Finance Operations",
    description:
      "Reconcile invoices, flag anomalies, route approvals, and generate reports with a clear, auditable trail.",
  },
  {
    title: "Data Operations",
    description:
      "Monitor pipelines, validate records, surface anomalies, and trigger remediation when something looks wrong.",
  },
  {
    title: "DevOps & Infrastructure",
    description:
      "Watch systems, triage alerts, draft incident summaries, and run approved remediation so on-call isn't the bottleneck.",
  },
] as const;

export const howItWorks: ReadonlyArray<LoopStage> = [
  {
    index: "01",
    title: "Observe",
    description:
      "Agents monitor your systems, data, and incoming requests continuously, watching for the events and states you care about.",
  },
  {
    index: "02",
    title: "Reason",
    description:
      "They evaluate what needs doing against the rules and outcomes you define, and decide whether an action is safe to run.",
  },
  {
    index: "03",
    title: "Approve",
    human: true,
    description:
      "Consequential actions pause for a human decision. Confidence thresholds decide what runs on its own and what waits for you.",
  },
  {
    index: "04",
    title: "Act",
    description:
      "Approved work executes across your connected tools — CRM, helpdesk, databases, Slack — with every step logged.",
  },
  {
    index: "05",
    title: "Learn",
    description:
      "Outcomes feed back into the loop so the system improves over time, and your guardrails tighten as confidence grows.",
  },
];

export const pricingTiers: ReadonlyArray<PricingTier> = [
  {
    id: "starter",
    index: "01",
    name: "Starter",
    price: "$490",
    cadence: "/mo",
    description: "For a single team automating one core operational workflow.",
    features: [
      "Up to 3 autonomous agents",
      "1 connected workflow",
      "Human approval gates",
      "30-day audit history",
      "Email support",
    ],
    ctaLabel: "Request access",
  },
  {
    id: "scale",
    index: "02",
    name: "Scale",
    price: "$1,490",
    cadence: "/mo",
    description: "For operations teams running several workflows in parallel.",
    features: [
      "Up to 15 autonomous agents",
      "Unlimited connected workflows",
      "Configurable confidence thresholds",
      "90-day audit history",
      "Role-based access control",
      "Priority support",
    ],
    featured: true,
    ctaLabel: "Request access",
  },
  {
    id: "enterprise",
    index: "03",
    name: "Enterprise",
    price: "Custom",
    cadence: "",
    description: "For organizations with security, compliance, and scale needs.",
    features: [
      "Unlimited agents and workflows",
      "SSO and SCIM provisioning",
      "Full audit export and SIEM integration",
      "Custom data residency",
      "Dedicated success engineer",
      "99.9% uptime SLA",
    ],
    ctaLabel: "Talk to us",
  },
];

export const faqItems: ReadonlyArray<FaqItem> = [
  {
    id: "what-is-autonomous",
    question: "What does GetTAO actually do?",
    answer:
      "GetTAO runs business operations autonomously. You connect the systems you already use and define the outcomes and rules you care about; autonomous agents then handle the recurring operational work — triage, reconciliation, reporting, follow-ups — while a human approves every consequential action before it lands.",
  },
  {
    id: "how-approvals-work",
    question: "How do human approvals work?",
    answer:
      "Every workflow has configurable approval gates. You set confidence thresholds that decide which steps an agent can run on its own and which must pause for a person. When a step needs you, GetTAO surfaces the context and waits — and any approved action can be rolled back, so nothing is irreversible.",
  },
  {
    id: "what-connects",
    question: "What systems does GetTAO connect to?",
    answer:
      "GetTAO works across the tools operations teams already use: CRMs, helpdesks, databases, Slack, email, and internal APIs. If a system has an API, GetTAO can usually orchestrate across it. Discovery maps every integration point, including authentication, data formats, and rate limits.",
  },
  {
    id: "data-security",
    question: "How is our data secured?",
    answer:
      "Security is designed in from the start. Data is encrypted in transit and at rest, access is role-based, and every action is written to a tamper-evident audit trail. We never train public models on your data, and Enterprise plans support custom data residency and deployment in your own environment.",
  },
  {
    id: "which-models",
    question: "Which AI models power the agents?",
    answer:
      "Agents are model-agnostic. We select models based on the task and work with leading providers alongside open-source options, so you can swap providers without rebuilding your workflows as the landscape evolves.",
  },
  {
    id: "start-small",
    question: "Can we start with a single workflow?",
    answer:
      "Yes. Most teams start with one painful operational workflow — triage, reconciliation, or reporting — and expand from there. The Starter plan is built for exactly this, and you can add agents and workflows as trust and value grow.",
  },
  {
    id: "when-agent-wrong",
    question: "What happens when an agent gets it wrong?",
    answer:
      "Consequential actions require approval, so a person catches problems before they land. For anything that slips through, GetTAO records exactly what happened and why, and the action can be rolled back. Every mistake is recoverable and inspectable, not hidden.",
  },
];
