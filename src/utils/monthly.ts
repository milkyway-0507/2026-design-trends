import type { Trend } from '@/types';

/** "2026-07" 형식의 현재 월 키 */
export function getCurrentMonthKey(date = new Date()): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  return `${y}-${m}`;
}

/** publishedAt 기준 경과 월 수 */
export function monthsSincePublished(publishedAt: string, date = new Date()): number {
  const [y, m] = publishedAt.split('-').map(Number);
  if (!y || !m) return 0;
  return (date.getFullYear() - y) * 12 + (date.getMonth() + 1 - m);
}

/**
 * isNew가 true여도 publishedAt이 2개월 이상 지나면 false 처리
 */
export function isEffectivelyNew(trend: Trend, date = new Date()): boolean {
  if (!trend.isNew) return false;
  return monthsSincePublished(trend.publishedAt, date) < 2;
}

/** 이번 달 신규 트렌드 (publishedAt === 현재 월) */
export function isPublishedThisMonth(trend: Trend, date = new Date()): boolean {
  return trend.publishedAt === getCurrentMonthKey(date);
}
