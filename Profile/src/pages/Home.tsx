import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Shield, Globe, Award, TrendingUp, CheckCircle, ArrowRight, Star, Users, Lock, FileCheck, Zap, BarChart3, Clock } from 'lucide-react';

const testimonials = [
  {
    text: "BOE Minerals has consistently delivered exceptional value and transparency in every transaction. Their professionalism sets the industry standard.",
    author: "Michael Chen",
    position: "Investment Director, Global Assets Ltd",
    rating: 5,
    company: "Global Assets Ltd"
  },
  {
    text: "The expertise and integrity demonstrated by BOE Minerals has made them our exclusive partner for precious metals trading.",
    author: "Sarah Williams",
    position: "Portfolio Manager, Heritage Investments",
    rating: 5,
    company: "Heritage Investments"
  },
  {
    text: "Unparalleled market insights and flawless execution. BOE Minerals transforms gold trading into a strategic advantage.",
    author: "Robert Martinez",
    position: "CEO, Premium Metals Trading",
    rating: 5,
    company: "Premium Metals Trading"
  },
  {
    text: "Their dedication to client success and deep understanding of the gold market makes BOE Minerals an invaluable partner.",
    author: "Emma Thompson",
    position: "Director of Operations, Global Trade Partners",
    rating: 5,
    company: "Global Trade Partners"
  }
];

const services = [
  {
    icon: TrendingUp,
    title: "Gold Trading Excellence",
    description: "Institutional-grade trading services with real-time market intelligence and competitive pricing structures.",
    features: ["Live market pricing", "Expert execution", "Global liquidity"]
  },
  {
    icon: Shield,
    title: "Secure Asset Management",
    description: "Military-grade security protocols with comprehensive insurance coverage and 24/7 monitoring systems.",
    features: ["24/7 security", "Full insurance", "Vault storage"]
  },
  {
    icon: Globe,
    title: "Global Market Access",
    description: "Strategic partnerships across continents ensuring optimal pricing and seamless international transactions.",
    features: ["Worldwide network", "Fast settlement", "Multi-currency"]
  },
  {
    icon: Award,
    title: "Compliance & Certification",
    description: "Full regulatory compliance with international standards, complete documentation and certification support.",
    features: ["ISO certified", "Full compliance", "Legal support"]
  }
];

const processSteps = [
  {
    step: "01",
    title: "Initial Consultation",
    description: "Connect with our experts to discuss your gold investment goals and requirements.",
    icon: Users
  },
  {
    step: "02",
    title: "Documentation & Verification",
    description: "Complete secure onboarding with full KYC/AML compliance and legal verification.",
    icon: FileCheck
  },
  {
    step: "03",
    title: "Transaction Execution",
    description: "Execute your trade with real-time pricing, secure payment, and complete transparency.",
    icon: Zap
  },
  {
    step: "04",
    title: "Delivery & Certification",
    description: "Receive your gold with full certification, insurance, and tracking documentation.",
    icon: Lock
  }
];

const features = [
  {
    icon: BarChart3,
    title: "Market Intelligence",
    description: "Access to real-time market data, trends analysis, and expert insights for informed decision-making."
  },
  {
    icon: Lock,
    title: "Secure Transactions",
    description: "Bank-level encryption, secure payment gateways, and complete transaction confidentiality."
  },
  {
    icon: Clock,
    title: "Fast Settlement",
    description: "Quick processing times with efficient settlement cycles and immediate confirmation."
  },
  {
    icon: FileCheck,
    title: "Full Documentation",
    description: "Complete paperwork including certificates of authenticity, ownership, and compliance records."
  }
];

