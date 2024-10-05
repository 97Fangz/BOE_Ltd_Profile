// File: src/components/ui/card.tsx

import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Card: React.FC<CardProps> = ({ className, children, ...props }) => {
  return (
    <div 
      className={`bg-white rounded-lg shadow-md overflow-hidden ${className}`} 
      {...props}
    >
      {children}
    </div>
  );
};

export const CardHeader: React.FC<CardProps> = ({ className, children, ...props }) => {
  return (
    <div 
      className={`px-6 py-4 border-b border-gray-200 ${className}`} 
      {...props}
    >
      {children}
    </div>
  );
};

export const CardContent: React.FC<CardProps> = ({ className, children, ...props }) => {
  return (
    <div 
      className={`px-6 py-4 ${className}`} 
      {...props}
    >
      {children}
    </div>
  );
};

export const CardFooter: React.FC<CardProps> = ({ className, children, ...props }) => {
  return (
    <div 
      className={`px-6 py-4 border-t border-gray-200 ${className}`} 
      {...props}
    >
      {children}
    </div>
  );
};