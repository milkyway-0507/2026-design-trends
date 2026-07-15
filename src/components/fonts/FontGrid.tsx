import { useEffect } from 'react';
import { getGoogleFontsCssHref, trendFonts } from '@/data/fonts';
import { FontCard } from './FontCard';

function loadGoogleFont(href: string) {
  if (document.querySelector(`link[data-font-href="${href}"]`)) return;

  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = href;
  link.setAttribute('data-font-href', href);
  document.head.appendChild(link);
}

interface FontGridProps {
  panelId: string;
  panelLabelledBy: string;
}

export function FontGrid({ panelId, panelLabelledBy }: FontGridProps) {
  useEffect(() => {
    trendFonts.forEach((font) => {
      const href = getGoogleFontsCssHref(font);
      if (href) loadGoogleFont(href);
    });
  }, []);

  return (
    <div
      id={panelId}
      role="tabpanel"
      aria-labelledby={panelLabelledBy}
      className="trend-grid-panel"
    >
      <ul className="font-grid" role="list">
        {trendFonts.map((font) => (
          <li key={font.id} className="font-grid__item">
            <FontCard font={font} />
          </li>
        ))}
      </ul>
    </div>
  );
}
