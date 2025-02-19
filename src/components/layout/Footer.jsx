import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' },
    { name: 'LinkedIn', icon: Linkedin, href: '#' }
  ];

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Security Services', path: '/services/security' },
    { name: 'Investigation Services', path: '/services/investigation' },
    { name: 'Quick Quote', path: '/quick-quote' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <footer className="bg-black border-t border-red-600">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-lg sm:text-xl font-bold text-red-600">SHLOK Security & Investigation Services</h3>
            <p className="text-gray-300 text-sm sm:text-base">
              Professional security and investigative services available 24/7 throughout Ontario, Canada.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg sm:text-xl font-bold text-red-600">Quick Links</h3>
            <ul className="grid grid-cols-2 sm:grid-cols-1 gap-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-red-600 transition-colors duration-200 text-sm sm:text-base"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg sm:text-xl font-bold text-red-600">Contact Us</h3>
            <div className="space-y-2 text-sm sm:text-base text-gray-300">
              <p>
                <a href="mailto:shlokraval99@gmail.com" className="hover:text-red-600 break-all">
                  shlokraval99@gmail.com
                </a>
              </p>
              <p>
                <a href="tel:+16478623601" className="hover:text-red-600">
                  +1 647-862-3601
                </a>
              </p>
              <div className="flex space-x-4 mt-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="text-gray-300 hover:text-red-600 transition-colors duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="sr-only">{social.name}</span>
                    <social.icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400 text-sm sm:text-base">
            &copy; {new Date().getFullYear()} SHLOK Security and Investigation Services. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;