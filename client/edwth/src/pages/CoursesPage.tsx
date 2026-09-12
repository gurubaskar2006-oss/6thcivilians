import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, Database, ShieldCheck, Cpu, Code2, BrainCircuit, Car, Layout, Truck, Network, LineChart, Target, Zap, Server, FileCog } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CoursesPage() {
  useEffect(() => {
    document.title = "Courses | EdWth Academy";
  }, []);

  const sectionA = [
    { title: 'Big Data Specialists', desc: 'SQL, Python, data platforms, distributed processing', icon: <Database /> },
    { title: 'FinTech Engineers', desc: 'APIs, cloud, financial technology, security', icon: <Code2 /> },
    { title: 'AI and Machine Learning Specialists', desc: 'Python, ML/DL, LLMs, MLOps', icon: <BrainCircuit /> },
    { title: 'Software and Applications Developers', desc: 'Programming, cloud, AI integration', icon: <Layout /> },
    { title: 'Security Management Specialists', desc: 'Cybersecurity, risk, governance', icon: <ShieldCheck /> },
    { title: 'Data Warehousing Specialists', desc: 'SQL, ETL/ELT, cloud warehouses', icon: <Server /> },
    { title: 'Autonomous and Electric Vehicle Specialists', desc: 'Embedded software, sensors, EV systems', icon: <Car /> },
    { title: 'UI and UX Designers', desc: 'Research, prototyping, human-AI interaction design', icon: <Target /> },
    { title: 'Light Truck or Delivery Services Drivers', desc: 'Logistics, route planning, delivery tech', icon: <Truck /> },
    { title: 'Internet of Things Specialists', desc: 'IoT protocols, embedded systems, networking', icon: <Network /> },
    { title: 'Data Analysts and Scientists', desc: 'Python/R, SQL, statistics, ML', icon: <LineChart /> },
    { title: 'Information Security Analysts', desc: 'SIEM, threat analysis, incident response', icon: <ShieldCheck /> },
    { title: 'Robotics Engineers', desc: 'Robotics, computer vision, AI/ML, automation', icon: <Cpu /> }
  ];

  const sectionB = [
    { title: 'AI Agent / Automation Engineer', desc: 'Agentic workflows, tool-calling, process automation', icon: <Zap /> },
    { title: 'AI Solutions Architect', desc: 'AI + cloud + enterprise systems architecture', icon: <Server /> },
    { title: 'Generative AI Engineer', desc: 'LLMs, RAG, multimodal AI', icon: <FileCog /> },
    { title: 'AI Product Manager', desc: 'Product strategy for AI-powered products', icon: <Target /> }
  ];

  const CourseCard = ({ course, index }: { course: any, index: number }) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ y: -5 }}
      className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md hover:shadow-xl hover:shadow-brand-orange/10 transition-all border border-gray-100 dark:border-gray-700 flex flex-col group"
    >
      <div className="w-12 h-12 rounded-xl bg-brand-orange/10 text-brand-orange flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
        {course.icon}
      </div>
      <h3 className="text-xl font-heading font-bold text-brand-charcoal dark:text-white mb-2 group-hover:text-brand-orange transition-colors">
        {course.title}
      </h3>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 flex-grow">
        {course.desc}
      </p>
      
      <div className="pt-4 border-t border-gray-100 dark:border-gray-700 mt-auto">
        <Link to="/#contact" className="inline-flex items-center text-sm font-bold text-brand-charcoal dark:text-white hover:text-brand-orange dark:hover:text-brand-orange transition-colors">
          Enquire <span className="ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">→</span>
        </Link>
      </div>
    </motion.div>
  );

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="bg-brand-charcoal py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-parchment-pattern opacity-10 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-orange/20 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-heading font-extrabold text-white mb-6"
          >
            Future-Ready <span className="text-gradient">Courses</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-brand-parchmentLight max-w-2xl mx-auto mb-10"
          >
            Programs built around the fastest-growing careers of tomorrow, designed to equip you with the most in-demand skills in tech and AI.
          </motion.p>
        </div>
      </section>

      {/* Courses Sections */}
      <section className="py-24 bg-brand-parchmentLight dark:bg-gray-900 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-20">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-8 h-8 rounded-full bg-brand-orange flex items-center justify-center text-white font-bold text-sm">A</div>
              <h2 className="text-3xl font-heading font-bold text-brand-charcoal dark:text-white">Fastest-Growing Roles</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {sectionA.map((course, i) => (
                <CourseCard key={i} course={course} index={i} />
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-4 mb-10">
              <div className="w-8 h-8 rounded-full bg-brand-charcoal dark:bg-gray-700 flex items-center justify-center text-white font-bold text-sm">B</div>
              <h2 className="text-3xl font-heading font-bold text-brand-charcoal dark:text-white">Additional AI Career Paths</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {sectionB.map((course, i) => (
                <CourseCard key={i} course={course} index={i} />
              ))}
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
