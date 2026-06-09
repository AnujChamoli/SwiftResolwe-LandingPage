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

## Iteration 3 (2026-12-09)
- **Cinematic section reveals**: each major section wrapped in `<SectionReveal>` (opacity 0→1 + translateY 48→0 + scale .985→1 + blur 8px→0, 0.75s, ease [0.16,1,0.3,1]).
- **ScanDivider** replaces TideDivider — a thin cyan-to-transparent sweep between sections.
- **Lenis** tuned: duration 1.2, lerp 0.08 (silkier inertia).
- **Animated CTA clusters** (CTACluster + CTAItem): micro-copy → primary → secondary stagger; primary buttons get a one-time arrival pulse (`.cta-primary-arrive` + `@keyframes pulse-glow`).
- **Primary button hover**: animated white sheen sweep via `::before` translateX(-120% → 120%) in 0.75s.
- **Outline button hover**: cleaner background-position trick (200%-wide gradient slides 100%→0%) plus color → white. Text remains fully legible (no stacking-context occlusion).
- **Typewriter** upgraded to 1.6s reveal with a glowing cyan scan caret + soft sweep that ride the reveal edge via CSS `::before`/`::after` with `--tw-edge` custom property; 350ms inter-box stagger in Tiers/Panel/Dual-Track/Verticals; Retail keeps 300ms sequential.
- **Color reset**: orange `#EA580C` swapped to cool slate `--neg #64748B` in the Economic Advantage timeline only. Vivid cyan vs muted slate now drives the visual contrast.
- **Hero**: secondary CTA → "Schedule a 30 Minute Dispute Evaluation". TRIAGE ENGINE hub enlarged (r=42→58, inner r=22→38, label fontSize 9→11) so the label fits cleanly inside.
- **Manifesto** headline → "AI as Scaffolding, Not the Judge."
- **Economic Advantage** headline → "The Numbers Work in Your Favor."
- **Calculator math**: replaced with a deterministic `estimate()` model — regressive `tradRate` by claim bracket (30%/25%/18%/12%/8%), claim-floored at ₹1.5L, ODR = 12% of traditional cost, claim-bracketed `courtDays` (900/1100/1500/2400/3300). Sub-labels render `~88% versus traditional litigation` and `~{courtDays}+ days in court to 45 days here`. Prominent disclaimer card kept beneath the result widgets.
- **Footer** Column 1 brand brief rewritten to plain-language.

## Testing
- Iteration 1 — dark build — 100% pass.
- Iteration 2 — light-theme migration + hyphen purge — 100% pass.
- Iteration 3 — `/app/test_reports/iteration_3.json` — 95% pass (one MEDIUM gap: CSS rules for button hover sheen / outline wipe / arrival pulse were missing despite the classes being applied).
- Iteration 4 — `/app/test_reports/iteration_4.json` — **100% pass** after appending the missing CSS rules. Outline wipe converted from `::before` fill to a background-position-on-200%-gradient approach so the text node never gets occluded. Computed-style snapshots at hover start/mid/end verified the sheen translation, the cyan wipe with white label legibility, and the one-shot pulse-glow on three primary CTAs.

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
