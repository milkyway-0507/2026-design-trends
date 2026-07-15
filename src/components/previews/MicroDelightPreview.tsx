import { useState } from 'react';
import type { CSSProperties } from 'react';
import type { Trend } from '@/types';
import { PreviewCanvas } from './PreviewCanvas';

export function MicroDelightPreview({ trend }: { trend: Trend }) {
  const [delighted, setDelighted] = useState(false);

  return (
    <PreviewCanvas
      label="마이크로 딜라이트: 클릭 피드백 시연"
      className="preview preview--micro"
    >
      <button
        type="button"
        className={`preview-micro__btn ${delighted ? 'preview-micro__btn--done' : ''}`}
        style={{ '--btn-color': trend.colors[0]?.hex } as CSSProperties}
        onClick={() => setDelighted(true)}
        aria-pressed={delighted}
      >
        {delighted ? '✓ 완료!' : '작업 완료하기'}
      </button>
      {delighted && (
        <ul className="preview-micro__confetti" aria-hidden="true">
          {Array.from({ length: 12 }, (_, i) => (
            <li key={i} className="preview-micro__particle" style={{ '--i': i } as CSSProperties} />
          ))}
        </ul>
      )}
      <p className="preview-micro__hint">클릭해 보세요</p>
    </PreviewCanvas>
  );
}
