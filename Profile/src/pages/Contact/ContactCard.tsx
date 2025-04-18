import React from 'react';
import { Card, CardContent } from './components/ui/card';
import { Button } from './components/ui/button';
import { Phone, Mail, MapPin, Instagram, User as TikTok } from 'lucide-react';

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

const ContactCard: React.FC<ContactData> = ({ icon, title, description, content, action }) => {
  return (
    <div className="transform transition duration-500 hover:scale-105 active:scale-95">
      <Card className="bg-white bg-opacity-80 backdrop-blur-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden rounded-2xl border border-gray-200">
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
              <p key={index} className="text-blue-600 font-medium">{item}</p>
            ))}
          </div>
          <Button 
            variant="ghost"
            onClick={() => window.open(action, '_blank')}
            className="ml-4 group"
          >
            <span className="transform transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

const ContactSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 py-20 px-4 min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="bg-white bg-opacity-10 backdrop-blur-lg rounded-3xl shadow-2xl p-8 md:p-12 w-full max-w-4xl mx-auto opacity-0 scale-90 animate-fade-in-scale"
      >
        <h2 
          className="text-3xl md:text-4xl font-bold text-center text-white mb-12 opacity-0 animate-fade-in-down"
        >
          Get in Touch
        </h2>
        <div 
          className="space-y-6 opacity-0 animate-fade-in-up"
        >
          {contactData.map((card, index) => (
            <ContactCard key={index} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;