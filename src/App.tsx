import { Suspense, lazy, useCallback, useEffect, useState } from 'react';
import '@/styles/global.css';
import '@/styles/design-override.css';
import { Header, Footer } from '@/components/layout';
import { Hero, MarqueeBand } from '@/components/hero';
import { getTrends } from '@/data';
import type { Trend, TrendCategory } from '@/types';

const allTrends = getTrends();

function pushTrendUrl(trendId: string | null) {
  const url = new URL(window.location.href);
  if (trendId) {
    url.searchParams.set('trend', trendId);
  } else {
    url.searchParams.delete('trend');
  }
  history.pushState(trendId ? { trendId } : {}, '', url.toString());
}

const TrendsSection = lazy(() =>
  import('@/components/trends/TrendsSection').then((m) => ({
    default: m.TrendsSection,
  })),
);

const TrendPreviewModal = lazy(() =>
  import('@/components/trends/TrendPreviewModal').then((m) => ({
    default: m.TrendPreviewModal,
  })),
);

function TrendsSectionFallback() {
  return (
    <div
      className="skeleton skeleton--section"
      role="status"
      aria-label="트렌드 목록 로딩 중"
    />
  );
}

function ModalFallback() {
  return (
    <div className="skeleton--modal" role="status" aria-label="프리뷰 로딩 중">
      <div className="skeleton skeleton--modal-panel" />
    </div>
  );
}

export default function App() {
  const [selectedTrend, setSelectedTrend] = useState<Trend | null>(null);
  const [filteredTrends, setFilteredTrends] = useState<Trend[]>([]);
  const [activeCategory, setActiveCategory] = useState<TrendCategory>('color');

  const selectedIndex = selectedTrend
    ? filteredTrends.findIndex((t) => t.id === selectedTrend.id)
    : -1;

  const handleSelectTrend = useCallback((trend: Trend) => {
    setSelectedTrend(trend);
    pushTrendUrl(trend.id);
  }, []);

  const handleClose = useCallback(() => {
    setSelectedTrend(null);
    pushTrendUrl(null);
  }, []);

  const handlePrev = useCallback(() => {
    if (selectedIndex > 0) {
      const prev = filteredTrends[selectedIndex - 1];
      setSelectedTrend(prev);
      pushTrendUrl(prev.id);
    }
  }, [filteredTrends, selectedIndex]);

  const handleNext = useCallback(() => {
    if (selectedIndex < filteredTrends.length - 1) {
      const next = filteredTrends[selectedIndex + 1];
      setSelectedTrend(next);
      pushTrendUrl(next.id);
    }
  }, [filteredTrends, selectedIndex]);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const trendId = params.get('trend');
    if (trendId) {
      const found = allTrends.find((t) => t.id === trendId);
      if (found) setSelectedTrend(found);
    }
  }, []);

  useEffect(() => {
    const handlePopState = () => {
      const params = new URLSearchParams(window.location.search);
      const trendId = params.get('trend');
      if (trendId) {
        const found = allTrends.find((t) => t.id === trendId);
        if (found) setSelectedTrend(found);
      } else {
        setSelectedTrend(null);
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  return (
    <div className="app">
      <a href="#main-content" className="skip-link">
        본문으로 건너뛰기
      </a>
      <Header />
      <main className="app__main" id="main-content">
        <Hero />
        <MarqueeBand />
        <Suspense fallback={<TrendsSectionFallback />}>
          <TrendsSection
            onSelectTrend={handleSelectTrend}
            onFilteredTrendsChange={setFilteredTrends}
            onActiveCategoryChange={setActiveCategory}
          />
        </Suspense>
      </main>
      <Footer />
      {selectedTrend && (
        <Suspense fallback={<ModalFallback />}>
          <TrendPreviewModal
            trend={selectedTrend}
            showColorPalette={activeCategory === 'color'}
            onClose={handleClose}
            onPrev={handlePrev}
            onNext={handleNext}
            hasPrev={selectedIndex > 0}
            hasNext={selectedIndex < filteredTrends.length - 1}
            currentIndex={selectedIndex}
            total={filteredTrends.length}
          />
        </Suspense>
      )}
    </div>
  );
}
