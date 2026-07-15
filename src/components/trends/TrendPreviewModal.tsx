import { useCallback, useEffect, useRef } from 'react';
import type { Trend } from '@/types';
import { DIFFICULTY_LABELS } from '@/types';
import { getCategoryLabel } from '@/utils/category';
import { TrendPreviewRenderer } from '@/components/previews';

interface TrendPreviewModalProps {
  trend: Trend | null;
  onClose: () => void;
}

export function TrendPreviewModal({ trend, onClose }: TrendPreviewModalProps) {
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    },
    [onClose],
  );

  useEffect(() => {
    if (!trend) return;

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    closeBtnRef.current?.focus();

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [trend, handleKeyDown]);

  if (!trend) return null;

  return (
    <div className="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div
        className="modal__backdrop"
        onClick={onClose}
        aria-hidden="true"
      />
      <div className="modal__content">
        <header className="modal__header">
          <div className="modal__meta">
            {trend.categories.map((cat) => (
              <span key={cat} className="modal__category">
                {getCategoryLabel(cat)}
              </span>
            ))}
            <span className="modal__difficulty">
              {DIFFICULTY_LABELS[trend.difficulty]}
            </span>
          </div>
          <button
            ref={closeBtnRef}
            type="button"
            className="modal__close"
            onClick={onClose}
            aria-label="프리뷰 닫기"
          >
            ✕
          </button>
        </header>

        <div className="modal__preview">
          <TrendPreviewRenderer trend={trend} />
        </div>

        <div className="modal__body">
          <h2 id="modal-title" className="modal__title">
            {trend.nameKo}
            <span className="modal__title-en">{trend.nameEn}</span>
          </h2>
          <p className="modal__desc">{trend.detailDescription}</p>

          <section className="modal__section" aria-labelledby="modal-brands">
            <h3 id="modal-brands" className="modal__section-title">
              브랜드 사례
            </h3>
            <ul className="modal__brand-list">
              {trend.brands.map((brand) => (
                <li key={brand.name} className="modal__brand">
                  <strong>{brand.name}</strong>
                  <span>{brand.context}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="modal__section" aria-labelledby="modal-keywords">
            <h3 id="modal-keywords" className="modal__section-title">
              키워드
            </h3>
            <ul className="modal__keywords">
              {trend.keywords.map((kw) => (
                <li key={kw}>{kw}</li>
              ))}
            </ul>
          </section>

          <footer className="modal__sources">
            {trend.sources.map((source) => (
              <a
                key={source.url}
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="modal__source-link"
              >
                ↗ {source.title}
              </a>
            ))}
          </footer>
        </div>
      </div>
    </div>
  );
}
