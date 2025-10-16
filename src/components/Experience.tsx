import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiCalendar, FiMapPin, FiCheckCircle } from 'react-icons/fi';
import { experiences } from '../data/portfolio';

const Experience: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const lineVariants = {
    hidden: { height: 0 },
    visible: {
      height: '100%',
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  const formatDate = (date: string) => {
    if (!date) return 'Present';
    const d = new Date(date);
    return d.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  };

  return (
    <section id="experience" className="py-20 relative">
      <div className="absolute inset-0 gradient-bg opacity-5" />
      
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
              Work <span className="gradient-text">Experience</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              My professional journey and the impact I've made along the way
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gray-300 dark:bg-gray-700">
              <motion.div
                variants={lineVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="w-full bg-gradient-to-b from-primary-500 to-purple-500"
              />
            </div>

            {/* Experience Items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  variants={itemVariants}
                  className={`relative flex flex-col md:flex-row gap-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 -translate-y-4">
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className={`w-4 h-4 rounded-full border-4 border-white dark:border-gray-900 ${
                        exp.current 
                          ? 'bg-primary-500 animate-pulse' 
                          : 'bg-purple-500'
                      }`}
                    />
                  </div>

                  {/* Content */}
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} pl-8 md:pl-0`}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="glass-effect p-6 rounded-xl hover-glow"
                    >
                      {/* Header */}
                      <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                        <div>
                          <h3 className="text-xl font-semibold gradient-text mb-1">
                            {exp.position}
                          </h3>
                          <h4 className="text-lg font-medium text-gray-700 dark:text-gray-300">
                            {exp.company}
                          </h4>
                        </div>
                        {exp.current && (
                          <span className="px-3 py-1 bg-primary-500/10 text-primary-500 dark:text-primary-400 text-sm font-semibold rounded-full">
                            Current
                          </span>
                        )}
                      </div>

                      {/* Meta Info */}
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
                        <div className="flex items-center gap-1">
                          <FiCalendar className="w-4 h-4" />
                          <span>
                            {formatDate(exp.startDate)} - {formatDate(exp.endDate)}
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <FiMapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-600 dark:text-gray-400 mb-4">
                        {exp.description}
                      </p>

                      {/* Achievements */}
                      <div className="space-y-2">
                        {exp.achievements.map((achievement, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <FiCheckCircle className="w-4 h-4 text-primary-500 dark:text-primary-400 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-600 dark:text-gray-400">
                              {achievement}
                            </span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  </div>

                  {/* Empty Space for Timeline Layout */}
                  <div className="hidden md:block flex-1" />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <motion.div variants={itemVariants} className="text-center mt-12">
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Want to know more about my professional journey?
            </p>
            <a
              href="#contact"
              className="inline-block px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary-500/25"
            >
              Let's Connect
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;