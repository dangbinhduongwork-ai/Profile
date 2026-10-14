import React from 'react';
import { Home, User, Layers, Folder, Mail } from 'lucide-react';
import { useLang } from '../../hooks/useLang';

const TAB_ICONS = {
  Home,
  User,
  Layers,
  Folder,
  Mail,
};

export function BottomTabBar({ activeId = 'home', onSelect }) {
  const { t } = useLang();

  return (
    <nav
      aria-label="Bottom Navigation"
      className="fixed bottom-0 left-0 right-0 z-50 min-[900px]:hidden bg-bg/92 backdrop-blur-md border-t border-border pb-[env(safe-area-inset-bottom,0px)] transition-colors duration-200 shadow-lg"
    >
      <div className="flex items-center justify-around h-15 px-1 max-w-lg mx-auto">
        {t.bottomNav.map((item) => {
          const Icon = TAB_ICONS[item.icon] || Home;
          const isActive = activeId === item.id;

          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => onSelect?.(item.id)}
              className={`flex-1 flex flex-col items-center justify-center min-h-[48px] py-1.5 px-1 rounded-xl transition-all duration-200 ${
                isActive
                  ? 'text-accent bg-accent/12 font-semibold shadow-sm'
                  : 'text-muted hover:text-accent hover:bg-surface2/50'
              }`}
            >
              <Icon className="w-[21px] h-[21px] mb-1 flex-none" />
              <span className="text-[10px] leading-tight text-center truncate max-w-[62px]">
                {item.label}
              </span>
            </a>
          );
        })}
      </div>
    </nav>
  );
}

export default BottomTabBar;
