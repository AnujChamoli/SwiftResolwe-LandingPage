import { Link } from "react-router-dom";
import { Wordmark } from "@/components/landing/Header";

const COLS = [
  {
    heading: "Resolution Modalities",
    links: [
      "SwiftResolwe Negotiate (Tier 1)",
      "SwiftResolwe Mediate (Tier 2)",
      "SwiftResolwe Arbitrate (Tier 3)",
      "Automated Triage Intake Engine",
    ],
  },
  {
    heading: "Ecosystem Infrastructure",
    links: [
      "Empanelled Panel of Neutrals",
      "Developer Portal & REST API Docs",
      "Scale Based Retail Fee Matrix",
      "Institutional Case Studies",
    ],
  },
  {
    heading: "Corporate & Legal",
    links: [
      "Terms of Service & Portal Rules",
      "Privacy Policy & Data Fiduciary Disclosures",
      "Standard Model ODR Contract Clauses",
      "Contact Enterprise Operations Team",
    ],
  },
];

export const Footer = () => {
  return (
    <footer
      data-testid="site-footer"
      className="relative bg-[var(--bg-surface-2)] border-t border-[var(--border-soft)]"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="mb-5">
              <Wordmark size="md" />
            </div>
            <p className="text-[0.94rem] text-[var(--text-secondary)] leading-relaxed justify-pretty">
              India&apos;s premier digital legal tech infrastructure, engineering end to end
              institutional dispute triage, digital facilitation, and fast track binding
              adjudication terminals.
            </p>
          </div>

          {COLS.map((c) => (
            <div key={c.heading}>
              <div className="font-mono-ui text-[10px] tracking-[0.22em] text-[var(--text-muted)] uppercase mb-5">
                {c.heading}
              </div>
              <ul className="space-y-3">
                {c.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      data-testid={`footer-link-${l.replace(/[^a-z0-9]+/gi, "-").toLowerCase()}`}
                      className="text-[0.94rem] text-[var(--text-secondary)] hover:text-[var(--accent-deep)] transition-colors"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[var(--bg-deep)] text-[var(--text-on-dark-muted)]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-9 space-y-3 text-[0.84rem] leading-relaxed">
          <p data-testid="footer-disclaimer" className="justify-pretty">
            <em>
              SwiftResolwe operates strictly as an institutional Online Dispute Resolution (ODR)
              platform provider and administrator. The platform does not directly provide legal
              representation, advocacy services, or formal legal opinions. Empanelled dispute
              resolution professionals act as completely independent, neutral third parties in
              compliance with statutory disclosure mandates.
            </em>
          </p>
          <p className="justify-pretty">
            <em>
              All electronic records, metadata, and case logs are cryptographically processed and
              permanently stored within cloud data infrastructures located in India.
            </em>
          </p>
          <p className="pt-2 font-mono-ui text-[11px] tracking-[0.14em] uppercase text-[var(--text-on-dark)]">
            © 2026 SwiftResolwe Platforms Private Limited. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
