import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp, Phone, Mail, MapPin, ChevronLeft, ChevronRight, Award, Shield, TrendingUp } from 'lucide-react';
import CompanyInfo from './../components/CompanyInfo';
import History from './../components/History';

// Testimonials data remains the same
const testimonials = [
  {
    text: "BOE Minerals's gold trading expertise has been instrumental in our investment success. Their market analysis and execution are impeccable.",
    author: "Michael Chen",
    position: "Investment Director, Global Assets Ltd",
    rating: 5,
    image: "/Michael.jpg"
  },
  {
    text: "The level of professionalism and expertise in gold trading at BOE Minerals is outstanding. Their commitment to security and transparency sets them apart.",
    author: "Sarah Williams",
    position: "Portfolio Manager, Heritage Investments",
    rating: 5,
    image: "/Sarrah.jpg"
  },
  {
    text: "Working with BOE Minerals for our gold investments has been a game-changer. Their market insights and execution are consistently excellent.",
    author: "Robert Martinez",
    position: "CEO, Premium Metals Trading",
    rating: 5,
    image: "/Robert.jpg"
  },
  {
    text: "Their dedication to client success and deep understanding of the gold market makes BOE Limited an invaluable partner.",
    author: "Emma Thompson",
    position: "Director of Operations, Global Trade Partners",
    rating: 5,
    image: "/Emma.jpg"
  }
];

const statsData = [
  { label: "Years of Experience", value: "4+", icon: Award },
  { label: "Successful Trades", value: "10K+", icon: TrendingUp },
  { label: "Client Satisfaction", value: "99%", icon: Shield },
];

import { ReactNode } from 'react';

interface SectionWrapperProps {
  children: ReactNode;
  title: string;
  icon?: React.ComponentType<{ className?: string }>;
}

const SectionWrapper = ({ children, title, icon: Icon }: SectionWrapperProps) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="w-full max-w-6xl mx-auto mb-8 bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
      <div 
        className="bg-gradient-to-r from-amber-50 to-amber-100 px-6 py-4 flex justify-between items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center space-x-3">
          {Icon && <Icon className="text-amber-600 w-6 h-6" />}
          <h2 className="text-2xl font-semibold text-gray-900">{title}</h2>
        </div>
        {isOpen ? <ChevronUp className="text-amber-600" /> : <ChevronDown className="text-amber-600" />}
      </div>
      <div className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
};

const StatsSection = () => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-16">
    {statsData.map((stat, index) => (
      <div key={index} className="bg-gradient-to-br from-amber-50 to-amber-100 p-8 rounded-xl shadow-lg text-center">
        <stat.icon className="w-12 h-12 text-amber-600 mx-auto mb-4" />
        <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
        <div className="text-gray-700">{stat.label}</div>
      </div>
    ))}
  </div>
);

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
    const timer = setInterval(handleNext, 5000);
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
    <div className="relative bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl shadow-lg p-8 mx-auto max-w-4xl">
      <div className="overflow-hidden">
        <div className={`transition-transform duration-500 ease-in-out transform ${isAnimating ? 'opacity-50' : 'opacity-100'}`}>
          <div className="flex items-center mb-6">
            <img 
              src={testimonials[currentIndex].image} 
              alt={testimonials[currentIndex].author}
              className="w-16 h-16 rounded-full mr-4 border-2 border-amber-400"
            />
            <div>
              <div className="text-gray-700 text-lg italic">{testimonials[currentIndex].text}</div>
              <div className="flex items-center mt-2">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
          <div className="font-semibold text-amber-700">{testimonials[currentIndex].author}</div>
          <div className="text-sm text-gray-600">{testimonials[currentIndex].position}</div>
        </div>
      </div>
      <button 
        onClick={handlePrev}
        className="absolute top-1/2 -translate-y-1/2 left-2 p-2 rounded-full bg-amber-200 hover:bg-amber-300 transition-colors"
      >
        <ChevronLeft className="w-6 h-6 text-amber-700" />
      </button>
      <button 
        onClick={handleNext}
        className="absolute top-1/2 -translate-y-1/2 right-2 p-2 rounded-full bg-amber-200 hover:bg-amber-300 transition-colors"
      >
        <ChevronRight className="w-6 h-6 text-amber-700" />
      </button>
      <div className="flex justify-center space-x-2 mt-4">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentIndex ? 'bg-amber-600' : 'bg-amber-200'
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
        description: "Expert gold trading services with competitive rates, secure transactions, and real-time market analysis to maximize your investment potential.",
        icon: "💰"
      },
      {
        title: "Investment Advisory",
        description: "Comprehensive guidance on gold investments, portfolio diversification strategies, and market trend analysis from seasoned professionals.",
        icon: "📊"
      },
      {
        title: "Secure Storage",
        description: "State-of-the-art secure storage facilities with 24/7 surveillance, insurance coverage, and easy access to your precious metal investments.",
        icon: "🔒"
      },
      {
        title: "Market Analysis",
        description: "In-depth market research and analysis to help you make informed investment decisions in the dynamic gold market.",
        icon: "📈"
      },
      {
        title: "Global Network",
        description: "Access to an extensive network of global partners and markets, ensuring competitive prices and diverse investment opportunities.",
        icon: "🌍"
      },
      {
        title: "Compliance Support",
        description: "Expert guidance on regulatory compliance and documentation for seamless gold trading operations.",
        icon: "📋"
      }
    ].map((service, index) => (
      <div key={index} className="bg-gradient-to-br from-amber-50 to-amber-100 p-6 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300">
        <div className="text-4xl mb-4">{service.icon}</div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
        <p className="text-gray-700">{service.description}</p>
      </div>
    ))}
  </div>
);

