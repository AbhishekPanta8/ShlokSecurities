import React from 'react';
import shlokImage from '../assets/images/shlok-image.jpeg';

const MissionSection = () => {
  return (
    <section className="relative w-full h-screen max-h-[800px] min-h-[500px] overflow-hidden group">
      {/* Background Image Container - using picture element for better responsiveness */}
      <div className="absolute inset-0 w-full h-full">
        <picture>
          <source srcSet={shlokImage} media="(min-width: 768px)" />
          <source srcSet={shlokImage} media="(min-width: 0px)" />
          <img
            src={shlokImage}
            alt="Shlok Security Background"
            className="w-full h-full object-cover"
            loading="eager"
            // This ensures image is never cropped regardless of aspect ratio
            style={{
              objectPosition: "center",
              objectFit: "cover",
              width: "100%",
              height: "100%"
            }}
          />
        </picture>
        
        {/* Gradient Overlay - consistent across all breakpoints */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-black/70 group-hover:from-black/85 group-hover:to-black/65 transition-all duration-500" />
      </div>

      {/* Content Container - with viewport-responsive sizing */}
      <div className="relative flex items-center justify-start w-full h-full">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="w-full md:w-2/3 lg:w-1/2 p-4 sm:p-6 bg-black/20 backdrop-blur-sm rounded-lg">
            {/* Red Decorative Line */}
            <div className="w-20 h-1 bg-red-600 mb-4 sm:mb-6 transform origin-left transition-transform duration-500 group-hover:scale-x-150" />
            
            {/* Title */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6 transform transition-all duration-500 group-hover:translate-x-2">
              About Us
            </h2>
            
            {/* Mission Text */}
            <div className="space-y-3 sm:space-y-4 text-gray-200">
              <p className="text-sm sm:text-base leading-relaxed opacity-90 transform transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-2">
                At <strong>Shlok Security and Investigation Services Inc.</strong>, we are a premier security company in <strong>Windsor, Ontario</strong>. Our team of <strong>licensed professionals</strong> provides top-tier security and investigative services across Ontario.
              </p>
              
              <p className="text-sm sm:text-base leading-relaxed opacity-90 transform transition-all duration-500 delay-100 group-hover:opacity-100 group-hover:translate-x-2">
                We ensure your safety 24/7 through comprehensive training, proactive risk management, and expert emergency response.
              </p>
              
              <p className="text-sm sm:text-base leading-relaxed opacity-90 transform transition-all duration-500 delay-200 group-hover:opacity-100 group-hover:translate-x-2">
                From corporate security to discreet investigations, our services are designed to provide peace of mind.
              </p>
            </div>
            
            {/* Decorative Element */}
            <div className="mt-6 sm:mt-8 w-full h-px bg-gradient-to-r from-red-600/50 to-transparent transform transition-all duration-500 group-hover:scale-x-110" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;