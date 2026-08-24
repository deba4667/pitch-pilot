import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Sparkles, Presentation, Plus, LogOut, User, LayoutDashboard, Compass } from 'lucide-react';

export const Navbar = ({ currentView, setCurrentView }) => {
  const { user, openAuth, logout } = useAuth();

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-slate-950/80 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand Logo */}
        <div 
          onClick={() => setCurrentView('landing')} 
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-rose-500 via-rose-600 to-amber-500 p-0.5 shadow-lg shadow-rose-500/20 group-hover:scale-105 transition-transform duration-300">
            <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-rose-500" />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-100 to-slate-400">
                Pitch Pilot<span className="text-rose-500 font-mono text-sm ml-1">AI</span>
              </span>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-rose-500/10 text-rose-400 border border-rose-500/20">
                Airbnb Style
              </span>
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <button 
            onClick={() => setCurrentView('landing')} 
            className={`hover:text-rose-400 transition-colors ${currentView === 'landing' ? 'text-rose-400 font-semibold' : ''}`}
          >
            Home
          </button>
          <button 
            onClick={() => setCurrentView('dashboard')} 
            className={`hover:text-rose-400 transition-colors flex items-center gap-1.5 ${currentView === 'dashboard' ? 'text-rose-400 font-semibold' : ''}`}
          >
            <LayoutDashboard className="w-4 h-4" />
            Dashboard
          </button>
          <button 
            onClick={() => setCurrentView('wizard')} 
            className={`hover:text-rose-400 transition-colors flex items-center gap-1.5 ${currentView === 'wizard' ? 'text-rose-400 font-semibold' : ''}`}
          >
            <Plus className="w-4 h-4" />
            New Pitch Deck
          </button>
        </nav>

        {/* Auth / Action Area */}
        <div className="flex items-center gap-4">
          {user ? (
            <div className="flex items-center gap-3">
              <button
                onClick={() => setCurrentView('wizard')}
                className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700 text-white shadow-lg shadow-rose-500/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <Plus className="w-4 h-4" />
                <span>Create Deck</span>
              </button>

              {/* User Dropdown / Profile Badge */}
              <div className="flex items-center gap-3 bg-slate-900 border border-slate-800 rounded-full py-1.5 px-3">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-7 h-7 rounded-full object-cover border border-rose-500/40"
                />
                <span className="text-sm font-medium text-slate-200 hidden lg:inline">{user.name}</span>
                <button
                  onClick={logout}
                  title="Sign Out"
                  className="text-slate-400 hover:text-rose-400 transition-colors p-1"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <button
                onClick={() => openAuth('login')}
                className="text-sm font-medium text-slate-300 hover:text-white px-3 py-2 transition-colors"
              >
                Sign In
              </button>
              <button
                onClick={() => openAuth('signup')}
                className="text-sm font-medium bg-rose-500 hover:bg-rose-600 text-white px-4 py-2 rounded-xl transition-all shadow-md shadow-rose-500/20"
              >
                Get Started Free
              </button>
            </div>
          )}
        </div>

      </div>
    </header>
  );
};
