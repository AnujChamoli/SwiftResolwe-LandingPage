import { useEffect, useRef, useState } from "react";

/**
 * Typewriter reveal — full text persists in the DOM (a11y + SEO).
 * Animates a left→right clip-path wipe and uses CSS pseudo elements
 * to draw a glowing cyan caret + soft sweep that ride the reveal edge.
 */
export const Typewriter = ({
  as: Tag = "p",
  text,
  className = "",
  duration = 1600,
  delay = 0,
  testId,
}) => {
  const ref = useRef(null);
  const [state, setState] = useState("idle");
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
        window.setTimeout(() => setState("done"), duration + 60);
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

  const status =
    state === "typing" ? "is-typing" : state === "done" ? "is-done" : "";

  return (
    <Tag ref={ref} className={className} data-testid={testId}>
      <span
        className={`typewriter-target ${status}`}
        style={{ transitionDuration: `${duration}ms`, "--tw-edge": status === "is-typing" ? "100%" : "0%" }}
      >
        {text}
      </span>
    </Tag>
  );
};
