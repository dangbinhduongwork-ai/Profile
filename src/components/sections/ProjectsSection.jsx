import React from 'react';
import {
  Folder,
  Globe,
  ShoppingCart,
  Activity,
  Heart,
  ArrowRight,
} from 'lucide-react';
import { profile } from '../../data/profile';

const PROJECT_ICONS = {
  Globe,
  ShoppingCart,
  Activity,
  Heart,
};

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="card rounded-2xl border border-border bg-surface p-6 transition-colors duration-200"
    >
      {/* Section Header */}
      <h2 className="text-[20px] font-bold text-text mb-4 flex items-center gap-2.5">
        <Folder className="w-5 h-5 text-accent flex-none" />
        <span>{profile.sectionTitles?.projects || 'Dự án nổi bật'}</span>
      </h2>

      {/* Projects Grid: 4 cols (>= 1100px), 2 cols (< 1100px), 1 col (< 560px) */}
      <div className="grid grid-cols-1 min-[560px]:grid-cols-2 min-[1100px]:grid-cols-4 gap-3.5">
        {profile.projects.map((project, idx) => {
          const IconComponent = PROJECT_ICONS[project.icon] || Globe;
          const bgGradient =
            project.gradient && project.gradient.length === 2
              ? `linear-gradient(135deg, ${project.gradient[0]}, ${project.gradient[1]})`
              : 'linear-gradient(135deg, #0b1e3f, #1e5fd8)';

          return (
            <div
              key={idx}
              className="pc rounded-xl border border-border bg-surface2 overflow-hidden flex flex-col transition-all duration-200 hover:-translate-y-1 hover:shadow-glow group"
            >
              {/* Thumbnail 110px */}
              <div
                className="h-[110px] flex items-center justify-center text-white relative overflow-hidden flex-none"
                style={!project.image ? { background: bgGradient } : undefined}
              >
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <IconComponent className="w-[42px] h-[42px] text-white stroke-[1.6]" />
                )}
              </div>

              {/* Card Body */}
              <div className="p-3.5 flex flex-col gap-2 flex-1">
                {/* Title */}
                <b
                  className="text-accent text-[14px] font-semibold leading-snug line-clamp-1"
                  title={project.title}
                >
                  {project.title}
                </b>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 my-0.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] px-2.5 py-0.5 rounded-full bg-surface border border-border text-muted font-normal"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Description */}
                <p className="text-[12px] text-muted flex-1 leading-relaxed">
                  {project.desc}
                </p>

                {/* GitHub link: hidden when url is empty */}
                {project.url ? (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[12px] text-accent font-semibold hover:underline pt-1.5 self-start transition-colors"
                  >
                    <span>{profile.viewOnGithub}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                ) : null}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default ProjectsSection;
