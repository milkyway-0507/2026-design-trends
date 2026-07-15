import type { Trend } from '@/types';
import { PreviewCanvas } from './PreviewCanvas';

export function BrutalistPreview({ trend }: { trend: Trend }) {
  return (
    <PreviewCanvas
      label="브루탈리스트 명료함: 굵은 타이포·날것의 그리드 시연"
      className="preview preview--brutalist"
    >
      <div className="preview-brutalist__grid">
        <div className="preview-brutalist__cell preview-brutalist__cell--title">
          RAW
        </div>
        <div className="preview-brutalist__cell preview-brutalist__cell--accent" style={{ background: trend.colors[2]?.hex }}>
          TYPE
        </div>
        <div className="preview-brutalist__cell preview-brutalist__cell--info">
          NO DECORATION
        </div>
        <div className="preview-brutalist__cell preview-brutalist__cell--bold">
          {trend.nameKo}
        </div>
      </div>
    </PreviewCanvas>
  );
}
