import type { CSSProperties } from 'react';
import type { Trend } from '@/types';
import { PreviewCanvas } from './PreviewCanvas';

const WORD = 'DESIGN';

export function KineticTextPreview({ trend }: { trend: Trend }) {
  return (
    <PreviewCanvas
      label="키네틱 타이포그래피: 움직이는 글자 시연"
      className="preview preview--kinetic"
    >
      <p className="preview-kinetic__word" aria-hidden="true">
        {WORD.split('').map((char, i) => (
          <span
            key={i}
            className="preview-kinetic__char"
            style={{ '--i': i } as CSSProperties}
          >
            {char}
          </span>
        ))}
      </p>
      <p className="preview-kinetic__sub" style={{ color: trend.colors[1]?.hex }}>
        {trend.nameKo}
      </p>
    </PreviewCanvas>
  );
}
