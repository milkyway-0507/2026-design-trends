import type { Trend } from '@/types';
import { PreviewCanvas } from './PreviewCanvas';

export function FallbackPreview({ trend }: { trend: Trend }) {
  return (
    <PreviewCanvas label={`${trend.nameKo} 프리뷰`} className="preview--fallback">
      <span className="preview-fallback__label">{trend.nameKo}</span>
    </PreviewCanvas>
  );
}
