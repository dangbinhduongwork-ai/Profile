import React from 'react';
import { MapPin } from 'lucide-react';
import { SiGithub, SiGmail, FaLinkedin, SiZalo } from './BrandIcons';
import { profile } from '../../data/profile';

/**
 * SocialLinks component:
 * 5 square buttons (38x38px, rounded 10px, border, icon 19px muted, hover accent + translateY(-2px)).
 * Used in:
 * 1. Sidebar
 * 2. Contact section
 * 3. Mobile footer
 */
export function SocialLinks({ className = '' }) {
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
      url: `mailto:${profile.email}`,
      isExternal: false,
    },
    {
      name: 'Zalo',
      icon: SiZalo,
      url: profile.zaloLink,
      isExternal: true,
    },
    {
      name: 'Địa chỉ',
      icon: MapPin,
      url: profile.mapLink,
      isExternal: true,
    },
  ];

  return (
    <div className={`flex items-center gap-2.5 flex-wrap ${className}`}>
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
            className="w-[38px] h-[38px] rounded-[10px] border border-border bg-surface2 flex items-center justify-center text-muted transition-all duration-200 hover:text-accent hover:border-accent hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-accent/50"
          >
            <IconComponent className="w-[19px] h-[19px] flex-none" />
          </a>
        );
      })}
    </div>
  );
}

export default SocialLinks;
