import React from 'react';
import { Home, User, Layers, Folder, FileText, Mail } from 'lucide-react';
import { ThemeToggle } from '../ui/ThemeToggle';
import { profile } from '../../data/profile';

const NAV_ICONS = {
  Home,
  User,
  Layers,
  Folder,
  FileText,
  Mail,
};

export function Header({ activeId = 'home', onSelect }) {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between gap-4 px-4 sm:px-6 py-3 bg-bg/85 backdrop-blur-[10px] border-b border-border transition-colors duration-200">
      {/* Left: Logo & Name */}
      <a
        href="#home"
        onClick={() => onSelect?.('home')}
        className="flex items-center gap-2.5 font-semibold whitespace-nowrap flex-none group"
      >
        <b className="text-[22px] font-extrabold bg-gradient-to-br from-accent to-accent2 bg-clip-text text-transparent transition-opacity group-hover:opacity-90">
          DB
        </b>
        <span className="hidden min-[900px]:inline text-base font-semibold text-text">
          {profile.name}
        </span>
      </a>

      {/* Center: Top Navigation Menu */}
      <nav className="flex items-center gap-1 sm:gap-1.5 overflow-x-auto scrollbar-none py-1 px-1">
        {profile.nav.map((item) => {
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

      {/* Right: Theme Switcher */}
      <div className="flex-none pl-1">
        <ThemeToggle />
      </div>
    </header>
  );
}

export default Header;
