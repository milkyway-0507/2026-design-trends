import rawLegacy from './trends.json';
import { newTrends } from './trends-new';
import { STATUS_FILTER_TABS } from '@/types';
import type { Trend, TrendStatus, TrendsDataset } from '@/types';

type LegacyTrend = Omit<
  Trend,
  'publishedAt' | 'updatedAt' | 'isNew' | 'status' | 'month'
>;

const LEGACY_MONTHLY: Record<
  string,
  Pick<Trend, 'publishedAt' | 'updatedAt' | 'isNew' | 'status' | 'month'>
> = {
  'dopamine-colors': {
    publishedAt: '2026-01',
    updatedAt: '2026-07-08',
    isNew: false,
    status: 'peak',
    month: '',
  },
  'kinetic-typography': {
    publishedAt: '2026-01',
    updatedAt: '2026-07-08',
    isNew: false,
    status: 'peak',
    month: '',
  },
  'interactive-3d': {
    publishedAt: '2026-02',
    updatedAt: '2026-07-08',
    isNew: false,
    status: 'peak',
    month: '',
  },
  'ai-copilot-ux': {
    publishedAt: '2026-02',
    updatedAt: '2026-07-08',
    isNew: false,
    status: 'peak',
    month: '',
  },
  'micro-delight': {
    publishedAt: '2026-03',
    updatedAt: '2026-07-08',
    isNew: false,
    status: 'peak',
    month: '',
  },
  'nostalgia-retro': {
    publishedAt: '2026-03',
    updatedAt: '2026-07-08',
    isNew: false,
    status: 'rising',
    month: '',
  },
  glassmorphism: {
    publishedAt: '2026-04',
    updatedAt: '2026-07-08',
    isNew: false,
    status: 'peak',
    month: '',
  },
  'brutalist-clarity': {
    publishedAt: '2026-04',
    updatedAt: '2026-07-08',
    isNew: false,
    status: 'peak',
    month: '',
  },
  'sustainable-accessibility': {
    publishedAt: '2026-05',
    updatedAt: '2026-07-08',
    isNew: false,
    status: 'peak',
    month: '',
  },
  'machine-experience': {
    publishedAt: '2026-05',
    updatedAt: '2026-07-08',
    isNew: false,
    status: 'rising',
    month: '',
  },
};

function migrateLegacyTrends(): Trend[] {
  const raw = rawLegacy as { trends: LegacyTrend[] };
  return raw.trends.map((trend) => {
    const monthly = LEGACY_MONTHLY[trend.id];
    if (!monthly) {
      throw new Error(`Missing monthly metadata for legacy trend: ${trend.id}`);
    }
    return {
      ...trend,
      ...monthly,
      updatedAt: trend.lastUpdated,
    };
  });
}

