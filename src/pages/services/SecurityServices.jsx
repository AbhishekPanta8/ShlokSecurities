import React from 'react';
import { Link } from 'react-router-dom';

const SecurityServices = () => {
  const services = [
    "Event Guards",
    "Mobile Patrol",
    "Uniformed And Non-Uniformed Security Guards",
    "Asset Protection And Loss Prevention Security Guards",
    "Residential Property Guards (Concierge Security)",
    "Commercial Security Guards",
    "Construction Site Security",
    "Warehouse, Manufacturing Plant Security",
    "Fire Watch, Expensive Material Watch",
    "Patient Watch - In Hospitals and In Home",
    "Club Security Guards",
    "Emergency Response Guards",
    "Parking Security Guards",
    "Home Security Guards",
    "Personal Security Guards",
    "Mall Security Guards",
    "Live Remote Video Surveillance Guards",
    "Alarm Response Guards",
    "Weekend Party Security Guards"
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-red-600 mb-4">
          Security Services in Windsor &amp; Across Ontario
        </h1>
        <p className="text-base text-gray-300 max-w-3xl mx-auto">
          Looking for trusted security services in Windsor, Ontario? At Shlok Security and Investigation Services Inc., we provide professional 24/7 security solutions tailored to businesses, residential properties, events, and industrial sites. Our licensed security guards ensure the safety of your assets, property, and personnel with expertise in loss prevention, access control, mobile patrolling, and emergency response.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-gray-900 p-6 rounded-lg shadow-lg hover:transform hover:scale-105 transition-transform duration-300"
          >
            <h3 className="text-xl font-semibold text-red-600 mb-4">{service}</h3>
            <p className="text-gray-300 mb-4">
              Professional {service.toLowerCase()} services provided by trained and licensed security personnel.
            </p>
            <Link
              to="/quick-quote"
              className="inline-block bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors duration-200"
            >
              Get a Quote
            </Link>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <div className="bg-gray-900 p-8 rounded-lg inline-block">
          <h2 className="text-2xl font-bold text-red-600 mb-4">Available 24/7</h2>
          <p className="text-gray-300 mb-6">
            Contact us anytime for immediate assistance or to discuss your security needs.
          </p>
          <div className="space-x-4">
            <a
              href="tel:+16478623601"
              className="inline-block bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors duration-200"
            >
              Call Now
            </a>
            <Link
              to="/contact"
              className="inline-block border border-red-600 text-red-600 px-6 py-3 rounded-lg hover:bg-red-600 hover:text-white transition-colors duration-200"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecurityServices;
