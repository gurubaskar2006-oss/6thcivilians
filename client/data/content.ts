/**
 * 6th Civilians Corporation — Single source of truth for corporate site data & copy.
 * Strictly focused on IT, Software, AI, Cloud, and Technology Engineering.
 * Educational programs are strictly isolated to EDWTH Academy.
 */

import type { LucideIcon } from 'lucide-react'
import {
  Code2,
  Globe,
  AppWindow,
  Smartphone,
  Layers,
  Cpu,
  Bot,
  Sparkles,
  BrainCircuit,
  Database,
  Cloud,
  ShieldCheck,
  Workflow,
  Server,
  BarChart3,
  Building2,
  Stethoscope,
  GraduationCap,
  Boxes,
  Plug,
  GitBranch,
  Network,
  Lock,
  Search,
  PenTool,
  Radio,
  FileCheck,
  Zap,
} from 'lucide-react'

export const brand = {
  name: '6th Civilians Corporation',
  shortName: '6th Civilians Corp',
  tagline: 'Custom Software · Applied AI · Cloud Architecture · Engineering Talent',
  headline: 'Building technology for what comes next.',
  subheadline:
    '6th Civilians Corporation builds custom software, practical AI workflows, cloud infrastructure, and technical talent for modern businesses.',
  email: 'sixthciviliansoffical@gmail.com',
  academy: {
    name: 'EDWTH Academy',
    division: 'Education Division',
    url: process.env.NEXT_PUBLIC_ACADEMY_URL || 'https://academy.6thcivilians.com/',
    tagline: 'Education, Training & Talent Development',
    description:
      'EDWTH Academy is our dedicated education division, providing practical, project-based training to prepare developers for industry engineering.',
  },
  gambit: {
    name: 'Team Gambit',
    division: 'Strategic Outreach',
    url: '/pr-team',
    tagline: 'Strategic Communications & External Outreach',
    description:
      'Team Gambit manages public relations, brand storytelling, and strategic partnerships across our ecosystem.',
  },
  social: {
    linkedin: 'https://www.linkedin.com/in/sixth-civilians-3a2768432/',
    instagram: 'https://www.instagram.com/_6th_civilians_?utm_source=qr&igsh=MWluMjhzMnA1MzN6cA=',
    facebook: 'https://www.facebook.com/profile.php?id=61591930262686&sfnsn=wiwspwa&mibextid=RUbZ1f',
    youtube: '#',
    twitter: '#',
  },
}

export const nav = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Projects', href: '#projects' },
  { label: 'Company', href: '#company' },
  { label: 'Contact', href: '#contact' },
]

export type CapabilityItem = {
  title: string
  description: string
  icon: LucideIcon
}

export type CapabilityGroup = {
  id: string
  number: string
  category: string
  tagline: string
  items: CapabilityItem[]
}

