import React from 'react';
import { SocialLinks } from '../ui/SocialLinks';
import { profile } from '../../data/profile';
import { useLang } from '../../hooks/useLang';

export function Footer() {
  const { t } = useLang();

  return (
    <footer className="pt-6 pb-[calc(5.25rem+env(safe-area-inset-bottom,0px))] min-[900px]:pb-6 px-4 text-center text-[12px] text-muted transition-colors duration-200">
      {/* Social Links on Mobile (< 900px) with 44px touch-friendly buttons */}
      <div className="flex min-[900px]:hidden justify-center mb-4">
        <SocialLinks centered size="44" />
      </div>

      <p>{t.footer?.copyright || profile.copyright}</p>
    </footer>
  );
}

export default Footer;
