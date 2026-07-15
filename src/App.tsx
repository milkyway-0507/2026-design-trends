import { Suspense, lazy, useState } from 'react';
import '@/styles/global.css';
import { Header, Footer } from '@/components/layout';
import { Hero } from '@/components/hero';
import type { Trend } from '@/types';

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

  return (
    <div className="app">
      <a href="#main-content" className="skip-link">
        본문으로 건너뛰기
      </a>
      <Header />
      <main className="app__main" id="main-content">
        <Hero />
        <Suspense fallback={<TrendsSectionFallback />}>
          <TrendsSection onSelectTrend={setSelectedTrend} />
        </Suspense>
      </main>
      <Footer />
      {selectedTrend && (
        <Suspense fallback={<ModalFallback />}>
          <TrendPreviewModal
            trend={selectedTrend}
            onClose={() => setSelectedTrend(null)}
          />
        </Suspense>
      )}
    </div>
  );
}
