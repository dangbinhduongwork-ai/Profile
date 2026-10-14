import React, { useState } from 'react';
import { Folder, Download, MapPin, Code2 } from 'lucide-react';
import { SiGmail } from '../ui/BrandIcons';
import { profile } from '../../data/profile';

// Dynamically check for avatar image in src/assets without throwing if missing
const avatarModules = import.meta.glob('/src/assets/avatar.{jpg,jpeg,png,webp}', {
  eager: true,
  import: 'default',
});
const resolvedAvatar =
  avatarModules['/src/assets/avatar.jpg'] ||
  avatarModules['/src/assets/avatar.jpeg'] ||
  avatarModules['/src/assets/avatar.png'] ||
  null;

export function HeroSection() {
  const [imgError, setImgError] = useState(false);

  // Split name so the last word "Dương" gets the gradient color
  const nameWords = profile.name.trim().split(' ');
  const lastName = nameWords.pop() || '';
  const firstNames = nameWords.join(' ');

  const hasAvatar = Boolean(resolvedAvatar) && !imgError;

  return (
    <section
      id="home"
      className="relative overflow-hidden grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] items-center gap-8 px-6 sm:px-10 lg:px-12 py-12 sm:py-14 border-b border-border bg-[radial-gradient(60%_90%_at_80%_40%,rgba(43,140,255,0.18),transparent)] transition-colors duration-200"
    >
      {/* Left Column */}
      <div className="flex flex-col items-start z-10">
        {/* Greeting */}
        <div className="text-accent text-[18px] font-medium leading-none mb-1">
          {profile.greeting}
        </div>

        {/* H1 Name */}
        <h1 className="text-[clamp(34px,5vw,56px)] font-extrabold leading-[1.15] tracking-tight my-2">
          {firstNames}{' '}
          <span className="bg-gradient-to-r from-accent to-accent2 bg-clip-text text-transparent">
            {lastName}
          </span>
        </h1>

        {/* Role */}
        <div className="text-[20px] text-text font-normal mb-3.5 leading-snug">
          {profile.role}
        </div>

        {/* Hero Description */}
        <p className="text-muted text-[15px] sm:text-base leading-relaxed max-w-[520px] mb-5">
          {profile.heroText}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center gap-3 my-3">
          {/* View Projects Button */}
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-[15px] bg-accent text-white shadow-glow hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent"
          >
            <Folder className="w-4.5 h-4.5 flex-none" />
            <span>{profile.viewProjects}</span>
          </a>

          {/* Download CV Button */}
          <a
            href={profile.cvFile}
            download="CV-DangBinhDuong.pdf"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-[15px] border-1.5 border-accent text-accent hover:bg-accent/10 hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent"
          >
            <Download className="w-4.5 h-4.5 flex-none" />
            <span>{profile.downloadCv}</span>
          </a>
        </div>

        {/* Meta Info Row */}
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[13px] text-muted pt-3">
          {/* Location */}
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="w-4 h-4 text-accent flex-none" />
            <span>{profile.location}</span>
          </span>

          {/* Email */}
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-1.5 hover:text-accent transition-colors"
          >
            <SiGmail className="w-3.5 h-3.5 text-accent flex-none" />
            <span>{profile.email}</span>
          </a>

          {/* Student Status */}
          <span className="inline-flex items-center gap-1.5">
            <Code2 className="w-4 h-4 text-accent flex-none" />
            <span>{profile.studentYear}</span>
          </span>
        </div>
      </div>

      {/* Right Column: Avatar & Handwritten Slogan */}
      <div className="flex justify-center items-center relative py-4 lg:py-0">
        <div className="relative w-[min(300px,70vw)] aspect-square rounded-full flex items-center justify-center shadow-[0_0_0_6px_var(--bg),0_0_0_8px_var(--accent),0_0_60px_var(--glow)] bg-[radial-gradient(circle_at_30%_25%,var(--accent2),var(--accent)_55%,#0b2a6b)] transition-all overflow-visible">
          {hasAvatar ? (
            <img
              src={resolvedAvatar}
              alt={profile.name}
              onError={() => setImgError(true)}
              className="w-full h-full object-cover rounded-full"
            />
          ) : (
            <span className="font-extrabold text-[80px] sm:text-[88px] text-white select-none leading-none">
              DB
            </span>
          )}

          {/* Slogan in Caveat handwriting font, 4 lines, rotated -8 deg, muted color */}
          <div className="absolute -top-1.5 right-0 font-handwriting text-muted text-[15px] italic leading-[1.3] -rotate-8 select-none pointer-events-none text-left">
            {profile.tagline.map((word, index) => (
              <div key={index}>{word}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
