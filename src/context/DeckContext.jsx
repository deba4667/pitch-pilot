import React, { createContext, useContext, useState, useEffect } from 'react';
import { SAMPLE_DECKS } from '../data/sampleDecks';

const DeckContext = createContext(null);

export const DeckProvider = ({ children }) => {
  const [decks, setDecks] = useState([]);
  const [activeDeckId, setActiveDeckId] = useState(null);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  useEffect(() => {
    const saved = localStorage.getItem('pitch_pilot_decks');
    if (saved) {
      try {
        setDecks(JSON.parse(saved));
      } catch (e) {
        console.error('Failed loading saved decks', e);
        setDecks(SAMPLE_DECKS);
      }
    } else {
      setDecks(SAMPLE_DECKS);
      localStorage.setItem('pitch_pilot_decks', JSON.stringify(SAMPLE_DECKS));
    }
  }, []);

  const saveDecksToStorage = (updatedDecks) => {
    setDecks(updatedDecks);
    localStorage.setItem('pitch_pilot_decks', JSON.stringify(updatedDecks));
  };

  const addDeck = (newDeck) => {
    const updated = [newDeck, ...decks];
    saveDecksToStorage(updated);
    setActiveDeckId(newDeck.id);
    setActiveSlideIndex(0);
    return newDeck;
  };

  const updateDeck = (deckId, updatedFields) => {
    const updated = decks.map((deck) =>
      deck.id === deckId ? { ...deck, ...updatedFields, updatedAt: new Date().toISOString().split('T')[0] } : deck
    );
    saveDecksToStorage(updated);
  };

  const deleteDeck = (deckId) => {
    const updated = decks.filter((deck) => deck.id !== deckId);
    saveDecksToStorage(updated);
    if (activeDeckId === deckId) {
      setActiveDeckId(null);
      setActiveSlideIndex(0);
    }
  };

  const updateSlideContent = (deckId, slideIndex, updatedSlideData) => {
    const deck = decks.find((d) => d.id === deckId);
    if (!deck) return;

    const newSlides = [...deck.slides];
    newSlides[slideIndex] = { ...newSlides[slideIndex], ...updatedSlideData };

    updateDeck(deckId, { slides: newSlides });
  };

  const activeDeck = decks.find((d) => d.id === activeDeckId) || null;

  return (
    <DeckContext.Provider
      value={{
        decks,
        activeDeck,
        activeDeckId,
        setActiveDeckId,
        activeSlideIndex,
        setActiveSlideIndex,
        addDeck,
        updateDeck,
        deleteDeck,
        updateSlideContent
      }}
    >
      {children}
    </DeckContext.Provider>
  );
};

export const useDecks = () => {
  const context = useContext(DeckContext);
  if (!context) throw new Error('useDecks must be used within DeckProvider');
  return context;
};
