import React, { useState } from 'react';
import { useDecks } from '../context/DeckContext';
import { useAuth } from '../context/AuthContext';
import { generatePitchDeckWithAI } from '../services/aiGenerator';
import { 
  Plus, Sparkles, Presentation, Trash2, Eye, Edit, Clock, 
  Search, ArrowRight, Wand2, Star, Download, TrendingUp, DollarSign 
} from 'lucide-react';

export const Dashboard = ({ onSelectDeck, onCreateDeck }) => {
  const { decks, deleteDeck, addDeck } = useDecks();
  const { user } = useAuth();

  const [searchQuery, setSearchQuery] = useState('');
  const [quickPrompt, setQuickPrompt] = useState('');
  const [isQuickGenerating, setIsQuickGenerating] = useState(false);

  const filteredDecks = decks.filter(
    (deck) =>
      deck.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      deck.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      deck.industry.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleQuickGenerate = async (e) => {
    e.preventDefault();
    if (!quickPrompt.trim()) return;
    setIsQuickGenerating(true);

    try {
      const generatedDeck = await generatePitchDeckWithAI({
        name: quickPrompt.split(' ')[0] + ' AI',
        tagline: quickPrompt,
        oneLiner: quickPrompt,
        industry: 'AI & SaaS'
      });
      addDeck(generatedDeck);
      setIsQuickGenerating(false);
      setQuickPrompt('');
      onSelectDeck(generatedDeck.id);
    } catch (err) {
      console.error(err);
      setIsQuickGenerating(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 space-y-8">
      
      {/* Top Banner / Welcome Header */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-slate-900 via-rose-950/40 to-slate-900 border border-slate-800 p-6 sm:p-10 shadow-2xl">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Airbnb Minimalist Pitch Engine Active</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Welcome back, {user ? user.name : 'Founder'}
            </h1>
            <p className="text-sm text-slate-400 mt-2 max-w-xl">
              Manage your investor pitch decks, generate new slide decks with AI, or present your startup narrative to VCs.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={onCreateDeck}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700 text-white font-bold rounded-2xl shadow-xl shadow-rose-500/30 transition-all hover:scale-105 active:scale-95 text-sm"
            >
              <Plus className="w-5 h-5" />
              <span>Create New Deck</span>
            </button>
          </div>
        </div>
      </div>

      {/* Quick AI Deck Prompt Bar */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 sm:p-5 shadow-xl">
        <form onSubmit={handleQuickGenerate} className="flex flex-col sm:flex-row items-center gap-3">
          <div className="relative flex-1 w-full">
            <Wand2 className="w-5 h-5 text-rose-500 absolute left-4 top-3.5" />
            <input
              type="text"
              value={quickPrompt}
              onChange={(e) => setQuickPrompt(e.target.value)}
              placeholder="Quick Generate: Describe your startup in 1 sentence (e.g. 'Uber for private jet charters')"
              className="w-full bg-slate-950 border border-slate-800 focus:border-rose-500 rounded-xl py-3 pl-12 pr-4 text-sm text-white placeholder-slate-500 focus:outline-none"
            />
          </div>
          <button
            type="submit"
            disabled={isQuickGenerating || !quickPrompt.trim()}
            className="w-full sm:w-auto px-6 py-3 bg-slate-800 hover:bg-slate-700 disabled:opacity-50 text-white font-semibold rounded-xl text-xs flex items-center justify-center gap-2 transition-all border border-slate-700 whitespace-nowrap"
          >
            {isQuickGenerating ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Generating...</span>
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4 text-rose-400" />
                <span>Instant AI Generation</span>
              </>
            )}
          </button>
        </form>
      </div>

      {/* Stats Summary Bar */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-rose-500/10 text-rose-500 flex items-center justify-center font-bold">
            <Presentation className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs text-slate-400 block font-medium">Decks Built</span>
            <span className="text-2xl font-extrabold text-white">{decks.length}</span>
          </div>
        </div>

        <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center font-bold">
            <DollarSign className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs text-slate-400 block font-medium">Target Raised Goal</span>
            <span className="text-2xl font-extrabold text-white">$3.5 Million</span>
          </div>
        </div>

        <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-500 flex items-center justify-center font-bold">
            <Star className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs text-slate-400 block font-medium">Primary Design Theme</span>
            <span className="text-base font-extrabold text-white">Airbnb Minimalist</span>
          </div>
        </div>
      </div>

      {/* Search & Filter Header */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4">
        <div>
          <h2 className="text-xl font-bold text-white tracking-tight">Your Saved Pitch Decks</h2>
          <p className="text-xs text-slate-400">Click any deck to preview, edit slides, change theme, or export to PDF.</p>
        </div>

        <div className="relative w-full sm:w-72">
          <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-3" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search decks..."
            className="w-full bg-slate-900 border border-slate-800 focus:border-rose-500 rounded-xl py-2 pl-10 pr-4 text-xs text-white focus:outline-none"
          />
        </div>
      </div>

      {/* Decks Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredDecks.map((deck) => (
          <div
            key={deck.id}
            className="group bg-slate-900 border border-slate-800 hover:border-slate-700 rounded-3xl p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:shadow-rose-950/20 hover:-translate-y-1 relative"
          >
            {/* Top Badge & Stage */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-rose-500/10 text-rose-400 border border-rose-500/20">
                  {deck.industry || 'Startup'}
                </span>
                <div className="flex items-center gap-2 text-slate-500 text-xs font-medium">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{deck.updatedAt}</span>
                </div>
              </div>

              <h3 className="text-xl font-extrabold text-white mb-1 group-hover:text-rose-400 transition-colors">
                {deck.title}
              </h3>
              <p className="text-xs text-slate-400 line-clamp-2 mb-6 leading-relaxed">
                {deck.tagline}
              </p>
            </div>

            {/* Thumbnail Stats Preview */}
            <div className="bg-slate-950 rounded-2xl p-4 border border-slate-800/80 mb-6 space-y-2">
              <div className="flex justify-between items-center text-xs text-slate-300">
                <span className="text-slate-500">Slides Count:</span>
                <span className="font-bold text-white">{deck.slides?.length || 0} Slides</span>
              </div>
              <div className="flex justify-between items-center text-xs text-slate-300">
                <span className="text-slate-500">Target Raise:</span>
                <span className="font-extrabold text-rose-400">{deck.targetRaise || '$500,000'}</span>
              </div>
              <div className="flex justify-between items-center text-xs text-slate-300">
                <span className="text-slate-500">Design Theme:</span>
                <span className="font-semibold text-slate-300 capitalize">{deck.theme || 'Airbnb'}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center justify-between pt-2 border-t border-slate-800/60">
              <button
                onClick={() => onSelectDeck(deck.id)}
                className="flex items-center gap-2 text-xs font-bold text-rose-400 hover:text-rose-300 transition-colors"
              >
                <Eye className="w-4 h-4" />
                <span>Open & Edit Deck</span>
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  if (confirm(`Delete deck "${deck.title}"?`)) {
                    deleteDeck(deck.id);
                  }
                }}
                className="text-slate-500 hover:text-rose-400 p-1.5 rounded-lg hover:bg-slate-800 transition-colors"
                title="Delete Deck"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}

        {/* Empty Create CTA Card */}
        <div
          onClick={onCreateDeck}
          className="border-2 border-dashed border-slate-800 hover:border-rose-500/50 rounded-3xl p-8 flex flex-col items-center justify-center text-center cursor-pointer transition-all duration-300 hover:bg-rose-500/5 group min-h-[300px]"
        >
          <div className="w-14 h-14 rounded-2xl bg-rose-500/10 text-rose-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <Plus className="w-7 h-7" />
          </div>
          <h3 className="text-lg font-bold text-white mb-1">Create New Pitch Deck</h3>
          <p className="text-xs text-slate-400 max-w-xs">
            Use the 10-step wizard to input problem, solution, market size, TAM/SAM, team & ask.
          </p>
        </div>

      </div>
    </div>
  );
};
