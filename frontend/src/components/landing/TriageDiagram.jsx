import { motion } from "framer-motion";

/**
 * Light-theme triage diagram. Tier endpoints renamed to SwiftNegotiate /
 * SwiftMediate / SwiftArbitrate. ROUTING HUB caption removed.
 */
export const TriageDiagram = () => {
  const inputs = [
    { x: 50, y: 80, label: "B2C Retail" },
    { x: 50, y: 180, label: "MSME" },
    { x: 50, y: 280, label: "Banking" },
    { x: 50, y: 380, label: "Enterprise" },
  ];
  const hub = { x: 280, y: 230 };
  const outputs = [
    { x: 412, y: 110, label: "SwiftNegotiate", tier: "TIER 01" },
    { x: 420, y: 230, label: "SwiftMediate", tier: "TIER 02" },
    { x: 412, y: 350, label: "SwiftArbitrate", tier: "TIER 03" },
  ];

  const incoming = inputs.map(
    (i) => `M ${i.x} ${i.y} C ${i.x + 110} ${i.y}, ${hub.x - 90} ${hub.y}, ${hub.x} ${hub.y}`
  );
  const outgoing = outputs.map(
    (o) => `M ${hub.x} ${hub.y} C ${hub.x + 90} ${hub.y}, ${o.x - 110} ${o.y}, ${o.x} ${o.y}`
  );

  return (
    <div className="relative aspect-[7/6] w-full max-w-[640px] mx-auto">
      <div className="absolute inset-0 rounded-3xl border border-[var(--border-soft)] bg-[var(--bg-surface)] shadow-[0_1px_3px_rgba(15,23,42,0.05),_0_24px_60px_rgba(15,23,42,0.07)] overflow-hidden">
        <div className="absolute inset-0 bg-dots opacity-60" />
        <div className="absolute -inset-12 bg-[var(--accent-bright)] opacity-[0.07] blur-3xl" />

        {/* Corner labels */}
        <div className="absolute top-4 left-4 font-mono-ui text-[10px] tracking-[0.22em] text-[var(--text-muted)] uppercase">
          Incoming Disputes
        </div>
        <div className="absolute top-4 right-4 font-mono-ui text-[10px] tracking-[0.22em] text-[var(--accent-deep)] uppercase">
          Resolution Tiers
        </div>

        <svg viewBox="0 0 560 480" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid meet">
          <defs>
            <radialGradient id="hubGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.40" />
              <stop offset="60%" stopColor="#06B6D4" stopOpacity="0.10" />
              <stop offset="100%" stopColor="#06B6D4" stopOpacity="0" />
            </radialGradient>
          </defs>

          <circle cx={hub.x} cy={hub.y} r="120" fill="url(#hubGlow)" />

          {incoming.map((d, i) => (
            <g key={`in-${i}`}>
              <path d={d} stroke="rgba(8,145,178,0.35)" strokeWidth="1.2" fill="none" />
              <circle r="3" fill="#0891B2">
                <animateMotion dur="2.6s" repeatCount="indefinite" begin={`${i * 0.55}s`} path={d} />
              </circle>
            </g>
          ))}
          {outgoing.map((d, i) => (
            <g key={`out-${i}`}>
              <path d={d} stroke="rgba(8,145,178,0.55)" strokeWidth="1.4" fill="none" />
              <circle r="3.5" fill="#0891B2">
                <animateMotion dur="2.4s" repeatCount="indefinite" begin={`${1 + i * 0.5}s`} path={d} />
              </circle>
            </g>
          ))}

          {/* Input nodes */}
          {inputs.map((n) => (
            <g key={n.label}>
              <circle cx={n.x} cy={n.y} r="6" fill="#FFFFFF" stroke="#0891B2" strokeWidth="1.5" />
              <circle cx={n.x} cy={n.y} r="2.5" fill="#0891B2" />
              <text
                x={n.x + 14}
                y={n.y + 4}
                fontFamily="Geist Mono, monospace"
                fontSize="11"
                fill="#475569"
              >
                {n.label}
              </text>
            </g>
          ))}

          {/* Hub */}
          <g>
            <circle cx={hub.x} cy={hub.y} r="42" fill="#FFFFFF" stroke="rgba(8,145,178,0.55)" strokeWidth="1.2" />
            <motion.circle
              cx={hub.x}
              cy={hub.y}
              r="42"
              fill="none"
              stroke="#06B6D4"
              strokeWidth="1"
              initial={{ opacity: 0.55, scale: 1 }}
              animate={{ opacity: [0.55, 0, 0.55], scale: [1, 1.35, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              style={{ transformOrigin: `${hub.x}px ${hub.y}px` }}
            />
            <circle cx={hub.x} cy={hub.y} r="22" fill="#0E1726" stroke="#0891B2" strokeWidth="1" />
            <text
              x={hub.x}
              y={hub.y - 2}
              textAnchor="middle"
              fontFamily="Geist Mono, monospace"
              fontSize="9"
              fill="#06B6D4"
              letterSpacing="2"
            >
              TRIAGE
            </text>
            <text
              x={hub.x}
              y={hub.y + 10}
              textAnchor="middle"
              fontFamily="Geist Mono, monospace"
              fontSize="9"
              fill="#F1F5F9"
              letterSpacing="2"
            >
              ENGINE
            </text>
          </g>

          {/* Output tier nodes */}
          {outputs.map((o) => (
            <g key={o.label}>
              <rect
                x={o.x - 6}
                y={o.y - 24}
                rx="6"
                width="130"
                height="48"
                fill="#FFFFFF"
                stroke="rgba(8,145,178,0.45)"
                strokeWidth="1"
              />
              <text
                x={o.x + 6}
                y={o.y - 6}
                fontFamily="Geist Mono, monospace"
                fontSize="8.5"
                fill="#0E7490"
                letterSpacing="2"
              >
                {o.tier}
              </text>
              <text
                x={o.x + 6}
                y={o.y + 12}
                fontFamily="Geist, sans-serif"
                fontSize="13"
                fontWeight="600"
                fill="#0E1726"
              >
                {o.label}
              </text>
              <circle cx={o.x} cy={o.y} r="3" fill="#0891B2" />
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
};
