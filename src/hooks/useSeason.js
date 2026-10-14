import { useState, useEffect, useMemo, useCallback } from 'react';
import { seasonConfig } from '../config/season';

/**
 * Calculates season based on autoMonths and current calendar month
 */
function getAutoSeason() {
  const currentMonth = new Date().getMonth() + 1; // 1 to 12
  const { autoMonths } = seasonConfig;

  if (autoMonths?.spring?.includes(currentMonth)) return 'spring';
  if (autoMonths?.summer?.includes(currentMonth)) return 'summer';
  if (autoMonths?.autumn?.includes(currentMonth)) return 'autumn';
  if (autoMonths?.winter?.includes(currentMonth)) return 'winter';

  return 'winter';
}

/**
 * Hook useSeason:
 * Determines the active season according to priority:
 * 1. URL Query parameter ?season=... (e.g. ?season=winter, ?season=spring)
 * 2. Visitor's manual choice stored in localStorage (if allowVisitorSwitch is true)
 * 3. seasonConfig.mode (if 'auto', resolves via current month and autoMonths)
 */
export function useSeason() {
  // Query parameter has highest testing priority
  const querySeason = useMemo(() => {
    if (typeof window === 'undefined') return null;
    try {
      const params = new URLSearchParams(window.location.search);
      const val = params.get('season')?.toLowerCase();
      if (val && (val === 'none' || val === 'auto' || seasonConfig.effects[val])) {
        return val;
      }
    } catch {
      // Ignore URL parsing errors
    }
    return null;
  }, []);

  // Visitor manual choice state ('auto', 'spring', 'summer', 'autumn', 'winter', 'none')
  const [visitorChoice, setVisitorChoiceState] = useState(() => {
    if (querySeason) return querySeason;
    if (typeof window === 'undefined') return seasonConfig.mode || 'auto';
    try {
      if (seasonConfig.allowVisitorSwitch) {
        const saved = localStorage.getItem('visitor_season');
        if (saved && (saved === 'auto' || saved === 'none' || seasonConfig.effects[saved])) {
          return saved;
        }
      }
    } catch {
      // Ignore localStorage read errors
    }
    return seasonConfig.mode || 'auto';
  });

  const setSeasonChoice = useCallback((choice) => {
    setVisitorChoiceState(choice);
    try {
      if (typeof window !== 'undefined' && seasonConfig.allowVisitorSwitch) {
        localStorage.setItem('visitor_season', choice);
      }
    } catch (e) {
      console.warn('Could not save visitor season to localStorage:', e);
    }
  }, []);

  // Compute the final active season effect key ('spring', 'summer', 'autumn', 'winter', or 'none')
  const activeSeason = useMemo(() => {
    // 1. Query string priority
    if (querySeason) {
      if (querySeason === 'auto') return getAutoSeason();
      return querySeason;
    }

    // 2. Visitor choice priority (if enabled)
    const effectiveMode = seasonConfig.allowVisitorSwitch
      ? visitorChoice
      : seasonConfig.mode;

    // 3. Resolve 'auto' mode or return explicit mode
    if (effectiveMode === 'auto') {
      return getAutoSeason();
    }

    return effectiveMode || 'none';
  }, [querySeason, visitorChoice]);

  return {
    activeSeason,          // 'spring' | 'summer' | 'autumn' | 'winter' | 'none'
    visitorChoice,         // 'auto' | 'spring' | 'summer' | 'autumn' | 'winter' | 'none'
    setSeasonChoice,       // function to switch choice
    allowVisitorSwitch: seasonConfig.allowVisitorSwitch && !querySeason,
    config: seasonConfig,
  };
}

export default useSeason;
