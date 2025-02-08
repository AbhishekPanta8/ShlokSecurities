import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navigation = ({ mobile, setIsMenuOpen }) => {
  const [servicesOpen, setServicesOpen] = useState(false);
  const dropdownRef = useRef(null);
  const timeoutRef = useRef(null);

  const handleClick = () => {
    if (mobile && setIsMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setServicesOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setServicesOpen(false);
    }, 300);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const navItems = [
    { text: 'Home', path: '/' },
    { text: 'About', path: '/about' },
    { text: 'Quick Quote', path: '/quick-quote' },
  ];

  const serviceItems = [
    { text: 'Security Services', path: '/services/security' },
    { text: 'Investigation Services', path: '/services/investigation' },
  ];

  const endNavItems = [
    { text: 'Locations', path: '/locations' },
    { text: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`${mobile ? 'flex flex-col space-y-4' : 'flex items-center space-x-6'} relative`}>
      {/* First section of nav items */}
      {navItems.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          className="text-white hover:text-red-600 transition-colors duration-200"
          onClick={handleClick}
        >
          {item.text}
        </Link>
      ))}
      
      {/* Services Dropdown */}
      <div 
        className="relative group"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        ref={dropdownRef}
      >
        <button
          className="text-white hover:text-red-600 transition-colors duration-200"
        >
          Services
        </button>
        
        {servicesOpen && (
          <div 
            className={`
              absolute top-full right-0 md:right-auto md:left-0 mt-2 w-48 
              bg-black border border-red-600 rounded shadow-lg py-2 
              ${mobile ? 'relative' : 'z-50'}
            `}
            style={{ 
              maxHeight: '300px',
              overflow: 'auto'
            }}
          >
            {serviceItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="block px-4 py-2 text-white hover:bg-red-600 transition-colors duration-200"
                onClick={handleClick}
              >
                {item.text}
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* End section of nav items */}
      {endNavItems.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          className="text-white hover:text-red-600 transition-colors duration-200"
          onClick={handleClick}
        >
          {item.text}
        </Link>
      ))}
    </nav>
  );
};

export default Navigation;