const WhyChooseUs = () => (
  <div className="my-16 relative">
    {/* Background decorative elements */}
    <div className="absolute inset-0 bg-gradient-to-br from-amber-100/20 via-transparent to-amber-100/20 rounded-3xl"></div>
    
    <div className="relative max-w-6xl mx-auto">
      {/* Header Section */}
      <div className="text-center mb-12">
        <div className="inline-block mb-4">
          <span className="px-4 py-2 bg-amber-100 text-amber-800 text-sm font-semibold rounded-full">
            Our Commitment
          </span>
        </div>
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
          Why BOE Minerals
        </h2>
        <div className="flex items-center justify-center">
          <div className="h-1 w-24 bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
        </div>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        
        {/* Left Side - Key Points */}
        <div className="space-y-6">
          {[
            {
              icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              ),
              title: "Premium African Gold",
              description: "Responsibly sourced from the finest deposits across the continent"
            },
            {
              icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              ),
              title: "Absolute Traceability",
              description: "Complete transparency from source to delivery with verified documentation"
            },
            {
              icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              ),
              title: "International Standards",
              description: "Documentation that meets global compliance and certification requirements"
            },
            {
              icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              ),
              title: "Secure & Insured Delivery",
              description: "Discreet shipping with comprehensive insurance and tracking"
            },
            {
              icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              ),
              title: "Relationship-Driven",
              description: "Built on trust, integrity, and long-term partnership commitments"
            }
          ].map((item, index) => (
            <div 
              key={index} 
              className="group bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-amber-100 hover:border-amber-300"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-600 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Side - Visual Element */}
        <div className="relative lg:pl-8">
          <div className="relative">
            {/* Decorative background card */}
            <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-amber-600 rounded-3xl transform rotate-3 opacity-20"></div>
            <div className="absolute inset-0 bg-gradient-to-tl from-amber-300 to-amber-500 rounded-3xl transform -rotate-3 opacity-20"></div>
            
            {/* Main card */}
            <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden">
              <div className="aspect-square">
                <img 
                  src="/Boelogo.jpeg" 
                  alt="BOE Minerals - Premium African Gold" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Overlay text */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-8">
                <p className="text-white text-lg leading-relaxed">
                  At BOE Minerals, we don't just trade gold—we build lasting relationships founded on integrity, transparency, and excellence.
                </p>
                <div className="mt-4 flex items-center space-x-2">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="w-8 h-8 rounded-full bg-amber-400 border-2 border-white"></div>
                    ))}
                  </div>
                  <span className="text-amber-200 text-sm font-medium">Trusted by leading investors worldwide</span>
                </div>
              </div>
            </div>
          </div>

          {/* Floating stats cards */}
          <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4 border border-amber-200 hidden lg:block">
            <div className="text-3xl font-bold text-amber-600">99.9%</div>
            <div className="text-sm text-gray-600">Gold Purity</div>
          </div>
          
          <div className="absolute -top-6 -right-6 bg-white rounded-xl shadow-lg p-4 border border-amber-200 hidden lg:block">
            <div className="text-3xl font-bold text-amber-600">100%</div>
            <div className="text-sm text-gray-600">Traceable</div>
          </div>
        </div>

      </div>
    </div>
  </div>
);

