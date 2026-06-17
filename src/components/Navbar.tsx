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
    <nav className="fixed top-0 left-0 w-full z-50 bg-brand-green/90 backdrop-blur-sm border-b border-brand-green-light py-4 border-b">
      <div className="max-w-4xl mx-auto flex justify-center items-center gap-4 sm:gap-8">
        {tabs.map((tab, index) => (
          <React.Fragment key={tab.id}>
            <button
              onClick={() => onChangeView(tab.id)}
              className={`nav-link ${currentView === tab.id ? 'active' : ''}`}
            >
              {tab.label}
            </button>
            {index < tabs.length - 1 && (
              <span className="text-gray-600 select-none">|</span>
            )}
          </React.Fragment>
        ))}
      </div>
    </nav>
  );
};
