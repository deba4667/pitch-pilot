import React from 'react';
import { Printer, Download, ArrowLeft } from 'lucide-react';
import { SlideRenderer } from './SlideRenderer';

export const PDFExporter = ({ deck, onBack }) => {
  if (!deck) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6">
      {/* Top Header Bar - hidden when printing */}
      <div className="no-print max-w-7xl mx-auto flex items-center justify-between mb-8 p-4 bg-slate-900 border border-slate-800 rounded-2xl">
        <div className="flex items-center gap-4">
          <button
            onClick={onBack}
            className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 rounded-xl text-sm font-semibold transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Editor</span>
          </button>
          <div>
            <h2 className="text-lg font-bold">{deck.title} — Print & PDF Export</h2>
            <p className="text-xs text-slate-400">{deck.slides.length} Slides • {deck.theme.toUpperCase()} Theme</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handlePrint}
            className="flex items-center gap-2 px-6 py-2.5 bg-rose-500 hover:bg-rose-600 text-white rounded-xl text-sm font-semibold shadow-lg shadow-rose-500/25 transition-all"
          >
            <Printer className="w-4 h-4" />
            <span>Save as PDF / Print</span>
          </button>
        </div>
      </div>

      {/* Print Instructions Banner */}
      <div className="no-print max-w-7xl mx-auto mb-8 p-4 bg-rose-500/10 border border-rose-500/20 text-rose-300 rounded-2xl text-xs flex items-center justify-between">
        <span>💡 <strong>Tip for best PDF result:</strong> In the print dialog, select <strong>Destination: Save as PDF</strong>, enable <strong>Background graphics</strong>, and set Layout to <strong>Landscape</strong>.</span>
      </div>

      {/* Stacked Slides for PDF / Print Output */}
      <div className="max-w-5xl mx-auto space-y-12 print:space-y-0 print:max-w-none">
        {deck.slides.map((slide, idx) => (
          <div key={slide.id || idx} className="print-page w-full shadow-2xl rounded-2xl overflow-hidden print:rounded-none print:shadow-none">
            <SlideRenderer slide={slide} theme={deck.theme || 'airbnb'} />
          </div>
        ))}
      </div>
    </div>
  );
};
