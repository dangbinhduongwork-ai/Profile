import React from 'react';
import { MapPin } from 'lucide-react';
import { SiGithub, SiGmail, FaLinkedin, SiZalo } from './BrandIcons';
import { profile } from '../../data/profile';

/**
 * SocialLinks component:
 * 5 social icon buttons (44px on mobile for optimal touch ergonomics, 38px on desktop sidebar).
 * Used in:
 * 1. Sidebar (desktop)
 * 2. Contact section (mobile & desktop)
 * 3. Mobile footer (< 900px)
 */
export function SocialLinks({ className = '', centered = false, size = 'auto' }) {
  const socialList = [
    {
      name: 'GitHub',
      icon: SiGithub,
      url: profile.github,
      isExternal: true,
    },
    {
      name: 'LinkedIn',
      icon: FaLinkedin,
      url: profile.linkedin,
      isExternal: true,
    },
    {
      name: 'Email',
      icon: SiGmail,
      url: profile.emailComposeLink,
      isExternal: true,
    },
    {
      name: 'Zalo',
      icon: SiZalo,
      url: profile.zaloLink,
      isExternal: true,
    },
    {
      name: 'Google Maps',
      icon: MapPin,
      url: profile.mapLink,
      isExternal: true,
    },
  ];

  const sizeClasses =
    size === '44'
      ? 'w-11 h-11 min-w-[44px] min-h-[44px]'
      : size === '38'
      ? 'w-[38px] h-[38px]'
      : 'w-11 h-11 min-w-[44px] min-h-[44px] min-[900px]:w-[38px] min-[900px]:h-[38px] min-[900px]:min-w-0 min-[900px]:min-h-0';

  return (
    <div
      className={`flex items-center gap-2.5 flex-wrap ${
        centered ? 'justify-center' : ''
      } ${className}`}
    >
      {socialList.map((item) => {
        const IconComponent = item.icon;
        return (
          <a
            key={item.name}
            href={item.url}
            aria-label={item.name}
            title={item.name}
            {...(item.isExternal
              ? { target: '_blank', rel: 'noopener noreferrer' }
              : {})}
            className={`${sizeClasses} rounded-[10px] border border-border bg-surface2 flex items-center justify-center text-muted transition-all duration-200 hover:text-accent hover:border-accent hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-accent/50`}
          >
            <IconComponent className="w-[19px] h-[19px] flex-none" />
          </a>
        );
      })}
    </div>
  );
}

export default SocialLinks;
