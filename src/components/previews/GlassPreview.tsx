import type { Trend } from '@/types';
import { PreviewCanvas } from './PreviewCanvas';

export function GlassPreview({ trend }: { trend: Trend }) {
  const colors = trend.colors;

  return (
    <PreviewCanvas
      label="글래스모피즘: 반투명 블러 레이어 시연"
      className="preview preview--glass"
    >
      <div
        className="preview-glass__bg"
        style={{
          background: `linear-gradient(135deg, ${colors[0]?.hex}, ${colors[1]?.hex}, ${colors[2]?.hex})`,
        }}
      />
      <div className="preview-glass__panel preview-glass__panel--back">
        <svg viewBox="0 0 80 40" aria-hidden="true">
          <ellipse cx="40" cy="20" rx="35" ry="15" fill="white" opacity="0.2" />
        </svg>
      </div>
      <div className="preview-glass__panel preview-glass__panel--front">
        <span className="preview-glass__title">Glass UI</span>
        <span className="preview-glass__subtitle">backdrop-filter: blur</span>
      </div>
    </PreviewCanvas>
  );
}
