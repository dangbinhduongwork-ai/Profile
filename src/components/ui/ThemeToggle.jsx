import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';

export function ThemeToggle({ className = '' }) {
  const { toggleTheme, isDark } = useTheme();

  return (
    <div className={`flex items-center gap-1.5 sm:gap-2 text-muted ${className}`}>
      {/* Sun icon: hidden on mobile < 560px */}
      <Sun
        className="hidden min-[560px]:block w-4 h-4 transition-colors hover:text-accent flex-none"
        aria-hidden="true"
      />

      {/* Switch button with minimum 44px touch target */}
      <button
        id="theme-toggle"
        type="button"
        onClick={toggleTheme}
        aria-label="Đổi giao diện sáng/tối"
        aria-pressed={isDark}
        title={isDark ? 'Chuyển sang giao diện sáng' : 'Chuyển sang giao diện tối'}
        className="relative flex items-center justify-center min-w-[44px] min-h-[44px] p-1 focus:outline-none cursor-pointer"
      >
        <span className="w-11 h-6 rounded-full border border-border bg-surface2 relative block p-0.5 transition-colors">
          <span
            className={`block w-4.5 h-4.5 rounded-full bg-accent transition-transform duration-250 ease-in-out ${
              isDark ? 'translate-x-5' : 'translate-x-0'
            }`}
          />
        </span>
      </button>

      {/* Moon icon: hidden on mobile < 560px */}
      <Moon
        className="hidden min-[560px]:block w-4 h-4 transition-colors hover:text-accent flex-none"
        aria-hidden="true"
      />
    </div>
  );
}

export default ThemeToggle;
