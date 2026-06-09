import { motion } from "framer-motion";
import { ShieldAlert } from "lucide-react";

export const Jurisdiction = () => {
  return (
    <section
      data-testid="jurisdiction-section"
      className="relative py-20 sm:py-28 bg-[var(--bg-base)] overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-faint opacity-40" />
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.65 }}
        className="relative max-w-6xl mx-auto px-5 sm:px-8"
      >
        <div className="relative rounded-3xl border border-[var(--accent)]/25 bg-[var(--bg-surface)] p-8 sm:p-12 overflow-hidden shadow-[0_1px_3px_rgba(15,23,42,0.06),_0_24px_60px_rgba(8,145,178,0.10)]">
          <div className="absolute -top-32 -right-32 w-[460px] h-[460px] rounded-full bg-[var(--accent-bright)] opacity-[0.10] blur-3xl" />
          <div className="relative flex items-start gap-5">
            <div className="hidden sm:inline-flex shrink-0 w-12 h-12 items-center justify-center rounded-xl bg-[var(--accent)]/10 border border-[var(--accent)]/25 text-[var(--accent-deep)]">
              <ShieldAlert size={22} />
            </div>
            <div>
              <div className="font-mono-ui text-[10px] tracking-[0.26em] text-[var(--accent-deep)] uppercase">
                Jurisdictional Clarity
              </div>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-[2.6rem] font-semibold text-[var(--text-primary)] leading-tight">
                What We Are Not
              </h2>
              <p className="mt-5 text-base sm:text-lg text-[var(--text-secondary)] max-w-3xl leading-relaxed justify-pretty">
                SwiftResolwe is not a court. We provide the procedural infrastructure, qualified
                neutrals, and institutional rules within which disputes are conclusively resolved.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
