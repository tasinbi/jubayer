import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiDownload, FiMail, FiPhone, FiMapPin, FiCode, FiDatabase, FiShoppingCart, FiBookOpen, FiTrendingUp } from 'react-icons/fi';
import { FaFacebook, FaWordpress, FaReact } from 'react-icons/fa';
import { personalInfo, education, services } from '../data/portfolio';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Service icon mapping
  const getServiceIcon = (iconName: string) => {
    const iconMap: { [key: string]: React.ReactNode } = {
      wordpress: <FaWordpress className="w-8 h-8 text-blue-500" />,
      react: <FaReact className="w-8 h-8 text-blue-400" />,
      backend: <FiDatabase className="w-8 h-8 text-green-500" />,
      facebook: <FaFacebook className="w-8 h-8 text-blue-600" />,
      ecommerce: <FiShoppingCart className="w-8 h-8 text-purple-500" />,
      education: <FiBookOpen className="w-8 h-8 text-yellow-500" />,
      optimization: <FiTrendingUp className="w-8 h-8 text-orange-500" />
    };
    return iconMap[iconName] || <FiCode className="w-8 h-8 text-gray-400" />;
  };

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
              About <span className="gradient-text">Me</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Get to know me better - my journey, expertise, and what drives me in the world of technology and digital marketing.
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
          {/* Who I Am Section */}
          <motion.div variants={itemVariants} className="mb-16">
            <h2 className="heading-2 mb-8 text-center">
              Who I <span className="gradient-text">Am</span>
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-gray-300 text-lg leading-relaxed">
                  {personalInfo.bio}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.a
                    href={personalInfo.resume}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <FiDownload className="w-5 h-5" />
                    Download CV
                  </motion.a>
                  <motion.a
                    href={`mailto:${personalInfo.email}`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 glass-effect text-white rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <FiMail className="w-5 h-5" />
                    Contact Me
                  </motion.a>
                </div>
              </div>
              <div className="space-y-6">
                <div className="glass-effect p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-4 text-primary-500">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <FiMail className="w-5 h-5 text-primary-500" />
                      <span className="text-gray-300">{personalInfo.email}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <FiPhone className="w-5 h-5 text-primary-500" />
                      <span className="text-gray-300">{personalInfo.phone}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <FiMapPin className="w-5 h-5 text-primary-500" />
                      <span className="text-gray-300">{personalInfo.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Education Section */}
          <motion.div variants={itemVariants} className="mb-16">
            <h2 className="heading-2 mb-8 text-center">
              <span className="gradient-text">Education</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="glass-effect p-6 rounded-xl hover:scale-105 transition-transform duration-300"
                >
                  <h3 className="text-xl font-semibold mb-2 text-primary-500">{edu.institution}</h3>
                  <p className="text-gray-300 mb-2">{edu.degree}</p>
                  <p className="text-gray-400 text-sm">{edu.startDate} - {edu.endDate}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Services Section */}
          <motion.div variants={itemVariants}>
            <h2 className="heading-2 mb-8 text-center">
              My <span className="gradient-text">Services</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="glass-effect p-6 rounded-xl hover:scale-105 transition-transform duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex-shrink-0">
                      {getServiceIcon(service.icon)}
                    </div>
                    <h3 className="text-xl font-semibold text-primary-500">{service.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-gray-400">
                        <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About; 