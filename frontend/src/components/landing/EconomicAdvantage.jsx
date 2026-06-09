import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { useCountUp } from "@/hooks/useCountUp";
import { TrendingDown, Clock, Wallet } from "lucide-react";

const inrFormat = (n) => {
  if (n >= 1e7) return `₹${(n / 1e7).toFixed(2)} Cr`;
  if (n >= 1e5) return `₹${(n / 1e5).toFixed(1)} L`;
  return `₹${Math.round(n).toLocaleString("en-IN")}`;
};

const MetricCard = ({ value, suffix, label, icon: Icon, testId }) => {
  const { ref, display } = useCountUp(value, 1800);
  return (
    <div
      ref={ref}
      data-testid={testId}
      className="card-light p-6"
    >
      <div className="flex items-center justify-between">
        <Icon size={18} className="text-[var(--accent-deep)]" />
        <span className="font-mono-ui text-[10px] tracking-[0.22em] text-[var(--text-muted)]">
          METRIC
        </span>
      </div>
      <div className="mt-5 font-display text-5xl sm:text-[3.4rem] font-semibold text-[var(--text-primary)] leading-none">
        <span>{display}</span>
        <span className="text-[var(--accent-deep)]">{suffix}</span>
      </div>
      <div className="mt-3 font-mono-ui text-[11px] tracking-[0.22em] text-[var(--text-secondary)] uppercase">
        {label}
      </div>
    </div>
  );
};

const TimelineBar = ({ widthPct, color, label, value, note, testId, delay }) => (
  <div data-testid={testId} className="relative">
    <div className="flex items-baseline justify-between mb-3">
      <div className="font-mono-ui text-[10px] tracking-[0.22em] uppercase" style={{ color }}>
        {label}
      </div>
      <div className="font-display text-xl font-semibold" style={{ color }}>
        {value}
      </div>
    </div>
    <div className="h-3 w-full rounded-full bg-[var(--bg-surface-2)] border border-[var(--border-soft)] overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${widthPct}%` }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1.6, delay, ease: [0.16, 1, 0.3, 1] }}
        className="h-full rounded-full"
        style={{
          background: `linear-gradient(to right, ${color}cc, ${color})`,
          boxShadow: `0 0 24px ${color}40`,
        }}
      />
    </div>
    <p className="mt-3 text-[0.88rem] text-[var(--text-secondary)] leading-relaxed">
      {note}
    </p>
  </div>
);

// Deterministic estimate model — regressive traditional-cost share + claim-scaled court days.
const estimate = (claim) => {
  let tradRate;
  if (claim <= 1_000_000) tradRate = 0.30;
  else if (claim <= 5_000_000) tradRate = 0.25;
  else if (claim <= 10_000_000) tradRate = 0.18;
  else if (claim <= 50_000_000) tradRate = 0.12;
  else tradRate = 0.08;

  const tradCost = Math.max(claim * tradRate, 150_000);
  const odrCost = tradCost * 0.12;
  const costSaved = tradCost - odrCost;
  const pctSaved = Math.round((costSaved / tradCost) * 100);

  let courtDays;
  if (claim <= 1_000_000) courtDays = 900;
  else if (claim <= 5_000_000) courtDays = 1_100;
  else if (claim <= 10_000_000) courtDays = 1_500;
  else if (claim <= 50_000_000) courtDays = 2_400;
  else courtDays = 3_300;

  const odrDays = 45;
  const daysSaved = courtDays - odrDays;

  return { tradCost, odrCost, costSaved, pctSaved, courtDays, odrDays, daysSaved };
};

