import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp, Phone, Mail, MapPin, ChevronLeft, ChevronRight, Award, Shield, TrendingUp } from 'lucide-react';
import CompanyInfo from '../components/CompanyInfo';

import History from '../components/History';
import IndustriesSection from '../components/IndustriesSection';

// Enhanced testimonials data
const testimonials = [
  {
    text: "BOE Limited's gold trading expertise has been instrumental in our investment success. Their market analysis and execution are impeccable.",
    author: "Michael Chen",
    position: "Investment Director, Global Assets Ltd",
    rating: 5,
    image: "/api/placeholder/64/64"
  },
  {
    text: "The level of professionalism and expertise in gold trading at BOE Limited is outstanding. Their commitment to security and transparency sets them apart.",
    author: "Sarah Williams",
    position: "Portfolio Manager, Heritage Investments",
    rating: 5,
    image: "/api/placeholder/64/64"
  },
  {
    text: "Working with BOE Limited for our gold investments has been a game-changer. Their market insights and execution are consistently excellent.",
    author: "Robert Martinez",
    position: "CEO, Premium Metals Trading",
    rating: 5,
    image: "/api/placeholder/64/64"
  },
  {
    text: "Their dedication to client success and deep understanding of the gold market makes BOE Limited an invaluable partner.",
    author: "Emma Thompson",
    position: "Director of Operations, Global Trade Partners",
    rating: 5,
    image: "/api/placeholder/64/64"
  }
];

// Enhanced stats data
const statsData = [
  { label: "Years of Experience", value: "15+", icon: Award },
  { label: "Successful Trades", value: "10K+", icon: TrendingUp },
  { label: "Client Satisfaction", value: "99%", icon: Shield },
];

const SectionWrapper = ({ children, title, icon: Icon }) => {
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
      <div className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
};

const StatsSection = () => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-16">
    {statsData.map((stat, index) => (
      <div key={index} className="bg-white p-8 rounded-xl shadow-lg text-center">
        <stat.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
        <div className="text-4xl font-bold text-blue-800 mb-2">{stat.value}</div>
        <div className="text-gray-600">{stat.label}</div>
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
    <div className="relative bg-white rounded-xl shadow-lg p-8 mx-auto max-w-4xl">
      <div className="overflow-hidden">
        <div className={`transition-transform duration-500 ease-in-out transform ${isAnimating ? 'opacity-50' : 'opacity-100'}`}>
          <div className="flex items-center mb-6">
            <img 
              src={testimonials[currentIndex].image} 
              alt={testimonials[currentIndex].author}
              className="w-16 h-16 rounded-full mr-4"
            />
            <div>
              <div className="text-gray-600 text-lg italic">{testimonials[currentIndex].text}</div>
              <div className="flex items-center mt-2">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
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
      <div key={index} className="bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300">
        <div className="text-4xl mb-4">{service.icon}</div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
        <p className="text-gray-600">{service.description}</p>
      </div>
    ))}
  </div>
);

