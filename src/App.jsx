import React, { useState } from 'react';
import { AuthProvider } from './context/AuthContext';
import { DeckProvider } from './context/DeckContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { AuthModal } from './components/AuthModal';
import { LandingPage } from './components/LandingPage';
import { Dashboard } from './components/Dashboard';
import { Wizard } from './components/Wizard';
import { DeckViewer } from './components/DeckViewer';

const MainContent = () => {
  const [currentView, setCurrentView] = useState('landing'); // 'landing' | 'dashboard' | 'wizard' | 'deck'
  const [selectedDeckId, setSelectedDeckId] = useState(null);

  const handleOpenDeck = (deckId) => {
    setSelectedDeckId(deckId);
    setCurrentView('deck');
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 selection:bg-rose-500 selection:text-white">
      {/* Hide navbar during deck presentation/export view if needed */}
      {currentView !== 'deck' && (
        <Navbar currentView={currentView} setCurrentView={setCurrentView} />
      )}

      <main className="flex-1">
        {currentView === 'landing' && (
          <LandingPage
            onGetStarted={() => setCurrentView('wizard')}
            onViewDemo={(deckId) => handleOpenDeck(deckId)}
          />
        )}

        {currentView === 'dashboard' && (
          <Dashboard
            onSelectDeck={(deckId) => handleOpenDeck(deckId)}
            onCreateDeck={() => setCurrentView('wizard')}
          />
        )}

        {currentView === 'wizard' && (
          <Wizard
            onComplete={(newDeckId) => handleOpenDeck(newDeckId)}
            onCancel={() => setCurrentView('dashboard')}
          />
        )}

        {currentView === 'deck' && (
          <DeckViewer
            deckId={selectedDeckId}
            onBack={() => setCurrentView('dashboard')}
          />
        )}
      </main>

      {currentView !== 'deck' && <Footer />}

      <AuthModal />
    </div>
  );
};

export default function App() {
  return (
    <AuthProvider>
      <DeckProvider>
        <MainContent />
      </DeckProvider>
    </AuthProvider>
  );
}
