// scripts/generate-trends.mjs
// 매주 실행되는 트렌드 자동 생성 스크립트
// Vibe LLM Proxy (Gemini) 사용

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const LLM_PROXY_URL =
  process.env.STUDY_LLM_PROXY_URL ??
  'https://vibe-llm-proxy-17280846291.asia-northeast3.run.app';
const LLM_MODEL = process.env.STUDY_LLM_MODEL ?? 'gemini-1.5-flash-lite';

const PREVIEW_TYPES = [
  'dopamine-gradient',
  'kinetic-text',
  'css-3d',
  'ai-copilot',
  'micro-delight',
  'retro',
  'glass',
  'brutalist',
  'accessibility',
  'mx-agent',
  'liquid-glass',
  'bento-grid',
  'cinematic-dark',
  'ambient-ai',
  'low-stimulus',
  'motion-identity',
  'generative-ui',
  'expressive-typography',
  'contextual-nav',
  'ai-readability',
  'functional-minimalism',
  'mature-dark-mode',
  'predictive-ux',
  'digital-texture',
];

// ── 1. 현재 trends.ts 읽기 ──────────────────────────────────
const trendsPath = path.join(__dirname, '../src/data/trends.ts');
const trendsNewPath = path.join(__dirname, '../src/data/trends-new.ts');
const trendsJsonPath = path.join(__dirname, '../src/data/trends.json');

const currentContent = fs.readFileSync(trendsPath, 'utf-8');
const trendsNewContent = fs.readFileSync(trendsNewPath, 'utf-8');
const legacyJson = fs.readFileSync(trendsJsonPath, 'utf-8');

const existingIds = [
  ...currentContent.matchAll(/id:\s*['"]([^'"]+)['"]/g),
  ...trendsNewContent.matchAll(/id:\s*['"]([^'"]+)['"]/g),
  ...legacyJson.matchAll(/"id"\s*:\s*"([^"]+)"/g),
].map((m) => m[1]);

const uniqueIds = [...new Set(existingIds)];

console.log(`기존 트렌드 ${uniqueIds.length}개 확인:`, uniqueIds);

const today = new Date();
const publishedAt = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}`;
const updatedAt = today.toISOString().split('T')[0];
const monthLabel = `${today.getMonth() + 1}월 신규`;

// ── 2. LLM Proxy로 트렌드 조사 + 작성 ────────────────────────
const SYSTEM_PROMPT = `
너는 2026년 최신 UI/UX 디자인 트렌드 전문 큐레이터야.
매주 월요일마다 새로운 디자인 트렌드를 조사해서 한국어로 정리한다.

반드시 JSON 형식으로만 응답해. 마크다운 코드블록(\`\`\`)이나 다른 텍스트는 절대 포함하지 마.
배열 안에 트렌드 객체 2-3개만 반환해.
`;

const USER_PROMPT = `
이번 주(${updatedAt} 기준) 새롭게 주목받는 UI/UX 디자인 트렌드 2-3개를 찾아서 작성해줘.

아래 ID는 이미 있으니 중복하지 마:
${uniqueIds.join(', ')}

각 트렌드는 아래 JSON 형식을 정확히 따라야 해:
{
  "id": "kebab-case-unique-id",
  "nameKo": "한국어 트렌드명",
  "nameEn": "English Trend Name",
  "tagline": "한 줄 설명 (40자 이내)",
  "description": "2-3문장 설명 (한국어, 100자 내외)",
  "detailDescription": "상세 설명 (한국어, 200자 내외, 실무 적용 팁 포함)",
  "categories": ["category1"],
  "difficulty": "easy | medium | advanced",
  "keywords": ["키워드1", "키워드2", "키워드3"],
  "colors": [
    { "name": "색상명", "hex": "#XXXXXX", "role": "primary" },
    { "name": "색상명", "hex": "#XXXXXX", "role": "accent" },
    { "name": "색상명", "hex": "#XXXXXX", "role": "secondary" },
    { "name": "색상명", "hex": "#XXXXXX", "role": "background" },
    { "name": "색상명", "hex": "#XXXXXX", "role": "neutral" }
  ],
  "brands": [
    { "name": "브랜드명", "context": "이 트렌드를 어떻게 활용하는지 설명", "url": "https://..." },
    { "name": "브랜드명", "context": "설명", "url": "https://..." }
  ],
  "sources": [
    { "title": "아티클 제목", "url": "https://...", "publisher": "출처명" }
  ],
  "previewType": "기존 previewType 중 가장 유사한 것",
  "publishedAt": "${publishedAt}",
  "updatedAt": "${updatedAt}",
  "isNew": true,
  "status": "rising | peak | fading"
}

categories에 사용 가능한 값:
"color" | "typography" | "motion" | "layout" | "ai-ux" | "visual" | "accessibility" | "interaction"

previewType에 사용 가능한 값:
${PREVIEW_TYPES.join(' | ')}

실제로 2026년에 주목받고 있는 트렌드여야 해.
최신 디자인 커뮤니티(Awwwards, Dribbble, Figma Community, UX Collective)에서
실제로 화제가 되는 트렌드를 기반으로 작성해.
`;

function extractResponseText(data) {
  if (typeof data === 'string') return data;
  if (typeof data.text === 'string') return data.text;
  if (typeof data.content === 'string') return data.content;
  if (typeof data.output === 'string') return data.output;
  if (typeof data.result === 'string') return data.result;
  if (typeof data.message === 'string') return data.message;

  const choice = data.choices?.[0];
  if (typeof choice?.message?.content === 'string') return choice.message.content;
  if (typeof choice?.text === 'string') return choice.text;

  const candidate = data.candidates?.[0];
  const parts = candidate?.content?.parts;
  if (Array.isArray(parts)) {
    const text = parts.map((p) => p.text ?? '').join('');
    if (text) return text;
  }

  throw new Error(
    `LLM 응답 형식을 파싱할 수 없습니다: ${JSON.stringify(data).slice(0, 300)}`,
  );
}

async function callLlmProxy() {
  const token = process.env.STUDY_LLM_API_TOKEN;
  if (!token) {
    throw new Error('STUDY_LLM_API_TOKEN 환경 변수가 설정되지 않았습니다.');
  }

  console.log(`LLM Proxy 호출 중… (${LLM_MODEL})`);

  const response = await fetch(`${LLM_PROXY_URL}/api/v1/generate`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      provider: 'google',
      model: LLM_MODEL,
      messages: [
        {
          role: 'user',
          content: `${SYSTEM_PROMPT.trim()}\n\n${USER_PROMPT.trim()}`,
        },
      ],
      maxOutputTokens: 4096,
    }),
  });

  if (!response.ok) {
    const err = await response.text();
    throw new Error(`LLM Proxy 오류 (${response.status}): ${err}`);
  }

  const data = await response.json();
  return extractResponseText(data);
}

