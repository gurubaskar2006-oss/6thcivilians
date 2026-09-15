import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Database,
  ShieldCheck,
  Cpu,
  Code2,
  BrainCircuit,
  Car,
  Layout,
  Truck,
  Network,
  LineChart,
  Target,
  Zap,
  Server,
  FileCog,
  ArrowRight,
} from 'lucide-react'
import { AcademyNavbar } from '@/components/academy/navbar'
import { AcademyFooter } from '@/components/academy/footer'

export const metadata: Metadata = {
  title: 'Future-Ready Courses & Career Tracks | EDWTH Academy',
  description:
    'Explore 17 future-ready career tracks and engineering programs across AI, Big Data, Cloud, Autonomous Systems, and Software Engineering.',
}

export default function CoursesPage() {
  const sectionA = [
    {
      title: 'Big Data Specialists',
      desc: 'SQL, Python, distributed computing, Apache Spark, and big data lakehouses.',
      icon: <Database className="w-6 h-6" />,
    },
    {
      title: 'FinTech Engineers',
      desc: 'Financial protocols, transaction security, cloud architectures, and ledger engineering.',
      icon: <Code2 className="w-6 h-6" />,
    },
    {
      title: 'AI & Machine Learning Specialists',
      desc: 'Python, PyTorch, model optimization, fine-tuning, and production MLOps.',
      icon: <BrainCircuit className="w-6 h-6" />,
    },
    {
      title: 'Software & Application Developers',
      desc: 'Modern TypeScript, Next.js, concurrent backend services, and scalable cloud systems.',
      icon: <Layout className="w-6 h-6" />,
    },
    {
      title: 'Security Management Specialists',
      desc: 'Cybersecurity defense, risk governance, vulnerability assessment, and zero-trust.',
      icon: <ShieldCheck className="w-6 h-6" />,
    },
    {
      title: 'Data Warehousing Specialists',
      desc: 'ETL/ELT pipelines, dimensional modeling, BigQuery, Snowflake, and dbt.',
      icon: <Server className="w-6 h-6" />,
    },
    {
      title: 'Autonomous & EV Systems',
      desc: 'Embedded firmware, real-time sensor processing, CAN bus, and EV telematics.',
      icon: <Car className="w-6 h-6" />,
    },
    {
      title: 'UI & UX Product Designers',
      desc: 'Design systems, Figma mastery, user psychology, and interactive prototyping.',
      icon: <Target className="w-6 h-6" />,
    },
    {
      title: 'Logistics & Dispatch Systems Tech',
      desc: 'Fleet telemetry, route optimization algorithms, and digital supply-chain technology.',
      icon: <Truck className="w-6 h-6" />,
    },
    {
      title: 'Internet of Things (IoT) Specialists',
      desc: 'MQTT protocols, sensor nodes, edge computing, and device fleet telemetry.',
      icon: <Network className="w-6 h-6" />,
    },
    {
      title: 'Data Analysts & Applied Scientists',
      desc: 'Statistical inference, exploratory analysis, Python, SQL, and business intelligence.',
      icon: <LineChart className="w-6 h-6" />,
    },
    {
      title: 'Information Security Analysts',
      desc: 'SIEM monitoring, threat hunting, incident response, and network forensics.',
      icon: <ShieldCheck className="w-6 h-6" />,
    },
    {
      title: 'Robotics & Automation Engineers',
      desc: 'ROS2 robotics frameworks, computer vision pipelines, and industrial automation.',
      icon: <Cpu className="w-6 h-6" />,
    },
  ]

  const sectionB = [
    {
      title: 'AI Agent & Automation Engineer',
      desc: 'Autonomous agentic workflows, function-calling, LangChain, and robotic process automation.',
      icon: <Zap className="w-6 h-6" />,
    },
    {
      title: 'AI Solutions Architect',
      desc: 'Enterprise AI topology, multi-model orchestrations, and secure hybrid cloud deployments.',
      icon: <Server className="w-6 h-6" />,
    },
    {
      title: 'Generative AI & LLM Engineer',
      desc: 'Retrieval-Augmented Generation (RAG), vector databases, embedding pipelines, and fine-tuning.',
      icon: <FileCog className="w-6 h-6" />,
    },
    {
      title: 'AI Product Manager',
      desc: 'Translating business opportunities into AI capabilities, roadmap prioritization, and ROI measurement.',
      icon: <Target className="w-6 h-6" />,
    },
  ]

  return (
    <main className="min-h-screen bg-white text-[#1A1A1A] font-sans antialiased selection:bg-[#FF7A18]/20 selection:text-[#1A1A1A]">
      <AcademyNavbar />

      {/* Hero Banner */}
      <section className="bg-[#1A1A1A] py-20 relative overflow-hidden text-white">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#FF7A18]/20 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#FFB347] font-semibold text-xs tracking-wider uppercase mb-5">
            17 Engineering Specializations
          </div>
          <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-white mb-6">
            Future-Ready{' '}
            <span className="bg-gradient-to-r from-[#FF7A18] to-[#FFB347] bg-clip-text text-transparent">
              Courses
            </span>
          </h1>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Programs built around the highest-growth technology careers of 2026&ndash;2030, engineered to equip you with verifiable production skills.
          </p>
        </div>
      </section>

      {/* Courses Sections */}
      <section className="py-20 bg-[#F8EFD8]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section A */}
          <div className="mb-20">
            <div className="flex items-center gap-4 mb-8 pb-4 border-b border-gray-200">
              <div className="w-8 h-8 rounded-full bg-[#FF7A18] flex items-center justify-center text-white font-bold text-sm">
                A
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#1A1A1A]">
                  Fastest-Growing Engineering Roles
                </h2>
                <p className="text-xs sm:text-sm text-gray-500">
                  Essential core disciplines driving modern industry infrastructure
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {sectionA.map((course, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all border border-gray-100 flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-[#FF7A18]/10 text-[#FF7A18] flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-[#FF7A18] group-hover:text-white transition-all">
                      {course.icon}
                    </div>
                    <h3 className="text-lg font-display font-bold text-[#1A1A1A] mb-2 group-hover:text-[#FF7A18] transition-colors">
                      {course.title}
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed mb-6">
                      {course.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-gray-100 mt-auto">
                    <Link
                      href="/academy#contact"
                      className="inline-flex items-center text-xs font-bold text-[#FF7A18] hover:text-[#FFB347] transition-colors gap-1 group/link"
                    >
                      <span>Enquire Track</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section B */}
          <div>
            <div className="flex items-center gap-4 mb-8 pb-4 border-b border-gray-200">
              <div className="w-8 h-8 rounded-full bg-[#1A1A1A] flex items-center justify-center text-white font-bold text-sm">
                B
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#1A1A1A]">
                  Advanced AI & Autonomous Career Paths
                </h2>
                <p className="text-xs sm:text-sm text-gray-500">
                  Cutting-edge agentic workflows, generative systems, and AI product strategy
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {sectionB.map((course, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all border border-gray-100 flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-[#1A1A1A]/10 text-[#1A1A1A] flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-[#FF7A18] group-hover:text-white transition-all">
                      {course.icon}
                    </div>
                    <h3 className="text-lg font-display font-bold text-[#1A1A1A] mb-2 group-hover:text-[#FF7A18] transition-colors">
                      {course.title}
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed mb-6">
                      {course.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-gray-100 mt-auto">
                    <Link
                      href="/academy#contact"
                      className="inline-flex items-center text-xs font-bold text-[#FF7A18] hover:text-[#FFB347] transition-colors gap-1 group/link"
                    >
                      <span>Enquire Track</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <AcademyFooter />
    </main>
  )
}
