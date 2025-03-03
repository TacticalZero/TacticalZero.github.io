import React, { useState } from 'react';
import { X } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  details: string;
}

const ProjectsSection = () => {
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "Project Sentinel",
      category: "cybersecurity",
      description: "Advanced threat detection system for enterprise networks",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
      details: "Project Sentinel is our flagship enterprise security solution that provides real-time threat detection and response capabilities. Using a combination of signature-based detection, behavioral analysis, and machine learning algorithms, Sentinel can identify and neutralize threats before they compromise your systems."
    },
    {
      id: 2,
      title: "Neural Shield",
      category: "ai",
      description: "AI-powered firewall with adaptive learning capabilities",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
      details: "Neural Shield represents the next generation of firewall technology. By incorporating advanced neural networks, this system continuously learns from attack patterns and adapts its defenses accordingly. The result is a dynamic security barrier that becomes more effective over time."
    },
    {
      id: 3,
      title: "Phantom Protocol",
      category: "penetration",
      description: "Comprehensive penetration testing framework",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
      details: "Phantom Protocol is our proprietary penetration testing framework designed to identify vulnerabilities in your systems before malicious actors can exploit them. This comprehensive suite includes tools for network scanning, vulnerability assessment, exploitation, and post-exploitation activities."
    },
    {
      id: 4,
      title: "Secure Nexus",
      category: "development",
      description: "Secure development platform with integrated security testing",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
      details: "Secure Nexus is a development platform that integrates security testing throughout the software development lifecycle. By incorporating static code analysis, dependency scanning, and dynamic application security testing, Nexus helps developers build secure applications from the ground up."
    },
    {
      id: 5,
      title: "Quantum Vault",
      category: "cybersecurity",
      description: "Quantum-resistant encryption for sensitive data",
      image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
      details: "Quantum Vault provides state-of-the-art encryption that is resistant to quantum computing attacks. As quantum computers become more powerful, traditional encryption methods will become vulnerable. Quantum Vault uses post-quantum cryptographic algorithms to ensure your data remains secure in the quantum era."
    },
    {
      id: 6,
      title: "Tactical Response",
      category: "ai",
      description: "Automated incident response system with AI decision support",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
      details: "Tactical Response is an automated incident response system that uses artificial intelligence to provide decision support during security incidents. By analyzing threat intelligence, system logs, and network traffic, Tactical Response can recommend and even implement response actions to contain and remediate security breaches."
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 section-title">
            <span className="text-cyan-400">//</span> OUR PROJECTS
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 mx-auto"></div>
          <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
            Explore our portfolio of cutting-edge cybersecurity projects and solutions.
          </p>
        </div>
        
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-gray-800/50 rounded-lg p-1">
            {[
              { id: 'all', label: 'All Projects' },
              { id: 'cybersecurity', label: 'Cybersecurity' },
              { id: 'ai', label: 'AI Solutions' },
              { id: 'penetration', label: 'Penetration Testing' },
              { id: 'development', label: 'Secure Development' }
            ].map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-4 py-2 rounded-md transition-all ${
                  filter === category.id 
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="project-card group cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-gray-900 rounded-lg border border-cyan-800/30 overflow-hidden h-full">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                    <span className="text-xs px-2 py-1 bg-cyan-900/50 text-cyan-400 rounded-full">
                      {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                    </span>
                  </div>
                  <p className="text-gray-400">{project.description}</p>
                  <div className="mt-4 flex justify-end">
                    <button className="text-cyan-400 text-sm hover:text-cyan-300 transition-colors">
                      View Details →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setSelectedProject(null)}></div>
          <div className="relative bg-gray-900 rounded-lg border border-cyan-800/30 w-full max-w-4xl max-h-[90vh] overflow-auto">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-lg blur opacity-30"></div>
            <div className="relative p-6">
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>
              
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/2">
                  <div className="rounded-lg overflow-hidden border border-cyan-800/30">
                    <img 
                      src={selectedProject.image} 
                      alt={selectedProject.title} 
                      className="w-full h-auto"
                    />
                  </div>
                </div>
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-bold text-white mb-2">{selectedProject.title}</h3>
                  <span className="inline-block text-xs px-2 py-1 bg-cyan-900/50 text-cyan-400 rounded-full mb-4">
                    {selectedProject.category.charAt(0).toUpperCase() + selectedProject.category.slice(1)}
                  </span>
                  <p className="text-gray-300 mb-6">{selectedProject.details}</p>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <span className="text-cyan-400 mr-2">›</span>
                      <span className="text-gray-300">Advanced security protocols</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-cyan-400 mr-2">›</span>
                      <span className="text-gray-300">Real-time monitoring and alerts</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-cyan-400 mr-2">›</span>
                      <span className="text-gray-300">Scalable architecture</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-cyan-400 mr-2">›</span>
                      <span className="text-gray-300">Enterprise-grade protection</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;