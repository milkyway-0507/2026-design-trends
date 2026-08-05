import { useCallback, useEffect, useRef, useState } from 'react';
import type { Trend } from '@/types';
import { DIFFICULTY_LABELS } from '@/types';
import { getCategoryLabel } from '@/utils/category';
import { TrendPreview } from '@/components/previews';

interface TrendPreviewModalProps {
  trend: Trend | null;
  showColorPalette?: boolean;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  hasPrev: boolean;
  hasNext: boolean;
  currentIndex: number;
  total: number;
}

export function TrendPreviewModal({
  trend,
  showColorPalette = false,
  onClose,
  onPrev,
  onNext,
  hasPrev,
  hasNext,
  currentIndex,
  total,
}: TrendPreviewModalProps) {
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [shareCopied, setShareCopied] = useState(false);
  const [copiedHex, setCopiedHex] = useState<string | null>(null);

  const handleCopy = useCallback(async (hex: string) => {
    try {
      await navigator.clipboard.writeText(hex);
    } catch {
      const el = document.createElement('textarea');
      el.value = hex;
      el.style.cssText = 'position:fixed;opacity:0';
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
    }
    setCopiedHex(hex);
    window.setTimeout(() => setCopiedHex(null), 1400);
  }, []);

  const handleShare = useCallback(async () => {
    const url = window.location.href;
    try {
      await navigator.clipboard.writeText(url);
      setShareCopied(true);
      window.setTimeout(() => setShareCopied(false), 2000);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = url;
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();
      try {
        document.execCommand('copy');
        setShareCopied(true);
        window.setTimeout(() => setShareCopied(false), 2000);
      } catch {
        /* ignore */
      } finally {
        document.body.removeChild(textarea);
      }
    }
  }, []);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
      if (event.key === 'ArrowLeft' && hasPrev) onPrev();
      if (event.key === 'ArrowRight' && hasNext) onNext();
    },
    [onClose, onPrev, onNext, hasPrev, hasNext],
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  useEffect(() => {
    const scrollY = window.scrollY;
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = '100%';
    closeBtnRef.current?.focus();

    return () => {
      const savedScrollY = Math.abs(
        parseInt(document.body.style.top || '0', 10),
      );
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      window.scrollTo(0, savedScrollY);
    };
  }, []);

  useEffect(() => {
    if (!trend) return;

    contentRef.current?.scrollTo({ top: 0, behavior: 'auto' });
    setShareCopied(false);
    setCopiedHex(null);
  }, [trend?.id]);

  if (!trend) return null;

  return (
    <div
      className="modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="modal__backdrop"
        onClick={onClose}
        aria-hidden="true"
      />
      <div ref={contentRef} className="modal__content">
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

          <div className="modal__nav">
            <button
              type="button"
              className="modal__nav-btn"
              onClick={onPrev}
              disabled={!hasPrev}
              aria-label="이전 트렌드"
            >
              ←
            </button>

            <span className="modal__nav-count">
              {currentIndex + 1} / {total}
            </span>

            <button
              type="button"
              className="modal__nav-btn"
              onClick={onNext}
              disabled={!hasNext}
              aria-label="다음 트렌드"
            >
              →
            </button>
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
          <TrendPreview trend={trend} />
        </div>

        {showColorPalette && (
          <div className="modal__colors">
            {trend.colors.map((color) => (
              <button
                key={color.hex}
                type="button"
                className={`modal__color-item ${copiedHex === color.hex ? 'modal__color-item--copied' : ''}`}
                onClick={() => handleCopy(color.hex)}
                aria-label={`${color.name} ${color.hex} 복사`}
              >
                <span
                  className="modal__color-dot"
                  style={{ background: color.hex }}
                />
                <span className="modal__color-hex">{color.hex}</span>
                <span className="modal__color-action">
                  {copiedHex === color.hex ? '✓' : '복사'}
                </span>
              </button>
            ))}
          </div>
        )}

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
            <button
              type="button"
              className="modal__share-btn"
              onClick={handleShare}
              aria-label="이 트렌드 링크 복사"
            >
              {shareCopied ? '✓ 복사됨' : '🔗 링크 복사'}
            </button>
          </footer>
        </div>
      </div>
    </div>
  );
}
