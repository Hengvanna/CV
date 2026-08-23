import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  className?: string;
  onClick?: () => void;
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  download?: boolean | string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  icon: Icon,
  iconPosition = 'left',
  className = '',
  onClick,
  href,
  type = 'button',
  download,
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-colors rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variantStyles = {
    primary: 'bg-[#3db5e6] hover:bg-[#2a9bc9] text-white focus:ring-[#3db5e6]',
    secondary: 'bg-gray-600 hover:bg-gray-700 text-white focus:ring-gray-500',
    outline: 'border-2 border-[#3db5e6] text-[#3db5e6] hover:bg-[#e6f6fc] focus:ring-[#3db5e6]',
    ghost: 'text-gray-700 hover:bg-gray-100 focus:ring-gray-500',
  };
  
  const sizeStyles = {
    sm: 'text-sm py-1.5 px-3',
    md: 'text-base py-2 px-4',
    lg: 'text-lg py-2.5 px-6',
  };
  
  const styles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;
  
  const content = (
    <>
      {Icon && iconPosition === 'left' && <Icon className={`mr-2 ${size === 'sm' ? 'h-4 w-4' : size === 'md' ? 'h-5 w-5' : 'h-6 w-6'}`} />}
      {children}
      {Icon && iconPosition === 'right' && <Icon className={`ml-2 ${size === 'sm' ? 'h-4 w-4' : size === 'md' ? 'h-5 w-5' : 'h-6 w-6'}`} />}
    </>
  );
  
  if (href) {
    return (
      <a 
        href={href} 
        className={styles} 
        onClick={onClick}
        download={download}
        target={!download && href.startsWith('http') ? '_blank' : undefined}
        rel={!download && href.startsWith('http') ? 'noopener noreferrer' : undefined}
      >
        {content}
      </a>
    );
  }
  
  return (
    <button type={type} className={styles} onClick={onClick}>
      {content}
    </button>
  );
};

export default Button;