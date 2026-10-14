import React from 'react';
import { MessageCircle, MapPin, ArrowRight } from 'lucide-react';
import { SiGmail, SiZalo } from '../ui/BrandIcons';
import { SocialLinks } from '../ui/SocialLinks';
import { profile } from '../../data/profile';
import { useLang } from '../../hooks/useLang';

export function ContactSection() {
  const { t } = useLang();

  return (
    <section
      id="contact"
      className="card rounded-[14px] sm:rounded-2xl border border-border bg-surface p-[18px] sm:p-6 transition-colors duration-200 flex flex-col justify-between"
    >
      <div>
        {/* Section Heading: 18px on mobile, 20px on desktop */}
        <h2 className="text-[18px] sm:text-[20px] font-bold text-text mb-3 flex items-center gap-2.5 [text-wrap:balance]">
          <MessageCircle className="w-5 h-5 text-accent flex-none" />
          <span>{t.contact?.title || profile.sectionTitles?.contact || 'Liên hệ'}</span>
        </h2>

        {/* Greeting */}
        <p className="text-[14px] text-muted mb-4 leading-relaxed">
          {t.contact?.greeting || profile.contactGreeting}
        </p>

        {/* 3 Contact items: each min-h 48px, full row clickable, overflow-wrap anywhere */}
        <div className="space-y-2 mb-4">
          {/* Email */}
          <a
            href={`mailto:${profile.email}`}
            className="ct flex items-center gap-3 p-2 -mx-2 min-h-[48px] rounded-xl text-[13px] hover:bg-surface2/60 group transition-colors"
          >
            <div className="w-9 h-9 rounded-[10px] bg-surface2 border border-border flex items-center justify-center text-accent group-hover:border-accent flex-none transition-colors">
              <SiGmail className="w-[18px] h-[18px]" />
            </div>
            <div className="min-w-0 flex-1 [overflow-wrap:anywhere] break-all">
              <small className="block text-[11px] text-muted leading-tight">
                {t.contact?.emailLabel || profile.emailLabel}
              </small>
              <span className="text-text text-[13px] font-medium group-hover:text-accent transition-colors">
                {profile.email}
              </span>
            </div>
          </a>

          {/* Zalo */}
          <a
            href={profile.zaloLink}
            target="_blank"
            rel="noopener noreferrer"
            className="ct flex items-center gap-3 p-2 -mx-2 min-h-[48px] rounded-xl text-[13px] hover:bg-surface2/60 group transition-colors"
          >
            <div className="w-9 h-9 rounded-[10px] bg-surface2 border border-border flex items-center justify-center text-accent group-hover:border-accent flex-none transition-colors">
              <SiZalo className="w-[18px] h-[18px]" />
            </div>
            <div className="min-w-0 flex-1 [overflow-wrap:anywhere] break-all">
              <small className="block text-[11px] text-muted leading-tight">
                {t.contact?.zaloLabel || profile.zaloLabel}
              </small>
              <span className="text-text text-[13px] font-medium group-hover:text-accent transition-colors">
                {profile.zalo}
              </span>
            </div>
          </a>

          {/* Address */}
          <a
            href={profile.mapLink}
            target="_blank"
            rel="noopener noreferrer"
            className="ct flex items-center gap-3 p-2 -mx-2 min-h-[48px] rounded-xl text-[13px] hover:bg-surface2/60 group transition-colors"
          >
            <div className="w-9 h-9 rounded-[10px] bg-surface2 border border-border flex items-center justify-center text-accent group-hover:border-accent flex-none transition-colors">
              <MapPin className="w-[18px] h-[18px]" />
            </div>
            <div className="min-w-0 flex-1 [overflow-wrap:anywhere] break-all">
              <small className="block text-[11px] text-muted leading-tight">
                {t.contact?.addressLabel || profile.addressLabel}
              </small>
              <span className="text-text text-[13px] font-medium group-hover:text-accent transition-colors">
                {profile.address}
              </span>
            </div>
          </a>
        </div>

        {/* Social Links Row: 44px buttons, centered on mobile */}
        <div className="my-4 pt-1">
          <SocialLinks centered size="44" />
        </div>
      </div>

      {/* Send Message Button: full-width, min-h 48px, gradient */}
      <a
        href={`mailto:${profile.email}`}
        className="send w-full min-h-[48px] flex items-center justify-center gap-2 p-3 mt-4 rounded-xl font-semibold text-[14px] text-white bg-gradient-to-r from-accent to-accent2 shadow-glow hover:opacity-95 hover:-translate-y-0.5 transition-all"
      >
        <span>{t.contact?.sendMessage || profile.sendMessage}</span>
        <ArrowRight className="w-4 h-4 flex-none" />
      </a>
    </section>
  );
}

export default ContactSection;
