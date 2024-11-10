import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from './components/ui/card';
import { Button } from './components/ui/button';
import { Phone, Mail, MapPin, Instagram } from 'lucide-react';
import { TbBrandTiktok } from 'react-icons/tb';
import { IoLogoWhatsapp } from 'react-icons/io';

interface ContactData {
  icon: React.ReactNode;
  title: string;
  description: string;
  content: string[];
  action: string;
  isFullWidth?: boolean;
}

const contactData: ContactData[] = [
  {
    icon: <Phone size={24} />,
    title: "Phone",
    description: "Reach out directly",
    content: ["+254798877813"],
    action: "tel:+254798877813"
  },
  {
    icon: <IoLogoWhatsapp size={24} />,
    title: "WhatsApp",
    description: "Chat with us instantly",
    content: ["+254798877813"],
    action: "https://wa.me/254798877813"
  },
  {
    icon: <Mail size={24} />,
    title: "Email",
    description: "Send us a message",
    content: ["boeltdcompany@gmail.com"],
    action: "mailto:boeltdcompany@gmail.com",
    isFullWidth: true
  },
  {
    icon: <MapPin size={24} />,
    title: "Location",
    description: "Find us here",
    content: ["Nairobi, Kenya", "Bamako, Mali"],
    action: "https://www.google.com/maps/place/Nairobi,+Kenya/@-1.2920659,36.821946,10z",
    isFullWidth: true
  },
  {
    icon: <Instagram size={24} />,
    title: "Instagram",
    description: "Follow our updates",
    content: ["@boelimited"],
    action: "https://www.instagram.com/boelimited"
  },
  {
    icon: <TbBrandTiktok size={24} />,
    title: "TikTok",
    description: "Watch our videos",
    content: ["@boelimited"],
    action: "https://www.tiktok.com/@boelimited"
  }
];

const ContactCard: React.FC<ContactData> = ({ icon, title, description, content, action, isFullWidth }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`
        ${isFullWidth ? "md:col-span-2" : ""}
        col-span-1 
        block  // Ensure always visible
        w-full  // Full width on mobile
      `}
    >
      <Card className="bg-white bg-opacity-80 backdrop-blur-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden rounded-2xl border border-gray-200 w-full">
        <CardContent className="p-6 flex items-center">
          <div className="mr-6">
            <div className="text-blue-500 bg-blue-100 p-3 rounded-full">
              {icon}
            </div>
          </div>
          <div className="flex-grow">
            <h3 className="font-semibold text-lg text-gray-800 mb-1">{title}</h3>
            <p className="text-gray-600 text-sm mb-2">{description}</p>
            {content.map((item, index) => (
              <p 
                key={index} 
                className="text-blue-600 font-medium break-words"
                style={{ 
                  wordBreak: 'break-all',
                  overflowWrap: 'break-word'
                }}
              >
                {item}
              </p>
            ))}
          </div>
          <Button 
            variant="ghost"
            onClick={() => window.open(action, '_blank')}
            className="ml-4"
          >
            <motion.div
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              →
            </motion.div>
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const ContactSection: React.FC = () => {
  return (
    <section 
      className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 py-20 px-4 min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Contact Information"
    >
      <motion.div 
        className="bg-white bg-opacity-10 backdrop-blur-lg rounded-3xl shadow-2xl p-8 md:p-12 w-full max-w-4xl mx-auto"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center text-white mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Get in Touch
        </motion.h2>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {contactData.map((card, index) => (
            <ContactCard key={index} {...card} />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
