import type { CSSProperties } from 'react';
import type { Trend } from '@/types';
import { PreviewCanvas } from './PreviewCanvas';

export function MotionIdentityPreview({ trend }: { trend: Trend }) {
  return (
    <PreviewCanvas
      label="모션 아이덴티티: 브랜드 도형 변형 easing 시연"
      className="preview preview--motion-id"
    >
      <div
        className="preview-motion-id__shape"
        style={
          {
            '--c1': trend.colors[0]?.hex,
            '--c2': trend.colors[1]?.hex,
            '--c3': trend.colors[2]?.hex,
            '--c4': trend.colors[3]?.hex,
          } as CSSProperties
        }
        aria-hidden="true"
      />
      <span className="preview-motion-id__label">Brand Motion</span>
    </PreviewCanvas>
  );
}
