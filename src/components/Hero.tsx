import React, { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FiGithub, FiLinkedin, FiMail, FiDownload } from 'react-icons/fi';
import { FaFacebook, FaWhatsapp } from 'react-icons/fa';
import { personalInfo } from '../data/portfolio';

// ---------- helpers ----------
function useViewport() {
  const [vp, setVp] = useState({ w: 1200, h: 800 });

  useEffect(() => {
    const update = () => setVp({ w: window.innerWidth, h: window.innerHeight });
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  return vp;
}

// deterministic random (so positions don't jump on every render)
function mulberry32(seed: number) {
  return function () {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// 3D Digital Marketing Animation Component
const CodingAnimation: React.FC = () => {
  const { w, h } = useViewport();

  const marketingElements = useMemo(
    () => [
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
    ],
    []
  );

  // pre-generate random start positions so they remain stable
  const elementSeeds = useMemo(() => {
    const rand = mulberry32(101);
    return marketingElements.map(() => ({
      x1: rand(),
      y1: rand(),
      x2: rand(),
      y2: rand(),
      z: Math.floor(rand() * 10),
      dur: 8 + rand() * 4,
    }));
  }, [marketingElements]);

  const symbolSeeds = useMemo(() => {
    const rand = mulberry32(202);
    return [...Array(6)].map(() => ({
      x1: rand(),
      y1: rand(),
      x2: rand(),
      y2: rand(),
      dur: 10 + rand() * 5,
    }));
  }, []);

  const dotSeeds = useMemo(() => {
    const rand = mulberry32(303);
    return [...Array(12)].map(() => ({
      x1: rand(),
      y1: rand(),
      x2: rand(),
      y2: rand(),
      dur: 6 + rand() * 3,
    }));
  }, []);

  const dataSeeds = useMemo(() => {
    const rand = mulberry32(404);
    return [...Array(8)].map(() => ({
      dur: 8 + rand() * 4,
    }));
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating Marketing Elements */}
      {marketingElements.map((element, index) => {
        const s = elementSeeds[index];
        return (
          <motion.div
            key={index}
            className={`absolute font-mono text-sm font-bold ${element.color} opacity-60`}
            initial={{
              x: s.x1 * w,
              y: s.y1 * h,
              rotateX: 0,
              rotateY: 0,
              rotateZ: 0,
              scale: 0,
            }}
            animate={{
              x: s.x2 * w,
              y: s.y2 * h,
              rotateX: [0, 360],
              rotateY: [0, 360],
              rotateZ: [0, 180],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: s.dur,
              repeat: Infinity,
              delay: element.delay,
              ease: 'easeInOut',
            }}
            style={{ zIndex: s.z }}
          >
            {element.code}
          </motion.div>
        );
      })}

      {/* Floating Marketing Symbols */}
      {[...Array(6)].map((_, index) => {
        const s = symbolSeeds[index];
        return (
          <motion.div
            key={`symbol-${index}`}
            className="absolute text-4xl font-bold text-primary-500/30"
            initial={{
              x: s.x1 * w,
              y: s.y1 * h,
              rotate: 0,
              scale: 0,
            }}
            animate={{
              x: s.x2 * w,
              y: s.y2 * h,
              rotate: [0, 360],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: s.dur,
              repeat: Infinity,
              delay: index * 0.5,
              ease: 'easeInOut',
            }}
          >
            {['📈', '💰', '🎯', '📊', '📱', '🔍'][index]}
          </motion.div>
        );
      })}

      {/* Floating Dots */}
      {[...Array(12)].map((_, index) => {
        const s = dotSeeds[index];
        return (
          <motion.div
            key={`dot-${index}`}
            className="absolute w-2 h-2 bg-accent-500/40 rounded-full"
            initial={{
              x: s.x1 * w,
              y: s.y1 * h,
              scale: 0,
            }}
            animate={{
              x: s.x2 * w,
              y: s.y2 * h,
              scale: [0, 1, 0],
            }}
            transition={{
              duration: s.dur,
              repeat: Infinity,
              delay: index * 0.3,
              ease: 'easeInOut',
            }}
          />
        );
      })}

      {/* Marketing Data Rain */}
      {[...Array(8)].map((_, index) => (
        <motion.div
          key={`data-${index}`}
          className="absolute font-mono text-xs text-green-400/30"
          initial={{
            x: (index * 140) % w,
            y: -50,
            opacity: 0,
          }}
          animate={{
            y: h + 50,
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: dataSeeds[index].dur,
            repeat: Infinity,
            delay: index * 0.5,
            ease: 'linear',
          }}
        >
          {['ROI+', 'CTR+', 'CPC-', 'CVR+', 'ROAS+', 'LTV+', 'CPA-', 'CR+'][index]}
        </motion.div>
      ))}
    </div>
  );
};

const CLIP_OCTAGON =
  'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)';

const ProfileCanvas: React.FC = () => {
  // particles positions stable
  const particles = useMemo(() => {
    const rand = mulberry32(777);
    return [...Array(8)].map(() => ({
      top: `${rand() * 100}%`,
      left: `${rand() * 100}%`,
      dur: 2 + rand() * 2,
      delay: rand() * 1.2,
    }));
  }, []);

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Animated Background Rings */}
      <motion.div
        className="absolute inset-0"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
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
        animate={{ rotate: -360 }}
        transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
      />

      {/* Main Profile Container */}
      <motion.div
        className="relative w-[350px] h-[350px] group"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        {/* Outer Glow */}
        <motion.div
          className="absolute inset-0 rounded-full blur-3xl opacity-40"
          style={{
            background:
              'radial-gradient(circle, rgba(249, 115, 22, 0.4), rgba(6, 182, 212, 0.3), transparent)',
          }}
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Octagon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className="relative w-[320px] h-[320px]"
            style={{ clipPath: CLIP_OCTAGON }}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          >
            {/* Gradient Border */}
            <div
              className="absolute inset-0 p-[3px]"
              style={{
                background: 'linear-gradient(135deg, #f97316, #06b6d4, #8b5cf6, #f97316)',
                clipPath: CLIP_OCTAGON,
              }}
            >
             <div
  className="w-full h-full backdrop-blur-xl relative overflow-hidden"
  style={{
    clipPath: CLIP_OCTAGON,
    background: 'linear-gradient(135deg, #f44236cc, #f44236aa)',
  }}
>

                {/* Shine */}
                <motion.div
                  className="absolute inset-0 opacity-30"
                  style={{
                    background:
                      'linear-gradient(135deg, transparent, rgba(255, 255, 255, 0.1), transparent)',
                  }}
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                />

                {/* Image area (UPDATED COLOR HERE) */}
                <div
                  className="absolute inset-[12px] overflow-hidden"
                  style={{ clipPath: CLIP_OCTAGON }}
                >
                  {/* A nice backdrop so object-contain looks premium */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        'radial-gradient(circle at 30% 20%, rgba(255,255,255,0.18), transparent 55%), #f44236',
                    }}
                  />

                  <img
                    src="/profile-photo.jpg"
                    alt={personalInfo.name}
                    className="
                      relative z-10 w-full h-full 
                      object-contain object-center
                      transition-transform duration-700
                      group-hover:scale-[1.05]
                    "
                    style={{
                      filter: 'brightness(1.05) contrast(1.05) saturate(1.05)',
                    }}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      target.nextElementSibling?.classList.remove('hidden');
                    }}
                  />

                  {/* Fallback */}
                  <div className="relative z-10 w-full h-full flex items-center justify-center hidden">
                    <div className="text-center">
                      <div className="w-24 h-24 bg-primary-500/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <svg className="w-12 h-12 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <p className="text-primary-500 font-semibold">Profile Photo</p>
                    </div>
                  </div>

                  {/* Overlay */}
                  <div
                    className="absolute inset-0 pointer-events-none z-20"
                    style={{
                      background:
                        'linear-gradient(135deg, rgba(249, 115, 22, 0.10), transparent, rgba(6, 182, 212, 0.10))',
                    }}
                  />
                </div>

                {/* Corner dots */}
                <div className="absolute top-4 left-4 w-2 h-2 bg-primary-500 rounded-full animate-pulse" />
                <div
                  className="absolute top-4 right-4 w-2 h-2 bg-accent-500 rounded-full animate-pulse"
                  style={{ animationDelay: '0.5s' }}
                />
                <div
                  className="absolute bottom-4 left-4 w-2 h-2 bg-purple-500 rounded-full animate-pulse"
                  style={{ animationDelay: '1s' }}
                />
                <div
                  className="absolute bottom-4 right-4 w-2 h-2 bg-pink-500 rounded-full animate-pulse"
                  style={{ animationDelay: '1.5s' }}
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Floating Particles */}
        {particles.map((p, index) => (
          <motion.div
            key={index}
            className="absolute w-1 h-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full"
            style={{ top: p.top, left: p.left }}
            animate={{ y: [0, -30, 0], opacity: [0, 1, 0], scale: [0, 1.5, 0] }}
            transition={{
              duration: p.dur,
              repeat: Infinity,
              delay: p.delay,
              ease: 'easeInOut',
            }}
          />
        ))}

        {/* Orbiting Elements */}
        <motion.div
          className="absolute inset-0"
          animate={{ rotate: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full shadow-lg shadow-primary-500/50" />
        </motion.div>

        <motion.div
          className="absolute inset-0"
          animate={{ rotate: -360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        >
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-gradient-to-r from-accent-500 to-purple-500 rounded-full shadow-lg shadow-accent-500/50" />
        </motion.div>
      </motion.div>

      {/* Animated Symbols */}
      <motion.div
        className="absolute top-8 left-8 text-2xl opacity-70"
        animate={{ y: [0, -10, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      >
        💻
      </motion.div>
      <motion.div
        className="absolute bottom-12 right-8 text-2xl opacity-70"
        animate={{ y: [0, 10, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
      >
        🚀
      </motion.div>
      <motion.div
        className="absolute top-16 right-12 text-xl opacity-60"
        animate={{ y: [0, -8, 0], x: [0, 5, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
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
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden particle-bg"
    >
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
              <span className="text-primary-500 font-semibold text-lg">Hello, I'm</span>
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

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
            >
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

          {/* Profile */}
          <motion.div variants={itemVariants} className="flex justify-center lg:justify-end">
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
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-gray-400 hover:text-primary-500 transition-colors"
        >
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
