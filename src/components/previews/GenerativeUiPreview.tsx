import { useState } from 'react';
import type { Trend } from '@/types';
import { PreviewCanvas } from './PreviewCanvas';

const COMPONENTS = ['button', 'card', 'badge'] as const;

export function GenerativeUiPreview({ trend }: { trend: Trend }) {
  const [step, setStep] = useState<'idle' | 'loading' | 'done'>('idle');
  const [index, setIndex] = useState(0);

  const handleGenerate = () => {
    if (step === 'loading') return;
    setStep('loading');
    window.setTimeout(() => {
      setStep('done');
    }, 1200);
  };

  const handleReset = () => {
    setStep('idle');
    setIndex((i) => (i + 1) % COMPONENTS.length);
  };

  const kind = COMPONENTS[index];

  return (
    <PreviewCanvas
      label="제너레이티브 UI: 프롬프트에서 컴포넌트 생성 시연"
      className="preview preview--generative"
    >
      <div className="preview-gen__panel">
        <div className="preview-gen__prompt">
          <span className="preview-gen__prompt-label">Prompt</span>
          <input
            type="text"
            readOnly
            value="버튼 만들어줘"
            className="preview-gen__input"
            aria-label="프롬프트 입력"
          />
          <button
            type="button"
            className="preview-gen__submit"
            onClick={step === 'done' ? handleReset : handleGenerate}
            disabled={step === 'loading'}
          >
            {step === 'done' ? '다시 생성' : '생성'}
          </button>
        </div>
        <div className="preview-gen__output">
          {step === 'idle' && (
            <span className="preview-gen__placeholder">UI가 여기 생성됩니다</span>
          )}
          {step === 'loading' && <div className="preview-gen__shimmer" aria-label="생성 중" />}
          {step === 'done' && kind === 'button' && (
            <button type="button" className="preview-gen__result-btn" style={{ background: trend.colors[0]?.hex }}>
              {trend.nameKo}
            </button>
          )}
          {step === 'done' && kind === 'card' && (
            <div className="preview-gen__result-card">
              <strong>{trend.nameKo}</strong>
              <span>{trend.tagline}</span>
            </div>
          )}
          {step === 'done' && kind === 'badge' && (
            <span className="preview-gen__result-badge" style={{ borderColor: trend.colors[0]?.hex }}>
              {trend.status.toUpperCase()}
            </span>
          )}
        </div>
      </div>
    </PreviewCanvas>
  );
}