export const capabilityGroups: CapabilityGroup[] = [
  {
    id: 'software-engineering',
    number: '01',
    category: 'Software Engineering',
    tagline: 'Reliable, mission-critical systems built on disciplined engineering.',
    items: [
      {
        title: 'Web Applications',
        description:
          'High-performance, responsive web platforms built with modern frontend frameworks, real-time interactivity, and enterprise scalability.',
        icon: Globe,
      },
      {
        title: 'Enterprise Applications',
        description:
          'Custom operational systems, internal tooling, ERP integrations, and workflow software built for organizational resilience.',
        icon: Building2,
      },
      {
        title: 'Custom Software',
        description:
          'Bespoke software systems designed from first principles to address exact business logic, data models, and operational needs.',
        icon: Code2,
      },
      {
        title: 'API Development & Integration',
        description:
          'High-throughput REST and GraphQL endpoints, distributed microservices, and secure third-party enterprise integrations.',
        icon: Plug,
      },
      {
        title: 'Backend Systems',
        description:
          'Robust, concurrent backend services, event-driven pipelines, and distributed data layers engineered for zero downtime.',
        icon: Server,
      },
    ],
  },
  {
    id: 'ai-intelligent-systems',
    number: '02',
    category: 'AI & Intelligent Systems',
    tagline: 'Applied machine intelligence that delivers measurable operational value.',
    items: [
      {
        title: 'Artificial Intelligence',
        description:
          'Custom algorithmic solutions and intelligent data processing tailored to organizational domain problems.',
        icon: BrainCircuit,
      },
      {
        title: 'Machine Learning',
        description:
          'Supervised and unsupervised learning models for classification, forecasting, predictive analytics, and anomaly detection.',
        icon: Cpu,
      },
      {
        title: 'Generative AI & LLM Systems',
        description:
          'Domain-adapted large language model applications, retrieval-augmented generation (RAG), and autonomous agent workflows.',
        icon: Sparkles,
      },
      {
        title: 'Intelligent Applications',
        description:
          'Software products featuring embedded adaptive behavior, semantic search, and context-aware capabilities.',
        icon: Bot,
      },
      {
        title: 'Automation & Workflow Intelligence',
        description:
          'End-to-end business process automation, document intelligence, and robotic process orchestration.',
        icon: Workflow,
      },
    ],
  },
  {
    id: 'digital-products',
    number: '03',
    category: 'Digital Products',
    tagline: 'Engaging digital touchpoints engineered for clarity and user adoption.',
    items: [
      {
        title: 'Product Development',
        description:
          'Full-lifecycle product engineering from technical discovery and MVP prototyping to production scaling.',
        icon: AppWindow,
      },
      {
        title: 'SaaS Platforms',
        description:
          'Multi-tenant cloud SaaS architectures with automated billing, tenancy isolation, and granular role management.',
        icon: Layers,
      },
      {
        title: 'UI/UX Engineering',
        description:
          'Systematic design tokens, accessible design systems, and fluid interaction design prioritizing usability and speed.',
        icon: PenTool,
      },
      {
        title: 'Mobile Applications',
        description:
          'Native and cross-platform mobile experiences for iOS and Android with offline-first synchronization.',
        icon: Smartphone,
      },
      {
        title: 'Digital Experiences',
        description:
          'High-converting, interactive digital portals and marketing web platforms engineered for brand authority.',
        icon: Zap,
      },
    ],
  },
  {
    id: 'cloud-infrastructure',
    number: '04',
    category: 'Cloud & Infrastructure',
    tagline: 'Secure, elastic cloud environments engineered for high availability.',
    items: [
      {
        title: 'Cloud Solutions',
        description:
          'Modern multi-cloud architectures across AWS, Google Cloud, and Microsoft Azure tailored to cost and uptime targets.',
        icon: Cloud,
      },
      {
        title: 'Deployment & CI/CD',
        description:
          'Automated deployment pipelines, preview environments, and immutable release cycles for predictable delivery.',
        icon: GitBranch,
      },
      {
        title: 'DevOps & Containerization',
        description:
          'Infrastructure-as-code, Docker containerization, Kubernetes orchestration, and continuous observability.',
        icon: Boxes,
      },
      {
        title: 'Security & Compliance',
        description:
          'Hardened network boundaries, automated secrets management, data encryption, and vulnerability assessment.',
        icon: Lock,
      },
      {
        title: 'System Architecture',
        description:
          'High-availability topologies, disaster recovery planning, caching strategies, and global content delivery.',
        icon: Network,
      },
    ],
  },
  {
    id: 'technology-consulting',
    number: '05',
    category: 'Technology Consulting',
    tagline: 'Strategic engineering guidance to accelerate digital initiatives.',
    items: [
      {
        title: 'Digital Transformation',
        description:
          'Roadmapping legacy system modernization, digital capability enablement, and agile engineering workflows.',
        icon: BarChart3,
      },
      {
        title: 'Technical Consulting',
        description:
          'Independent code audits, technology stack evaluation, scalability assessments, and performance profiling.',
        icon: Search,
      },
      {
        title: 'Architecture Strategy',
        description:
          'End-to-end technical blueprints, schema design, and integration roadmaps built for enterprise longevity.',
        icon: FileCheck,
      },
      {
        title: 'Enterprise Technology Advisory',
        description:
          'Fractional CTO guidance, vendor due diligence, and enterprise governance frameworks for engineering organizations.',
        icon: ShieldCheck,
      },
      {
        title: 'Data Architecture & BI',
        description:
          'Centralized data warehousing, ETL pipelines, and real-time executive intelligence dashboards.',
        icon: Database,
      },
    ],
  },
]

export type Industry = {
  id: string
  title: string
  description: string
  icon: LucideIcon
  applications: string[]
}

