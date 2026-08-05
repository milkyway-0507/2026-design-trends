import type { Trend } from '@/types';
import { PreviewCanvas } from './PreviewCanvas';

export function ExpressiveTypographyPreview({ trend }: { trend: Trend }) {
  return (
    <PreviewCanvas
      label="익스프레시브 타이포: 가변 굵기 대형 텍스트 시연"
      className="preview preview--expressive-type"
    >
      <span className="preview-extype__bg" aria-hidden="true">
        TYPE
      </span>
      <span className="preview-extype__fg">TYPE</span>
      <span className="preview-extype__caption">{trend.nameEn}</span>
    </PreviewCanvas>
  );
}
