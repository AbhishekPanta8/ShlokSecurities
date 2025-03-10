import React from 'react';
import shlokImage from '../assets/images/shlok-image.jpeg';

const MissionSection = () => {
  return (
    <div className="relative w-full min-h-[500px] overflow-hidden group">
      {/* Background Image Container */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `url(${shlokImage})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-black/70 group-hover:from-black/85 group-hover:to-black/65 transition-all duration-500" />
      </div>

      {/* Content Container */}
      <div className="relative h-full w-full max-w-6xl mx-auto px-6 py-16 flex items-center">
        <div className="w-full md:w-2/3 lg:w-1/2">
          {/* Red Decorative Line */}
          <div className="w-20 h-1 bg-red-600 mb-6 transform origin-left transition-transform duration-500 group-hover:scale-x-150" />
          
          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 transform transition-all duration-500 group-hover:translate-x-2">
            About Us
          </h2>
          
          {/* Mission Text */}
          <div className="space-y-4 text-gray-200">
            <p className="text-base leading-relaxed opacity-90 transform transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-2">
              At <strong>Shlok Security and Investigation Services Inc.</strong>, we are a premier security company in <strong>Windsor, Ontario</strong>. Our team of <strong>licensed professionals</strong> provides top-tier security and investigative services across Ontario.
            </p>
            
            <p className="text-base leading-relaxed opacity-90 transform transition-all duration-500 delay-100 group-hover:opacity-100 group-hover:translate-x-2">
              We ensure your safety 24/7 through comprehensive training, proactive risk management, and expert emergency response.
            </p>
            
            <p className="text-base leading-relaxed opacity-90 transform transition-all duration-500 delay-200 group-hover:opacity-100 group-hover:translate-x-2">
              From corporate security to discreet investigations, our services are designed to provide peace of mind.
            </p>
          </div>
          
          {/* Decorative Element */}
          <div className="mt-8 w-full h-px bg-gradient-to-r from-red-600/50 to-transparent transform transition-all duration-500 group-hover:scale-x-110" />
        </div>
      </div>
    </div>
  );
};

export default MissionSection;
