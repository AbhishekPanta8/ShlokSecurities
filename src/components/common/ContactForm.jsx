import React, { useState } from 'react';
import Button from '../ui/Button';

const ContactForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
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
    <form onSubmit={handleSubmit} className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        <div className="sm:col-span-2 md:col-span-1">
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

        <div className="sm:col-span-2 md:col-span-1">
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

        <div className="sm:col-span-2">
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

        <div className="sm:col-span-2">
          <label htmlFor="message" className="block text-white text-sm sm:text-base mb-2">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-800 border border-gray-700 rounded-lg text-white text-sm sm:text-base focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-colors resize-y min-h-[120px]"
            required
          ></textarea>
        </div>
      </div>

      <div className="sm:col-span-2 pt-4">
        <Button 
          type="submit" 
          variant="primary" 
          size="lg" 
          className="w-full sm:w-auto sm:min-w-[200px] text-base sm:text-lg py-3 px-6"
        >
          Send Message
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;