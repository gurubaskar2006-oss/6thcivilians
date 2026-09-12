import { motion } from 'framer-motion';
import { Code, TrendingUp, MonitorSmartphone, ArrowRight, Clock, Star, Users, Cloud, Cpu, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Courses() {
  const courses = [
    {
      title: 'Full-Stack Web Development',
      description: 'Master frontend and backend technologies to build complete web applications from scratch.',
      icon: <Code className="w-6 h-6" />,
      color: 'bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80',
      duration: '12 Weeks',
      students: '1.2k',
      rating: '4.9'
    },
    {
      title: 'Data Science & Analytics',
      description: 'Learn to extract actionable insights from data using Python, SQL, and machine learning models.',
      icon: <TrendingUp className="w-6 h-6" />,
      color: 'bg-green-50 text-green-600 dark:bg-green-900/20 dark:text-green-400',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80',
      duration: '16 Weeks',
      students: '850',
      rating: '4.8'
    },
    {
      title: 'UI/UX Design Masterclass',
      description: 'Design intuitive and beautiful digital experiences with Figma and modern design principles.',
      icon: <MonitorSmartphone className="w-6 h-6" />,
      color: 'bg-purple-50 text-purple-600 dark:bg-purple-900/20 dark:text-purple-400',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=600&q=80',
      duration: '8 Weeks',
      students: '2.1k',
      rating: '5.0'
    },
    {
      title: 'Cloud Computing Fundamentals',
      description: 'Build scalable and secure infrastructure using AWS, Azure, and modern DevOps practices.',
      icon: <Cloud className="w-6 h-6" />,
      color: 'bg-cyan-50 text-cyan-600 dark:bg-cyan-900/20 dark:text-cyan-400',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80',
      duration: '10 Weeks',
      students: '1.5k',
      rating: '4.7'
    },
    {
      title: 'AI & Machine Learning',
      description: 'Dive deep into neural networks, deep learning, and advanced AI application development.',
      icon: <Cpu className="w-6 h-6" />,
      color: 'bg-rose-50 text-rose-600 dark:bg-rose-900/20 dark:text-rose-400',
      image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=600&q=80',
      duration: '14 Weeks',
      students: '920',
      rating: '4.9'
    },
    {
      title: 'Cybersecurity Bootcamp',
      description: 'Learn ethical hacking, network security, and how to defend against modern cyber threats.',
      icon: <Shield className="w-6 h-6" />,
      color: 'bg-amber-50 text-amber-600 dark:bg-amber-900/20 dark:text-amber-400',
      image: 'https://images.unsplash.com/photo-1510511459019-5d0197411bc6?auto=format&fit=crop&w=600&q=80',
      duration: '12 Weeks',
      students: '1.8k',
      rating: '4.8'
    }
  ];

  return (
    <section id="courses" className="py-24 bg-brand-parchmentLight dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-heading font-bold text-brand-charcoal dark:text-white mb-4"
            >
              Our Premier <span className="text-gradient">Programs</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-gray-600 dark:text-gray-300"
            >
              Curated curriculum designed by industry experts to fast-track your career and unlock your true potential.
            </motion.p>
          </div>
          <motion.div
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="mt-6 md:mt-0"
          >
            <Link to="/courses" className="inline-block px-6 py-3 bg-white dark:bg-gray-800 text-brand-charcoal dark:text-white border border-gray-200 dark:border-gray-700 rounded-full font-semibold hover:border-brand-orange hover:text-brand-orange transition-all shadow-sm">
              Explore All Courses
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-brand-orange/10 transition-all border border-gray-100 dark:border-gray-700 flex flex-col h-full group"
            >
              <div className="relative h-48 overflow-hidden">
                <img src={course.image} alt={course.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className={`absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-md bg-white/90 shadow-sm ${course.color.split(' ')[1]}`}>
                  {course.icon}
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-heading font-bold text-brand-charcoal dark:text-white mb-3 group-hover:text-brand-orange transition-colors">
                  {course.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 flex-grow text-sm leading-relaxed">
                  {course.description}
                </p>
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                  <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 font-medium">
                    <Users className="w-4 h-4" />
                    {course.students} students
                  </div>
                  <button className="flex items-center text-brand-orange font-semibold hover:text-brand-orangeLight transition-colors">
                    Enroll <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