export const industries: Industry[] = [
  {
    id: 'enterprise-operations',
    title: 'Enterprise & Operations',
    description:
      'Custom operational portals, automated ERP/CRM workflows, and high-throughput internal software.',
    icon: Building2,
    applications: ['Custom ERP/CRM Systems', 'Process Automation', 'Executive Dashboards'],
  },
  {
    id: 'edtech-platforms',
    title: 'Education Technology',
    description:
      'Scalable learning management systems, assessment engines, and institutional academic technology platforms.',
    icon: GraduationCap,
    applications: ['LMS Architectures', 'Assessment Engines', 'Institutional Portals'],
  },
  {
    id: 'healthcare-systems',
    title: 'Healthcare & Life Sciences',
    description:
      'Secure clinical workflows, teleconsultation infrastructure, and patient-centric digital record platforms.',
    icon: Stethoscope,
    applications: ['Clinic Management', 'Secure Data Systems', 'Diagnostic Tooling'],
  },
  {
    id: 'digital-platforms',
    title: 'Digital Platforms & SaaS',
    description:
      'Multi-tenant cloud architectures, subscription software, and high-growth digital marketplaces.',
    icon: Layers,
    applications: ['Multi-Tenant SaaS', 'Marketplace Platforms', 'Billing & Entitlements'],
  },
  {
    id: 'industrial-embedded',
    title: 'Industrial & Connected Systems',
    description:
      'Sensor-to-cloud telemetry systems, real-time IoT monitoring, and industrial device supervisory platforms.',
    icon: Radio,
    applications: ['IoT Telemetry', 'Fleet Tracking', 'Hardware-Cloud Bridges'],
  },
  {
    id: 'deep-tech-computing',
    title: 'High-Performance & Emerging Tech',
    description:
      'Frontier computational pipelines, simulation environments, and data-intensive analytical systems.',
    icon: Cpu,
    applications: ['Algorithmic Modeling', 'Simulation Engines', 'High-Concurrency Computing'],
  },
]

export type Project = {
  id: string
  title: string
  category: string
  clientOrDomain: string
  description: string
  highlights: string[]
  tags: string[]
  url?: string
}

export const projects: Project[] = [
  {
    id: 'telemetry-dashboard',
    title: 'Industrial Fleet & Telemetry Platform',
    category: 'Cloud Architecture & IoT Systems',
    clientOrDomain: 'Connected Infrastructure',
    description:
      'A real-time telemetry processing platform engineered for connected device fleets, providing live sensor data aggregation, anomaly detection, and operational analytics.',
    highlights: [
      'High-throughput message streaming with fault-tolerant event processing',
      'Live metric visualization with low-latency client rendering',
      'Role-based access control and fleet diagnostics reporting',
    ],
    tags: ['Distributed Systems', 'Cloud Infrastructure', 'Real-Time APIs', 'Data Visualization'],
  },
  {
    id: 'conversational-automation',
    title: 'Intelligent Enterprise Automation Engine',
    category: 'AI & Machine Intelligence',
    clientOrDomain: 'Operational Workflow',
    description:
      'An intelligent workflow automation system utilizing natural language understanding and machine learning to classify incoming inquiries, automate triage, and route organizational tasks.',
    highlights: [
      'Domain-adapted NLP pipeline for automated context extraction',
      'Seamless bi-directional integration with enterprise CRM endpoints',
      'Significant reduction in manual inquiry routing turnaround time',
    ],
    tags: ['Natural Language Processing', 'Machine Learning', 'API Integrations', 'Workflow Engine'],
  },
  {
    id: 'saas-core-platform',
    title: 'Multi-Tenant SaaS Foundation Architecture',
    category: 'Enterprise Software Engineering',
    clientOrDomain: 'Cloud Platform',
    description:
      'A modular, multi-tenant cloud application core engineered with isolated workspace partitions, automated provisioning, and strict enterprise security controls.',
    highlights: [
      'Row-level security and schema-separated tenancy architecture',
      'Automated CI/CD deployment pipelines with zero-downtime database migrations',
      'Comprehensive audit logging and role-based permissions matrix',
    ],
    tags: ['Multi-Tenancy', 'PostgreSQL', 'Docker', 'Microservices'],
  },
]

export const processSteps = [
  {
    step: '01',
    title: 'Discover',
    tagline: 'Requirements & Architecture Definition',
    description:
      'We analyze business objectives, user requirements, and technical constraints to establish a verified technical blueprint.',
  },
  {
    step: '02',
    title: 'Design',
    tagline: 'System Architecture & Interface Specification',
    description:
      'We architect the data models, system boundaries, and user interfaces using first principles of engineering and usability.',
  },
  {
    step: '03',
    title: 'Engineer',
    tagline: 'Rigorous Implementation & Verification',
    description:
      'We write type-safe, maintainable software with automated test coverage, strict peer review, and continuous integration.',
  },
  {
    step: '04',
    title: 'Deploy',
    tagline: 'Zero-Downtime Release & Monitoring',
    description:
      'We orchestrate secure cloud deployments, configure observability pipelines, and validate performance under load.',
  },
  {
    step: '05',
    title: 'Evolve',
    tagline: 'Continuous Optimization & Scaling',
    description:
      'We monitor production metrics, iterate based on real usage data, and expand capabilities as enterprise needs scale.',
  },
]

export type Founder = {
  name: string
  title: string
  role: string
  bio: string
  photo?: string
  linkedin?: string
  portfolio?: string
}

