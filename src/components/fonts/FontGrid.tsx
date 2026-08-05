import { useEffect, useMemo, useRef, useState } from 'react';
import {
  trendFonts,
  type FontCategory,
} from '@/data/fonts';
import { FONT_URLS, loadFont } from '@/utils/fontLoader';
import { FontCard } from './FontCard';

const CAT_FILTERS: { id: FontCategory | 'all'; label: string }[] = [
  { id: 'all', label: '전체' },
  { id: 'sans', label: '산세리프' },
  { id: 'serif', label: '세리프' },
  { id: 'display', label: '디스플레이' },
  { id: 'mono', label: '모노스페이스' },
  { id: 'variable', label: '가변 폰트' },
];

const LANG_FILTERS = [
  { id: 'all', label: '전체 언어' },
  { id: 'en', label: '영문' },
  { id: 'ko', label: '한국어 🇰🇷' },
  { id: 'ja', label: '일본어 🇯🇵' },
] as const;

const SOURCE_FILTERS = [
  { id: 'all', label: '전체 출처' },
  { id: 'noonnu', label: '눈누 🇰🇷' },
  { id: 'hvnter', label: 'hvnter.net' },
  { id: 'google', label: 'Google Fonts' },
] as const;

type LangFilter = (typeof LANG_FILTERS)[number]['id'];
type SourceFilter = (typeof SOURCE_FILTERS)[number]['id'];

interface FontGridProps {
  panelId: string;
  panelLabelledBy: string;
}

export function FontGrid({ panelId, panelLabelledBy }: FontGridProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const [activeCat, setActiveCat] = useState<FontCategory | 'all'>('all');
  const [activeLang, setActiveLang] = useState<LangFilter>('all');
  const [activeSource, setActiveSource] = useState<SourceFilter>('all');

  const filtered = useMemo(
    () =>
      trendFonts.filter((font) => {
        const matchCat = activeCat === 'all' || font.category === activeCat;
        const matchLang =
          activeLang === 'all' ||
          (activeLang === 'ko' && font.supportsKorean) ||
          (activeLang === 'ja' && font.supportsJapanese) ||
          (activeLang === 'en' &&
            !font.supportsKorean &&
            !font.supportsJapanese);
        const matchSource =
          activeSource === 'all' ||
          (activeSource === 'noonnu' && font.source_site === 'noonnu') ||
          (activeSource === 'hvnter' && font.source_site === 'hvnter') ||
          (activeSource === 'google' && font.googleFontsUrl !== null);
        return matchCat && matchLang && matchSource;
      }),
    [activeCat, activeLang, activeSource],
  );

  useEffect(() => {
    const panel = panelRef.current;
    if (!panel) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          Object.values(FONT_URLS).forEach((url) => loadFont(url));
          observer.disconnect();
        }
      },
      { rootMargin: '500px' },
    );

    observer.observe(panel);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="font-section__filter-groups">
        <div className="font-section__filter-group">
          <span className="font-section__filter-label" id="font-filter-cat-label">
            카테고리
          </span>
          <div
            className="font-section__filters"
            role="tablist"
            aria-labelledby="font-filter-cat-label"
          >
            {CAT_FILTERS.map((cat) => (
              <button
                key={cat.id}
                type="button"
                role="tab"
                className="font-section__filter-tab"
                aria-selected={activeCat === cat.id}
                aria-controls={panelId}
                onClick={() => setActiveCat(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        <div className="font-section__filter-group">
          <span className="font-section__filter-label" id="font-filter-lang-label">
            언어
          </span>
          <div
            className="font-section__filters"
            role="tablist"
            aria-labelledby="font-filter-lang-label"
          >
            {LANG_FILTERS.map((lang) => (
              <button
                key={lang.id}
                type="button"
                role="tab"
                className="font-section__filter-tab"
                aria-selected={activeLang === lang.id}
                aria-controls={panelId}
                onClick={() => setActiveLang(lang.id)}
              >
                {lang.label}
              </button>
            ))}
          </div>
        </div>

        <div className="font-section__filter-group">
          <span className="font-section__filter-label" id="font-filter-source-label">
            출처
          </span>
          <div
            className="font-section__filters"
            role="tablist"
            aria-labelledby="font-filter-source-label"
          >
            {SOURCE_FILTERS.map((source) => (
              <button
                key={source.id}
                type="button"
                role="tab"
                className="font-section__filter-tab"
                aria-selected={activeSource === source.id}
                aria-controls={panelId}
                onClick={() => setActiveSource(source.id)}
              >
                {source.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div
        ref={panelRef}
        id={panelId}
        role="tabpanel"
        aria-labelledby={panelLabelledBy}
        className="trend-grid-panel"
      >
        {filtered.length > 0 ? (
          <ul className="font-grid" role="list">
            {filtered.map((font) => (
              <li key={font.id} className="font-grid__item">
                <FontCard font={font} />
              </li>
            ))}
          </ul>
        ) : (
          <p className="font-section__empty" role="status">
            선택한 조건에 맞는 폰트가 없습니다.
          </p>
        )}
      </div>
    </>
  );
}
