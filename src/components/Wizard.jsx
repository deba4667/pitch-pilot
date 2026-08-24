import React, { useState } from 'react';
import { useDecks } from '../context/DeckContext';
import { generatePitchDeckWithAI } from '../services/aiGenerator';
import { 
  Sparkles, ArrowRight, ArrowLeft, Check, Target, DollarSign, 
  Users, Layers, Shield, Rocket, HelpCircle, Lightbulb, Zap, Wand2 
} from 'lucide-react';

export const Wizard = ({ onComplete, onCancel }) => {
  const { addDeck } = useDecks();
  const [currentStep, setCurrentStep] = useState(1);
  const [isGenerating, setIsGenerating] = useState(false);

  const [formData, setFormData] = useState({
    // Step 1: Hook & Basic Info
    name: '',
    tagline: '',
    oneLiner: '',
    industry: 'Generative AI / SaaS',
    targetAudience: 'Early-stage founders & SMBs',

    // Step 2: Problem
    problemPoint1: 'Existing solutions require weeks of manual design work.',
    problemPoint2: 'Outdated slide builders lack structured investor narratives.',
    problemPoint3: 'Hiring design agencies costs $5,000+ per pitch deck.',

    // Step 3: Solution
    solutionDetails: 'AI-native pitch deck builder generating Airbnb-style minimalist decks.',
    solutionPoint1: 'Generates investor-grade decks in under 60 seconds.',
    solutionPoint2: 'Pre-structured with top VC frameworks (Airbnb, Sequoia, YC).',
    solutionPoint3: 'Live real-time slide editor & instant high-res PDF export.',

    // Step 4: Market & TAM / SAM / SOM
    tamAmount: '$14.2 Billion',
    samAmount: '$2.8 Billion',
    somAmount: '$150 Million',

    // Step 5: Product & Features
    productFeatures: 'Guided startup wizard, AI narrative synthesizer, Airbnb minimalist layout engine.',

    // Step 6: Business & Monetization Model
    businessModel: 'Freemium SaaS ($49/mo Founder Pro & $199/mo VC Agency)',
    revenueTarget: '$1.2M ARR in Year 1',

    // Step 7: Traction & Market Adoption
    tractionDetails: '500+ waitlist founders signed up in first 14 days.',

    // Step 8: Competitors & Moat
    competitorsList: 'Legacy PowerPoint, Canva, Pitch.com, Manual Agencies',
    unfairAdvantage: 'Proprietary Airbnb minimalist design engine + AI VC narrative parser',

    // Step 9: Team Members
    founder1Name: 'Alex Rivera',
    founder1Role: 'Co-Founder & CEO',
    founder1Bio: 'Ex-Tech Lead, 8 years scaling SaaS products.',
    founder2Name: 'Elena Rostova',
    founder2Role: 'Co-Founder & CTO',
    founder2Bio: 'AI Researcher, former Machine Learning Engineer.',

    // Step 10: Expansion & Ask
    expansionPlan: 'Scale US market, launch team collaboration API, expand globally',
    targetRaise: '$1,000,000',
    equityOffered: '10% Equity',
    selectedTheme: 'airbnb'
  });

  const steps = [
    { title: 'Hook & Basics', icon: Lightbulb, desc: 'Startup Name, Tagline & One-Liner Hook' },
    { title: 'Problem', icon: HelpCircle, desc: 'Key Customer Pain Points & Status Quo' },
    { title: 'Solution', icon: Sparkles, desc: 'Product Breakthrough & Value Proposition' },
    { title: 'Market & TAM/SAM', icon: Target, desc: 'Addressable Market Size Calculations' },
    { title: 'Product Workflow', icon: Layers, desc: 'Key Product Features & 3-Step Flow' },
    { title: 'Business Model', icon: DollarSign, desc: 'Monetization, Fees & Revenue Targets' },
    { title: 'Market Adoption', icon: Zap, desc: 'Early Traction & Growth Channels' },
    { title: 'Competitors & Moat', icon: Shield, desc: 'Competitive Matrix & Secret Sauce' },
    { title: 'Team', icon: Users, desc: 'Founders & Core Leadership' },
    { title: 'Ask & Expansion', icon: Rocket, desc: 'Fundraise Amount, Equity & Roadmaps' }
  ];

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleAutoFillAirbnb = () => {
    setFormData({
      name: 'Airbnb',
      tagline: 'Book rooms with locals, rather than hotels.',
      oneLiner: 'Connecting travelers with local hosts for authentic, affordable stays worldwide.',
      industry: 'Travel & Hospitality',
      targetAudience: 'Global travelers & homeowners',

      problemPoint1: 'Hotels isolate travelers from local city culture.',
      problemPoint2: 'No web platform exists to easily book a spare room.',
      problemPoint3: 'Homeowners cannot monetize extra rooms effectively.',

      solutionDetails: 'A P2P web platform where hosts rent out spare space to travelers.',
      solutionPoint1: 'Travelers save money & experience local culture.',
      solutionPoint2: 'Hosts earn extra revenue from unused space.',
      solutionPoint3: 'Simple 3-step online booking with trust profiles.',

      tamAmount: '$1.9 Billion Trips',
      samAmount: '$560 Million Online P2P',
      somAmount: '$84 Million (15% Share)',

      productFeatures: 'Search by city, host identity verification, instant booking.',

      businessModel: '10% commission fee on all bookings',
      revenueTarget: '$200M Projected Revenue',

      tractionDetails: '630,000+ Couchsurfing users, 17,000 SF/NY Craigslist posts/week.',

      competitorsList: 'Hotels, Craigslist, Couchsurfing, Bed & Breakfasts',
      unfairAdvantage: 'First dedicated P2P transactional platform with host verification & reviews.',

      founder1Name: 'Brian Chesky',
      founder1Role: 'Co-Founder & CEO',
      founder1Bio: 'RISD Industrial Design graduate. Lead brand & spatial design.',
      founder2Name: 'Joe Gebbia',
      founder2Role: 'Co-Founder & CPO',
      founder2Bio: 'RISD Graphic & Industrial Design double major.',

      expansionPlan: 'Dominate 10 US event cities, expand to European & Asian capitals',
      targetRaise: '$500,000',
      equityOffered: '15% Equity',
      selectedTheme: 'airbnb'
    });
  };

  const handleGenerateDeck = async () => {
    setIsGenerating(true);
    try {
      const newDeck = await generatePitchDeckWithAI(formData);
      addDeck(newDeck);
      setIsGenerating(false);
      onComplete(newDeck.id);
    } catch (err) {
      console.error('Failed creating deck', err);
      setIsGenerating(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6">
      
      {/* Wizard Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <div className="flex items-center gap-2 text-rose-500 font-semibold text-xs tracking-wider uppercase mb-1">
            <Wand2 className="w-4 h-4" />
            <span>AI Pitch Builder Wizard</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white">Create Your Pitch Deck</h1>
          <p className="text-xs text-slate-400 mt-1">Step {currentStep} of {steps.length}: {steps[currentStep - 1].title}</p>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={handleAutoFillAirbnb}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 text-xs font-semibold border border-rose-500/20 transition-all"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Auto-Fill Airbnb Sample</span>
          </button>

          <button
            onClick={onCancel}
            className="px-3 py-1.5 text-slate-400 hover:text-white text-xs font-semibold"
          >
            Cancel
          </button>
        </div>
      </div>

      {/* Progress Stepper Bar */}
      <div className="mb-8 overflow-x-auto pb-2">
        <div className="flex items-center gap-2 min-w-max">
          {steps.map((s, idx) => {
            const stepNum = idx + 1;
            const isActive = stepNum === currentStep;
            const isDone = stepNum < currentStep;

            return (
              <button
                key={idx}
                onClick={() => setCurrentStep(stepNum)}
                className={`flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold transition-all ${
                  isActive
                    ? 'bg-rose-500 text-white shadow-lg shadow-rose-500/20'
                    : isDone
                    ? 'bg-slate-900 text-rose-400 border border-rose-500/30'
                    : 'bg-slate-900/60 text-slate-500 border border-slate-800 hover:text-slate-300'
                }`}
              >
                <div className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${
                  isActive ? 'bg-white text-rose-600 font-extrabold' : isDone ? 'bg-rose-500/20 text-rose-400' : 'bg-slate-800'
                }`}>
                  {isDone ? <Check className="w-3 h-3" /> : stepNum}
                </div>
                <span>{s.title}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Form Step Body */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
        
        {/* Step 1: Hook & Basic Info */}
        {currentStep === 1 && (
          <div className="space-y-4 animate-fadeIn">
            <div className="border-b border-slate-800 pb-4">
              <h3 className="text-lg font-bold text-white">Startup Hook & Identity</h3>
              <p className="text-xs text-slate-400">Establish a clear name and 1-liner hook for slide 1.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">Startup Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Airbnb / Pitch Pilot AI"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 focus:border-rose-500 rounded-xl p-3 text-sm text-white focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">Industry / Category</label>
                <input
                  type="text"
                  placeholder="e.g. Travel & P2P Marketplace"
                  value={formData.industry}
                  onChange={(e) => handleInputChange('industry', e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 focus:border-rose-500 rounded-xl p-3 text-sm text-white focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">Tagline (Short Catchphrase)</label>
              <input
                type="text"
                placeholder="e.g. Book rooms with locals, rather than hotels."
                value={formData.tagline}
                onChange={(e) => handleInputChange('tagline', e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 focus:border-rose-500 rounded-xl p-3 text-sm text-white focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">One-Liner Hook (The Elevator Pitch)</label>
              <textarea
                rows={3}
                placeholder="e.g. Connecting travelers with local hosts for authentic, affordable stays worldwide."
                value={formData.oneLiner}
                onChange={(e) => handleInputChange('oneLiner', e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 focus:border-rose-500 rounded-xl p-3 text-sm text-white focus:outline-none"
              />
            </div>
          </div>
        )}

        {/* Step 2: Problem */}
        {currentStep === 2 && (
          <div className="space-y-4 animate-fadeIn">
            <div className="border-b border-slate-800 pb-4">
              <h3 className="text-lg font-bold text-white">The Problem & Status Quo</h3>
              <p className="text-xs text-slate-400">List 3 clear pain points experienced by your target audience.</p>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">Pain Point 1 (Financial / Price friction)</label>
              <input
                type="text"
                placeholder="e.g. Hotels are expensive and disconnect travelers from local culture."
                value={formData.problemPoint1}
                onChange={(e) => handleInputChange('problemPoint1', e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-rose-500"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">Pain Point 2 (Connection / Access friction)</label>
              <input
                type="text"
                placeholder="e.g. No web platform exists to easily book a spare room."
                value={formData.problemPoint2}
                onChange={(e) => handleInputChange('problemPoint2', e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-rose-500"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">Pain Point 3 (Underutilized asset friction)</label>
              <input
                type="text"
                placeholder="e.g. Homeowners cannot monetize extra rooms effectively."
                value={formData.problemPoint3}
                onChange={(e) => handleInputChange('problemPoint3', e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-rose-500"
              />
            </div>
          </div>
        )}

        {/* Step 3: Solution */}
        {currentStep === 3 && (
          <div className="space-y-4 animate-fadeIn">
            <div className="border-b border-slate-800 pb-4">
              <h3 className="text-lg font-bold text-white">The Breakthrough Solution</h3>
              <p className="text-xs text-slate-400">Describe how your product solves each of the pain points above.</p>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">Core Solution Statement</label>
              <input
                type="text"
                placeholder="e.g. A P2P web platform where hosts rent out spare space to travelers."
                value={formData.solutionDetails}
                onChange={(e) => handleInputChange('solutionDetails', e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-rose-500"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">Benefit 1</label>
                <input
                  type="text"
                  placeholder="Save money for travelers"
                  value={formData.solutionPoint1}
                  onChange={(e) => handleInputChange('solutionPoint1', e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-xs text-white"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">Benefit 2</label>
                <input
                  type="text"
                  placeholder="Make money for hosts"
                  value={formData.solutionPoint2}
                  onChange={(e) => handleInputChange('solutionPoint2', e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-xs text-white"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">Benefit 3</label>
                <input
                  type="text"
                  placeholder="Experience authentic culture"
                  value={formData.solutionPoint3}
                  onChange={(e) => handleInputChange('solutionPoint3', e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-xs text-white"
                />
              </div>
            </div>
          </div>
        )}

        {/* Step 4: TAM / SAM / SOM Market Size */}
        {currentStep === 4 && (
          <div className="space-y-4 animate-fadeIn">
            <div className="border-b border-slate-800 pb-4">
              <h3 className="text-lg font-bold text-white">Market Size (TAM / SAM / SOM)</h3>
              <p className="text-xs text-slate-400">Specify your addressable market numbers for slide 5.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 bg-slate-950 border border-slate-800 rounded-2xl">
                <span className="text-xs font-bold text-rose-400 uppercase tracking-wider block mb-1">TAM (Total Market)</span>
                <input
                  type="text"
                  placeholder="e.g. $1.9B Trips Booked"
                  value={formData.tamAmount}
                  onChange={(e) => handleInputChange('tamAmount', e.target.value)}
                  className="w-full bg-slate-900 border border-slate-800 rounded-lg p-2.5 text-sm text-white font-bold mb-2"
                />
                <p className="text-[11px] text-slate-500">Worldwide total industry volume.</p>
              </div>

              <div className="p-4 bg-slate-950 border border-slate-800 rounded-2xl">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block mb-1">SAM (Serviceable Market)</span>
                <input
                  type="text"
                  placeholder="e.g. $560M Budget Online"
                  value={formData.samAmount}
                  onChange={(e) => handleInputChange('samAmount', e.target.value)}
                  className="w-full bg-slate-900 border border-slate-800 rounded-lg p-2.5 text-sm text-white font-bold mb-2"
                />
                <p className="text-[11px] text-slate-500">Budget & P2P online share.</p>
              </div>

              <div className="p-4 bg-slate-950 border border-slate-800 rounded-2xl">
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block mb-1">SOM (Target Share)</span>
                <input
                  type="text"
                  placeholder="e.g. $84M Goal"
                  value={formData.somAmount}
                  onChange={(e) => handleInputChange('somAmount', e.target.value)}
                  className="w-full bg-slate-900 border border-slate-800 rounded-lg p-2.5 text-sm text-white font-bold mb-2"
                />
                <p className="text-[11px] text-slate-500">Achievable market share in 3 yrs.</p>
              </div>
            </div>
          </div>
        )}

        {/* Step 5: Product & Features */}
        {currentStep === 5 && (
          <div className="space-y-4 animate-fadeIn">
            <div className="border-b border-slate-800 pb-4">
              <h3 className="text-lg font-bold text-white">Product & Key Features</h3>
              <p className="text-xs text-slate-400">Describe the 3-step user workflow.</p>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">Product Feature Summary</label>
              <textarea
                rows={3}
                placeholder="e.g. Search by city, review host profiles with verified photos, instant 1-click booking."
                value={formData.productFeatures}
                onChange={(e) => handleInputChange('productFeatures', e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-rose-500"
              />
            </div>
          </div>
        )}

        {/* Step 6: Business Model */}
        {currentStep === 6 && (
          <div className="space-y-4 animate-fadeIn">
            <div className="border-b border-slate-800 pb-4">
              <h3 className="text-lg font-bold text-white">Business Model & Monetization</h3>
              <p className="text-xs text-slate-400">Explain how you charge and generate revenue.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">Monetization Model / Take Rate</label>
                <input
                  type="text"
                  placeholder="e.g. 10% transaction fee per booking"
                  value={formData.businessModel}
                  onChange={(e) => handleInputChange('businessModel', e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-sm text-white"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">Projected Revenue Target</label>
                <input
                  type="text"
                  placeholder="e.g. $200M ARR within 4 years"
                  value={formData.revenueTarget}
                  onChange={(e) => handleInputChange('revenueTarget', e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-sm text-white"
                />
              </div>
            </div>
          </div>
        )}

        {/* Step 7: Market Adoption & GTM */}
        {currentStep === 7 && (
          <div className="space-y-4 animate-fadeIn">
            <div className="border-b border-slate-800 pb-4">
              <h3 className="text-lg font-bold text-white">Market Adoption & GTM Strategy</h3>
              <p className="text-xs text-slate-400">Share your customer acquisition channels & early traction.</p>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">Early Traction / Metrics</label>
              <textarea
                rows={3}
                placeholder="e.g. 630,000+ Couchsurfing users, 17,000 NY Craigslist listings, 500+ waitlist founders."
                value={formData.tractionDetails}
                onChange={(e) => handleInputChange('tractionDetails', e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-sm text-white"
              />
            </div>
          </div>
        )}

        {/* Step 8: Competitors & Moat */}
        {currentStep === 8 && (
          <div className="space-y-4 animate-fadeIn">
            <div className="border-b border-slate-800 pb-4">
              <h3 className="text-lg font-bold text-white">Competitive Advantage & Moat</h3>
              <p className="text-xs text-slate-400">Highlight who you compete with and your secret sauce.</p>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">Main Competitors</label>
              <input
                type="text"
                placeholder="e.g. Hotels, Craigslist, Couchsurfing"
                value={formData.competitorsList}
                onChange={(e) => handleInputChange('competitorsList', e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-sm text-white"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">Unfair Advantage / Moat</label>
              <textarea
                rows={2}
                placeholder="e.g. First P2P booking platform with host identity verification & reviews."
                value={formData.unfairAdvantage}
                onChange={(e) => handleInputChange('unfairAdvantage', e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-sm text-white"
              />
            </div>
          </div>
        )}

        {/* Step 9: Team */}
        {currentStep === 9 && (
          <div className="space-y-4 animate-fadeIn">
            <div className="border-b border-slate-800 pb-4">
              <h3 className="text-lg font-bold text-white">Team & Leadership</h3>
              <p className="text-xs text-slate-400">Add key founders and their backgrounds.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-slate-950 border border-slate-800 rounded-2xl space-y-2">
                <span className="text-xs font-bold text-rose-400 uppercase">Founder 1</span>
                <input
                  type="text"
                  placeholder="Brian Chesky"
                  value={formData.founder1Name}
                  onChange={(e) => handleInputChange('founder1Name', e.target.value)}
                  className="w-full bg-slate-900 border border-slate-800 rounded-lg p-2 text-xs text-white font-bold"
                />
                <input
                  type="text"
                  placeholder="Co-Founder & CEO"
                  value={formData.founder1Role}
                  onChange={(e) => handleInputChange('founder1Role', e.target.value)}
                  className="w-full bg-slate-900 border border-slate-800 rounded-lg p-2 text-xs text-slate-300"
                />
                <textarea
                  rows={2}
                  placeholder="RISD Industrial Design graduate. Lead brand."
                  value={formData.founder1Bio}
                  onChange={(e) => handleInputChange('founder1Bio', e.target.value)}
                  className="w-full bg-slate-900 border border-slate-800 rounded-lg p-2 text-xs text-slate-400"
                />
              </div>

              <div className="p-4 bg-slate-950 border border-slate-800 rounded-2xl space-y-2">
                <span className="text-xs font-bold text-rose-400 uppercase">Founder 2</span>
                <input
                  type="text"
                  placeholder="Joe Gebbia"
                  value={formData.founder2Name}
                  onChange={(e) => handleInputChange('founder2Name', e.target.value)}
                  className="w-full bg-slate-900 border border-slate-800 rounded-lg p-2 text-xs text-white font-bold"
                />
                <input
                  type="text"
                  placeholder="Co-Founder & CPO"
                  value={formData.founder2Role}
                  onChange={(e) => handleInputChange('founder2Role', e.target.value)}
                  className="w-full bg-slate-900 border border-slate-800 rounded-lg p-2 text-xs text-slate-300"
                />
                <textarea
                  rows={2}
                  placeholder="RISD Graphic & Industrial Design double major."
                  value={formData.founder2Bio}
                  onChange={(e) => handleInputChange('founder2Bio', e.target.value)}
                  className="w-full bg-slate-900 border border-slate-800 rounded-lg p-2 text-xs text-slate-400"
                />
              </div>
            </div>
          </div>
        )}

        {/* Step 10: Ask & Expansion */}
        {currentStep === 10 && (
          <div className="space-y-4 animate-fadeIn">
            <div className="border-b border-slate-800 pb-4">
              <h3 className="text-lg font-bold text-white">Fundraising Ask & Expansion Plan</h3>
              <p className="text-xs text-slate-400">Specify target raise amount, equity, and visual theme style.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">Target Raise Amount ($)</label>
                <input
                  type="text"
                  placeholder="e.g. $500,000"
                  value={formData.targetRaise}
                  onChange={(e) => handleInputChange('targetRaise', e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-sm text-white font-bold"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">Equity Offered / Valuation</label>
                <input
                  type="text"
                  placeholder="e.g. 15% Equity"
                  value={formData.equityOffered}
                  onChange={(e) => handleInputChange('equityOffered', e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-sm text-white"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">Visual Design Theme</label>
              <div className="grid grid-cols-3 gap-3">
                <button
                  type="button"
                  onClick={() => handleInputChange('selectedTheme', 'airbnb')}
                  className={`p-3 rounded-xl border text-center transition-all ${
                    formData.selectedTheme === 'airbnb'
                      ? 'bg-rose-500/10 border-rose-500 text-white font-bold'
                      : 'bg-slate-950 border-slate-800 text-slate-400'
                  }`}
                >
                  <span className="block text-xs">Airbnb Minimalist</span>
                  <span className="text-[10px] text-slate-500">Clean White & Red</span>
                </button>

                <button
                  type="button"
                  onClick={() => handleInputChange('selectedTheme', 'modern_dark')}
                  className={`p-3 rounded-xl border text-center transition-all ${
                    formData.selectedTheme === 'modern_dark'
                      ? 'bg-rose-500/10 border-rose-500 text-white font-bold'
                      : 'bg-slate-950 border-slate-800 text-slate-400'
                  }`}
                >
                  <span className="block text-xs">Tech Modern</span>
                  <span className="text-[10px] text-slate-500">Dark Slate & Rose</span>
                </button>

                <button
                  type="button"
                  onClick={() => handleInputChange('selectedTheme', 'sequoia')}
                  className={`p-3 rounded-xl border text-center transition-all ${
                    formData.selectedTheme === 'sequoia'
                      ? 'bg-emerald-500/10 border-emerald-500 text-white font-bold'
                      : 'bg-slate-950 border-slate-800 text-slate-400'
                  }`}
                >
                  <span className="block text-xs">Sequoia Clean</span>
                  <span className="text-[10px] text-slate-500">Cream & Emerald</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Wizard Footer Navigation Controls */}
        <div className="flex items-center justify-between pt-6 border-t border-slate-800">
          <button
            type="button"
            disabled={currentStep === 1 || isGenerating}
            onClick={() => setCurrentStep((prev) => Math.max(prev - 1, 1))}
            className="flex items-center gap-2 px-4 py-2.5 bg-slate-800 hover:bg-slate-700 disabled:opacity-40 rounded-xl text-xs font-semibold text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Previous Step</span>
          </button>

          {currentStep < steps.length ? (
            <button
              type="button"
              onClick={() => setCurrentStep((prev) => Math.min(prev + 1, steps.length))}
              className="flex items-center gap-2 px-6 py-2.5 bg-rose-500 hover:bg-rose-600 text-white rounded-xl text-xs font-semibold shadow-lg shadow-rose-500/20 transition-all hover:scale-[1.02]"
            >
              <span>Next Step ({currentStep + 1}/{steps.length})</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              type="button"
              disabled={isGenerating}
              onClick={handleGenerateDeck}
              className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-rose-500 via-rose-600 to-amber-500 hover:from-rose-600 hover:to-amber-600 text-white font-extrabold rounded-2xl shadow-xl shadow-rose-500/30 transition-all hover:scale-105"
            >
              {isGenerating ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Generating Pitch Deck with AI...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-5 h-5 fill-white" />
                  <span>Generate Pitch Deck</span>
                </>
              )}
            </button>
          )}
        </div>

      </div>
    </div>
  );
};
