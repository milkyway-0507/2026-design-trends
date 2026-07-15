import { describe, expect, it } from 'vitest';
import { resolveTheme, THEME_STORAGE_KEY } from '@/lib/theme';

describe('theme lib', () => {
  it('exports consistent storage key', () => {
    expect(THEME_STORAGE_KEY).toBe('theme-preference');
  });

  it('resolves system theme', () => {
    expect(resolveTheme('light')).toBe('light');
    expect(resolveTheme('dark')).toBe('dark');
    expect(['light', 'dark']).toContain(resolveTheme('system'));
  });
});
