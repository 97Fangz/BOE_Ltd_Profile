import React, { useState, useEffect, useCallback } from 'react';
import { ChevronDown, ChevronUp, Phone, Mail, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';
import CompanyInfo from '../components/CompanyInfo';
import Services from '../components/Services';
import History from '../components/History';
import IndustriesSection from '../components/IndustriesSection';

interface SectionWrapperProps {
  children: React.ReactNode;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
}

const testimonials = [
  {
    text: "BOE Limited's gold trading expertise has been instrumental in our investment success. Their market analysis and execution are impeccable.",
    author: "Michael Chen",
    position: "Investment Director, Global Assets Ltd",
    rating: 5
  },
  {
    text: "The level of professionalism and expertise in gold trading at BOE Limited is outstanding. Their commitment to security and transparency sets them apart.",
    author: "Sarah Williams",
    position: "Portfolio Manager, Heritage Investments",
    rating: 5
  },
  {
    text: "Working with BOE Limited for our gold investments has been a game-changer. Their market insights and execution are consistently excellent.",
    author: "Robert Martinez",
    position: "CEO, Premium Metals Trading",
    rating: 5
  }
];

const SectionWrapper: React.FC<SectionWrapperProps> = ({ children, title, icon: Icon }) => {
  const [isOpen, setIsOpen] = useState(true);

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

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleNext = useCallback(() => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
      setTimeout(() => setIsAnimating(false), 500);
    }
  }, [isAnimating]);
  
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex, handleNext]);

  const handlePrev = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  return (
    <div className="relative bg-white rounded-xl shadow-lg p-8 mx-auto max-w-4xl">
      <div className="overflow-hidden">
        <div className={`transition-transform duration-500 ease-in-out transform ${isAnimating ? 'opacity-50' : 'opacity-100'}`}>
          <div className="text-gray-600 text-lg italic mb-6">{testimonials[currentIndex].text}</div>
          <div className="flex items-center mb-2">
            {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
              <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <div className="font-semibold text-blue-600">{testimonials[currentIndex].author}</div>
          <div className="text-sm text-gray-500">{testimonials[currentIndex].position}</div>
        </div>
      </div>
      <button 
        onClick={handlePrev}
        className="absolute top-1/2 -translate-y-1/2 left-2 p-2 rounded-full bg-blue-100 hover:bg-blue-200 transition-colors"
      >
        <ChevronLeft className="w-6 h-6 text-blue-600" />
      </button>
      <button 
        onClick={handleNext}
        className="absolute top-1/2 -translate-y-1/2 right-2 p-2 rounded-full bg-blue-100 hover:bg-blue-200 transition-colors"
      >
        <ChevronRight className="w-6 h-6 text-blue-600" />
      </button>
      <div className="flex justify-center space-x-2 mt-4">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentIndex ? 'bg-blue-600' : 'bg-blue-200'
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

const GoldServices = () => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    {[
      {
        title: "Gold Trading",
        description: "Professional gold trading services with competitive rates and secure transactions",
        icon: "💰"
      },
      {
        title: "Investment Advisory",
        description: "Expert guidance on gold investments and portfolio diversification strategies",
        icon: "📊"
      },
      {
        title: "Secure Storage",
        description: "State-of-the-art secure storage facilities for your precious metal investments",
        icon: "🔒"
      }
    ].map((service, index) => (
      <div key={index} className="bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300">
        <div className="text-4xl mb-4">{service.icon}</div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
        <p className="text-gray-600">{service.description}</p>
      </div>
    ))}
  </div>
);

const ContactSection = () => (
  <section className="bg-blue-50 py-16 px-4 sm:px-6 lg:px-8 rounded-lg shadow-inner mb-16">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Contact Us</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
          <ul className="space-y-4">
            <li className="flex items-center">
              <Phone className="w-6 h-6 text-blue-600 mr-2" />
              <span>+254715119636</span>
            </li>
            <li className="flex items-center">
              <Mail className="w-6 h-6 text-blue-600 mr-2" />
              <span>boeltdcompany@gmail.com</span>
            </li>
            <li className="flex items-center">
              <MapPin className="w-6 h-6 text-blue-600 mr-2" />
              <span>Mali</span>
            </li>
            <li className="flex items-center">
              <MapPin className="w-6 h-6 text-blue-600 mr-2" />
              <span>Kenya</span>
            </li>
          </ul>
        </div>
        <form className="space-y-4">
          <input type="text" placeholder="Your Name" className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <input type="email" placeholder="Your Email" className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <textarea placeholder="Your Message" rows={4} className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
          <button type="submit" className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300">
            Send Message
          </button>
        </form>
      </div>
    </div>
  </section>
);

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-24 px-4 sm:px-6 lg:px-8 rounded-lg shadow-lg mb-16 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-black opacity-50" />
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/30 to-blue-600/30" />
          </div>
          <div className="relative max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl mb-6">
              Premium <span className="text-yellow-400">Gold Trading</span> Solutions
            </h1>
            <p className="text-xl md:text-2xl font-medium mb-10">
              Your trusted partner in global gold trading and investment
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="px-8 py-3 bg-yellow-400 text-blue-900 font-semibold rounded-lg hover:bg-yellow-300 transition duration-300">
                Start Trading
              </button>
              <button className="px-8 py-3 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg hover:bg-white/20 transition duration-300">
                Learn More
              </button>
            </div>
          </div>
        </section>

        <SectionWrapper title="Our Services" icon={ChevronDown}>
          <GoldServices />
        </SectionWrapper>

        

        <SectionWrapper title="Client Testimonials" icon={ChevronDown}>
          <TestimonialSlider />
        </SectionWrapper>

        <ContactSection />
      </div>
    </div>
  );
};

export default Home;