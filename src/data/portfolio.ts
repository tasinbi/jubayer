export interface PersonalInfo {
  name: string;
  title: string;
  subtitle: string;
  email: string;
  phone: string;
  location: string;
  bio: string;
  resume: string;
  social: {
    github: string;
    linkedin: string;
    twitter?: string;
    instagram?: string;
    facebook?: string;
    whatsapp?: string;
  };
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  category: 'web' | 'mobile' | 'desktop' | 'other';
}

export interface Skill {
  name: string;
  level: number; // 0-100
  category: 'frontend' | 'backend' | 'database' | 'tools' | 'other';
  icon?: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string;
  current: boolean;
  description: string;
  achievements: string[];
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  description?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export const personalInfo: PersonalInfo = {
  name: "Md Jubayer Ahamed",
  title: "Full Stack Developer & Digital Marketing Expert",
  subtitle: "Web Development | Facebook Marketing | SEO | Digital Marketing | Building Scalable Solutions",
  email: "tasinahmed423@gmail.com",
  phone: "+880 1732134482",
  location: "Dhaka, Bangladesh",
  bio: "I'm a Full-Stack Web Developer and Digital Marketing Expert specializing in WordPress, React, Node.js, Facebook Marketing, SEO, and comprehensive digital marketing strategies. Currently working at Banglay IELTS since December 2024, focusing on web development, digital marketing, and content optimization. I'm passionate about creating high-performance applications and driving business growth through effective digital marketing campaigns.",
  resume: "tasinbi/jubayer/src/data/Md-Jubayer-Ahamed.pdf",
  social: {
    github: "https://github.com/tasinbi",
    linkedin: "https://www.linkedin.com/in/md-jubayer-ahamed-b92736358/",
    facebook: "https://www.facebook.com/jubayerahamed82",
    whatsapp: "https://wa.me/8801732134482"
  }
};

export const projects: Project[] = [
  {
    id: "1",
    title: "Banglay IELTS",
    description: "Comprehensive IELTS coaching platform with Bengali content focus",
    longDescription: "A content-focused coaching website designed specifically for the Bengali-speaking IELTS aspirants. Features course displays, student testimonials, educational blog, intake call-to-actions, and optimized performance with Lighthouse score of 90+. Built with SEO best practices and conversion-focused design.",
    image: "/projects/banglayielts.png",
    technologies: ["WordPress", "Tailwind CSS", "PHP", "MySQL", "SEO", "Performance Optimization"],
    liveUrl: "http://banglayielts.com",
    githubUrl: "",
    featured: true,
    category: "web"
  },
  {
    id: "2",
    title: "BIIC - Banglay IELTS & Immigration Center",
    description: "Study Abroad & Immigration Center",
    longDescription: "A Proffesional Study Abroad & Immigration Center Website, Features Course Display, Student Testimonials, Educational Blog, Intake Call-to-Actions, and Optimized Performance with Lighthouse score of 90+. Built with SEO best practices and conversion-focused design.",
    image: "/projects/biic.png",
    technologies: ["WordPress", "PHP", "MySQL", "JavaScript", "SEO", "Business Solutions"],
    liveUrl: "http://biic.com.bd",
    githubUrl: "",
    featured: true,
    category: "web"
  },
  {
    id: "3",
    title: "Shamz - Fashion & Lifestyle",
    description: "Modern fashion and lifestyle e-commerce platform",
    longDescription: "A stylish e-commerce platform for fashion and lifestyle products. Features product catalog, shopping cart, user authentication, payment integration, and responsive design optimized for mobile shopping experience.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
    technologies: ["WordPress", "WooCommerce", "PHP", "MySQL", "Payment Gateway", "Mobile-First"],
    liveUrl: "http://shamz.com.bd",
    githubUrl: "",
    featured: true,
    category: "web"
  },
  {
    id: "4",
    title: "90s Kick Official",
    description: "Sports and athletic footwear e-commerce store",
    longDescription: "A specialized e-commerce platform for sports and athletic footwear. Features product filtering, size selection, customer reviews, secure checkout, and mobile-optimized shopping experience.",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80",
    technologies: ["WordPress", "WooCommerce", "PHP", "MySQL", "Payment Integration", "Product Management"],
    liveUrl: "http://90skickofficial.com",
    githubUrl: "",
    featured: true,
    category: "web"
  },
  {
    id: "5",
    title: "Tasin E-commerce",
    description: "Modern React-based e-commerce application",
    longDescription: "A full-featured e-commerce application built with React, featuring product catalog, shopping cart, user authentication, payment processing, and responsive design. Demonstrates modern React development practices and state management.",
    image: "/projects/background.jpeg",
    technologies: ["React", "JavaScript", "CSS", "E-commerce", "State Management", "Responsive Design"],
    liveUrl: "https://react-e-commerce-main-zeta.vercel.app/",
    githubUrl: "https://github.com/tasinzuba/React_E-Commerce-main",
    featured: true,
    category: "web"
  },
  {
    id: "6",
    title: "CDIELTS",
    description: "Comprehensive IELTS practice and assessment platform",
    longDescription: "An advanced IELTS mock test system with practice exams, scoring algorithms, performance analytics, and detailed feedback. Features include timed tests, question randomization, progress tracking, and comprehensive reporting.",
    image: "/projects/cdielts.png",
    technologies: ["Vue.js", "Laravel", "MySQL", "Assessment System", "Analytics", "Real-time Scoring"],
    liveUrl: "http://cdielts.org",
    githubUrl: "",
    featured: true,
    category: "web"
  }
];

export const skills: Skill[] = [
  // Frontend
  { name: "HTML5", level: 95, category: "frontend", icon: "html" },
  { name: "CSS3", level: 95, category: "frontend", icon: "css" },
  { name: "JavaScript (ES6+)", level: 92, category: "frontend", icon: "javascript" },
  { name: "TypeScript", level: 85, category: "frontend", icon: "typescript" },
  { name: "React", level: 90, category: "frontend", icon: "react" },
  { name: "Tailwind CSS", level: 88, category: "frontend", icon: "tailwind" },
  { name: "Framer Motion", level: 80, category: "frontend", icon: "framer" },
  { name: "Vite", level: 85, category: "frontend", icon: "vite" },
  { name: "Responsive Design", level: 95, category: "frontend", icon: "responsive" },
  
  // Backend
  { name: "Node.js", level: 88, category: "backend", icon: "nodejs" },
  { name: "Express.js", level: 85, category: "backend", icon: "express" },
  { name: "Laravel", level: 90, category: "backend", icon: "laravel" },
  { name: "PHP", level: 92, category: "backend", icon: "php" },
  { name: "REST APIs", level: 90, category: "backend", icon: "api" },
  
  // Database
  { name: "MySQL", level: 90, category: "database", icon: "mysql" },
  { name: "MongoDB", level: 85, category: "database", icon: "mongodb" },
  { name: "Prisma ORM", level: 75, category: "database", icon: "prisma" },
  
  // Digital Marketing
  { name: "Facebook Marketing", level: 95, category: "tools", icon: "seo" },
  { name: "Google Ads", level: 90, category: "tools", icon: "seo" },
  { name: "SEO Optimization", level: 92, category: "tools", icon: "seo" },
  { name: "Social Media Marketing", level: 88, category: "tools", icon: "seo" },
  { name: "Content Marketing", level: 85, category: "tools", icon: "seo" },
  { name: "Email Marketing", level: 80, category: "tools", icon: "seo" },
  { name: "Analytics & Reporting", level: 88, category: "tools", icon: "performance" },
  
  // Tools & CMS
  { name: "WordPress", level: 95, category: "tools", icon: "wordpress" },
  { name: "WooCommerce", level: 90, category: "tools", icon: "woocommerce" },
  { name: "Git/GitHub", level: 88, category: "tools", icon: "git" },
  { name: "cPanel", level: 85, category: "tools", icon: "cpanel" },
  { name: "Figma", level: 80, category: "tools", icon: "figma" },
  { name: "Performance Optimization", level: 88, category: "tools", icon: "performance" }
];

export const experiences: Experience[] = [
  {
    id: "1",
    company: "Banglay IELTS",
    position: "Web Developer",
    location: "Dhaka, Bangladesh",
    startDate: "2024-12",
    endDate: "",
    current: true,
    description: "Leading web development initiatives for Banglay IELTS with focus on Bengali-speaking audience and educational content delivery.",
    achievements: [
      "Developed and maintained Bengali content-oriented websites and landing pages for IELTS coaching",
      "Implemented SEO best practices resulting in 150% increase in organic traffic",
      "Created conversion-optimized CTAs and funnels improving enrollment rates by 40%",
      "Achieved Lighthouse performance scores of 90+ across all projects",
      "Established security protocols and automated backup systems for data protection"
    ]
  },
  {
    id: "2",
    company: "Freelance",
    position: "Full Stack Web Developer",
    location: "Dhaka, Bangladesh (Remote)",
    startDate: "2024-06",
    endDate: "2024-06",
    current: true,
    description: "Providing comprehensive web development solutions to local and international clients across various industries.",
    achievements: [
      "Delivered 15+ WordPress websites with custom themes and plugin development",
      "Built 5+ WooCommerce stores with payment gateway integrations",
      "Developed React/Node.js applications with authentication and dashboard features",
      "Created Laravel-based APIs for mobile and web applications",
      "Maintained 100% client satisfaction with clean UI/UX and responsive designs",
      "Ensured accessibility compliance and cross-browser compatibility"
    ]
  },
  {
    id: "3",
    company: "Programming Hero",
    position: "Student - Batch 8",
    location: "Online",
    startDate: "2023-06",
    endDate: "2023-12",
    current: false,
    description: "Completed comprehensive web development course covering modern technologies and best practices.",
    achievements: [
      "Learned HTML, CSS, JavaScript, React, Node.js fundamentals",
      "Completed 10+ hands-on projects during the course",
      "Participated in collaborative development and code reviews",
      "Gained practical experience with modern development tools",
      "Developed strong problem-solving and debugging skills"
    ]
  }
];

export const education: Education[] = [
  {
    id: "1",
    institution: "National University, Bangladesh",
    degree: "Post Graduation",
    field: "Completed",
    startDate: "2022-09",
    endDate: "2024-02",
    description: "Successfully completed post graduation degree from National University, Bangladesh."
  }
];

export const services: Service[] = [
  {
    id: "1",
    title: "WordPress Development",
    description: "Custom WordPress solutions from theme development to complex plugin creation",
    icon: "wordpress",
    features: [
      "Custom theme development",
      "Plugin development & customization",
      "WooCommerce integration",
      "Performance optimization",
      "SEO implementation",
      "Migration & maintenance"
    ]
  },
  {
    id: "2",
    title: "React Applications",
    description: "Modern single-page applications with React and Next.js",
    icon: "react",
    features: [
      "SPA development",
      "Component architecture",
      "State management",
      "API integration",
      "TypeScript implementation",
      "Performance optimization"
    ]
  },
  {
    id: "3",
    title: "Backend Development",
    description: "Scalable server-side solutions with Node.js and Laravel",
    icon: "backend",
    features: [
      "RESTful API development",
      "Database design & optimization",
      "Authentication & authorization",
      "Laravel/PHP applications",
      "Node.js/Express servers",
      "Third-party integrations"
    ]
  },
  {
    id: "4",
    title: "Facebook Marketing",
    description: "Comprehensive Facebook advertising and social media marketing campaigns",
    icon: "facebook",
    features: [
      "Facebook Ads management",
      "Audience targeting & segmentation",
      "Ad creative design",
      "Campaign optimization",
      "ROI tracking & analytics",
      "Social media strategy"
    ]
  },
  {
    id: "5",
    title: "E-commerce Solutions",
    description: "Complete online store setup and customization",
    icon: "ecommerce",
    features: [
      "WooCommerce setup",
      "Payment gateway integration",
      "Inventory management",
      "Custom checkout flows",
      "Order tracking systems",
      "Multi-vendor marketplaces"
    ]
  },
  {
    id: "6",
    title: "Educational Platforms",
    description: "Learning management systems and educational websites",
    icon: "education",
    features: [
      "LMS development",
      "Course management",
      "Student portals",
      "Quiz & assessment systems",
      "Progress tracking",
      "Certificate generation"
    ]
  },
  {
    id: "7",
    title: "Performance & SEO",
    description: "Website optimization for speed and search engine visibility",
    icon: "optimization",
    features: [
      "Speed optimization",
      "Core Web Vitals",
      "Technical SEO",
      "Schema markup",
      "Content optimization",
      "Analytics setup"
    ]
  }
];
