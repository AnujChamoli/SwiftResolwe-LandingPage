import { Link } from "react-router-dom";

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
      "Scale-Based Retail Fee Matrix",
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

const BADGES = [
  "ISO 27001 Certified",
  "DPDP Compliant Data Vaults",
  "BSA Cryptographic Verification Engine",
];

export const Footer = () => {
  return (
    <footer
      data-testid="site-footer"
      className="relative bg-[var(--bg-surface)] border-t border-[var(--border-soft)]"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1 — Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2.5 mb-5">
              <span className="relative inline-flex w-7 h-7 items-center justify-center">
                <span className="absolute inset-0 rounded-md bg-[var(--accent)]/15" />
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M4 12 L10 18 L20 6" stroke="#22D3EE" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="4" cy="12" r="1.6" fill="#22D3EE" />
                  <circle cx="20" cy="6" r="1.6" fill="#22D3EE" />
                </svg>
              </span>
              <span className="font-display text-[1.05rem] font-semibold text-[var(--text-primary)]">
                Swift<span className="text-[var(--accent)]">Resolwe</span>
              </span>
            </Link>
            <p className="text-[0.9rem] text-[var(--text-secondary)] leading-relaxed">
              India&apos;s premier digital legal tech infrastructure, engineering end-to-end
              institutional dispute triage, digital facilitation, and fast-track binding
              adjudication terminals.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {BADGES.map((b) => (
                <span
                  key={b}
                  className="inline-flex items-center px-3 py-1.5 rounded-full border border-[var(--accent)]/20 bg-[var(--accent)]/[0.05] text-[var(--accent)] font-mono-ui text-[10px] tracking-[0.12em] uppercase"
                >
                  {b}
                </span>
              ))}
            </div>
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
                      className="text-[0.92rem] text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
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

      <div className="border-t border-[var(--border-soft)] bg-[var(--bg-base)]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-8 space-y-3 text-[0.8rem] text-[var(--text-muted)] leading-relaxed">
          <p data-testid="footer-disclaimer">
            <em>
              SwiftResolwe operates strictly as an institutional Online Dispute Resolution (ODR)
              platform provider and administrator. The platform does not directly provide legal
              representation, advocacy services, or formal legal opinions. Empanelled dispute
              resolution professionals act as completely independent, neutral third parties in
              compliance with statutory disclosure mandates.
            </em>
          </p>
          <p>
            <em>
              All electronic records, metadata, and case logs are cryptographically processed and
              permanently stored within cloud data infrastructures located in India.
            </em>
          </p>
          <p className="pt-2 font-mono-ui text-[11px] tracking-[0.14em] uppercase">
            © 2026 SwiftResolwe Platforms Private Limited. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
