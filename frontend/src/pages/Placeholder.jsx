import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { motion } from "framer-motion";

export default function Placeholder({ title, kicker, subtitle, testIdPrefix }) {
  return (
    <div
      data-testid={`${testIdPrefix}-page`}
      className="relative min-h-screen bg-[var(--bg-base)] text-[var(--text-primary)]"
    >
      <Header />
      <main className="relative pt-40 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid-faint opacity-50" />
        <div className="hero-tint" />
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative max-w-3xl mx-auto px-5 sm:px-8 text-center"
        >
          <div className="kicker justify-center mb-6">{kicker}</div>
          <h1 className="font-display text-4xl sm:text-5xl font-semibold leading-[1.08] text-[var(--text-primary)]">
            {title}
          </h1>
          <p className="mt-6 text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
            {subtitle}
          </p>

          <div
            data-testid={`${testIdPrefix}-form-placeholder`}
            className="mt-12 card-light p-8 text-left"
          >
            <div className="font-mono-ui text-[10px] tracking-[0.22em] text-[var(--accent-deep)] uppercase mb-4">
              Coming Soon · Form Placeholder
            </div>
            <div className="space-y-4">
              {["Full Name", "Email or Mobile", "Brief Description"].map((label) => (
                <div key={label}>
                  <label className="font-mono-ui text-[10px] tracking-[0.22em] text-[var(--text-muted)] uppercase">
                    {label}
                  </label>
                  <div className="mt-2 h-11 rounded-lg bg-[var(--bg-surface-2)] border border-[var(--border-soft)]" />
                </div>
              ))}
              <button
                disabled
                data-testid={`${testIdPrefix}-submit`}
                className="btn-primary opacity-50 cursor-not-allowed w-full justify-center"
              >
                Submit (disabled in preview)
              </button>
            </div>
          </div>

          <Link
            to="/"
            data-testid={`${testIdPrefix}-back`}
            className="cta-link mt-10 justify-center"
          >
            <ArrowLeft size={14} /> Back to Landing
          </Link>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
