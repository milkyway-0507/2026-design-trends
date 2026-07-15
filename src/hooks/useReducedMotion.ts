import { useEffect, useState } from 'react';

function getReducedMotion(): boolean {
  return (
    document.documentElement.getAttribute('data-reduced-motion') === 'true' ||
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
}

export function useReducedMotion(): boolean {
  const [reducedMotion, setReducedMotion] = useState(getReducedMotion);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handler = (e: MediaQueryListEvent) => {
      const active = e.matches;
      setReducedMotion(active);
      if (active) {
        document.documentElement.setAttribute('data-reduced-motion', 'true');
      } else {
        document.documentElement.removeAttribute('data-reduced-motion');
      }
    };
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  return reducedMotion;
}
