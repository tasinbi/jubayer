import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiChevronLeft, FiChevronRight, FiStar } from 'react-icons/fi';
import { FaQuoteLeft } from 'react-icons/fa';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  image: string;
  rating: number;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    role: 'CEO',
    company: 'TechStart Inc.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
    rating: 5,
    text: 'Working with Jubayer was an absolute pleasure! His expertise in web development and digital marketing helped us increase our online presence by 300%. Highly recommended for any business looking to grow digitally.',
  },
  {
    id: '2',
    name: 'Michael Chen',
    role: 'Marketing Director',
    company: 'Digital Solutions Ltd.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
    rating: 5,
    text: 'Jubayer delivered exceptional results for our Facebook marketing campaign. His strategic approach and attention to detail resulted in a 250% ROI. A true professional who understands modern digital marketing.',
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    role: 'Founder',
    company: 'EduTech Platform',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
    rating: 5,
    text: 'The IELTS platform Jubayer developed for us exceeded all expectations. His technical skills combined with understanding of our educational needs made the project a huge success. Students love the interface!',
  },
  {
    id: '4',
    name: 'David Kumar',
    role: 'E-commerce Manager',
    company: 'Fashion Hub BD',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
    rating: 5,
    text: 'Our WooCommerce store transformation was incredible! Jubayer not only built a beautiful responsive site but also optimized it for conversions. Sales increased by 180% in the first three months.',
  },
  {
    id: '5',
    name: 'Aisha Begum',
    role: 'Business Owner',
    company: 'Shamz Fashion',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&q=80',
    rating: 5,
    text: 'Excellent work on our fashion e-commerce website! The design is modern, loads fast, and our customers find it very easy to navigate. Jubayer also helped with SEO which brought us more organic traffic.',
  },
  {
    id: '6',
    name: 'James Wilson',
    role: 'Startup Founder',
    company: 'Innovation Labs',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
    rating: 5,
    text: 'From concept to launch, Jubayer guided us through the entire process. His full-stack development skills and marketing expertise made our product launch incredibly successful. Would definitely work with him again!',
  },
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      let nextIndex = prevIndex + newDirection;
      if (nextIndex < 0) nextIndex = testimonials.length - 1;
      if (nextIndex >= testimonials.length) nextIndex = 0;
      return nextIndex;
    });
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
    <section id="testimonials" className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-500/5 to-transparent" />
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, index) => (
          <motion.div
            key={`testimonial-float-${index}`}
            className="absolute text-3xl opacity-5"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 10, 0],
            }}
            transition={{
              duration: 5 + index,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            ⭐
          </motion.div>
        ))}
      </div>

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
              Client <span className="gradient-text">Testimonials</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Don't just take my word for it - hear what my clients have to say about working together
            </p>
          </motion.div>

          {/* Testimonials Carousel */}
          <motion.div variants={itemVariants} className="relative max-w-4xl mx-auto">
            {/* Main Card */}
            <div className="relative h-[500px] md:h-[400px] flex items-center justify-center">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                  }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={1}
                  onDragEnd={(e, { offset, velocity }) => {
                    const swipe = swipePower(offset.x, velocity.x);
                    if (swipe < -swipeConfidenceThreshold) {
                      paginate(1);
                    } else if (swipe > swipeConfidenceThreshold) {
                      paginate(-1);
                    }
                  }}
                  className="absolute w-full"
                >
                  <div className="glass-effect rounded-2xl p-8 md:p-10 relative hover-glow">
                    {/* Quote Icon */}
                    <div className="absolute top-6 left-6 text-primary-500/20">
                      <FaQuoteLeft className="w-12 h-12" />
                    </div>

                    {/* Rating Stars */}
                    <div className="flex justify-center mb-6 relative z-10">
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: i * 0.1 }}
                        >
                          <FiStar className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                        </motion.div>
                      ))}
                    </div>

                    {/* Testimonial Text */}
                    <p className="text-gray-300 text-lg text-center mb-8 leading-relaxed italic relative z-10">
                      "{testimonials[currentIndex].text}"
                    </p>

                    {/* Client Info */}
                    <div className="flex flex-col items-center gap-4 relative z-10">
                      <motion.img
                        src={testimonials[currentIndex].image}
                        alt={testimonials[currentIndex].name}
                        className="w-20 h-20 rounded-full object-cover border-4 border-primary-500/30"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.3, type: "spring" }}
                      />
                      <div className="text-center">
                        <h4 className="text-xl font-semibold text-white">
                          {testimonials[currentIndex].name}
                        </h4>
                        <p className="text-primary-400 font-medium">
                          {testimonials[currentIndex].role}
                        </p>
                        <p className="text-gray-400 text-sm">
                          {testimonials[currentIndex].company}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-center items-center gap-6 mt-8">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => paginate(-1)}
                className="w-12 h-12 glass-effect rounded-full flex items-center justify-center hover:bg-primary-500/20 transition-colors duration-300"
                aria-label="Previous testimonial"
              >
                <FiChevronLeft className="w-6 h-6" />
              </motion.button>

              {/* Dots Indicator */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => {
                      setDirection(index > currentIndex ? 1 : -1);
                      setCurrentIndex(index);
                    }}
                    whileHover={{ scale: 1.2 }}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? 'bg-primary-500 w-8'
                        : 'bg-gray-600 hover:bg-gray-500'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => paginate(1)}
                className="w-12 h-12 glass-effect rounded-full flex items-center justify-center hover:bg-primary-500/20 transition-colors duration-300"
                aria-label="Next testimonial"
              >
                <FiChevronRight className="w-6 h-6" />
              </motion.button>
            </div>

            {/* Swipe Hint */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="text-center text-gray-500 text-sm mt-6"
            >
              Swipe or use arrows to navigate
            </motion.p>
          </motion.div>

          {/* Stats Section */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto"
          >
            <div className="text-center">
              <motion.h3 
                className="text-4xl font-bold gradient-text mb-2"
                initial={{ opacity: 0, scale: 0 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.5 }}
              >
                50+
              </motion.h3>
              <p className="text-gray-400">Happy Clients</p>
            </div>
            <div className="text-center">
              <motion.h3 
                className="text-4xl font-bold gradient-text mb-2"
                initial={{ opacity: 0, scale: 0 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.6 }}
              >
                100+
              </motion.h3>
              <p className="text-gray-400">Projects Done</p>
            </div>
            <div className="text-center">
              <motion.h3 
                className="text-4xl font-bold gradient-text mb-2"
                initial={{ opacity: 0, scale: 0 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.7 }}
              >
                2+
              </motion.h3>
              <p className="text-gray-400">Years Experience</p>
            </div>
            <div className="text-center">
              <motion.h3 
                className="text-4xl font-bold gradient-text mb-2"
                initial={{ opacity: 0, scale: 0 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.8 }}
              >
                98%
              </motion.h3>
              <p className="text-gray-400">Satisfaction Rate</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
