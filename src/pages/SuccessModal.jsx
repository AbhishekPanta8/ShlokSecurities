import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const SuccessModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70">
      <div 
        className="bg-gray-900 rounded-lg p-8 max-w-md w-full transform transition-all"
      >
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <CheckCircle2 className="w-16 h-16 text-red-600" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-4">
            Thank You!
          </h2>
          <p className="text-gray-300 mb-6">
            We appreciate your interest in our services. Our team will review your request and contact you shortly.
          </p>
          <button
            onClick={onClose}
            className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors duration-200 w-full sm:w-auto"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;