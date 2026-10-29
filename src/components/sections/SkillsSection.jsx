import React from 'react';
import { Layers, Award, ExternalLink } from 'lucide-react';
import { profile } from '../../data/profile';
import { useLang } from '../../hooks/useLang';

export function SkillsSection() {
  const { t, lang } = useLang();
  const skillsData = t.skills?.categories || profile.skills;

  return (
    <section
      id="skills"
      className="card rounded-[14px] sm:rounded-2xl border border-border bg-surface p-[18px] sm:p-6 transition-colors duration-200"
    >
      {/* Section Heading: 18px on mobile, 20px on desktop */}
      <h2 className="text-[18px] sm:text-[20px] font-bold text-text mb-3 sm:mb-4 flex items-center gap-2.5 [text-wrap:balance]">
        <Layers className="w-5 h-5 text-accent flex-none" />
        <span>{t.skills?.title || profile.sectionTitles?.skills || 'Kỹ năng'}</span>
      </h2>

      {/* Grid: 1 column at < 560px, 2 columns at >= 560px */}
      <div className="grid grid-cols-1 min-[560px]:grid-cols-2 gap-x-6 sm:gap-x-7 gap-y-3.5 sm:gap-y-4">
        {Object.entries(skillsData).map(([groupTitle, skillList]) => (
          <div key={groupTitle} className="space-y-1.5 sm:space-y-2">
            <h3 className="text-[14px] sm:text-[15px] font-semibold text-text mt-1.5 mb-2">
              {groupTitle}
            </h3>
            {/* Chips with wrapping allowed and 12px font */}
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {skillList.map((skill, index) => {
                const isObj = typeof skill === 'object' && skill !== null;
                const skillName = isObj ? skill.name : skill;
                const certUrl = isObj ? skill.url : null;
                const tooltip =
                  isObj?.label ||
                  (lang === 'vi'
                    ? 'Bấm để xem minh chứng chứng chỉ'
                    : 'Click to view credential');

                if (certUrl) {
                  return (
                    <a
                      key={index}
                      href={certUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={tooltip}
                      className="inline-flex items-center gap-1.5 text-[12px] px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-accent/15 border border-accent/40 text-accent font-medium leading-tight transition-all duration-200 hover:bg-accent hover:text-white hover:scale-105 shadow-sm group"
                    >
                      <Award className="w-3.5 h-3.5 text-accent group-hover:text-white flex-none" />
                      <span>{skillName}</span>
                      <ExternalLink className="w-3 h-3 opacity-75 group-hover:opacity-100 flex-none" />
                    </a>
                  );
                }

                return (
                  <span
                    key={index}
                    className="text-[12px] px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-surface2 border border-border text-text leading-tight transition-colors"
                  >
                    {skillName}
                  </span>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SkillsSection;
