import type { Trend } from '@/types';
import { PreviewCanvas } from './PreviewCanvas';

export function LowStimulusPreview({ trend }: { trend: Trend }) {
  return (
    <PreviewCanvas
      label="로우 스티뮤러스: 여백 중심 미니멀 레이아웃 시연"
      className="preview preview--low-stimulus"
    >
      <p className="preview-low__text">Less is more</p>
      <span className="preview-low__sub">{trend.nameEn}</span>
    </PreviewCanvas>
  );
}