const WhyChooseUs = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16">
    <div className="bg-white p-8 rounded-xl shadow-lg">
      <h3 className="text-2xl font-semibold text-blue-800 mb-4">Why Choose BOE Limited?</h3>
      <ul className="space-y-4">
        {[
          "15+ years of excellence in gold trading",
          "Dedicated team of market experts",
          "Secure and transparent transactions",
          "Competitive rates and flexible investment options",
          "24/7 customer support",
          "Global market access",
          "Comprehensive market analysis",
          "Regulatory compliance assured"
        ].map((item, index) => (
          <li key={index} className="flex items-center">
            <svg className="w-5 h-5 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            {item}
          </li>
        ))}
      </ul>
    </div>
    <div className="bg-white p-8 rounded-xl shadow-lg">
      <img src="/api/placeholder/400/300" alt="Gold trading" className="w-full rounded-lg mb-6" />
      <p className="text-gray-600 leading-relaxed">
        At BOE Limited, we combine years of expertise with cutting-edge technology to provide you with the best gold trading experience. Our commitment to excellence, transparency, and customer satisfaction has made us a trusted name in the industry.
      </p>
    </div>
  </div>
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
              Your trusted partner in global gold trading and investment excellence
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact" className="px-8 py-3 bg-yellow-400 text-blue-900 font-semibold rounded-lg hover:bg-yellow-300 transition duration-300">
                Start Trading
              </Link>
              <Link to="/about" className="px-8 py-3 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg hover:bg-white/20 transition duration-300">
                Learn More
              </Link>
            </div>
          </div>
        </section>

        <StatsSection />

        <SectionWrapper title="Our Services" icon={ChevronDown}>
          <GoldServices />
        </SectionWrapper>

        <WhyChooseUs />

        <SectionWrapper title="Company Overview" icon={ChevronDown}>
          <CompanyInfo />
        </SectionWrapper>

        <SectionWrapper title="Our Industries" icon={ChevronDown}>
          <IndustriesSection />
        </SectionWrapper>

        <SectionWrapper title="Our Journey" icon={ChevronDown}>
          <History />
        </SectionWrapper>

        <SectionWrapper title="Client Testimonials" icon={ChevronDown}>
          <TestimonialSlider />
        </SectionWrapper>

        <section className="bg-blue-50 py-16 px-4 sm:px-6 lg:px-8 rounded-lg shadow-inner mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Contact Us</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold mb-6 text-blue-800">Get in Touch</h3>
                <ul className="space-y-6">
                  <li className="flex items-center">
                    <Phone className="w-6 h-6 text-blue-600 mr-4" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-gray-600">+254715119636</p>
                    </div>
                  </li>
                  <li className="flex items-center">
                    <Mail className="w-6 h-6 text-blue-600 mr-4" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-gray-600">boeltdcompany@gmail.com</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <MapPin className="w-6 h-6 text-blue-600 mr-4 mt-1" />
                    <div>
                      <p className="font-medium">Locations</p>
                      <p className="text-gray-600">Mali Office</p>
                      <p className="text-gray-600 mt-2">Kenya Office</p>
                    </div>
                  </li>
                </ul>
                <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-gray-600">
                    Our team is available during business hours (8:00 AM - 6:00 PM EAT) 
                    to assist you with any inquiries.
                  </p>
                </div>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name
                    </label>
                    <input 
                      type="text" 
                      placeholder="John Doe" 
                      className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input 
                      type="email" 
                      placeholder="john@example.com" 
                      className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Subject
                    </label>
                    <select className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option value="">Select a subject</option>
                      <option value="trading">Gold Trading</option>
                      <option value="investment">Investment Inquiry</option>
                      <option value="storage">Storage Services</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Your Message
                    </label>
                    <textarea 
                      placeholder="How can we help you?" 
                      rows={4} 
                      className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    ></textarea>
                  </div>
                  <button 
                    type="submit" 
                    className="w-full bg-blue-600 text-white font-semibold py-3 px-4 rounded-md hover:bg-blue-700 transition duration-300 flex items-center justify-center"
                  >
                    Send Message
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        <footer className="bg-white rounded-lg shadow-lg mt-16 overflow-hidden">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">About BOE Limited</h3>
                <p className="text-gray-600">
                  Your trusted partner in gold trading, providing premium services and expert guidance 
                  for all your precious metal investment needs.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li>
                    <Link to="/about" className="text-gray-600 hover:text-blue-600 transition-colors">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link to="/services" className="text-gray-600 hover:text-blue-600 transition-colors">
                      Our Services
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" className="text-gray-600 hover:text-blue-600 transition-colors">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Business Hours</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>Monday - Friday: 8:00 AM - 6:00 PM</li>
                  <li>Saturday: 9:00 AM - 1:00 PM</li>
                  <li>Sunday: Closed</li>
                </ul>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-200">
              <p className="text-center text-gray-500">
                © {new Date().getFullYear()} BOE Limited. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Home;