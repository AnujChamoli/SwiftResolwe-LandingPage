import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Calendar } from "lucide-react";
import { TriageDiagram } from "@/components/landing/TriageDiagram";

const stagger = {
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

export const Hero = () => {
  const navigate = useNavigate();
  return (
    <section
      data-testid="hero-section"
      className="relative pt-28 sm:pt-32 lg:pt-40 pb-20 lg:pb-28 overflow-hidden grain"
    >
      <div className="absolute inset-0 bg-grid-faint opacity-[0.35]" />
      <div className="aurora" />
      <div className="absolute -top-24 -right-32 w-[640px] h-[640px] rounded-full bg-[var(--accent)] opacity-[0.07] blur-[140px] drift" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-[1.05fr_1fr] gap-12 lg:gap-16 items-center">
        <motion.div variants={stagger} initial="hidden" animate="show">
          <motion.div variants={item} className="kicker mb-6" data-testid="hero-kicker">
            INDIA&apos;S PREMIER ODR 2.0 INFRASTRUCTURE
          </motion.div>

          <motion.h1
            variants={item}
            data-testid="hero-headline"
            className="font-display text-4xl sm:text-5xl lg:text-[4rem] leading-[1.04] font-semibold text-[var(--text-primary)] max-w-[18ch]"
          >
            Conflict is a variable; <br className="hidden sm:block" />
            <span className="text-[var(--accent)]">Resolution</span> is a certainty.
          </motion.h1>

          <motion.p
            variants={item}
            data-testid="hero-subheadline"
            className="mt-6 text-base sm:text-lg text-[var(--text-secondary)] max-w-[58ch] leading-relaxed"
          >
            Bypass traditional courtroom stalemates. SwiftResolwe serves as the algorithmic bridge
            that automatically triages B2B and B2C disputes into optimized legal tiers, delivering
            enforceable finality with zero operational friction.
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-4">
            <button
              onClick={() => navigate("/file-a-dispute")}
              data-testid="hero-cta-file"
              className="btn-primary"
            >
              File a Dispute Now <ArrowRight size={16} />
            </button>
            <button
              onClick={() => navigate("/triage")}
              data-testid="hero-cta-book"
              className="btn-outline"
            >
              <Calendar size={16} />
              Book a 30-min Conflict/Dispute Evaluation
            </button>
          </motion.div>

          <motion.div variants={item} className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs font-mono-ui text-[var(--text-muted)] uppercase tracking-[0.18em]">
            <span>ISO 27001</span>
            <span className="w-1 h-1 rounded-full bg-[var(--text-muted)]" />
            <span>DPDP Act 2023</span>
            <span className="w-1 h-1 rounded-full bg-[var(--text-muted)]" />
            <span>BSA 2023 Compliant</span>
            <span className="w-1 h-1 rounded-full bg-[var(--text-muted)]" />
            <span>28 States &amp; UTs</span>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
          data-testid="hero-diagram"
        >
          <TriageDiagram />
        </motion.div>
      </div>
    </section>
  );
};
