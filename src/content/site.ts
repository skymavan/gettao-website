export type SiteConfig = {
  name: string;
  tagline: string;
  canonicalUrl: string;
  email: string;
  socialLinks: ReadonlyArray<{ label: string; href: string; icon: "linkedin" | "x" | "github" }>;
};

export type Industry = {
  id: string;
  title: string;
  description: string;
  useCases: ReadonlyArray<string>;
};

export type PlatformFeature = {
  id: string;
  title: string;
  description: string;
};

export type Stage = {
  index: string;
  title: string;
  description: string;
  human?: boolean;
};

export type Principle = {
  title: string;
  description: string;
};

export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export type IndustryNavItem = {
  id: string;
  label: string;
  description: string;
  href: string;
  icon: string;
};

export type NavigationItem = {
  label: string;
  href: string;
  children?: "industries";
};

export const siteConfig: SiteConfig = {
  name: "Gettao",
  tagline: "Enterprise AI for Financial Services",
  canonicalUrl: "https://www.gettao.ai/",
  email: "hello@gettao.ai",
  socialLinks: [
    { label: "LinkedIn", href: "https://www.linkedin.com/company/gettao", icon: "linkedin" },
    { label: "X", href: "https://x.com/gettao", icon: "x" },
    { label: "GitHub", href: "https://github.com/gettao", icon: "github" },
  ],
};

export const industryNavItems: ReadonlyArray<IndustryNavItem> = [
  {
    id: "mortgage",
    label: "Mortgage AI",
    description: "Accelerate loan origination and automate underwriting.",
    href: "/solutions/mortgage/",
    icon: "landmark",
  },
  {
    id: "banking",
    label: "Banking AI",
    description: "Transform banking operations with intelligent automation.",
    href: "/solutions/banking/",
    icon: "building",
  },
  {
    id: "insurance",
    label: "Insurance AI",
    description: "Automate claims, underwriting, and customer service.",
    href: "/solutions/insurance/",
    icon: "shield",
  },
];

