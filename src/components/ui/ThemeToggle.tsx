import { useTheme, type Theme } from '@/hooks/useTheme';

const labels: Record<Theme, string> = {
  light: '라이트',
  dark: '다크',
  system: '시스템',
};

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const cycle = () => {
    const order: Theme[] = ['system', 'light', 'dark'];
    const next = order[(order.indexOf(theme) + 1) % order.length];
    setTheme(next);
  };

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={cycle}
      aria-label={`테마: ${labels[theme]}. 클릭하여 변경`}
    >
      {labels[theme]}
    </button>
  );
}
