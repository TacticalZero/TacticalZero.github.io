import React from 'react';
import { Shield, Code, Cpu, Zap } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: <Shield className="w-10 h-10" />,
      title: "Cybersecurity Solutions",
      description: "Comprehensive protection against advanced persistent threats, zero-day exploits, and sophisticated cyber attacks.",
      features: ["Threat Intelligence", "Vulnerability Assessment", "Incident Response", "Security Audits"]
    },
    {
      icon: <Cpu className="w-10 h-10" />,
      title: "AI-Powered Analysis",
      description: "Machine learning algorithms that continuously monitor and adapt to evolving threat landscapes.",
      features: ["Behavioral Analysis", "Anomaly Detection", "Predictive Threat Modeling", "Automated Response"]
    },
    {
      icon: <Code className="w-10 h-10" />,
      title: "Secure Development",
      description: "Building security into your applications from the ground up with our secure development lifecycle.",
      features: ["Secure Coding Practices", "Code Reviews", "Dependency Scanning", "DevSecOps Integration"]
    },
    {
      icon: <Zap className="w-10 h-10" />,
      title: "Penetration Testing",
      description: "Ethical hacking services to identify and remediate vulnerabilities before they can be exploited.",
      features: ["Network Penetration", "Web Application Testing", "Social Engineering", "Physical Security Assessment"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-black/30 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 section-title">
            <span className="text-cyan-400">//</span> OUR SERVICES
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 mx-auto"></div>
          <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
            Cutting-edge cybersecurity services designed to protect your digital assets in an increasingly hostile environment.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="service-card group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-gray-900 p-6 rounded-lg border border-cyan-800/30 h-full">
                <div className="flex items-center mb-4">
                  <div className="mr-4 p-3 bg-cyan-900/30 rounded-lg text-cyan-400">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white">{service.title}</h3>
                </div>
                <p className="text-gray-400 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <span className="mr-2 text-cyan-400">›</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a href="https://github.com/orgs/TacticalZero/discussions" className="btn-primary">
            Request Consultation
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;