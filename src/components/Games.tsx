import React from 'react';
import { games } from '../data';
import { CardOverlay } from './CardOverlay';

export const Games: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-green pt-28 px-4 pb-20 relative overflow-hidden">
      {/* Brick Wall/Grunge background effect (simulated with radial gradient) */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-green-light/40 via-brand-green to-brand-green pointer-events-none"></div>

      <div className="relative z-10 w-full max-w-6xl mx-auto space-y-12 text-center">
        <h2 className="text-4xl md:text-5xl font-sans font-semibold text-gold tracking-widest uppercase text-shadow-lg">
          Available Games
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 lg:px-8">
          {games.map((game) => (
            <div key={game.id} className="gold-border-card p-4 flex flex-col items-center group transition-transform hover:-translate-y-1 duration-300">
               <CardOverlay />
               <div className="w-full aspect-[4/3] rounded overflow-hidden mb-4 relative">
                  <div className="absolute inset-0 bg-brand-green/20 group-hover:bg-transparent transition-colors duration-300 z-10"></div>
                  <img 
                    src={game.image} 
                    alt={game.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
               </div>
               <div className="w-full border-t border-brand-gold-dark/30 pt-3 pb-1">
                 <h3 className="text-xl font-sans text-gray-200 tracking-wide">
                   {game.title}
                 </h3>
               </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
