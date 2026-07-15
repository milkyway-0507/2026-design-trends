import { ThemeToggle } from '@/components/ui';
import { MonthlyUpdateBanner } from './MonthlyUpdateBanner';

export function Header() {
  return (
    <header className="site-header header">
      <MonthlyUpdateBanner />
      <div className="container site-header__inner header__inner">
        <a href="/" className="site-header__logo header__logo">
          2026 Trends
        </a>
        <ThemeToggle />
      </div>
    </header>
  );
}
