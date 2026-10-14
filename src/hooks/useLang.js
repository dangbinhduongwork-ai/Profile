import { useEffect } from 'react';
import { translations } from '../data/translations';

/**
 * Hook useLang:
 * The entire portfolio is now in English.
 * Sets document.documentElement.lang to 'en' and provides English translations object `t`.
 */
export function useLang() {
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = 'en';
    }
    try {
      localStorage.setItem('lang', 'en');
    } catch {
      // Ignore localStorage errors
    }
  }, []);

  const t = translations.en || translations.vi;

  return {
    lang: 'en',
    setLang: () => {},
    toggleLang: () => {},
    isEn: true,
    t,
  };
}

export default useLang;