export const navigation: ReadonlyArray<NavigationItem> = [
  { label: "Industries", href: "/#industries", children: "industries" },
  { label: "Platform", href: "/platform/" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Why Gettao", href: "/#why-gettao" },
  { label: "Resources", href: "/#resources" },
  { label: "FAQ", href: "/#faq" },
] as const;

export const hero = {
  badge: "Enterprise AI for Financial Services",
  title: "AI That Powers the Future of Financial Services",
  description:
    "Accelerate lending, modernize banking, and transform insurance operations with secure, enterprise-grade AI solutions designed to automate complex workflows, improve decision-making, and deliver measurable business outcomes.",
  primaryCta: "Book a Demo",
  secondaryCta: "Talk to an AI Expert",
};

export const trustedBy = {
  title: "Built for the Financial Industry",
  description:
    "Gettao is purpose-built to support organizations operating in highly regulated financial environments. Our AI platform empowers organizations across the financial ecosystem to automate operations, improve accuracy, reduce costs, and deliver exceptional customer experiences.",
  industries: [
    "Mortgage Lenders",
    "Banks",
    "Credit Unions",
    "Insurance Providers",
    "FinTech Companies",
  ],
};

export const industries: ReadonlyArray<Industry> = [
  {
    id: "mortgage",
    title: "Mortgage",
    description:
      "Transform the mortgage lifecycle with intelligent automation. From document collection to underwriting, Gettao helps lenders reduce processing time, improve accuracy, and provide borrowers with a faster, more transparent experience.",
    useCases: [
      "Loan Origination",
      "Document Verification",
      "Income Analysis",
      "Underwriting Assistance",
      "Compliance Checks",
      "Customer Communication",
    ],
  },
  {
    id: "banking",
    title: "Banking",
    description:
      "Modern banking requires intelligent operations. Gettao enables banks to automate repetitive processes, improve fraud detection, streamline compliance, and deliver exceptional digital customer experiences.",
    useCases: [
      "Fraud Detection",
      "Customer Support",
      "Regulatory Compliance",
      "Intelligent Workflows",
      "Risk Analysis",
      "Internal Knowledge Search",
    ],
  },
  {
    id: "insurance",
    title: "Insurance",
    description:
      "Improve efficiency across the insurance lifecycle. Automate claims processing, streamline underwriting, accelerate policy servicing, and empower teams with AI-driven insights.",
    useCases: [
      "Claims Automation",
      "Policy Review",
      "Underwriting Assistance",
      "Risk Assessment",
      "Customer Service",
      "Document Intelligence",
    ],
  },
];

export const platformFeatures: ReadonlyArray<PlatformFeature> = [
  {
    id: "document-intelligence",
    title: "AI Document Intelligence",
    description:
      "Automatically classify, extract, validate, and organize financial documents with enterprise-grade accuracy. Reduce manual review while accelerating critical business processes.",
  },
  {
    id: "ai-agents",
    title: "AI Agents",
    description:
      "Deploy intelligent assistants that support customers, employees, and operations 24/7. From answering customer questions to assisting internal teams, AI Agents improve efficiency while maintaining a human-quality experience.",
  },
  {
    id: "workflow-automation",
    title: "Workflow Automation",
    description:
      "Replace repetitive manual processes with intelligent workflows that reduce delays, eliminate bottlenecks, and increase productivity.",
  },
  {
    id: "decision-intelligence",
    title: "Decision Intelligence",
    description:
      "Transform data into actionable insights that help leaders make faster, more confident decisions.",
  },
  {
    id: "predictive-intelligence",
    title: "Predictive Intelligence",
    description:
      "Identify trends, forecast outcomes, detect anomalies, and uncover opportunities before they impact your business.",
  },
  {
    id: "enterprise-search",
    title: "Enterprise Search",
    description:
      "Give employees instant access to trusted information across policies, documents, systems, and internal knowledge using Retrieval-Augmented Generation (RAG).",
  },
];

export const challenges = {
  title: "Solving the Challenges That Slow Financial Institutions Down",
  description:
    "Financial organizations face increasing operational complexity. Manual processes, disconnected systems, compliance requirements, and growing customer expectations create significant challenges. Gettao helps eliminate these barriers through intelligent automation and enterprise AI.",
  items: [
    "Slow loan approvals",
    "Manual document processing",
    "High operational costs",
    "Fraud detection delays",
    "Compliance complexity",
    "Customer support bottlenecks",
    "Inefficient claims processing",
    "Disconnected workflows",
    "Limited operational visibility",
  ],
};

export const howItWorks: ReadonlyArray<Stage> = [
  {
    index: "01",
    title: "Discover",
    description:
      "We begin by understanding your business, workflows, challenges, and strategic objectives.",
  },
  {
    index: "02",
    title: "Design",
    description:
      "Our experts design an AI solution aligned with your operational requirements and business goals.",
  },
  {
    index: "03",
    title: "Build",
    description:
      "We develop secure, scalable AI applications that integrate with your existing technology ecosystem.",
  },
  {
    index: "04",
    title: "Deploy",
    description:
      "Deploy enterprise-ready AI with minimal disruption to your operations.",
  },
  {
    index: "05",
    title: "Optimize",
    description:
      "Continuously monitor, improve, and scale your AI solutions as your organization grows.",
    human: true,
  },
];

export const whyGettao: ReadonlyArray<Principle> = [
  {
    title: "Built for Financial Services",
    description:
      "Our solutions are designed specifically for the operational and regulatory needs of mortgage companies, banks, and insurance providers.",
  },
  {
    title: "Enterprise Security",
    description:
      "Protect sensitive financial data through enterprise-grade security architecture, encryption, and access controls.",
  },
  {
    title: "Responsible AI",
    description:
      "Build trust with transparent AI systems that support explainable and accountable decision-making.",
  },
  {
    title: "Seamless Integration",
    description:
      "Integrate effortlessly with your existing applications, cloud infrastructure, and business systems.",
  },
  {
    title: "Faster Time to Value",
    description:
      "Deliver measurable business impact quickly through streamlined implementation and rapid deployment.",
  },
  {
    title: "Long-Term Partnership",
    description:
      "From strategy and implementation to optimization and growth, we work as an extension of your team.",
  },
];

export const businessImpact = {
  title: "AI That Delivers Measurable Results",
  description:
    "Organizations use Gettao to improve operational performance across every stage of their business.",
  outcomes: [
    "Increase Productivity",
    "Reduce Operational Costs",
    "Accelerate Processing Times",
    "Improve Decision Accuracy",
    "Enhance Customer Experiences",
    "Strengthen Compliance",
    "Scale Operations Efficiently",
    "Empower Employees",
  ],
};

export const security = {
  title: "Enterprise Security Built Into Everything We Do",
  description:
    "Trust is the foundation of every AI solution we build. Our platform is designed to protect sensitive financial information while supporting enterprise governance and regulatory requirements.",
  features: [
    "Enterprise Encryption",
    "Role-Based Access Control",
    "Secure APIs",
    "Audit Logging",
    "Data Privacy",
    "Compliance-Ready Architecture",
    "Responsible AI Governance",
    "Continuous Monitoring",
  ],
};

export const resources = {
  title: "Insights for the Future of Financial AI",
  description:
    "Stay ahead with expert perspectives on artificial intelligence, automation, and digital transformation in financial services.",
  items: [
    "Industry Insights",
    "Whitepapers",
    "AI Implementation Guides",
    "Technology Blogs",
    "Product Updates",
    "Case Studies",
    "Webinars",
    "Best Practices",
  ],
};

export const faqItems: ReadonlyArray<FaqItem> = [
  {
    id: "industries-served",
    question: "What industries does Gettao serve?",
    answer:
      "We specialize in AI solutions for mortgage lenders, banks, credit unions, insurance providers, and financial technology companies.",
  },
  {
    id: "system-integration",
    question: "Can Gettao integrate with our existing systems?",
    answer:
      "Yes. Our solutions integrate seamlessly with enterprise platforms, cloud services, CRMs, document management systems, and APIs.",
  },
  {
    id: "data-security",
    question: "Is our data secure?",
    answer:
      "Absolutely. Security is embedded into every layer of our platform using enterprise best practices including encryption, role-based access control, audit logging, and compliance-ready architecture.",
  },
  {
    id: "custom-solutions",
    question: "Do you build custom AI solutions?",
    answer:
      "Yes. Every implementation is tailored to your organization's workflows, objectives, and technology environment.",
  },
  {
    id: "implementation-timeline",
    question: "How long does implementation take?",
    answer:
      "Implementation timelines depend on project scope. Our phased deployment approach enables organizations to realize value quickly while minimizing operational disruption.",
  },
];

export const finalCta = {
  title: "Transform Financial Operations with Enterprise AI",
  description:
    "Modern financial institutions require intelligent systems that improve efficiency, strengthen compliance, and enable faster decision-making. Gettao helps organizations embrace AI with confidence through secure, scalable, enterprise-ready solutions.",
  tagline: "Ready to see what's possible?",
  primaryCta: "Book a Demo",
  secondaryCta: "Talk to an AI Expert",
};

export const footerLinks = {
  solutions: [
    { label: "Mortgage", href: "/solutions/mortgage/" },
    { label: "Banking", href: "/solutions/banking/" },
    { label: "Insurance", href: "/solutions/insurance/" },
  ],
  platform: [
    { label: "AI Platform", href: "/platform/" },
    { label: "Capabilities", href: "/platform/#capabilities" },
    { label: "How It Works", href: "/#how-it-works" },
    { label: "Security", href: "/#security" },
  ],
  company: [
    { label: "Why Gettao", href: "/#why-gettao" },
    { label: "Resources", href: "/#resources" },
    { label: "FAQ", href: "/#faq" },
    { label: "Contact", href: "/contact/" },
  ],
};
