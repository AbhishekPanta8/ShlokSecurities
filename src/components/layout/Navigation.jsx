import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

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
    if (!mobile) {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      setServicesOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (!mobile) {
      timeoutRef.current = setTimeout(() => {
        setServicesOpen(false);
      }, 300);
    }
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
    <nav className={`
      ${mobile 
        ? 'px-4 py-4 space-y-4' 
        : 'flex items-center space-x-6'
      }
    `}>
      {/* Primary Navigation Items */}
      <div className={`
        ${mobile 
          ? 'flex flex-col space-y-4' 
          : 'flex items-center space-x-6'
        }
      `}>
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className="text-white hover:text-red-600 transition-colors duration-200 text-sm sm:text-base"
            onClick={handleClick}
          >
            {item.text}
          </Link>
        ))}
        
        {/* Services Dropdown */}
        <div 
          className={`relative ${mobile ? '' : 'group'}`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          ref={dropdownRef}
        >
          <button
            className="flex items-center space-x-1 text-white hover:text-red-600 transition-colors duration-200 text-sm sm:text-base"
            onClick={() => mobile && setServicesOpen(!servicesOpen)}
          >
            <span>Services</span>
            <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} />
          </button>
          
          {servicesOpen && (
            <div className={`
              ${mobile 
                ? 'mt-2 ml-4 space-y-2' 
                : 'absolute top-full left-0 mt-2 w-56 bg-black border border-red-600 rounded-lg shadow-lg py-2'
              }
            `}>
              {serviceItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`
                    text-white hover:text-red-600 transition-colors duration-200 text-sm sm:text-base
                    ${mobile ? 'block py-2' : 'block px-4 py-2 hover:bg-gray-900'}
                  `}
                  onClick={handleClick}
                >
                  {item.text}
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* End Navigation Items */}
        {endNavItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className="text-white hover:text-red-600 transition-colors duration-200 text-sm sm:text-base"
            onClick={handleClick}
          >
            {item.text}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;