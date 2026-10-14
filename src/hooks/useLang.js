import { useState, useEffect, useCallback } from 'react';
import { translations } from '../data/translations';

/**
 * Hook useLang:
 * Manages language state (Vietnamese 'vi' / English 'en')
 * - Defaults to 'vi'
 * - Persists to localStorage under 'lang'
 * - Updates document.documentElement.lang
 * - Returns active translations object t
 */
export function useLang() {
  const [lang, setLangState] = useState(() => {
    if (typeof window === 'undefined') return 'vi';
    try {
      const saved = localStorage.getItem('lang');
      if (saved === 'vi' || saved === 'en') return saved;
    } catch {
      // Ignore localStorage read errors
    }
    return 'vi';
  });

  const setLang = useCallback((newLang) => {
    setLangState(newLang);
    try {
      localStorage.setItem('lang', newLang);
      if (typeof document !== 'undefined') {
        document.documentElement.lang = newLang;
      }
    } catch (e) {
      console.warn('Could not save language to localStorage:', e);
    }
  }, []);

  const toggleLang = useCallback(() => {
    setLang(lang === 'vi' ? 'en' : 'vi');
  }, [lang, setLang]);

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = lang;
    }
  }, [lang]);

  const t = translations[lang] || translations.vi;

  return {
    lang,
    setLang,
    toggleLang,
    isEn: lang === 'en',
    t,
  };
}

export default useLang;
