/**
 * Tide / wave divider between sections — subtle, drifts horizontally.
 * Pass `from` (top fill) and `to` (bottom fill) to match neighbouring sections.
 */
export const TideDivider = ({ from = "var(--bg-base)", to = "var(--bg-surface-2)", flip = false }) => {
  return (
    <div
      aria-hidden="true"
      className="relative w-full overflow-hidden"
      style={{ background: from, height: 72 }}
    >
      <svg
        viewBox="0 0 1440 72"
        preserveAspectRatio="none"
        className="absolute inset-0 w-[200%] h-full"
        style={{
          transform: flip ? "scaleY(-1)" : undefined,
          animation: "tide-drift 24s linear infinite",
        }}
      >
        <defs>
          <linearGradient id="tide-grad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor={to} stopOpacity="0.92" />
            <stop offset="50%" stopColor={to} stopOpacity="1" />
            <stop offset="100%" stopColor={to} stopOpacity="0.92" />
          </linearGradient>
        </defs>
        <path
          d="M0,48 C180,72 360,12 540,30 C720,48 900,66 1080,42 C1260,18 1380,30 1440,36 L1440,72 L0,72 Z"
          fill="url(#tide-grad)"
        />
        <path
          d="M1440,48 C1620,72 1800,12 1980,30 C2160,48 2340,66 2520,42 C2700,18 2820,30 2880,36 L2880,72 L1440,72 Z"
          fill="url(#tide-grad)"
        />
      </svg>
      <style>{`
        @keyframes tide-drift {
          0% { transform: translateX(0) ${flip ? "scaleY(-1)" : ""}; }
          100% { transform: translateX(-50%) ${flip ? "scaleY(-1)" : ""}; }
        }
        @media (prefers-reduced-motion: reduce) {
          svg { animation: none !important; }
        }
      `}</style>
    </div>
  );
};
