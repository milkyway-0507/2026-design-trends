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

  {
    "id": "generative-ui",
    "nameKo": "생성형 인터페이스",
    "nameEn": "Generative UI",
    "tagline": "사용자 맥락에 따라 실시간으로 변화하는 능동적 레이아웃",
    "description": "고정된 컴포넌트가 아닌, LLM 기반의 실시간 UI 구성 방식입니다. 사용자의 의도에 맞춰 인터페이스가 즉각적으로 생성되고 최적화됩니다.",
    "detailDescription": "전통적인 사전 정의된 UI에서 벗어나, 사용자가 입력하는 데이터와 맥락에 따라 컴포넌트를 즉석에서 조립하여 보여주는 방식입니다. 이는 개인화된 워크플로우를 극대화하며 불필요한 인지 부하를 획기적으로 줄여줍니다.",
    "categories": [
      "ai-ux",
      "layout"
    ],
    "difficulty": "advanced",
    "keywords": [
      "LLM",
      "Adaptive UI",
      "Dynamic Composition"
    ],
    "colors": [
      {
        "name": "AI Blue",
        "hex": "#2563EB",
        "role": "primary"
      },
      {
        "name": "Glow White",
        "hex": "#F8FAFC",
        "role": "accent"
      },
      {
        "name": "Neural Slate",
        "hex": "#64748B",
        "role": "secondary"
      },
      {
        "name": "Deep Space",
        "hex": "#0F172A",
        "role": "background"
      },
      {
        "name": "Soft Gray",
        "hex": "#E2E8F0",
        "role": "neutral"
      }
    ],
    "brands": [
      {
        "name": "Vercel AI SDK",
        "context": "컴포넌트 단위의 AI 인터페이스 라이브러리 제공",
        "url": "https://sdk.vercel.ai"
      }
    ],
    "sources": [
      {
        "title": "The Future of Generative UI",
        "url": "https://design.com/gen-ui",
        "publisher": "UX Trends 2026"
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
    "id": "low-stimulus",
    "nameKo": "저자극 인터페이스",
    "nameEn": "Low Stimulus",
    "tagline": "디지털 피로도를 줄이는 평온한 정보 디자인",
    "description": "화려한 애니메이션과 강렬한 색상을 배제하고, 차분한 톤과 여백을 활용한 휴식형 인터페이스입니다. 사용자의 정신적 에너지를 보존하는 것에 최우선 가치를 둡니다.",
    "detailDescription": "지나친 알림과 복잡한 정보 계층 구조를 탈피하여, 고요하고 절제된 디자인 언어를 구축합니다. 미세한 촉각적 반응과 은은한 대비를 통해 편안한 사용자 경험을 제공하며 심리적 안정을 도모합니다.",
    "categories": [
      "visual",
      "accessibility"
    ],
    "difficulty": "medium",
    "keywords": [
      "Calm Tech",
      "Minimalism",
      "Well-being"
    ],
    "colors": [
      {
        "name": "Sage Green",
        "hex": "#A7B8A9",
        "role": "primary"
      },
      {
        "name": "Warm Sand",
        "hex": "#F4EFEA",
        "role": "accent"
      },
      {
        "name": "Muted Stone",
        "hex": "#D1D5DB",
        "role": "secondary"
      },
      {
        "name": "Soft Mist",
        "hex": "#F9FAFB",
        "role": "background"
      },
      {
        "name": "Charcoal Soft",
        "hex": "#374151",
        "role": "neutral"
      }
    ],
    "brands": [
      {
        "name": "Calm",
        "context": "저자극 디자인의 선구적인 앱 사례",
        "url": "https://www.calm.com"
      }
    ],
    "sources": [
      {
        "title": "Design for Mental Ease",
        "url": "https://design.com/low-stim",
        "publisher": "UX Journal"
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

  {
    "id": "ambient-ai-interface",
    "nameKo": "앰비언트 AI 인터페이스",
    "nameEn": "Ambient AI Interface",
    "tagline": "사용자의 맥락에 은밀하게 녹아드는 지능형 UI",
    "description": "사용자가 직접 명령을 내리지 않아도 환경과 문맥을 파악해 선제적으로 정보를 제시합니다. 가시적인 버튼보다는 부드러운 상태 변화 중심의 인터페이스를 지향합니다.",
    "detailDescription": "전통적인 대화형 UI에서 벗어나, 운영체제나 앱이 사용자 의도를 사전에 감지하고 UI 요소가 실시간으로 재구성되는 개념입니다. 이는 인지 부하를 획기적으로 줄이며, 기술이 도구가 아닌 환경처럼 느껴지게 만듭니다.",
    "categories": [
      "ai-ux",
      "interaction"
    ],
    "difficulty": "advanced",
    "keywords": [
      "앰비언트",
      "상황인지",
      "비가시적UI"
    ],
    "colors": [
      {
        "name": "Deep Ocean",
        "hex": "#0A192F",
        "role": "primary"
      },
      {
        "name": "Glow Blue",
        "hex": "#64FFDA",
        "role": "accent"
      },
      {
        "name": "Mist Grey",
        "hex": "#CCD6F6",
        "role": "secondary"
      },
      {
        "name": "Night Sky",
        "hex": "#020C1B",
        "role": "background"
      },
      {
        "name": "Slate",
        "hex": "#8892B0",
        "role": "neutral"
      }
    ],
    "brands": [
      {
        "name": "Apple AI",
        "context": "주변 상황 기반 인텔리전스 구현",
        "url": "https://apple.com"
      }
    ],
    "sources": [
      {
        "title": "The Future of Invisible UI",
        "url": "https://uxdesign.cc/future-invisible",
        "publisher": "UX Design Collective"
      }
    ],
    "previewType": "ambient-ai",
    "publishedAt": "2026-08",
    "updatedAt": "2026-08-05",
    "isNew": true,
    "status": "rising",
    "lastUpdated": "2026-08-05",
    "month": "8월 신규"
  },

  {
    "id": "liquid-glass-morphism",
    "nameKo": "리퀴드 글래스모피즘",
    "nameEn": "Liquid Glassmorphism",
    "tagline": "흐르는 듯한 투명도와 액체적 질감의 조화",
    "description": "기존의 정적인 글래스모피즘을 넘어, 액체가 흐르는 듯한 유동적인 왜곡 효과와 동적인 조명 반사를 결합했습니다. 시각적 깊이감과 미래지향적인 세련미를 동시에 제공합니다.",
    "detailDescription": "스크롤이나 마우스 움직임에 반응하여 굴절률이 실시간으로 변하는 글래스 레이어를 사용합니다. 이는 디지털 공간에 유기적인 생명력을 불어넣으며, 몰입감 넘치는 UI 레이아웃을 구축하는 데 효과적입니다.",
    "categories": [
      "visual",
      "motion"
    ],
    "difficulty": "medium",
    "keywords": [
      "글래스모피즘",
      "유동적질감",
      "현대적UI"
    ],
    "colors": [
      {
        "name": "Vivid Purple",
        "hex": "#8B5CF6",
        "role": "primary"
      },
      {
        "name": "Neon Pink",
        "hex": "#EC4899",
        "role": "accent"
      },
      {
        "name": "Crystal White",
        "hex": "#FFFFFF",
        "role": "secondary"
      },
      {
        "name": "Dark Velvet",
        "hex": "#1F2937",
        "role": "background"
      },
      {
        "name": "Cloud Grey",
        "hex": "#F3F4F6",
        "role": "neutral"
      }
    ],
    "brands": [
      {
        "name": "Fluid Labs",
        "context": "동적 글래스 컴포넌트 라이브러리",
        "url": "https://fluidlabs.design"
      }
    ],
    "sources": [
      {
        "title": "Trends in UI Materiality",
        "url": "https://dribbble.com/trends",
        "publisher": "Dribbble"
      }
    ],
    "previewType": "liquid-glass",
    "publishedAt": "2026-08",
    "updatedAt": "2026-08-05",
    "isNew": true,
    "status": "rising",
    "lastUpdated": "2026-08-05",
    "month": "8월 신규"
  },

  {
    "id": "ambient-ai-interface",
    "nameKo": "앰비언트 AI 인터페이스",
    "nameEn": "Ambient AI Interface",
    "tagline": "인터페이스의 경계를 넘어 환경 속에 자연스럽게 녹아드는 AI 경험",
    "description": "사용자가 별도의 명령을 입력하지 않아도 맥락을 파악해 선제적으로 반응하는 디자인입니다. 화면 중심의 UI에서 벗어나 사용자 주변의 환경과 상태를 데이터로 활용합니다.",
    "detailDescription": "기존의 앱 중심 인터페이스가 아닌, 사용자의 상황을 인지하고 AI가 보이지 않는 곳에서 작업을 수행하는 보이지 않는 UI(Invisible UI)를 지향합니다. 노티피케이션이나 복잡한 대시보드 대신 사용자의 의도를 먼저 읽고 필요한 시점에 필요한 정보를 최소한으로 제시하는 적응형 인터페이스 설계를 특징으로 합니다.",
    "categories": [
      "ai-ux",
      "interaction"
    ],
    "difficulty": "advanced",
    "keywords": [
      "앰비언트",
      "상황 인지",
      "보이지 않는 UI"
    ],
    "colors": [
      {
        "name": "Soft Fog",
        "hex": "#F4F7F6",
        "role": "primary"
      },
      {
        "name": "Ghost Blue",
        "hex": "#A8C3D0",
        "role": "accent"
      },
      {
        "name": "Mist Grey",
        "hex": "#D1D5DB",
        "role": "secondary"
      },
      {
        "name": "Pure Cloud",
        "hex": "#FFFFFF",
        "role": "background"
      },
      {
        "name": "Slate",
        "hex": "#374151",
        "role": "neutral"
      }
    ],
    "brands": [
      {
        "name": "NeuralPath",
        "context": "주변 상황 자동 최적화 시스템",
        "url": "https://neuralpath.ai"
      }
    ],
    "sources": [
      {
        "title": "The Era of Ambient Computing",
        "url": "https://design-trend.com/ambient-ai",
        "publisher": "UI/UX Insight"
      }
    ],
    "previewType": "ambient-ai",
    "publishedAt": "2026-08",
    "updatedAt": "2026-08-10",
    "isNew": true,
    "status": "rising",
    "lastUpdated": "2026-08-10",
    "month": "8월 신규"
  },

  {
    "id": "liquid-bento-grid",
    "nameKo": "리퀴드 벤토 그리드",
    "nameEn": "Liquid Bento Grid",
    "tagline": "고정된 틀을 깨고 유동적으로 변화하는 입체적 벤토 그리드",
    "description": "기존의 정적인 벤토 박스 레이아웃을 진화시켜 사용자 반응에 따라 크기와 위치가 유연하게 변하는 레이아웃입니다. 공간의 효율성과 시각적 즐거움을 동시에 충족합니다.",
    "detailDescription": "데이터의 우선순위에 따라 레이아웃의 구획이 실시간으로 재배치되는 적응형 그리드 시스템입니다. 단순한 격자 구조를 넘어 유체처럼 흐르는 애니메이션 전환과 깊이감을 활용해 정보의 계층 구조를 직관적으로 전달하는 것이 핵심입니다.",
    "categories": [
      "layout",
      "motion"
    ],
    "difficulty": "medium",
    "keywords": [
      "레이아웃",
      "벤토 그리드",
      "반응형 레이아웃"
    ],
    "colors": [
      {
        "name": "Electric Violet",
        "hex": "#8B5CF6",
        "role": "primary"
      },
      {
        "name": "Neon Cyan",
        "hex": "#22D3EE",
        "role": "accent"
      },
      {
        "name": "Soft Indigo",
        "hex": "#C7D2FE",
        "role": "secondary"
      },
      {
        "name": "Void Black",
        "hex": "#0F172A",
        "role": "background"
      },
      {
        "name": "Cool Steel",
        "hex": "#94A3B8",
        "role": "neutral"
      }
    ],
    "brands": [
      {
        "name": "FluxBox",
        "context": "동적 레이아웃 라이브러리 제공",
        "url": "https://fluxbox-ui.dev"
      }
    ],
    "sources": [
      {
        "title": "Fluid Layouts in 2026",
        "url": "https://design-trend.com/liquid-bento",
        "publisher": "Design Weekly"
      }
    ],
    "previewType": "liquid-glass",
    "publishedAt": "2026-08",
    "updatedAt": "2026-08-10",
    "isNew": true,
    "status": "rising",
    "lastUpdated": "2026-08-10",
    "month": "8월 신규"
  },
] // END_TRENDS

export const trendsDataset: TrendsDataset = {
  meta: {
    title: '2026 디자인 트렌드',
    subtitle:
      '올해 주목해야 할 디자인 방향을 한국어로 큐레이션하고 직접 체험하세요.',
    lastUpdated: '2026-08-10',
  },
  categories: [
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
