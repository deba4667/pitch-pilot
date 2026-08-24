import React from 'react';
import { Sparkles, Check, DollarSign, Users, TrendingUp, Target, Shield, CheckCircle2, XCircle } from 'lucide-react';

export const SlideRenderer = ({ slide, theme = 'airbnb', isEditable = false, onEdit = () => {} }) => {
  if (!slide) return null;

  // Theme styling configurations
  const themeStyles = {
    airbnb: {
      bg: 'bg-white text-slate-900',
      headerBg: 'bg-slate-50 border-b border-slate-100',
      accentText: 'text-[#FF385C]',
      accentBg: 'bg-[#FF385C]',
      accentBorder: 'border-[#FF385C]',
      cardBg: 'bg-slate-50 border border-slate-200/80',
      cardHover: 'hover:border-[#FF385C]/40',
      pillBg: 'bg-rose-50 text-[#FF385C] border border-rose-100',
      subText: 'text-slate-600',
      badgeBg: 'bg-slate-900 text-white'
    },
    modern_dark: {
      bg: 'bg-slate-950 text-slate-100',
      headerBg: 'bg-slate-900/60 border-b border-slate-800',
      accentText: 'text-rose-400',
      accentBg: 'bg-rose-500',
      accentBorder: 'border-rose-500',
      cardBg: 'bg-slate-900/80 border border-slate-800',
      cardHover: 'hover:border-rose-500/40',
      pillBg: 'bg-rose-500/10 text-rose-400 border border-rose-500/20',
      subText: 'text-slate-400',
      badgeBg: 'bg-rose-500/20 text-rose-300'
    },
    sequoia: {
      bg: 'bg-[#FBF9F5] text-slate-900',
      headerBg: 'bg-[#F5F1E8] border-b border-stone-200',
      accentText: 'text-emerald-700',
      accentBg: 'bg-emerald-700',
      accentBorder: 'border-emerald-700',
      cardBg: 'bg-white border border-stone-200',
      cardHover: 'hover:border-emerald-700/40',
      pillBg: 'bg-emerald-50 text-emerald-800 border border-emerald-200',
      subText: 'text-stone-600',
      badgeBg: 'bg-emerald-900 text-white'
    }
  };

  const t = themeStyles[theme] || themeStyles.airbnb;

  return (
    <div className={`w-full h-full min-h-[520px] aspect-[16/9] rounded-2xl ${t.bg} shadow-2xl flex flex-col overflow-hidden relative border border-slate-200/20 select-none`}>
      
      {/* Slide Header */}
      <div className={`px-8 py-5 ${t.headerBg} flex items-center justify-between`}>
        <div className="flex items-center gap-3">
          <span className={`px-2.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${t.pillBg}`}>
            {slide.type ? slide.type.replace('_', ' ') : 'Slide'}
          </span>
          <span className={`text-xs font-medium ${t.subText}`}>Pitch Pilot AI</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono font-semibold opacity-60">Airbnb Minimalist Deck</span>
        </div>
      </div>

      {/* Slide Content Area */}
      <div className="flex-1 p-8 sm:p-10 flex flex-col justify-between overflow-y-auto">
        
        {/* Title Slide */}
        {slide.type === 'title' && (
          <div className="h-full flex flex-col justify-center max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className={`w-3 h-3 rounded-full ${t.accentBg}`}></span>
              <span className={`text-sm font-semibold tracking-widest uppercase ${t.accentText}`}>Elevator Hook</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-4 leading-tight">
              {slide.title}
            </h1>
            <p className={`text-xl sm:text-2xl font-medium ${t.subText} mb-6 leading-relaxed`}>
              {slide.subtitle}
            </p>
            {slide.hook && (
              <div className={`p-5 rounded-2xl ${t.cardBg} border-l-4 ${t.accentBorder} mb-8`}>
                <p className="text-base font-medium leading-relaxed">
                  "{slide.hook}"
                </p>
              </div>
            )}
            <div className="flex flex-wrap items-center gap-6 text-sm font-medium pt-4 border-t border-slate-200/40">
              <div>
                <span className="block text-xs opacity-60">Presented By</span>
                <span className="font-bold">{slide.presenter || 'Founders'}</span>
              </div>
              <div>
                <span className="block text-xs opacity-60">Contact</span>
                <span className={`font-bold ${t.accentText}`}>{slide.contact || 'founders@startup.io'}</span>
              </div>
            </div>
          </div>
        )}

        {/* Problem Slide */}
        {slide.type === 'problem' && (
          <div className="h-full flex flex-col justify-between">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-2">
                {slide.title}
              </h2>
              <p className={`text-lg font-medium ${t.subText} mb-8`}>
                {slide.tagline}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-auto">
              {(slide.points || []).map((pt, idx) => (
                <div key={idx} className={`p-6 rounded-2xl ${t.cardBg} ${t.cardHover} transition-all`}>
                  <div className={`w-8 h-8 rounded-xl ${t.pillBg} flex items-center justify-center font-bold text-sm mb-4`}>
                    0{idx + 1}
                  </div>
                  <h3 className="font-bold text-lg mb-2">{pt.label}</h3>
                  <p className={`text-sm ${t.subText} leading-relaxed`}>{pt.desc}</p>
                </div>
              ))}
            </div>

            <div className={`p-4 rounded-xl ${t.pillBg} text-xs font-semibold text-center mt-6`}>
              Result: The current market standard creates high friction, delays, and wasted resources.
            </div>
          </div>
        )}

        {/* Solution Slide */}
        {slide.type === 'solution' && (
          <div className="h-full flex flex-col justify-between">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-2 flex items-center gap-3">
                <span>{slide.title}</span>
                <Sparkles className={`w-6 h-6 ${t.accentText}`} />
              </h2>
              <p className={`text-lg font-medium ${t.subText} mb-8`}>
                {slide.tagline}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-auto">
              {(slide.points || []).map((pt, idx) => (
                <div key={idx} className={`p-6 rounded-2xl ${t.cardBg} border-t-4 ${t.accentBorder} shadow-sm`}>
                  <div className={`w-8 h-8 rounded-full ${t.accentBg} text-white flex items-center justify-center font-bold text-sm mb-4`}>
                    ✓
                  </div>
                  <h3 className="font-bold text-lg mb-2">{pt.label}</h3>
                  <p className={`text-sm ${t.subText} leading-relaxed`}>{pt.desc}</p>
                </div>
              ))}
            </div>

            <div className="text-xs text-center font-medium opacity-70 mt-6">
              "Airbnb Minimalist Framework: Simple, powerful value propositions."
            </div>
          </div>
        )}

        {/* TAM / SAM / SOM Slide */}
        {slide.type === 'tam_sam_som' && (
          <div className="h-full flex flex-col justify-between">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-2">
                {slide.title}
              </h2>
              <p className={`text-lg font-medium ${t.subText} mb-6`}>
                {slide.tagline}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-auto">
              {/* TAM */}
              <div className={`p-6 rounded-2xl ${t.cardBg} text-center relative overflow-hidden group`}>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 block">TAM</span>
                <div className={`text-4xl sm:text-5xl font-black ${t.accentText} my-3`}>
                  {slide.tam?.value || '$10B+'}
                </div>
                <p className={`text-xs font-medium ${t.subText}`}>
                  {slide.tam?.label || 'Total Addressable Market'}
                </p>
              </div>

              {/* SAM */}
              <div className={`p-6 rounded-2xl ${t.cardBg} text-center relative overflow-hidden group border-2 ${t.accentBorder}`}>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 block">SAM</span>
                <div className="text-4xl sm:text-5xl font-black my-3">
                  {slide.sam?.value || '$2.5B'}
                </div>
                <p className={`text-xs font-medium ${t.subText}`}>
                  {slide.sam?.label || 'Serviceable Addressable Market'}
                </p>
              </div>

              {/* SOM */}
              <div className={`p-6 rounded-2xl ${t.cardBg} text-center relative overflow-hidden group`}>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 block">SOM</span>
                <div className={`text-4xl sm:text-5xl font-black ${t.accentText} my-3`}>
                  {slide.som?.value || '$150M'}
                </div>
                <p className={`text-xs font-medium ${t.subText}`}>
                  {slide.som?.label || 'Serviceable Obtainable Market'}
                </p>
              </div>
            </div>

            <div className={`p-4 rounded-xl ${t.cardBg} flex items-center justify-between text-xs font-medium mt-4`}>
              <span>Calculated using bottom-up target pricing & industry volume analysis.</span>
              <span className={`font-bold ${t.accentText}`}>CAGR 24.5% Growth Rate</span>
            </div>
          </div>
        )}

        {/* Product Demo / Showcase Slide */}
        {slide.type === 'product' && (
          <div className="h-full flex flex-col justify-between">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-2">
                {slide.title}
              </h2>
              <p className={`text-lg font-medium ${t.subText} mb-6`}>
                {slide.tagline}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-auto">
              {(slide.features || []).map((feat, idx) => (
                <div key={idx} className={`p-6 rounded-2xl ${t.cardBg} relative`}>
                  <div className={`w-8 h-8 rounded-full ${t.accentBg} text-white flex items-center justify-center font-bold text-xs mb-3`}>
                    Step {feat.step || idx + 1}
                  </div>
                  <h3 className="font-bold text-base mb-2">{feat.title}</h3>
                  <p className={`text-xs ${t.subText} leading-relaxed`}>{feat.desc}</p>
                </div>
              ))}
            </div>

            <div className={`mt-6 p-4 rounded-xl ${t.pillBg} flex items-center justify-center gap-2 text-xs font-semibold`}>
              <CheckCircle2 className="w-4 h-4" />
              <span>Zero training required — friction-free onboarding in under 60 seconds.</span>
            </div>
          </div>
        )}

        {/* Business Model Slide */}
        {slide.type === 'business_model' && (
          <div className="h-full flex flex-col justify-between">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-2">
                {slide.title}
              </h2>
              <p className={`text-lg font-medium ${t.subText} mb-6`}>
                {slide.tagline}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-auto">
              {/* Left Box: Revenue Driver */}
              <div className={`p-8 rounded-3xl ${t.cardBg} flex flex-col justify-center border-l-8 ${t.accentBorder}`}>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Core Revenue Stream</span>
                <div className={`text-5xl font-black ${t.accentText} mb-2`}>
                  {slide.feePercentage || '10% Fee'}
                </div>
                <p className={`text-sm font-semibold mb-4`}>Average Transaction / Recurring Fee</p>
                <div className="space-y-2 text-xs opacity-80 pt-4 border-t border-slate-200/20">
                  <div className="flex justify-between">
                    <span>Target Scale:</span>
                    <span className="font-bold">{slide.projectedBookings || '10M Transactions'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Projected Revenue:</span>
                    <span className="font-bold">{slide.projectedRevenue || '$200M ARR'}</span>
                  </div>
                </div>
              </div>

              {/* Right Box: Unit Economics */}
              <div className="space-y-4 flex flex-col justify-center">
                {(slide.metrics || []).map((m, idx) => (
                  <div key={idx} className={`p-5 rounded-2xl ${t.cardBg}`}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-xs font-bold uppercase text-slate-400">{m.label}</span>
                      <span className={`text-xl font-extrabold ${t.accentText}`}>{m.value}</span>
                    </div>
                    <p className={`text-xs ${t.subText}`}>{m.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Competitive Matrix Slide */}
        {slide.type === 'competitors' && (
          <div className="h-full flex flex-col justify-between">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-2">
                {slide.title}
              </h2>
              <p className={`text-lg font-medium ${t.subText} mb-6`}>
                {slide.tagline}
              </p>
            </div>

            <div className={`rounded-2xl ${t.cardBg} p-4 overflow-x-auto my-auto`}>
              <table className="w-full text-xs text-left">
                <thead>
                  <tr className="border-b border-slate-200/20">
                    <th className="p-3 font-bold">Feature / Capability</th>
                    <th className={`p-3 font-extrabold ${t.accentText} text-sm`}>Our Startup</th>
                    <th className="p-3 font-semibold text-slate-400">Legacy Competitors</th>
                    <th className="p-3 font-semibold text-slate-400">Manual / Agencies</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200/10">
                  {(slide.matrix || []).map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-500/5">
                      <td className="p-3 font-medium">{row.feature}</td>
                      <td className="p-3"><CheckCircle2 className={`w-5 h-5 ${t.accentText}`} /></td>
                      <td className="p-3">{row.hotels ? <Check className="w-4 h-4 text-slate-400" /> : <XCircle className="w-4 h-4 text-slate-400/40" />}</td>
                      <td className="p-3">{row.craigslist ? <Check className="w-4 h-4 text-slate-400" /> : <XCircle className="w-4 h-4 text-slate-400/40" />}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className={`p-4 rounded-xl ${t.pillBg} text-xs font-semibold text-center mt-4`}>
              Key Moat: Proprietary AI design system + rapid investor-formatted narrative generation.
            </div>
          </div>
        )}

        {/* Team Slide */}
        {slide.type === 'team' && (
          <div className="h-full flex flex-col justify-between">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-2">
                {slide.title}
              </h2>
              <p className={`text-lg font-medium ${t.subText} mb-6`}>
                {slide.tagline}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-auto">
              {(slide.members || []).map((mem, idx) => (
                <div key={idx} className={`p-6 rounded-2xl ${t.cardBg} text-center flex flex-col items-center`}>
                  <div className={`w-16 h-16 rounded-full ${t.pillBg} flex items-center justify-center font-extrabold text-xl mb-4 text-rose-500 border-2 ${t.accentBorder}`}>
                    {mem.name ? mem.name.charAt(0) : 'T'}
                  </div>
                  <h3 className="font-extrabold text-lg">{mem.name}</h3>
                  <span className={`text-xs font-bold ${t.accentText} mb-3 block`}>{mem.role}</span>
                  <p className={`text-xs ${t.subText} leading-relaxed`}>{mem.bio}</p>
                </div>
              ))}
            </div>

            <div className="text-xs text-center font-medium opacity-60 mt-4">
              Backed by experienced advisors, founders, and industry veterans.
            </div>
          </div>
        )}

        {/* Ask & Use of Funds Slide */}
        {slide.type === 'ask' && (
          <div className="h-full flex flex-col justify-between">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-2">
                {slide.title}
              </h2>
              <p className={`text-lg font-medium ${t.subText} mb-6`}>
                {slide.tagline}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-auto">
              {/* Highlight Box */}
              <div className={`p-8 rounded-3xl ${t.cardBg} border-2 ${t.accentBorder} flex flex-col justify-center`}>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Target Investment</span>
                <div className={`text-5xl sm:text-6xl font-black ${t.accentText} mb-3`}>
                  {slide.amount || '$500,000'}
                </div>
                <div className="flex items-center gap-4 text-xs font-semibold pt-4 border-t border-slate-200/20">
                  <span className="px-3 py-1 rounded-full bg-slate-900 text-white">{slide.equity || '15% Equity'}</span>
                  <span>{slide.runway || '18 Months Runway'}</span>
                </div>
              </div>

              {/* Use of Funds Breakdown */}
              <div className="space-y-4 flex flex-col justify-center">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Use of Funds Allocation</h4>
                {(slide.breakdown || []).map((b, idx) => (
                  <div key={idx} className={`p-4 rounded-xl ${t.cardBg}`}>
                    <div className="flex justify-between items-center text-xs font-bold mb-1">
                      <span>{b.category}</span>
                      <span className={t.accentText}>{b.percentage}</span>
                    </div>
                    <div className="w-full bg-slate-200/20 rounded-full h-2 overflow-hidden">
                      <div className={`h-full ${t.accentBg}`} style={{ width: b.percentage }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className={`p-4 rounded-xl ${t.pillBg} text-xs font-semibold text-center mt-4`}>
              Milestone Goal: Reach 80,000 active transactions & scale to $2M ARR within 12 months.
            </div>
          </div>
        )}

        {/* Fallback layout for any other slide type */}
        {!['title', 'problem', 'solution', 'tam_sam_som', 'product', 'business_model', 'competitors', 'team', 'ask'].includes(slide.type) && (
          <div className="h-full flex flex-col justify-between">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-2">
                {slide.title}
              </h2>
              <p className={`text-lg font-medium ${t.subText} mb-6`}>
                {slide.tagline}
              </p>
            </div>

            {slide.channels && (
              <div className="space-y-4 my-auto">
                {slide.channels.map((ch, idx) => (
                  <div key={idx} className={`p-5 rounded-2xl ${t.cardBg} border-l-4 ${t.accentBorder}`}>
                    <h3 className="font-bold text-base mb-1">{ch.title}</h3>
                    <p className={`text-xs ${t.subText}`}>{ch.detail}</p>
                  </div>
                ))}
              </div>
            )}

            {slide.milestones && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-auto">
                {slide.milestones.map((ms, idx) => (
                  <div key={idx} className={`p-6 rounded-2xl ${t.cardBg}`}>
                    <span className={`text-xs font-bold ${t.accentText} uppercase block mb-2`}>{ms.phase}</span>
                    <p className="text-sm font-semibold">{ms.goal}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
};
