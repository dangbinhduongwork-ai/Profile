import React from 'react';
import { Home, User, Layers, Folder, FileText, Mail, Globe } from 'lucide-react';
import { ThemeToggle } from '../ui/ThemeToggle';
import { profile } from '../../data/profile';
import { useSeason } from '../../hooks/useSeason';
import { useLang } from '../../hooks/useLang';

const NAV_ICONS = {
  Home,
  User,
  Layers,
  Folder,
  FileText,
  Mail,
};

export function Header({ activeId = 'home', onSelect }) {
  const { visitorChoice, setSeasonChoice, allowVisitorSwitch } = useSeason();
  const { lang, toggleLang, t } = useLang();

  return (
    <header className="sticky top-0 z-50 h-14 max-h-14 flex items-center justify-between gap-2.5 px-3.5 sm:px-6 bg-bg/85 backdrop-blur-[10px] border-b border-border transition-colors duration-200">
      {/* Left: Logo & Name */}
      <a
        href="#home"
        onClick={() => onSelect?.('home')}
        className="flex items-center gap-2 font-semibold whitespace-nowrap flex-none group min-h-[44px]"
      >
        <b className="text-[22px] font-extrabold bg-gradient-to-br from-accent to-accent2 bg-clip-text text-transparent transition-opacity group-hover:opacity-90">
          DB
        </b>
        {/* Name: only shown when >= 561px on mobile, always on desktop */}
        <span className="hidden min-[561px]:inline text-sm sm:text-base font-semibold text-text truncate max-w-[160px] sm:max-w-none">
          {profile.name}
        </span>
      </a>

      {/* Center: Top Navigation Menu (ONLY visible on Desktop >= 900px) */}
      <nav className="hidden min-[900px]:flex items-center gap-1 sm:gap-1.5 overflow-x-auto scrollbar-none py-1 px-1">
        {t.nav.map((item) => {
          const Icon = NAV_ICONS[item.icon] || Home;
          const isActive = activeId === item.id;
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => onSelect?.(item.id)}
              className={`inline-flex items-center gap-2 px-3 py-2 rounded-xl text-sm whitespace-nowrap transition-all duration-200 ${
                isActive
                  ? 'text-accent bg-accent/12 font-medium shadow-sm'
                  : 'text-muted hover:text-accent hover:bg-accent/10'
              }`}
            >
              <Icon className="w-4 h-4 flex-none" />
              <span>{item.label}</span>
            </a>
          );
        })}
      </nav>

      {/* Right Controls: Language (EN/VI) -> Season Select (max 92px) -> Theme Switch */}
      <div className="flex items-center gap-1.5 sm:gap-2 flex-none">
        {/* 1. Language Toggle Button (44px touch target) */}
        <button
          type="button"
          onClick={toggleLang}
          aria-label={lang === 'vi' ? 'Switch to English' : 'Chuyển sang Tiếng Việt'}
          title={lang === 'vi' ? 'Switch to English' : 'Chuyển sang Tiếng Việt'}
          className="min-w-[44px] min-h-[44px] flex items-center justify-center text-xs font-bold text-muted hover:text-accent border border-border bg-surface2 rounded-xl px-2.5 py-1.5 transition-colors focus:outline-none focus:ring-1 focus:ring-accent"
        >
          <span className="flex items-center gap-1 tracking-wider uppercase">
            <Globe className="w-3.5 h-3.5 text-accent" />
            <span>{t.nextLangCode}</span>
          </span>
        </button>

        {/* 2. Season Selector Dropdown (max-w ~92px) */}
        {allowVisitorSwitch ? (
          <div className="relative max-w-[86px] sm:max-w-[92px] w-full">
            <select
              value={visitorChoice}
              onChange={(e) => setSeasonChoice(e.target.value)}
              aria-label={t.seasons.ariaLabel}
              className="w-full h-9 text-xs bg-surface2 text-muted hover:text-accent border border-border rounded-xl px-2 py-1 focus:outline-none focus:ring-1 focus:ring-accent cursor-pointer truncate transition-colors appearance-none text-center"
            >
              <option value="auto">{t.seasons.auto}</option>
              <option value="spring">{t.seasons.spring}</option>
              <option value="summer">{t.seasons.summer}</option>
              <option value="autumn">{t.seasons.autumn}</option>
              <option value="winter">{t.seasons.winter}</option>
              <option value="none">{t.seasons.none}</option>
            </select>
          </div>
        ) : null}

        {/* 3. Dark/Light Theme Switch */}
        <ThemeToggle />
      </div>
    </header>
  );
}

export default Header;
