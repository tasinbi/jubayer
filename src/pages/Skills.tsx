import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { skills } from '../data/portfolio';
import { 
  SiHtml5, SiCss3, SiJavascript, SiTypescript, SiReact, SiNodedotjs, 
  SiLaravel, SiPhp, SiMysql, SiMongodb, SiWordpress, SiWoo, 
  SiGithub, SiFigma, SiTailwindcss, SiVite, SiFramer,
  SiFacebook, SiGoogleads, SiGoogleanalytics, SiMailchimp
} from 'react-icons/si';

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const getSkillIcon = (skillName: string) => {
    const iconMap: { [key: string]: React.ReactNode } = {
      'HTML5': <SiHtml5 className="w-6 h-6 text-orange-500" />,
      'CSS3': <SiCss3 className="w-6 h-6 text-blue-500" />,
      'JavaScript (ES6+)': <SiJavascript className="w-6 h-6 text-yellow-400" />,
      'TypeScript': <SiTypescript className="w-6 h-6 text-blue-600" />,
      'React': <SiReact className="w-6 h-6 text-cyan-400" />,
      'Node.js': <SiNodedotjs className="w-6 h-6 text-green-500" />,
      'Laravel': <SiLaravel className="w-6 h-6 text-red-500" />,
      'PHP': <SiPhp className="w-6 h-6 text-purple-500" />,
      'MySQL': <SiMysql className="w-6 h-6 text-blue-600" />,
      'MongoDB': <SiMongodb className="w-6 h-6 text-green-500" />,
      'WordPress (Theme/Plugin)': <SiWordpress className="w-6 h-6 text-blue-500" />,
      'WooCommerce': <SiWoo className="w-6 h-6 text-purple-600" />,
      'Git/GitHub': <SiGithub className="w-6 h-6 text-gray-300" />,
      'Figma': <SiFigma className="w-6 h-6 text-purple-500" />,
      'Tailwind CSS': <SiTailwindcss className="w-6 h-6 text-cyan-400" />,
      'Vite': <SiVite className="w-6 h-6 text-purple-500" />,
      'Framer Motion': <SiFramer className="w-6 h-6 text-purple-500" />,
      'Facebook Marketing': <SiFacebook className="w-6 h-6 text-blue-500" />,
      'Google Ads': <SiGoogleads className="w-6 h-6 text-red-500" />,
      'Analytics & Reporting': <SiGoogleanalytics className="w-6 h-6 text-blue-500" />,
      'Email Marketing': <SiMailchimp className="w-6 h-6 text-orange-500" />,
    };
    return iconMap[skillName] || <div className="w-6 h-6 bg-primary-500 rounded"></div>;
  };

  // Group skills by category
  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as { [key: string]: typeof skills });

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
              My <span className="gradient-text">Skills</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A comprehensive overview of my technical expertise and digital marketing capabilities.
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
          {/* Skills Categories */}
          <div className="space-y-16">
            {Object.entries(skillsByCategory).map(([category, categorySkills]) => (
              <motion.div
                key={category}
                variants={itemVariants}
                className="space-y-8"
              >
                <h2 className="heading-2 text-center">
                  <span className="gradient-text">{category.charAt(0).toUpperCase() + category.slice(1)}</span>
                </h2>
                
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {categorySkills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      variants={itemVariants}
                      className="glass-effect p-6 rounded-xl text-center hover:scale-105 transition-transform duration-300 group"
                    >
                      <div className="flex justify-center mb-4">
                        {getSkillIcon(skill.name)}
                      </div>
                      <h3 className="font-semibold text-gray-300 group-hover:text-primary-400 transition-colors duration-300">
                        {skill.name}
                      </h3>
                      <div className="mt-2">
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-primary-500 to-accent-500 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                        <span className="text-xs text-gray-400 mt-1">{skill.level}%</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Skills Summary */}
          <motion.div
            variants={itemVariants}
            className="mt-20"
          >
            <div className="glass-effect p-8 rounded-xl">
              <h3 className="text-2xl font-semibold mb-6 text-center text-primary-500">
                Skills Overview
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-500 mb-2">15+</div>
                  <p className="text-gray-400">Programming Languages & Frameworks</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent-500 mb-2">8+</div>
                  <p className="text-gray-400">Digital Marketing Tools</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-500 mb-2">5+</div>
                  <p className="text-gray-400">Years of Experience</p>
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
                I'm always learning and expanding my skill set. Let's discuss how my expertise can help bring your project to life!
              </p>
              <motion.a
                href="mailto:tasinahmed423@gmail.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300"
              >
                Let's Discuss
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills; 