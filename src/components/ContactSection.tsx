import React, { useState } from 'react';
import { Mail } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would handle form submission here
    console.log('Form submitted:', formData);
    alert('Message sent! We will contact you shortly.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 section-title">
            <span className="text-cyan-400">//</span> CONTACT US
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 mx-auto"></div>
          <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
            Ready to secure your digital assets? Get in touch with our team of cybersecurity experts.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-lg blur opacity-30"></div>
              <div className="relative bg-gray-900 p-8 rounded-lg border border-cyan-800/30 h-full">
                <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
                
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-4 text-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-4 text-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                      />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="subject" className="block text-gray-300 mb-2">Subject</label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-4 text-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                    >
                      <option value="">Select a subject</option>
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Cybersecurity Consultation">Cybersecurity Consultation</option>
                      <option value="Penetration Testing">Penetration Testing</option>
                      <option value="AI Solutions">AI Solutions</option>
                      <option value="Partnership Opportunity">Partnership Opportunity</option>
                    </select>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-4 text-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="btn-primary w-full"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
          
          <div>
            <div className="relative h-full">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-lg blur opacity-30"></div>
              <div className="relative bg-gray-900 p-8 rounded-lg border border-cyan-800/30 h-full">
                <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-cyan-400 font-bold mb-2">Headquarters</h4>
                    <p className="text-gray-300">Cyber Defense Tower</p>
                    <p className="text-gray-300">1337 Secure Street</p>
                    <p className="text-gray-300">Tech District, TX 75001</p>
                  </div>
                  
                  <div>
                    <h4 className="text-cyan-400 font-bold mb-2">Contact</h4>
                    <p className="text-gray-300">contact@tacticalzero.com</p>
                    <p className="text-gray-300">+1 (555) 123-4567</p>
                  </div>
                  
                  <div>
                    <h4 className="text-cyan-400 font-bold mb-2">Hours of Operation</h4>
                    <p className="text-gray-300">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-300">24/7 Emergency Response Available</p>
                  </div>
                </div>
                
                <div className="mt-8">
                  <div className="relative w-full h-64 rounded-lg overflow-hidden border border-cyan-800/30">
                    <div className="absolute inset-0 bg-cyan-900/20"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <Mail className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                        <p className="text-gray-300">Interactive map would be displayed here</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;