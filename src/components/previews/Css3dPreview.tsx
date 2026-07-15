import type { CSSProperties } from 'react';
import type { Trend } from '@/types';
import { PreviewCanvas } from './PreviewCanvas';

export function Css3dPreview({ trend }: { trend: Trend }) {
  const accent = trend.colors[0]?.hex ?? '#00E5FF';

  return (
    <PreviewCanvas
      label="인터랙티브 3D: CSS perspective 입체 시연"
      className="preview preview--css3d"
    >
      <div className="preview-css3d__stage">
        <div className="preview-css3d__cube">
          {['front', 'back', 'right', 'left', 'top', 'bottom'].map((face) => (
            <div
              key={face}
              className={`preview-css3d__face preview-css3d__face--${face}`}
              style={{ '--face-accent': accent } as CSSProperties}
            />
          ))}
        </div>
      </div>
      <svg className="preview-css3d__grid" viewBox="0 0 120 120" aria-hidden="true">
        <defs>
          <pattern id="grid3d" width="12" height="12" patternUnits="userSpaceOnUse">
            <path d="M 12 0 L 0 0 0 12" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
          </pattern>
        </defs>
        <rect width="120" height="120" fill="url(#grid3d)" />
      </svg>
    </PreviewCanvas>
  );
}
