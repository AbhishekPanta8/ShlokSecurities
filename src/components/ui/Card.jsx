import React from 'react';

const Card = ({ 
  children, 
  className = '', 
  hoverable = false,
  ...props 
}) => {
  const baseClasses = 'bg-gray-900 rounded-lg shadow-lg overflow-hidden';
  const hoverClasses = hoverable ? 'transition-transform duration-300 hover:scale-105' : '';

  return (
    <div 
      className={`${baseClasses} ${hoverClasses} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export const CardHeader = ({ children, className = '', ...props }) => (
  <div className={`px-6 py-4 ${className}`} {...props}>
    {children}
  </div>
);

export const CardBody = ({ children, className = '', ...props }) => (
  <div className={`px-6 py-4 ${className}`} {...props}>
    {children}
  </div>
);

export const CardFooter = ({ children, className = '', ...props }) => (
  <div className={`px-6 py-4 border-t border-gray-800 ${className}`} {...props}>
    {children}
  </div>
);

export default Card;