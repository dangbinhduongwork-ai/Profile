import React from 'react';
import { Home, User, Layers, Folder, FileText, Mail } from 'lucide-react';
import { ThemeToggle } from '../ui/ThemeToggle';
import { SeasonMenu } from '../ui/SeasonMenu';
import { profile } from '../../data/profile';
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
  const { t } = useLang();

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

      {/* Right Controls: Season Menu -> Theme Switch */}
      <div className="flex items-center gap-1.5 sm:gap-2 flex-none">
        {/* 1. Season Effect Selector */}
        <SeasonMenu />

        {/* 2. Dark/Light Theme Switch */}
        <ThemeToggle />
      </div>
    </header>
  );
}

export default Header;
