import React from 'react';
import { Layers } from 'lucide-react';
import { profile } from '../../data/profile';

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="card rounded-2xl border border-border bg-surface p-6 transition-colors duration-200"
    >
      {/* Section Heading */}
      <h2 className="text-[20px] font-bold text-text mb-4 flex items-center gap-2.5">
        <Layers className="w-5 h-5 text-accent flex-none" />
        <span>{profile.sectionTitles?.skills || 'Kỹ năng'}</span>
      </h2>

      {/* 2x2 Grid for 4 Skill Groups */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-7 gap-y-4">
        {Object.entries(profile.skills).map(([groupTitle, skillList]) => (
          <div key={groupTitle} className="space-y-2">
            <h3 className="text-[15px] font-semibold text-text mt-2 mb-2.5">
              {groupTitle}
            </h3>
            <div className="flex flex-wrap gap-2">
              {skillList.map((skill) => (
                <span
                  key={skill}
                  className="text-[12px] px-3.5 py-1.5 rounded-full bg-surface2 border border-border text-text whitespace-nowrap transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SkillsSection;
