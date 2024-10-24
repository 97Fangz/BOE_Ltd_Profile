// HeroSection.tsx
import React from 'react';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden py-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-blue-950">
        <div className="absolute inset-0 opacity-20" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l30 30-30 30L0 30z' fill='%23FFD700' fill-opacity='0.4'/%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 bg-clip-text text-transparent">
              Connect With Expert Gold Traders
            </span>
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Our team of experienced professionals is here to assist you with all your precious metal trading needs. 
            Reach out to us for secure, reliable, and professional service.
          </p>

          {/* Decorative Elements */}
          <div className="mt-12 flex justify-center space-x-8">
            <motion.div 
              className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-300 to-amber-500 opacity-80"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.8, 0.4, 0.8]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div 
              className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 opacity-80"
              animate={{ 
                scale: [1.2, 1, 1.2],
                opacity: [0.8, 0.4, 0.8]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;