import { describe, expect, it } from 'vitest';
import { getTrends } from '@/data';
import {
  filterTrends,
  filterTrendsByCategory,
  filterTrendsByStatus,
} from './filterTrends';

describe('filterTrendsByCategory', () => {
  const trends = getTrends();

  it('returns all 24 trends when category is "all"', () => {
    expect(filterTrendsByCategory(trends, 'all')).toHaveLength(24);
  });

  it('filters motion category only (PRD AC #2)', () => {
    const result = filterTrendsByCategory(trends, 'motion');
    expect(result.every((t) => t.categories.includes('motion'))).toBe(true);
    expect(result.map((t) => t.id)).toEqual(
      expect.arrayContaining([
        'kinetic-typography',
        'interactive-3d',
        'micro-delight',
        'scroll-storytelling',
      ]),
    );
  });

  it('filters interaction category', () => {
    const result = filterTrendsByCategory(trends, 'interaction');
    expect(result).toHaveLength(3);
    expect(result.map((t) => t.id)).toEqual([
      'sound-design-ux',
      'gamification-ux',
      'multimodal-interaction',
    ]);
  });

  it('returns empty array when no matches', () => {
    expect(filterTrendsByCategory([], 'color')).toEqual([]);
  });
});

describe('filterTrendsByStatus', () => {
  const trends = getTrends();

  it('filters new trends published this month', () => {
    const result = filterTrendsByStatus(trends, 'new');
    expect(result.length).toBeGreaterThan(0);
    expect(result.every((t) => t.isNew)).toBe(true);
  });

  it('filters rising status', () => {
    const result = filterTrendsByStatus(trends, 'rising');
    expect(result.every((t) => t.status === 'rising')).toBe(true);
  });

  it('filters peak status', () => {
    const result = filterTrendsByStatus(trends, 'peak');
    expect(result.every((t) => t.status === 'peak')).toBe(true);
  });

  it('collection includes rising and peak only', () => {
    const result = filterTrendsByStatus(trends, 'collection');
    expect(
      result.every((t) => t.status === 'rising' || t.status === 'peak'),
    ).toBe(true);
  });
});

describe('filterTrends', () => {
  const trends = getTrends();

  it('combines category and status filters', () => {
    const result = filterTrends(trends, 'ai-ux', 'rising');
    expect(result.every((t) => t.categories.includes('ai-ux'))).toBe(true);
    expect(result.every((t) => t.status === 'rising')).toBe(true);
  });
});