export const founders: Founder[] = [
  {
    name: 'Sarath Abimanyu',
    title: 'Founder & CEO',
    role: 'Executive Leadership',
    bio: 'Directs the corporate vision, strategic growth, and overarching technology initiatives across all engagements.',
    photo: '/images/Sarath Abimanyu.jpeg',
    linkedin: 'https://www.linkedin.com/in/sarath-abimanyu-0b02a9426/',
  },
  {
    name: 'Guruprasad',
    title: 'Co-founder & CTO',
    role: 'Technical Architecture',
    bio: 'Oversees engineering standards, core systems architecture, technology evaluation, and technical execution.',
    photo: '/images/Guruprasad.jpeg',
    linkedin: 'https://www.linkedin.com/in/guruprasad-b-74420135a',
  },
  {
    name: 'Stanly Rumald F',
    title: 'Co-founder & COO',
    role: 'Operations & Delivery',
    bio: 'Manages operational delivery, client coordination, cross-functional execution, and institutional relationships.',
    photo: '/images/Stanly.jpeg',
    linkedin: 'https://www.linkedin.com/in/stanly-rumald-4406222ba',
  },
  {
    name: 'Abitha',
    title: 'Project Manager',
    role: 'Project Delivery',
    bio: 'Orchestrates project workflows, sprint planning, and delivery milestones across engineering squads.',
    photo: '/images/Abitha.jpeg',
    linkedin: 'https://www.linkedin.com/in/abitha-s-8295ba359/',
  },
  {
    name: 'Manikandan',
    title: 'Product Manager',
    role: 'Product Strategy',
    bio: 'Drives product roadmaps, requirements definition, and feature alignment with client strategic goals.',
    photo: '/images/mani.jpeg',
    linkedin: 'https://www.linkedin.com/in/manikandan-t-9b5a88359?utm_source=share_via&utm_content=profile&utm_medium=member_android',
  },
  {
    name: 'Sarveshwaran',
    title: 'QA Lead',
    role: 'Quality Assurance',
    bio: 'Maintains rigorous testing standards, automation pipelines, and delivery quality across all releases.',
    photo: '/images/sarvesh.jpeg',
    linkedin: 'https://www.linkedin.com/in/sarveshwar-s-839895318?utm_source=share_via&utm_content=profile&utm_medium=member_ios',
  },
  {
    name: 'Magesh',
    title: 'Director',
    role: 'Strategic Initiatives',
    bio: 'Steers long-term strategic initiatives, organizational governance, and enterprise development.',
    photo: '/images/magesh.jpeg',
    linkedin: 'https://www.linkedin.com/in/b-magesh-6515333b1/',
  },
  {
    name: 'Hemanth Sachin',
    title: 'Team Gambit Lead',
    role: 'Public Relations',
    bio: 'Crafts the voice and strategic communications that connect the corporate story to audiences and institutional partners.',
    photo: '/images/sachin.jpeg',
  },
  {
    name: 'Santhosh',
    title: 'Team Gambit Lead',
    role: 'Public Relations',
    bio: 'Bridges trust between institutions and the ecosystem, establishing enduring strategic relationships.',
    photo: '/images/santhosh.jpeg',
  },
]

export const corporatePillars = [
  {
    title: 'Enterprise-Grade Engineering',
    description:
      'We adhere to rigorous software engineering disciplines: strict typing, modular architectures, automated testing, and comprehensive documentation.',
  },
  {
    title: 'Applied Machine Intelligence',
    description:
      'We implement practical AI and machine learning systems focused on tangible operational workflows, data automation, and business ROI.',
  },
  {
    title: 'Resilient Infrastructure',
    description:
      'We design cloud topologies built for high uptime, elastic scaling, secure perimeter control, and disaster resilience.',
  },
  {
    title: 'Long-Term Partnership',
    description:
      'We operate as an embedded technology partner, providing ongoing architectural advisory and continuous system evolution.',
  },
]

export const engagementModels = [
  {
    title: 'Fixed-Scope Delivery',
    description: 'Clearly scoped milestones, deliverables, and timelines for defined engineering solutions.',
  },
  {
    title: 'Dedicated Engineering Squad',
    description: 'Embedded, high-velocity engineering squad integrated directly into your product workflows.',
  },
  {
    title: 'Technical Advisory & Retainer',
    description: 'Continuous architectural consulting, code auditing, DevOps support, and system maintenance.',
  },
]

export const projectTypes = [
  'Custom Software & Web Platforms',
  'Enterprise Applications & ERPs',
  'AI & Machine Learning Solutions',
  'Cloud Infrastructure & DevOps',
  'Mobile Application Development',
  'Technology Architecture & Consulting',
]


