import React from 'react';
import { Sparkles, Github, Twitter, Linkedin, Heart } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 text-slate-400 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Brand Info */}
        <div className="md:col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-rose-500" />
            <span className="font-bold text-lg text-white">Pitch Pilot AI</span>
          </div>
          <p className="text-xs leading-relaxed text-slate-400">
            Generate investor-grade pitch decks inspired by iconic minimalist design standards like Airbnb, Sequoia, and Y Combinator.
          </p>
        </div>

        {/* Product Links */}
        <div>
          <h4 className="text-xs font-semibold text-slate-200 uppercase tracking-wider mb-4">Product</h4>
          <ul className="space-y-2 text-xs">
            <li><a href="#features" className="hover:text-rose-400 transition-colors">AI Deck Engine</a></li>
            <li><a href="#templates" className="hover:text-rose-400 transition-colors">Airbnb Deck Template</a></li>
            <li><a href="#wizard" className="hover:text-rose-400 transition-colors">Startup Wizard</a></li>
            <li><a href="#export" className="hover:text-rose-400 transition-colors">PDF Export</a></li>
          </ul>
        </div>

        {/* Slide Frameworks */}
        <div>
          <h4 className="text-xs font-semibold text-slate-200 uppercase tracking-wider mb-4">Deck Frameworks</h4>
          <ul className="space-y-2 text-xs">
            <li><span className="text-slate-300">Hook & Problem-Solution</span></li>
            <li><span className="text-slate-300">TAM / SAM / SOM Breakdown</span></li>
            <li><span className="text-slate-300">Competitive Matrix</span></li>
            <li><span className="text-slate-300">Monetization & Traction</span></li>
            <li><span className="text-slate-300">Fundraising Ask & Allocation</span></li>
          </ul>
        </div>

        {/* Social & Copyright */}
        <div>
          <h4 className="text-xs font-semibold text-slate-200 uppercase tracking-wider mb-4">Connect</h4>
          <div className="flex gap-4 text-slate-400 mb-4">
            <a href="#" className="hover:text-white transition-colors"><Twitter className="w-4 h-4" /></a>
            <a href="#" className="hover:text-white transition-colors"><Github className="w-4 h-4" /></a>
            <a href="#" className="hover:text-white transition-colors"><Linkedin className="w-4 h-4" /></a>
          </div>
          <p className="text-[11px] text-slate-500 flex items-center gap-1">
            Built with <Heart className="w-3 h-3 text-rose-500 fill-rose-500 inline" /> for founders worldwide.
          </p>
        </div>

      </div>
      
      <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-slate-900 flex flex-col sm:flex-row justify-between items-center text-[11px] text-slate-500">
        <p>© 2026 Pitch Pilot AI Inc. All rights reserved.</p>
        <div className="flex gap-6 mt-4 sm:mt-0">
          <a href="#" className="hover:text-slate-300">Privacy Policy</a>
          <a href="#" className="hover:text-slate-300">Terms of Service</a>
          <a href="#" className="hover:text-slate-300">Security</a>
        </div>
      </div>
    </footer>
  );
};
