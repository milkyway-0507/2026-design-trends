import type { CSSProperties } from 'react';
import type { Trend } from '@/types';
import { PreviewCanvas } from './PreviewCanvas';

export function BentoGridPreview({ trend }: { trend: Trend }) {
  return (
    <PreviewCanvas
      label="벤토 그리드: 비대칭 레이아웃 시연"
      className="preview preview--bento"
    >
      <div className="preview-bento__grid">
        <button type="button" className="preview-bento__cell preview-bento__cell--hero">
          {trend.nameKo}
        </button>
        <button
          type="button"
          className="preview-bento__cell preview-bento__cell--tall"
          style={{ background: trend.colors[0]?.hex } as CSSProperties}
          aria-label="컬러 블록 1"
        />
        <button
          type="button"
          className="preview-bento__cell preview-bento__cell--tall"
          style={{ background: trend.colors[1]?.hex } as CSSProperties}
          aria-label="컬러 블록 2"
        />
        <button type="button" className="preview-bento__cell preview-bento__cell--icon" aria-label="아이콘 셀">
          ◆
        </button>
        <button type="button" className="preview-bento__cell preview-bento__cell--stat" aria-label="통계 셀">
          24
        </button>
        <button type="button" className="preview-bento__cell preview-bento__cell--stat" aria-label="뱃지 셀">
          NEW
        </button>
      </div>
    </PreviewCanvas>
  );
}
