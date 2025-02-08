import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const socialLinks = [
    { name: 'Facebook', icon: 'Facebook', href: '#' },
    { name: 'Instagram', icon: 'Instagram', href: '#' },
    { name: 'LinkedIn', icon: 'Linkedin', href: '#' },
    { name: 'TikTok', icon: 'TikTok', href: '#' }
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
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold text-red-600 mb-4">SHLOK Security & Investigation Services</h3>
            <p className="text-gray-300 mb-4">
              Professional security and investigative services available 24/7 throughout Ontario, Canada.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-red-600 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-red-600 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold text-red-600 mb-4">Contact Us</h3>
            <div className="space-y-2 text-gray-300">
              <p>
                <a href="mailto:shlokraval99@gmail.com" className="hover:text-red-600">
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
                    <i className={`fab fa-${social.icon.toLowerCase()}`}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} SHLOK Security and Investigation Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;