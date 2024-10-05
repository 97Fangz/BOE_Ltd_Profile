import React, { useEffect, useRef } from 'react';
import { Camera, Smartphone, Mail, MapPin, Instagram, Video } from 'lucide-react';

interface ContactCardProps {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  content: string[];
  buttonText: string;
  buttonHref: string;
}

const ContactCard: React.FC<ContactCardProps> = ({ icon: Icon, title, content, buttonText, buttonHref }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div ref={cardRef} className="opacity-0 bg-white bg-opacity-10 backdrop-blur-lg rounded-xl border border-yellow-300 border-opacity-30 p-6 transition-all duration-300 ease-in-out hover:transform hover:-translate-y-2 hover:shadow-lg">
      <div className="flex flex-col items-center">
        <Icon className="w-12 h-12 text-yellow-400 mb-4" />
        <h3 className="text-xl font-semibold text-yellow-400 mb-2">{title}</h3>
        <div className="text-center text-white mb-4">
          {content.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
        <a
          href={buttonHref}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-yellow-400 text-blue-900 px-6 py-2 rounded-full font-semibold transition-all duration-300 ease-in-out hover:bg-yellow-300 hover:shadow-md active:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50"
        >
          {buttonText}
        </a>
      </div>
    </div>
  );
};

const ContactSection = () => {
  return (
    <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 rounded-3xl shadow-2xl p-8 md:p-12 m-4 md:m-8 max-w-7xl mx-auto overflow-hidden">
      <h2 className="text-4xl md:text-5xl font-bold text-center text-yellow-400 mb-12 animate-pulse">
        Get in Touch
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <ContactCard
          icon={Smartphone}
          title="WhatsApp"
          content={["+254715119636"]}
          buttonText="Chat Now"
          buttonHref="https://wa.me/254715119636"
        />
        <ContactCard
          icon={Camera}
          title="Phone"
          content={["+254798877813", "+254715119636"]}
          buttonText="Call Now"
          buttonHref="tel:+254798877813"
        />
        <ContactCard
          icon={Mail}
          title="Email"
          content={["boelimited275@gmail.com"]}
          buttonText="Send Email"
          buttonHref="mailto:boelimited275@gmail.com"
        />
        <ContactCard
          icon={Video}
          title="TikTok"
          content={["Follow us for updates"]}
          buttonText="Follow"
          buttonHref="https://www.tiktok.com/@boelimited?_t=8oJpZoCT0bt&_r=1"
        />
        <ContactCard
          icon={MapPin}
          title="Location"
          content={["Mali Location", "Kenya Location"]}
          buttonText="View Map"
          buttonHref="https://www.google.com/maps/place/Mali"
        />
        <ContactCard
          icon={Instagram}
          title="Instagram"
          content={["Follow our latest posts"]}
          buttonText="Follow"
          buttonHref="https://www.instagram.com/boelimited"
        />
      </div>
    </section>
  );
};

export default ContactSection;