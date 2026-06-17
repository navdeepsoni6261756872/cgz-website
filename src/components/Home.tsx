import React from 'react';
import { CardOverlay } from './CardOverlay';

export const Home: React.FC = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center pt-24 px-4 overflow-hidden bg-brand-green-bg bg-brick-pattern">
      {/* Background Video */}
      <div className="absolute inset-0 z-0 mix-blend-screen opacity-40">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover"
        >
          <source 
            src="https://res.cloudinary.com/dxz2hxiw0/video/upload/v1781681094/From_Klickpin.com-_Try_these_clever_bathroom_shelf_ideas_that_bring_style_function_and_personality_together_with_aesthetic_touches_that_photograph_ablkn4.mp4" 
            type="video/mp4" 
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-brand-green-bg/90 via-brand-green-bg/70 to-brand-green-bg"></div>
      </div>

      <div className="relative z-10 w-full max-w-5xl text-center flex flex-col items-center justify-center mb-10">
        <h1 className="text-8xl md:text-9xl font-display text-neon-cyan tracking-[0.1em] mb-2">
          CGZ
        </h1>
        <h2 className="text-3xl md:text-5xl font-display text-neon-red tracking-[0.2em] uppercase mt-2">
          GAMEZONE & SNOOKER
        </h2>
        <p className="text-gold text-lg md:text-2xl font-serif tracking-[0.15em] mt-8 uppercase font-medium">
          Your Urban Arcade & Snooker Destination.
        </p>
      </div>

      <div className="relative z-10 w-full max-w-[1000px] grid grid-cols-1 md:grid-cols-2 gap-8 px-4 pb-20 mt-4">
        {/* Snooker Card */}
        <div className="gold-border-card px-5 py-6 flex flex-col">
          <CardOverlay />
          <div className="flex gap-4">
            <div className="w-1/2 aspect-[4/3] rounded border border-gray-800 p-1 bg-black/50">
              <img 
                src="https://images.unsplash.com/photo-1595155554160-c30da955efcf?auto=format&fit=crop&q=80" 
                alt="Snooker Table" 
                className="w-full h-full object-cover rounded-sm"
              />
            </div>
            <div className="w-1/2 flex flex-col justify-center">
              <h3 className="text-white font-sans text-lg tracking-widest uppercase leading-snug">
                BOOK YOUR<br/>SNOOKER<br/>TABLE NOW
              </h3>
              <div className="text-gold mt-3">
                <span className="text-4xl font-bold font-sans tracking-tighter">₹150</span>
                <span className="text-base font-sans lowercase ml-1">rs</span>
              </div>
              <p className="text-gold font-sans uppercase tracking-[0.2em] text-xs mt-1">
                PER HOUR
              </p>
            </div>
          </div>
          <div className="w-full flex justify-center mt-5">
            <button className="bg-[#0b1f15] hover:bg-[#123323] text-gold border border-brand-gold-dark/70 rounded px-10 py-2.5 font-sans uppercase tracking-widest text-sm transition-all w-[90%] shadow-[0_0_10px_rgba(0,0,0,0.5)]">
              BOOK SNOOKER
            </button>
          </div>
        </div>

        {/* Ping Pong Card */}
        <div className="gold-border-card px-5 py-6 flex flex-col">
          <CardOverlay />
          <div className="flex gap-4">
            <div className="w-1/2 flex flex-col justify-center pl-2">
              <h3 className="text-white font-sans text-lg tracking-widest uppercase leading-snug">
                BOOK<br/>PING PONG<br/>TABLE
              </h3>
              <div className="text-gold mt-3">
                <span className="text-4xl font-bold font-sans tracking-tighter">₹150</span>
                <span className="text-base font-sans lowercase ml-1">rs</span>
              </div>
              <p className="text-gold font-sans uppercase tracking-[0.2em] text-xs mt-1">
                PER HOUR
              </p>
            </div>
            <div className="w-1/2 aspect-[4/3] rounded border border-gray-800 p-1 bg-black/50">
              <img 
                src="https://images.unsplash.com/photo-1534158914592-062992fbe900?auto=format&fit=crop&q=80" 
                alt="Ping Pong Table" 
                className="w-full h-full object-cover rounded-sm"
              />
            </div>
          </div>
          <div className="w-full flex justify-center mt-5">
            <button className="bg-[#0b1f15] hover:bg-[#123323] text-gold border border-brand-gold-dark/70 rounded px-10 py-2.5 font-sans uppercase tracking-widest text-sm transition-all w-[90%] shadow-[0_0_10px_rgba(0,0,0,0.5)]">
              BOOK PING PONG
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
