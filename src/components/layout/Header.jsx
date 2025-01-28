import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Shield } from 'lucide-react';
import Navigation from './Navigation';
import FullLogo from '../../assets/images/FullLogo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="border-b-2 border-red-600">
      <header className="bg-black shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center">
              <div className="relative flex-shrink-0">
                <Shield size={48} className="text-gray-300" />
                <img 
                  src={FullLogo}
                  alt="Security Guard"
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 object-contain"
                />
              </div>
              <h1 className="ml-3 text-xl font-bold">
                <span className="text-red-600">SHLOK</span>
                <span className="text-white ml-2 text-lg">Investigation & Security Services</span>
              </h1>
            </Link>

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

            <Navigation className="hidden md:block" />

            {isMenuOpen && (
              <Navigation className="absolute top-16 left-0 w-full bg-black shadow-lg md:hidden" />
            )}
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;