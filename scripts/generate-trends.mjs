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
const LLM_MODEL = process.env.STUDY_LLM_MODEL ?? 'gemini-3.1-flash-lite';

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

function extractResponseText(data) {
  if (typeof data === 'string') return data;

  const direct =
    data.text ??
    data.content ??
    data.output ??
    data.result ??
    data.response ??
    data.generatedText;

  if (typeof direct === 'string') return direct;

  if (data.data && typeof data.data === 'object') {
    return extractResponseText(data.data);
  }

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
    `LLM 응답 형식을 파싱할 수 없습니다: ${JSON.stringify(data).slice(0, 500)}`,
  );
}

async function callLlmProxy(prompt) {
  const token = process.env.STUDY_LLM_API_TOKEN?.trim();
  if (!token) {
    throw new Error(
      'STUDY_LLM_API_TOKEN 환경 변수가 설정되지 않았습니다. GitHub Secrets를 확인하세요.',
    );
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
      messages: [{ role: 'user', content: prompt }],
      maxOutputTokens: 4096,
    }),
  });

  const bodyText = await response.text();

  if (!response.ok) {
    throw new Error(`LLM Proxy 오류 (${response.status}): ${bodyText}`);
  }

  let data;
  try {
    data = JSON.parse(bodyText);
  } catch {
    return bodyText;
  }

  return extractResponseText(data);
}

function normalizeTrend(trend, { publishedAt, updatedAt, monthLabel }) {
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

async function main() {
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
  console.log(`기존 트렌드 ${uniqueIds.length}개 확인`);

  const today = new Date();
  const publishedAt = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}`;
  const updatedAt = today.toISOString().split('T')[0];
  const monthLabel = `${today.getMonth() + 1}월 신규`;

  const prompt = `
너는 2026년 최신 UI/UX 디자인 트렌드 전문 큐레이터야.
반드시 JSON 배열만 반환해. 마크다운 코드블록은 사용하지 마.
트렌드 객체 2개만 반환해.

이미 있는 ID (중복 금지): ${uniqueIds.join(', ')}

각 객체 형식:
{
  "id": "kebab-case-unique-id",
  "nameKo": "한국어 트렌드명",
  "nameEn": "English Trend Name",
  "tagline": "한 줄 설명",
  "description": "2-3문장 설명",
  "detailDescription": "상세 설명",
  "categories": ["layout"],
  "difficulty": "easy",
  "keywords": ["키워드1", "키워드2"],
  "colors": [
    { "name": "색상명", "hex": "#RRGGBB", "role": "primary" },
    { "name": "색상명", "hex": "#RRGGBB", "role": "accent" },
    { "name": "색상명", "hex": "#RRGGBB", "role": "secondary" },
    { "name": "색상명", "hex": "#RRGGBB", "role": "background" },
    { "name": "색상명", "hex": "#RRGGBB", "role": "neutral" }
  ],
  "brands": [
    { "name": "브랜드명", "context": "설명", "url": "https://..." }
  ],
  "sources": [
    { "title": "아티클", "url": "https://...", "publisher": "출처" }
  ],
  "previewType": "glass",
  "publishedAt": "${publishedAt}",
  "updatedAt": "${updatedAt}",
  "isNew": true,
  "status": "rising"
}

categories: color | typography | motion | layout | ai-ux | visual | accessibility | interaction
previewType: ${PREVIEW_TYPES.join(' | ')}
`.trim();

  const rawText = await callLlmProxy(prompt);

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
    console.error('원본 응답:', rawText.slice(0, 800));
    process.exit(1);
  }

  const filtered = newTrends.filter((t) => {
    if (uniqueIds.includes(t.id)) {
      console.log(`⚠️ 중복 ID 스킵: ${t.id}`);
      return false;
    }
    normalizeTrend(t, { publishedAt, updatedAt, monthLabel });
    return true;
  });

  if (filtered.length === 0) {
    console.log('추가할 신규 트렌드 없음 — 스킵');
    return;
  }

  const newEntries = filtered
    .map((t) => `  ${JSON.stringify(t, null, 2).split('\n').join('\n  ')},`)
    .join('\n\n');

  const insertMarker = '] // END_TRENDS';
  if (!currentContent.includes(insertMarker)) {
    throw new Error('END_TRENDS 마커를 찾을 수 없습니다. trends.ts를 확인하세요.');
  }

  let updatedContent = currentContent.replace(
    insertMarker,
    `\n${newEntries}\n] // END_TRENDS`,
  );

  updatedContent = updatedContent.replace(
    /lastUpdated:\s*'[^']+'/,
    `lastUpdated: '${updatedAt}'`,
  );

  fs.writeFileSync(trendsPath, updatedContent, 'utf-8');
  console.log(`✅ trends.ts 업데이트 완료 — ${filtered.length}개 추가`);

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
}

main().catch((err) => {
  console.error('❌ 트렌드 생성 실패:', err.message);
  process.exit(1);
});
