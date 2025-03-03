import React from 'react';
import { Shield, Code, Cpu } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 section-title">
            <span className="text-cyan-400">//</span> ABOUT TACTICAL<span className="text-red-500">ZERO</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <Shield className="w-12 h-12 text-cyan-400" />,
              title: "Advanced Protection",
              description: "We provide cutting-edge cybersecurity solutions to protect your digital assets from evolving threats in the cyber battlefield."
            },
            {
              icon: <Code className="w-12 h-12 text-cyan-400" />,
              title: "Tactical Development",
              description: "Our team of elite developers creates custom security software tailored to your specific operational requirements."
            },
            {
              icon: <Cpu className="w-12 h-12 text-cyan-400" />,
              title: "AI-Powered Analysis",
              description: "Leveraging advanced artificial intelligence to detect, analyze, and neutralize threats before they compromise your systems."
            }
          ].map((item, index) => (
            <div 
              key={index} 
              className="cyber-card group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-gray-900 p-8 rounded-lg border border-cyan-800/30 h-full flex flex-col items-center text-center">
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-black/50 border border-cyan-800/30 rounded-lg p-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <h3 className="text-2xl font-bold mb-4 text-cyan-400">Our Mission</h3>
              <p className="text-gray-300 mb-4 terminal-text">
                TacticalZero was founded with a clear objective: to provide unparalleled cybersecurity solutions in an increasingly hostile digital landscape.
              </p>
              <p className="text-gray-300 terminal-text">
                We combine military-grade security protocols with cutting-edge technology to create defensive and offensive security measures that stay ahead of emerging threats.
              </p>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-lg blur opacity-75"></div>
                <div className="relative bg-gray-900 p-1 rounded-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80" 
                    alt="Cybersecurity Operations" 
                    className="rounded-lg w-full h-64 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;