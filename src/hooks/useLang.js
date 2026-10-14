import { useState, useEffect } from 'react';
import { translations } from '../data/translations';

/**
 * Hook useLang:
 * Provides current language state, translation dictionary `t`, and toggle controls.
 * Supports 'en' and 'vi'. Default is 'en'.
 */
export function useLang() {
  const [lang, setLangState] = useState(() => {
    if (typeof window === 'undefined') return 'en';
    try {
      const params = new URLSearchParams(window.location.search);
      const urlLang = params.get('lang');
      if (urlLang === 'vi' || urlLang === 'en') return urlLang;

      const saved = localStorage.getItem('lang');
      if (saved === 'vi' || saved === 'en') return saved;
    } catch {
      // Ignore storage/URL errors
    }
    return 'en';
  });

  const setLang = (nextLang) => {
    const valid = nextLang === 'vi' ? 'vi' : 'en';
    setLangState(valid);
    try {
      localStorage.setItem('lang', valid);
      if (typeof document !== 'undefined') {
        document.documentElement.lang = valid;
      }
      window.dispatchEvent(new CustomEvent('langchange', { detail: valid }));
    } catch {
      // Ignore storage errors
    }
  };

  const toggleLang = () => {
    setLang(lang === 'en' ? 'vi' : 'en');
  };

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = lang;
    }
    const handleLangChange = (e) => {
      if (e.detail && (e.detail === 'vi' || e.detail === 'en')) {
        setLangState(e.detail);
      }
    };
    window.addEventListener('langchange', handleLangChange);
    return () => window.removeEventListener('langchange', handleLangChange);
  }, [lang]);

  const t = translations[lang] || translations.en;

  return {
    lang,
    setLang,
    toggleLang,
    isEn: lang === 'en',
    t,
  };
}

export default useLang;
