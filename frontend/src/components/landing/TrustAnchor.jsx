import { motion } from "framer-motion";
import { useCountUp } from "@/hooks/useCountUp";

const TICKER_ITEMS = [
  "Modular Workflows: Standalone or Sequential Neg-Med-Arb",
  "Blockchain-Backed Evidentiary Trails (Bharatiya Sakshya Adhiniyam Compliant)",
  "DPDP Act 2023 Secure Data Localization",
  "ISO 27001 Certified Infrastructure",
  "Enforceable as a Civil Court Decree under the Arbitration and Conciliation Act, 1996",
  "Fully Aligned with the Indian Mediation Act, 2023 Framework",
  "Pan-India Panel of Certified Neutrals",
  "Bank-Grade End-to-End Encryption",
  "Operational Across 28 States & UTs",
];

const MetricCard = ({ value, suffix, label, decimals = 0, testId }) => {
  const { ref, display } = useCountUp(value, 1800, decimals);
  return (
    <div
      ref={ref}
      data-testid={testId}
      className="relative glass rounded-2xl p-8 sm:p-10 glass-hover"
    >
      <div className="absolute top-6 right-6 font-mono-ui text-[10px] tracking-[0.22em] text-[var(--accent)]">
        // 01
      </div>
      <div className="font-display text-5xl sm:text-6xl font-semibold text-[var(--text-primary)] leading-none">
        <span data-testid={`${testId}-number`}>{display}</span>
        <span className="text-[var(--accent)]">{suffix}</span>
      </div>
      <div className="mt-5 font-mono-ui text-[11px] tracking-[0.22em] text-[var(--text-secondary)] uppercase">
        {label}
      </div>
    </div>
  );
};

const PlaceholderLogo = ({ name, type, mark }) => (
  <div
    data-testid={`logo-${name.replace(/\s+/g, "-").toLowerCase()}`}
    className="flex items-center gap-2.5 px-5 py-3 rounded-xl border border-[var(--border-soft)] bg-[var(--bg-surface)]/40 grayscale opacity-60 hover:opacity-90 transition"
  >
    <span className="inline-flex items-center justify-center w-7 h-7 rounded-md bg-[var(--bg-surface-2)] text-[var(--text-secondary)] font-mono-ui text-[10px]">
      {mark}
    </span>
    <div className="leading-tight">
      <div className="font-display text-[0.95rem] font-semibold text-[var(--text-secondary)] tracking-tight">
        {name}
      </div>
      <div className="font-mono-ui text-[9px] tracking-[0.2em] text-[var(--text-muted)] uppercase">
        {type}
      </div>
    </div>
  </div>
);

const LOGOS = [
  { name: "Argent Capital", type: "Universal Bank", mark: "AC" },
  { name: "Northwind NBFC", type: "Non-Banking Finance", mark: "NW" },
  { name: "Sablefin Pay", type: "Digital Payments", mark: "SP" },
  { name: "Meridian Trust Bank", type: "Universal Bank", mark: "MT" },
  { name: "Veracore Insurance", type: "General Insurer", mark: "VC" },
  { name: "Kavach Lending", type: "MSME Lender", mark: "KL" },
  { name: "Trellis Commerce", type: "Marketplace", mark: "TC" },
  { name: "Helio Mutuals", type: "Asset Management", mark: "HM" },
];

export const TrustAnchor = () => {
  return (
    <section
      data-testid="trust-section"
      className="relative py-20 sm:py-24 bg-[var(--bg-surface)] border-y border-[var(--border-soft)] overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-faint opacity-30" />
      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        {/* Layer 1 — metrics */}
        <div className="grid sm:grid-cols-3 gap-4 sm:gap-6">
          <MetricCard
            testId="metric-resolution-time"
            value={45}
            suffix=" Days"
            label="Avg Resolution Time"
          />
          <MetricCard
            testId="metric-cost-reduction"
            value={90}
            suffix="%"
            label="Cost Reduction"
          />
          <MetricCard
            testId="metric-enforceability"
            value={100}
            suffix="%"
            label="Statutory Enforceability"
          />
        </div>

        {/* Layer 2 — ticker */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          data-testid="ticker"
          className="marquee mt-14 border-y border-[var(--border-soft)] py-5 bg-[var(--bg-base)]/60"
        >
          <div className="marquee-track">
            {[...TICKER_ITEMS, ...TICKER_ITEMS].map((t, i) => (
              <div key={i} className="flex items-center gap-6 px-6">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
                <span className="font-mono-ui text-[0.78rem] tracking-[0.12em] text-[var(--text-primary)] uppercase whitespace-nowrap">
                  {t}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Layer 3 — logos */}
        <div className="mt-16">
          <div className="text-center font-mono-ui text-[11px] tracking-[0.28em] text-[var(--text-muted)] uppercase mb-8">
            Trusted by Leading Institutions Across India
          </div>
          <div
            data-testid="logo-band"
            className="flex flex-wrap justify-center items-center gap-3 sm:gap-4"
          >
            {LOGOS.map((l) => (
              <PlaceholderLogo key={l.name} {...l} />
            ))}
          </div>
          <div className="mt-5 text-center font-mono-ui text-[10px] tracking-[0.2em] text-[var(--text-muted)] uppercase">
            * Illustrative placeholders — not affiliated institutions.
          </div>
        </div>
      </div>
    </section>
  );
};
