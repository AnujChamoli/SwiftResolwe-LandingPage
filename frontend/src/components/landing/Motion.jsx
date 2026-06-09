import { motion, useReducedMotion } from "framer-motion";

/**
 * Wraps a section with a cinematic "focus in" reveal:
 * opacity + translateY + scale + blur → settled.
 * Honors prefers-reduced-motion.
 */
export const SectionReveal = ({ children, className = "", as: Tag = "div", id }) => {
  const reduce = useReducedMotion();
  if (reduce) {
    return (
      <Tag id={id} className={className}>
        {children}
      </Tag>
    );
  }
  const MotionTag = motion[Tag] || motion.div;
  return (
    <MotionTag
      id={id}
      className={className}
      initial={{ opacity: 0, y: 48, scale: 0.985, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-12%" }}
      transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </MotionTag>
  );
};

/**
 * Scan-line divider — a thin cyan-to-transparent gradient that sweeps once
 * when scrolled into view. Subtle, premium, not flashy.
 */
export const ScanDivider = () => {
  const reduce = useReducedMotion();
  return (
    <div className="relative w-full h-10 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-gradient-to-r from-transparent via-[var(--border-soft)] to-transparent" />
      {!reduce && (
        <motion.div
          initial={{ x: "-30%", opacity: 0 }}
          whileInView={{ x: "130%", opacity: 1 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
          className="absolute top-1/2 -translate-y-1/2 h-[2px] w-[28%]"
          style={{
            background:
              "linear-gradient(to right, transparent, rgba(6,182,212,0.7), transparent)",
            boxShadow: "0 0 12px rgba(6,182,212,0.45)",
          }}
        />
      )}
    </div>
  );
};

/**
 * Animated CTA cluster — staggers micro-copy → primary → secondary.
 * The primary button gets a one-time arrival pulse.
 */
const clusterParent = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};
const clusterItem = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } },
};

export const CTACluster = ({ children, className = "" }) => {
  return (
    <motion.div
      variants={clusterParent}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const CTAItem = ({ children, className = "" }) => (
  <motion.div variants={clusterItem} className={className}>
    {children}
  </motion.div>
);
