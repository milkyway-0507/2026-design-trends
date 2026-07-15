import { useCallback, useRef, type KeyboardEvent } from 'react';
import type { StatusFilter, StatusFilterTab } from '@/types';

const STATUS_PANEL_ID = 'trends-status-panel';

interface StatusFilterBarProps {
  filters: StatusFilter[];
  activeStatus: StatusFilterTab;
  onChange: (status: StatusFilterTab) => void;
}

function getStatusTabId(id: StatusFilterTab): string {
  return `status-tab-${id}`;
}

export function StatusFilterBar({
  filters,
  activeStatus,
  onChange,
}: StatusFilterBarProps) {
  const tablistRef = useRef<HTMLDivElement>(null);

  const focusTab = useCallback((index: number) => {
    const tabs = tablistRef.current?.querySelectorAll<HTMLButtonElement>(
      '[role="tab"]',
    );
    tabs?.[index]?.focus();
  }, []);

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const currentIndex = filters.findIndex((f) => f.id === activeStatus);
    if (currentIndex < 0) return;

    let nextIndex: number | null = null;

    switch (event.key) {
      case 'ArrowRight':
      case 'ArrowDown':
        nextIndex = (currentIndex + 1) % filters.length;
        break;
      case 'ArrowLeft':
      case 'ArrowUp':
        nextIndex = (currentIndex - 1 + filters.length) % filters.length;
        break;
      case 'Home':
        nextIndex = 0;
        break;
      case 'End':
        nextIndex = filters.length - 1;
        break;
      default:
        return;
    }

    event.preventDefault();
    onChange(filters[nextIndex].id);
    focusTab(nextIndex);
  };

  return (
    <div className="filter filter--status">
      <div
        ref={tablistRef}
        role="tablist"
        aria-label="트렌드 상태 필터"
        className="filter__tablist"
        onKeyDown={handleKeyDown}
      >
        {filters.map((filter) => {
          const isSelected = activeStatus === filter.id;
          return (
            <button
              key={filter.id}
              type="button"
              role="tab"
              id={getStatusTabId(filter.id)}
              className="filter__tab filter__tab--status"
              aria-selected={isSelected}
              aria-controls={STATUS_PANEL_ID}
              tabIndex={isSelected ? 0 : -1}
              onClick={() => onChange(filter.id)}
            >
              {filter.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export { STATUS_PANEL_ID, getStatusTabId };
