import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Download, Instagram, Phone } from 'lucide-react';

interface SectionWrapperProps {
  children: React.ReactNode;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ children, title, icon: Icon }) => {
  const [isOpen, setIsOpen] = useState(true);

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
        About <span className="text-yellow-400">BOE Limited</span>
      </h1>
      <p className="text-xl md:text-2xl font-medium mb-10">
        Discover our story, mission, and the people behind our success in mineral mining and selling.
      </p>
    </div>
  </section>
);

const AboutSection = () => (
  <SectionWrapper 
    title="About the Company" 
    icon={() => <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" /></svg>}
  >
    <p className="text-lg text-gray-700">
      BOE Limited is a premier mineral mining and selling company founded by Joel Chesiro in 2023. Specializing in gold, diamonds, gemstones, and other minerals, we are a trusted source for high-quality minerals.
    </p>
  </SectionWrapper>
);

const HistorySection = () => (
  <SectionWrapper 
    title="Brief History" 
    icon={() => <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" /></svg>}
  >
    <p className="text-lg text-gray-700">
      Founded in 2023 by Joel Chesiro, BOE Limited has quickly established itself as a leading provider of high-quality minerals. Known for our commitment to excellence and integrity, we strive to offer the best products and services to our clients.
    </p>
  </SectionWrapper>
);

const ServicesSection = () => (
  <SectionWrapper 
    title="Our Services" 
    icon={() => <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" /></svg>}
  >
    <p className="text-lg text-gray-700">
      We provide a comprehensive range of services including the mining and sale of gold, diamonds, gemstones, and other minerals. Our consulting services help clients maximize the value of their mineral assets.
    </p>
  </SectionWrapper>
);

const GallerySection = () => (
  <SectionWrapper 
    title="Gallery" 
    icon={() => <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" /></svg>}
  >
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      <img src="/image1.jpeg" alt="Mineral 1" className="w-full h-auto rounded-lg shadow-md" />
      <img src="/image2.jpeg" alt="Mineral 2" className="w-full h-auto rounded-lg shadow-md" />
      <img src="/image3.jpeg" alt="Mineral 3" className="w-full h-auto rounded-lg shadow-md" />
    </div>
  </SectionWrapper>
);

const AchievementsSection = () => (
  <SectionWrapper 
    title="Key Achievements" 
    icon={() => <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" /></svg>}
  >
    <p className="text-lg text-gray-700">
      BOE Limited has achieved numerous milestones, recognized for excellence and innovation. Our products are used across various applications, including jewelry and electronics. We are proud of our accomplishments and look forward to continuing to serve our customers.
    </p>
  </SectionWrapper>
);

// const TeamSection = () => (
  <SectionWrapper 
    title="Management Team" 
    icon={() => <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" /></svg>}
  >
    <div className="flex items-center space-x-4 bg-blue-50 p-4 rounded-lg">
      <img src="/Image4Joe.jpg" alt="Joel Chesiro" className="w-16 h-16 rounded-full" />
      <div>
        <h3 className="text-xl font-semibold text-blue-800">Joel Chesiro</h3>
        <p className="text-blue-600">Founder</p>
        <div className="flex space-x-2 mt-2">
          <a href="https://www.instagram.com/boelimited" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
            <Instagram size={20} />
          </a>
          <a href="https://wa.me/254715119636" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
            <Phone size={20} />
          </a>
        </div>
      </div>
    </div>
  </SectionWrapper>
// );

const DownloadSection = () => (
  <div className="bg-blue-50 p-8 rounded-lg shadow-lg text-center mb-8">
    <h2 className="text-3xl font-bold text-blue-800 mb-4">Download Our Company Profile</h2>
    <p className="text-lg text-gray-700 mb-6">
      For a detailed overview of our services, history, and key achievements, download our company profile.
    </p>
    <a
      href="/BOE_Limited_Company_Profile_edited.pdf"
      download="BOE_Limited_Company_Profile.pdf"
      className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
    >
      <Download className="mr-2" /> Download Profile
    </a>
  </div>
);

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <HeroSection />
        <AboutSection />
        <HistorySection />
        <ServicesSection />
        <GallerySection />
        <AchievementsSection />
        <TeamSection />
        <DownloadSection />
      </div>
    </div>
  );
};

export default AboutPage;
