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
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-white mb-4">Service Type</label>
        <div className="grid grid-cols-2 gap-4">
          <button
            type="button"
            className={`p-4 rounded text-center ${
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
            className={`p-4 rounded text-center ${
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

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-white mb-2">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded text-white focus:outline-none focus:border-red-600"
            required
          />
        </div>
        <div>
          <label htmlFor="company" className="block text-white mb-2">Company (optional)</label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded text-white focus:outline-none focus:border-red-600"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="email" className="block text-white mb-2">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded text-white focus:outline-none focus:border-red-600"
            required
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-white mb-2">Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded text-white focus:outline-none focus:border-red-600"
            required
          />
        </div>
      </div>

      <div>
        <label htmlFor="location" className="block text-white mb-2">Service Location</label>
        <input
          type="text"
          id="location"
          name="location"
          value={formData.location}
          onChange={handleChange}
          className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded text-white focus:outline-none focus:border-red-600"
          required
        />
      </div>

      <div>
        <label htmlFor="details" className="block text-white mb-2">Service Details</label>
        <textarea
          id="details"
          name="details"
          value={formData.details}
          onChange={handleChange}
          rows="4"
          className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded text-white focus:outline-none focus:border-red-600"
          placeholder="Please describe your security or investigation needs..."
          required
        ></textarea>
      </div>

      <Button type="submit" variant="primary" size="lg" className="w-full">
        Request Quote
      </Button>
    </form>
  );
};

export default QuoteForm;