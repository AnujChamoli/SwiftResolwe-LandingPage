import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const FAQS = [
  {
    q: "What transpires if the respondent ignores multi channel automated notices or refuses to participate?",
    a: (
      <>
        Non cooperation does not halt the resolution pipeline. If a party ignores the time
        sensitive tokens delivered during Tier 1 (Negotiation) or Tier 2 (Mediation), the platform
        flags the file for non compliance. For institutional contracts containing a valid
        SwiftResolwe ODR clause, the dispute automatically escalates to Tier 3 Fast Track
        Arbitration. The empanelled sole arbitrator proceeds with document based adjudication to
        deliver an <em>ex parte</em> Arbitral Award that is final and binding.
      </>
    ),
  },
  {
    q: "How are settlement agreements executed via SwiftResolwe legally enforced across various states?",
    a: (
      <>
        Enforceability is guaranteed by federal statutes. A{" "}
        <strong className="text-[var(--text-primary)]">Settlement Agreement</strong> achieved under{" "}
        <em>SwiftResolwe Negotiate</em> holds the status of a binding contract. A{" "}
        <strong className="text-[var(--text-primary)]">Mediated Settlement Agreement</strong>{" "}
        executed under <em>SwiftResolwe Mediate</em> is directly enforceable as a Civil Court
        Decree under Section 27 of the <em>Mediation Act, 2023</em>. An{" "}
        <strong className="text-[var(--text-primary)]">Arbitral Award</strong> delivered via{" "}
        <em>SwiftResolwe Arbitrate</em> carries the absolute status of a court decree under
        Section 36 of the <em>Arbitration and Conciliation Act, 1996</em>, executable across all
        28 States and Union Territories.
      </>
    ),
  },
  {
    q: "How does the platform ensure electronic records are admissible under the Bharatiya Sakshya Adhiniyam, 2023?",
    a: (
      <>
        Every document uploaded, message exchanged, and milestone reached within the secure
        digital vaults is systematically stamped and securely hashed. The platform automatically
        generates a cryptographically validated digital certificate that complies with the
        electronic record admissibility conditions of Section 63 of the{" "}
        <em>Bharatiya Sakshya Adhiniyam, 2023</em>, completely bypassing the need for manual,
        analog verification chains.
      </>
    ),
  },
  {
    q: "Is SwiftResolwe compliant with the localization mandates of the Digital Personal Data Protection (DPDP) Act?",
    a: (
      <>
        Yes. Operating as a data fiduciary, SwiftResolwe deploys its infrastructure within
        strictly isolated, bank grade cloud storage networks localized entirely within the
        territorial boundaries of India. All personal identifiers, financial ledgers, and dispute
        case records are processed under end to end encryption protocols, adhering completely to
        the processing and security parameters dictated by the <em>DPDP Act</em>.
      </>
    ),
  },
];

const Row = ({ item, index, open, onToggle }) => {
  const id = `faq-${index}`;
  return (
    <div data-testid={`faq-row-${index}`} className="border-b border-[var(--border-soft)] last:border-b-0">
      <button
        onClick={onToggle}
        aria-expanded={open}
        aria-controls={`${id}-panel`}
        id={`${id}-trigger`}
        data-testid={`faq-trigger-${index}`}
        className="w-full text-left flex items-start gap-5 py-6 group"
      >
        <span className="font-mono-ui text-[11px] tracking-[0.2em] text-[var(--accent-deep)] pt-1.5 shrink-0">
          Q{String(index + 1).padStart(2, "0")}
        </span>
        <span className="flex-1 font-display text-lg sm:text-xl font-medium text-[var(--text-primary)] leading-snug group-hover:text-[var(--accent-deep)] transition-colors">
          {item.q}
        </span>
        <span className="shrink-0 inline-flex w-8 h-8 rounded-full border border-[var(--border-soft)] items-center justify-center text-[var(--accent-deep)] group-hover:border-[var(--accent)]/60 transition bg-[var(--bg-surface)]">
          {open ? <Minus size={14} /> : <Plus size={14} />}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={`${id}-panel`}
            role="region"
            aria-labelledby={`${id}-trigger`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
            data-testid={`faq-panel-${index}`}
          >
            <div className="pb-7 pl-[3.6rem] pr-12 text-[0.96rem] text-[var(--text-secondary)] leading-relaxed">
              {item.a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const FAQTerminal = () => {
  const [openIdx, setOpenIdx] = useState(0);
  return (
    <section
      id="faq"
      data-testid="faq-section"
      className="relative py-24 sm:py-32 bg-[var(--bg-base)] overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-faint opacity-40" />
      <div className="relative max-w-5xl mx-auto px-5 sm:px-8">
        <div className="max-w-3xl">
          <div className="kicker mb-5" data-testid="faq-kicker">SYSTEMIC VALIDATION</div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-[var(--text-primary)] leading-[1.1]">
            Clear <span className="text-[var(--accent-deep)]">Legal Precedent</span>. Zero Operational Ambiguity.
          </h2>
          <p className="mt-5 text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed justify-pretty">
            Address core compliance, enforceability, and cross tier escalation mechanisms within
            the framework of Indian jurisprudence.
          </p>
        </div>

        <div className="mt-12 card-light px-6 sm:px-10">
          {FAQS.map((f, i) => (
            <Row
              key={i}
              item={f}
              index={i}
              open={openIdx === i}
              onToggle={() => setOpenIdx(openIdx === i ? -1 : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
