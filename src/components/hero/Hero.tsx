import { getMeta, getTrendCount } from '@/data';

const meta = getMeta();
const trendCount = getTrendCount();

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="container hero__inner">
        <span className="hero__year" aria-hidden="true">
          2026
        </span>

        <p className="hero__eyebrow">Curated in Korea · 2026</p>

        <h1 id="hero-title" className="hero__title">
          디자인 <em>트렌드</em> {trendCount}가지
        </h1>

        <p className="hero__subtitle">{meta.subtitle}</p>

        <div className="hero__stats">
          <div className="hero__stat">
            <div className="hero__stat-num">{trendCount}</div>
            <div className="hero__stat-label">핵심 트렌드</div>
          </div>
          <div className="hero__stat">
            <div className="hero__stat-num">100%</div>
            <div className="hero__stat-label">한국어</div>
          </div>
          <div className="hero__stat">
            <div className="hero__stat-num">체험형</div>
            <div className="hero__stat-label">인터랙션 시연</div>
          </div>
        </div>
      </div>
    </section>
  );
}
