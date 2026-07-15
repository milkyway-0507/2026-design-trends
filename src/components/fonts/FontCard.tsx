import type { CSSProperties } from 'react';
import type { TrendFont } from '@/data/fonts';

const CATEGORY_LABEL: Record<TrendFont['category'], string> = {
  sans: '산세리프',
  serif: '세리프',
  display: '디스플레이',
  mono: '모노스페이스',
  variable: '가변 폰트',
};

const STATUS_CONFIG = {
  rising: { label: '부상중', color: '#22c55e' },
  peak: { label: '정점', color: '#f59e0b' },
  fading: { label: '저물어감', color: '#6b7280' },
} as const;

interface FontCardProps {
  font: TrendFont;
}

export function FontCard({ font }: FontCardProps) {
  const status = STATUS_CONFIG[font.status];
  const isFree =
    font.licenseType === 'free' || font.licenseType === 'open-source';

  return (
    <article className="font-card" aria-labelledby={`font-title-${font.id}`}>
      <div className="font-card__header">
        <div className="font-card__badges">
          <span className="font-card__cat-badge">
            {CATEGORY_LABEL[font.category]}
          </span>
          {font.isNew && <span className="font-card__new-badge">NEW</span>}
          <span
            className="font-card__status"
            style={{ '--status-color': status.color } as CSSProperties}
          >
            <span className="font-card__status-dot" />
            {status.label}
          </span>
        </div>
        <span
          className={`font-card__license font-card__license--${font.licenseType}`}
        >
          {isFree ? '무료' : '유료'}
        </span>
      </div>

      <div
        className="font-card__specimen"
        style={{
          fontFamily: font.cssFamily,
          fontSize: `${font.specimenSize}rem`,
          fontWeight: font.weight.includes(' ') ? 400 : font.weight,
        }}
        aria-hidden="true"
      >
        {font.specimen}
      </div>

      <div className="font-card__info">
        <h3 id={`font-title-${font.id}`} className="font-card__name">
          {font.name}
        </h3>
        <p className="font-card__designer">{font.designer}</p>
        <p className="font-card__tagline">{font.tagline}</p>
      </div>

      <div className="font-card__pairing">
        <span className="font-card__pairing-label">페어링</span>
        {font.pairWith.map((pair) => (
          <span key={pair} className="font-card__pair-chip">
            {pair}
          </span>
        ))}
      </div>

      <div className="font-card__brands">
        {font.usedBy.slice(0, 3).map((brand) => (
          <span key={brand} className="font-card__brand-chip">
            {brand}
          </span>
        ))}
      </div>

      <div className="font-card__actions">
        <a
          href={font.downloadUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="font-card__btn font-card__btn--primary"
        >
          {font.licenseType === 'paid' ? '구매하기 ↗' : '다운로드 ↗'}
        </a>
        {font.googleFontsUrl && (
          <a
            href={font.googleFontsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-card__btn font-card__btn--secondary"
          >
            Google Fonts
          </a>
        )}
      </div>
    </article>
  );
}
