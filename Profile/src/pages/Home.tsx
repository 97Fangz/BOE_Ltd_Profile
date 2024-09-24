import React, { useState } from 'react';
import { ChevronDown, ChevronUp, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';
import CompanyInfo from '../components/CompanyInfo';
import Services from '../components/Services';
import History from '../components/History';

const SectionWrapper = ({ children, title, icon: Icon }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full max-w-6xl mx-auto mb-8 bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
      <div 
        className="bg-gradient-to-r from-blue-50 to-blue-100 px-6 py-4 flex justify-between items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center space-x-3">
          {Icon && <Icon className="text-blue-600 w-6 h-6" />}
          <h2 className="text-2xl font-semibold text-blue-800">{title}</h2>
        </div>
        {isOpen ? <ChevronUp className="text-blue-600" /> : <ChevronDown className="text-blue-600" />}
      </div>
      <div className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
};

const HeroSection = () => (
  <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-24 px-4 sm:px-6 lg:px-8 rounded-lg shadow-lg mb-16 overflow-hidden">
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute transform -translate-x-1/2 -translate-y-1/2 animate-pulse" style={{ top: '50%', left: '50%' }}>
        <svg width="2000" height="2000" viewBox="0 0 2000 2000" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#4299e1', stopOpacity: 0.1 }} />
              <stop offset="100%" style={{ stopColor: '#3182ce', stopOpacity: 0.3 }} />
            </linearGradient>
          </defs>
          <circle cx="1000" cy="1000" r="800" fill="url(#grad)" />
        </svg>
      </div>
    </div>
    <div className="relative max-w-4xl mx-auto text-center">
      <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl mb-6">
        Global Logistics. <span className="text-yellow-400">Precious</span> Delivaries.
      </h1>
      <p className="text-xl md:text-2xl font-medium mb-10">
        Premium gold solutions for a prosperous future.
      </p>
      <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
        
      </div>
    </div>
  </section>
);

const TestimonialSection = () => (
  <section className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8 rounded-lg shadow-inner mb-16">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">What Our Clients Say</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-gray-600 mb-4">"I had a fantastic experience purchasing gold from BOE Limited. The process was seamless, and the team was incredibly professional, guiding me through every step with clarity and confidence. The quality of the gold exceeded my expectations, and their customer service was top-notch. Highly recommended for anyone looking to invest in gold!"</p>
          <p className="font-semibold text-blue-600">- John Doe, CEO of TechCorp</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-gray-600 mb-4">"BOE Limited made my gold purchase easy and stress-free. Their knowledgeable staff answered all my questions, ensuring I felt secure in my decision. The transaction was smooth, and the gold quality was exceptional. I wouldn’t hesitate to recommend them for gold investments!"</p>
          <p className="font-semibold text-blue-600">- Jane Smith, CTO of InnovateCo</p>
        </div>
      </div>
    </div>
  </section>
);

const ContactSection = () => (
  <section id="contact" className="bg-blue-50 py-16 px-4 sm:px-6 lg:px-8 rounded-lg shadow-inner mb-16">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Get in Touch</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
          <ul className="space-y-4">
            <li className="flex items-center">
              <Phone className="w-6 h-6 text-blue-600 mr-2" />
              <span>+254715119636</span>
            </li>
            <li className="flex items-center">
              <Mail className="w-6 h-6 text-blue-600 mr-2" />
              <span>boeltdcompany@gmail.com</span>
            </li>
            <li className="flex items-center">
              <MapPin className="w-6 h-6 text-blue-600 mr-2" />
              <span>Mali</span>
            </li>
            <li className="flex items-center">
              <MapPin className="w-6 h-6 text-blue-600 mr-2" />
              <span>Kenya</span>
            </li>
          </ul>
        </div>
        <form className="space-y-4">
          <input type="text" placeholder="Your Name" className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <input type="email" placeholder="Your Email" className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <textarea placeholder="Your Message" rows="4" className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
          <button type="submit" className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
            Send Message
          </button>
        </form>
      </div>
    </div>
  </section>
);

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <HeroSection />
        
        <SectionWrapper 
          title="Company Overview" 
          icon={() => <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" /></svg>}
        >
          <CompanyInfo />
        </SectionWrapper>
        
        <SectionWrapper 
          title="Our Services" 
          icon={() => <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" /><path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" /></svg>}
        >
          <Services />
        </SectionWrapper>
        
        <TestimonialSection />
        
        <SectionWrapper 
          title="Our Journey" 
          icon={() => <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" /></svg>}
        >
          <History />
        </SectionWrapper>
        
        <ContactSection />
      </div>
    </div>
  );
};

export default Home;