import { trendsDataset } from './trends';
import type {
  CategoryFilter,
  SiteMeta,
  StatusFilter,
  Trend,
  TrendCategory,
  TrendsDataset,
} from '@/types';

const dataset = trendsDataset;

/** 전체 데이터셋 */
export function getDataset(): TrendsDataset {
  return dataset;
}

/** 사이트 메타 정보 */
export function getMeta(): SiteMeta {
  return dataset.meta;
}

/** 카테고리 필터 목록 */
export function getCategories(): CategoryFilter[] {
  return dataset.categories;
}

/** 상태 필터 목록 */
export function getStatusFilters(): StatusFilter[] {
  return dataset.statusFilters;
}

/** 전체 트렌드 목록 */
export function getTrends(): Trend[] {
  return dataset.trends;
}

/** 트렌드 개수 */
export function getTrendCount(): number {
  return dataset.trends.length;
}

/** ID로 단일 트렌드 조회 */
export function getTrendById(id: string): Trend | undefined {
  return dataset.trends.find((t) => t.id === id);
}

/** 카테고리별 트렌드 필터링 */
export function getTrendsByCategory(category: TrendCategory): Trend[] {
  if (category === 'all') {
    return dataset.trends;
  }
  return dataset.trends.filter((t) => t.categories.includes(category));
}

/** 키워드 검색 (Phase 3+ 확장용) */
export function searchTrends(query: string): Trend[] {
  const q = query.trim().toLowerCase();
  if (!q) return dataset.trends;

  return dataset.trends.filter(
    (t) =>
      t.nameKo.toLowerCase().includes(q) ||
      t.nameEn.toLowerCase().includes(q) ||
      t.tagline.toLowerCase().includes(q) ||
      t.keywords.some((k) => k.toLowerCase().includes(q)),
  );
}

export { dataset as trendsDataset };
