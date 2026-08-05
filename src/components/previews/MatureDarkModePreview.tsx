import type { Trend } from '@/types';
import { PreviewCanvas } from './PreviewCanvas';

const SURFACES = [
  { label: 'surface-0', color: '#06060F' },
  { label: 'surface-1', color: '#0D0D1A' },
  { label: 'surface-2', color: '#141414' },
  { label: 'surface-3', color: '#1A1A1A' },
];

export function MatureDarkModePreview({ trend }: { trend: Trend }) {
  return (
    <PreviewCanvas
      label="다크모드 elevation: 표면 계층 시연"
      className="preview preview--mature-dark"
    >
      <div className="preview-mature__stack">
        {SURFACES.map((surface, i) => (
          <div
            key={surface.label}
            className="preview-mature__layer"
            style={{
              background: surface.color,
              zIndex: SURFACES.length - i,
              transform: `translateY(${i * 10}px)`,
            }}
          >
            <span className="preview-mature__label">{surface.label}</span>
          </div>
        ))}
      </div>
      <span className="preview-mature__caption">{trend.nameEn}</span>
    </PreviewCanvas>
  );
}
