import React from 'react';
import { SocialLinks } from '../ui/SocialLinks';
import { profile } from '../../data/profile';

export function Footer() {
  return (
    <footer className="py-6 px-4 text-center text-[12px] text-muted transition-colors duration-200">
      {/* Social Links on Mobile (< 900px) */}
      <div className="flex min-[900px]:hidden justify-center mb-3.5">
        <SocialLinks />
      </div>

      <p>{profile.copyright}</p>
    </footer>
  );
}

export default Footer;