export const trends: Trend[] = [
  ...migrateLegacyTrends(),
  ...newTrends,


  {
    "id": "generative-ui-adaptive",
    "nameKo": "생성형 적응형 UI",
    "nameEn": "Generative Adaptive UI",
    "tagline": "사용자의 맥락에 따라 실시간으로 변화하는 지능형 인터페이스",
    "description": "사용자의 작업 패턴과 의도를 AI가 분석하여 레이아웃과 기능을 즉석에서 생성합니다. 고정된 템플릿에서 벗어나 각 개인에게 최적화된 맞춤형 화면을 제공합니다.",
    "detailDescription": "생성형 적응형 UI는 사용자의 현재 작업 흐름을 파악하여 필요한 위젯만을 노출하거나 기능을 재배치합니다. 이는 인지 부하를 획기적으로 줄이고, 사용자가 필요한 정보에 도달하는 시간을 단축하는 차세대 인터페이스 표준입니다.",
    "categories": [
      "ai-ux",
      "layout"
    ],
    "difficulty": "advanced",
    "keywords": [
      "AI",
      "적응형 인터페이스",
      "개인화"
    ],
    "colors": [
      {
        "name": "Deep Space",
        "hex": "#0F172A",
        "role": "primary"
      },
      {
        "name": "Electric Indigo",
        "hex": "#6366F1",
        "role": "accent"
      },
      {
        "name": "Soft Slate",
        "hex": "#E2E8F0",
        "role": "secondary"
      },
      {
        "name": "Pure White",
        "hex": "#FFFFFF",
        "role": "background"
      },
      {
        "name": "Cool Gray",
        "hex": "#94A3B8",
        "role": "neutral"
      }
    ],
    "brands": [
      {
        "name": "Vercel AI",
        "context": "사용자 흐름에 최적화된 동적 생성 대시보드",
        "url": "https://vercel.com/ai"
      }
    ],
    "sources": [
      {
        "title": "The Future of Interface Generation",
        "url": "https://uxdesign.cc/gen-ui",
        "publisher": "UX Collective"
      }
    ],
    "previewType": "generative-ui",
    "publishedAt": "2026-07",
    "updatedAt": "2026-07-29",
    "isNew": true,
    "status": "rising",
    "lastUpdated": "2026-07-29",
    "month": "7월 신규"
  },

  {
    "id": "sensory-low-stimulus",
    "nameKo": "감각적 저자극 디자인",
    "nameEn": "Sensory Low-Stimulus Design",
    "tagline": "인지적 피로를 줄이는 차분하고 절제된 디지털 경험",
    "description": "지나친 애니메이션과 알림을 배제하고, 차분한 색감과 여백을 활용하여 사용자의 정신적 에너지를 보호합니다. 디지털 디톡스 트렌드와 결합하여 심리적 안정감을 제공하는 인터페이스입니다.",
    "detailDescription": "많은 디지털 정보에 지친 사용자를 위해, 시각적 노이즈를 최소화하고 부드러운 전환 효과를 사용하는 방식입니다. 낮은 명도의 컬러 팔레트와 읽기 쉬운 타이포그래피를 조합하여 사용자가 긴 시간 머물러도 피로하지 않도록 설계되었습니다.",
    "categories": [
      "visual",
      "accessibility"
    ],
    "difficulty": "medium",
    "keywords": [
      "저자극",
      "디지털 웰빙",
      "안정감"
    ],
    "colors": [
      {
        "name": "Sage Green",
        "hex": "#84A98C",
        "role": "primary"
      },
      {
        "name": "Warm Sand",
        "hex": "#EAE0D5",
        "role": "accent"
      },
      {
        "name": "Muted Stone",
        "hex": "#B5B1AC",
        "role": "secondary"
      },
      {
        "name": "Off White",
        "hex": "#F8F9FA",
        "role": "background"
      },
      {
        "name": "Dark Charcoal",
        "hex": "#2F3E46",
        "role": "neutral"
      }
    ],
    "brands": [
      {
        "name": "Calm Design",
        "context": "저자극 인터페이스 원칙을 적용한 서비스",
        "url": "https://calm.com"
      }
    ],
    "sources": [
      {
        "title": "Design for Digital Peace",
        "url": "https://smashingmagazine.com/low-stimulus",
        "publisher": "Smashing Magazine"
      }
    ],
    "previewType": "low-stimulus",
    "publishedAt": "2026-07",
    "updatedAt": "2026-07-29",
    "isNew": true,
    "status": "rising",
    "lastUpdated": "2026-07-29",
    "month": "7월 신규"
  },
] // END_TRENDS

export const trendsDataset: TrendsDataset = {
  meta: {
    title: '2026 디자인 트렌드',
    subtitle:
      '올해 주목해야 할 디자인 방향을 한국어로 큐레이션하고 직접 체험하세요.',
    lastUpdated: '2026-07-29',
  },
  categories: [
    { id: 'all', label: '전체' },
    { id: 'color', label: '컬러' },
    { id: 'typography', label: '타이포' },
    { id: 'motion', label: '모션' },
    { id: 'layout', label: '레이아웃' },
    { id: 'ai-ux', label: 'AI UX' },
    { id: 'visual', label: '비주얼' },
    { id: 'accessibility', label: '접근성' },
    { id: 'interaction', label: '인터랙션' },
  ],
  statusFilters: STATUS_FILTER_TABS,
  trends,
};

export function getTrendStatusCounts(): Record<TrendStatus, number> {
  return trendsDataset.trends.reduce(
    (acc, trend) => {
      acc[trend.status] += 1;
      return acc;
    },
    { rising: 0, peak: 0, fading: 0 } as Record<TrendStatus, number>,
  );
}
