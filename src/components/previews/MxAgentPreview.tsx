import type { CSSProperties } from 'react';
import type { Trend } from '@/types';
import { PreviewCanvas } from './PreviewCanvas';

const STEPS = ['분석', '검색', '실행', '완료'];

export function MxAgentPreview({ trend }: { trend: Trend }) {
  const accent = trend.colors[0]?.hex ?? '#0D9488';

  return (
    <PreviewCanvas
      label="MX Machine Experience: AI 에이전트 워크플로 시연"
      className="preview preview--mx"
    >
      <div className="preview-mx__terminal">
        <div className="preview-mx__header">
          <span className="preview-mx__status" style={{ color: accent }}>
            ● Agent Active
          </span>
          <span className="preview-mx__task">트렌드 리서치 중…</span>
        </div>
        <ol className="preview-mx__steps">
          {STEPS.map((step, i) => (
            <li
              key={step}
              className={`preview-mx__step ${i < 3 ? 'preview-mx__step--done' : 'preview-mx__step--active'}`}
              style={{ '--step-i': i } as CSSProperties}
            >
              <span className="preview-mx__step-dot" />
              {step}
            </li>
          ))}
        </ol>
        <div className="preview-mx__log">
          <span className="preview-mx__log-line">&gt; Reading uxdesign.cc…</span>
          <span className="preview-mx__log-line preview-mx__log-line--typing">
            &gt; Summarizing 10 trends
            <span className="preview-mx__cursor">_</span>
          </span>
        </div>
        <div className="preview-mx__controls" aria-hidden="true">
          <button type="button" tabIndex={-1} className="preview-mx__ctrl preview-mx__ctrl--pause">일시정지</button>
          <button type="button" tabIndex={-1} className="preview-mx__ctrl preview-mx__ctrl--stop">중단</button>
        </div>
      </div>
    </PreviewCanvas>
  );
}
