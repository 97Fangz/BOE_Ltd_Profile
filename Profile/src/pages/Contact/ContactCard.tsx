// src/pages/Contact/ContactCard.tsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "../../components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";

interface ContactCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  content: string[];
  action: string;
  color: string;
}

const ContactCard: React.FC<ContactCardProps> = ({
  icon,
  title,
  description,
  content,
  action,
  color
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Card className="relative overflow-hidden border-0 bg-gradient-to-br from-gray-900 to-gray-800">
        <CardContent className="p-6">
          <div className="flex items-center gap-4">
            <div className={`p-3 rounded-xl ${color}`}>
              {icon}
            </div>
            <div className="flex-1">
              <CardTitle className="text-xl font-bold text-white mb-1">
                {title}
              </CardTitle>
              <CardDescription className="text-gray-300">
                {description}
              </CardDescription>
              <div className="mt-2">
                {content.map((item, idx) => (
                  <p key={idx} className="text-white font-medium">
                    {item}
                  </p>
                ))}
              </div>
            </div>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-white hover:text-gray-200"
                    onClick={() => window.open(action, '_blank')}
                  >
                    <motion.div
                      animate={{ x: isHovered ? 5 : 0 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <ArrowRight className="h-5 w-5" />
                    </motion.div>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Click to connect</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ContactCard;
