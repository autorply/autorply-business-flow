
import React from 'react';
import { motion } from 'framer-motion';

interface AccessibleButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  ariaLabel: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'ghost' | 'icon';
}

const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  children,
  onClick,
  className = '',
  ariaLabel,
  disabled = false,
  type = 'button',
  variant = 'primary'
}) => {
  const baseClasses = 'transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2';
  
  const variantClasses = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 px-4 py-2 rounded-lg',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300 px-4 py-2 rounded-lg',
    ghost: 'text-gray-600 hover:text-gray-800 hover:bg-gray-100 p-2 rounded',
    icon: 'p-2 rounded-full hover:bg-gray-100'
  };

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      className={`${baseClasses} ${variantClasses[variant]} ${className} ${
        disabled ? 'opacity-50 cursor-not-allowed' : ''
      }`}
      whileHover={!disabled ? { scale: 1.02 } : {}}
      whileTap={!disabled ? { scale: 0.98 } : {}}
    >
      {children}
    </motion.button>
  );
};

export default AccessibleButton;
