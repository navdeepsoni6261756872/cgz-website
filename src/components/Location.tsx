import React from 'react';
import { locationData } from '../data';
import { CardOverlay } from './CardOverlay';
import { MapPin } from 'lucide-react';

export const Location: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-green-bg bg-brick-pattern relative overflow-hidden flex flex-col">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1510]/80 via-[#0a1510]/60 to-[#0a1510] pointer-events-none z-0"></div>

      <div className="relative z-10 w-full max-w-5xl mx-auto pt-28 px-4 flex-grow flex flex-col items-center">
        <h2 className="text-3xl md:text-[2.2rem] font-serif text-gold tracking-widest uppercase mt-4 mb-10 text-shadow-md">
          Find Your Game Zone
        </h2>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10 px-2 lg:px-8 mt-4 mb-20">
          
          {/* Address Card */}
          <div className="gold-border-card p-6 md:p-8 flex flex-col items-center border-[#baa057] bg-[#0d1f16]">
            <CardOverlay />
            <div className="flex items-center justify-center gap-3 w-full border-b border-[#baa057]/30 pb-4 mb-6">
              <MapPin className="text-[#888] w-5 h-5" />
              <h3 className="text-xl font-sans tracking-widest text-[#e2c275] uppercase font-bold text-center">
                OUR LOCATION
              </h3>
              <MapPin className="text-[#888] w-5 h-5" />
            </div>
            
            <div className="flex-grow flex flex-col items-center justify-center text-center space-y-1 mb-6">
              {locationData.addressLines.map((line, idx) => (
                <p key={idx} className="text-[#fff] font-sans text-[1.1rem] leading-[1.6] tracking-wide">
                  {line}
                </p>
              ))}
            </div>

            <div className="mt-auto pt-2">
              <button className="text-[#999] text-xs font-sans tracking-[0.15em] border-b border-[#999] hover:text-gold hover:border-gold uppercase transition-colors pb-0.5">
                VIEW DETAILED MAP
              </button>
            </div>
          </div>

          {/* Map View Card */}
          <div className="gold-border-card p-3 md:p-4 flex flex-col border-[#baa057] bg-[#0d1f16]">
            <CardOverlay />
            <div className="flex items-center justify-center w-full border-b border-[#baa057]/30 pb-3 mb-3 pt-2">
              <h3 className="text-xl font-sans tracking-widest text-[#e2c275] uppercase font-bold text-center">
                MAP VIEW
              </h3>
            </div>
            <div className="w-full flex-grow relative rounded border border-[#333] overflow-hidden min-h-[250px] bg-black/50">
               <div className="absolute inset-0 bg-[#163625]/20 mix-blend-color z-10 pointer-events-none"></div>
               <img 
                 src={locationData.mapImage} 
                 alt="Map"
                 className="w-full h-full object-cover absolute inset-0 opacity-80"
               />
               <div className="absolute inset-0 z-20 flex items-center justify-center">
                  <div className="bg-[#000]/80 p-2 rounded-full border-2 border-cyan-400 shadow-[0_0_15px_#0ff]">
                    <MapPin className="w-8 h-8 text-cyan-400 fill-cyan-400/20" />
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* 3D Shelf at bottom */}
      <div className="relative z-10 w-full h-[30px] bg-shelf-gradient mt-auto shadow-2xl overflow-visible">
        {/* Chips detail on shelf */}
        <div className="absolute top-[-25px] left-1/2 transform translate-x-[40px] flex gap-1 z-20 drop-shadow-2xl">
           <div className="w-12 h-12 rounded-full border-[3px] border-[#3a5a4a] bg-[#163625] flex items-center justify-center shadow-lg transform rotate-12 relative overflow-hidden">
             <div className="text-gold font-display text-xs">CGZ</div>
             <div className="absolute inset-0 border-[2px] border-dashed border-[#3a5a4a] rounded-full m-1"></div>
           </div>
           <div className="w-12 h-12 rounded-full border-[3px] border-[#3a5a4a] bg-[#163625] flex items-center justify-center shadow-lg transform -rotate-6 absolute left-[30px] top-[5px] overflow-hidden">
             <div className="text-gold font-display text-xs">CGZ</div>
             <div className="absolute inset-0 border-[2px] border-dashed border-[#3a5a4a] rounded-full m-1"></div>
           </div>
        </div>
      </div>

      {/* Footer text */}
      <div className="relative z-10 w-full bg-[#0a1f15] py-4 flex justify-between items-center px-8 text-[#666] text-xs font-sans border-t border-[#1b3d2b] shadow-inner">
        <p>CGZ GAMEZONE & SNOOKER | © All Rights Reserved</p>
        <div className="flex gap-4">
          <span className="w-6 h-6 rounded-full border border-[#555] flex items-center justify-center cursor-pointer hover:border-gold hover:text-gold transition-colors font-bold pb-0.5">f</span>
          <span className="w-6 h-6 rounded-full border border-[#555] flex items-center justify-center cursor-pointer hover:border-gold hover:text-gold transition-colors font-bold">i</span>
          <span className="w-6 h-6 rounded-full border border-[#555] flex items-center justify-center cursor-pointer hover:border-gold hover:text-gold transition-colors font-bold pb-0.5">y</span>
        </div>
      </div>
    </div>
  );
};