const whyChoosePoints = [
  {
    title: "Certified Premium Quality",
    description: "99.9% pure African gold with verified authenticity certificates from accredited laboratories."
  },
  {
    title: "Complete Traceability",
    description: "End-to-end documentation from source to delivery with blockchain-verified tracking."
  },
  {
    title: "International Compliance",
    description: "Meeting global regulatory standards including Basel III, LBMA, and local jurisdictions."
  },
  {
    title: "Secure Logistics",
    description: "Discreet, insured delivery with comprehensive tracking through specialized carriers."
  },
  {
    title: "Competitive Pricing",
    description: "Direct sourcing relationships ensuring the most competitive rates in the market."
  },
  {
    title: "Expert Advisory",
    description: "Dedicated account managers and precious metals specialists at your service."
  }
];

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <div className="mb-4">
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-800 text-sm font-semibold rounded-full">
              Client Success Stories
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Trusted by Industry Leaders</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-blue-50 to-white border border-blue-100 rounded-2xl p-6 md:p-12 shadow-xl">
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="flex-shrink-0 mx-auto md:mx-0">
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center text-white text-3xl font-bold shadow-lg">
                  {testimonials[currentIndex].author.charAt(0)}
                </div>
              </div>
              <div className="flex-1 text-center md:text-left">
                <div className="flex justify-center md:justify-start mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-blue-600 text-blue-600" />
                  ))}
                </div>
                <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-6 italic">
                  "{testimonials[currentIndex].text}"
                </p>
                <div>
                  <p className="font-semibold text-gray-900 text-lg">{testimonials[currentIndex].author}</p>
                  <p className="text-sm text-gray-600">{testimonials[currentIndex].position}</p>
                  <p className="text-sm text-blue-600 font-medium mt-1">{testimonials[currentIndex].company}</p>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center space-x-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`h-3 rounded-full transition-all ${
                    index === currentIndex ? 'bg-blue-600 w-8' : 'bg-blue-200 w-3'
                  }`}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message. We will contact you shortly.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg border border-blue-100">
      <h3 className="text-xl md:text-2xl font-semibold mb-6 text-gray-900">Send us a Message</h3>
      <div className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
          <input 
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" 
            placeholder="John Doe"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
          <input 
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" 
            placeholder="john@example.com"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
          <select 
            value={formData.subject}
            onChange={(e) => setFormData({...formData, subject: e.target.value})}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
          >
            <option value="">Select a subject</option>
            <option value="trading">Gold Trading</option>
            <option value="investment">Investment Inquiry</option>
            <option value="partnership">Partnership</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
          <textarea 
            rows={4}
            value={formData.message}
            onChange={(e) => setFormData({...formData, message: e.target.value})}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent resize-none"
            placeholder="How can we assist you?"
          ></textarea>
        </div>
        <button 
          onClick={(e) => handleSubmit(e as unknown as React.FormEvent<HTMLFormElement>)}
          className="w-full bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300 flex items-center justify-center"
        >
          Send Message
          <ArrowRight className="ml-2 w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <div className="min-h-screen bg-[#F0F9FF]">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjAuNSIgb3BhY2l0eT0iLjEiLz48L2c+PC9zdmc+')] opacity-10"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-6 animate-fade-in">
              <span className="inline-block px-4 py-2 bg-blue-600 text-white text-xs md:text-sm font-semibold rounded-full shadow-lg">
                Premium African Gold Trading
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Best of Earth. <span className="text-blue-300">Pure Value. Trusted Origins.</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-10 text-blue-100 leading-relaxed px-4">
              Exceptional African gold, responsibly sourced and delivered to global markets with discretion, precision, and integrity.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 px-4">
              <button className="px-6 md:px-8 py-3 md:py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300 flex items-center justify-center shadow-lg">
                Start Trading
                <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
              </button>
              <button className="px-6 md:px-8 py-3 md:py-4 bg-white text-blue-900 font-semibold rounded-lg hover:bg-blue-50 transition duration-300 shadow-lg">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* The BOE Standard */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-blue-100 text-blue-800 text-sm font-semibold rounded-full">
                Our Commitment
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8">The BOE Standard</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed mb-6">
              At BOE Minerals, <span className="font-semibold text-blue-600">Best of Earth</span> is not a slogan—it is our operating principle.
            </p>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              We represent Africa's finest gold through disciplined sourcing, verified certification, and globally compliant delivery. Every transaction reflects clarity, security, and confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2">4+</div>
              <div className="text-blue-200 text-base md:text-lg">Years of Excellence</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2">10K+</div>
              <div className="text-blue-200 text-base md:text-lg">Successful Transactions</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2">99%</div>
              <div className="text-blue-200 text-base md:text-lg">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-[#F0F9FF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <div className="mb-4">
              <span className="inline-block px-4 py-2 bg-blue-100 text-blue-800 text-sm font-semibold rounded-full">
                What We Offer
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive gold trading solutions designed for institutional and individual investors worldwide.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-6 md:p-8 shadow-md hover:shadow-2xl transition-all duration-300 border border-blue-100">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                  <service.icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-blue-600 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <div className="mb-4">
              <span className="inline-block px-4 py-2 bg-blue-100 text-blue-800 text-sm font-semibold rounded-full">
                Our Process
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              A seamless four-step process from consultation to delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-gradient-to-br from-blue-50 to-white border-2 border-blue-200 rounded-xl p-6 md:p-8 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-5xl md:text-6xl font-bold text-blue-200">{step.step}</span>
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                      <step.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-8 h-8 text-blue-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 md:py-24 bg-[#F0F9FF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Clients Choose Us</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-6 md:p-8 shadow-md hover:shadow-xl transition-all duration-300 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose BOE */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-blue-100 text-blue-800 text-sm font-semibold rounded-full">
                  Why BOE Minerals
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Excellence in Every Transaction</h2>
              <div className="w-24 h-1 bg-blue-600 mb-8"></div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {whyChoosePoints.map((point, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 mr-3">
                      <CheckCircle className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-1">{point.title}</h3>
                      <p className="text-sm md:text-base text-gray-600">{point.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="order-1 lg:order-2 relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/Boelogo.jpeg" 
                  alt="BOE Minerals" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-blue-600 text-white p-4 md:p-6 rounded-xl shadow-xl">
                <div className="text-2xl md:text-3xl font-bold">99.9%</div>
                <div className="text-xs md:text-sm">Gold Purity</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialSection />

      {/* Contact Section */}
      <section className="py-16 md:py-24 bg-[#F0F9FF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <div className="mb-4">
              <span className="inline-block px-4 py-2 bg-blue-100 text-blue-800 text-sm font-semibold rounded-full">
                Contact Us
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg border border-blue-100">
              <h3 className="text-xl md:text-2xl font-semibold mb-6 text-gray-900">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-blue-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Phone</p>
                    <p className="text-gray-600">+254715119636</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-blue-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <p className="text-gray-600 break-all">boeltdcompany@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-blue-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Locations</p>
                    <p className="text-gray-600">Mali Office</p>
                    <p className="text-gray-600">Kenya Office</p>
                  </div>
                </div>
              </div>
              <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-gray-700">
                  <strong>Business Hours:</strong> 8:00 AM - 6:00 PM EAT (Monday - Friday)
                </p>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;