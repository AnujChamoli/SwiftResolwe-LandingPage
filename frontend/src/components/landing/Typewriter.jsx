import { useEffect, useRef, useState } from "react";

/**
 * Typewriter reveal — keeps the FULL text in the DOM for SR/SEO and
 * animates a clip-path mask that "wipes" left → right while a caret blinks.
 *
 * Total reveal duration is fixed (~1.2s) regardless of text length, so long
 * paragraphs still complete in time.
 */
export const Typewriter = ({
  as: Tag = "p",
  text,
  className = "",
  duration = 1200,
  delay = 0,
  testId,
}) => {
  const ref = useRef(null);
  const [state, setState] = useState("idle"); // idle | typing | done
  const startedRef = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      setState("done");
      return;
    }

    const start = () => {
      if (startedRef.current) return;
      startedRef.current = true;
      window.setTimeout(() => {
        setState("typing");
        window.setTimeout(() => setState("done"), duration + 50);
      }, delay);
    };

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && start());
      },
      { threshold: 0.2 }
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, [duration, delay]);

  const status = state === "typing" ? "is-typing" : state === "done" ? "is-done" : "";

  return (
    <Tag ref={ref} className={className} data-testid={testId}>
      <span
        className={`typewriter-target ${status}`}
        style={{ transitionDuration: `${duration}ms` }}
      >
        {text}
      </span>
    </Tag>
  );
};
