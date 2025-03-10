import React from 'react';
import shlokImage from '../assets/images/shlok-image.jpeg';

const MissionSection = () => {
  return (
    <div className="relative w-full min-h-[600px] overflow-hidden group">
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
      <div className="relative h-full w-full max-w-6xl mx-auto px-6 py-20 flex items-center">
        <div className="w-full md:w-2/3 lg:w-1/2">
          {/* Red decorative line */}
          <div className="w-20 h-1 bg-red-600 mb-8 transform origin-left transition-transform duration-500 group-hover:scale-x-150" />
          
          {/* Title with sliding animation */}
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 transform transition-all duration-500 group-hover:translate-x-2">
            About Us
          </h2>
          
          {/* Mission text with fade-in effect */}
          <div className="space-y-6 text-gray-200">
            <p className="text-lg leading-relaxed opacity-90 transform transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-2">
                Here at SHLOK SECURITY AND INVESTIGATIVE SERVICES INC. we provide quality Private
              Security and Investigative Services throughout Ontario, Canada. We provide extensive
              training to our employees and keep them up to date with the latest provincial and federal
              laws and regulations. So, that our clients can be in peace of mind. For, us client’s safety and
              satisfaction is the foremost thing for which we are always available 24/7.
            </p>
            
            <p className="text-lg leading-relaxed opacity-90 transform transition-all duration-500 delay-100 group-hover:opacity-100 group-hover:translate-x-2">
            We also provide a range of services on call and in case of an emergency. So, please feel free
            to contact us anytime.
            </p>
          </div>
          
          {/* Decorative element */}
          <div className="mt-12 w-full h-px bg-gradient-to-r from-red-600/50 to-transparent transform transition-all duration-500 group-hover:scale-x-110" />
        </div>
      </div>
    </div>
  );
};

export default MissionSection;