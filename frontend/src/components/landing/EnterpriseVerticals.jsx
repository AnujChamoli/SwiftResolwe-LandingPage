import { motion } from "framer-motion";
import { Landmark, ShoppingBag, Building, Truck, ArrowRight } from "lucide-react";

const VERTICALS = [
  {
    no: "01",
    icon: Landmark,
    title: "Banking, NBFCs & Fintech",
    pitch: "High-Volume NPA & Delinquency Routing",
    copy: "Programmatic ingestion of retail loan defaults. The engine initiates automated, legally valid notices, executing parallel processing workflows for Section 138 (NI Act) and Section 25 (PSS Act) digital negotiation and fast-track arbitration pipelines.",
  },
  {
    no: "02",
    icon: ShoppingBag,
    title: "E-Commerce & Digital Marketplaces",
    pitch: "High-Volume, Low-Value (HVLV) Resolution",
    copy: "API routing of merchant payment discrepancies, SLA failures, and gross consumer grievances. Resolves digital transaction friction via automated Tier 1 settlement workflows without degrading platform retention metrics or GMV.",
  },
  {
    no: "03",
    icon: Building,
    title: "Real Estate & Commercial Infrastructure",
    pitch: "Tenancy & Asset Adjudication",
    copy: "Accelerated dispute execution for commercial lease agreement breaches, contractor non-performance, and vendor payment delays, bypassing congested statutory tribunals to secure enforceable civil decrees.",
  },
  {
    no: "04",
    icon: Truck,
    title: "Supply Chain, Logistics & Procurement",
    pitch: "Operational Continuity & Transit Conflicts",
    copy: "Rapid intervention for cross-border supply chain breakdowns and procurement contract breaches. Emphasizes mandatory Tier 2 Mediation under the Mediation Act, 2023, to salvage critical vendor partnerships.",
  },
];

export const EnterpriseVerticals = () => {
  return (
    <section
      id="enterprise"
      data-testid="enterprise-section"
      className="relative py-24 sm:py-32 bg-[var(--bg-surface)] border-y border-[var(--border-soft)] overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-faint opacity-25" />
      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <div className="max-w-4xl">
          <div className="kicker mb-5" data-testid="enterprise-kicker">SYSTEMIC INTEGRATION</div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-[var(--text-primary)] leading-[1.1]">
            Core <span className="text-[var(--accent)]">CBS/ERP</span> Ingestion. <br className="hidden sm:block" />
            Sectoral Algorithmic Execution.
          </h2>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {VERTICALS.map((v, i) => {
            const Icon = v.icon;
            return (
              <motion.div
                key={v.no}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: i * 0.06 }}
                data-testid={`vertical-${v.no}`}
                className="glass rounded-2xl p-6 glass-hover h-full flex flex-col"
              >
                <div className="flex items-center justify-between mb-5">
                  <div className="inline-flex w-10 h-10 items-center justify-center rounded-lg bg-[var(--accent)]/10 border border-[var(--accent)]/20 text-[var(--accent)]">
                    <Icon size={18} />
                  </div>
                  <span className="font-mono-ui text-[10px] tracking-[0.22em] text-[var(--text-muted)]">
                    V/{v.no}
                  </span>
                </div>
                <h3 className="font-display text-lg font-semibold text-[var(--text-primary)] leading-snug">
                  {v.title}
                </h3>
                <div className="mt-2 font-mono-ui text-[10.5px] tracking-[0.14em] text-[var(--accent)] uppercase">
                  {v.pitch}
                </div>
                <p className="mt-4 text-[0.88rem] text-[var(--text-secondary)] leading-relaxed">
                  {v.copy}
                </p>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-12 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between rounded-2xl border border-[var(--border-soft)] bg-[var(--bg-surface-2)]/60 p-6">
          <p className="font-mono-ui text-[11px] tracking-[0.16em] text-[var(--text-secondary)] uppercase max-w-3xl">
            Architecture Agnostic Integration: Deploy via RESTful APIs, encrypted SFTP batch
            pipelines, or native CRM webhooks.
          </p>
          <div className="flex flex-wrap gap-3">
            <button data-testid="enterprise-cta-portal" className="btn-primary">
              Access Developer Portal <ArrowRight size={14} />
            </button>
            <button data-testid="enterprise-cta-map" className="btn-outline">
              Request Integration Map
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
