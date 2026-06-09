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

const Wordmark = () => (
  <Link to="/" data-testid="brand-wordmark" className="flex items-center gap-2.5 group">
    <span className="relative inline-flex w-7 h-7 items-center justify-center">
      <span className="absolute inset-0 rounded-md bg-[var(--accent)]/15 group-hover:bg-[var(--accent)]/25 transition" />
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path d="M4 12 L10 18 L20 6" stroke="#22D3EE" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="4" cy="12" r="1.6" fill="#22D3EE" />
        <circle cx="20" cy="6" r="1.6" fill="#22D3EE" />
      </svg>
    </span>
    <span className="font-display text-[1.05rem] font-semibold tracking-tight text-[var(--text-primary)]">
      Swift<span className="text-[var(--accent)]">Resolwe</span>
    </span>
  </Link>
);

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

  const handleAnchor = (e, href) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      setOpen(false);
    }
  };

  return (
    <header
      data-testid="site-header"
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[rgba(7,11,22,0.78)] backdrop-blur-xl border-b border-[var(--border-soft)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 h-[68px] flex items-center justify-between">
        <Wordmark />

        <nav className="hidden lg:flex items-center gap-8">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleAnchor(e, item.href)}
              data-testid={`nav-link-${item.label.replace(/\s+/g, "-").toLowerCase()}`}
              className="text-[0.92rem] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Link
            to="/login"
            data-testid="nav-login"
            className="text-[0.92rem] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
          >
            Log In
          </Link>

          <AnimatePresence>
            {scrolled && (
              <motion.button
                key="filebtn"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
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
          className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-md border border-[var(--border-soft)] text-[var(--text-primary)]"
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
            className="lg:hidden border-t border-[var(--border-soft)] bg-[rgba(7,11,22,0.95)] backdrop-blur-xl"
          >
            <div className="px-5 py-6 flex flex-col gap-1">
              {NAV.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleAnchor(e, item.href)}
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
