import React, { useRef, useState, useEffect } from 'react';
import {
  Folder,
  Globe,
  ShoppingCart,
  Activity,
  Heart,
  Waves,
  Target,
  Bot,
  ArrowRight,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { profile } from '../../data/profile';
import { useLang } from '../../hooks/useLang';

const PROJECT_ICONS = {
  Globe,
  ShoppingCart,
  Activity,
  Heart,
  Waves,
  Target,
  Bot,
};

export function ProjectsSection() {
  const { t, isEn } = useLang();
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanScrollLeft(scrollLeft > 4);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 6);
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  const handleScroll = (direction) => {
    const el = scrollRef.current;
    if (!el) return;
    const scrollAmount = direction === 'left' ? -330 : 330;
    el.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  return (
    <section
      id="projects"
      className="card rounded-[14px] sm:rounded-2xl border border-border bg-surface p-[18px] sm:p-6 transition-colors duration-200 min-w-0"
    >
      {/* Section Header with Left / Right Navigation Controls */}
      <div className="flex items-center justify-between gap-3 mb-3.5 sm:mb-4">
        <h2 className="text-[18px] sm:text-[20px] font-bold text-text flex items-center gap-2.5 [text-wrap:balance]">
          <Folder className="w-5 h-5 text-accent flex-none" />
          <span>{t.projects?.title || profile.sectionTitles?.projects || 'Dự án nổi bật'}</span>
          <span className="text-[12px] font-semibold px-2 py-0.5 rounded-full bg-accent/10 text-accent border border-accent/20">
            {profile.projects.length}
          </span>
        </h2>

        {/* Carousel Prev/Next Buttons */}
        <div className="flex items-center gap-1.5 flex-none">
          <button
            type="button"
            onClick={() => handleScroll('left')}
            disabled={!canScrollLeft}
            aria-label="Previous project"
            title="Cuộn sang trái"
            className={`w-8 h-8 rounded-lg border flex items-center justify-center transition-all duration-200 ${
              canScrollLeft
                ? 'border-border bg-surface2 text-text hover:bg-accent hover:text-white hover:border-accent active:scale-95 shadow-sm'
                : 'border-border/40 bg-surface2/30 text-muted/30 cursor-not-allowed opacity-40'
            }`}
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={() => handleScroll('right')}
            disabled={!canScrollRight}
            aria-label="Next project"
            title="Cuộn sang phải"
            className={`w-8 h-8 rounded-lg border flex items-center justify-center transition-all duration-200 ${
              canScrollRight
                ? 'border-border bg-surface2 text-text hover:bg-accent hover:text-white hover:border-accent active:scale-95 shadow-sm'
                : 'border-border/40 bg-surface2/30 text-muted/30 cursor-not-allowed opacity-40'
            }`}
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Projects Horizontal Track: strictly 1 row, never wraps or pushes down */}
      <div
        ref={scrollRef}
        onScroll={checkScroll}
        className="flex items-stretch gap-3.5 sm:gap-4 overflow-x-auto pb-3 pt-1 scroll-smooth snap-x snap-mandatory min-w-0"
        style={{
          scrollbarWidth: 'thin',
          scrollbarColor: 'var(--border) transparent',
        }}
      >
        {profile.projects.map((project, idx) => {
          const IconComponent = PROJECT_ICONS[project.icon] || Globe;
          const bgGradient =
            project.gradient && project.gradient.length === 2
              ? `linear-gradient(135deg, ${project.gradient[0]}, ${project.gradient[1]})`
              : 'linear-gradient(135deg, #0b1e3f, #1e5fd8)';

          return (
            <div
              key={idx}
              className="pc w-[275px] sm:w-[305px] md:w-[325px] flex-none snap-start rounded-xl border border-border bg-surface2 overflow-hidden flex flex-col transition-all duration-200 hover:-translate-y-1 hover:shadow-glow group"
            >
              {/* Thumbnail */}
              <div
                className="h-[125px] flex items-center justify-center text-white relative overflow-hidden flex-none"
                style={!project.image ? { background: bgGradient } : undefined}
              >
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <IconComponent className="w-[44px] h-[44px] text-white stroke-[1.6] group-hover:scale-110 transition-transform duration-300" />
                )}
              </div>

              {/* Card Body */}
              <div className="p-3.5 sm:p-4 flex flex-col gap-2 flex-1">
                {/* Title */}
                <b
                  className="text-accent text-[14px] sm:text-[14.5px] font-semibold leading-snug line-clamp-1"
                  title={!isEn && project.titleVi ? project.titleVi : project.title}
                >
                  {!isEn && project.titleVi ? project.titleVi : project.title}
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
                <p className="text-[12px] sm:text-[12.5px] text-muted flex-1 leading-relaxed line-clamp-3">
                  {!isEn && project.descVi ? project.descVi : project.desc}
                </p>

                {/* Links: GitHub & optional Live Demo */}
                <div className="flex items-center gap-3 pt-2 flex-wrap mt-auto border-t border-border/40">
                  {project.url ? (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-[12px] text-accent font-semibold hover:underline min-h-[32px] transition-colors"
                    >
                      <span>{t.projects?.viewOnGithub || profile.viewOnGithub}</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </a>
                  ) : null}
                  {project.demoUrl ? (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[12px] text-muted hover:text-accent font-medium hover:underline min-h-[32px] transition-colors ml-auto"
                    >
                      <span>{t.projects?.liveDemo || 'Demo'}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : null}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default ProjectsSection;
