import React, { useState } from 'react';
import SuccessModal from './SuccessModal'; // Import the success modal component

const Contact = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    // Show success modal
    setIsModalOpen(true);
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-red-600 mb-4">Contact Us</h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Available 24/7 for your security and investigation needs. 
          Reach out to us through any of the following methods.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-red-600 mb-4">Get in Touch</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                <a 
                  href="tel:+16478623601" 
                  className="text-gray-300 hover:text-red-600 transition-colors duration-200"
                >
                  +1 647-862-3601
                </a>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                <a 
                  href="mailto:shlokraval99@gmail.com" 
                  className="text-gray-300 hover:text-red-600 transition-colors duration-200"
                >
                  shlokraval99@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-red-600 mb-4">Follow Us</h2>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-red-600 transition-colors duration-200">
                <span className="sr-only">Facebook</span>
                <i className="fab fa-facebook text-2xl"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-red-600 transition-colors duration-200">
                <span className="sr-only">Instagram</span>
                <i className="fab fa-instagram text-2xl"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-red-600 transition-colors duration-200">
                <span className="sr-only">LinkedIn</span>
                <i className="fab fa-linkedin text-2xl"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-red-600 transition-colors duration-200">
                <span className="sr-only">TikTok</span>
                <i className="fab fa-tiktok text-2xl"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-gray-900 p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-red-600 mb-6">Send us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-white mb-2">Name</label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded text-white focus:outline-none focus:border-red-600"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-white mb-2">Email</label>
              <input
                type="email"
                id="email"
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
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded text-white focus:outline-none focus:border-red-600"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-white mb-2">Message</label>
              <textarea
                id="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded text-white focus:outline-none focus:border-red-600"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-red-600 text-white px-6 py-3 rounded hover:bg-red-700 transition-colors duration-200"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Success Modal */}
      <SuccessModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
};

export default Contact;