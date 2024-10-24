// ContactCard.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface ContactCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  content: string[];
  action: string;
}

const ContactCard: React.FC<ContactCardProps> = ({
  icon,
  title,
  description,
  content,
  action
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="transform transition-all duration-300"
    >
      <Card className="relative overflow-hidden border-0">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/90 to-blue-900/90 backdrop-blur-sm">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-400/10 to-amber-600/10" />
        </div>

        {/* Animated Border */}
        <div className="absolute inset-0 bg-gradient-to-r from-amber-300/20 to-amber-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <CardContent className="relative p-6 flex items-center group">
          {/* Icon Container */}
          <div className="mr-6">
            <motion.div 
              className="bg-gradient-to-br from-amber-300 to-amber-500 p-3 rounded-full"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-blue-950">
                {icon}
              </div>
            </motion.div>
          </div>

          {/* Content */}
          <div className="flex-grow">
            <h3 className="font-semibold text-lg text-amber-300 mb-1">
              {title}
            </h3>
            <p className="text-blue-100 text-sm mb-2 opacity-90">
              {description}
            </p>
            {content.map((item, index) => (
              <p key={index} className="text-amber-400 font-medium">
                {item}
              </p>
            ))}
          </div>

          {/* Action Button */}
          <Button
            variant="ghost"
            onClick={() => window.open(action, '_blank')}
            className="ml-4 group text-amber-300 hover:text-amber-400 hover:bg-blue-950/50"
          >
            <motion.span
              className="block"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              →
            </motion.span>
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ContactCard;