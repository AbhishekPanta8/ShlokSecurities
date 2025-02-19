import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Shield } from 'lucide-react';
import Navigation from './Navigation';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuItemClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="w-full border-b-2 border-red-600">
      <header className="bg-black shadow-md relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo and Title */}
            <Link to="/" className="flex items-center">
              <div className="relative flex-shrink-0">
                <Shield size={36} className="text-gray-300 sm:w-12 sm:h-12" />
                <img 
                  src="/src/assets/images/FullLogo.png"
                  alt="Security Guard"
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 sm:w-8 sm:h-8 object-contain"
                />
              </div>
              <div className="ml-2 sm:ml-3">
                <h1 className="flex flex-col sm:flex-row sm:items-center">
                  <span className="text-red-600 text-lg sm:text-xl font-bold">SHLOK</span>
                  <span className="text-white sm:ml-2 text-sm sm:text-lg whitespace-nowrap">
                    Security & Investigation Services
                  </span>
                </h1>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <Navigation onItemClick={handleMenuItemClick} />
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden rounded-md p-2 text-gray-300 hover:bg-gray-900"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-red-600">
              <Navigation mobile={true} onItemClick={handleMenuItemClick} />
            </div>
          )}
        </div>
      </header>
    </div>
  );
};

export default Header;