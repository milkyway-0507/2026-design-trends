import type { CSSProperties } from 'react';
import type { Trend } from '@/types';
import { PreviewCanvas } from './PreviewCanvas';

export function DopamineGradientPreview({ trend }: { trend: Trend }) {
  const colors = trend.colors.map((c) => c.hex);

  return (
    <PreviewCanvas
      label="도파민 컬러: 고채도 그라디언트 애니메이션 시연"
      className="preview preview--dopamine"
    >
      <div
        className="preview-dopamine__mesh"
        style={
          {
            '--c1': colors[0],
            '--c2': colors[1],
            '--c3': colors[2],
            '--c4': colors[3],
            '--c5': colors[4],
          } as CSSProperties
        }
      />
      <svg className="preview-dopamine__rings" viewBox="0 0 200 200" aria-hidden="true">
        <circle cx="100" cy="100" r="70" fill="none" stroke="currentColor" strokeWidth="3" opacity="0.4" />
        <circle cx="100" cy="100" r="45" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.6" />
        <circle cx="100" cy="100" r="20" fill="currentColor" opacity="0.9" />
      </svg>
      <span className="preview-dopamine__label">Feel Good</span>
    </PreviewCanvas>
  );
}
