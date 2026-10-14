import React, { useRef, useEffect, useState } from 'react';
import { useSeason } from '../../hooks/useSeason';
import { useTheme } from '../../hooks/useTheme';

/**
 * SeasonEffect component:
 * - Full-screen fixed canvas (pointer-events: none, z-index 35)
 * - Canvas 2D + requestAnimationFrame (zero external dependencies)
 * - Purely data-driven from seasonConfig.effects[activeSeason]
 * - Handles: Retina DPR, width-only resize, reduced motion, tab visibility pause, dark/light colors
 */
export function SeasonEffect() {
  const canvasRef = useRef(null);
  const { activeSeason, config } = useSeason();
  const { isDark } = useTheme();

  // Check user system preference for reduced motion
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(() => {
    if (typeof window === 'undefined') return false;
    return Boolean(
      window.matchMedia &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches
    );
  });

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handler = (e) => setPrefersReducedMotion(e.matches);

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handler);
      return () => mediaQuery.removeEventListener('change', handler);
    }
  }, []);

  useEffect(() => {
    // If reduced motion is requested and respected, or if mode is 'none', do not run
    if (config.respectReducedMotion && prefersReducedMotion) return;
    if (!activeSeason || activeSeason === 'none') return;

    const effectConfig = config.effects?.[activeSeason];
    if (!effectConfig) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId = null;
    let isPaused = false;
    let width = window.innerWidth;
    let height = window.innerHeight;
    let lastWidth = width;

    // Pick active color palette based on theme (lightThemeColors if available and in light mode)
    const isLightMode = !isDark;
    const activeColors =
      isLightMode &&
      effectConfig.lightThemeColors &&
      effectConfig.lightThemeColors.length > 0
        ? effectConfig.lightThemeColors
        : effectConfig.colors;

    // Determine particle count (reduced on small mobile screens)
    const isMobile = width < 768;
    const countMultiplier = (isMobile ? 0.6 : 1) * (config.intensity || 1);
    const particleCount = Math.max(
      6,
      Math.round((effectConfig.count || 30) * countMultiplier)
    );

    // Canvas scaling helper for Retina / High-DPI screens
    const setupCanvasSize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    };

    setupCanvasSize();

    // Particle constructor helper
    const createParticle = (spawnRandomY = true) => {
      const [minSize, maxSize] = effectConfig.size || [3, 6];
      const [minFall, maxFall] = effectConfig.fall || [0.6, 1.2];
      const speedFactor = config.speed || 1;

      const size = minSize + Math.random() * (maxSize - minSize);
      const fall = (minFall + Math.random() * (maxFall - minFall)) * speedFactor;
      const isRising = fall < 0;

      let y;
      if (spawnRandomY) {
        y = Math.random() * height;
      } else {
        // When wrapping around:
        y = isRising ? height + size * 2 : -size * 2;
      }

      return {
        x: Math.random() * width,
        y,
        size,
        fall,
        isRising,
        sway: (effectConfig.sway || 1) * (0.8 + Math.random() * 0.4),
        swaySpeed: 0.015 + Math.random() * 0.02,
        phase: Math.random() * Math.PI * 2,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.03 * speedFactor,
        color: activeColors[Math.floor(Math.random() * activeColors.length)],
        alpha: 0.65 + Math.random() * 0.35,
        glowPhase: Math.random() * Math.PI * 2,
      };
    };

    let particles = Array.from({ length: particleCount }, () => createParticle(true));

    // Draw particle by shape
    const drawParticle = (p) => {
      const shape = effectConfig.shape || 'dot';

      ctx.save();
      ctx.globalAlpha = p.alpha;
      ctx.fillStyle = p.color;

      switch (shape) {
        case 'glow': {
          // Summer glow / firefly effect with pulsating radiant aura
          const pulse = Math.sin(p.glowPhase) * 0.35 + 0.65;
          const auraRadius = p.size * 2.8 * pulse;

          const grad = ctx.createRadialGradient(
            p.x,
            p.y,
            0,
            p.x,
            p.y,
            auraRadius
          );
          grad.addColorStop(0, p.color);
          grad.addColorStop(0.35, p.color);
          grad.addColorStop(1, 'transparent');

          ctx.fillStyle = grad;
          ctx.beginPath();
          ctx.arc(p.x, p.y, auraRadius, 0, Math.PI * 2);
          ctx.fill();

          // Small solid core
          ctx.fillStyle = '#ffffff';
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * 0.4, 0, Math.PI * 2);
          ctx.fill();
          break;
        }

        case 'petal': {
          // Spring cherry petal with soft rotation
          ctx.translate(p.x, p.y);
          ctx.rotate(p.rotation);
          ctx.beginPath();
          ctx.ellipse(0, 0, p.size * 0.55, p.size, Math.PI / 5, 0, Math.PI * 2);
          ctx.fill();
          break;
        }

        case 'leaf': {
          // Autumn leaf with two pointed ends
          ctx.translate(p.x, p.y);
          ctx.rotate(p.rotation);
          ctx.beginPath();
          ctx.moveTo(-p.size * 0.7, 0);
          ctx.quadraticCurveTo(0, -p.size * 0.48, p.size * 0.7, 0);
          ctx.quadraticCurveTo(0, p.size * 0.48, -p.size * 0.7, 0);
          ctx.fill();
          break;
        }

        case 'dot':
        default: {
          // Winter snowflake or round particle
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fill();
          break;
        }
      }

      ctx.restore();
    };

    // Main animation loop
    const render = () => {
      if (isPaused) return;

      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Vertical movement
        p.y += p.fall;

        // Horizontal sinusoidal sway
        p.x += Math.sin(p.phase) * p.sway;
        p.phase += p.swaySpeed;

        // Rotation & glow pulsing
        p.rotation += p.rotationSpeed;
        p.glowPhase += 0.04;

        // Screen boundary wrap-around
        if (p.isRising) {
          // Rising particle exited top
          if (p.y < -p.size * 3) {
            particles[i] = createParticle(false);
          }
        } else {
          // Falling particle exited bottom
          if (p.y > height + p.size * 3) {
            particles[i] = createParticle(false);
          }
        }

        // Horizontal wrap
        if (p.x > width + p.size * 3) {
          p.x = -p.size * 3;
        } else if (p.x < -p.size * 3) {
          p.x = width + p.size * 3;
        }

        drawParticle(p);
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    // Resize handler: only re-initialize if width changed (avoids mobile address bar flicker)
    const handleResize = () => {
      const newWidth = window.innerWidth;
      if (Math.abs(newWidth - lastWidth) > 30) {
        lastWidth = newWidth;
        setupCanvasSize();
        // Re-scatter particles across new width
        particles.forEach((p) => {
          if (p.x > width) p.x = Math.random() * width;
        });
      } else {
        // Only adjust height bounds smoothly
        height = window.innerHeight;
      }
    };

    // Tab visibility handler: pause animation when browser tab is hidden
    const handleVisibilityChange = () => {
      if (document.hidden) {
        isPaused = true;
        if (animationFrameId) cancelAnimationFrame(animationFrameId);
      } else {
        isPaused = false;
        animationFrameId = requestAnimationFrame(render);
      }
    };

    window.addEventListener('resize', handleResize, { passive: true });
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [activeSeason, config, isDark, prefersReducedMotion]);

  // If effect is disabled or user reduced motion, do not render canvas
  if (config.respectReducedMotion && prefersReducedMotion) return null;
  if (!activeSeason || activeSeason === 'none') return null;

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-[35] overflow-hidden"
    />
  );
}

export default SeasonEffect;
