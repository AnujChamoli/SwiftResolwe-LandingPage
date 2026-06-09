import { motion } from "framer-motion";
import { Cpu } from "lucide-react";

export const Manifesto = () => {
  return (
    <section
      data-testid="manifesto-section"
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-faint opacity-25" />
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[420px] bg-[var(--accent)] opacity-[0.05] blur-[120px]" />
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="relative max-w-5xl mx-auto px-5 sm:px-8 text-center"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--border-soft)] bg-[var(--bg-surface)]/60 mb-8">
          <Cpu size={14} className="text-[var(--accent)]" />
          <span className="font-mono-ui text-[10px] tracking-[0.22em] text-[var(--accent)] uppercase">
            Technology Manifesto
          </span>
        </div>
        <h2 className="font-display text-3xl sm:text-5xl lg:text-[3.4rem] leading-[1.08] font-semibold text-[var(--text-primary)]">
          AI as <span className="text-[var(--accent)]">Scaffolding</span>, <br className="hidden sm:block" />
          Not the Judiciary.
        </h2>
        <p className="mt-6 text-base sm:text-lg text-[var(--text-secondary)] max-w-3xl mx-auto leading-relaxed">
          We use AI to organize filings, summarize complex document stacks, and route cases
          dynamically, but never to decide them. The adjudicatory decisions stay strictly human.
        </p>
      </motion.div>
    </section>
  );
};
