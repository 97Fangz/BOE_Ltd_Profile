// File: src/components/ui/button.tsx

import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'ghost';
}

export const Button: React.FC<ButtonProps> = ({ 
  className, 
  children, 
  variant = 'default', 
  ...props 
}) => {
  const baseStyles = 'px-4 py-2 rounded font-medium focus:outline-none focus:ring-2 focus:ring-offset-2';
  const variantStyles = {
    default: 'bg-sky-500 text-white hover:bg-sky-600',
    outline: 'border border-sky-500 text-sky-500 hover:bg-sky-50',
    ghost: 'text-sky-500 hover:bg-sky-50'
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