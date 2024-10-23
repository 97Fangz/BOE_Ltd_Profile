import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Mail, MapPin } from 'lucide-react';

interface SectionWrapperProps {
  children: React.ReactNode;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ children, title, icon: Icon }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full max-w-6xl mx-auto mb-8 bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
      <div 
        className="bg-gradient-to-r from-yellow-50 to-yellow-100 px-6 py-4 flex justify-between items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center space-x-3">
          {Icon && <Icon className="text-yellow-600 w-6 h-6" />}
          <h2 className="text-2xl font-semibold text-yellow-800">{title}</h2>
        </div>
        {isOpen ? <ChevronUp className="text-yellow-600" /> : <ChevronDown className="text-yellow-600" />}
      </div>
      <div className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
};

const HeroSection = () => (
  <section className="relative bg-gradient-to-r from-yellow-600 to-yellow-800 text-white py-24 px-4 sm:px-6 lg:px-8 rounded-lg shadow-lg mb-16 overflow-hidden">
    <div className="relative max-w-4xl mx-auto text-center">
      <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl mb-6">
        Premium Gold Solutions for You
      </h1>
      <p className="text-xl md:text-2xl font-medium mb-10">
        Invest in quality gold with confidence.
      </p>
    </div>
  </section>
);

const ProductSection = () => (
  <section className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8 rounded-lg shadow-inner mb-16">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Gold Products</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {/* Example product cards */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="font-semibold text-lg">Gold Bars</h3>
          <p className="text-gray-600">High-quality gold bars available in various weights.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="font-semibold text-lg">Gold Coins</h3>
          <p className="text-gray-600">Collectible gold coins for investment and gifting.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="font-semibold text-lg">Custom Jewelry</h3>
          <p className="text-gray-600">Bespoke gold jewelry crafted to your specifications.</p>
        </div>
      </div>
    </div>
  </section>
);

const TestimonialSection = () => (
  <section className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8 rounded-lg shadow-inner mb-16">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">What Our Clients Say</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {/* Testimonials */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-gray-600 mb-4">"Purchasing gold from BOE Limited was seamless. The quality exceeded my expectations!"</p>
          <p className="font-semibold text-yellow-600">— John Doe</p>
        </div>
        <div className="bg-white p=6 rounded-lg shadow-md">
          <p className="text-gray=600 mb=4">"BOE Limited offers top-notch service and quality gold products!"</p>
          <p className="font-semibold text-yellow=600">— Jane Smith</p>
        </div>
      </div>
    </div>
  </section>
);

const ContactSection = () => (
  <section id="contact" className="bg-yellow50 py=16 px=4 sm:px=6 lg:px=8 rounded-lg shadow-inner mb=16">
    <div className="max-w-md mx-auto">
      <h2 className="text-xl font-bold text-center text-gray900 mb=8">Get in Touch</h2>
      {/* Contact form */}
      <form className="space-y=4">
        <input type="text" placeholder="Your Name" required
          className="w-full px=4 py=2 rounded-md border border-gray300 focus:outline-none focus:ring focus:ring-yellow500" />
        
        <input type="email" placeholder="Your Email" required
          className="w-full px=4 py=2 rounded-md border border-gray300 focus:outline-none focus:ring focus:ring-yellow500" />
        
        <textarea placeholder="Your Message" rows={4} required
          className="w-full px=4 py=2 rounded-md border border-gray300 focus:outline-none focus:ring focus:ring-yellow500"></textarea>

        <button type="submit"
          className="w-full bg-yellow600 text-white font-semibold py=2 px=4 rounded-md hover:bg-yellow700 transition duration=300 ease-in-out transform hover:-translate-y=1 hover:shadow-lg">
          Send Message
        </button>
      </form>
    </div>
  </section>
);

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow50 via-white to-yellow50 py=12 px=4 sm:px=6 lg:px=8">
      <div className='max-w=7xl mx-auto'>
        {/* Hero section */}
        <HeroSection />

        {/* Product section */}
        <ProductSection />

        {/* Testimonial section */}
        <TestimonialSection />

        {/* Contact section */}
        <ContactSection />
      </div>
    </div>
  );
};

export default Home;