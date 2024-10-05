import React from 'react';
import { MessageSquare, Phone, Mail, MapPin, Instagram, Video } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

// Define types for the ContactCard props
interface ContactCardProps {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
}

const ContactCard: React.FC<ContactCardProps> = ({ Icon, title, description, buttonText, buttonHref }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Card className="h-full">
        <CardHeader>
          <Icon className="w-8 h-8 mb-2 text-primary" />
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <Button asChild className="w-full">
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
  // Contact card data
  const contactData = [
    {
      Icon: MessageSquare,
      title: "WhatsApp",
      description: "Chat with us instantly",
      buttonText: "Start Chat",
      buttonHref: "https://wa.me/254715119636"
    },
    {
      Icon: Phone,
      title: "Phone",
      description: "Call us for immediate assistance",
      buttonText: "Call Now",
      buttonHref: "tel:+254798877813"
    },
    {
      Icon: Mail,
      title: "Email",
      description: "Send us a message anytime",
      buttonText: "Send Email",
      buttonHref: "mailto:boelimited275@gmail.com"
    },
    {
      Icon: Video,
      title: "TikTok",
      description: "Follow our latest video updates",
      buttonText: "Follow Us",
      buttonHref: "https://www.tiktok.com/@boelimited?_t=8oJpZoCT0bt&_r=1"
    },
    {
      Icon: MapPin,
      title: "Location",
      description: "Find us in Mali and Kenya",
      buttonText: "View Map",
      buttonHref: "https://www.google.com/maps/place/Mali"
    },
    {
      Icon: Instagram,
      title: "Instagram",
      description: "Check out our latest posts",
      buttonText: "Follow",
      buttonHref: "https://www.instagram.com/boelimited"
    }
  ];

  return (
    <section className="py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Get in Touch</h2>
        <p className="text-center text-lg mb-12 text-muted-foreground">We're here to help. Choose your preferred way to connect with us.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {contactData.map((card, index) => (
            <ContactCard key={index} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
