/** 카테고리 필터 ID (PRD FR-2) */
export type TrendCategory =
  | 'all'
  | 'color'
  | 'typography'
  | 'motion'
  | 'layout'
  | 'ai-ux'
  | 'visual'
  | 'accessibility'
  | 'interaction';

/** 트렌드 적용 난이도 (참고용 뱃지) */
export type TrendDifficulty = 'easy' | 'medium' | 'advanced';

/** 트렌드 생명주기 상태 */
export type TrendStatus = 'rising' | 'peak' | 'fading';

/** 월간·상태 필터 탭 */
export type StatusFilterTab =
  | 'all'
  | 'new'
  | 'rising'
  | 'peak'
  | 'collection';

/** 라이브 프리뷰 컴포넌트 식별자 */
export type PreviewType =
  | 'dopamine-gradient'
  | 'kinetic-text'
  | 'css-3d'
  | 'ai-copilot'
  | 'micro-delight'
  | 'retro'
  | 'glass'
  | 'brutalist'
  | 'accessibility'
  | 'mx-agent';

/** 팔레트 색상 역할 */
export type ColorRole =
  | 'primary'
  | 'secondary'
  | 'accent'
  | 'background'
  | 'neutral';

/** 트렌드 대표 색상 */
export interface TrendColor {
  name: string;
  hex: string;
  role: ColorRole;
}

/** 브랜드 적용 사례 */
export interface BrandExample {
  name: string;
  context: string;
  url?: string;
}

/** 참고 출처 아티클 */
export interface TrendSource {
  title: string;
  url: string;
  publisher: string;
}

/** 단일 트렌드 */
export interface Trend {
  id: string;
  nameKo: string;
  nameEn: string;
  tagline: string;
  description: string;
  detailDescription: string;
  categories: Exclude<TrendCategory, 'all'>[];
  difficulty: TrendDifficulty;
  keywords: string[];
  colors: TrendColor[];
  brands: BrandExample[];
  sources: TrendSource[];
  previewType: PreviewType;
  /** @deprecated updatedAt 사용 권장 */
  lastUpdated: string;
  /** "2026-07" — 월별 필터용 */
  publishedAt: string;
  /** "2026-07-13" — 카드 하단 표시 */
  updatedAt: string;
  /** true면 NEW 뱃지 (2개월 후 훅에서 자동 해제) */
  isNew: boolean;
  /** rising=부상중, peak=정점, fading=저물어감 */
  status: TrendStatus;
  /** "7월 신규" 등 표시용 레이블 */
  month: string;
}

/** 카테고리 필터 탭 */
export interface CategoryFilter {
  id: TrendCategory;
  label: string;
}

/** 상태 필터 탭 */
export interface StatusFilter {
  id: StatusFilterTab;
  label: string;
}

/** 사이트 메타 정보 */
export interface SiteMeta {
  title: string;
  subtitle: string;
  lastUpdated: string;
}

/** trends 데이터 루트 스키마 */
export interface TrendsDataset {
  meta: SiteMeta;
  categories: CategoryFilter[];
  statusFilters: StatusFilter[];
  trends: Trend[];
}

export const DIFFICULTY_LABELS: Record<TrendDifficulty, string> = {
  easy: '쉬움',
  medium: '보통',
  advanced: '고급',
};

export const STATUS_LABELS: Record<TrendStatus, string> = {
  rising: '부상중',
  peak: '정점',
  fading: '저물어감',
};

export const STATUS_FILTER_TABS: StatusFilter[] = [
  { id: 'all', label: '전체' },
  { id: 'new', label: '🔥 이번달 NEW' },
  { id: 'rising', label: '📈 Rising' },
  { id: 'peak', label: '⚡ Peak' },
  { id: 'collection', label: '모아보기' },
];
