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
  headline: '6th Civilians — Deep Technology, Software & AI Engineering',
  headlineAlternates: [
    'Engineering the Next Reality.',
    'Building Tomorrow, Particle by Particle.',
    'Deep Tech, Delivered End to End.',
  ],
  subheadline:
    '6th Civilians is a deep-tech engineering studio focused on custom software, artificial intelligence, machine learning, IoT, cloud systems and emerging technology solutions.',
  email: 'sixthciviliansoffical@gmail.com',
  phone: '+1 (000) 000-0000',
  bookingUrl: 'https://calendly.com/your-actual-link',
  // PR Team Website Link
  gambitUrl: 'https://pr.6thcivilians.com/',
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
      { title: 'Custom Software Development', description: 'Custom software systems designed and developed around your business workflows, requirements, and operational needs.', icon: Code2 },
      { title: 'Website Development', description: 'Professional business websites, portfolios, and scalable e-commerce platforms.', icon: Globe },
      { title: 'Web Application Development', description: 'Scalable, real-time web applications and interactive platforms.', icon: AppWindow },
      { title: 'Mobile App Development', description: 'Custom native and cross-platform mobile applications for Android and iOS.', icon: Smartphone },
      { title: 'UI/UX Design', description: 'User interface and experience design engineered for intuitive navigation and business impact.', icon: PenTool },
      { title: 'ERP, CRM & Business Apps', description: 'Custom enterprise operations software, CRM, and ERP systems tailored to your organization.', icon: Boxes },
      { title: 'API Development & Integration', description: 'Robust custom API development and seamless third-party system integrations.', icon: Plug },
    ],
  },
  {
    id: 'cloud',
    category: 'Cloud, AI & Data',
    items: [
      { title: 'Cloud Solutions', description: 'Scalable cloud infrastructure and architecture on AWS, Azure, and Google Cloud.', icon: Cloud },
      { title: 'AI & Machine Learning', description: 'Custom artificial intelligence and machine learning models tailored to your business data.', icon: BrainCircuit },
      { title: 'Chatbot Development', description: 'Intelligent conversational AI and chatbot development for customer support and automation.', icon: MessageSquareCode },
      { title: 'Testing & QA', description: 'Comprehensive software testing and quality assurance across the full technology stack.', icon: ShieldCheck },
      { title: 'DevOps & CI/CD', description: 'Automated DevOps, deployment pipelines, and CI/CD for reliable software delivery.', icon: GitBranch },
      { title: 'Database Design & Management', description: 'Secure database design, optimization, and scalable data management architecture.', icon: Database },
      { title: 'Data Analytics & BI', description: 'Advanced data analytics and business intelligence dashboards for actionable insights.', icon: BarChart3 },
    ],
  },
  {
    id: 'hardware',
    category: 'Hardware, IoT & Emerging Tech',
    items: [
      { title: 'IoT & Embedded Systems', description: 'Internet of Things (IoT) solutions and embedded systems bridging sensors to the cloud.', icon: Cpu },
      { title: 'Hardware & Firmware', description: 'Custom embedded firmware engineering and printed circuit board (PCB) design.', icon: CircuitBoard },
      { title: 'EV Technology Solutions', description: 'Advanced electric vehicle (EV) technology and automotive systems engineering.', icon: Car },
      { title: 'EV Charging & Smart Energy', description: 'Smart EV charging infrastructure and intelligent energy management software platforms.', icon: BatteryCharging },
      { title: 'Industrial Automation', description: 'Smart industrial devices and comprehensive factory automation software systems.', icon: Factory },
      { title: 'Quantum-Inspired Research', description: 'Frontier quantum-inspired algorithms and research for complex computational problems.', icon: Atom },
    ],
  },
  {
    id: 'growth',
    category: 'Support & Growth',
    items: [
      { title: 'Technical Support & AMC', description: 'Proactive technical support and Annual Maintenance Contracts (AMC) for software systems.', icon: LifeBuoy },
      { title: 'Internship & Skill Programs', description: 'Hands-on technical training and internship skill programs for emerging engineering talent.', icon: GraduationCap },
      { title: 'Student Project Development', description: 'Guided technical development and mentorship for complex academic student projects.', icon: FlaskConical },
      { title: 'Resume & Portfolio Development', description: 'Professional resume structuring and technical portfolio development for career growth.', icon: FileText },
      { title: 'Business Workspace Setup', description: 'Professional business email, workspace configuration, and organizational IT setup.', icon: Mail },
      { title: 'Startup Tech Consulting', description: 'Strategic technology consulting for startups, guiding digital products from idea to launch.', icon: Rocket },
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

