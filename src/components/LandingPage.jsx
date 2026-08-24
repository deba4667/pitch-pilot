import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { SlideRenderer } from './SlideRenderer';
import { 
  Sparkles, ArrowRight, CheckCircle2, ShieldCheck, Zap, 
  Layout, Target, TrendingUp, Layers, Users, Play, Award, ChevronRight 
} from 'lucide-react';

export const LandingPage = ({ onGetStarted, onViewDemo }) => {
  const { openAuth } = useAuth();
  
  const [heroPrompt, setHeroPrompt] = useState('An AI tool that builds Airbnb-style pitch decks');
  
  // Interactive live slide sample for hero preview
  const previewSlide = {
    type: 'title',
    title: heroPrompt ? (heroPrompt.split(' ')[0] + ' AI') : 'Pitch Pilot AI',
    subtitle: heroPrompt || 'Book rooms with locals, rather than hotels.',
    hook: 'Connecting founders directly with top investor narrative frameworks in 60 seconds.',
    presenter: 'Founder & Team',
    contact: 'founders@pitchpilot.ai'
  };

  return (
    <div className="space-y-24 pb-20">
      
      {/* HERO SECTION */}
      <section className="relative pt-12 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Glow background effects */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-rose-500/20 via-rose-600/10 to-amber-500/20 rounded-full blur-3xl pointer-events-none -z-10"></div>

        <div className="max-w-7xl mx-auto text-center space-y-8">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-800 text-slate-300 text-xs font-semibold shadow-xl">
            <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></span>
            <span>Inspired by the iconic Airbnb Minimalist Pitch Deck</span>
            <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
          </div>

          {/* Hero Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1] max-w-4xl mx-auto">
            Turn Startup Ideas into <br className="hidden sm:inline" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-400 via-rose-500 to-amber-400">
              Investor-Ready Pitch Decks
            </span>
          </h1>

          <p className="text-base sm:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Pitch Pilot AI automatically crafts your hook, problem, solution, TAM/SAM/SOM market size, product features, business model, competitive matrix, team & funding ask.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              onClick={onGetStarted}
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-rose-500 via-rose-600 to-amber-500 hover:from-rose-600 hover:to-amber-600 text-white font-extrabold rounded-2xl shadow-xl shadow-rose-500/25 transition-all hover:scale-105 active:scale-95 text-base flex items-center justify-center gap-3"
            >
              <Sparkles className="w-5 h-5 fill-white" />
              <span>Create Your Pitch Deck Free</span>
            </button>

            <button
              onClick={() => onViewDemo('deck_airbnb_original')}
              className="w-full sm:w-auto px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-2xl border border-slate-800 transition-all text-base flex items-center justify-center gap-2"
            >
              <Play className="w-4 h-4 fill-white" />
              <span>Explore Airbnb Deck Sample</span>
            </button>
          </div>

          {/* Hero Live Slide Interactive Preview */}
          <div className="pt-10 max-w-4xl mx-auto">
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-4 sm:p-6 shadow-2xl space-y-4">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
                <span className="font-bold text-slate-300 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-rose-500" />
                  Live Hero Generator Preview:
                </span>
                <input
                  type="text"
                  value={heroPrompt}
                  onChange={(e) => setHeroPrompt(e.target.value)}
                  placeholder="Type your startup concept to preview live slide..."
                  className="w-full sm:w-80 bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-rose-500"
                />
              </div>

              {/* Rendered Live Slide */}
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <SlideRenderer slide={previewSlide} theme="airbnb" />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* AIRBNB MINIMALIST DESIGN FRAMEWORK SHOWCASE */}
      <section id="features" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-xs font-extrabold text-rose-500 uppercase tracking-widest">VC Pitch Standard</h2>
          <h3 className="text-3xl sm:text-5xl font-extrabold text-white">
            Built on top VC-Approved Slide Frameworks
          </h3>
          <p className="text-slate-400 text-sm sm:text-base">
            Every deck generated by Pitch Pilot AI includes all essential slides expected by angel investors and tier-1 venture funds.
          </p>
        </div>

        {/* 12 Slide Framework Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-rose-500/10 text-rose-500 flex items-center justify-center font-bold">1</div>
            <h4 className="font-extrabold text-lg text-white">Title & Hook</h4>
            <p className="text-xs text-slate-400">Crisp elevator pitch, tagline & contact information.</p>
          </div>

          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-rose-500/10 text-rose-500 flex items-center justify-center font-bold">2</div>
            <h4 className="font-extrabold text-lg text-white">Problem</h4>
            <p className="text-xs text-slate-400">High friction status quo & cost pain points.</p>
          </div>

          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-rose-500/10 text-rose-500 flex items-center justify-center font-bold">3</div>
            <h4 className="font-extrabold text-lg text-white">Solution</h4>
            <p className="text-xs text-slate-400">Product breakthrough & customer benefits.</p>
          </div>

          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-rose-500/10 text-rose-500 flex items-center justify-center font-bold">4</div>
            <h4 className="font-extrabold text-lg text-white">TAM / SAM / SOM</h4>
            <p className="text-xs text-slate-400">Total, serviceable & obtainable market breakdown.</p>
          </div>

          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-rose-500/10 text-rose-500 flex items-center justify-center font-bold">5</div>
            <h4 className="font-extrabold text-lg text-white">Product Demo</h4>
            <p className="text-xs text-slate-400">3-step user experience & feature workflow.</p>
          </div>

          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-rose-500/10 text-rose-500 flex items-center justify-center font-bold">6</div>
            <h4 className="font-extrabold text-lg text-white">Business Model</h4>
            <p className="text-xs text-slate-400">Monetization, pricing & unit margins.</p>
          </div>

          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-rose-500/10 text-rose-500 flex items-center justify-center font-bold">7</div>
            <h4 className="font-extrabold text-lg text-white">Competitor Matrix</h4>
            <p className="text-xs text-slate-400">Direct matrix comparing key features vs rivals.</p>
          </div>

          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-rose-500/10 text-rose-500 flex items-center justify-center font-bold">8</div>
            <h4 className="font-extrabold text-lg text-white">Team & Ask</h4>
            <p className="text-xs text-slate-400">Founders, fundraise target ($) & allocation of funds.</p>
          </div>

        </div>
      </section>

      {/* PRICING SECTION */}
      <section id="pricing" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-xs font-extrabold text-rose-500 uppercase tracking-widest">Simple Transparent Pricing</h2>
          <h3 className="text-3xl sm:text-5xl font-extrabold text-white">Choose Your Founder Plan</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Free Tier */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 flex flex-col justify-between">
            <div>
              <h4 className="text-xl font-bold text-white mb-2">Free Starter</h4>
              <p className="text-xs text-slate-400 mb-6">Perfect for testing your first startup pitch deck.</p>
              <div className="text-4xl font-extrabold text-white mb-6">$0 <span className="text-xs font-normal text-slate-400">/ forever</span></div>
              <ul className="space-y-3 text-xs text-slate-300 mb-8">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-rose-500" /> 1 AI Generated Pitch Deck</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-rose-500" /> Airbnb Minimalist Design Theme</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-rose-500" /> Web Presenter Mode</li>
              </ul>
            </div>
            <button onClick={onGetStarted} className="w-full py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-xl text-xs font-bold transition-colors">
              Get Started Free
            </button>
          </div>

          {/* Founder Pro (Featured) */}
          <div className="bg-gradient-to-b from-slate-900 via-slate-900 to-rose-950/40 border-2 border-rose-500 rounded-3xl p-8 flex flex-col justify-between relative shadow-2xl shadow-rose-950/50">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-rose-500 text-white text-[10px] font-extrabold uppercase tracking-wider">
              Most Popular
            </div>
            <div>
              <h4 className="text-xl font-bold text-white mb-2">Founder Pro</h4>
              <p className="text-xs text-slate-400 mb-6">Unlimited AI decks for active founders raising capital.</p>
              <div className="text-4xl font-extrabold text-white mb-6">$49 <span className="text-xs font-normal text-slate-400">/ month</span></div>
              <ul className="space-y-3 text-xs text-slate-300 mb-8">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-rose-500" /> Unlimited AI Pitch Decks</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-rose-500" /> All Themes (Airbnb, Dark, Sequoia)</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-rose-500" /> Instant PDF High-Res Export</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-rose-500" /> Live Slide Copy Editor</li>
              </ul>
            </div>
            <button onClick={onGetStarted} className="w-full py-3 bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 text-white rounded-xl text-xs font-extrabold shadow-lg shadow-rose-500/25 transition-all">
              Start 7-Day Trial
            </button>
          </div>

          {/* VC Agency Plan */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 flex flex-col justify-between">
            <div>
              <h4 className="text-xl font-bold text-white mb-2">VC & Studio Plan</h4>
              <p className="text-xs text-slate-400 mb-6">For incubators, accelerators and design agencies.</p>
              <div className="text-4xl font-extrabold text-white mb-6">$199 <span className="text-xs font-normal text-slate-400">/ month</span></div>
              <ul className="space-y-3 text-xs text-slate-300 mb-8">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-rose-500" /> Everything in Founder Pro</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-rose-500" /> Custom Branding & Logo Watermarks</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-rose-500" /> Multi-User Team Seats</li>
              </ul>
            </div>
            <button onClick={onGetStarted} className="w-full py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-xl text-xs font-bold transition-colors">
              Contact Sales
            </button>
          </div>

        </div>
      </section>

    </div>
  );
};
