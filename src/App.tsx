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
    <div className="bg-brand-green min-h-screen text-white font-sans selection:bg-brand-gold selection:text-brand-green">
      <Navbar currentView={currentView} onChangeView={setCurrentView} />
      
      <main>
        {renderView()}
      </main>
      
      {/* Footer for non-location pages (since location has its own sticky footer) */}
      {currentView !== 'location' && (
        <footer className="w-full bg-brand-green border-t border-brand-green-light py-6 flex flex-col sm:flex-row justify-between items-center max-w-6xl mx-auto px-4 text-gray-500 text-sm font-sans z-50 relative">
          <p>CGZ GAMEZONE & SNOOKER | © All Rights Reserved</p>
          <div className="flex gap-4 mt-4 sm:mt-0">
            <span className="w-6 h-6 rounded-full border border-gray-600 flex items-center justify-center cursor-pointer hover:border-gold hover:text-gold transition-colors font-bold lowercase">f</span>
            <span className="w-6 h-6 rounded-full border border-gray-600 flex items-center justify-center cursor-pointer hover:border-gold hover:text-gold transition-colors font-bold lowercase">i</span>
            <span className="w-6 h-6 rounded-full border border-gray-600 flex items-center justify-center cursor-pointer hover:border-gold hover:text-gold transition-colors font-bold lowercase">y</span>
          </div>
        </footer>
      )}
    </div>
  );
}
