import React from 'react';
import { locationData } from '../data';
import { CardOverlay } from './CardOverlay';
import { MapPin, Navigation } from 'lucide-react';

export const Location: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-green pt-28 px-4 pb-20 relative overflow-hidden flex flex-col">
      {/* Background effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-green-light/40 via-brand-green to-brand-green pointer-events-none"></div>

      <div className="relative z-10 w-full max-w-6xl mx-auto space-y-12 flex-grow flex flex-col items-center">
        <h2 className="text-4xl md:text-5xl font-sans font-semibold text-gold tracking-widest uppercase text-shadow-lg text-center">
          Find Your Game Zone
        </h2>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 px-4 lg:px-8 mt-8">
          
          {/* Address Card */}
          <div className="gold-border-card p-6 md:p-8 flex flex-col rounded-xl">
            <CardOverlay />
            <div className="flex items-center justify-center gap-3 mb-8 border-b border-brand-gold-dark/30 pb-4">
              <MapPin className="text-gray-400 w-6 h-6" />
              <h3 className="text-2xl font-sans tracking-widest text-gold uppercase font-semibold text-center">
                Our Location
              </h3>
              <MapPin className="text-gray-400 w-6 h-6 opacity-0" /> {/* Balancer */}
            </div>
            
            <div className="flex-grow flex flex-col items-center justify-center text-center space-y-2 mb-8">
              {locationData.addressLines.map((line, idx) => (
                <p key={idx} className="text-white font-sans text-xl leading-relaxed tracking-wide">
                  {line}
                </p>
              ))}
            </div>

            <div className="w-full flex justify-center mt-auto border-t border-brand-gold-dark/30 pt-6">
              <button className="text-gray-400 text-sm font-sans tracking-widest hover:text-gold uppercase transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-gray-400 hover:after:bg-gold after:transition-colors pb-1">
                View Detailed Map
              </button>
            </div>
          </div>

          {/* Map View Card */}
          <div className="gold-border-card p-6 md:p-4 flex flex-col rounded-xl">
            <CardOverlay />
            <div className="flex items-center justify-center gap-3 mb-4 mt-2">
              <h3 className="text-2xl font-sans tracking-widest text-gold uppercase font-semibold text-center">
                Map View
              </h3>
            </div>
            <div className="w-full flex-grow relative rounded overflow-hidden min-h-[300px]">
               <div className="absolute inset-0 bg-brand-green/30 z-10 mix-blend-multiply"></div>
               {/* Map glow effect */}
               <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,255,255,0.1),_transparent_60%)] z-20 pointer-events-none"></div>
               <img 
                 src={locationData.mapImage} 
                 alt="Map"
                 className="w-full h-full object-cover absolute inset-0"
               />
               <div className="absolute inset-0 z-30 flex items-center justify-center">
                  <div className="bg-brand-green-light/80 p-3 rounded-full border border-teal-500 shadow-[0_0_15px_#0ff]">
                    <Navigation className="w-8 h-8 text-teal-400" />
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer text */}
      <div className="relative z-10 w-full mt-auto pt-10 text-center border-t border-brand-green-light mt-12 pb-4 flex flex-col sm:flex-row justify-between items-center max-w-6xl mx-auto px-4 text-gray-500 text-sm font-sans">
        <p>CGZ GAMEZONE & SNOOKER | © All Rights Reserved</p>
        <div className="flex gap-4 mt-4 sm:mt-0">
          <span className="w-6 h-6 rounded-full border border-gray-600 flex items-center justify-center cursor-pointer hover:border-gold hover:text-gold transition-colors">f</span>
          <span className="w-6 h-6 rounded-full border border-gray-600 flex items-center justify-center cursor-pointer hover:border-gold hover:text-gold transition-colors">i</span>
          <span className="w-6 h-6 rounded-full border border-gray-600 flex items-center justify-center cursor-pointer hover:border-gold hover:text-gold transition-colors">y</span>
        </div>
      </div>
    </div>
  );
};
