# PRD — SwiftResolwe Landing Page

## Original Problem Statement (summary)
Production-quality, fully responsive **frontend-only marketing landing page** for **SwiftResolwe** — an Online Dispute Resolution / "ODR 2.0" infrastructure for India. Dark-mode premium "infrastructure" aesthetic (Linear/Vercel/Stripe vibe), cyan accent, copy taken verbatim from the brief (legally sensitive statute citations). 10 long-scroll sections + 2 guardrail callouts + sticky header + footer + 3 placeholder routes.

## Architecture
- React 19 + Tailwind + framer-motion + lucide-react. CRACO build.
- Routes: `/` (Landing), `/file-a-dispute`, `/login`, `/triage` (all placeholders share Header + Footer).
- Component tree under `/app/frontend/src/components/landing/` (one file per section).
- Tokens defined as CSS variables in `/app/frontend/src/index.css`.
- No backend touched (frontend-only build).

## User personas
1. **Individuals & MSMEs** filing a single claim — need guided, vernacular, pay-as-you-go retail intake (Section 7 deep-dive).
2. **Banks / NBFCs / Fintech & Enterprises** — need API + bulk SFTP ingestion, SLA dashboards (Section 6 deep-dive).
3. **Empanelled neutrals & arbitrators** — surfaced via Panel of Neutrals section.

## What's been implemented (2026-12-09)
- Sticky glassmorphic header with on-scroll `File a Dispute` reveal + mobile hamburger menu.
- Hero with literal triage SVG diagram (inputs → routing hub → Negotiate/Mediate/Arbitrate) + dual CTAs.
- Trust anchor: 3 count-up metrics (45 Days / 90% / 100%) + infinite CSS marquee ticker (pause on hover) + 8 fictional placeholder institutional logos with illustrative disclaimer.
- Technology Manifesto callout ("AI as Scaffolding, Not the Judiciary.").
- Resolution Tiers — 3-tier cards with arrow connectors, every statute citation verbatim.
- Panel of Neutrals — 3 credential categories + empanelment standard band.
- Dual-Track Gateway — two side cards with 4 pillars each.
- Enterprise Verticals — 4-column matrix (Banking/E-Commerce/Real Estate/Supply Chain) with Section 138 NI Act + Section 25 PSS Act.
- Retail Pipeline — 3 numbered horizontal steps with connector.
- Economic Advantage — true 22× timeline bars (amber court vs cyan ODR), 3 count-up metrics, interactive claim slider (₹1L–₹10Cr) with cost-saved/days-saved cards, 2 fee panels.
- Jurisdictional Clarity callout ("What We Are Not.").
- FAQ Terminal — single-open accordion with 4 verbatim Q/A pairs, accessible aria-expanded.
- Footer — 4 columns + ISO/DPDP/BSA badges + statutory disclaimer ribbon + © 2026.
- Scroll progress bar, smooth-scroll anchors, prefers-reduced-motion handling, data-testid coverage across all interactive + content elements.

## Iteration 2 (2026-12-09)
- **Light theme migration**: tokens rewritten — `--bg-base #F7F9FC`, `--bg-surface #FFFFFF`, `--accent #0891B2` (AA on white), `--warn #EA580C` reserved for traditional-court timeline. Cards now elevated white with soft shadows; ticker remains a dark `#0E1726` stripe inside the light page; footer statutory ribbon is the dark grounding band.
- **Fonts**: Geist + Geist Mono replace Space Grotesk / Inter / JetBrains Mono everywhere.
- **Hyphens / dashes purged**: global `hyphens: none`; all hyphenated compounds (Step-by-Step, Domain-Expert, High-Volume, pay-as-you-go, etc.) and em/en dashes removed from visible copy.
- **Lenis smooth scroll** wired with hash-link offset = −76px.
- **Subtle tide / wave SVG dividers** between every major section.
- **Reusable Typewriter component** — clip-path wipe in ~1.2s on viewport entry; bug fix: `.is-typing` and `.is-done` both unclip so text stays revealed.
- **Header**: larger wordmark, animated brand glyph (two converging streams → forward chevron).
- **Hero**: H1 → "Conflict is a variable; Resolution a Constant." Sub-headline rewritten plain-language. Triage diagram endpoints renamed `SwiftNegotiate` / `SwiftMediate` / `SwiftArbitrate`. Routing-hub caption removed.
- **Trust**: removed `// 01` tags on metric cards, removed static compliance line under CTAs, removed "Illustrative placeholders" note under logos.
- **Subhead rewrites**: Tiers, Panel of Neutrals, Dual-Track Gateway, Enterprise Verticals (headline → "Plugs Into Your Core Banking and ERP Systems. Built for Every Sector.").
- **Bigger type** on Empanelment band and Integration band.
- **Retail Pipeline** steps reveal sequentially (≈200ms stagger, full reveal ≤2s).
- **Footer** Column 1 compliance badges removed.

## Testing
- Iteration 1 — `/app/test_reports/iteration_1.json` — 100% functional pass on the dark build.
- Iteration 2 — `/app/test_reports/iteration_2.json` — 100% pass across ~70 assertions on the light-theme migration: tokens, fonts, hyphen purge, copy rewrites, typewriter reveal, sequential retail stagger, Lenis smooth-scroll landing, brand glyph, footer pruning, all 9 statute strings verbatim.

## Backlog (P0/P1/P2)
- **P1 — Conversion polish:** add a small "value-prop" sticky CTA bar after the user passes 60% of the page (better File-a-Dispute conversion); add an inline "industry selector" pill above the Enterprise Verticals matrix.
- **P1 — Mediated case studies section** between Sections 6 and 7 once real institutional logos / case data is available.
- **P2 — Real backend:** wire `/file-a-dispute`, `/triage`, `/login` placeholders to FastAPI endpoints (intake form persistence, JWT auth, triage diagnostic engine).
- **P2 — i18n:** Hindi + 10 other Indian languages (the copy advertises 11 vernacular notices).
- **P2 — A/B test** hero headline variant; instrument with PostHog (already loaded).
- **P2 — SEO:** structured data (Organization + FAQPage), OG image, sitemap, robots.txt.

## Next tasks
1. User reviews and requests section-by-section refinements.
2. Optionally swap fictional logos for real partner logos when partnerships are signed.
3. Wire placeholder routes to a real intake backend.
