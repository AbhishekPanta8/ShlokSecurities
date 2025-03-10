import React from 'react';
import { Link } from 'react-router-dom';

const InvestigationServices = () => {
  const services = [
    {
      title: "Pre-Employment Investigations",
      description: "Comprehensive background checks and verification for potential employees."
    },
    {
      title: "Background Investigations",
      description: "Detailed background checks for individuals and organizations."
    },
    {
      title: "Locate Person",
      description: "Professional services to locate missing or hard-to-find individuals."
    },
    {
      title: "GPS Tracking",
      description: "Advanced GPS tracking solutions for various investigative needs."
    },
    {
      title: "Drone Video Surveillance",
      description: "High-quality aerial surveillance and monitoring services."
    },
    {
      title: "Covert Surveillance",
      description: "Discreet surveillance operations conducted by experienced investigators."
    },
    {
      title: "Strike Management",
      description: "Professional handling of strike-related security and surveillance."
    },
    {
      title: "Social Media Investigations",
      description: "Thorough investigation of social media presence and activities."
    },
    {
      title: "Process Serving",
      description: "Professional delivery of legal documents and court orders."
    },
    {
      title: "WSIB And Insurance Claims Investigation",
      description: "Investigation of workplace safety and insurance claims."
    },
    {
      title: "Personal and Commercial Investigations",
      description: "Comprehensive investigation services for individuals and businesses."
    },
    {
      title: "Monitoring Actions Of A Person",
      description: "Professional surveillance and monitoring services."
    },
    {
      title: "Investigation For The Damage Of The Property",
      description: "Detailed investigation of property damage incidents."
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-red-600 mb-4">Investigation Services</h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Professional investigation services conducted by licensed and experienced investigators.
          We ensure confidentiality and thorough results for all investigations.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-gray-900 p-6 rounded-lg shadow-lg hover:transform hover:scale-105 transition-transform duration-300"
          >
            <h3 className="text-xl font-semibold text-red-600 mb-4">{service.title}</h3>
            <p className="text-gray-300 mb-4">{service.description}</p>
            <Link
              to="/quick-quote"
              className="inline-block bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors duration-200"
            >
              Request Investigation
            </Link>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <div className="bg-gray-900 p-8 rounded-lg inline-block">
          <h2 className="text-2xl font-bold text-red-600 mb-4">Confidential Consultations</h2>
          <p className="text-gray-300 mb-6">
            Contact us for a confidential discussion about your investigation needs.
          </p>
          <div className="space-x-4">
            <Link
              to="/contact"
              className="inline-block bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors duration-200"
            >
              Contact Us
            </Link>
            <Link
              to="/quick-quote"
              className="inline-block border border-red-600 text-red-600 px-6 py-3 rounded-lg hover:bg-red-600 hover:text-white transition-colors duration-200"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestigationServices;