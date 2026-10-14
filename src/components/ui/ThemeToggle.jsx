import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';

export function ThemeToggle({ className = '' }) {
  const { theme, toggleTheme, isDark } = useTheme();

  return (
    <div className={`flex items-center gap-2 text-muted ${className}`}>
      <Sun className="w-4 h-4 transition-colors hover:text-accent" aria-hidden="true" />
      <button
        id="theme-toggle"
        type="button"
        onClick={toggleTheme}
        aria-label="Đổi giao diện sáng/tối"
        aria-pressed={isDark}
        title={isDark ? 'Chuyển sang giao diện sáng' : 'Chuyển sang giao diện tối'}
        className="w-12 h-6.5 rounded-full border border-border bg-surface2 relative cursor-pointer p-0.5 transition-colors focus:outline-none focus:ring-2 focus:ring-accent"
      >
        <span
          className={`block w-4.5 h-4.5 rounded-full bg-accent transition-transform duration-250 ease-in-out ${
            isDark ? 'translate-x-5.5' : 'translate-x-0.5'
          }`}
        />
      </button>
      <Moon className="w-4 h-4 transition-colors hover:text-accent" aria-hidden="true" />
    </div>
  );
}

export default ThemeToggle;
