import type { TrendCategory } from '@/types';

const CATEGORY_LABEL_MAP: Record<Exclude<TrendCategory, 'all'>, string> = {
  color: '컬러',
  typography: '타이포',
  motion: '모션',
  layout: '레이아웃',
  'ai-ux': 'AI UX',
  visual: '비주얼',
  accessibility: '접근성',
  interaction: '인터랙션',
};

export function getCategoryLabel(
  category: Exclude<TrendCategory, 'all'>,
): string {
  return CATEGORY_LABEL_MAP[category];
}

export function getCategoryCssVar(
  category: Exclude<TrendCategory, 'all'>,
): string {
  const map: Record<Exclude<TrendCategory, 'all'>, string> = {
    color: 'var(--color-cat-color)',
    typography: 'var(--color-cat-typo)',
    motion: 'var(--color-cat-motion)',
    layout: 'var(--color-cat-layout)',
    'ai-ux': 'var(--color-cat-ai)',
    visual: 'var(--color-cat-visual)',
    accessibility: 'var(--color-cat-accessibility)',
    interaction: 'var(--color-cat-interaction)',
  };
  return map[category];
}
