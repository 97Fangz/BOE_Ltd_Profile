// File: src/components/ui/button.tsx

import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
}

export const Button: React.FC<ButtonProps> = ({ 
  className, 
  children, 
  variant = 'primary', 
  ...props 
}) => {
  const baseStyles = 'px-4 py-2 rounded-full font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-300 ease-in-out text-sm';
  const variantStyles = {
    primary: 'bg-blue-500 text-white hover:bg-blue-600 active:bg-blue-700 focus:ring-blue-500',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300 active:bg-gray-400 focus:ring-gray-500',
    ghost: 'text-blue-500 hover:bg-blue-50 active:bg-blue-100 focus:ring-blue-500'
  };

  return (
    <button 
      className={`${baseStyles} ${variantStyles[variant]} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
};