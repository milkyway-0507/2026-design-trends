import type { Trend } from '@/types';
import { PreviewCanvas } from './PreviewCanvas';

export function RetroPreview({ trend }: { trend: Trend }) {
  const c1 = trend.colors[0]?.hex ?? '#FF00FF';
  const c2 = trend.colors[2]?.hex ?? '#00FFFF';

  return (
    <PreviewCanvas
      label="노스탤지어 레트로: Y2K 픽셀·CRT 시연"
      className="preview preview--retro"
    >
      <div className="preview-retro__crt">
        <svg className="preview-retro__pixel-art" viewBox="0 0 64 64" aria-hidden="true">
          <rect x="8" y="8" width="48" height="48" fill={c2} />
          <rect x="16" y="16" width="8" height="8" fill={c1} />
          <rect x="40" y="16" width="8" height="8" fill={c1} />
          <rect x="20" y="36" width="24" height="4" fill={c1} />
          <rect x="24" y="28" width="16" height="4" fill="#fff" />
        </svg>
        <p className="preview-retro__text" style={{ color: c1 }}>
          WELCOME TO 1996
        </p>
        <div className="preview-retro__scanlines" aria-hidden="true" />
      </div>
    </PreviewCanvas>
  );
}
