import type { CSSProperties } from 'react';
import type { Trend, TrendStatus } from '@/types';
import { ColorChipCopy, ColorSwatch } from '@/components/ColorSwatch';
import { DIFFICULTY_LABELS, STATUS_LABELS } from '@/types';
import { resolveTrendNewBadge } from '@/hooks/useMonthlyUpdate';
import { getCategoryCssVar, getCategoryLabel } from '@/utils/category';

interface TrendCardProps {
  trend: Trend;
  onSelect: (trend: Trend) => void;
}

function ColorPreview({ colors }: { colors: Trend['colors'] }) {
  const previewColors = colors.slice(0, 5);

  return (
    <div className="trend-card__preview" aria-hidden="true">
      <div
        className="trend-card__preview-gradient"
        style={{
          background: `linear-gradient(135deg, ${previewColors.map((c) => c.hex).join(', ')})`,
        }}
      />

      <div className="trend-card__color-overlay" aria-hidden="true">
        {previewColors.map((color) => (
          <div key={color.hex} className="trend-card__color-chip">
            <span
              className="trend-card__color-chip-dot"
              style={{ background: color.hex }}
            />
            <span className="trend-card__color-chip-hex">{color.hex}</span>
            <ColorChipCopy hex={color.hex} name={color.name} />
          </div>
        ))}
      </div>

      <ul className="trend-card__swatches">
        {previewColors.map((color) => (
          <li key={color.hex}>
            <ColorSwatch hex={color.hex} name={color.name} size="sm" />
          </li>
        ))}
      </ul>
    </div>
  );
}

function StatusIndicator({ status }: { status: TrendStatus }) {
  const label = STATUS_LABELS[status];

  return (
    <span
      className={`trend-card__status trend-card__status--${status}`}
      title={label}
      aria-label={`상태: ${label}`}
    >
      {status === 'rising' && (
        <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
          <path
            d="M6 2 L10 8 L2 8 Z"
            fill="currentColor"
            transform="rotate(0 6 6)"
          />
        </svg>
      )}
      {status === 'peak' && (
        <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
          <path
            d="M6 1 C6 1 4 5 3 7 C2.5 8 3.5 9 4.5 8.5 C5 8.2 5.5 7 6 5.5 C6.5 7 7 8.2 7.5 8.5 C8.5 9 9.5 8 9 7 C8 5 6 1 6 1 Z"
            fill="currentColor"
          />
        </svg>
      )}
      {status === 'fading' && (
        <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
          <path d="M6 10 L2 4 L10 4 Z" fill="currentColor" />
        </svg>
      )}
    </span>
  );
}

export function TrendCard({ trend, onSelect }: TrendCardProps) {
  const primarySource = trend.sources[0];
  const displayCategories = trend.categories.slice(0, 2);
  const showNewBadge = resolveTrendNewBadge(trend);
  const primaryCategory = trend.categories[0];

  return (
    <article
      className="trend-card"
      data-category={primaryCategory}
      aria-labelledby={`trend-title-${trend.id}`}
    >
      {showNewBadge && (
        <span className="trend-card__new-badge" aria-label="신규 트렌드">
          NEW
        </span>
      )}

      <ColorPreview colors={trend.colors} />

      <div className="trend-card__body">
        <div className="trend-card__meta">
          <StatusIndicator status={trend.status} />
          <span
            className={`trend-card__difficulty trend-card__difficulty--${trend.difficulty}`}
          >
            {DIFFICULTY_LABELS[trend.difficulty]}
          </span>
          <ul className="trend-card__tags" aria-label="카테고리">
            {displayCategories.map((cat) => (
              <li key={cat}>
                <span
                  className="trend-card__tag"
                  style={
                    { '--tag-color': getCategoryCssVar(cat) } as CSSProperties
                  }
                >
                  {getCategoryLabel(cat)}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <h3 id={`trend-title-${trend.id}`} className="trend-card__title">
          {trend.nameKo}
        </h3>
        <p className="trend-card__name-en">{trend.nameEn}</p>
        <p className="trend-card__tagline text-secondary">{trend.tagline}</p>

        <button
          type="button"
          className="trend-card__action"
          onClick={() => onSelect(trend)}
          aria-label={`${trend.nameKo} 라이브 시연 보기`}
        >
          라이브 시연 보기
        </button>
      </div>

      <footer className="trend-card__footer">
        <span className="trend-card__updated">
          업데이트 {trend.updatedAt}
        </span>
        {primarySource && (
          <a
            href={primarySource.url}
            className="trend-card__source"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="trend-card__source-icon" aria-hidden="true">
              ↗
            </span>
            <span>원문 보기 — {primarySource.publisher}</span>
          </a>
        )}
      </footer>
    </article>
  );
}
