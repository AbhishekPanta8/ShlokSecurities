import React, { useState } from 'react';
import { MapPin, Phone, Clock, Building } from 'lucide-react';

const Locations = () => {
  const [activeLocation, setActiveLocation] = useState(null);

  const locations = [
    {
      id: 1,
      city: 'Windsor',
      region: 'Downtown',
      phone: '+1 647-862-3601',
      hours: 'Open 24/7',
      services: ['Security', 'Investigation', 'Patrol','Monitoring', 'Events']
    },
    {
      id: 2,
      city: 'Tecumseh',
      region: 'Town Centre',
      phone: '+1 647-862-3601',
      hours: 'Open 24/7',
      services: ['Security', 'Investigation', 'Patrol','Monitoring', 'Events']
    },
    {
      id: 3,
      city: 'LaSalle',
      region: 'Heritage District',
      phone: '+1 647-862-3601',
      hours: 'Open 24/7',
      services: ['Security', 'Investigation', 'Monitoring','Patrol', 'Events']
    },
    {
      id: 4,
      city: 'Leamington',
      region: 'Waterfront',
      phone: '+1 647-862-3601',
      hours: 'Open 24/7',
      services: ['Security', 'Investigation','Monitoring', 'Patrol', 'Events']
    },
    {
      id: 5,
      city: 'Amherstburg',
      region: 'Historic Core',
      phone: '+1 647-862-3601',
      hours: 'Open 24/7',
      services: ['Security', 'Investigation', 'Monitoring','Patrol', 'Events']
    }
  ];

  return (
    <div id="locations" className="relative bg-black py-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-900/10 via-black to-black" />
      
      <div className="relative container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Our Locations</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Strategically located across the Windsor-Essex area to serve you better with 24/7 security and investigation services.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-red-800 mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {locations.map((location) => (
            <div
              key={location.id}
              className="group relative"
              onMouseEnter={() => setActiveLocation(location.id)}
              onMouseLeave={() => setActiveLocation(null)}
            >
              <div className={`
                h-full p-6 rounded-xl border transition-all duration-500 ease-in-out
                ${activeLocation === location.id 
                  ? 'border-red-600 bg-gradient-to-b from-gray-900 to-black transform -translate-y-1' 
                  : 'border-gray-800 hover:border-red-600/50 bg-gradient-to-b from-black to-gray-900'}
              `}>
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">{location.city}</h3>
                    <p className="text-red-600 text-sm">{location.region}</p>
                  </div>
                  <MapPin className={`w-6 h-6 transition-colors duration-300 ${
                    activeLocation === location.id ? 'text-red-600' : 'text-gray-600'
                  }`} />
                </div>

                {/* Details */}
                <div className="space-y-4">
                  {/* <div className="flex items-start space-x-3">
                    <Building className="w-5 h-5 text-gray-500 mt-1" />
                    <p className="text-gray-300 text-sm">{location.address}</p>
                  </div> */}
                  
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-gray-500" />
                    <p className="text-gray-300 text-sm">{location.phone}</p>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-gray-500" />
                    <p className="text-gray-300 text-sm">{location.hours}</p>
                  </div>

                  {/* Services */}
                  <div className="pt-4 border-t border-gray-800">
                    <div className="flex flex-wrap gap-2">
                      {location.services.map((service, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 text-xs rounded-full bg-red-600/10 text-red-600 border border-red-600/20"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Locations;