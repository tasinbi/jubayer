import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { FaFacebook, FaWhatsapp } from 'react-icons/fa';
import { personalInfo } from '../data/portfolio';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Me', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Skills', href: '/skills' },
    { name: 'Experience', href: '/experience' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 border-t border-gray-800 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 via-accent-500/5 to-red-500/5"></div>
      
      <div className="max-container section-padding py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold gradient-text mb-4"
            >
              {personalInfo.name}
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-gray-400 mb-6 text-lg"
            >
              {personalInfo.title}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex gap-4"
            >
              <motion.a
                href={personalInfo.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 glass-effect rounded-xl flex items-center justify-center hover:bg-gray-800 hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl group"
                whileHover={{ rotate: 360 }}
                aria-label="GitHub"
              >
                <FiGithub className="w-6 h-6 text-white group-hover:text-gray-300 transition-colors duration-300" />
              </motion.a>
              <motion.a
                href={personalInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 glass-effect rounded-xl flex items-center justify-center hover:bg-blue-600 hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl group"
                whileHover={{ rotate: 360 }}
                aria-label="LinkedIn"
              >
                <FiLinkedin className="w-6 h-6 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
              </motion.a>
              {personalInfo.social.facebook && (
                <motion.a
                  href={personalInfo.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 glass-effect rounded-xl flex items-center justify-center hover:bg-blue-600 hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl group"
                  whileHover={{ rotate: 360 }}
                  aria-label="Facebook"
                >
                  <FaFacebook className="w-6 h-6 text-blue-500 group-hover:text-blue-400 transition-colors duration-300" />
                </motion.a>
              )}
              {personalInfo.social.whatsapp && (
                <motion.a
                  href={personalInfo.social.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 glass-effect rounded-xl flex items-center justify-center hover:bg-green-600 hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl group"
                  whileHover={{ rotate: 360 }}
                  aria-label="WhatsApp"
                >
                  <FaWhatsapp className="w-6 h-6 text-green-500 group-hover:text-green-400 transition-colors duration-300" />
                </motion.a>
              )}
              <motion.a
                href={`mailto:${personalInfo.email}`}
                className="w-12 h-12 glass-effect rounded-xl flex items-center justify-center hover:bg-red-600 hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl group"
                whileHover={{ rotate: 360 }}
                aria-label="Email"
              >
                <FiMail className="w-6 h-6 text-red-400 group-hover:text-red-300 transition-colors duration-300" />
              </motion.a>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div>
            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-xl font-semibold mb-6 text-primary-500"
            >
              Quick Links
            </motion.h4>
            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-3"
            >
              {quickLinks.map((link, index) => (
                <motion.li 
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <motion.div whileHover={{ x: 5 }}>
                    <Link
                      to={link.href}
                      className="text-gray-400 hover:text-primary-500 transition-all duration-300 flex items-center group"
                    >
                      <span className="w-2 h-2 bg-primary-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                      {link.name}
                    </Link>
                  </motion.div>
                </motion.li>
              ))}
            </motion.ul>
          </div>

          {/* Contact Info */}
          <div>
            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-xl font-semibold mb-6 text-primary-500"
            >
              Get in Touch
            </motion.h4>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-4 text-gray-400"
            >
              <motion.div 
                className="flex items-center space-x-3"
                whileHover={{ x: 5 }}
              >
                <div className="w-3 h-3 bg-primary-500 rounded-full"></div>
                <p className="hover:text-primary-500 transition-colors duration-300">{personalInfo.email}</p>
              </motion.div>
              <motion.div 
                className="flex items-center space-x-3"
                whileHover={{ x: 5 }}
              >
                <div className="w-3 h-3 bg-accent-500 rounded-full"></div>
                <p className="hover:text-primary-500 transition-colors duration-300">{personalInfo.phone}</p>
              </motion.div>
              <motion.div 
                className="flex items-center space-x-3"
                whileHover={{ x: 5 }}
              >
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <p className="hover:text-primary-500 transition-colors duration-300">{personalInfo.location}</p>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-between gap-4"
          >
            <motion.p 
              className="text-gray-400 text-sm text-center sm:text-left"
              whileHover={{ scale: 1.05 }}
            >
              © {currentYear} {personalInfo.name}. All rights reserved.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;