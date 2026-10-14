import { useState, useEffect } from 'react';

/**
 * useScrollSpy:
 * Uses IntersectionObserver to track and highlight the currently viewed section.
 * Default rootMargin: '-40% 0px -55% 0px' as specified in design.
 */
export function useScrollSpy(
  sectionIds = ['home', 'about', 'skills', 'projects', 'blog', 'contact'],
  rootMargin = '-40% 0px -55% 0px'
) {
  const [activeId, setActiveId] = useState(sectionIds[0] || 'home');

  useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      return;
    }

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin,
        threshold: 0,
      }
    );

    elements.forEach((el) => observer.observe(el));

    // Fallback/refinement for top of page and bottom of page
    const handleScroll = () => {
      // If at the very top of the window, activate first section
      if (window.scrollY < 100 && sectionIds.length > 0) {
        setActiveId(sectionIds[0]);
        return;
      }

      // If scrolled to the bottom of the page, activate the last section
      const atBottom =
        window.innerHeight + Math.round(window.scrollY) >=
        document.documentElement.scrollHeight - 50;
      if (atBottom && sectionIds.length > 0) {
        setActiveId(sectionIds[sectionIds.length - 1]);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sectionIds, rootMargin]);

  return [activeId, setActiveId];
}

export default useScrollSpy;
