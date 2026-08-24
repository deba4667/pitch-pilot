import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState('login'); // 'login' | 'signup'

  useEffect(() => {
    // Load persisted user session
    const savedUser = localStorage.getItem('pitch_pilot_user');
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (e) {
        console.error('Failed to parse saved user state', e);
      }
    } else {
      // Default demo user so user can test seamlessly if they want
      const defaultUser = {
        id: 'user_demo_123',
        name: 'Alex Rivera',
        email: 'alex@startup.io',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=250&q=80',
        plan: 'Founder Pro',
        company: 'Nova AI'
      };
      setUser(defaultUser);
      localStorage.setItem('pitch_pilot_user', JSON.stringify(defaultUser));
    }
  }, []);

  const loginWithGoogle = () => {
    const googleUser = {
      id: 'google_' + Date.now(),
      name: 'Sarah Chen (Google)',
      email: 'sarah.chen@gmail.com',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=250&q=80',
      plan: 'Founder Pro',
      provider: 'google'
    };
    setUser(googleUser);
    localStorage.setItem('pitch_pilot_user', JSON.stringify(googleUser));
    setIsAuthOpen(false);
  };

  const loginWithEmail = (email, password, name = '') => {
    const newUser = {
      id: 'usr_' + Date.now(),
      name: name || email.split('@')[0],
      email,
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(email)}`,
      plan: 'Free Tier',
      provider: 'email'
    };
    setUser(newUser);
    localStorage.setItem('pitch_pilot_user', JSON.stringify(newUser));
    setIsAuthOpen(false);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('pitch_pilot_user');
  };

  const openAuth = (mode = 'login') => {
    setAuthMode(mode);
    setIsAuthOpen(true);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthOpen,
        authMode,
        setAuthMode,
        setIsAuthOpen,
        openAuth,
        loginWithGoogle,
        loginWithEmail,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};
