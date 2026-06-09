import { motion, useScroll, useSpring } from "framer-motion";

export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.2 });
  return (
    <motion.div
      data-testid="scroll-progress"
      style={{ scaleX, transformOrigin: "0% 50%" }}
      className="fixed top-0 left-0 right-0 h-[2px] z-[60]"
    >
      <div className="h-full w-full bg-gradient-to-r from-[var(--accent-deep)] via-[var(--accent)] to-[var(--accent-bright)]" />
    </motion.div>
  );
};
