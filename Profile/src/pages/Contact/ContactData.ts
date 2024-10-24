// src/pages/Contact/contactData.ts
import { Phone, Mail, MapPin, Instagram, User as TikTok } from 'lucide-react';

export const contactData = [
  {
    icon: <Phone className="h-6 w-6" />,
    title: "Direct Contact",
    description: "Available 24/7 for urgent inquiries",
    content: ["+254798877813", "+254715119636"],
    action: "tel:+254798877813",
    color: "bg-emerald-500"
  },
  {
    icon: <Mail className="h-6 w-6" />,
    title: "Email Support",
    description: "Professional response within 24 hours",
    content: ["boelimited275@gmail.com"],
    action: "mailto:boelimited275@gmail.com",
    color: "bg-blue-500"
  },
  {
    icon: <MapPin className="h-6 w-6" />,
    title: "Our Locations",
    description: "Visit our offices in Kenya and Mali",
    content: ["Mali Location", "Kenya Location"],
    action: "https://www.google.com/maps/place/Mali",
    color: "bg-purple-500"
  },
  {
    icon: <Instagram className="h-6 w-6" />,
    title: "Instagram",
    description: "Daily updates and exclusive content",
    content: ["@boelimited"],
    action: "https://www.instagram.com/boelimited",
    color: "bg-pink-500"
  },
  {
    icon: <TikTok className="h-6 w-6" />,
    title: "TikTok",
    description: "Behind the scenes and market insights",
    content: ["@boelimited"],
    action: "https://www.tiktok.com/@boelimited",
    color: "bg-red-500"
  }
];