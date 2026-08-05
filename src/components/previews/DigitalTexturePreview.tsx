import { useState, type CSSProperties } from 'react';
import type { Trend } from '@/types';
import { PreviewCanvas } from './PreviewCanvas';

export function DigitalTexturePreview({ trend }: { trend: Trend }) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <PreviewCanvas
      label="디지털 텍스처: 클레이·젤리·크롬 버튼 시연"
      className="preview preview--digital-texture"
    >
      <div className="preview-texture__buttons">
        <button
          type="button"
          className={`preview-texture__btn preview-texture__btn--clay ${active === 'clay' ? 'preview-texture__btn--clay-active' : ''}`}
          onClick={() => setActive('clay')}
        >
          Clay
        </button>
        <button
          type="button"
          className={`preview-texture__btn preview-texture__btn--jelly ${active === 'jelly' ? 'preview-texture__btn--jelly-active' : ''}`}
          onClick={() => setActive('jelly')}
        >
          Jelly
        </button>
        <button
          type="button"
          className={`preview-texture__btn preview-texture__btn--chrome ${active === 'chrome' ? 'preview-texture__btn--chrome-active' : ''}`}
          onClick={() => setActive('chrome')}
          style={{ '--accent': trend.colors[2]?.hex } as CSSProperties}
        >
          Chrome
        </button>
      </div>
    </PreviewCanvas>
  );
}
