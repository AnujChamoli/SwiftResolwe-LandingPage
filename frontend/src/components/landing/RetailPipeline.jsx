import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FileText, MessagesSquare, GitBranch, ArrowRight } from "lucide-react";

const STEPS = [
  {
    no: "01",
    icon: FileText,
    title: "Digital Statement of Claim (SOC) Lodging",
    copy: "Submit your Statement of Claim through our structured ODR portal. The engine automatically structures the claim, hashes evidentiary files for Bharatiya Sakshya Adhiniyam compliance, and executes multi-channel automated notice delivery.",
  },
  {
    no: "02",
    icon: MessagesSquare,
    title: "Asynchronous Omni-Channel Engagement",
    copy: "The respondent receives a secure, time-sensitive token. Upon registration, they enter an encrypted digital vault to engage in text-based counter-offers and document exchange without physical confrontation.",
  },
  {
    no: "03",
    icon: GitBranch,
    title: "Procedural Escalation & Binding Finality",
    copy: "Monitor the complete dispute lifecycle via a centralized dashboard. If pre-institution negotiation stalls, trigger seamless escalation to Tier 2 Certified Mediation or Tier 3 Arbitration to secure a final Civil Court Decree.",
  },
];

export const RetailPipeline = () => {
  const navigate = useNavigate();
  return (
    <section
      id="retail"
      data-testid="retail-section"
      className="relative py-24 sm:py-32 bg-[var(--bg-base)] overflow-hidden"
    >
      <div className="absolute inset-0 bg-dots opacity-25" />
      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <div className="max-w-4xl">
          <div className="kicker mb-5" data-testid="retail-kicker">MANUAL INTAKE</div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-[var(--text-primary)] leading-[1.1]">
            <span className="text-[var(--accent)]">Enterprise-Grade</span> Finality. <br className="hidden sm:block" />
            Accessible for Standalone Claims.
          </h2>
        </div>

        <div className="mt-16 relative">
          {/* horizontal connector */}
          <div className="hidden lg:block absolute top-[42px] left-[8%] right-[8%] h-px bg-gradient-to-r from-transparent via-[var(--accent)]/40 to-transparent" />

          <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
            {STEPS.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.no}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  data-testid={`retail-step-${s.no}`}
                  className="relative"
                >
                  <div className="relative z-10 mx-auto w-[88px] h-[88px] rounded-2xl border border-[var(--accent)]/30 bg-[var(--bg-base)] flex items-center justify-center">
                    <Icon size={28} className="text-[var(--accent)]" />
                  </div>
                  <div className="mt-5 text-center font-mono-ui text-xs tracking-[0.22em] text-[var(--accent)]">
                    STEP {s.no}
                  </div>
                  <h3 className="mt-3 text-center font-display text-xl font-semibold text-[var(--text-primary)] leading-snug">
                    {s.title}
                  </h3>
                  <p className="mt-4 text-center text-[0.92rem] text-[var(--text-secondary)] leading-relaxed">
                    {s.copy}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="mt-16 flex flex-wrap gap-4 justify-center">
          <button
            onClick={() => navigate("/file-a-dispute")}
            data-testid="retail-cta-file"
            className="btn-primary"
          >
            File a Statement of Claim <ArrowRight size={14} />
          </button>
          <button data-testid="retail-cta-fees" className="btn-outline">
            View Retail Fee Schedule
          </button>
        </div>
      </div>
    </section>
  );
};
