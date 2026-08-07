/**
 * 6th Civilians — Single source of truth for all site copy & data.
 * Edit anything here; every section reads from this file.
 */

import type { LucideIcon } from 'lucide-react'
import {
  Code2,
  Globe,
  AppWindow,
  Smartphone,
  PenTool,
  Boxes,
  Plug,
  Cloud,
  BrainCircuit,
  MessageSquareCode,
  ShieldCheck,
  GitBranch,
  Database,
  BarChart3,
  Cpu,
  CircuitBoard,
  Car,
  BatteryCharging,
  Factory,
  Atom,
  LifeBuoy,
  GraduationCap,
  FlaskConical,
  FileText,
  Mail,
  Rocket,
} from 'lucide-react'

export const brand = {
  name: '6th Civilians',
  tagline: 'Quantum · Technology · Reality',
  // Hero headline options — swap freely.
  headline: 'Engineering the Next Reality.',
  headlineAlternates: [
    'Building Tomorrow, Particle by Particle.',
    'Deep Tech, Delivered End to End.',
  ],
  subheadline:
    'A quantum-inspired technology studio delivering end-to-end software, cloud, AI, IoT, and EV solutions — from first principle to production.',
  email: 'sixthciviliansoffical@gmail.com',
  phone: '+1 (000) 000-0000',
  bookingUrl: 'https://calendly.com/your-actual-link',
  // PR Team Website Link
  gambitUrl: '/pr-team',
  social: {
    linkedin: '#',
    instagram: 'https://www.instagram.com/_6th_civilians_?utm_source=qr&igsh=MWluMjhzMnA1MzN6cA=',
    facebook: '#',
    youtube: '#',
    twitter: '#',
  },
}

export const nav = [
  { label: 'Services', href: '#services-panel' },
  { label: 'Team', href: '#team-panel' },
  { label: 'About', href: '#about-panel' },
  { label: 'Contact', href: '#contact-panel' },
]

export const stats = [
  { value: 25, suffix: '+', label: 'Services Offered' },
  { value: 1, suffix: '', label: 'Founder' },
  { value: 8, suffix: '+', label: 'MoU signed' },
  { value: 7, suffix: '', label: 'Co-founders' },
]

export type ServiceItem = {
  title: string
  description: string
  icon: LucideIcon
}

export type ServiceCluster = {
  id: string
  category: string
  items: ServiceItem[]
}

/**
 * Scroll-animation frame ranges assigned to each service cluster.
 * These power the section frame badges and the segmented background mapping.
 */
export const clusterFrameRanges = [
  { from: 542, to: 643 },
  { from: 644, to: 752 },
  { from: 753, to: 874 },
  { from: 875, to: 900 },
]

export const serviceClusters: ServiceCluster[] = [
  {
    id: 'software',
    category: 'Software & Web',
    items: [
      { title: 'Custom Software Development', description: 'Bespoke systems architected around your workflow.', icon: Code2 },
      { title: 'Website Development', description: 'Business, portfolio & e-commerce experiences.', icon: Globe },
      { title: 'Web Application Development', description: 'Scalable, real-time web platforms.', icon: AppWindow },
      { title: 'Mobile App Development', description: 'Native & cross-platform for Android & iOS.', icon: Smartphone },
      { title: 'UI/UX Design', description: 'Interfaces engineered for clarity and delight.', icon: PenTool },
      { title: 'ERP, CRM & Business Apps', description: 'Operations software tailored to your org.', icon: Boxes },
      { title: 'API Development & Integration', description: 'Robust connective tissue between systems.', icon: Plug },
    ],
  },
  {
    id: 'cloud',
    category: 'Cloud, AI & Data',
    items: [
      { title: 'Cloud Solutions', description: 'AWS, Azure & Google Cloud architecture.', icon: Cloud },
      { title: 'AI & Machine Learning', description: 'Models that turn data into decisions.', icon: BrainCircuit },
      { title: 'Chatbot Development', description: 'Conversational agents that actually help.', icon: MessageSquareCode },
      { title: 'Testing & QA', description: 'Quality assurance across the stack.', icon: ShieldCheck },
      { title: 'DevOps & CI/CD', description: 'Automated, reliable delivery pipelines.', icon: GitBranch },
      { title: 'Database Design & Management', description: 'Schemas built to scale and last.', icon: Database },
      { title: 'Data Analytics & BI', description: 'Business intelligence you can act on.', icon: BarChart3 },
    ],
  },
  {
    id: 'hardware',
    category: 'Hardware, IoT & Emerging Tech',
    items: [
      { title: 'IoT & Embedded Systems', description: 'Connected devices, sensor to cloud.', icon: Cpu },
      { title: 'Hardware & Firmware', description: 'Embedded firmware and board design.', icon: CircuitBoard },
      { title: 'EV Technology Solutions', description: 'Electric vehicle systems engineering.', icon: Car },
      { title: 'EV Charging & Smart Energy', description: 'Charging and energy management platforms.', icon: BatteryCharging },
      { title: 'Industrial Automation', description: 'Smart devices and factory automation.', icon: Factory },
      { title: 'Quantum-Inspired Research', description: 'Frontier algorithms for hard problems.', icon: Atom },
    ],
  },
  {
    id: 'growth',
    category: 'Support & Growth',
    items: [
      { title: 'Technical Support & AMC', description: 'Annual maintenance and proactive support.', icon: LifeBuoy },
      { title: 'Internship & Skill Programs', description: 'Hands-on training for emerging talent.', icon: GraduationCap },
      { title: 'Student Project Development', description: 'Guided builds for academic projects.', icon: FlaskConical },
      { title: 'Resume & Portfolio Development', description: 'Positioning that gets you noticed.', icon: FileText },
      { title: 'Business Workspace Setup', description: 'Email and workspace configuration.', icon: Mail },
      { title: 'Startup Tech Consulting', description: 'Strategy from idea to launch.', icon: Rocket },
    ],
  },
]

