import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Home } from './components/Home';
import { Games } from './components/Games';
import { Location } from './components/Location';

export default function App() {
  const [currentView, setCurrentView] = useState('home');

  const renderView = () => {
    switch (currentView) {
      case 'home':
      case 'bookings':
        return <Home />;
      case 'games':
        return <Games />;
      case 'location':
        return <Location />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="bg-brand-green-bg min-h-screen text-white font-sans selection:bg-brand-gold selection:text-brand-green">
      <Navbar currentView={currentView} onChangeView={setCurrentView} />
      
      <main>
        {renderView()}
      </main>
      
      {/* Universal Footer styling matching the screenshots perfectly */}
      {currentView !== 'location' && (
        <div className="fixed bottom-0 w-full bg-[#0a1f15] py-4 flex justify-between items-center px-8 text-[#666] text-xs font-sans border-t border-[#1b3d2b] shadow-inner z-50">
          <p>CGZ GAMEZONE & SNOOKER | © All Rights Reserved</p>
          <div className="flex gap-4">
            <span className="w-6 h-6 rounded-full border border-[#555] flex items-center justify-center cursor-pointer hover:border-gold hover:text-gold transition-colors font-bold pb-0.5">f</span>
            <span className="w-6 h-6 rounded-full border border-[#555] flex items-center justify-center cursor-pointer hover:border-gold hover:text-gold transition-colors font-bold">i</span>
            <span className="w-6 h-6 rounded-full border border-[#555] flex items-center justify-center cursor-pointer hover:border-gold hover:text-gold transition-colors font-bold pb-0.5">y</span>
          </div>
        </div>
      )}
    </div>
  );
}
