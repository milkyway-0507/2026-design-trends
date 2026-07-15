import type { Trend } from '@/types';
import { TrendCard } from './TrendCard';

interface TrendGridProps {
  trends: Trend[];
  panelId: string;
  panelLabelledBy: string;
  onSelectTrend: (trend: Trend) => void;
}

export function TrendGrid({
  trends,
  panelId,
  panelLabelledBy,
  onSelectTrend,
}: TrendGridProps) {
  return (
    <div
      id={panelId}
      role="tabpanel"
      aria-labelledby={panelLabelledBy}
      className="trend-grid-panel"
    >
      {trends.length === 0 ? (
        <p className="trend-grid__empty" role="status">
          선택한 필터에 표시할 트렌드가 없습니다.
        </p>
      ) : (
        <ul
          className="trend-grid"
          role="list"
          aria-label={`${trends.length}개 트렌드`}
        >
          {trends.map((trend) => (
            <li key={trend.id} className="trend-grid__item" role="listitem">
              <TrendCard trend={trend} onSelect={onSelectTrend} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
