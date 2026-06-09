import { motion } from "framer-motion";

/**
 * Triage diagram: input dispute nodes (left) → central routing hub → three labeled
 * endpoints on the right (Negotiate · Mediate · Arbitrate) with cyan pulses
 * traveling along the edges.
 */
export const TriageDiagram = () => {
  // Node coordinates within 560 × 480 viewBox
  const inputs = [
    { x: 50, y: 80, label: "B2C Retail" },
    { x: 50, y: 180, label: "MSME" },
    { x: 50, y: 280, label: "Banking" },
    { x: 50, y: 380, label: "Enterprise" },
  ];
  const hub = { x: 280, y: 230 };
  const outputs = [
    { x: 500, y: 110, label: "Negotiate", tier: "TIER 01" },
    { x: 510, y: 230, label: "Mediate", tier: "TIER 02" },
    { x: 500, y: 350, label: "Arbitrate", tier: "TIER 03" },
  ];

  const incoming = inputs.map((i) => `M ${i.x} ${i.y} C ${i.x + 110} ${i.y}, ${hub.x - 90} ${hub.y}, ${hub.x} ${hub.y}`);
  const outgoing = outputs.map((o) => `M ${hub.x} ${hub.y} C ${hub.x + 90} ${hub.y}, ${o.x - 110} ${o.y}, ${o.x} ${o.y}`);

  return (
    <div className="relative aspect-[7/6] w-full max-w-[640px] mx-auto">
      <div className="absolute inset-0 rounded-3xl border border-[var(--border-soft)] glass overflow-hidden">
        <div className="absolute inset-0 bg-dots opacity-30" />
        <div className="absolute -inset-12 bg-[var(--accent)] opacity-[0.04] blur-3xl" />

        {/* Corner labels */}
        <div className="absolute top-4 left-4 font-mono-ui text-[10px] tracking-[0.22em] text-[var(--text-muted)] uppercase">
          Incoming Disputes
        </div>
        <div className="absolute top-4 right-4 font-mono-ui text-[10px] tracking-[0.22em] text-[var(--accent)] uppercase">
          Resolution Tiers
        </div>
        <div className="absolute bottom-3 left-4 font-mono-ui text-[10px] tracking-[0.22em] text-[var(--text-muted)] uppercase">
          Routing Hub · v2.0
        </div>

        <svg viewBox="0 0 560 480" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid meet">
          <defs>
            <radialGradient id="hubGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#22D3EE" stopOpacity="0.7" />
              <stop offset="60%" stopColor="#22D3EE" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#22D3EE" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="edge" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#22D3EE" stopOpacity="0.0" />
              <stop offset="50%" stopColor="#22D3EE" stopOpacity="0.55" />
              <stop offset="100%" stopColor="#22D3EE" stopOpacity="0.0" />
            </linearGradient>
          </defs>

          {/* Hub glow halo */}
          <circle cx={hub.x} cy={hub.y} r="120" fill="url(#hubGlow)" />

          {/* Edges */}
          {incoming.map((d, i) => (
            <g key={`in-${i}`}>
              <path d={d} stroke="rgba(34,211,238,0.25)" strokeWidth="1.2" fill="none" />
              <motion.circle
                r="3"
                fill="#5EEAF5"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 1, 0] }}
                transition={{ duration: 2.6, repeat: Infinity, delay: i * 0.55, ease: "easeInOut" }}
              >
                <animateMotion dur="2.6s" repeatCount="indefinite" begin={`${i * 0.55}s`} path={d} />
              </motion.circle>
            </g>
          ))}
          {outgoing.map((d, i) => (
            <g key={`out-${i}`}>
              <path d={d} stroke="rgba(34,211,238,0.4)" strokeWidth="1.4" fill="none" />
              <motion.circle
                r="3.5"
                fill="#5EEAF5"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 1, 0] }}
                transition={{ duration: 2.4, repeat: Infinity, delay: 1 + i * 0.5, ease: "easeInOut" }}
              >
                <animateMotion dur="2.4s" repeatCount="indefinite" begin={`${1 + i * 0.5}s`} path={d} />
              </motion.circle>
            </g>
          ))}

          {/* Input nodes */}
          {inputs.map((n) => (
            <g key={n.label}>
              <circle cx={n.x} cy={n.y} r="6" fill="#141C30" stroke="#22D3EE" strokeWidth="1.5" />
              <circle cx={n.x} cy={n.y} r="2.5" fill="#22D3EE" />
              <text
                x={n.x + 14}
                y={n.y + 4}
                fontFamily="JetBrains Mono, monospace"
                fontSize="11"
                fill="#9AA7BF"
              >
                {n.label}
              </text>
            </g>
          ))}

          {/* Hub */}
          <g>
            <circle cx={hub.x} cy={hub.y} r="42" fill="#0E1424" stroke="rgba(34,211,238,0.5)" strokeWidth="1.2" />
            <motion.circle
              cx={hub.x}
              cy={hub.y}
              r="42"
              fill="none"
              stroke="#22D3EE"
              strokeWidth="1"
              initial={{ opacity: 0.6, scale: 1 }}
              animate={{ opacity: [0.6, 0, 0.6], scale: [1, 1.35, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              style={{ transformOrigin: `${hub.x}px ${hub.y}px` }}
            />
            <circle cx={hub.x} cy={hub.y} r="22" fill="#0B1120" stroke="#22D3EE" strokeWidth="1" />
            <text
              x={hub.x}
              y={hub.y - 2}
              textAnchor="middle"
              fontFamily="JetBrains Mono, monospace"
              fontSize="9"
              fill="#22D3EE"
              letterSpacing="2"
            >
              TRIAGE
            </text>
            <text
              x={hub.x}
              y={hub.y + 10}
              textAnchor="middle"
              fontFamily="JetBrains Mono, monospace"
              fontSize="9"
              fill="#5EEAF5"
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
                width="105"
                height="48"
                fill="#0E1424"
                stroke="rgba(34,211,238,0.45)"
                strokeWidth="1"
              />
              <text
                x={o.x + 6}
                y={o.y - 6}
                fontFamily="JetBrains Mono, monospace"
                fontSize="8.5"
                fill="#22D3EE"
                letterSpacing="2"
              >
                {o.tier}
              </text>
              <text
                x={o.x + 6}
                y={o.y + 12}
                fontFamily="Space Grotesk, sans-serif"
                fontSize="14"
                fontWeight="600"
                fill="#EEF2FB"
              >
                {o.label}
              </text>
              <circle cx={o.x} cy={o.y} r="3" fill="#5EEAF5" />
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
};
