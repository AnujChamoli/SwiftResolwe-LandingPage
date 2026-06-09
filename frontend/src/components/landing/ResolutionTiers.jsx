import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Handshake, Users, Gavel, ArrowRight, ArrowDown } from "lucide-react";
import { Typewriter } from "@/components/landing/Typewriter";
import { CTACluster, CTAItem } from "@/components/landing/Motion";

const TIERS = [
  {
    no: "01",
    label: "TIER 1 / PRIVATIZED PORTAL SETTLEMENT",
    product: "SwiftResolwe Negotiate",
    icon: Handshake,
    copy: "A structured digital environment designed to settle disputes early. High volume retail defaults are routed to text based settlement modules. Complex B2B commercial disputes enter secure negotiation vaults where corporate legal teams review automated settlement options, share documentation, and counter offer asynchronously without litigation overhead.",
    outcome: (
      <>
        <strong className="text-[var(--text-primary)]">Settlement Agreement</strong> enforceable as a binding contract under
        Section 10A of the Information Technology Act, 2000 and Section 85 of the Bharatiya Sakshya
        Adhiniyam, 2023.
      </>
    ),
  },
  {
    no: "02",
    label: "TIER 2 / NEUTRAL FACILITATION",
    product: "SwiftResolwe Mediate",
    icon: Users,
    copy: "If party to party negotiation stalls, the system upgrades the file to neutral assisted mediation. The engine matches the dispute with a domain specialist neutral from our national empanelled roster. Proceedings take place in encrypted virtual hearing rooms, focusing on rapid financial resolution while preserving core vendor and supply chain alliances.",
    outcome: (
      <>
        <strong className="text-[var(--text-primary)]">Mediated Settlement Agreement</strong> final and directly enforceable in
        the same manner as a Civil Court Decree under Section 27 of the Mediation Act, 2023.
      </>
    ),
  },
  {
    no: "03",
    label: "TIER 3 / ADJUDICATORY TERMINAL",
    product: "SwiftResolwe Arbitrate",
    icon: Gavel,
    copy: "Unresolved claims escalate to final digital adjudication. A sole arbitrator or three member panel reviews the dispute records compiled from the preceding tiers. The entire process is conducted digitally on a fast track timeline, utilizing immutable case histories to ensure a swift transition to final closure.",
    outcome: (
      <>
        <strong className="text-[var(--text-primary)]">Arbitral Award</strong> carrying the absolute authority of a Civil Court
        Decree, immediately enforceable under Section 36 of the Arbitration and Conciliation Act,
        1996, supported by blockchain backed digital evidence under Section 63 of the Bharatiya
        Sakshya Adhiniyam, 2023.
      </>
    ),
  },
];

const TierCard = ({ tier, index }) => {
  const Icon = tier.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      data-testid={`tier-card-${tier.no}`}
      className="relative card-light p-7 sm:p-8 flex flex-col h-full"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="inline-flex w-11 h-11 items-center justify-center rounded-lg bg-[var(--accent)]/10 border border-[var(--accent)]/20 text-[var(--accent-deep)]">
          <Icon size={20} />
        </div>
        <span className="font-display text-5xl font-semibold text-[var(--text-muted)] opacity-25 leading-none">
          {tier.no}
        </span>
      </div>

      <div className="mt-5 font-mono-ui text-[10px] tracking-[0.22em] text-[var(--accent-deep)] uppercase">
        {tier.label}
      </div>
      <h3 className="mt-3 font-display text-2xl font-semibold text-[var(--text-primary)]">
        {tier.product}
      </h3>

      <Typewriter
        as="p"
        testId={`tier-body-${tier.no}`}
        text={tier.copy}
        duration={1600}
        delay={350 * index}
        className="mt-4 text-[0.94rem] text-[var(--text-secondary)] leading-relaxed"
      />

      <div className="mt-6 rounded-xl border border-[var(--accent)]/20 bg-[var(--accent)]/[0.05] p-5">
        <div className="font-mono-ui text-[9.5px] tracking-[0.22em] text-[var(--accent-deep)] uppercase mb-2">
          Legal Outcome &amp; Enforceability
        </div>
        <p className="text-[0.88rem] text-[var(--text-secondary)] leading-relaxed">
          {tier.outcome}
        </p>
      </div>
    </motion.div>
  );
};

export const ResolutionTiers = () => {
  const navigate = useNavigate();
  return (
    <section
      id="tiers"
      data-testid="tiers-section"
      className="relative py-24 sm:py-32 bg-[var(--bg-base)] overflow-hidden"
    >
      <div className="absolute inset-0 bg-dots opacity-40" />
      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <div className="max-w-3xl">
          <div className="kicker mb-5" data-testid="tiers-kicker">THE RESOLUTION ENGINE</div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-[var(--text-primary)] leading-[1.1]">
            One Platform. <span className="text-[var(--accent-deep)]">Three Tiers</span> of Legal Finality.
          </h2>
          <p className="mt-5 text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed justify-pretty">
            Every dispute is sent to the resolution method that fits it best. Some are settled in a
            single step. Others move through negotiation, then mediation, then arbitration, until
            they reach a binding agreement or a legally enforceable award.
          </p>
        </div>

        <div className="mt-14 grid lg:grid-cols-3 gap-5 lg:gap-6 relative">
          {TIERS.map((t, i) => (
            <div key={t.no} className="relative">
              <TierCard tier={t} index={i} />
              {i < TIERS.length - 1 && (
                <div className="hidden lg:flex absolute top-1/2 -right-4 -translate-y-1/2 z-10 w-8 h-8 rounded-full border border-[var(--accent)]/40 bg-[var(--bg-base)] items-center justify-center shadow-sm">
                  <ArrowRight size={14} className="text-[var(--accent-deep)]" />
                </div>
              )}
              {i < TIERS.length - 1 && (
                <div className="lg:hidden flex justify-center my-2">
                  <ArrowDown size={18} className="text-[var(--accent-deep)] opacity-70" />
                </div>
              )}
            </div>
          ))}
        </div>

        <CTACluster className="mt-14 flex flex-col items-start gap-5">
          <CTAItem>
            <p className="text-[var(--text-secondary)] text-base max-w-3xl leading-relaxed justify-pretty">
              Unsure whether your claim qualifies for automated negotiation, mediated compromise, or
              fast track digital arbitration? Run our intake diagnostic.
            </p>
          </CTAItem>
          <div className="flex flex-wrap gap-3">
            <CTAItem>
              <button
                data-testid="tiers-cta-triage"
                onClick={() => navigate("/triage")}
                className="btn-primary cta-primary-arrive"
              >
                Run 2 Minute Triage Assessment <ArrowRight size={16} />
              </button>
            </CTAItem>
            <CTAItem>
              <button
                data-testid="tiers-cta-enterprise"
                onClick={() => document.querySelector("#enterprise")?.scrollIntoView({ behavior: "smooth" })}
                className="btn-outline"
              >
                Contact Enterprise Risk Team
              </button>
            </CTAItem>
          </div>
        </CTACluster>
      </div>
    </section>
  );
};
