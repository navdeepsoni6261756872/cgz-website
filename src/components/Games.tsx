import React from 'react';
import { games } from '../data';
import { CardOverlay } from './CardOverlay';

export const Games: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-green-bg bg-brick-pattern pt-28 px-4 pb-20 relative overflow-hidden">
      {/* Background Gradient to blend with brick */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1510]/80 via-[#0a1510]/60 to-[#0a1510]/90 pointer-events-none"></div>

      <div className="relative z-10 w-full max-w-5xl mx-auto space-y-12 text-center">
        <h2 className="text-3xl md:text-[2.5rem] font-serif text-gold tracking-widest uppercase mt-4 mb-10 text-shadow-md">
          Available Games
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10 px-2 lg:px-8">
          {games.map((game) => (
            <div key={game.id} className="gold-border-card p-4 pb-3 flex flex-col items-center bg-[#0d1f16] border-[#baa057]">
               <CardOverlay />
               <div className="w-full aspect-[4/3] rounded border border-gray-800 p-1 bg-black/60 overflow-hidden mb-3">
                  <img 
                    src={game.image} 
                    alt={game.title}
                    className="w-full h-full object-cover rounded-sm"
                  />
               </div>
               <div className="w-full border-t border-[#baa057]/40 pt-2 pb-1">
                 <h3 className="text-[1.1rem] font-sans text-[#e6e6e6] tracking-wide">
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
