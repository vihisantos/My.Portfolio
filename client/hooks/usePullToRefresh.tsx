import * as React from "react";

/**
 * Hook for a simple pull‑to‑refresh gesture on mobile devices.
 * It tracks vertical touch movement when the page is scrolled to the top.
 * When the pull distance exceeds a threshold (80 px) it triggers the
 * provided `onRefresh` callback and optionally shows a refreshing UI.
 *
 * The hook returns a boolean `isRefreshing` and an object `bind`
 * containing the touch event handlers which should be spread onto the
 * container element you want to enable the gesture on.
 */
export function usePullToRefresh(
  onRefresh: () => Promise<void> | void,
  threshold = 80,
) {
  const [isRefreshing, setIsRefreshing] = React.useState(false);
  const startYRef = React.useRef<number | null>(null);
  const hasPulledRef = React.useRef(false);

  const onTouchStart = (e: React.TouchEvent) => {
    // Only start when we are at the very top of the page
    if (window.scrollY === 0) {
      startYRef.current = e.touches[0].clientY;
      hasPulledRef.current = false;
    }
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (startYRef.current !== null) {
      const diff = e.touches[0].clientY - startYRef.current;
      if (diff > threshold && !hasPulledRef.current) {
        hasPulledRef.current = true;
        // Light haptic feedback if supported
        if (navigator.vibrate) navigator.vibrate(10);
      }
    }
  };

  const onTouchEnd = async (e: React.TouchEvent) => {
    if (hasPulledRef.current) {
      setIsRefreshing(true);
      try {
        await onRefresh();
      } finally {
        setIsRefreshing(false);
        startYRef.current = null;
        hasPulledRef.current = false;
      }
    } else {
      startYRef.current = null;
      hasPulledRef.current = false;
    }
  };

  return {
    isRefreshing,
    bind: {
      onTouchStart,
      onTouchMove,
      onTouchEnd,
    },
  };
}
