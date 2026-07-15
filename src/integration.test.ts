import { describe, expect, it } from 'vitest';
import { getTrends } from '@/data';
import type { PreviewType } from '@/types';

const ALL_PREVIEW_TYPES: PreviewType[] = [
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
];

describe('integration — preview registry', () => {
  it('maps all 24 trends to valid preview types', () => {
    const trends = getTrends();
    const types = trends.map((t) => t.previewType);
    expect(types).toHaveLength(24);
    for (const type of types) {
      expect(ALL_PREVIEW_TYPES).toContain(type);
    }
    for (const type of ALL_PREVIEW_TYPES) {
      expect(types).toContain(type);
    }
  });
});

describe('integration — security (PRD FR-6)', () => {
  it('all source URLs use HTTPS', () => {
    for (const trend of getTrends()) {
      for (const source of trend.sources) {
        expect(source.url).toMatch(/^https:\/\//);
      }
      for (const brand of trend.brands) {
        if (brand.url) {
          expect(brand.url).toMatch(/^https:\/\//);
        }
      }
    }
  });
});

describe('integration — categories (PRD FR-2)', () => {
  it('every filter category has at least one trend or is "all"', () => {
    const categories = [
      'color',
      'typography',
      'motion',
      'layout',
      'ai-ux',
      'visual',
      'accessibility',
      'interaction',
    ] as const;

    for (const cat of categories) {
      const count = getTrends().filter((t) => t.categories.includes(cat)).length;
      expect(count).toBeGreaterThan(0);
    }
  });
});
