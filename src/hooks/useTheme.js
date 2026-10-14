import { useState, useEffect, useCallback } from 'react';

/**
 * useTheme Hook:
 * - Default based on prefers-color-scheme / localStorage ('dark' or 'light')
 * - Allows user to change theme (setTheme, toggleTheme)
 * - Persists theme to localStorage under 'theme'
 * - Adds/removes 'dark' class on <html> element
 * - Dispatches 'theme-change' custom event to keep all components in sync
 */
export function useTheme() {
  const [theme, setThemeState] = useState(() => {
    if (typeof window === 'undefined') return 'dark';
    try {
      const saved = localStorage.getItem('theme');
      if (saved === 'dark' || saved === 'light') {
        return saved;
      }
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
        return 'light';
      }
      return 'dark';
    } catch {
      return 'dark';
    }
  });

  const applyTheme = useCallback((newTheme) => {
    setThemeState(newTheme);
    try {
      localStorage.setItem('theme', newTheme);
      const root = document.documentElement;
      if (newTheme === 'dark') {
        root.classList.add('dark');
      } else {
        root.classList.remove('dark');
      }
      window.dispatchEvent(new CustomEvent('theme-change', { detail: newTheme }));
    } catch (e) {
      console.warn('Failed to save theme:', e);
    }
  }, []);

  const setTheme = useCallback((newTheme) => {
    applyTheme(newTheme);
  }, [applyTheme]);

  const toggleTheme = useCallback(() => {
    setThemeState((prev) => {
      const nextTheme = prev === 'dark' ? 'light' : 'dark';
      applyTheme(nextTheme);
      return nextTheme;
    });
  }, [applyTheme]);

  // Sync with custom event across instances
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleThemeChange = (e) => {
      if (e.detail && (e.detail === 'dark' || e.detail === 'light')) {
        setThemeState(e.detail);
      }
    };

    window.addEventListener('theme-change', handleThemeChange);
    return () => window.removeEventListener('theme-change', handleThemeChange);
  }, []);

  // Sync initial <html> class on mount
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  return {
    theme,
    setTheme,
    toggleTheme,
    isDark: theme === 'dark',
  };
}

export default useTheme;
