import type { Trend } from '@/types';
import { PreviewCanvas } from './PreviewCanvas';

export function AiReadabilityPreview({ trend }: { trend: Trend }) {
  return (
    <PreviewCanvas
      label="AI 가독성: 시맨틱 HTML 구조 파싱 시연"
      className="preview preview--ai-read"
    >
      <div className="preview-airead__panel">
        <div className="preview-airead__html">
          <span className="preview-airead__tag">&lt;article&gt;</span>
          <span className="preview-airead__tag preview-airead__tag--indent">&lt;section&gt;</span>
          <span className="preview-airead__tag preview-airead__tag--indent2">&lt;h1&gt;{trend.nameKo}&lt;/h1&gt;</span>
          <span className="preview-airead__tag preview-airead__tag--indent2">&lt;p&gt;…&lt;/p&gt;</span>
          <span className="preview-airead__tag preview-airead__tag--indent">&lt;/section&gt;</span>
          <span className="preview-airead__tag">&lt;/article&gt;</span>
        </div>
        <div className="preview-airead__flow" aria-hidden="true">
          <span className="preview-airead__arrow">→</span>
          <span className="preview-airead__arrow preview-airead__arrow--2">→</span>
          <span className="preview-airead__arrow preview-airead__arrow--3">→</span>
        </div>
        <pre className="preview-airead__json">{`{
  "title": "${trend.nameKo}",
  "type": "article",
  "sections": 1
}`}</pre>
      </div>
    </PreviewCanvas>
  );
}
