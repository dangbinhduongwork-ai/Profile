import { useState, useEffect, useCallback } from 'react';

/**
 * useTheme Hook:
 * - Default based on prefers-color-scheme (dark if prefers dark or no preference; light if prefers light)
 * - Allows user to change theme (setTheme, toggleTheme)
 * - Persists theme to localStorage under 'theme'
 * - Adds/removes 'dark' class on <html> element
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

  const setTheme = useCallback((newTheme) => {
    setThemeState(newTheme);
    try {
      localStorage.setItem('theme', newTheme);
    } catch (e) {
      console.warn('Failed to save theme to localStorage:', e);
    }
  }, []);

  const toggleTheme = useCallback(() => {
    setThemeState((prev) => {
      const nextTheme = prev === 'dark' ? 'light' : 'dark';
      try {
        localStorage.setItem('theme', nextTheme);
      } catch (e) {
        console.warn('Failed to save theme to localStorage:', e);
      }
      return nextTheme;
    });
  }, []);

  // Sync class on <html> whenever theme changes
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  // Listen to prefers-color-scheme changes if user hasn't explicitly chosen in localStorage
  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const handleMediaChange = (e) => {
      try {
        const saved = localStorage.getItem('theme');
        if (!saved) {
          const nextTheme = e.matches ? 'dark' : 'light';
          setThemeState(nextTheme);
        }
      } catch {
        // Ignore localStorage access issues
      }
    };

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleMediaChange);
      return () => mediaQuery.removeEventListener('change', handleMediaChange);
    } else if (mediaQuery.addListener) {
      mediaQuery.addListener(handleMediaChange);
      return () => mediaQuery.removeListener(handleMediaChange);
    }
  }, []);

  return {
    theme,
    setTheme,
    toggleTheme,
    isDark: theme === 'dark',
  };
}

export default useTheme;
