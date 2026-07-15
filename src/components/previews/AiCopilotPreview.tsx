import type { Trend } from '@/types';
import { PreviewCanvas } from './PreviewCanvas';

export function AiCopilotPreview({ trend }: { trend: Trend }) {
  return (
    <PreviewCanvas
      label="AI 코파일럿 UX: 인라인 AI 제안 시연"
      className="preview preview--copilot"
    >
      <div className="preview-copilot__window">
        <div className="preview-copilot__toolbar">
          <span className="preview-copilot__dot" />
          <span className="preview-copilot__dot" />
          <span className="preview-copilot__dot" />
        </div>
        <div className="preview-copilot__editor">
          <p className="preview-copilot__user-line">
            2026년 디자인 트렌드 리포트를
          </p>
          <p className="preview-copilot__ghost">
            <span className="preview-copilot__cursor" />
            작성해 드릴까요? 키네틱 타이포와 도파민 컬러 섹션을 포함합니다.
          </p>
        </div>
        <div className="preview-copilot__actions" aria-hidden="true">
          <button type="button" tabIndex={-1} className="preview-copilot__btn preview-copilot__btn--accept">
            수락
          </button>
          <button type="button" tabIndex={-1} className="preview-copilot__btn">
            수정
          </button>
          <button type="button" tabIndex={-1} className="preview-copilot__btn">
            거부
          </button>
        </div>
        <div className="preview-copilot__badge" style={{ borderColor: trend.colors[0]?.hex }}>
          AI Copilot
        </div>
      </div>
    </PreviewCanvas>
  );
}
