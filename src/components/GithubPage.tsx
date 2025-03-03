import React, { useState } from 'react';
import { Github } from 'lucide-react';

interface Repository {
  id: number;
  name: string;
  description: string;
  stars: number;
  forks: number;
  language: string;
}

const GithubPage = () => {
  const [activeTab, setActiveTab] = useState('repositories');
  
  // Mock repositories data
  const repositories: Repository[] = [
    {
      id: 1,
      name: "quantum-shield",
      description: "Advanced quantum-resistant encryption library for secure communications",
      stars: 342,
      forks: 87,
      language: "Rust"
    },
    {
      id: 2,
      name: "neural-firewall",
      description: "AI-powered firewall with adaptive learning capabilities",
      stars: 528,
      forks: 124,
      language: "Python"
    },
    {
      id: 3,
      name: "tactical-scanner",
      description: "Network vulnerability scanner with advanced threat detection",
      stars: 276,
      forks: 63,
      language: "Go"
    },
    {
      id: 4,
      name: "zero-day-tracker",
      description: "Tool for monitoring and analyzing zero-day vulnerabilities",
      stars: 189,
      forks: 42,
      language: "TypeScript"
    },
    {
      id: 5,
      name: "secure-comms",
      description: "End-to-end encrypted communication protocol for sensitive data",
      stars: 412,
      forks: 95,
      language: "C++"
    },
    {
      id: 6,
      name: "threat-intelligence",
      description: "Open-source threat intelligence platform with real-time updates",
      stars: 367,
      forks: 78,
      language: "JavaScript"
    }
  ];

  // Language color mapping
  const languageColors: Record<string, string> = {
    "Rust": "bg-orange-600",
    "Python": "bg-blue-600",
    "Go": "bg-cyan-600",
    "TypeScript": "bg-blue-500",
    "C++": "bg-purple-600",
    "JavaScript": "bg-yellow-500"
  };

  return (
    <section id="github" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 section-title">
            <span className="text-cyan-400">//</span> OPEN SOURCE
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 mx-auto"></div>
          <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
            We believe in the power of open source. Check out our contributions to the cybersecurity community.
          </p>
        </div>
        
        <div className="relative">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-lg blur opacity-30"></div>
          <div className="relative bg-gray-900 rounded-lg border border-cyan-800/30 overflow-hidden">
            <div className="flex border-b border-cyan-800/30">
              <button
                className={`px-6 py-4 flex items-center ${
                  activeTab === 'repositories' 
                    ? 'bg-gray-800 text-cyan-400 border-b-2 border-cyan-400' 
                    : 'text-gray-400 hover:text-white'
                }`}
                onClick={() => setActiveTab('repositories')}
              >
                <Github className="w-5 h-5 mr-2" />
                Repositories
              </button>
              <button
                className={`px-6 py-4 flex items-center ${
                  activeTab === 'contributions' 
                    ? 'bg-gray-800 text-cyan-400 border-b-2 border-cyan-400' 
                    : 'text-gray-400 hover:text-white'
                }`}
                onClick={() => setActiveTab('contributions')}
              >
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM7 13.5C7 12.12 8.12 11 9.5 11C10.88 11 12 12.12 12 13.5C12 14.88 10.88 16 9.5 16C8.12 16 7 14.88 7 13.5ZM16.5 16C15.12 16 14 14.88 14 13.5C14 12.12 15.12 11 16.5 11C17.88 11 19 12.12 19 13.5C19 14.88 17.88 16 16.5 16ZM12 8C10.62 8 9.5 6.88 9.5 5.5C9.5 4.12 10.62 3 12 3C13.38 3 14.5 4.12 14.5 5.5C14.5 6.88 13.38 8 12 8Z" fill="currentColor" />
                </svg>
                Contributions
              </button>
            </div>
            
            {activeTab === 'repositories' && (
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {repositories.map((repo) => (
                    <div 
                      key={repo.id} 
                      className="bg-gray-800/50 border border-cyan-800/20 rounded-lg p-5 hover:border-cyan-400/30 transition-colors"
                    >
                      <h3 className="text-xl font-bold text-white mb-2 flex items-center">
                        <Github className="w-5 h-5 mr-2 text-cyan-400" />
                        {repo.name}
                      </h3>
                      <p className="text-gray-400 mb-4 h-12 overflow-hidden">
                        {repo.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className={`w-3 h-3 rounded-full ${languageColors[repo.language]} mr-2`}></div>
                          <span className="text-gray-400 text-sm">{repo.language}</span>
                        </div>
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center">
                            <svg className="w-4 h-4 text-yellow-400 mr-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" fill="currentColor" />
                            </svg>
                            <span className="text-gray-400 text-sm">{repo.stars}</span>
                          </div>
                          <div className="flex items-center">
                            <svg className="w-4 h-4 text-gray-400 mr-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M6 2C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2H6ZM13 9V3.5L18.5 9H13Z" fill="currentColor" />
                            </svg>
                            <span className="text-gray-400 text-sm">{repo.forks}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 text-center">
                  <a 
                    href="https://github.com/tacticalzero" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-secondary inline-flex items-center"
                  >
                    <Github className="w-5 h-5 mr-2" />
                    View All Repositories
                  </a>
                </div>
              </div>
            )}
            
            {activeTab === 'contributions' && (
              <div className="p-6">
                <div className="bg-gray-800/50 border border-cyan-800/20 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-white mb-4">Contribution Activity</h3>
                  
                  <div className="space-y-6">
                    {/* Contribution calendar visualization */}
                    <div className="grid grid-cols-7 gap-1">
                      {Array.from({ length: 35 }).map((_, index) => {
                        // Generate random contribution intensity
                        const intensity = Math.floor(Math.random() * 5);
                        let bgColor = 'bg-gray-700';
                        
                        if (intensity === 1) bgColor = 'bg-cyan-900/30';
                        if (intensity === 2) bgColor = 'bg-cyan-800/40';
                        if (intensity === 3) bgColor = 'bg-cyan-700/50';
                        if (intensity === 4) bgColor = 'bg-cyan-600/60';
                        
                        return (
                          <div 
                            key={index} 
                            className={`w-full aspect-square ${bgColor} rounded-sm`}
                            title={`${Math.floor(Math.random() * 10)} contributions`}
                          ></div>
                        );
                      })}
                    </div>
                    
                    <div className="space-y-4">
                      {/* Recent activity items */}
                      {[
                        {
                          action: "Opened pull request",
                          repo: "neural-firewall",
                          description: "Add support for custom neural network architectures",
                          time: "2 days ago"
                        },
                        {
                          action: "Merged pull request",
                          repo: "quantum-shield",
                          description: "Implement post-quantum cryptography algorithms",
                          time: "5 days ago"
                        },
                        {
                          action: "Created issue",
                          repo: "tactical-scanner",
                          description: "Add support for IPv6 scanning",
                          time: "1 week ago"
                        },
                        {
                          action: "Commented on issue",
                          repo: "zero-day-tracker",
                          description: "Improve vulnerability classification system",
                          time: "2 weeks ago"
                        }
                      ].map((item, index) => (
                        <div key={index} className="flex items-start">
                          <div className="w-2 h-2 rounded-full bg-cyan-400 mt-2 mr-3"></div>
                          <div>
                            <div className="flex items-center text-sm">
                              <span className="text-cyan-400 font-medium">{item.action}</span>
                              <span className="mx-1 text-gray-500">in</span>
                              <span className="text-white font-medium">{item.repo}</span>
                              <span className="ml-2 text-gray-500">{item.time}</span>
                            </div>
                            <p className="text-gray-400 text-sm mt-1">{item.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-block border border-cyan-800/50 bg-black/30 backdrop-blur-sm px-6 py-4 rounded-md">
            <div className="flex items-center justify-center">
              <Github className="w-6 h-6 text-cyan-400 mr-3" />
              <p className="text-gray-300">
                Join our <span className="text-cyan-400 font-bold">open-source community</span> and contribute to a more secure digital world
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GithubPage;