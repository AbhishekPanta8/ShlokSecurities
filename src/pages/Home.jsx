import React from 'react';
import { Link } from 'react-router-dom';
import ServiceBox from '../components/common/ServiceBox';
import sholkImage from "../assets/images/shlok-image.jpeg";
import image2 from "../assets/images/image2.avif";
import image3 from "../assets/images/image3.jpg";
import About from './About';

const Home = () => {
  const services = [
    {
      title: 'Security Services',
      path: '/services/security',
      description: '24/7 professional security services including event security, mobile patrol, and more.',
      images: [sholkImage, image2, image3]
    },
    {
      title: 'Investigation Services',
      path: '/services/investigation',
      description: 'Comprehensive investigation services including background checks, surveillance, and more.',
      images: [image3, sholkImage, image2]
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-red-600 mb-3">
          Professional Security & Investigation Services
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Providing quality Private Security and Investigative Services throughout Ontario, Canada.
          Available 24/7 for your peace of mind.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {services.map((service) => (
          <ServiceBox
            key={service.title}
            title={service.title}
            description={service.description}
            images={service.images}
            path={service.path}
          />
        ))}
      </div>

      <div className="mt-10 text-center">
        <Link
          to="/quick-quote"
          className="inline-flex items-center bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-all duration-200 shadow-md hover:shadow-lg"
        >
          Get a Quick Quote
        </Link>
      </div>
      <About/>
    </div>
  );
};

export default Home;