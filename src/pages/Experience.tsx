import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiCalendar, FiExternalLink } from 'react-icons/fi';
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
    <div className="min-h-screen bg-black text-white pt-20">
      {/* Header */}
      <div className="bg-gradient-to-br from-gray-900 via-black to-gray-900 border-b border-gray-800">
        <div className="max-container section-padding py-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              My <span className="gradient-text">Experience</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              My professional journey and the valuable experiences that have shaped my expertise.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-container section-padding py-20">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Experience Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-accent-500 to-red-500"></div>
            
            {/* Experience Items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary-500 rounded-full border-4 border-black shadow-lg"></div>
                  
                  {/* Content Card */}
                  <div className={`ml-16 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                    <div className="glass-effect p-6 rounded-xl hover:scale-105 transition-transform duration-300">
                      <div className="flex items-center gap-2 mb-3">
                        <FiCalendar className="w-4 h-4 text-primary-500" />
                        <span className="text-sm text-gray-400">{exp.startDate} - {exp.current ? 'Present' : exp.endDate}</span>
                      </div>
                      
                      <h3 className="text-xl font-semibold mb-2 text-primary-500">
                        {exp.position}
                      </h3>
                      
                      <h4 className="text-lg font-medium mb-4 text-gray-300">
                        {exp.company}
                      </h4>
                      
                      <p className="text-gray-400 mb-4">{exp.description}</p>
                      
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, pointIndex) => (
                          <li key={pointIndex} className="flex items-start gap-2 text-gray-400">
                            <div className="w-2 h-2 bg-accent-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Experience Summary */}
          <motion.div
            variants={itemVariants}
            className="mt-20"
          >
            <div className="glass-effect p-8 rounded-xl">
              <h3 className="text-2xl font-semibold mb-6 text-center text-primary-500">
                Experience Highlights
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-500 mb-2">5+</div>
                  <p className="text-gray-400">Years of Experience</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent-500 mb-2">50+</div>
                  <p className="text-gray-400">Projects Completed</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-500 mb-2">30+</div>
                  <p className="text-gray-400">Happy Clients</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-16"
          >
            <div className="glass-effect p-8 rounded-xl max-w-2xl mx-auto">
              <h3 className="text-2xl font-semibold mb-4 text-primary-500">
                Ready to Work Together?
              </h3>
              <p className="text-gray-300 mb-6">
                With years of experience in web development and digital marketing, I'm ready to bring your vision to life. Let's create something amazing together!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="mailto:tasinahmed423@gmail.com"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300"
                >
                  <FiExternalLink className="w-4 h-4" />
                  Start a Project
                </motion.a>
                <motion.a
                  href="/about"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-8 py-3 glass-effect text-white rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300"
                >
                  Learn More About Me
                </motion.a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Experience; 