export const EconomicAdvantage = () => {
  const [claim, setClaim] = useState(2500000);
  const min = 100000;
  const max = 100000000;

  const s = useMemo(() => estimate(claim), [claim]);

  return (
    <section
      id="economics"
      data-testid="economics-section"
      className="relative py-24 sm:py-32 bg-[var(--bg-surface-2)] border-y border-[var(--border-soft)] overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-faint opacity-50" />
      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <div className="max-w-3xl">
          <div className="kicker mb-5" data-testid="economics-kicker">COST BENEFIT OPTIMIZATION</div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-[var(--text-primary)] leading-[1.1]">
            The Numbers Work in <span className="text-[var(--accent-deep)]">Your Favor</span>.
          </h2>
          <p className="mt-5 text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed justify-pretty">
            See exactly what you save in time, money, and legal capacity when you move disputes off
            the docket and onto SwiftResolwe.
          </p>
        </div>

        <div className="mt-14 grid lg:grid-cols-[1.2fr_1fr] gap-8 lg:gap-10">
          {/* Timeline */}
          <div className="card-light p-7 sm:p-9">
            <div className="font-mono-ui text-[10px] tracking-[0.22em] text-[var(--accent-deep)] uppercase">
              Dynamic Resolution Timeline
            </div>
            <h3 className="mt-3 font-display text-xl sm:text-2xl font-semibold text-[var(--text-primary)]">
              Court versus SwiftResolwe. True 22x scale.
            </h3>

            <div className="mt-10 space-y-10">
              <TimelineBar
                testId="timeline-court"
                widthPct={97}
                color="#64748B"
                label="Traditional Indian Court or Ad Hoc Proceedings"
                value="1,000+ Days"
                note="Vulnerable to ad interim stays, perennial backlogs, uncapped billable hours, and mandatory physical appearances."
                delay={0}
              />
              <TimelineBar
                testId="timeline-odr"
                widthPct={4.5}
                color="#0891B2"
                label="The SwiftResolwe ODR Engine (active state)"
                value="45 Days Fixed Processing Window"
                note="Driven by blockchain anchored cryptographic evidence under Section 63 of the BSA, 2023, and fully recoverable legal expenses under Section 31A of the Arbitration Act."
                delay={0.3}
              />
            </div>
          </div>

          <div className="grid gap-4 sm:gap-5 content-start">
            <MetricCard testId="metric-faster" value={22} suffix="x" label="Faster Resolution" icon={Clock} />
            <MetricCard testId="metric-saved" value={90} suffix="%" label="Total Costs Saved" icon={TrendingDown} />
            <MetricCard testId="metric-recovery" value={78} suffix="%" label="Aggregate Recovery Rate" icon={Wallet} />
          </div>
        </div>

        {/* Slider */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          data-testid="claim-calculator"
          className="mt-10 card-light p-7 sm:p-9"
        >
          <div className="grid lg:grid-cols-[1fr_1.1fr] gap-8 items-center">
            <div>
              <div className="font-mono-ui text-[10px] tracking-[0.22em] text-[var(--accent-deep)] uppercase">
                Interactive: Claim Amount Lever
              </div>
              <h3 className="mt-3 font-display text-xl sm:text-2xl font-semibold text-[var(--text-primary)]">
                Set your claim. Watch the math react.
              </h3>
              <p className="mt-3 text-[0.92rem] text-[var(--text-secondary)] leading-relaxed">
                Drag the slider from ₹1L to ₹10Cr. Figures are illustrative and directional.
              </p>
              <div className="mt-7">
                <div className="flex items-baseline justify-between mb-3">
                  <span className="font-mono-ui text-[10px] tracking-[0.2em] text-[var(--text-muted)] uppercase">
                    Claim Amount
                  </span>
                  <span
                    data-testid="claim-display"
                    className="font-display text-2xl font-semibold text-[var(--accent-deep)]"
                  >
                    {inrFormat(claim)}
                  </span>
                </div>
                <input
                  type="range"
                  min={min}
                  max={max}
                  step={50000}
                  value={claim}
                  onChange={(e) => setClaim(Number(e.target.value))}
                  className="claim-slider"
                  data-testid="claim-slider"
                  aria-label="Claim amount in INR"
                />
                <div className="flex justify-between mt-2 font-mono-ui text-[10px] tracking-[0.18em] text-[var(--text-muted)]">
                  <span>₹1L</span>
                  <span>₹10Cr</span>
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="rounded-2xl p-5 border border-[var(--accent)]/25 bg-[var(--accent)]/[0.05]">
                <div className="font-mono-ui text-[10px] tracking-[0.22em] text-[var(--accent-deep)] uppercase">
                  Est. Cost Saved
                </div>
                <motion.div
                  key={s.costSaved}
                  initial={{ opacity: 0.4, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35 }}
                  data-testid="calc-cost-saved"
                  className="mt-3 font-display text-3xl sm:text-[2.2rem] font-semibold text-[var(--text-primary)] leading-none"
                >
                  {inrFormat(s.costSaved)}
                </motion.div>
                <div
                  data-testid="calc-cost-saved-pct"
                  className="mt-2 font-mono-ui text-[10px] tracking-[0.2em] text-[var(--text-muted)] uppercase"
                >
                  ~{s.pctSaved}% versus traditional litigation
                </div>
              </div>
              <div className="rounded-2xl p-5 border border-[var(--accent)]/25 bg-[var(--accent)]/[0.05]">
                <div className="font-mono-ui text-[10px] tracking-[0.22em] text-[var(--accent-deep)] uppercase">
                  Est. Days Saved
                </div>
                <motion.div
                  key={s.daysSaved}
                  initial={{ opacity: 0.4, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35 }}
                  data-testid="calc-days-saved"
                  className="mt-3 font-display text-3xl sm:text-[2.2rem] font-semibold text-[var(--text-primary)] leading-none"
                >
                  {s.daysSaved.toLocaleString("en-IN")}+ Days
                </motion.div>
                <div
                  data-testid="calc-days-comparison"
                  className="mt-2 font-mono-ui text-[10px] tracking-[0.2em] text-[var(--text-muted)] uppercase"
                >
                  ~{s.courtDays.toLocaleString("en-IN")}+ days in court to 45 days here
                </div>
              </div>
              <div
                data-testid="calc-disclaimer"
                className="sm:col-span-2 rounded-xl border border-dashed border-[var(--border-soft)] p-4 text-[11px] font-mono-ui tracking-[0.06em] text-[var(--text-muted)] leading-relaxed"
              >
                Illustrative and directional only. Not a quote or binding fee schedule. Based on
                published ranges for Indian litigation and arbitration costs and on court pendency
                data. Actual figures vary by case.
              </div>
            </div>
          </div>
        </motion.div>

        {/* Fee panels */}
        <div className="mt-10 grid lg:grid-cols-2 gap-5 lg:gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55 }}
            data-testid="fee-panel-institutional"
            className="card-light p-7"
          >
            <div className="font-mono-ui text-[10px] tracking-[0.22em] text-[var(--accent-deep)] uppercase">
              Panel A · Institutional Portfolio Licensing
            </div>
            <h3 className="mt-3 font-display text-xl font-semibold text-[var(--text-primary)]">
              Engineered for Banks, NBFCs, and Fintech platforms.
            </h3>
            <p className="mt-3 text-[0.94rem] text-[var(--text-secondary)] leading-relaxed">
              Custom tailor your operational costs via bulk annualized SaaS subscription matrices
              or volume scaled API ingestion tiers.
            </p>
            <a href="#" className="cta-link mt-5" data-testid="fee-cta-institutional">
              Request Institutional Fee Schedule →
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: 0.08 }}
            data-testid="fee-panel-retail"
            className="card-light p-7"
          >
            <div className="font-mono-ui text-[10px] tracking-[0.22em] text-[var(--accent-deep)] uppercase">
              Panel B · Retail MSME & Standalone Claims
            </div>
            <h3 className="mt-3 font-display text-xl font-semibold text-[var(--text-primary)]">
              Zero onboarding charges. Pay only at lodging.
            </h3>
            <p className="mt-3 text-[0.94rem] text-[var(--text-secondary)] leading-relaxed">
              Zero onboarding charges or recurring infrastructure maintenance retainers. Pay a
              transparent, value scaled flat fee strictly tied to your claim bracket amount at the
              moment of file lodging.
            </p>
            <a href="#" className="cta-link mt-5" data-testid="fee-cta-retail">
              Download Scale Based Retail Fee Matrix (PDF) →
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
