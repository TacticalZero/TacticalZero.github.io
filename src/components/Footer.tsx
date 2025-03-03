import React from 'react';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black py-12 relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">TACTICAL<span className="text-red-500">ZERO</span></h3>
            <p className="text-gray-400 mb-4">
              Advanced cybersecurity solutions for the digital battlefield. Protecting your assets in an increasingly hostile environment.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/orgs/TacticalZero" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Github size={20} />
              </a>
              <a href="https://x.com/rohannaagar666" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://www.linkedin.com/in/rohan-naagar-779310322" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:rohannaagar666@outlook.com" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="https://Support.github.io/" className="text-gray-400 hover:text-cyan-400 transition-colors">Cybersecurity</a></li>
              <li><a href="https://Support.github.io/" className="text-gray-400 hover:text-cyan-400 transition-colors">AI Solutions</a></li>
              <li><a href="https://Support.github.io/" className="text-gray-400 hover:text-cyan-400 transition-colors">Penetration Testing</a></li>
              <li><a href="https://Support.github.io/" className="text-gray-400 hover:text-cyan-400 transition-colors">Secure Development</a></li>
              <li><a href="https://Support.github.io/" className="text-gray-400 hover:text-cyan-400 transition-colors">Threat Intelligence</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="https://Support.github.io/" className="text-gray-400 hover:text-cyan-400 transition-colors">Blog</a></li>
              <li><a href="https://Support.github.io/" className="text-gray-400 hover:text-cyan-400 transition-colors">Documentation</a></li>
              <li><a href="https://Support.github.io/" className="text-gray-400 hover:text-cyan-400 transition-colors">Case Studies</a></li>
              <li><a href="https://Support.github.io/" className="text-gray-400 hover:text-cyan-400 transition-colors">White Papers</a></li>
              <li><a href="https://Support.github.io/" className="text-gray-400 hover:text-cyan-400 transition-colors">Security Advisories</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="https://Support.github.io/" className="text-gray-400 hover:text-cyan-400 transition-colors">Privacy Policy</a></li>
              <li><a href="https://Support.github.io/" className="text-gray-400 hover:text-cyan-400 transition-colors">Terms of Service</a></li>
              <li><a href="https://Support.github.io/" className="text-gray-400 hover:text-cyan-400 transition-colors">Cookie Policy</a></li>
              <li><a href="https://Support.github.io/" className="text-gray-400 hover:text-cyan-400 transition-colors">GDPR Compliance</a></li>
              <li>
                <div className="flex items-center">
                  <span className="inline-block w-4 h-4 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full mr-2"></span>
                  <span className="text-gray-400">Creative Commons License</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} TacticalZero. All rights reserved.
            </p>
            <div className="flex items-center space-x-4">
              <div className="inline-block px-3 py-1 bg-gray-800 rounded-md">
                <div className="flex items-center">
                  <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  <span className="text-gray-400 text-sm">Open Source Contributor</span>
                </div>
              </div>
              <div className="inline-block px-3 py-1 bg-gray-800 rounded-md">
                <div className="flex items-center">
                  <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  <span className="text-gray-400 text-sm">Verified Security</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;