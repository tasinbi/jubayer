import React, { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FiGithub, FiLinkedin, FiMail, FiDownload } from 'react-icons/fi';
import { FaFacebook, FaWhatsapp } from 'react-icons/fa';
import { personalInfo } from '../data/portfolio';

/* ---------------- helpers ---------------- */
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

function mulberry32(seed: number) {
  return function () {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/* ---------------- Coding Animation ---------------- */
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
    ],
    []
  );

  const seeds = useMemo(() => {
    const rand = mulberry32(101);
    return marketingElements.map(() => ({
      x1: rand(),
      y1: rand(),
      x2: rand(),
      y2: rand(),
      dur: 8 + rand() * 4,
    }));
  }, [marketingElements]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {marketingElements.map((el, i) => {
        const s = seeds[i];
        return (
          <motion.div
            key={i}
            className={`absolute font-mono text-sm font-bold ${el.color} opacity-60`}
            initial={{ x: s.x1 * w, y: s.y1 * h, scale: 0 }}
            animate={{ x: s.x2 * w, y: s.y2 * h, scale: [0, 1, 0] }}
            transition={{
              duration: s.dur,
              repeat: Infinity,
              delay: el.delay,
              ease: 'easeInOut',
            }}
          >
            {el.code}
          </motion.div>
        );
      })}
    </div>
  );
};

/* ---------------- Profile Canvas ---------------- */
const CLIP_OCTAGON =
  'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)';

const ProfileCanvas: React.FC = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* glow */}
      <motion.div
        className="absolute inset-0 rounded-full blur-3xl opacity-40"
        style={{
          background:
            'radial-gradient(circle, rgba(244,66,54,0.45), rgba(244,66,54,0.15), transparent)',
        }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 4, repeat: Infinity }}
      />

      {/* main */}
      <motion.div
        className="relative w-[350px] h-[350px] group"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="relative w-[320px] h-[320px]"
            style={{ clipPath: CLIP_OCTAGON }}
          >
            {/* border */}
            <div
              className="absolute inset-0 p-[3px]"
              style={{
                background: 'linear-gradient(135deg, #f44236, #ff6b6b)',
                clipPath: CLIP_OCTAGON,
              }}
            >
              {/* glass */}
              <div
                className="w-full h-full relative overflow-hidden"
                style={{
                  clipPath: CLIP_OCTAGON,
                  background: 'linear-gradient(135deg, #f44236cc, #f44236aa)',
                }}
              >
                {/* image area */}
                <div
                  className="absolute inset-[12px] overflow-hidden"
                  style={{ clipPath: CLIP_OCTAGON }}
                >
                  {/* background */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        'radial-gradient(circle at 30% 20%, rgba(255,255,255,0.18), transparent 55%), #f44236',
                    }}
                  />

                  {/* IMAGE — EXTRA ZOOM */}
                  <img
                    src="/profile-photo.jpg"
                    alt={personalInfo.name}
                    className="
                      relative z-10 w-full h-full
                      object-contain object-center
                      scale-[1.3]
                      transition-transform duration-700
                      group-hover:scale-[1.35]
                    "
                    style={{
                      filter: 'brightness(1.05) contrast(1.05) saturate(1.05)',
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

/* ---------------- Hero ---------------- */
const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <CodingAnimation />

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* text */}
        <div className="text-center lg:text-left">
          <span className="text-primary-500 font-semibold">Hello, I'm</span>

          <h1 className="text-5xl font-bold mt-2 mb-4">
            <span className="gradient-text">{personalInfo.name}</span>
          </h1>

          <div className="text-2xl text-gray-300 mb-6">
            <TypeAnimation
              sequence={[
                'Full Stack Developer',
                2000,
                'Digital Marketing Expert',
                2000,
                'SEO Specialist',
                2000,
              ]}
              speed={50}
              repeat={Infinity}
            />
          </div>

          <p className="text-gray-400 mb-8">{personalInfo.bio}</p>

          <div className="flex gap-4 justify-center lg:justify-start">
            <a
              href={personalInfo.resume}
              className="px-6 py-3 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg text-white font-semibold"
            >
              <FiDownload className="inline mr-2" />
              Download CV
            </a>
          </div>
        </div>

        {/* profile */}
        <div className="flex justify-center lg:justify-end">
          <div className="w-[400px] h-[400px]">
            <ProfileCanvas />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
