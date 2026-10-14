import React, { useState, useRef, useEffect } from 'react';
import {
  Sparkles,
  Flower2,
  Sun,
  Leaf,
  Snowflake,
  CircleOff,
  ChevronDown,
} from 'lucide-react';
import { useSeason } from '../../hooks/useSeason';
import { useLang } from '../../hooks/useLang';

const SEASON_OPTIONS = [
  { id: 'auto', icon: Sparkles },
  { id: 'spring', icon: Flower2 },
  { id: 'summer', icon: Sun },
  { id: 'autumn', icon: Leaf },
  { id: 'winter', icon: Snowflake },
  { id: 'none', icon: CircleOff },
];

export function SeasonMenu({ className = '' }) {
  const { visitorChoice, setSeasonChoice, allowVisitorSwitch } = useSeason();
  const { t } = useLang();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  // Close when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
        document.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [isOpen]);

  if (!allowVisitorSwitch) return null;

  const activeOption =
    SEASON_OPTIONS.find((opt) => opt.id === visitorChoice) || SEASON_OPTIONS[0];
  const ActiveIcon = activeOption.icon;
  const activeLabel = t.seasons?.[activeOption.id] || activeOption.id;

  return (
    <div ref={menuRef} className={`relative inline-block ${className}`}>
      {/* Trigger Button (min-h 44px touch target) */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-label={t.seasons?.ariaLabel || 'Select seasonal effect'}
        title={t.seasons?.ariaLabel || 'Seasonal effect'}
        className="min-h-[44px] inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-border bg-surface2 hover:border-accent/60 text-xs font-medium text-text transition-all duration-200 cursor-pointer select-none focus:outline-none focus:ring-1 focus:ring-accent"
      >
        <ActiveIcon className="w-3.5 h-3.5 text-accent flex-none" />
        <span className="capitalize">{activeLabel}</span>
        <ChevronDown
          className={`w-3.5 h-3.5 text-muted transition-transform duration-200 flex-none ${
            isOpen ? 'rotate-180 text-accent' : ''
          }`}
        />
      </button>

      {/* Floating Dropdown Menu */}
      {isOpen ? (
        <div
          role="listbox"
          aria-label={t.seasons?.ariaLabel}
          className="absolute right-0 top-[calc(100%+6px)] w-36 p-1.5 rounded-xl border border-border bg-surface/95 backdrop-blur-md shadow-glow-lg z-50 flex flex-col gap-0.5"
        >
          {SEASON_OPTIONS.map((opt) => {
            const IconComponent = opt.icon;
            const isSelected = opt.id === visitorChoice;
            const label = t.seasons?.[opt.id] || opt.id;

            return (
              <button
                key={opt.id}
                type="button"
                role="option"
                aria-selected={isSelected}
                onClick={() => {
                  setSeasonChoice(opt.id);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center justify-between px-2.5 py-2 rounded-lg text-xs transition-all duration-150 cursor-pointer ${
                  isSelected
                    ? 'bg-accent/15 text-accent font-semibold'
                    : 'text-muted hover:text-text hover:bg-surface2'
                }`}
              >
                <span className="flex items-center gap-2">
                  <IconComponent
                    className={`w-3.5 h-3.5 flex-none ${
                      isSelected ? 'text-accent' : 'text-muted'
                    }`}
                  />
                  <span className="capitalize">{label}</span>
                </span>
                {isSelected ? (
                  <span className="w-1.5 h-1.5 rounded-full bg-accent flex-none" />
                ) : null}
              </button>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}

export default SeasonMenu;
