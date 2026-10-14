import React from 'react';
import { MessageCircle, MapPin, ArrowRight } from 'lucide-react';
import { SiGmail, SiZalo } from '../ui/BrandIcons';
import { SocialLinks } from '../ui/SocialLinks';
import { profile } from '../../data/profile';

export function ContactSection() {
  return (
    <section
      id="contact"
      className="card rounded-2xl border border-border bg-surface p-6 transition-colors duration-200 flex flex-col justify-between"
    >
      <div>
        {/* Section Heading */}
        <h2 className="text-[20px] font-bold text-text mb-3 flex items-center gap-2.5">
          <MessageCircle className="w-5 h-5 text-accent flex-none" />
          <span>{profile.sectionTitles?.contact || 'Liên hệ'}</span>
        </h2>

        {/* Greeting */}
        <p className="text-[14px] text-muted mb-4 leading-relaxed">
          {profile.contactGreeting}
        </p>

        {/* 3 Contact items with 36px square icon boxes */}
        <div className="space-y-2 mb-4">
          {/* Email */}
          <a
            href={`mailto:${profile.email}`}
            className="ct flex items-center gap-3 p-1.5 -mx-1.5 rounded-xl text-[13px] hover:bg-surface2/60 group transition-colors"
          >
            <div className="w-9 h-9 rounded-[10px] bg-surface2 border border-border flex items-center justify-center text-accent group-hover:border-accent flex-none transition-colors">
              <SiGmail className="w-[18px] h-[18px]" />
            </div>
            <div className="min-w-0">
              <small className="block text-[11px] text-muted leading-tight">
                {profile.emailLabel}
              </small>
              <span className="text-text text-[13px] font-medium group-hover:text-accent transition-colors break-all">
                {profile.email}
              </span>
            </div>
          </a>

          {/* Zalo */}
          <a
            href={profile.zaloLink}
            target="_blank"
            rel="noopener noreferrer"
            className="ct flex items-center gap-3 p-1.5 -mx-1.5 rounded-xl text-[13px] hover:bg-surface2/60 group transition-colors"
          >
            <div className="w-9 h-9 rounded-[10px] bg-surface2 border border-border flex items-center justify-center text-accent group-hover:border-accent flex-none transition-colors">
              <SiZalo className="w-[18px] h-[18px]" />
            </div>
            <div className="min-w-0">
              <small className="block text-[11px] text-muted leading-tight">
                {profile.zaloLabel}
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
            className="ct flex items-center gap-3 p-1.5 -mx-1.5 rounded-xl text-[13px] hover:bg-surface2/60 group transition-colors"
          >
            <div className="w-9 h-9 rounded-[10px] bg-surface2 border border-border flex items-center justify-center text-accent group-hover:border-accent flex-none transition-colors">
              <MapPin className="w-[18px] h-[18px]" />
            </div>
            <div className="min-w-0">
              <small className="block text-[11px] text-muted leading-tight">
                {profile.addressLabel}
              </small>
              <span className="text-text text-[13px] font-medium group-hover:text-accent transition-colors">
                {profile.address}
              </span>
            </div>
          </a>
        </div>

        {/* Social Links Row */}
        <div className="my-4 pt-1">
          <SocialLinks />
        </div>
      </div>

      {/* Send Message Button: full-width gradient */}
      <a
        href={`mailto:${profile.email}`}
        className="send w-full flex items-center justify-center gap-2 p-3 mt-4 rounded-xl font-semibold text-[14px] text-white bg-gradient-to-r from-accent to-accent2 shadow-glow hover:opacity-95 hover:-translate-y-0.5 transition-all"
      >
        <span>{profile.sendMessage}</span>
        <ArrowRight className="w-4 h-4" />
      </a>
    </section>
  );
}

export default ContactSection;
