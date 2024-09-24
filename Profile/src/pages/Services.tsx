import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Globe, Shield, CreditCard, Award } from 'lucide-react';


const ServiceCard = ({ title, description, icon: Icon, features }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
      <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Icon className="text-blue-600 w-10 h-10" />
            <h2 className="text-2xl font-semibold text-blue-800">{title}</h2>
          </div>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-blue-600 hover:bg-blue-200 rounded-full p-1 transition-colors duration-200"
            aria-label={isExpanded ? "Collapse" : "Expand"}
          >
            {isExpanded ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
          </button>
        </div>
      </div>
      <div className="p-6">
        <p className="text-gray-600 mb-4">{description}</p>
        <div className={`mt-4 space-y-2 overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-96' : 'max-h-0'}`}>
          <h3 className="text-blue-800 font-semibold">Features:</h3>
          <ul className="list-disc list-inside text-gray-600">
            {features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      title: "Global Reach",
      description: "Our worldwide shipment solutions ensure your precious metals reach any destination securely and on time.",
      icon: Globe,
      features: [
        "Door-to-door delivery in over 190 countries",
        "Real-time tracking and notifications",
        "Customs clearance assistance",
        "Specialized handling for high-value metals"
      ]
    },
    {
      title: "Flexible Terms",
      description: "Choose between FOB and CIF shipping terms to suit your specific needs and preferences.",
      icon: Shield,
      features: [
        "Transparent pricing structure",
        "Customizable risk management options",
        "Expert guidance on Incoterms",
        "Tailored solutions for complex shipments"
      ]
    },
    {
      title: "Seamless Transactions",
      description: "Multiple payment options and credit facilities provide convenience and flexibility for all our clients.",
      icon: CreditCard,
      features: [
        "Secure, encrypted transactions",
        "Support for major currencies",
        "Flexible credit terms for qualified clients",
        "Rapid processing and confirmation"
      ]
    },
    {
      title: "Premium Quality",
      description: "We guarantee the highest quality precious metals, adhering to rigorous standards in every transaction.",
      icon: Award,
      features: [
        "Certified purity and authenticity",
        "Independent quality assurance checks",
        "Full traceability from source to delivery",
        "100% satisfaction guarantee"
      ]
    }
  ];

  return (
    <div className="relative flex min-h-screen flex-col bg-gradient-to-b from-blue-50 via-white to-blue-50 py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        <div className="bg-blue-100 rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-5xl font-extrabold text-blue-900 text-center mb-12">
            Our <span className="text-yellow-400">Premium</span> Services
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </div>
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute transform -translate-x-1/2 -translate-y-1/2 animate-pulse" style={{ top: '50%', left: '50%' }}>
          <svg width="2000" height="2000" viewBox="0 0 2000 2000" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#4299e1', stopOpacity: 0.1 }} />
                <stop offset="100%" style={{ stopColor: '#3182ce', stopOpacity: 0.3 }} />
              </linearGradient>
            </defs>
            <circle cx="1000" cy="1000" r="800" fill="url(#grad)" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Services;