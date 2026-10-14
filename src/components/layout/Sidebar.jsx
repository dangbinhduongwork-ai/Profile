import React from 'react';
import { Home, User, Layers, Folder, FileText, Mail } from 'lucide-react';
import { SocialLinks } from '../ui/SocialLinks';
import { profile } from '../../data/profile';

const NAV_ICONS = {
  Home,
  User,
  Layers,
  Folder,
  FileText,
  Mail,
};

export function Sidebar({ activeId = 'home', onSelect }) {
  return (
    <aside className="hidden min-[900px]:flex flex-col justify-between w-[220px] flex-none sticky top-[61px] h-[calc(100vh-61px)] p-5 border-r border-border bg-bg/50 overflow-y-auto scrollbar-none transition-colors duration-200">
      {/* Vertical Navigation Menu */}
      <nav className="flex flex-col gap-1">
        {profile.nav.map((item) => {
          const Icon = NAV_ICONS[item.icon] || Home;
          const isActive = activeId === item.id;
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => onSelect?.(item.id)}
              className={`flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-sm transition-all duration-200 ${
                isActive
                  ? 'bg-accent/12 text-accent font-semibold shadow-sm'
                  : 'text-muted hover:text-accent hover:bg-accent/10'
              }`}
            >
              <Icon className="w-4.5 h-4.5 flex-none" />
              <span>{item.label}</span>
            </a>
          );
        })}
      </nav>

      {/* Bottom Area: Quote + SocialLinks */}
      <div className="mt-auto pt-6 flex flex-col gap-5 border-t border-border/50">
        {/* Quote */}
        <div className="px-1 text-[13px] italic text-muted leading-relaxed">
          “ {profile.quote} ”
          <small className="block not-italic text-xs text-muted/70 mt-2">
            — {profile.name}
          </small>
        </div>

        {/* Social Icons */}
        <SocialLinks />
      </div>
    </aside>
  );
}

export default Sidebar;
