import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiCode, FiCoffee, FiTarget, FiTrendingUp } from 'react-icons/fi';
import { education, services } from '../data/portfolio';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { icon: FiCode, label: 'Years Experience', value: '2+' },
    { icon: FiCoffee, label: 'Projects Completed', value: '25+' },
    { icon: FiTarget, label: 'Happy Clients', value: '15+' },
    { icon: FiTrendingUp, label: 'Success Rate', value: '95%' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="about" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-500/5 to-transparent" />
      
      <div className="max-container section-padding relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="heading-2 mb-4">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Passionate about creating digital experiences that make a difference
            </p>
          </motion.div>

                     {/* About Content */}
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
             <motion.div 
               variants={itemVariants}
               className="animate-slide-in-left"
             >
               <h3 className="text-2xl font-semibold mb-4 text-primary-500">Who I Am</h3>
                              <p className="text-gray-400 dark:text-gray-400 mb-6">
                 I'm a passionate full-stack developer with a love for creating innovative web solutions. 
                 Currently working at Banglay IELTS since December 2024, I specialize in developing 
                 educational websites and platforms that help students achieve their goals.
               </p>
               <p className="text-gray-400 dark:text-gray-400 mb-6">
                 My journey in tech started with Programming Hero Batch 8, where I learned the fundamentals 
                 of web development. Since then, I've evolved into a career focused on building user-centric 
                 applications that solve real-world problems, particularly in the education sector.
               </p>
               <p className="text-gray-400 dark:text-gray-400">
                 I believe in continuous learning and staying updated with the latest technologies and best practices. 
                 When I'm not coding, you can find me exploring new technologies and contributing to 
                 open-source projects.
               </p>
             </motion.div>

             <motion.div 
               variants={itemVariants}
               className="animate-slide-in-right"
             >
               <h3 className="text-2xl font-semibold mb-4 text-primary-500">Education</h3>
               <div className="space-y-4">
                 {education.map((edu, index) => (
                   <motion.div 
                     key={edu.id} 
                     className="glass-effect p-4 rounded-lg hover:scale-105 transition-transform duration-300"
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ delay: index * 0.2 }}
                   >
                     <h4 className="font-semibold text-lg text-primary-500">
                       {edu.degree} in {edu.field}
                     </h4>
                     <p className="text-gray-300 dark:text-gray-300">{edu.institution}</p>
                     <p className="text-sm text-gray-400 dark:text-gray-400">
                       {new Date(edu.startDate).getFullYear()} - {new Date(edu.endDate).getFullYear()}
                     </p>
                     {edu.description && (
                       <p className="text-gray-400 dark:text-gray-400 mt-2">{edu.description}</p>
                     )}
                   </motion.div>
                 ))}
               </div>
             </motion.div>
           </div>

                     {/* Stats */}
           <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
             {stats.map((stat, index) => (
               <motion.div
                 key={index}
                 whileHover={{ scale: 1.05, y: -5 }}
                 className="glass-effect p-6 rounded-lg text-center hover-glow animate-fade-in-up"
                 initial={{ opacity: 0, y: 30 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: index * 0.1 }}
               >
                 <motion.div
                   animate={{ rotate: [0, 10, -10, 0] }}
                   transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                 >
                   <stat.icon className="w-8 h-8 mx-auto mb-3 text-primary-500" />
                 </motion.div>
                 <h4 className="text-2xl font-bold gradient-text mb-1">{stat.value}</h4>
                 <p className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</p>
               </motion.div>
             ))}
           </motion.div>

                     {/* Services */}
           <motion.div variants={itemVariants}>
             <h3 className="text-2xl font-semibold mb-8 text-center text-primary-500">What I Do</h3>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
               {services.map((service, index) => (
                 <motion.div
                   key={service.id}
                   whileHover={{ scale: 1.05, y: -5, rotateY: 5 }}
                   className="glass-effect p-6 rounded-lg hover-glow animate-scale-in"
                   initial={{ opacity: 0, scale: 0.8 }}
                   animate={{ opacity: 1, scale: 1 }}
                   transition={{ delay: index * 0.1 }}
                 >
                   <motion.div 
                     className="w-12 h-12 bg-primary-500/10 rounded-lg flex items-center justify-center mb-4"
                     whileHover={{ rotate: 360 }}
                     transition={{ duration: 0.5 }}
                   >
                     <FiCode className="w-6 h-6 text-primary-500" />
                   </motion.div>
                   <h4 className="font-semibold text-lg mb-2 text-primary-500">{service.title}</h4>
                   <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                     {service.description}
                   </p>
                   <ul className="space-y-1">
                     {service.features.map((feature, idx) => (
                       <motion.li 
                         key={idx} 
                         className="text-xs text-gray-600 dark:text-gray-400 flex items-start"
                         initial={{ opacity: 0, x: -10 }}
                         animate={{ opacity: 1, x: 0 }}
                         transition={{ delay: (index * 0.1) + (idx * 0.05) }}
                       >
                         <span className="text-primary-500 mr-1">•</span>
                         {feature}
                       </motion.li>
                     ))}
                   </ul>
                 </motion.div>
               ))}
             </div>
           </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;