export type Founder = {
  name: string
  title: string
  bio: string
  // Drop a real headshot here, e.g. '/images/founder.jpg'. Leave empty to use the generated initials avatar.
  photo?: string
  linkedin?: string
  portfolio?: string
}

/**
 * ⚠️ Replace placeholder names/titles/bios with real founder details.
 * Until real headshots exist, leave `photo` undefined to render a
 * branded initials avatar so the layout is fully provable.
 */
export const founders: Founder[] = [
  { name: 'Sarath Abimanyu', title: 'Founder & CEO', bio: 'Sets the vision and leads the studio across all engagements.', photo: '/images/Sarath Abimanyu.jpeg', linkedin: 'https://www.linkedin.com/in/sarath-abimanyu-0b02a9426/' },
  { name: 'Stanly Rumald F', title: 'Co-founder & COO', bio: 'Runs operations and delivery across teams.', photo: '/images/Stanly.jpeg', linkedin: 'https://www.linkedin.com/in/stanly-rumald-4406222ba' },
  { name: 'Guruprasad', title: 'Co-founder & CTO', bio: 'Owns technical architecture and engineering standards.', photo: '/images/Guruprasad.jpeg', linkedin: 'https://www.linkedin.com/in/guruprasad-b-74420135a' },
  { name: 'Abitha', title: 'PROJECT MANAGER', bio: 'Orchestrating project workflows and driving cross-functional success.', photo: '/images/Abitha.jpeg', linkedin: 'https://www.linkedin.com/in/abitha-s-8295ba359/' },
  { name: 'Manikandan', title: 'PRODUCT MANAGER', bio: 'Driving organizational growth and engineering leadership.', photo: '/images/mani.jpeg', linkedin: 'https://www.linkedin.com/in/manikandan-t-9b5a88359?utm_source=share_via&utm_content=profile&utm_medium=member_android' },
  { name: 'Sarveshwaran', title: 'QA Lead', bio: 'Ensuring the highest standards of quality across all deliverables.', linkedin: 'https://www.linkedin.com/in/sarveshwar-s-839895318?utm_source=share_via&utm_content=profile&utm_medium=member_ios' },
  { name: 'Magesh', title: 'DIRECTOR', bio: 'Steering strategic initiatives and operational excellence.', photo: '/images/magesh.jpeg', linkedin: 'https://www.linkedin.com/in/b-magesh-6515333b1/' },
  { name: 'Hemanth Sachin', title: 'Team Gambit Lead', bio: 'Spearheading Team Gambit initiatives and innovation.', photo: '/images/sachin.jpeg', linkedin: 'https://www.linkedin.com/in/hemanth-sachin-508a20362?utm_source=share_via&utm_content=profile&utm_medium=member_android' },
  { name: 'Santhosh', title: 'Team Gambit Lead', bio: 'Empowering Team Gambit to execute high-impact technical solutions.', photo: '/images/santhosh.jpeg', linkedin: 'https://www.linkedin.com/in/santhosh-s-173957381?utm_source=share_via&utm_content=profile&utm_medium=member_android' },
]

export const processSteps = [
  { step: '01', title: 'Discover', description: 'We map the problem space, constraints, and outcomes that matter.' },
  { step: '02', title: 'Design', description: 'Architecture and experience designed around first principles.' },
  { step: '03', title: 'Build', description: 'Rigorous engineering with continuous integration and QA.' },
  { step: '04', title: 'Launch & Support', description: 'Ship, measure, and evolve with ongoing maintenance.' },
]

export const projectTypes = [
  'Software / Web App',
  'Mobile App',
  'AI / Machine Learning',
  'Cloud / DevOps',
  'IoT / Embedded / EV',
  'Consulting / Other',
]

export const engagementModels = [
  {
    title: 'Fixed-Scope',
    description: 'Clear deliverables and timelines for tightly defined outcomes.',
  },
  {
    title: 'Retainer',
    description: 'Ongoing technical partnership and continuous delivery.',
  },
  {
    title: 'Staff Augmentation',
    description: 'Embedded expertise to accelerate your existing teams.',
  },
]

