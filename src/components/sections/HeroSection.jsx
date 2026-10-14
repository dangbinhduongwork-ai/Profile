import React, { useState } from 'react';
import { Folder, Download, MapPin, Code2 } from 'lucide-react';
import { SiGmail } from '../ui/BrandIcons';
import { profile } from '../../data/profile';
import { useLang } from '../../hooks/useLang';

// Dynamically check for avatar image in src/assets without throwing if missing
const avatarModules = import.meta.glob('/src/assets/avatar.{webp,jpg,jpeg,png}', {
  eager: true,
  import: 'default',
});
const resolvedAvatar =
  avatarModules['/src/assets/avatar.webp'] ||
  avatarModules['/src/assets/avatar.jpg'] ||
  avatarModules['/src/assets/avatar.jpeg'] ||
  avatarModules['/src/assets/avatar.png'] ||
  null;

export function HeroSection() {
  const [imgError, setImgError] = useState(false);
  const { t } = useLang();

  // Split name so the last word "Dương" gets the gradient color
  const nameWords = profile.name.trim().split(' ');
  const lastName = nameWords.pop() || '';
  const firstNames = nameWords.join(' ');

  const hasAvatar = Boolean(resolvedAvatar) && !imgError;

  return (
    <section
      id="home"
      className="relative overflow-hidden flex flex-col min-[900px]:grid min-[900px]:grid-cols-[1.2fr_1fr] items-center gap-6 min-[900px]:gap-8 px-4 sm:px-8 min-[900px]:px-12 py-8 sm:py-10 min-[900px]:py-14 border-b border-border bg-[radial-gradient(60%_90%_at_80%_40%,rgba(43,140,255,0.18),transparent)] transition-colors duration-200"
    >
      {/* 1. Avatar: ORDER 1 on Mobile (< 900px), ORDER 2 on Desktop */}
      <div className="order-1 min-[900px]:order-2 flex justify-center items-center relative py-2 min-[900px]:py-0 w-full">
        <div className="relative w-[min(190px,52vw)] h-[min(190px,52vw)] min-[900px]:w-[min(300px,70vw)] min-[900px]:h-[min(300px,70vw)] aspect-square rounded-full flex items-center justify-center shadow-[0_0_0_5px_var(--bg),0_0_0_7px_var(--accent),0_0_40px_var(--glow)] min-[900px]:shadow-[0_0_0_6px_var(--bg),0_0_0_8px_var(--accent),0_0_60px_var(--glow)] bg-[radial-gradient(circle_at_30%_25%,var(--accent2),var(--accent)_55%,#0b2a6b)] transition-all overflow-visible">
          {hasAvatar ? (
            <img
              src={resolvedAvatar}
              alt={profile.name}
              width={300}
              height={300}
              onError={() => setImgError(true)}
              className="w-full h-full object-cover rounded-full"
            />
          ) : (
            <span className="font-extrabold text-[54px] min-[900px]:text-[88px] text-white select-none leading-none">
              DB
            </span>
          )}

          {/* Slogan in Caveat handwriting font: HIDDEN on mobile (< 900px) */}
          <div className="hidden min-[900px]:block absolute -top-1.5 right-0 font-handwriting text-muted text-[15px] italic leading-[1.3] -rotate-8 select-none pointer-events-none text-left">
            {profile.tagline.map((word, index) => (
              <div key={index}>{word}</div>
            ))}
          </div>
        </div>
      </div>

      {/* 2. Intro Text: ORDER 2 on Mobile (< 900px), ORDER 1 on Desktop */}
      <div className="order-2 min-[900px]:order-1 flex flex-col items-center min-[900px]:items-start text-center min-[900px]:text-left z-10 w-full">
        {/* Greeting */}
        <div className="text-accent text-[16px] min-[900px]:text-[18px] font-medium leading-none mb-1">
          {t.hero?.greeting || profile.greeting}
        </div>

        {/* H1 Name: 32px on mobile, clamp on desktop */}
        <h1 className="text-[32px] min-[900px]:text-[clamp(34px,5vw,56px)] font-extrabold leading-[1.15] tracking-tight my-2 [text-wrap:balance]">
          {firstNames}{' '}
          <span className="bg-gradient-to-r from-accent to-accent2 bg-clip-text text-transparent">
            {lastName}
          </span>
        </h1>

        {/* Role: 16px on mobile, 20px on desktop */}
        <div className="text-[16px] min-[900px]:text-[20px] text-text font-normal mb-3.5 leading-snug">
          {t.hero?.role || profile.role}
        </div>

        {/* Hero Description */}
        <p className="text-muted text-[14px] sm:text-[15px] min-[900px]:text-base leading-relaxed max-w-[520px] mb-5">
          {t.hero?.heroText || profile.heroText}
        </p>

        {/* 2 CTA Buttons: side-by-side on mobile, flex-1, max 240px, min-h 44px */}
        <div className="flex flex-row items-center justify-center gap-2.5 sm:gap-3 my-2 w-full max-w-[500px] min-[900px]:w-auto min-[900px]:justify-start">
          {/* View Projects Button */}
          <a
            href="#projects"
            className="flex-1 min-[900px]:flex-initial max-w-[240px] min-h-[44px] inline-flex items-center justify-center gap-2 px-3 sm:px-6 py-2.5 rounded-xl font-semibold text-[13.5px] sm:text-[15px] bg-accent text-white shadow-glow hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent"
          >
            <Folder className="w-4 h-4 flex-none" />
            <span className="truncate">{t.hero?.viewProjects || profile.viewProjects}</span>
          </a>

          {/* Download CV Button */}
          <a
            href={profile.cvFile}
            download="CV-DangBinhDuong.pdf"
            className="flex-1 min-[900px]:flex-initial max-w-[240px] min-h-[44px] inline-flex items-center justify-center gap-2 px-3 sm:px-6 py-2.5 rounded-xl font-semibold text-[13.5px] sm:text-[15px] border-1.5 border-accent text-accent hover:bg-accent/10 hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent"
          >
            <Download className="w-4 h-4 flex-none" />
            <span className="truncate">{t.hero?.downloadCv || profile.downloadCv}</span>
          </a>
        </div>

        {/* Meta Info: stacked vertically on mobile (< 900px), centered */}
        <div className="flex flex-col min-[900px]:flex-row items-center gap-2 sm:gap-3 min-[900px]:gap-x-5 min-[900px]:gap-y-2 text-[13px] text-muted pt-4 w-full justify-center min-[900px]:justify-start">
          {/* Location */}
          <span className="inline-flex items-center gap-1.5 min-h-[28px]">
            <MapPin className="w-4 h-4 text-accent flex-none" />
            <span>{profile.location}</span>
          </span>

          {/* Email */}
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-1.5 hover:text-accent transition-colors min-h-[28px]"
          >
            <SiGmail className="w-3.5 h-3.5 text-accent flex-none" />
            <span>{profile.email}</span>
          </a>

          {/* Student Status */}
          <span className="inline-flex items-center gap-1.5 min-h-[28px]">
            <Code2 className="w-4 h-4 text-accent flex-none" />
            <span>{t.hero?.studentYear || profile.studentYear}</span>
          </span>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
