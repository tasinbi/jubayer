import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiMail, FiPhone, FiMapPin, FiSend, FiGithub, FiLinkedin } from 'react-icons/fi';
import { FaFacebook, FaWhatsapp } from 'react-icons/fa';
import { personalInfo } from '../data/portfolio';

const Contact: React.FC = () => {
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
              Get In <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Ready to start a project or just want to chat? I'd love to hear from you!
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <h2 className="heading-2 mb-6">
                  Let's <span className="gradient-text">Connect</span>
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  I'm always excited to work on new projects and bring innovative ideas to life. 
                  Whether you have a specific project in mind or just want to discuss possibilities, 
                  I'm here to help!
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                <motion.div
                  variants={itemVariants}
                  className="glass-effect p-6 rounded-xl hover:scale-105 transition-transform duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center">
                      <FiMail className="w-6 h-6 text-primary-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-300">Email</h3>
                      <a 
                        href={`mailto:${personalInfo.email}`}
                        className="text-primary-500 hover:text-primary-400 transition-colors duration-300"
                      >
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  className="glass-effect p-6 rounded-xl hover:scale-105 transition-transform duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-accent-500/20 rounded-lg flex items-center justify-center">
                      <FiPhone className="w-6 h-6 text-accent-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-300">Phone</h3>
                      <a 
                        href={`tel:${personalInfo.phone}`}
                        className="text-primary-500 hover:text-primary-400 transition-colors duration-300"
                      >
                        {personalInfo.phone}
                      </a>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  className="glass-effect p-6 rounded-xl hover:scale-105 transition-transform duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center">
                      <FiMapPin className="w-6 h-6 text-red-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-300">Location</h3>
                      <p className="text-gray-400">{personalInfo.location}</p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Social Links */}
              <motion.div variants={itemVariants}>
                <h3 className="text-xl font-semibold mb-4 text-primary-500">Follow Me</h3>
                <div className="flex gap-4">
                  <motion.a
                    href={personalInfo.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 glass-effect rounded-xl flex items-center justify-center hover:bg-gray-800 transition-colors duration-300"
                  >
                    <FiGithub className="w-6 h-6 text-white" />
                  </motion.a>
                  <motion.a
                    href={personalInfo.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 glass-effect rounded-xl flex items-center justify-center hover:bg-blue-600 transition-colors duration-300"
                  >
                    <FiLinkedin className="w-6 h-6 text-blue-400" />
                  </motion.a>
                  {personalInfo.social.facebook && (
                    <motion.a
                      href={personalInfo.social.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-12 h-12 glass-effect rounded-xl flex items-center justify-center hover:bg-blue-600 transition-colors duration-300"
                    >
                      <FaFacebook className="w-6 h-6 text-blue-500" />
                    </motion.a>
                  )}
                  {personalInfo.social.whatsapp && (
                    <motion.a
                      href={personalInfo.social.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-12 h-12 glass-effect rounded-xl flex items-center justify-center hover:bg-green-600 transition-colors duration-300"
                    >
                      <FaWhatsapp className="w-6 h-6 text-green-500" />
                    </motion.a>
                  )}
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <div className="glass-effect p-8 rounded-xl">
                <h3 className="text-2xl font-semibold mb-6 text-primary-500">Send a Message</h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                      placeholder="Project inquiry"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Tell me about your project..."
                      required
                    ></textarea>
                  </div>
                  
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <FiSend className="w-5 h-5" />
                    Send Message
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>

          {/* Call to Action */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-20"
          >
            <div className="glass-effect p-8 rounded-xl max-w-2xl mx-auto">
              <h3 className="text-2xl font-semibold mb-4 text-primary-500">
                Ready to Start Your Project?
              </h3>
              <p className="text-gray-300 mb-6">
                I'm available for freelance work and always excited to take on new challenges. 
                Let's discuss how we can work together to bring your ideas to life!
              </p>
              <motion.a
                href="mailto:tasinahmed423@gmail.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300"
              >
                <FiMail className="w-4 h-4" />
                Get Started Today
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact; 