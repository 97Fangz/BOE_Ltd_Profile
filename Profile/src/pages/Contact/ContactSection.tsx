import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardContent, CardFooter } from '../../components/ui/card';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin, Instagram, User as TikTok } from 'lucide-react';

const contactData = [
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

interface ContactCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  content: string[];
  action: string;
}

const ContactCard: React.FC<ContactCardProps> = ({ icon, title, description, content, action }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col justify-between">
        <CardHeader className="flex flex-col items-center space-y-2">
          <motion.div
            className="text-sky-500"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
          >
            {icon}
          </motion.div>
          <h3 className="font-bold text-xl text-sky-800">{title}</h3>
        </CardHeader>
        <CardContent>
          <p className="text-sky-600 text-sm mb-2 text-center">{description}</p>
          {content.map((item: string, index: number) => (
            <p key={index} className="text-center text-gray-700">{item}</p>
          ))}
        </CardContent>
        <CardFooter className="justify-center">
          <Button 
            variant="outline" 
            className="bg-sky-500 text-white hover:bg-sky-600 transition-colors duration-300"
            onClick={() => window.open(action, '_blank')}
          >
            Connect
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

const ContactSection = () => {
  return (
    <section className="bg-gradient-to-br from-sky-100 via-sky-200 to-sky-300 py-16 px-4 min-h-screen flex items-center justify-center">
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
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