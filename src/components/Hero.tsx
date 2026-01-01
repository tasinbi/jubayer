import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FiGithub, FiLinkedin, FiMail, FiDownload } from 'react-icons/fi';
import { FaFacebook, FaWhatsapp } from 'react-icons/fa';
import { personalInfo } from '../data/portfolio';

// 3D Digital Marketing Animation Component
const CodingAnimation = () => {
  const marketingElements = [
    { code: '📈 ROI', color: 'text-green-400', delay: 0 },
    { code: '🎯 Targeting', color: 'text-blue-400', delay: 0.5 },
    { code: '📊 Analytics', color: 'text-purple-400', delay: 1 },
    { code: '💰 Conversion', color: 'text-yellow-400', delay: 1.5 },
    { code: '📱 Social Media', color: 'text-pink-400', delay: 2 },
    { code: '🔍 SEO', color: 'text-orange-400', delay: 2.5 },
    { code: '📢 Facebook Ads', color: 'text-blue-600', delay: 3 },
    { code: '📧 Email Marketing', color: 'text-red-400', delay: 3.5 },
    { code: '🌐 Digital Marketing', color: 'text-cyan-400', delay: 4 },
    { code: '⭐ Branding', color: 'text-indigo-400', delay: 4.5 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating Marketing Elements */}
      {marketingElements.map((element, index) => (
        <motion.div
          key={index}
          className={`absolute font-mono text-sm font-bold ${element.color} opacity-60`}
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            rotateX: 0,
            rotateY: 0,
            rotateZ: 0,
            scale: 0,
          }}
          animate={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            rotateX: [0, 360],
            rotateY: [0, 360],
            rotateZ: [0, 180],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Infinity,
            delay: element.delay,
            ease: "easeInOut",
          }}
          style={{
            zIndex: Math.floor(Math.random() * 10),
          }}
        >
          {element.code}
        </motion.div>
      ))}

      {/* Floating Marketing Symbols */}
      {[...Array(6)].map((_, index) => (
        <motion.div
          key={`symbol-${index}`}
          className="absolute text-4xl font-bold text-primary-500/30"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            rotate: 0,
            scale: 0,
          }}
          animate={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            rotate: [0, 360],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 10 + Math.random() * 5,
            repeat: Infinity,
            delay: index * 0.5,
            ease: "easeInOut",
          }}
        >
          {['📈', '💰', '🎯', '📊', '📱', '🔍'][index]}
        </motion.div>
      ))}

      {/* Floating Dots */}
      {[...Array(12)].map((_, index) => (
        <motion.div
          key={`dot-${index}`}
          className="absolute w-2 h-2 bg-accent-500/40 rounded-full"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            scale: 0,
          }}
          animate={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 6 + Math.random() * 3,
            repeat: Infinity,
            delay: index * 0.3,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Marketing Data Rain */}
      {[...Array(8)].map((_, index) => (
        <motion.div
          key={`data-${index}`}
          className="absolute font-mono text-xs text-green-400/30"
          initial={{
            x: (index * 15) % window.innerWidth,
            y: -50,
            opacity: 0,
          }}
          animate={{
            y: window.innerHeight + 50,
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Infinity,
            delay: index * 0.5,
            ease: "linear",
          }}
        >
          {['ROI+', 'CTR+', 'CPC-', 'CVR+', 'ROAS+', 'LTV+', 'CPA-', 'CR+'][index]}
        </motion.div>
      ))}
    </div>
  );
};

