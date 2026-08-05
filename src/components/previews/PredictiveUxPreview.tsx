import { useState } from 'react';
import type { Trend } from '@/types';
import { PreviewCanvas } from './PreviewCanvas';

const PREDICTIONS = ['2026 디자인 트렌드', '도파민 컬러 팔레트', 'AI UX 패턴'];

export function PredictiveUxPreview({ trend }: { trend: Trend }) {
  const [open, setOpen] = useState(false);

  return (
    <PreviewCanvas
      label="예측형 UX: 자동완성 드롭다운 시연"
      className="preview preview--predictive"
    >
      <div className="preview-predict__search">
        <input
          type="search"
          className="preview-predict__input"
          placeholder="검색…"
          onFocus={() => setOpen(true)}
          onBlur={() => window.setTimeout(() => setOpen(false), 150)}
          aria-label="검색 입력"
          aria-expanded={open}
        />
        {open && (
          <ul className="preview-predict__dropdown" role="listbox">
            {PREDICTIONS.map((item) => (
              <li key={item} className="preview-predict__item" role="option">
                <span>{item}</span>
                <span className="preview-predict__badge">예측</span>
              </li>
            ))}
          </ul>
        )}
      </div>
      <span className="preview-predict__hint">{trend.nameKo}</span>
    </PreviewCanvas>
  );
}
