import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardContent, CardFooter } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Phone, Mail, MapPin, Instagram, TikTok } from 'lucide-react';

interface ContactData {
  icon: React.ReactNode;
  title: string;
  description: string;
  content: string[];
  action: string;
}

const contactData: ContactData[] = [
  {
    icon: <Phone size={24} />,
    title: "Phone",
    description: "Reach out directly for immediate assistance",
    content: ["+254798877813", "+254715119636"],
    action: "tel:+254798877813"
  },
  {
    icon: <Mail size={24} />,
    title: "Email",
    description: "Send us a message anytime",
    content: ["boelimited275@gmail.com"],
    action: "mailto:boelimited275@gmail.com"
  },
  {
    icon: <MapPin size={24} />,
    title: "Location",
    description: "Find us in Mali and Kenya",
    content: ["Mali Location", "Kenya Location"],
    action: "https://www.google.com/maps/place/Mali"
  },
  {
    icon: <Instagram size={24} />,
    title: "Instagram",
    description: "Follow our latest visual updates",
    content: ["@boelimited"],
    action: "https://www.instagram.com/boelimited"
  },
  {
    icon: <TikTok size={24} />,
    title: "TikTok",
    description: "Catch our trending short-form videos",
    content: ["@boelimited"],
    action: "https://www.tiktok.com/@boelimited"
  }
];

const ContactCard: React.FC<ContactData> = ({ icon, title, description, content, action }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
    >
      <Card className="bg-white bg-opacity-80 backdrop-blur-lg shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col justify-between rounded-xl overflow-hidden">
        <CardHeader className="flex flex-col items-center space-y-3 p-6">
          <motion.div
            className="text-sky-600 bg-sky-100 p-3 rounded-full"
            whileHover={{ rotate: 360, scale: 1.1 }}
            transition={{ duration: 0.5 }}
          >
            {icon}
          </motion.div>
          <h3 className="font-bold text-2xl text-sky-800">{title}</h3>
        </CardHeader>
        <CardContent className="text-center px-6 py-4">
          <p className="text-sky-700 text-sm mb-4">{description}</p>
          {content.map((item, index) => (
            <p key={index} className="text-gray-700 font-medium">{item}</p>
          ))}
        </CardContent>
        <CardFooter className="justify-center p-6">
          <Button 
            variant="primary" 
            onClick={() => window.open(action, '_blank')}
            className="w-full"
          >
            Connect
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

const ContactSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-sky-100 via-sky-200 to-sky-300 py-20 px-4 min-h-screen flex items-center justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center text-sky-800 mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Get in Touch
        </motion.h2>
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {contactData.map((card, index) => (
            <ContactCard key={index} {...card} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;