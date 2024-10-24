// src/pages/Contact/Contact.tsx
import React from 'react';
import HeroSection from './HeroSection';
import ContactSection from './ContactSection';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800">
      <HeroSection />
      <ContactSection />
    </div>
  );
};

export default Contact;