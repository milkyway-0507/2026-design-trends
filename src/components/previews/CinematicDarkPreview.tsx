import type { Trend } from '@/types';
import { PreviewCanvas } from './PreviewCanvas';

export function CinematicDarkPreview({ trend }: { trend: Trend }) {
  return (
    <PreviewCanvas
      label="시네마틱 다크: 글로우 타이포와 스캔라인 시연"
      className="preview preview--cinematic"
    >
      <div className="preview-cinematic__glow" style={{ color: trend.colors[0]?.hex }}>
        <span className="preview-cinematic__title">CINEMATIC</span>
      </div>
      <div className="preview-cinematic__scanline" aria-hidden="true" />
    </PreviewCanvas>
  );
}
