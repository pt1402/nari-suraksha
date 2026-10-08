import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from '@/locales/en/translation.json';
import hiTranslation from '@/locales/hi/translation.json';
import mrTranslation from '@/locales/mr/translation.json';

const getInitialLanguage = (): string => {
  try {
    if (typeof localStorage !== 'undefined') {
      const saved = localStorage.getItem('nari_suraksha_lang');
      if (saved === 'hi' || saved === 'mr' || saved === 'en') {
        return saved;
      }
    }
  } catch {
    // fallback
  }
  return 'en';
};

const initialLang = getInitialLanguage();

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: enTranslation },
    hi: { translation: hiTranslation },
    mr: { translation: mrTranslation },
  },
  lng: initialLang,
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

i18n.on('languageChanged', (lng) => {
  try {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('nari_suraksha_lang', lng);
    }
    if (typeof document !== 'undefined') {
      document.documentElement.lang = lng;
    }
  } catch (e) {
    console.warn('Unable to persist language to localStorage', e);
  }
});

if (typeof document !== 'undefined') {
  document.documentElement.lang = initialLang;
}

export default i18n;
