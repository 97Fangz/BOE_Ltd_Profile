// ContactSection.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Instagram, User as TikTok } from 'lucide-react';
import ContactCard from './ContactCard';

const contactData = [
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

const ContactSection: React.FC = () => {
  return (
    <section className="relative py-20 px-4 min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800">
        <motion.div 
          className="absolute inset-0 opacity-10"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l30 30-30 30L0 30z' fill='%23FFD700' fill-opacity='0.2'/%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>
      
      {/* Content Container */}
      <div className="relative w-full max-w-4xl mx-auto">
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent">
              Get in Touch
            </span>
          </h2>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            Connect with our expert team for premium gold trading services
          </p>
        </motion.div>
        
        {/* Contact Cards */}
        <motion.div 
          className="space-y-6"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
          initial="hidden"
          animate="show"
        >
          {contactData.map((card, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, x: -20 },
                show: { opacity: 1, x: 0 }
              }}
            >
              <ContactCard {...card} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;