mport React, { useState } from 'react';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin, Instagram, TikTok } from 'lucide-react';

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

const ContactCard = ({ icon, title, description, content, action }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card 
      className="bg-blue-900 text-white transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardHeader className="flex flex-col items-center">
        <div className={`text-blue-300 transition-transform duration-300 ${isHovered ? 'scale-110' : ''}`}>
          {icon}
        </div>
        <h3 className="mt-2 font-bold text-xl">{title}</h3>
      </CardHeader>
      <CardContent>
        <p className="text-blue-200 text-sm mb-2">{description}</p>
        {content.map((item, index) => (
          <p key={index} className="text-center">{item}</p>
        ))}
      </CardContent>
      <CardFooter className="justify-center">
        <Button 
          variant="outline" 
          className="bg-blue-700 text-white hover:bg-blue-600 transition-colors duration-300"
          onClick={() => window.open(action, '_blank')}
        >
          Connect
        </Button>
      </CardFooter>
    </Card>
  );
};

const ContactSection = () => {
  return (
    <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 py-16 px-4 rounded-lg shadow-2xl max-w-7xl mx-auto my-8">
      <h2 className="text-4xl font-bold text-center text-white mb-12 animate-pulse">Get in Touch</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {contactData.map((card, index) => (
          <ContactCard key={index} {...card} />
        ))}
      </div>
    </section>
  );
};

export default ContactSection;