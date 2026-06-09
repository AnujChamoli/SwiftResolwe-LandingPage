import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";

const NAV = [
  { label: "For Individuals", href: "#retail" },
  { label: "For Enterprises", href: "#enterprise" },
  { label: "Resolution Tiers", href: "#tiers" },
  { label: "Panel of Neutrals", href: "#panel" },
];

// Brand glyph: two converging streams merging into a swift forward chevron
const BrandGlyph = ({ size = 30 }) => (
  <svg
    className="brand-glyph"
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    {/* Upper stream */}
    <path
      className="stream s1"
      d="M3 9 C 9 9, 12 14, 15 16"
      stroke="#0891B2"
      strokeWidth="2.2"
      strokeLinecap="round"
      fill="none"
    />
    {/* Lower stream */}
    <path
      className="stream s2"
      d="M3 23 C 9 23, 12 18, 15 16"
      stroke="#0891B2"
      strokeWidth="2.2"
      strokeLinecap="round"
      fill="none"
    />
    {/* Swift chevron forward */}
    <path
      className="swift"
      d="M15 16 L 23 12 M15 16 L 23 20 M15 16 L 29 16"
      stroke="#06B6D4"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    {/* Convergence dot */}
    <circle className="converge-dot" cx="15" cy="16" r="2" fill="#06B6D4" />
  </svg>
);

const Wordmark = ({ size = "lg" }) => (
  <Link to="/" data-testid="brand-wordmark" className="flex items-center gap-3 group">
    <BrandGlyph size={size === "lg" ? 34 : 28} />
    <span
      className={`font-display tracking-tight text-[var(--text-primary)] ${
        size === "lg" ? "text-[1.45rem] sm:text-[1.55rem]" : "text-[1.1rem]"
      }`}
      style={{ fontWeight: 700 }}
    >
      Swift<span className="text-[var(--accent)]">Resolwe</span>
    </span>
  </Link>
);

export { Wordmark, BrandGlyph };

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-testid="site-header"
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[rgba(247,249,252,0.82)] backdrop-blur-xl border-b border-[var(--border-soft)] shadow-[0_1px_0_rgba(15,23,42,0.04)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 h-[76px] flex items-center justify-between">
        <Wordmark />

        <nav className="hidden lg:flex items-center gap-9">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              data-testid={`nav-link-${item.label.replace(/\s+/g, "-").toLowerCase()}`}
              className="text-[0.94rem] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <Link
            to="/login"
            data-testid="nav-login"
            className="text-[0.94rem] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
          >
            Log In
          </Link>

          <AnimatePresence>
            {scrolled && (
              <motion.button
                key="filebtn"
                initial={{ opacity: 0, x: 18 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 18 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => navigate("/file-a-dispute")}
                data-testid="header-file-dispute"
                className="btn-primary !py-2 !px-4 !text-sm"
              >
                File a Dispute <ArrowRight size={14} />
              </motion.button>
            )}
          </AnimatePresence>
        </div>

        <button
          data-testid="mobile-menu-toggle"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-md border border-[var(--border-soft)] bg-[var(--bg-surface)] text-[var(--text-primary)]"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            data-testid="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22 }}
            className="lg:hidden border-t border-[var(--border-soft)] bg-[rgba(247,249,252,0.96)] backdrop-blur-xl"
          >
            <div className="px-5 py-6 flex flex-col gap-1">
              {NAV.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  data-testid={`mobile-nav-${item.label.replace(/\s+/g, "-").toLowerCase()}`}
                  className="py-3 text-[var(--text-primary)] text-base border-b border-[var(--border-soft)]"
                >
                  {item.label}
                </a>
              ))}
              <Link
                to="/login"
                onClick={() => setOpen(false)}
                data-testid="mobile-nav-login"
                className="py-3 text-[var(--text-primary)] text-base border-b border-[var(--border-soft)]"
              >
                Log In
              </Link>
              <button
                onClick={() => { setOpen(false); navigate("/file-a-dispute"); }}
                data-testid="mobile-file-dispute"
                className="btn-primary mt-5 justify-center"
              >
                File a Dispute <ArrowRight size={16} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