const BrandStatement = () => (
  <section className="max-w-5xl mx-auto my-16 relative">
    {/* Decorative background elements */}
    <div className="absolute inset-0 bg-gradient-to-br from-amber-100 via-white to-amber-50 rounded-2xl transform -rotate-1"></div>
    <div className="absolute inset-0 bg-gradient-to-tl from-amber-50 via-white to-amber-100 rounded-2xl transform rotate-1"></div>
    
    {/* Main content card */}
    <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
      {/* Gold accent bar */}
      <div className="h-2 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600"></div>
      
      <div className="p-8 sm:p-12">
        {/* Header with icon */}
        <div className="flex items-center justify-center mb-6">
          <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-4 rounded-full">
            <svg className="w-8 h-8 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
        </div>

        {/* Small label */}
        <div className="text-center mb-3">
          <span className="inline-block px-4 py-1 bg-amber-100 text-amber-800 text-sm font-semibold rounded-full">
            Brand Statement
          </span>
        </div>

        {/* Main heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-6">
          The BOE Standard
        </h2>

        {/* Divider */}
        <div className="flex items-center justify-center mb-6">
          <div className="h-px w-16 bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
          <div className="mx-3 w-2 h-2 rounded-full bg-amber-400"></div>
          <div className="h-px w-16 bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
        </div>

        {/* Main content */}
        <div className="max-w-3xl mx-auto space-y-4 text-center">
          <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
            At BOE Minerals, <span className="font-semibold text-amber-700">Best of Earth</span> is not a slogan, it is our operating principle.
          </p>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            We represent Africa's finest gold through disciplined sourcing, verified certification, and globally compliant delivery. Every transaction reflects clarity, security, and confidence.
          </p>
        </div>

        {/* Bottom decorative elements */}
        <div className="mt-8 flex justify-center space-x-2">
          <div className="w-2 h-2 rounded-full bg-amber-400"></div>
          <div className="w-2 h-2 rounded-full bg-amber-300"></div>
          <div className="w-2 h-2 rounded-full bg-amber-200"></div>
        </div>
      </div>
    </div>
  </section>
);


const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-white to-amber-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
      <section className="relative bg-gradient-to-r from-amber-700 to-amber-900 text-white py-24 px-4 sm:px-6 lg:px-8 rounded-lg shadow-lg mb-16 overflow-hidden">
  <div className="absolute inset-0">
    <div className="absolute inset-0 bg-black opacity-50" />
    <div className="absolute inset-0 bg-gradient-to-r from-amber-400/30 to-amber-900/30" />
  </div>
  <div className="relative max-w-4xl mx-auto text-center">
    <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl mb-6">
      Best of Earth. <span className="text-amber-400">Pure Value. Trusted Origins.</span>
    </h1>
    <p className="text-xl md:text-2xl font-medium mb-10">
      Exceptional African gold, responsibly sourced and delivered to global markets with discretion, precision, and integrity.
    </p>
    <div className="flex flex-col sm:flex-row justify-center gap-4">
      <Link to="/contact" className="px-8 py-3 bg-amber-400 text-gray-900 font-semibold rounded-lg hover:bg-amber-300 transition duration-300">
        Buy Now
      </Link>
      <Link to="/about" className="px-8 py-3 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg hover:bg-white/20 transition duration-300">
        Learn More
      </Link>
    </div>
  </div>
