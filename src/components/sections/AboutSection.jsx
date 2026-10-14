import React from 'react';
import { User, ArrowRight } from 'lucide-react';
import { profile } from '../../data/profile';

export function AboutSection() {
  return (
    <section
      id="about"
      className="card rounded-2xl border border-border bg-surface p-6 transition-colors duration-200 flex flex-col justify-between"
    >
      <div>
        {/* Section Heading */}
        <h2 className="text-[20px] font-bold text-text mb-4 flex items-center gap-2.5">
          <User className="w-5 h-5 text-accent flex-none" />
          <span>{profile.sectionTitles?.about || 'Giới thiệu'}</span>
        </h2>

        {/* About Paragraphs */}
        <div className="space-y-3 mb-5">
          {profile.about.map((paragraph, index) => (
            <p
              key={index}
              className="text-muted text-[14px] leading-relaxed"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>

      {/* CTA Button */}
      <div className="pt-2">
        <a
          href="#contact"
          className="inline-flex items-center gap-2 px-4.5 py-2 rounded-xl text-[13px] font-semibold border-1.5 border-accent text-accent hover:bg-accent/10 hover:-translate-y-0.5 transition-all duration-200"
        >
          <span>{profile.learnMore}</span>
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}

export default AboutSection;
