import { motion } from "framer-motion";
import { Scale, Briefcase, MessageSquare, ArrowRight } from "lucide-react";

const CATEGORIES = [
  {
    no: "01",
    icon: Scale,
    title: "Elite Arbitral Tribunals & Sole Arbitrators",
    copy: "Assigned to Tier 3 binding adjudication. The panel comprises former Supreme Court, High Court, and District Court jurists, alongside senior advocates with 10+ years of active bar experience. Empanelment mandates strict execution of statutory disclosures under Section 12 of the Arbitration and Conciliation Act, 1996, read with the Fifth and Sixth Schedules, neutralizing any justifiable doubts regarding independence.",
  },
  {
    no: "02",
    icon: Briefcase,
    title: "Sector-Specific Neutrals",
    copy: "Complex commercial breaches require industry-specific comprehension. B2B conflicts are algorithmically matched with specialized neutrals vetted across distinct verticals—Banking, NBFC, Fintech, Real Estate, and Supply Chain Logistics. This prevents adjudicatory failure on technical commercial contracts and ensures precise interpretation of sector-specific regulatory frameworks.",
  },
  {
    no: "03",
    icon: MessageSquare,
    title: "Certified Mediators",
    copy: "Driving the Tier 2 diplomatic escalation workflow. These dispute resolution professionals hold accreditations from premier domestic and global mediation institutes. Utilizing facilitative and transformative negotiation methodologies, they operate strictly within the ethical codes, confidentiality mandates, and procedural rules of the Mediation Act, 2023.",
  },
];

export const PanelOfNeutrals = () => {
  return (
    <section
      id="panel"
      data-testid="panel-section"
      className="relative py-24 sm:py-32 bg-[var(--bg-surface)] border-y border-[var(--border-soft)] overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-faint opacity-25" />
      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <div className="max-w-3xl">
          <div className="kicker mb-5" data-testid="panel-kicker">DISPUTE RESOLUTION PROFESSIONALS</div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-[var(--text-primary)] leading-[1.1]">
            Algorithmic Triage. <br className="hidden sm:block" />
            <span className="text-[var(--accent)]">Domain-Expert</span> Adjudication.
          </h2>
          <p className="mt-5 text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
            The technological infrastructure ensures speed; the empanelled roster ensures
            unassailable legal validity. SwiftResolwe deploys independent, qualified neutrals
            vetted for domain-specific expertise, executing proceedings in strict compliance with
            statutory mandates of independence and impartiality.
          </p>
        </div>

        <div className="mt-14 grid lg:grid-cols-3 gap-5 lg:gap-6">
          {CATEGORIES.map((c, i) => {
            const Icon = c.icon;
            return (
              <motion.div
                key={c.no}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                data-testid={`neutral-cat-${c.no}`}
                className="glass rounded-2xl p-7 sm:p-8 glass-hover h-full"
              >
                <div className="flex items-center justify-between">
                  <div className="inline-flex w-11 h-11 items-center justify-center rounded-lg bg-[var(--accent)]/10 border border-[var(--accent)]/20 text-[var(--accent)]">
                    <Icon size={20} />
                  </div>
                  <span className="font-mono-ui text-[11px] tracking-[0.22em] text-[var(--text-muted)]">
                    CATEGORY {c.no}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-xl sm:text-[1.4rem] font-semibold text-[var(--text-primary)] leading-snug">
                  {c.title}
                </h3>
                <p className="mt-4 text-[0.92rem] text-[var(--text-secondary)] leading-relaxed">
                  {c.copy}
                </p>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-12 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 rounded-2xl border border-[var(--border-soft)] bg-[var(--bg-surface-2)]/60 p-6">
          <p className="font-mono-ui text-[11px] tracking-[0.16em] text-[var(--text-secondary)] uppercase">
            Empanelment Standard: Minimum 10+ Years Bar/Bench Experience &nbsp;|&nbsp; Mandatory
            Performance Evaluation &nbsp;|&nbsp; Section 12 Statutory Disclosures
          </p>
          <button data-testid="panel-cta-roster" className="btn-outline shrink-0">
            View Empanelment &amp; Roster Directory <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </section>
  );
};
