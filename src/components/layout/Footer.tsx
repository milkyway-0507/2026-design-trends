import { getMeta } from '@/data';

export function Footer() {
  const { lastUpdated } = getMeta();

  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <p className="site-footer__text">
          © 2026 Design Trends · 마지막 업데이트 {lastUpdated}
        </p>
        <p className="site-footer__text">
          정적 사이트 · JSON 콘텐츠 기반 운영
        </p>
      </div>
    </footer>
  );
}
