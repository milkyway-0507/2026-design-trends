import { useMemo, useState } from 'react';
import {
  CategoryFilter,
  StatusFilterBar,
  TRENDS_PANEL_ID,
  getStatusTabId,
  getTabId,
} from '@/components/filters';
import { FontGrid } from '@/components/fonts';
import { getCategories, getStatusFilters, getTrends } from '@/data';
import type { StatusFilterTab, Trend, TrendCategory } from '@/types';
import { filterTrends } from '@/utils/filterTrends';
import { TrendGrid } from './TrendGrid';

interface TrendsSectionProps {
  onSelectTrend?: (trend: Trend) => void;
}

export function TrendsSection({ onSelectTrend }: TrendsSectionProps) {
  const categories = getCategories();
  const statusFilters = getStatusFilters();
  const allTrends = getTrends();
  const [activeCategory, setActiveCategory] = useState<TrendCategory>('all');
  const [activeStatus, setActiveStatus] = useState<StatusFilterTab>('all');

  const isTypographyView = activeCategory === 'typography';

  const filteredTrends = useMemo(
    () =>
      isTypographyView
        ? []
        : filterTrends(allTrends, activeCategory, activeStatus),
    [allTrends, activeCategory, activeStatus, isTypographyView],
  );

  const panelLabelledBy = isTypographyView
    ? getTabId('typography')
    : `${getTabId(activeCategory)} ${getStatusTabId(activeStatus)}`;

  const handleSelect = (trend: Trend) => {
    onSelectTrend?.(trend);
  };

  return (
    <section className="trends-section" aria-labelledby="trends-section-title">
      <div className="container trends-section__inner">
        <header className="trends-section__header">
          <h2 id="trends-section-title" className="trends-section__title">
            {isTypographyView ? '2026 폰트 트렌드' : '트렌드 둘러보기'}
          </h2>
          <p className="trends-section__desc text-secondary">
            {isTypographyView
              ? '실제로 적용해보고 바로 다운로드하세요'
              : '카테고리와 상태로 관심 분야의 트렌드를 필터링하세요.'}
          </p>
        </header>

        <CategoryFilter
          categories={categories}
          activeCategory={activeCategory}
          onChange={setActiveCategory}
        />

        {!isTypographyView && (
          <StatusFilterBar
            filters={statusFilters}
            activeStatus={activeStatus}
            onChange={setActiveStatus}
          />
        )}

        {isTypographyView ? (
          <FontGrid
            panelId={TRENDS_PANEL_ID}
            panelLabelledBy={panelLabelledBy}
          />
        ) : (
          <TrendGrid
            trends={filteredTrends}
            panelId={TRENDS_PANEL_ID}
            panelLabelledBy={panelLabelledBy}
            onSelectTrend={handleSelect}
          />
        )}
      </div>
    </section>
  );
}
