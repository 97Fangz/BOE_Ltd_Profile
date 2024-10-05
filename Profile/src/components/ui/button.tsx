// File: src/components/ui/button.tsx

import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
}

export const Button: React.FC<ButtonProps> = ({ 
  className, 
  children, 
  variant = 'primary', 
  ...props 
}) => {
  const baseStyles = 'px-4 py-2 rounded-lg font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-300 ease-in-out';
  const variantStyles = {
    primary: 'bg-sky-500 text-white hover:bg-sky-600 active:bg-sky-700 focus:ring-sky-500',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300 active:bg-gray-400 focus:ring-gray-500',
    outline: 'border-2 border-sky-500 text-sky-500 hover:bg-sky-50 active:bg-sky-100 focus:ring-sky-500',
    ghost: 'text-sky-500 hover:bg-sky-50 active:bg-sky-100 focus:ring-sky-500'
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