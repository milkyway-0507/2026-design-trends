const MARQUEE_TRENDS = [
  { label: '도파민 컬러', color: '#FF2D78' },
  { label: 'Kinetic Type', color: '#FFD600' },
  { label: 'Interactive 3D', color: '#00E5FF' },
  { label: 'AI Copilot UX', color: '#A78BFA' },
  { label: 'Micro Delight', color: '#FF6B2B' },
  { label: 'Nostalgia & Retro', color: '#F97316' },
  { label: 'Glassmorphism', color: '#14B8A6' },
  { label: 'Brutalist Clarity', color: '#FACC15' },
  { label: 'Accessibility First', color: '#22C55E' },
  { label: 'MX Design', color: '#8B5CF6' },
] as const;

export function MarqueeBand() {
  const items = [...MARQUEE_TRENDS, ...MARQUEE_TRENDS];

  return (
    <div className="marquee-band" aria-hidden="true">
      <div className="marquee-band__track">
        {items.map((trend, index) => (
          <span className="marquee-band__item" key={`${trend.label}-${index}`}>
            <span
              className="marquee-band__dot"
              style={{ background: trend.color }}
            />
            {trend.label}
          </span>
        ))}
      </div>
    </div>
  );
}
