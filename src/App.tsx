import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Import separate pages
import AboutPage from './pages/About';
import ProjectsPage from './pages/Projects';
import SkillsPage from './pages/Skills';
import ExperiencePage from './pages/Experience';
import ContactPage from './pages/Contact';

// 3D Floating Digital Marketing Elements for Global Animation
const GlobalDigitalMarketingAnimation = () => {
  const marketingElements = [
    '📊', '📈', '💼', '🎯', '📱', '💻', '🚀', '⭐', '💡', '🎨',
    '📢', '📋', '📞', '📧', '🌐', '🔗', '📱', '💼', '🎯', '📊'
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {marketingElements.map((element, index) => (
        <div
          key={index}
          className="absolute text-2xl opacity-10 animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${5 + Math.random() * 10}s`,
          }}
        >
          {element}
        </div>
      ))}
    </div>
  );
};

function App() {
  return (
    <Router>
      <div className="App bg-black text-white min-h-screen">
        <GlobalDigitalMarketingAnimation />
        
        <Routes>
          {/* Main Portfolio Page */}
          <Route path="/" element={
            <>
              <Header />
              <main>
                <Hero />
                <About />
                <Projects />
                <Skills />
                <Experience />
                <Testimonials />
                <Contact />
              </main>
              <Footer />
            </>
          } />
          
          {/* Separate Pages */}
          <Route path="/about" element={
            <>
              <Header />
              <AboutPage />
              <Footer />
            </>
          } />
          
          <Route path="/projects" element={
            <>
              <Header />
              <ProjectsPage />
              <Footer />
            </>
          } />
          
          <Route path="/skills" element={
            <>
              <Header />
              <SkillsPage />
              <Footer />
            </>
          } />
          
          <Route path="/experience" element={
            <>
              <Header />
              <ExperiencePage />
              <Footer />
            </>
          } />
          
          <Route path="/contact" element={
            <>
              <Header />
              <ContactPage />
              <Footer />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;