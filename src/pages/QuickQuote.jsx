import React, { useState } from 'react';

const QuickQuote = () => {
  const [serviceType, setServiceType] = useState('security');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-red-600 mb-4">Get a Quick Quote</h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Fill out the form below and we'll get back to you with a customized quote for your security or investigation needs.
        </p>
      </div>

      <div className="max-w-2xl mx-auto">
        <div className="bg-gray-900 p-8 rounded-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-white mb-4">Service Type</label>
              <div className="grid grid-cols-2 gap-4">
                <button
                  type="button"
                  className={`p-4 rounded text-center ${
                    serviceType === 'security'
                      ? 'bg-red-600 text-white'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                  onClick={() => setServiceType('security')}
                >
                  Security Services
                </button>
                <button
                  type="button"
                  className={`p-4 rounded text-center ${
                    serviceType === 'investigation'
                      ? 'bg-red-600 text-white'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                  onClick={() => setServiceType('investigation')}
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
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded text-white focus:outline-none focus:border-red-600"
                  required
                />
              </div>
              <div>
                <label htmlFor="company" className="block text-white mb-2">Company (optional)</label>
                <input
                  type="text"
                  id="company"
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
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded text-white focus:outline-none focus:border-red-600"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-white mb-2">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded text-white focus:outline-none focus:border-red-600"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="service-details" className="block text-white mb-2">Service Details</label>
              <textarea
                id="service-details"
                rows="4"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded text-white focus:outline-none focus:border-red-600"
                placeholder="Please describe your security or investigation needs..."
                required
              ></textarea>
            </div>

            <div>
              <label htmlFor="location" className="block text-white mb-2">Location</label>
              <input
                type="text"
                id="location"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded text-white focus:outline-none focus:border-red-600"
                placeholder="Service location address"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-red-600 text-white px-6 py-3 rounded hover:bg-red-700 transition-colors duration-200"
            >
              Request Quote
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default QuickQuote;