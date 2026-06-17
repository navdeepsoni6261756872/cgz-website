import React from 'react';
import { CardOverlay } from './CardOverlay';

export const Home: React.FC = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-4 overflow-hidden bg-brand-green">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover opacity-60"
        >
          <source 
            src="https://res.cloudinary.com/dxz2hxiw0/video/upload/v1781681094/From_Klickpin.com-_Try_these_clever_bathroom_shelf_ideas_that_bring_style_function_and_personality_together_with_aesthetic_touches_that_photograph_ablkn4.mp4" 
            type="video/mp4" 
          />
        </video>
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-green/80 via-brand-green/60 to-brand-green/90"></div>
      </div>

      <div className="relative z-10 w-full max-w-5xl text-center space-y-4 mb-12">
        <h1 className="text-7xl md:text-9xl font-display font-bold text-neon-cgz tracking-wider">
          CGZ
        </h1>
        <h2 className="text-3xl md:text-5xl font-display font-bold text-neon-subtitle tracking-widest mt-2 uppercase">
          Gamezone & Snooker
        </h2>
        <p className="text-gold text-lg md:text-2xl font-sans tracking-wide mt-6 uppercase">
          Your Urban Arcade & Snooker Destination.
        </p>
      </div>

      <div className="relative z-10 w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 pb-20">
        {/* Snooker Card */}
        <div className="gold-border-card p-6 flex flex-col gap-6">
          <CardOverlay />
          <div className="flex flex-col sm:flex-row gap-6 items-center flex-grow">
            <div className="w-full sm:w-1/2 aspect-[4/3] rounded overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1595155554160-c30da955efcf?auto=format&fit=crop&q=80" 
                alt="Snooker Table" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full sm:w-1/2 text-center sm:text-left space-y-3">
              <h3 className="text-white font-sans text-xl md:text-2xl tracking-widest uppercase leading-tight">
                Book Your<br/>Snooker<br/>Table Now
              </h3>
              <div className="text-gold pt-2">
                <span className="text-4xl md:text-5xl font-bold font-sans">₹150</span>
                <span className="text-base font-sans lowercase">rs</span>
              </div>
              <p className="text-gold font-sans uppercase tracking-widest text-sm">
                Per Hour
              </p>
            </div>
          </div>
          <div className="w-full flex justify-center mt-2">
            <button className="bg-brand-green text-gold border border-brand-gold-dark px-12 py-3 rounded-md font-sans uppercase tracking-widest text-sm hover:bg-brand-green-light transition-colors w-full sm:w-auto shadow-[0_0_10px_rgba(212,175,55,0.2)] hover:shadow-[0_0_15px_rgba(212,175,55,0.4)]">
              Book Snooker
            </button>
          </div>
        </div>

        {/* Ping Pong Card */}
        <div className="gold-border-card p-6 flex flex-col gap-6">
          <CardOverlay />
          <div className="flex flex-col sm:flex-row gap-6 items-center flex-grow">
             <div className="w-full sm:w-1/2 text-center sm:text-left space-y-3 order-2 sm:order-1">
              <h3 className="text-white font-sans text-xl md:text-2xl tracking-widest uppercase leading-tight">
                Book<br/>Ping Pong<br/>Table
              </h3>
              <div className="text-gold pt-2">
                <span className="text-4xl md:text-5xl font-bold font-sans">₹150</span>
                <span className="text-base font-sans lowercase">rs</span>
              </div>
              <p className="text-gold font-sans uppercase tracking-widest text-sm">
                Per Hour
              </p>
            </div>
            <div className="w-full sm:w-1/2 aspect-[4/3] rounded overflow-hidden order-1 sm:order-2">
              <img 
                src="https://images.unsplash.com/photo-1534158914592-062992fbe900?auto=format&fit=crop&q=80" 
                alt="Ping Pong Table" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="w-full flex justify-center mt-2">
            <button className="bg-brand-green text-gold border border-brand-gold-dark px-12 py-3 rounded-md font-sans uppercase tracking-widest text-sm hover:bg-brand-green-light transition-colors w-full sm:w-auto shadow-[0_0_10px_rgba(212,175,55,0.2)] hover:shadow-[0_0_15px_rgba(212,175,55,0.4)]">
              Book Ping Pong
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
