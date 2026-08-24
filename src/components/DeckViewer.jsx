import React, { useState, useEffect } from 'react';
import { useDecks } from '../context/DeckContext';
import { SlideRenderer } from './SlideRenderer';
import { PDFExporter } from './PDFExporter';
import { 
  Play, ChevronLeft, ChevronRight, Edit3, Palette, Download, 
  ArrowLeft, Plus, Trash2, Maximize2, Sparkles, Check, LayoutGrid 
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const DeckViewer = ({ deckId, onBack }) => {
  const { decks, updateDeck, updateSlideContent } = useDecks();
  const deck = decks.find((d) => d.id === deckId) || decks[0];

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [isExporting, setIsExporting] = useState(false);
  const [activeTheme, setActiveTheme] = useState(deck?.theme || 'airbnb');

  useEffect(() => {
    if (deck?.theme) setActiveTheme(deck.theme);
  }, [deck]);

  // Keyboard navigation for presentation mode
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (isPlaying || !isEditing) {
        if (e.key === 'ArrowRight' || e.key === ' ') {
          e.preventDefault();
          setCurrentSlideIndex((prev) => Math.min(prev + 1, (deck?.slides?.length || 1) - 1));
        } else if (e.key === 'ArrowLeft') {
          e.preventDefault();
          setCurrentSlideIndex((prev) => Math.max(prev - 1, 0));
        } else if (e.key === 'Escape') {
          setIsPlaying(false);
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [deck, isPlaying, isEditing]);

  if (!deck) return null;
  if (isExporting) return <PDFExporter deck={{ ...deck, theme: activeTheme }} onBack={() => setIsExporting(false)} />;

  const currentSlide = deck.slides[currentSlideIndex] || deck.slides[0];

  const handleThemeChange = (newTheme) => {
    setActiveTheme(newTheme);
    updateDeck(deck.id, { theme: newTheme });
  };

  const handleTextEdit = (field, value) => {
    updateSlideContent(deck.id, currentSlideIndex, { [field]: value });
  };

  const handleCelebration = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  return (
    <div className={`min-h-screen bg-slate-950 text-white ${isPlaying ? 'fixed inset-0 z-50 bg-black flex flex-col justify-center items-center p-0' : 'p-4 sm:p-6'}`}>
      
      {/* Top Controls Bar (Hidden during full presentation mode) */}
      {!isPlaying && (
        <div className="max-w-7xl mx-auto mb-6 flex flex-wrap items-center justify-between gap-4 p-4 bg-slate-900/90 backdrop-blur-md border border-slate-800 rounded-2xl">
          
          <div className="flex items-center gap-4">
            <button
              onClick={onBack}
              className="flex items-center gap-2 px-3.5 py-2 bg-slate-800 hover:bg-slate-700 rounded-xl text-xs font-semibold text-slate-300 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Dashboard</span>
            </button>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-lg font-bold text-white tracking-tight">{deck.title}</h1>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-rose-500/10 text-rose-400 border border-rose-500/20 uppercase">
                  {deck.stage || 'Seed'}
                </span>
              </div>
              <p className="text-xs text-slate-400 font-medium">{deck.tagline}</p>
            </div>
          </div>

          {/* Theme Selector & Actions */}
          <div className="flex items-center gap-3">
            
            {/* Theme Dropdown / Pills */}
            <div className="hidden md:flex items-center gap-1.5 p-1 bg-slate-950 border border-slate-800 rounded-xl text-xs">
              <span className="text-[10px] text-slate-500 font-bold px-2 uppercase">Theme:</span>
              <button
                onClick={() => handleThemeChange('airbnb')}
                className={`px-3 py-1 rounded-lg font-semibold transition-all ${activeTheme === 'airbnb' ? 'bg-[#FF385C] text-white shadow-md' : 'text-slate-400 hover:text-white'}`}
              >
                Airbnb Minimalist
              </button>
              <button
                onClick={() => handleThemeChange('modern_dark')}
                className={`px-3 py-1 rounded-lg font-semibold transition-all ${activeTheme === 'modern_dark' ? 'bg-rose-500 text-white shadow-md' : 'text-slate-400 hover:text-white'}`}
              >
                Dark Modern
              </button>
              <button
                onClick={() => handleThemeChange('sequoia')}
                className={`px-3 py-1 rounded-lg font-semibold transition-all ${activeTheme === 'sequoia' ? 'bg-emerald-700 text-white shadow-md' : 'text-slate-400 hover:text-white'}`}
              >
                Sequoia Clean
              </button>
            </div>

            {/* Edit Mode Toggle */}
            <button
              onClick={() => setIsEditing(!isEditing)}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold border transition-all ${
                isEditing 
                  ? 'bg-amber-500/10 text-amber-400 border-amber-500/30' 
                  : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700'
              }`}
            >
              <Edit3 className="w-3.5 h-3.5" />
              <span>{isEditing ? 'Editing Mode' : 'Edit Slide'}</span>
            </button>

            {/* Presenter Mode */}
            <button
              onClick={() => setIsPlaying(true)}
              className="flex items-center gap-1.5 px-4 py-2 bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700 text-white rounded-xl text-xs font-semibold shadow-lg shadow-rose-500/20 transition-all hover:scale-[1.02]"
            >
              <Play className="w-3.5 h-3.5 fill-white" />
              <span>Present Deck</span>
            </button>

            {/* Export PDF */}
            <button
              onClick={() => setIsExporting(true)}
              className="flex items-center gap-1.5 px-3.5 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-xl text-xs font-semibold border border-slate-700 transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Export PDF</span>
            </button>
          </div>

        </div>
      )}

      {/* Main Deck Presentation Container */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
        
        {/* Left Thumbnails Sidebar (Hidden during full presentation mode) */}
        {!isPlaying && (
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 space-y-3 max-h-[75vh] overflow-y-auto hidden lg:block">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-slate-300 uppercase tracking-wider">Slide Navigator</span>
              <span className="text-[11px] font-semibold text-rose-400 bg-rose-500/10 px-2 py-0.5 rounded-full">
                {deck.slides.length} Slides
              </span>
            </div>

            {deck.slides.map((slide, idx) => (
              <div
                key={slide.id || idx}
                onClick={() => setCurrentSlideIndex(idx)}
                className={`p-3 rounded-xl border text-left cursor-pointer transition-all ${
                  currentSlideIndex === idx
                    ? 'bg-rose-500/10 border-rose-500/50 shadow-md shadow-rose-500/10'
                    : 'bg-slate-950/60 border-slate-800 hover:border-slate-700 opacity-80 hover:opacity-100'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] font-bold text-slate-400 uppercase">{idx + 1}. {slide.type}</span>
                  {currentSlideIndex === idx && <div className="w-2 h-2 rounded-full bg-rose-500"></div>}
                </div>
                <h4 className="text-xs font-semibold text-white truncate">{slide.title}</h4>
              </div>
            ))}
          </div>
        )}

        {/* Center Main Slide View */}
        <div className={`${isPlaying ? 'w-full max-w-5xl h-full flex flex-col justify-center' : 'lg:col-span-3'} space-y-4`}>
          
          {/* Main Slide Card */}
          <div className="relative group shadow-2xl rounded-2xl overflow-hidden">
            <SlideRenderer slide={currentSlide} theme={activeTheme} isEditable={isEditing} />

            {/* Overlay Navigation Buttons on Slide */}
            <button
              onClick={() => setCurrentSlideIndex((prev) => Math.max(prev - 1, 0))}
              disabled={currentSlideIndex === 0}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-slate-900/80 backdrop-blur-md border border-slate-700 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity disabled:opacity-0 hover:bg-rose-500 hover:border-rose-500"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={() => setCurrentSlideIndex((prev) => Math.min(prev + 1, deck.slides.length - 1))}
              disabled={currentSlideIndex === deck.slides.length - 1}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-slate-900/80 backdrop-blur-md border border-slate-700 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity disabled:opacity-0 hover:bg-rose-500 hover:border-rose-500"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Bottom Bar: Slide Controls & Edit Form */}
          {!isPlaying && (
            <div className="p-4 bg-slate-900 border border-slate-800 rounded-2xl space-y-4">
              
              {/* Pagination Controls */}
              <div className="flex items-center justify-between text-xs text-slate-400">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setCurrentSlideIndex((prev) => Math.max(prev - 1, 0))}
                    disabled={currentSlideIndex === 0}
                    className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 disabled:opacity-40 transition-colors text-white"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <span className="font-semibold text-slate-200">
                    Slide {currentSlideIndex + 1} of {deck.slides.length}
                  </span>
                  <button
                    onClick={() => setCurrentSlideIndex((prev) => Math.min(prev + 1, deck.slides.length - 1))}
                    disabled={currentSlideIndex === deck.slides.length - 1}
                    className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 disabled:opacity-40 transition-colors text-white"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={handleCelebration}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-rose-500/10 text-rose-400 hover:bg-rose-500/20 font-semibold transition-colors"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Celebrate Pitch</span>
                  </button>
                </div>
              </div>

              {/* Inline Quick Editor if Editing Enabled */}
              {isEditing && (
                <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-3 animate-fadeIn">
                  <div className="flex items-center justify-between text-xs font-bold text-amber-400">
                    <span className="flex items-center gap-1.5">
                      <Edit3 className="w-3.5 h-3.5" /> Live Editing Slide: {currentSlide.title}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] text-slate-400 mb-1">Slide Title</label>
                      <input
                        type="text"
                        value={currentSlide.title || ''}
                        onChange={(e) => handleTextEdit('title', e.target.value)}
                        className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-1.5 text-xs text-white focus:outline-none focus:border-rose-500"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] text-slate-400 mb-1">Tagline / Subtitle</label>
                      <input
                        type="text"
                        value={currentSlide.tagline || currentSlide.subtitle || ''}
                        onChange={(e) => handleTextEdit('tagline', e.target.value)}
                        className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-1.5 text-xs text-white focus:outline-none focus:border-rose-500"
                      />
                    </div>
                  </div>
                </div>
              )}

            </div>
          )}

          {/* Full Presentation Overlay Esc Button */}
          {isPlaying && (
            <div className="flex items-center justify-between w-full px-6 py-4 bg-slate-950/80 backdrop-blur-md rounded-xl mt-4">
              <span className="text-xs text-slate-400">Press <strong>Esc</strong> to exit presentation • Use <strong>← / →</strong> keys to navigate</span>
              <button
                onClick={() => setIsPlaying(false)}
                className="px-4 py-1.5 bg-rose-500 hover:bg-rose-600 text-white rounded-lg text-xs font-bold"
              >
                Exit Presentation
              </button>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
