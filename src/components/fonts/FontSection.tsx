import { useEffect, useMemo, useState } from 'react';
import {
  getGoogleFontsCssHref,
  trendFonts,
  type FontCategory,
  type TrendFont,
} from '@/data/fonts';
import { FontCard } from './FontCard';

type FontFilterTab = 'all' | FontCategory;

const FILTER_TABS: { id: FontFilterTab; label: string }[] = [
  { id: 'all', label: '전체' },
  { id: 'sans', label: '산세리프' },
  { id: 'serif', label: '세리프' },
  { id: 'mono', label: '모노스페이스' },
  { id: 'variable', label: '가변 폰트' },
  { id: 'display', label: '디스플레이' },
];

function loadGoogleFont(href: string) {
  if (document.querySelector(`link[data-font-href="${href}"]`)) return;

  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = href;
  link.setAttribute('data-font-href', href);
  document.head.appendChild(link);
}

function filterFonts(fonts: TrendFont[], tab: FontFilterTab): TrendFont[] {
  if (tab === 'all') return fonts;
  return fonts.filter((font) => font.category === tab);
}

export function FontSection() {
  const [activeTab, setActiveTab] = useState<FontFilterTab>('all');

  const filteredFonts = useMemo(
    () => filterFonts(trendFonts, activeTab),
    [activeTab],
  );

  useEffect(() => {
    trendFonts.forEach((font) => {
      const href = getGoogleFontsCssHref(font);
      if (href) loadGoogleFont(href);
    });
  }, []);

  return (
    <section className="font-section" aria-labelledby="font-section-title">
      <div className="container">
        <header className="font-section__header">
          <h2 id="font-section-title" className="font-section__title">
            2026 폰트 트렌드
          </h2>
          <p className="font-section__desc">
            실제로 적용해보고 바로 다운로드하세요
          </p>
        </header>

        <div
          className="font-section__filters"
          role="tablist"
          aria-label="폰트 카테고리 필터"
        >
          {FILTER_TABS.map((tab) => (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={activeTab === tab.id}
              className="font-section__filter-tab"
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <ul className="font-grid" role="list">
          {filteredFonts.map((font) => (
            <li key={font.id} className="font-grid__item">
              <FontCard font={font} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
