import { useState } from 'react';
import type { Trend } from '@/types';
import { PreviewCanvas } from './PreviewCanvas';

export function FunctionalMinimalismPreview({ trend }: { trend: Trend }) {
  const [minimal, setMinimal] = useState(false);

  return (
    <PreviewCanvas
      label="기능적 미니멀리즘: Before/After UI 비교 시연"
      className="preview preview--func-min"
    >
      <button
        type="button"
        className="preview-funcmin__toggle"
        onClick={() => setMinimal((v) => !v)}
        aria-pressed={minimal}
      >
        {minimal ? 'Before 보기' : 'After 보기'}
      </button>
      <div className={`preview-funcmin__compare ${minimal ? 'preview-funcmin__compare--after' : ''}`}>
        {!minimal ? (
          <div className="preview-funcmin__busy">
            <div className="preview-funcmin__pattern" aria-hidden="true" />
            <p className="preview-funcmin__busy-title">{trend.nameKo} — 긴 설명과 여러 옵션</p>
            <p className="preview-funcmin__busy-text">{trend.description}</p>
            <div className="preview-funcmin__busy-btns">
              <button type="button" tabIndex={-1}>더 알아보기</button>
              <button type="button" tabIndex={-1}>데모</button>
              <button type="button" tabIndex={-1}>가격</button>
              <button type="button" tabIndex={-1}>문의</button>
              <button type="button" tabIndex={-1}>로그인</button>
            </div>
          </div>
        ) : (
          <div className="preview-funcmin__clean">
            <p className="preview-funcmin__clean-title">{trend.nameKo}</p>
            <p className="preview-funcmin__clean-text">{trend.tagline}</p>
            <button type="button" className="preview-funcmin__cta" tabIndex={-1}>
              시작하기
            </button>
          </div>
        )}
      </div>
    </PreviewCanvas>
  );
}
