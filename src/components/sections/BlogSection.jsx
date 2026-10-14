import React from 'react';
import { FileText } from 'lucide-react';
import { profile } from '../../data/profile';

export function BlogSection() {
  return (
    <section
      id="blog"
      className="card rounded-2xl border border-border bg-surface p-6 mb-5 transition-colors duration-200"
    >
      {/* Section Header */}
      <h2 className="text-[20px] font-bold text-text mb-4 flex items-center gap-2.5">
        <FileText className="w-5 h-5 text-accent flex-none" />
        <span>{profile.sectionTitles?.blog || 'Blog'}</span>
      </h2>

      {/* 3 Blog Cards: 3 columns (desktop/tablet), 1 col (< 560px) */}
      <div className="grid grid-cols-1 min-[560px]:grid-cols-3 gap-3.5">
        {profile.blog.map((title, idx) => (
          <a
            key={idx}
            href="#blog"
            className="block border border-border rounded-xl p-4 bg-surface2 text-text font-medium text-[14px] leading-snug hover:border-accent/40 hover:-translate-y-0.5 transition-all duration-200"
          >
            <div>{title}</div>
            <small className="block text-muted text-[12px] mt-1.5 font-normal">
              {profile.comingSoon}
            </small>
          </a>
        ))}
      </div>
    </section>
  );
}

export default BlogSection;
