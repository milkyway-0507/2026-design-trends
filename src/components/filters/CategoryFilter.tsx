import { useCallback, useRef, type KeyboardEvent } from 'react';
import type { CategoryFilter as CategoryFilterType, TrendCategory } from '@/types';

const TRENDS_PANEL_ID = 'trends-panel';

interface CategoryFilterProps {
  categories: CategoryFilterType[];
  activeCategory: TrendCategory;
  onChange: (category: TrendCategory) => void;
}

function getTabId(categoryId: TrendCategory): string {
  return `filter-tab-${categoryId}`;
}

export function CategoryFilter({
  categories,
  activeCategory,
  onChange,
}: CategoryFilterProps) {
  const tablistRef = useRef<HTMLDivElement>(null);

  const focusTab = useCallback((index: number) => {
    const tabs = tablistRef.current?.querySelectorAll<HTMLButtonElement>(
      '[role="tab"]',
    );
    tabs?.[index]?.focus();
  }, []);

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const currentIndex = categories.findIndex((c) => c.id === activeCategory);
    if (currentIndex < 0) return;

    let nextIndex: number | null = null;

    switch (event.key) {
      case 'ArrowRight':
      case 'ArrowDown':
        nextIndex = (currentIndex + 1) % categories.length;
        break;
      case 'ArrowLeft':
      case 'ArrowUp':
        nextIndex = (currentIndex - 1 + categories.length) % categories.length;
        break;
      case 'Home':
        nextIndex = 0;
        break;
      case 'End':
        nextIndex = categories.length - 1;
        break;
      default:
        return;
    }

    event.preventDefault();
    const nextCategory = categories[nextIndex];
    onChange(nextCategory.id);
    focusTab(nextIndex);
  };

  return (
    <div className="filter filter--category">
      <div
        ref={tablistRef}
        role="tablist"
        aria-label="트렌드 카테고리 필터"
        className="filter__tablist"
        onKeyDown={handleKeyDown}
      >
        {categories.map((cat) => {
          const isSelected = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              type="button"
              role="tab"
              id={getTabId(cat.id)}
              className="filter__tab"
              aria-selected={isSelected}
              aria-controls={TRENDS_PANEL_ID}
              tabIndex={isSelected ? 0 : -1}
              onClick={() => onChange(cat.id)}
            >
              {cat.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export { TRENDS_PANEL_ID, getTabId };
