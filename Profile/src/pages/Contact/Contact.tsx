// Contact.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Instagram, User as TikTok } from 'lucide-react';
import HeroSection from './HeroSection';
import ContactSection from './ContactSection';
import ContactCard from './ContactCard';

// Contact data for reusability across components
export const contactData = [
  {
    icon: <Phone size={24} />,
    title: "Phone",
    description: "Reach out directly",
    content: ["+254798877813", "+254715119636"],
    action: "tel:+254798877813"
  },
  {
    icon: <Mail size={24} />,
    title: "Email",
    description: "Send us a message",
    content: ["boelimited275@gmail.com"],
    action: "mailto:boelimited275@gmail.com"
  },
  {
    icon: <MapPin size={24} />,
    title: "Location",
    description: "Find us here",
    content: ["Mali Location", "Kenya Location"],
    action: "https://www.google.com/maps/place/Mali"
  },
  {
    icon: <Instagram size={24} />,
    title: "Instagram",
    description: "Follow our updates",
    content: ["@boelimited"],
    action: "https://www.instagram.com/boelimited"
  },
  {
    icon: <TikTok size={24} />,
    title: "TikTok",
    description: "Watch our videos",
    content: ["@boelimited"],
    action: "https://www.tiktok.com/@boelimited"
  }
];

// Animation variants for staggered animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0
  }
};

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800">
      {/* Animated background pattern */}
      <div className="fixed inset-0 opacity-10">
        <div className="absolute inset-0" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l30 30-30 30L0 30z' fill='%23FFD700' fill-opacity='0.2'/%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }} 
        />
      </div>

      {/* Main content */}
      <div className="relative">
        {/* Hero Section */}
        <HeroSection />

        {/* Contact Section with Cards */}
        <ContactSection />

        {/* Additional Mobile-Optimized Contact Cards */}
        <motion.div
          className="lg:hidden px-4 py-8 space-y-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {contactData.map((card, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="transform transition-all duration-300 hover:scale-105"
            >
              <ContactCard {...card} />
            </motion.div>
          ))}
        </motion.div>

        {/* Decorative Elements */}
        <div className="fixed bottom-0 left-0 w-full h-1/2 pointer-events-none">
          <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-blue-950/50 to-transparent" />
        </div>
      </div>
    </div>
  );
};

export default Contact;