const rawText = await callLlmProxy();

// ── 3. 응답 파싱 ────────────────────────────────────────────
let newTrends = [];

try {
  const text = rawText.replace(/```json/g, '').replace(/```/g, '').trim();
  const parsed = JSON.parse(text);
  newTrends = Array.isArray(parsed) ? parsed : [parsed];
  console.log(
    `✅ 신규 트렌드 ${newTrends.length}개 생성:`,
    newTrends.map((t) => t.nameKo),
  );
} catch (e) {
  console.error('JSON 파싱 실패:', e.message);
  console.error('원본 응답:', rawText.slice(0, 500));
}

if (newTrends.length === 0) {
  console.log('생성된 트렌드 없음 — 스킵');
  process.exit(0);
}

function normalizeTrend(trend) {
  if (!PREVIEW_TYPES.includes(trend.previewType)) {
    console.log(`⚠️ previewType 보정: ${trend.previewType} → glass`);
    trend.previewType = 'glass';
  }
  trend.publishedAt = trend.publishedAt ?? publishedAt;
  trend.updatedAt = trend.updatedAt ?? updatedAt;
  trend.lastUpdated = trend.updatedAt;
  trend.isNew = true;
  trend.month = monthLabel;
  if (!['rising', 'peak', 'fading'].includes(trend.status)) {
    trend.status = 'rising';
  }
  return trend;
}

// ── 4. 중복 제거 ────────────────────────────────────────────
const filtered = newTrends.filter((t) => {
  if (uniqueIds.includes(t.id)) {
    console.log(`⚠️ 중복 ID 스킵: ${t.id}`);
    return false;
  }
  normalizeTrend(t);
  return true;
});

if (filtered.length === 0) {
  console.log('모두 중복 — 스킵');
  process.exit(0);
}

// ── 5. trends.ts 배열에 추가 ────────────────────────────────
const newEntries = filtered
  .map((t) => `  ${JSON.stringify(t, null, 2).split('\n').join('\n  ')},`)
  .join('\n\n');

const insertMarker = '] // END_TRENDS';

let updatedContent;
if (currentContent.includes(insertMarker)) {
  updatedContent = currentContent.replace(
    insertMarker,
    `\n${newEntries}\n] // END_TRENDS`,
  );
} else {
  console.error('END_TRENDS 마커를 찾을 수 없습니다. trends.ts를 확인하세요.');
  process.exit(1);
}

updatedContent = updatedContent.replace(
  /lastUpdated:\s*'[^']+'/,
  `lastUpdated: '${updatedAt}'`,
);

fs.writeFileSync(trendsPath, updatedContent, 'utf-8');
console.log(`✅ trends.ts 업데이트 완료 — ${filtered.length}개 추가`);
console.log('✅ trends.ts meta.lastUpdated 갱신');

// ── 6. 업데이트 로그 기록 ────────────────────────────────────
const logPath = path.join(__dirname, '../TREND_UPDATE_LOG.md');
const logEntry = `
## ${updatedAt} 업데이트
- 추가된 트렌드: ${filtered.map((t) => `**${t.nameKo}** (${t.id})`).join(', ')}
- 총 트렌드 수: ${uniqueIds.length + filtered.length}개
`;

const existingLog = fs.existsSync(logPath)
  ? fs.readFileSync(logPath, 'utf-8')
  : '# 트렌드 업데이트 로그\n';

fs.writeFileSync(logPath, existingLog + logEntry, 'utf-8');
console.log('✅ 로그 기록 완료');
