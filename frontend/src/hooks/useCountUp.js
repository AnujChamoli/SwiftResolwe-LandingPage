import { useEffect, useRef, useState } from "react";

/**
 * useCountUp — starts counting when the bound element enters viewport.
 * @param {number} end - target number
 * @param {number} duration - ms
 * @param {number} decimals - decimal places
 */
export function useCountUp(end, duration = 1600, decimals = 0) {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const startedRef = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const start = () => {
      if (startedRef.current) return;
      startedRef.current = true;
      if (prefersReducedMotion) {
        setValue(end);
        return;
      }
      const startTime = performance.now();
      const tick = (now) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setValue(end * eased);
        if (progress < 1) requestAnimationFrame(tick);
        else setValue(end);
      };
      requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) start();
        });
      },
      { threshold: 0.35 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [end, duration]);

  const display = decimals > 0 ? value.toFixed(decimals) : Math.round(value).toLocaleString("en-IN");
  return { ref, value, display };
}
