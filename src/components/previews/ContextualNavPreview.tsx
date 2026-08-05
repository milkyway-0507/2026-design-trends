import { useState } from 'react';
import type { Trend } from '@/types';
import { PreviewCanvas } from './PreviewCanvas';

export function ContextualNavPreview({ trend }: { trend: Trend }) {
  const [scrolled, setScrolled] = useState(false);

  return (
    <PreviewCanvas
      label="컨텍스트 내비: 스크롤에 따른 내비게이션 표시 시연"
      className="preview preview--contextual-nav"
    >
      <div className="preview-ctx__page">
        <nav
          className={`preview-ctx__nav ${scrolled ? 'preview-ctx__nav--hidden' : ''}`}
          aria-label="미니 내비게이션"
        >
          <span>{trend.nameKo}</span>
          <span className="preview-ctx__nav-links">Home · Trends · About</span>
        </nav>
        <div className="preview-ctx__content">
          <p>{trend.tagline}</p>
          <div className="preview-ctx__blocks" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
        </div>
        <div className="preview-ctx__controls">
          <button type="button" onClick={() => setScrolled(true)} aria-label="스크롤 다운">
            ↓ 스크롤 다운
          </button>
          <button type="button" onClick={() => setScrolled(false)} aria-label="스크롤 업">
            ↑ 스크롤 업
          </button>
        </div>
      </div>
    </PreviewCanvas>
  );
}
