import React, { useState, useEffect } from 'react';
import { Type } from 'lucide-react';

export const FontSizeAdjuster: React.FC = () => {
  const [scale, setScale] = useState<number>(() => {
    const saved = localStorage.getItem('nari_font_scale');
    return saved ? Number(saved) : 100;
  });

  useEffect(() => {
    document.documentElement.style.fontSize = `${(scale / 100) * 16}px`;
    localStorage.setItem('nari_font_scale', scale.toString());
  }, [scale]);

  const increase = () => setScale((prev) => Math.min(prev + 10, 130));
  const decrease = () => setScale((prev) => Math.max(prev - 10, 90));
  const reset = () => setScale(100);

  return (
    <div className="inline-flex items-center gap-1 bg-primary-950/20 px-2 py-1 rounded-md text-xs border border-primary-700/30 text-slate-100" role="group" aria-label="Text size adjustments">
      <Type className="w-3.5 h-3.5 text-primary-200" aria-hidden="true" />
      <span className="sr-only">Font size:</span>
      <button
        onClick={decrease}
        aria-label="Decrease font size"
        className="px-1.5 py-0.5 hover:bg-white/10 rounded transition focus:outline-none focus:ring-1 focus:ring-amber-400"
        title="Decrease text size"
      >
        A-
      </button>
      <button
        onClick={reset}
        aria-label="Reset font size to 100%"
        className="px-1.5 py-0.5 hover:bg-white/10 rounded font-medium transition focus:outline-none focus:ring-1 focus:ring-amber-400"
        title="Reset text size"
      >
        A
      </button>
      <button
        onClick={increase}
        aria-label="Increase font size"
        className="px-1.5 py-0.5 hover:bg-white/10 rounded font-bold transition focus:outline-none focus:ring-1 focus:ring-amber-400"
        title="Increase text size"
      >
        A+
      </button>
    </div>
  );
};
