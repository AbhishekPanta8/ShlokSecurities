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
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-red-600 mb-4 sm:mb-6">
            Professional Security & Investigation Services
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4 sm:px-6">
            Providing quality Private Security and Investigative Services throughout Ontario, Canada.
            Available 24/7 for your peace of mind.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 max-w-6xl mx-auto">
          {services.map((service) => (
            <div key={service.title} className="w-full h-full">
              <ServiceBox
                title={service.title}
                description={service.description}
                images={service.images}
                path={service.path}
              />
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-10 sm:mt-16 text-center">
          <Link
            to="/quick-quote"
            className="inline-flex items-center justify-center bg-red-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-red-700 transition-all duration-200 shadow-md hover:shadow-lg text-base sm:text-lg font-medium focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
          >
            Get a Quick Quote
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="w-full">
        <About />
      </section>
    </main>
  );
};

export default Home;

// Additional CSS classes to add to your global styles or Tailwind config
const additionalStyles = `
  @layer utilities {
    .text-balance {
      text-wrap: balance;
    }
  }
`;