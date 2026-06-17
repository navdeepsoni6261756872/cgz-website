import React from 'react';

interface NavbarProps {
  currentView: string;
  onChangeView: (view: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentView, onChangeView }) => {
  const tabs = [
    { id: 'home', label: 'HOME' },
    { id: 'games', label: 'GAMES' },
    { id: 'bookings', label: 'BOOKINGS' },
    { id: 'location', label: 'LOCATION' }
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#091510]/95 shadow-[0_2px_10px_rgba(0,0,0,0.5)] border-b border-[#1b3d2b]">
      <div className="w-full mx-auto flex justify-center items-center gap-4 sm:gap-6 py-4">
        {tabs.map((tab, index) => (
          <React.Fragment key={tab.id}>
            <button
              onClick={() => onChangeView(tab.id)}
              className={`nav-link font-sans ${currentView === tab.id ? 'active' : ''}`}
            >
              {tab.label}
            </button>
            {index < tabs.length - 1 && (
              <span className="text-[#3a5a4a] select-none text-sm">|</span>
            )}
          </React.Fragment>
        ))}
      </div>
    </nav>
  );
};