const ProfileCanvas = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Animated Background Rings */}
      <motion.div
        className="absolute inset-0"
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <div className="absolute inset-0 rounded-full border border-primary-500/20"></div>
        <div className="absolute inset-4 rounded-full border border-accent-500/20"></div>
        <div className="absolute inset-8 rounded-full border border-primary-500/10"></div>
      </motion.div>

      {/* Rotating Gradient Background */}
      <motion.div
        className="absolute inset-0 rounded-full opacity-30"
        style={{
          background: 'conic-gradient(from 0deg, #f97316, #06b6d4, #8b5cf6, #f97316)',
        }}
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Main Profile Container with Glassmorphism */}
      <motion.div
        className="relative w-[450px] h-[450px] group"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{
          duration: 1,
          ease: "easeOut",
        }}
      >
        {/* Outer Glow Effect */}
        <motion.div
          className="absolute inset-0 rounded-full blur-3xl opacity-40"
          style={{
            background: 'radial-gradient(circle, rgba(249, 115, 22, 0.4), rgba(6, 182, 212, 0.3), transparent)',
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Hexagon Shape with Gradient Border */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className="relative w-[420px] h-[420px]"
            style={{
              clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)',
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            {/* Gradient Border Effect */}
            <div 
              className="absolute inset-0 p-[3px]"
              style={{
                background: 'linear-gradient(135deg, #f97316, #06b6d4, #8b5cf6, #f97316)',
                clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)',
              }}
            >
              {/* Glassmorphism Background */}
              <div 
                className="w-full h-full backdrop-blur-xl bg-gradient-to-br from-gray-900/80 via-gray-800/70 to-gray-900/90 relative overflow-hidden"
                style={{
                  clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)',
                }}
              >
                {/* Inner Shine Effect */}
                <motion.div
                  className="absolute inset-0 opacity-30"
                  style={{
                    background: 'linear-gradient(135deg, transparent, rgba(255, 255, 255, 0.1), transparent)',
                  }}
                  animate={{
                    x: ['-100%', '100%'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                {/* Profile Image */}
                <div className="absolute inset-[10px] overflow-hidden"
                  style={{
                    clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)',
                  }}
                >
                  <img
                    src="/profile-photo.jpg"
                    alt={personalInfo.name}
                    className="w-full h-full object-cover transform scale-110 group-hover:scale-120 transition-transform duration-700"
                    style={{
                      filter: 'brightness(1.1) contrast(1.05) saturate(1.1)',
                    }}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      target.nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                  
                  {/* Fallback Placeholder */}
                  <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center hidden">
                    <div className="text-center">
                      <div className="w-24 h-24 bg-primary-500/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <svg className="w-12 h-12 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="text-primary-500 font-semibold">Profile Photo</p>
                    </div>
                  </div>

                  {/* Gradient Overlay */}
                  <div 
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background: 'linear-gradient(135deg, rgba(249, 115, 22, 0.1), transparent, rgba(6, 182, 212, 0.1))',
                    }}
                  />
                </div>

                {/* Corner Accent Dots */}
                <div className="absolute top-4 left-4 w-2 h-2 bg-primary-500 rounded-full animate-pulse" />
                <div className="absolute top-4 right-4 w-2 h-2 bg-accent-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
                <div className="absolute bottom-4 left-4 w-2 h-2 bg-purple-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
                <div className="absolute bottom-4 right-4 w-2 h-2 bg-pink-500 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }} />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Floating Particles */}
        {[...Array(8)].map((_, index) => (
          <motion.div
            key={index}
            className="absolute w-1 h-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: index * 0.3,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Orbiting Elements */}
        <motion.div
          className="absolute inset-0"
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full shadow-lg shadow-primary-500/50" />
        </motion.div>

        <motion.div
          className="absolute inset-0"
          animate={{
            rotate: -360,
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-gradient-to-r from-accent-500 to-purple-500 rounded-full shadow-lg shadow-accent-500/50" />
        </motion.div>
      </motion.div>

      {/* Animated Tech Symbols */}
      <motion.div
        className="absolute top-8 left-8 text-2xl opacity-70"
        animate={{
          y: [0, -10, 0],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        💻
      </motion.div>
      <motion.div
        className="absolute bottom-12 right-8 text-2xl opacity-70"
        animate={{
          y: [0, 10, 0],
          rotate: [0, -10, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      >
        🚀
      </motion.div>
      <motion.div
        className="absolute top-16 right-12 text-xl opacity-60"
        animate={{
          y: [0, -8, 0],
          x: [0, 5, 0],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      >
        ⚡
      </motion.div>
    </div>
  );
};

const Hero: React.FC = () => {
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
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden particle-bg">
      {/* 3D Coding Animation Background */}
      <CodingAnimation />
      
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-purple-500/5 to-pink-500/5" />
      
      <div className="max-container section-padding py-20 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left"
          >
            <motion.div variants={itemVariants} className="mb-4">
              <span className="text-primary-500 font-semibold text-lg">
                Hello, I'm
              </span>
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="heading-1 mb-4">
              <span className="gradient-text">{personalInfo.name}</span>
            </motion.h1>
            
            <motion.div variants={itemVariants} className="heading-3 mb-6 text-gray-300">
              <TypeAnimation
                sequence={[
                  'Full Stack Developer',
                  2000,
                  'Digital Marketing Expert',
                  2000,
                  'Facebook Marketing Specialist',
                  2000,
                  'SEO Expert',
                  2000,
                  'Problem Solver',
                  2000,
                  'Tech Enthusiast',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </motion.div>
            
            <motion.p variants={itemVariants} className="text-gray-400 mb-8 max-w-lg mx-auto lg:mx-0">
              {personalInfo.bio}
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300"
              >
                Hire Me
              </motion.button>
              <motion.a
                href={personalInfo.resume}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 glass-effect text-white rounded-lg font-semibold hover:bg-gray-200 dark:hover:bg-gray-800 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <FiDownload className="w-5 h-5" />
                Download CV
              </motion.a>
            </motion.div>
            
            {/* Social Links */}
            <motion.div variants={itemVariants} className="flex justify-center lg:justify-start gap-4">
              <motion.a
                href={personalInfo.social.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -5 }}
                className="w-12 h-12 glass-effect rounded-full flex items-center justify-center hover:bg-gray-800 transition-all duration-300 group"
              >
                <FiGithub className="w-6 h-6 text-white group-hover:text-gray-300 transition-colors duration-300" />
              </motion.a>
              <motion.a
                href={personalInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -5 }}
                className="w-12 h-12 glass-effect rounded-full flex items-center justify-center hover:bg-blue-600 transition-all duration-300 group"
              >
                <FiLinkedin className="w-6 h-6 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
              </motion.a>
              <motion.a
                href={personalInfo.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -5 }}
                className="w-12 h-12 glass-effect rounded-full flex items-center justify-center hover:bg-blue-600 transition-all duration-300 group"
              >
                <FaFacebook className="w-6 h-6 text-blue-500 group-hover:text-blue-400 transition-colors duration-300" />
              </motion.a>
              <motion.a
                href={`mailto:${personalInfo.email}`}
                whileHover={{ scale: 1.1, y: -5 }}
                className="w-12 h-12 glass-effect rounded-full flex items-center justify-center hover:bg-red-600 transition-all duration-300 group"
              >
                <FiMail className="w-6 h-6 text-red-400 group-hover:text-red-300 transition-colors duration-300" />
              </motion.a>
              <motion.a
                href={personalInfo.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -5 }}
                className="w-12 h-12 glass-effect rounded-full flex items-center justify-center hover:bg-green-600 transition-all duration-300 group"
              >
                <FaWhatsapp className="w-6 h-6 text-green-500 group-hover:text-green-400 transition-colors duration-300" />
              </motion.a>
            </motion.div>
          </motion.div>
          
          {/* Profile Canvas - Professional Hexagon Design */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center lg:justify-end"
          >
            <div className="w-[400px] h-[400px]">
              <ProfileCanvas />
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <a href="#about" className="flex flex-col items-center gap-2 text-gray-400 hover:text-primary-500 transition-colors">
          <span className="text-sm">Scroll Down</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-6 h-10 border-2 border-current rounded-full flex justify-center"
          >
            <motion.div className="w-1 h-3 bg-current rounded-full mt-2" />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
