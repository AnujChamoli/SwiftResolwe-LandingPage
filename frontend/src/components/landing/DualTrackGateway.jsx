import { motion } from "framer-motion";
import { User, Building2, CheckCircle2 } from "lucide-react";

const TRACKS = [
  {
    side: "individual",
    icon: User,
    over: "For Individuals & MSMEs",
    headline: "Personal Guidance, Step-by-Step.",
    sub: "A guided journey — from understanding your options to filing a watertight claim — supported by experienced case managers.",
    pillars: [
      "Pre-filing consultation with an empanelled case manager.",
      "Document checklist + automated drafting assistance.",
      "Multi-channel vernacular notices issued in 11 Indian languages.",
      "Transparent, pay-as-you-go pricing with zero upfront retainers.",
    ],
    cta: { label: "Explore Retail Workflow", anchor: "#retail" },
  },
  {
    side: "enterprise",
    icon: Building2,
    over: "For Banks, NBFCs & Enterprises",
    headline: "Volume, Velocity, Visibility.",
    sub: "Plug SwiftResolwe into your collections, contracts, and compliance workflows. Bulk-onboard cases. Track every claim in real time.",
    pillars: [
      "RESTful API + secure SFTP CSV bulk upload for 100K+ concurrent cases.",
      "Institutional SLA dashboards & automated legal escalation triggers.",
      "White-labeled, custom-branded statutory notices & secure virtual hearing rooms.",
      "Dedicated enterprise customer success and legal operations managers.",
    ],
    cta: { label: "Explore Enterprise Architecture", anchor: "#enterprise" },
  },
];

export const DualTrackGateway = () => {
  return (
    <section
      id="gateway"
      data-testid="gateway-section"
      className="relative py-24 sm:py-32 bg-[var(--bg-base)] overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-faint opacity-25" />
      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <div className="max-w-3xl">
          <div className="kicker mb-5" data-testid="gateway-kicker">BUILT FOR BOTH SIDES</div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-[var(--text-primary)] leading-[1.1]">
            From a single MSME to a portfolio of <span className="text-[var(--accent)]">one million loans</span>.
          </h2>
          <p className="mt-5 text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
            Whether you are an individual recovering an outstanding invoice or an institution
            clear-cutting thousands of delinquencies, our infrastructure adapts to your operational
            scale.
          </p>
        </div>

        <div className="mt-14 grid lg:grid-cols-2 gap-5 lg:gap-6">
          {TRACKS.map((t, i) => {
            const Icon = t.icon;
            return (
              <motion.div
                key={t.side}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                data-testid={`gateway-card-${t.side}`}
                className="relative glass rounded-2xl p-7 sm:p-10 glass-hover overflow-hidden"
              >
                <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-[var(--accent)] opacity-[0.05] blur-3xl" />
                <div className="relative flex items-center gap-3 mb-6">
                  <div className="inline-flex w-11 h-11 items-center justify-center rounded-lg bg-[var(--accent)]/10 border border-[var(--accent)]/20 text-[var(--accent)]">
                    <Icon size={20} />
                  </div>
                  <span className="font-mono-ui text-[11px] tracking-[0.22em] text-[var(--accent)] uppercase">
                    {t.over}
                  </span>
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-semibold text-[var(--text-primary)] leading-tight">
                  {t.headline}
                </h3>
                <p className="mt-4 text-[var(--text-secondary)] text-[0.95rem] leading-relaxed">
                  {t.sub}
                </p>
                <ul className="mt-7 space-y-3">
                  {t.pillars.map((p) => (
                    <li key={p} className="flex items-start gap-3">
                      <CheckCircle2 size={16} className="text-[var(--accent)] mt-1 shrink-0" />
                      <span className="text-[var(--text-secondary)] text-[0.92rem] leading-relaxed">
                        {p}
                      </span>
                    </li>
                  ))}
                </ul>
                <a
                  href={t.cta.anchor}
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector(t.cta.anchor)?.scrollIntoView({ behavior: "smooth" });
                  }}
                  data-testid={`gateway-cta-${t.side}`}
                  className="cta-link mt-8"
                >
                  {t.cta.label} ↓
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
