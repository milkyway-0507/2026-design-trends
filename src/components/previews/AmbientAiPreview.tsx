import { useState } from 'react';
import type { Trend } from '@/types';
import { PreviewCanvas } from './PreviewCanvas';

export function AmbientAiPreview({ trend }: { trend: Trend }) {
  const [accepted, setAccepted] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  return (
    <PreviewCanvas
      label="앰비언트 AI: 고스트 텍스트 제안 시연"
      className="preview preview--ambient-ai"
    >
      <div className="preview-ambient__panel">
        <p className="preview-ambient__line">
          {trend.nameKo} 리포트를
          {accepted && !dismissed && (
            <span className="preview-ambient__accepted"> 작성합니다.</span>
          )}
        </p>
        {!accepted && !dismissed && (
          <p className="preview-ambient__ghost">
            <span className="preview-ambient__cursor" />
            작성해 드릴까요? 트렌드 키워드와 브랜드 사례를 포함합니다.
          </p>
        )}
        {!dismissed && (
          <div className="preview-ambient__actions">
            <button
              type="button"
              className="preview-ambient__btn preview-ambient__btn--accept"
              onClick={() => setAccepted(true)}
            >
              Tab 수락
            </button>
            <button
              type="button"
              className="preview-ambient__btn"
              onClick={() => setDismissed(true)}
            >
              Esc 거부
            </button>
          </div>
        )}
      </div>
    </PreviewCanvas>
  );
}
