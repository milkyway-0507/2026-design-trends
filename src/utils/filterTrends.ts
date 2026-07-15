import type { StatusFilterTab, Trend, TrendCategory } from '@/types';
import { isEffectivelyNew } from '@/utils/monthly';

export function filterTrendsByCategory(
  trends: Trend[],
  category: TrendCategory,
): Trend[] {
  if (category === 'all') return trends;
  return trends.filter((t) => t.categories.includes(category));
}

export function filterTrendsByStatus(
  trends: Trend[],
  statusTab: StatusFilterTab,
): Trend[] {
  switch (statusTab) {
    case 'all':
      return trends;
    case 'new':
      return trends.filter((t) => isEffectivelyNew(t));
    case 'rising':
      return trends.filter((t) => t.status === 'rising');
    case 'peak':
      return trends.filter((t) => t.status === 'peak');
    case 'collection':
      return trends.filter(
        (t) => t.status === 'rising' || t.status === 'peak',
      );
    default:
      return trends;
  }
}

export function filterTrends(
  trends: Trend[],
  category: TrendCategory,
  statusTab: StatusFilterTab,
): Trend[] {
  const byCategory = filterTrendsByCategory(trends, category);
  return filterTrendsByStatus(byCategory, statusTab);
}
