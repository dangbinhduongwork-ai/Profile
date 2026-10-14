import React from 'react';
import { Header, Sidebar, Footer, BottomTabBar } from './components/layout';
import {
  HeroSection,
  AboutSection,
  SkillsSection,
  ProjectsSection,
  BlogSection,
  ContactSection,
} from './components/sections';
import { useScrollSpy } from './hooks/useScrollSpy';
import { SeasonEffect } from './components/ui/SeasonEffect';

const SECTION_IDS = ['home', 'about', 'skills', 'projects', 'contact', 'blog'];

export function App() {
  // Track active section for Header, Sidebar, and Bottom Tab Bar
  const [activeId, setActiveId] = useScrollSpy(SECTION_IDS);

  return (
    <div className="min-h-screen bg-bg text-text transition-colors duration-200 font-sans flex flex-col relative overflow-x-clip max-w-[100vw]">
      {/* Dynamic Canvas Seasonal Effect */}
      <SeasonEffect />

      {/* 1. Sticky Header (<= 56px, mobile-first controls) */}
      <Header activeId={activeId} onSelect={setActiveId} />

      {/* 2. Main 2-column layout (220px Sidebar on Desktop + Main Content) */}
      <div className="flex-1 grid grid-cols-1 min-[900px]:grid-cols-[220px_minmax(0,1fr)]">
        {/* Left Sticky Sidebar (hidden under 900px) */}
        <Sidebar activeId={activeId} onSelect={setActiveId} />

        {/* Right Main Content (min-w-0 for preventing flex/grid overflow) */}
        <main className="min-w-0 flex flex-col">
          {/* Section 1: Hero (#home) */}
          <HeroSection />

          {/* Container for cards: 14px margins & gap on mobile (< 900px), standard on desktop */}
          <div className="px-3.5 sm:px-6 md:px-10 pt-3.5 sm:pt-6 pb-2 space-y-3.5 sm:space-y-5 flex-1">
            {/* Row 1: About (#about) & Skills (#skills) */}
            <div className="grid grid-cols-1 min-[1100px]:grid-cols-[1fr_1.5fr] gap-3.5 sm:gap-5">
              <AboutSection />
              <SkillsSection />
            </div>

            {/* Row 2: Projects (#projects) & Contact (#contact) - 2.6fr / 1fr */}
            <div className="grid grid-cols-1 min-[1100px]:grid-cols-[2.6fr_1fr] gap-3.5 sm:gap-5">
              <ProjectsSection />
              <ContactSection />
            </div>

            {/* Row 3: Blog (#blog) */}
            <BlogSection />
          </div>

          {/* Footer (includes mobile social links and tab bar safe area padding) */}
          <Footer />
        </main>
      </div>

      {/* 3. Bottom Tab Bar (Visible only on Mobile < 900px, 5 items, fixed at bottom) */}
      <BottomTabBar activeId={activeId} onSelect={setActiveId} />
    </div>
  );
}

export default App;
