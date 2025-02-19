import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ServiceBox = ({ title, description, images, path }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <Link 
      to={path}
      className="group relative block aspect-video sm:aspect-[16/10] lg:aspect-[16/9] overflow-hidden rounded-lg shadow-xl transition-transform duration-300 hover:scale-105"
    >
      <img
        src={images[currentImageIndex]}
        alt={title}
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 lg:p-8">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2 sm:mb-3 group-hover:text-red-400 transition-colors">
            {title}
          </h3>
          <p className="text-gray-200 text-sm sm:text-base lg:text-lg mb-3 sm:mb-4 leading-relaxed line-clamp-2 sm:line-clamp-3">
            {description}
          </p>
          <span className="inline-block bg-red-600 text-white px-4 py-2 text-sm sm:text-base rounded group-hover:bg-red-700 transition-colors duration-200">
            Learn More
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ServiceBox;