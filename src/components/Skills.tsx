import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt, FaWordpress,
  FaDatabase, FaFigma, FaPhp, FaLaravel, FaShoppingCart
} from 'react-icons/fa';
import { 
  SiTypescript, SiJavascript, SiTailwindcss, SiMongodb, 
  SiMysql, SiExpress, SiVite, SiCpanel, SiFramer
} from 'react-icons/si';
import { FiCode, FiServer, FiSearch, FiZap } from 'react-icons/fi';
import { skills } from '../data/portfolio';

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'frontend' | 'backend' | 'database' | 'tools'>('frontend');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const getIcon = (iconName: string | undefined) => {
    const iconMap: { [key: string]: React.ReactElement } = {
      react: <FaReact className="w-8 h-8" />,
      typescript: <SiTypescript className="w-8 h-8" />,
      javascript: <SiJavascript className="w-8 h-8" />,
      html: <FaHtml5 className="w-8 h-8" />,
      css: <FaCss3Alt className="w-8 h-8" />,
      tailwind: <SiTailwindcss className="w-8 h-8" />,
      framer: <SiFramer className="w-8 h-8" />,
      vite: <SiVite className="w-8 h-8" />,
      responsive: <FiCode className="w-8 h-8" />,
      nodejs: <FaNodeJs className="w-8 h-8" />,
      express: <SiExpress className="w-8 h-8" />,
      laravel: <FaLaravel className="w-8 h-8" />,
      php: <FaPhp className="w-8 h-8" />,
      api: <FiServer className="w-8 h-8" />,
      mongodb: <SiMongodb className="w-8 h-8" />,
      mysql: <SiMysql className="w-8 h-8" />,
      prisma: <FaDatabase className="w-8 h-8" />,
      wordpress: <FaWordpress className="w-8 h-8" />,
      woocommerce: <FaShoppingCart className="w-8 h-8" />,
      git: <FaGitAlt className="w-8 h-8" />,
      cpanel: <SiCpanel className="w-8 h-8" />,
      figma: <FaFigma className="w-8 h-8" />,
      seo: <FiSearch className="w-8 h-8" />,
      performance: <FiZap className="w-8 h-8" />,
    };
    return iconName ? iconMap[iconName] || <FaDatabase className="w-8 h-8" /> : <FaDatabase className="w-8 h-8" />;
  };

  const categories = [
    { key: 'frontend', label: 'Frontend', color: 'from-blue-500 to-cyan-500' },
    { key: 'backend', label: 'Backend', color: 'from-green-500 to-emerald-500' },
    { key: 'database', label: 'Database', color: 'from-purple-500 to-pink-500' },
    { key: 'tools', label: 'Tools & CMS', color: 'from-orange-500 to-red-500' },
  ];



  const filteredSkills = skills.filter(skill => skill.category === activeCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const progressVariants = {
    hidden: { width: 0 },
    visible: (level: number) => ({
      width: `${level}%`,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* 3D Floating Marketing Elements for Skills */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, index) => (
          <motion.div
            key={`skill-marketing-${index}`}
            className="absolute font-mono text-sm text-primary-500/10"
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
              duration: 12 + Math.random() * 6,
              repeat: Infinity,
              delay: index * 0.7,
              ease: "easeInOut",
            }}
          >
            {['📈 ROI', '🎯 Target', '📊 Analytics', '💰 Convert', '📱 Social', '🔍 SEO', '📢 Ads', '📧 Email'][index]}
          </motion.div>
        ))}
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-transparent to-purple-500/5" />
      
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
              Technical <span className="gradient-text">Skills</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Technologies and tools I work with to bring ideas to life
            </p>
          </motion.div>

          {/* Category Tabs */}
          <motion.div variants={itemVariants} className="flex justify-center gap-4 mb-12 flex-wrap">
            {categories.map((category) => (
              <button
                key={category.key}
                onClick={() => setActiveCategory(category.key as any)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeCategory === category.key
                    ? 'text-white shadow-lg'
                    : 'glass-effect hover:bg-gray-200 dark:hover:bg-gray-800'
                }`}
                style={{
                  background: activeCategory === category.key 
                    ? `linear-gradient(135deg, ${category.color.replace('from-', '').replace('to-', '').split(' ').map(c => {
                        if (c.includes('blue')) return '#3B82F6';
                        if (c.includes('cyan')) return '#06B6D4';
                        if (c.includes('green')) return '#10B981';
                        if (c.includes('emerald')) return '#34D399';
                        if (c.includes('purple')) return '#A855F7';
                        if (c.includes('pink')) return '#EC4899';
                        if (c.includes('orange')) return '#F97316';
                        if (c.includes('red')) return '#EF4444';
                        return '#3B82F6';
                      }).join(', ')})` 
                    : 'transparent',
                }}
              >
                {category.label}
              </button>
            ))}
          </motion.div>

          {/* Skills Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -5, rotateY: 5 }}
                  className="glass-effect p-6 rounded-xl hover-glow animate-fade-in-up"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <motion.div 
                      className="text-primary-500"
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.5 }}
                    >
                      {getIcon(skill.icon)}
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg text-primary-500">{skill.name}</h3>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          Proficiency
                        </span>
                        <motion.span 
                          className="text-sm font-semibold text-primary-500"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: index * 0.2 }}
                        >
                          {skill.level}%
                        </motion.span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="relative h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      variants={progressVariants}
                      custom={skill.level}
                      initial="hidden"
                      animate={inView ? "visible" : "hidden"}
                      className="absolute top-0 left-0 h-full rounded-full"
                      style={{
                        background: `linear-gradient(90deg, 
                          ${activeCategory === 'frontend' ? '#3B82F6, #06B6D4' :
                            activeCategory === 'backend' ? '#10B981, #34D399' :
                            activeCategory === 'database' ? '#A855F7, #EC4899' :
                            '#F97316, #EF4444'
                          })`,
                      }}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Additional Skills Info */}
          <motion.div 
            variants={itemVariants} 
            className="mt-12 text-center glass-effect p-8 rounded-xl"
          >
            <h3 className="text-xl font-semibold mb-4">Always Learning</h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Technology is constantly evolving, and I'm committed to continuous learning. 
              Currently exploring Web3 technologies, AI/ML integration, and advanced cloud architectures.
              I believe in staying ahead of the curve and adapting to new technologies as they emerge.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;