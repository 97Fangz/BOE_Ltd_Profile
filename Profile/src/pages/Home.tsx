import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Mail, MapPin } from 'lucide-react';

// Sample gold products data
const goldProducts = [
  {
    id: 1,
    name: "24K Gold Bar",
    weight: "1 kg",
    purity: "99.99%",
    price: 62500,
    image: "/api/placeholder/400/300",
    description: "Investment-grade gold bar with certification"
  },
  {
    id: 2,
    name: "22K Gold Bar",
    weight: "500 g",
    purity: "91.67%",
    price: 29800,
    image: "/api/placeholder/400/300",
    description: "Premium gold bar for serious investors"
  },
  {
    id: 3,
    name: "24K Gold Coins",
    weight: "100 g",
    purity: "99.99%",
    price: 6300,
    image: "/api/placeholder/400/300",
    description: "Collectible gold coins with highest purity"
  }
];

interface SectionWrapperProps {
  children: React.ReactNode;
  title: string;
  icon?: React.ComponentType<{ className?: string }>;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ children, title, icon: Icon }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full max-w-6xl mx-auto mb-8 bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
      <div 
        className="bg-gradient-to-r from-blue-50 to-blue-100 px-6 py-4 flex justify-between items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center space-x-3">
          {Icon && <Icon className="text-blue-600 w-6 h-6" />}
          <h2 className="text-2xl font-semibold text-blue-800">{title}</h2>
        </div>
        {isOpen ? <ChevronUp className="text-blue-600" /> : <ChevronDown className="text-blue-600" />}
      </div>
      <div className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
};

const HeroSection = () => (
  <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-24 px-4 sm:px-6 lg:px-8 rounded-lg shadow-lg mb-16 overflow-hidden">
    <div className="relative max-w-4xl mx-auto text-center">
      <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl mb-6">
        Premium Gold Solutions for a Prosperous Future
      </h1>
      <p className="text-xl md:text-2xl font-medium mb-10">
        Invest in quality gold with confidence.
      </p>
    </div>
  </section>
);

const TestimonialSection = () => (
  <section className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8 rounded-lg shadow-inner mb-16">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">What Our Clients Say</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {/* Testimonials */}
        <div className="bg-white p=6 rounded-lg shadow-md">
          <p className="text-gray600 mb=4">"Purchasing gold from BOE Limited was seamless. The quality exceeded my expectations!"</p>
          <p className="font-semibold text-blue600">— John Doe</p>
        </div>
        <div className="bg-white p=6 rounded-lg shadow-md">
          <p className="text-gray600 mb=4">"BOE Limited made my gold purchase easy and stress-free!"</p>
          <p className="font-semibold text-blue600">— Jane Smith</p>
        </div>
      </div>
    </div>
  </section>
);

const ContactSection = () => (
  <section id="contact" className="bg-blue50 py=16 px=4 sm:px=6 lg:px=8 rounded-lg shadow-inner mb=16">
    <div className="max-w-md mx-auto">
      <h2 className="text-xl font-bold text-center text-gray900 mb=8">Get in Touch</h2>
      {/* Contact form */}
      <form className="space-y=4">
        <input type="text" placeholder="Your Name" required
          className="w-full px=4 py=2 rounded-md border border-gray300 focus:outline-none focus:ring focus:ring-blue500" />
        
        <input type="email" placeholder="Your Email" required
          className="w-full px=4 py=2 rounded-md border border-gray300 focus:outline-none focus:ring focus:ring-blue500" />
        
        <textarea placeholder="Your Message" rows={4} required
          className="w-full px=4 py=2 rounded-md border border-gray300 focus:outline-none focus:ring focus:ring-blue500"></textarea>

        <button type="submit"
          className="w-full bg-blue600 text-white font-semibold py=2 px=4 rounded-md hover:bg-blue700 transition duration300 ease-in-out transform hover:-translate-y1 hover:shadow-lg">
          Send Message
        </button>
      </form>
    </div>
  </section>
);

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue50 via-white to-blue50 py12 px4 sm:px6 lg:px8">
      <div className='max-w7xl mx-auto'>
        {/* Hero section */}
        <HeroSection />

        {/* Company Overview Section */}
        <SectionWrapper title="Company Overview">
          {/* Add CompanyInfo component here */}
        </SectionWrapper>

        {/* Our Services Section */}
        <SectionWrapper title="Our Services">
          {/* Add Services component here */}
        </SectionWrapper>

        {/* Testimonial Section */}
        <TestimonialSection />

        {/* Contact Section */}
        <ContactSection />
      </div>
    </div>
  );
};

export default Home;