</section>

        <BrandStatement />
        <StatsSection />

        <SectionWrapper title="Our Services" icon={ChevronDown}>
          <GoldServices />
        </SectionWrapper>

        <WhyChooseUs />

        <SectionWrapper title="Company Overview" icon={ChevronDown}>
          <CompanyInfo />
        </SectionWrapper>

        <SectionWrapper title="Our Journey" icon={ChevronDown}>
          <History />
        </SectionWrapper>

        <SectionWrapper title="Client Testimonials" icon={ChevronDown}>
        <TestimonialSlider />
        </SectionWrapper>

        <section className="bg-gradient-to-br from-amber-50 to-amber-100 py-8 sm:py-16 px-4 sm:px-6 lg:px-8 rounded-lg shadow-inner mb-8 sm:mb-16 w-full">
  <div className="w-full max-w-4xl mx-auto">
    <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-6 sm:mb-8">Contact Us</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
      {/* Contact Information Card */}
      <div className="bg-white p-4 sm:p-8 rounded-xl shadow-lg w-full">
        <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-amber-800">Get in Touch</h3>
        <ul className="space-y-4 sm:space-y-6">
          <li className="flex items-center">
            <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-amber-600 mr-3 sm:mr-4" />
            <div>
              <p className="font-medium text-gray-900 text-sm sm:text-base">Phone</p>
              <p className="text-gray-700 text-sm sm:text-base">+254715119636</p>
            </div>
          </li>
          <li className="flex items-center">
            <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-amber-600 mr-3 sm:mr-4" />
            <div>
              <p className="font-medium text-gray-900 text-sm sm:text-base">Email</p>
              <p className="text-gray-700 text-sm sm:text-base">boeltdcompany@gmail.com</p>
            </div>
          </li>
          <li className="flex items-start">
            <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-amber-600 mr-3 sm:mr-4 mt-1" />
            <div>
              <p className="font-medium text-gray-900 text-sm sm:text-base">Locations</p>
              <p className="text-gray-700 text-sm sm:text-base">Mali Office</p>
              <p className="text-gray-700 mt-1 text-sm sm:text-base">Kenya Office</p>
            </div>
          </li>
        </ul>
        <div className="mt-6 sm:mt-8 p-3 sm:p-4 bg-amber-50 rounded-lg">
          <p className="text-xs sm:text-sm text-gray-700">
            Our team is available during business hours (8:00 AM - 6:00 PM EAT) 
            to assist you with any inquiries.
          </p>
        </div>
      </div>

      {/* Contact Form Card */}
      <div className="bg-white p-4 sm:p-8 rounded-xl shadow-lg w-full">
        <form className="space-y-3 sm:space-y-4">
          <div>
            <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
              Your Name
            </label>
            <input 
              type="text" 
              placeholder="John Doe" 
              className="w-full px-3 sm:px-4 py-2 rounded-md border border-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm sm:text-base" 
            />
          </div>
          <div>
            <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input 
              type="email" 
              placeholder="john@example.com" 
              className="w-full px-3 sm:px-4 py-2 rounded-md border border-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm sm:text-base" 
            />
          </div>
          <div>
            <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
              Subject
            </label>
            <select className="w-full px-3 sm:px-4 py-2 rounded-md border border-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm sm:text-base">
              <option value="">Select a subject</option>
              <option value="trading">Gold Trading</option>
              <option value="investment">Investment Inquiry</option>
              <option value="storage">Storage Services</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
              Your Message
            </label>
            <textarea 
              placeholder="How can we help you?" 
              rows={4} 
              className="w-full px-3 sm:px-4 py-2 rounded-md border border-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm sm:text-base"
            ></textarea>
          </div>
          <button 
            type="submit" 
            className="w-full bg-gradient-to-r from-amber-600 to-amber-700 text-white font-semibold py-2 sm:py-3 px-4 rounded-md hover:from-amber-700 hover:to-amber-800 transition duration-300 flex items-center justify-center text-sm sm:text-base"
          >
            Send Message
            <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </form>
      </div>
    </div>
  </div>
</section>

        <footer className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-lg shadow-lg mt-16 overflow-hidden">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">About BOE Limited</h3>
                <p className="text-gray-700">
                  Your trusted partner in gold trading, providing premium services and expert guidance 
                  for all your precious metal investment needs.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li>
                    <Link to="/about" className="text-gray-700 hover:text-amber-600 transition-colors">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link to="/services" className="text-gray-700 hover:text-amber-600 transition-colors">
                      Our Services
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" className="text-gray-700 hover:text-amber-600 transition-colors">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Business Hours</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>Monday - Friday: 8:00 AM - 6:00 PM</li>
                  <li>Saturday: 9:00 AM - 1:00 PM</li>
                  <li>Sunday: Closed</li>
                </ul>
              </div>
            </div>            
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Home;