import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navigation = ({ mobile, setIsMenuOpen }) => {
  const [servicesOpen, setServicesOpen] = useState(false);

  const handleClick = () => {
    if (mobile && setIsMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { text: 'Home', path: '/' },
    { text: 'About', path: '/about' },
    { text: 'Quick Quote', path: '/quick-quote' },
    { text: 'Contact', path: '/contact' },
  ];

  const serviceItems = [
    { text: 'Security Services', path: '/services/security' },
    { text: 'Investigation Services', path: '/services/investigation' },
  ];

  return (
    <nav className={`${mobile ? 'flex flex-col space-y-4' : 'flex items-center space-x-6'}`}>
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
      
      <div className="relative group">
        <button
          className="text-white hover:text-red-600 transition-colors duration-200"
          onMouseEnter={() => setServicesOpen(true)}
          onMouseLeave={() => setServicesOpen(false)}
        >
          Services & Locations
        </button>
        
        {servicesOpen && (
          <div 
            className="absolute left-0 mt-2 w-48 bg-black border border-red-600 rounded shadow-lg py-2"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
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
    </nav>
  );
};

export default Navigation;