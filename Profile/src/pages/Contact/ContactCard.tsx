import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
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
      <Card className="relative overflow-hidden">
        {/* Card Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/90 to-blue-900/90 backdrop-blur-sm">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-400/10 to-amber-600/10" />
        </div>

        <CardContent className="relative p-6 flex items-center">
          <div className="mr-6">
            <div className="bg-gradient-to-br from-amber-300 to-amber-500 p-3 rounded-full">
              <div className="text-blue-950">
                {icon}
              </div>
            </div>
          </div>
          <div className="flex-grow">
            <h3 className="font-semibold text-lg text-amber-300 mb-1">{title}</h3>
            <p className="text-blue-100 text-sm mb-2">{description}</p>
            {content.map((item, index) => (
              <p key={index} className="text-amber-400 font-medium">{item}</p>
            ))}
          </div>
          <Button
            variant="ghost"
            onClick={() => window.open(action, '_blank')}
            className="ml-4 group text-amber-300 hover:text-amber-400 hover:bg-blue-950/50"
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
    <section className="relative py-20 px-4 min-h-screen flex items-center justify-center overflow-hidden">
      {/* Main Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l30 30-30 30L0 30z' fill='%23FFD700' fill-opacity='0.2'/%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }} />
        </div>
      </div>
      
      {/* Content Container */}
      <div className="relative w-full max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-block">
            <h2 className="text-4xl font-bold relative">
              <span className="bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent">
                Get in Touch
              </span>
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
            </h2>
          </div>
          <div className="mt-4 text-blue-100 text-lg max-w-2xl mx-auto">
            Connect with our expert team for all your precious metal trading needs
          </div>
        </div>
        
        {/* Cards Container */}
        <div className="space-y-6">
          {contactData.map((card, index) => (
            <ContactCard key={index} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;