import type { Trend } from '@/types';
import { PreviewCanvas } from './PreviewCanvas';

export function AccessibilityPreview({ trend }: { trend: Trend }) {
  const goodColor = trend.colors[0]?.hex ?? '#1D4ED8';

  return (
    <PreviewCanvas
      label="접근성 퍼스트: 대비비·포커스 링 시연"
      className="preview preview--a11y"
    >
      <div className="preview-a11y__compare">
        <div className="preview-a11y__bad">
          <span className="preview-a11y__label">Bad 2.1:1</span>
          <button type="button" className="preview-a11y__btn preview-a11y__btn--bad" tabIndex={-1}>
            Submit
          </button>
        </div>
        <div className="preview-a11y__good">
          <span className="preview-a11y__label">Good 7.2:1</span>
          <button
            type="button"
            className="preview-a11y__btn preview-a11y__btn--good"
            style={{ background: goodColor }}
          >
            Submit
          </button>
        </div>
      </div>
      <div className="preview-a11y__focus-demo">
        <button type="button" className="preview-a11y__focusable">
          Tab 포커스
        </button>
        <svg className="preview-a11y__icon" viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M12 8v4M12 16h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
        <span className="preview-a11y__wcag">WCAG 2.1 AA</span>
      </div>
    </PreviewCanvas>
  );
}
