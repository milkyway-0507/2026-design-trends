import { useMemo } from 'react';
import { getTrends } from '@/data';
import type { Trend } from '@/types';
import {
  getCurrentMonthKey,
  isEffectivelyNew,
  isPublishedThisMonth,
} from '@/utils/monthly';

export interface MonthlyUpdateInfo {
  /** "2026-07" */
  currentMonthKey: string;
  /** "7월" */
  currentMonthLabel: string;
  /** 이번 달 publishedAt 트렌드 수 */
  newTrendCount: number;
  /** isNew + 2개월 미만 */
  effectiveNewCount: number;
  /** 가장 최근 updatedAt */
  latestUpdatedAt: string;
  /** 배너 문구 */
  bannerText: string;
}

function getMonthLabel(monthKey: string): string {
  const month = Number(monthKey.split('-')[1]);
  return `${month}월`;
}

export function useMonthlyUpdate(): MonthlyUpdateInfo {
  return useMemo(() => {
    const trends = getTrends();
    const now = new Date();
    const currentMonthKey = getCurrentMonthKey(now);
    const currentMonthLabel = getMonthLabel(currentMonthKey);

    const newTrendCount = trends.filter((t) =>
      isPublishedThisMonth(t, now),
    ).length;

    const effectiveNewCount = trends.filter((t) =>
      isEffectivelyNew(t, now),
    ).length;

    const latestUpdatedAt = trends.reduce(
      (latest, t) => (t.updatedAt > latest ? t.updatedAt : latest),
      trends[0]?.updatedAt ?? '',
    );

    const bannerText =
      newTrendCount > 0
        ? `${currentMonthLabel} 업데이트 · 트렌드 ${newTrendCount}개 추가됨`
        : `${currentMonthLabel} 업데이트 · 최신 반영 ${latestUpdatedAt}`;

    return {
      currentMonthKey,
      currentMonthLabel,
      newTrendCount,
      effectiveNewCount,
      latestUpdatedAt,
      bannerText,
    };
  }, []);
}

export function resolveTrendNewBadge(trend: Trend): boolean {
  return isEffectivelyNew(trend);
}
