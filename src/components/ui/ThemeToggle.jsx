import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';

/**
 * ThemeToggle component:
 * - Unified interactive pill button with full 44px touch target
 * - Sun and Moon icons visually indicate active mode with glow effects
 * - Smooth sliding thumb with miniature icon inside
 * - Clicking anywhere on the component toggles theme
 */
export function ThemeToggle({ className = '' }) {
  const { toggleTheme, isDark } = useTheme();

  return (
    <button
      id="theme-toggle"
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      title={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      className={`group relative inline-flex items-center gap-1.5 px-2 py-1.5 rounded-xl border border-border bg-surface2 hover:border-accent/60 transition-all duration-200 cursor-pointer min-h-[44px] select-none focus:outline-none focus:ring-1 focus:ring-accent ${className}`}
    >
      {/* Sun icon */}
      <Sun
        className={`w-4 h-4 transition-all duration-200 flex-none ${
          !isDark
            ? 'text-amber-500 scale-110 drop-shadow-[0_0_8px_rgba(245,158,11,0.5)]'
            : 'text-muted/50 group-hover:text-muted'
        }`}
        aria-hidden="true"
      />

      {/* Switch Track */}
      <div className="w-10 h-5 rounded-full bg-border/70 p-0.5 relative transition-colors duration-200 flex items-center">
        {/* Sliding Thumb with micro icon */}
        <div
          className={`w-4 h-4 rounded-full bg-accent shadow-sm transition-transform duration-200 ease-out flex items-center justify-center ${
            isDark ? 'translate-x-5' : 'translate-x-0'
          }`}
        >
          {isDark ? (
            <Moon className="w-2.5 h-2.5 text-white stroke-[2.5]" />
          ) : (
            <Sun className="w-2.5 h-2.5 text-white stroke-[2.5]" />
          )}
        </div>
      </div>

      {/* Moon icon */}
      <Moon
        className={`w-4 h-4 transition-all duration-200 flex-none ${
          isDark
            ? 'text-accent scale-110 drop-shadow-[0_0_8px_var(--glow)]'
            : 'text-muted/50 group-hover:text-muted'
        }`}
        aria-hidden="true"
      />
    </button>
  );
}

export default ThemeToggle;
