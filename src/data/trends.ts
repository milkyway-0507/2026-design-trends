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

export const trendsDataset: TrendsDataset = {
  meta: {
    title: '2026 디자인 트렌드',
    subtitle:
      '올해 주목해야 할 디자인 방향을 한국어로 큐레이션하고 직접 체험하세요.',
    lastUpdated: '2026-07-13',
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
  trends: [...migrateLegacyTrends(), ...newTrends],
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
