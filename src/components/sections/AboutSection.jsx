import React from 'react';
import { User, ArrowRight } from 'lucide-react';
import { profile } from '../../data/profile';
import { useLang } from '../../hooks/useLang';

export function AboutSection() {
  const { t } = useLang();

  return (
    <section
      id="about"
      className="card rounded-[14px] sm:rounded-2xl border border-border bg-surface p-[18px] sm:p-6 transition-colors duration-200 flex flex-col justify-between"
    >
      <div>
        {/* Section Heading: 18px on mobile, 20px on desktop */}
        <h2 className="text-[18px] sm:text-[20px] font-bold text-text mb-3 sm:mb-4 flex items-center gap-2.5 [text-wrap:balance]">
          <User className="w-5 h-5 text-accent flex-none" />
          <span>{t.about?.title || profile.sectionTitles?.about || 'Giới thiệu'}</span>
        </h2>

        {/* About Paragraphs */}
        <div className="space-y-3 mb-4 sm:mb-5">
          {(t.about?.paragraphs || profile.about).map((paragraph, index) => (
            <p
              key={index}
              className="text-muted text-[14px] sm:text-[14.5px] leading-relaxed"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>

      {/* CTA Button with min 44px touch target */}
      <div className="pt-2">
        <a
          href="#contact"
          className="inline-flex items-center gap-2 px-4.5 py-2.5 min-h-[44px] rounded-xl text-[13px] font-semibold border-1.5 border-accent text-accent hover:bg-accent/10 hover:-translate-y-0.5 transition-all duration-200"
        >
          <span>{t.about?.learnMore || profile.learnMore}</span>
          <ArrowRight className="w-4 h-4 flex-none" />
        </a>
      </div>
    </section>
  );
}

export default AboutSection;
