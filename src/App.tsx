import React, { useState, useEffect } from 'react';
import { 
  Shield, 
  Code, 
  Cpu, 
  Zap, 
  Github, 
  Twitter, 
  Linkedin, 
  Mail,
  Menu,
  X
} from 'lucide-react';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import ProjectsSection from './components/ProjectsSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import GithubPage from './components/GithubPage';

function App() {
  const [visitCount, setVisitCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading screen
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    // Simulate visit counter
    const randomVisits = Math.floor(Math.random() * 10000) + 5000;
    setVisitCount(randomVisits);
    
    const interval = setInterval(() => {
      setVisitCount(prev => prev + 1);
    }, 30000);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 mb-4 glitch-text">
            TACTICAL<span className="text-red-500">ZERO</span>
          </h1>
          <div className="loading-bar">
            <div className="loading-progress"></div>
          </div>
          <p className="text-cyan-400 mt-4 terminal-text">INITIALIZING SYSTEM...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 overflow-hidden">
      <div className="grid-overlay"></div>
      <Navbar />
      <HeroSection visitCount={visitCount} />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <TestimonialsSection />
      <GithubPage />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;