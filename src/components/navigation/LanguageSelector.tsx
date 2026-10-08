import React from 'react';
import { Globe } from 'lucide-react';
import { SUPPORTED_LANGUAGES } from '@/lib/constants';
import { useLanguage } from '@/hooks/useLanguage';
import { Language } from '@/types/content';

interface LanguageSelectorProps {
  compact?: boolean;
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({ compact = false }) => {
  const { currentLanguage, setLanguage } = useLanguage();

  return (
    <div className="relative inline-flex items-center gap-1.5" role="region" aria-label="Language selection">
      <Globe className="w-4 h-4 text-primary-200" aria-hidden="true" />
      <label htmlFor="language-select" className="sr-only">
        Select Interface Language
      </label>
      <select
        id="language-select"
        value={currentLanguage}
        onChange={(e) => setLanguage(e.target.value as Language)}
        className={`bg-primary-950/40 text-white border border-primary-700/60 rounded-md text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-amber-400 cursor-pointer ${
          compact ? 'py-1 px-2' : 'py-1.5 px-2.5'
        }`}
      >
        {SUPPORTED_LANGUAGES.map((lang) => (
          <option key={lang.code} value={lang.code} className="bg-slate-900 text-white">
            {lang.nativeName} ({lang.name})
          </option>
        ))}
      </select>
    </div>
  );
};
