import { describe, expect, it } from 'vitest';
import {
  getCategories,
  getMeta,
  getStatusFilters,
  getTrendById,
  getTrendCount,
  getTrends,
  getTrendsByCategory,
  searchTrends,
} from '@/data';

describe('data layer', () => {
  it('returns 24 trends', () => {
    expect(getTrendCount()).toBe(24);
  });

  it('returns meta with title', () => {
    expect(getMeta().title).toBe('2026 디자인 트렌드');
  });

  it('returns 9 category filters including "all"', () => {
    expect(getCategories()).toHaveLength(9);
  });

  it('returns 5 status filters', () => {
    expect(getStatusFilters()).toHaveLength(5);
    expect(getStatusFilters().map((f) => f.id)).toEqual([
      'all',
      'new',
      'rising',
      'peak',
      'collection',
    ]);
  });

  it('finds trend by id', () => {
    const trend = getTrendById('dopamine-colors');
    expect(trend?.nameKo).toBe('도파민 컬러');
    expect(trend?.colors).toHaveLength(5);
    expect(trend?.brands).toHaveLength(3);
  });

  it('filters by category via data layer', () => {
    const aiTrends = getTrendsByCategory('ai-ux');
    expect(aiTrends.length).toBeGreaterThanOrEqual(2);
    expect(aiTrends.some((t) => t.id === 'ai-copilot-ux')).toBe(true);
    expect(aiTrends.some((t) => t.id === 'machine-experience')).toBe(true);
  });

  it('searches by keyword', () => {
    const results = searchTrends('WCAG');
    expect(results.some((t) => t.id === 'sustainable-accessibility')).toBe(
      true,
    );
  });

  it('each trend has required fields including monthly metadata', () => {
    for (const trend of getTrends()) {
      expect(trend.tagline.length).toBeGreaterThan(0);
      expect(trend.description.length).toBeGreaterThan(50);
      expect(trend.detailDescription.length).toBeGreaterThan(50);
      expect(trend.keywords.length).toBeGreaterThanOrEqual(3);
      expect(trend.colors.length).toBeGreaterThanOrEqual(3);
      expect(trend.brands.length).toBeGreaterThanOrEqual(2);
      expect(trend.sources.length).toBeGreaterThanOrEqual(1);
      expect(trend.publishedAt).toMatch(/^\d{4}-\d{2}$/);
      expect(trend.updatedAt).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      expect(['rising', 'peak', 'fading']).toContain(trend.status);
      trend.sources.forEach((s) => {
        expect(s.url).toMatch(/^https:\/\//);
        expect(s.publisher.length).toBeGreaterThan(0);
      });
    }
  });

  it('includes 14 July 2026 new trends', () => {
    const julyNew = getTrends().filter((t) => t.publishedAt === '2026-07');
    expect(julyNew).toHaveLength(14);
  });
});
