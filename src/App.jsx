import React, { lazy, Suspense, useState, useEffect } from 'react';
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

// Tách Three.js thành chunk riêng, tải ngầm sau khi web chính đã hiển thị
const WalkingCharacter = lazy(() => import('./components/ui/WalkingCharacter'));

const SECTION_IDS = ['home', 'about', 'skills', 'projects', 'blog', 'contact'];

export function App() {
  // Track active section for Header, Sidebar, and Bottom Tab Bar
  const [activeId, setActiveId] = useScrollSpy(SECTION_IDS);
  const [show3D, setShow3D] = useState(false);

  // Chỉ nạp Three.js và nhân vật 3D sau khi toàn bộ website đã hiển thị xong (giúp web mở tức thì)
  useEffect(() => {
    if ('requestIdleCallback' in window) {
      const handle = requestIdleCallback(() => setShow3D(true), { timeout: 800 });
      return () => cancelIdleCallback(handle);
    } else {
      const timer = setTimeout(() => setShow3D(true), 200);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <div className="min-h-screen bg-bg text-text transition-colors duration-200 font-sans flex flex-col relative overflow-x-clip max-w-[100vw]">
      {/* Dynamic Canvas Seasonal Effect */}
      <SeasonEffect />

      {/* 3D Walking & Interactive Character (Tải ngầm sau khi website đã render) */}
      {show3D && (
        <Suspense fallback={null}>
          <WalkingCharacter
            modelUrl="/models/chibi_bald_business_man_walk.glb"
            scale={100}
            speed={85}
          />
        </Suspense>
      )}

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

            {/* Row 2: Projects (#projects) - Full-width horizontal showcase */}
            <ProjectsSection />

            {/* Row 3: Blog (#blog) & Contact (#contact) */}
            <div className="grid grid-cols-1 min-[1100px]:grid-cols-[1.5fr_1fr] gap-3.5 sm:gap-5">
              <BlogSection />
              <ContactSection />
            </div>
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
