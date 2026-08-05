import type { Trend } from '@/types';
import { PreviewCanvas } from './PreviewCanvas';

export function LiquidGlassPreview({ trend }: { trend: Trend }) {
  return (
    <PreviewCanvas
      label="리퀴드 글래스: 블러 카드와 컬러 오브 시연"
      className="preview preview--liquid-glass"
    >
      <span className="preview-liquid__orb preview-liquid__orb--1" style={{ background: trend.colors[0]?.hex }} />
      <span className="preview-liquid__orb preview-liquid__orb--2" style={{ background: trend.colors[1]?.hex }} />
      <span className="preview-liquid__orb preview-liquid__orb--3" style={{ background: trend.colors[2]?.hex }} />
      <div className="preview-liquid__card">
        <span className="preview-liquid__card-text">Glass UI</span>
      </div>
    </PreviewCanvas>
  );
}
