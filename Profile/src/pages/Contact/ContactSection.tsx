import React from 'react';
import { MessageSquare, Phone, Mail, MapPin, Instagram, Video } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from 'react';

interface ContactCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  content: string[];
  buttonText: string;
  buttonHref: string;
}

const ContactCard: React.FC<ContactCardProps> = ({ icon: Icon, title, description, content, buttonText, buttonHref }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Card className="h-full bg-gradient-to-br from-blue-900 to-blue-800 text-white border-yellow-300 border-opacity-30">
        <CardHeader>
          <Icon className="w-8 h-8 mb-2 text-yellow-400" />
          <CardTitle className="text-yellow-400">{title}</CardTitle>
          <CardDescription className="text-blue-200">{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mb-4"
              >
                {content.map((item, index) => (
                  <p key={index} className="text-sm text-blue-200">{item}</p>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
          <Button asChild variant="secondary" className="w-full bg-yellow-400 text-blue-900 hover:bg-yellow-300">
            <a href={buttonHref} target="_blank" rel="noopener noreferrer">
              {buttonText}
            </a>
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const ContactSection: React.FC = () => {
  const contactData: ContactCardProps[] = [
    {
      icon: MessageSquare,
      title: "WhatsApp",
      description: "Chat with us instantly",
      content: ["+254715119636"],
      buttonText: "Start Chat",
      buttonHref: "https://wa.me/254715119636"
    },
    {
      icon: Phone,
      title: "Phone",
      description: "Call us for immediate assistance",
      content: ["+254798877813", "+254715119636"],
      buttonText: "Call Now",
      buttonHref: "tel:+254798877813"
    },
    {
      icon: Mail,
      title: "Email",
      description: "Send us a message anytime",
      content: ["boelimited275@gmail.com"],
      buttonText: "Send Email",
      buttonHref: "mailto:boelimited275@gmail.com"
    },
    {
      icon: Video,
      title: "TikTok",
      description: "Follow our latest video updates",
      content: ["Follow us for updates"],
      buttonText: "Follow Us",
      buttonHref: "https://www.tiktok.com/@boelimited?_t=8oJpZoCT0bt&_r=1"
    },
    {
      icon: MapPin,
      title: "Location",
      description: "Find us in Mali and Kenya",
      content: ["Mali Location", "Kenya Location"],
      buttonText: "View Map",
      buttonHref: "https://www.google.com/maps/place/Mali"
    },
    {
      icon: Instagram,
      title: "Instagram",
      description: "Check out our latest posts",
      content: ["Follow our latest posts"],
      buttonText: "Follow",
      buttonHref: "https://www.instagram.com/boelimited"
    }
  ];

  return (
    <section className="py-12 px-4 md:px-8 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 rounded-3xl shadow-2xl m-4 md:m-8 max-w-7xl mx-auto overflow-hidden">
      <motion.h2 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-5xl font-bold text-center text-yellow-400 mb-8"
      >
        Get in Touch
      </motion.h2>
      <motion.p 
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-center text-lg mb-12 text-blue-200"
      >
        We're here to help. Choose your preferred way to connect with us.
      </motion.p>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {contactData.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
          >
            <ContactCard {...card} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default ContactSection;