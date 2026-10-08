import React, { createContext, useState, useEffect, useCallback } from 'react';
import { Language } from '@/types/content';
import { hindiTranslations } from '@/content/hi/translations';
import { marathiTranslations } from '@/content/mr/translations';

interface LanguageContextType {
  currentLanguage: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const AppProviders: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem('nari_suraksha_lang');
      if (saved === 'hi' || saved === 'mr' || saved === 'en') {
        return saved;
      }
    } catch {
      // fallback
    }
    return 'en';
  });

  useEffect(() => {
    try {
      localStorage.setItem('nari_suraksha_lang', currentLanguage);
      document.documentElement.lang = currentLanguage;
    } catch (e) {
      console.warn('Unable to persist language to localStorage', e);
    }
  }, [currentLanguage]);

  const t = useCallback(
    (key: string): string => {
      if (currentLanguage === 'hi' && hindiTranslations[key]) {
        return hindiTranslations[key];
      }
      if (currentLanguage === 'mr' && marathiTranslations[key]) {
        return marathiTranslations[key];
      }
      // Default to key or leave to caller default
      return '';
    },
    [currentLanguage]
  );

  return (
    <LanguageContext.Provider value={{ currentLanguage, setLanguage: setCurrentLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
