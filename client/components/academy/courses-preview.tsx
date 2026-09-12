'use client'

import { motion } from 'framer-motion'
import { Code, TrendingUp, MonitorSmartphone, ArrowRight, Users, Cloud, Cpu, Shield } from 'lucide-react'
import Link from 'next/link'

export function AcademyCoursesPreview() {
  const courses = [
    {
      title: 'Full-Stack Web Development',
      description: 'Master frontend and backend technologies to build complete, resilient enterprise web applications.',
      icon: <Code className="w-6 h-6 text-blue-600" />,
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80',
      duration: '12 Weeks',
      students: '1.2k',
      rating: '4.9',
    },
    {
      title: 'Data Science & Analytics',
      description: 'Learn to extract actionable insights from big data using Python, SQL, and predictive machine learning models.',
      icon: <TrendingUp className="w-6 h-6 text-emerald-600" />,
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80',
      duration: '16 Weeks',
      students: '850',
      rating: '4.8',
    },
    {
      title: 'UI/UX Design Masterclass',
      description: 'Design intuitive and aesthetic digital experiences with Figma, interaction systems, and modern design principles.',
      icon: <MonitorSmartphone className="w-6 h-6 text-purple-600" />,
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=600&q=80',
      duration: '8 Weeks',
      students: '2.1k',
      rating: '5.0',
    },
    {
      title: 'Cloud Computing Fundamentals',
      description: 'Build scalable, secure infrastructure on AWS and Google Cloud with modern Docker and CI/CD pipelines.',
      icon: <Cloud className="w-6 h-6 text-cyan-600" />,
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80',
      duration: '10 Weeks',
      students: '1.5k',
      rating: '4.7',
    },
    {
      title: 'AI & Machine Learning',
      description: 'Dive deep into neural networks, LLM prompting, agentic frameworks, and production AI application deployment.',
      icon: <Cpu className="w-6 h-6 text-rose-600" />,
      image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=600&q=80',
      duration: '14 Weeks',
      students: '920',
      rating: '4.9',
    },
    {
      title: 'Cybersecurity Bootcamp',
      description: 'Master ethical hacking, defensive network security, threat analysis, and enterprise perimeter defenses.',
      icon: <Shield className="w-6 h-6 text-amber-600" />,
      image: 'https://images.unsplash.com/photo-1510511459019-5d0197411bc6?auto=format&fit=crop&w=600&q=80',
      duration: '12 Weeks',
      students: '1.8k',
      rating: '4.8',
    },
  ]

  return (
    <section id="courses" className="py-24 bg-[#F8EFD8]/40 border-y border-gray-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-14">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-[#1A1A1A] mb-4">
              Our Premier{' '}
              <span className="bg-gradient-to-r from-[#FF7A18] to-[#FFB347] bg-clip-text text-transparent">
                Programs
              </span>
            </h2>
            <p className="text-base text-gray-600">
              Curated curriculum designed by practicing software architects and engineers to fast-track your capabilities.
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <Link
              href="/academy/courses"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#1A1A1A] border border-gray-300 rounded-full font-semibold hover:border-[#FF7A18] hover:text-[#FF7A18] transition-all shadow-xs group text-sm"
            >
              <span>Explore All Courses (17 Tracks)</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all border border-gray-100 flex flex-col h-full group"
            >
              <div className="relative h-48 overflow-hidden bg-gray-100">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute top-4 right-4 w-11 h-11 rounded-2xl flex items-center justify-center backdrop-blur-md bg-white/90 shadow-sm">
                  {course.icon}
                </div>
                <div className="absolute bottom-3 left-4 text-xs font-mono font-semibold text-white bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-md">
                  {course.duration}
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="text-xl font-display font-bold text-[#1A1A1A] mb-2 group-hover:text-[#FF7A18] transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {course.description}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-1.5 text-xs text-gray-500 font-medium">
                    <Users className="w-3.5 h-3.5" />
                    <span>{course.students} enrolled</span>
                  </div>
                  <Link
                    href="/academy#contact"
                    className="inline-flex items-center gap-1 text-sm font-bold text-[#FF7A18] hover:text-[#FFB347] transition-colors"
                  >
                    <span>Enroll Now</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
