import React, { useState } from 'react';
import Button from '../ui/Button';

const QuoteForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    serviceType: 'security',
    name: '',
    company: '',
    email: '',
    phone: '',
    location: '',
    details: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit?.(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
      {/* Service Type Selection */}
      <div className="space-y-4">
        <label className="block text-white text-sm sm:text-base mb-4">Service Type</label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <button
            type="button"
            className={`p-4 rounded-lg text-center transition-colors duration-200 text-sm sm:text-base ${
              formData.serviceType === 'security'
                ? 'bg-red-600 text-white'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
            onClick={() => setFormData(prev => ({ ...prev, serviceType: 'security' }))}
          >
            Security Services
          </button>
          <button
            type="button"
            className={`p-4 rounded-lg text-center transition-colors duration-200 text-sm sm:text-base ${
              formData.serviceType === 'investigation'
                ? 'bg-red-600 text-white'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
            onClick={() => setFormData(prev => ({ ...prev, serviceType: 'investigation' }))}
          >
            Investigation Services
          </button>
        </div>
      </div>

      {/* Personal Information */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        <div>
          <label htmlFor="name" className="block text-white text-sm sm:text-base mb-2">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-800 border border-gray-700 rounded-lg text-white text-sm sm:text-base focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-colors"
            required
          />
        </div>
        <div>
          <label htmlFor="company" className="block text-white text-sm sm:text-base mb-2">Company (optional)</label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-800 border border-gray-700 rounded-lg text-white text-sm sm:text-base focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-colors"
          />
        </div>
      </div>

      {/* Contact Information */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        <div>
          <label htmlFor="email" className="block text-white text-sm sm:text-base mb-2">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-800 border border-gray-700 rounded-lg text-white text-sm sm:text-base focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-colors"
            required
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-white text-sm sm:text-base mb-2">Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-800 border border-gray-700 rounded-lg text-white text-sm sm:text-base focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-colors"
            required
          />
        </div>
      </div>

      {/* Location */}
      <div>
        <label htmlFor="location" className="block text-white text-sm sm:text-base mb-2">Service Location</label>
        <input
          type="text"
          id="location"
          name="location"
          value={formData.location}
          onChange={handleChange}
          className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-800 border border-gray-700 rounded-lg text-white text-sm sm:text-base focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-colors"
          required
        />
      </div>

      {/* Service Details */}
      <div>
        <label htmlFor="details" className="block text-white text-sm sm:text-base mb-2">Service Details</label>
        <textarea
          id="details"
          name="details"
          value={formData.details}
          onChange={handleChange}
          rows="4"
          className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-800 border border-gray-700 rounded-lg text-white text-sm sm:text-base focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-colors resize-y min-h-[120px]"
          placeholder="Please describe your security or investigation needs..."
          required
        ></textarea>
      </div>

      {/* Submit Button */}
      <div className="pt-4">
        <Button 
          type="submit" 
          variant="primary" 
          size="lg" 
          className="w-full sm:w-auto sm:min-w-[200px] text-base sm:text-lg py-3 px-6"
        >
          Request Quote
        </Button>
      </div>
    </form>
  );
};

export default QuoteForm;