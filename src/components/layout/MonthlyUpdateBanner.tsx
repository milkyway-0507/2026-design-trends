import { useMonthlyUpdate } from '@/hooks/useMonthlyUpdate';

export function MonthlyUpdateBanner() {
  const { bannerText } = useMonthlyUpdate();

  return (
    <div className="monthly-banner" role="status" aria-live="polite">
      <span className="monthly-banner__dot" aria-hidden="true" />
      {bannerText}
    </div>
  );
}
