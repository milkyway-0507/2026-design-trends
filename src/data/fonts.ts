export type FontCategory = 'sans' | 'serif' | 'display' | 'mono' | 'variable';
export type FontStatus = 'rising' | 'peak' | 'fading';

export interface TrendFont {
  id: string;
  name: string;
  designer: string;
  category: FontCategory;
  status: FontStatus;
  isNew: boolean;
  tagline: string;
  description: string;
  usedBy: string[];
  specimen: string;
  specimenSize: number;
  weight: string;
  pairWith: string[];
  googleFontsUrl: string | null;
  downloadUrl: string;
  licenseType: 'free' | 'paid' | 'open-source';
  cssFamily: string;
  source: string;
}

export const trendFonts: TrendFont[] = [
  {
    id: 'space-grotesk',
    name: 'Space Grotesk',
    designer: 'Florian Karsten / Google Fonts',
    category: 'sans',
    status: 'peak',
    isNew: false,
    tagline: '테크 브랜딩의 새 표준 — 기하학적이지만 차갑지 않다',
    description:
      '2026년 가장 많이 쓰이는 디스플레이 산세리프. 기하학적 구조 위에 불규칙한 세부 디테일이 더해져 Helvetica 계열의 차가움 없이 개성을 만든다. Vercel·Linear 영향으로 스타트업 랜딩 페이지의 디폴트가 됐다.',
    usedBy: ['Vercel', 'Linear', 'Raycast', 'Loom'],
    specimen: 'Design 2026',
    specimenSize: 3.5,
    weight: '700',
    pairWith: ['Inter', 'Geist Mono', 'DM Sans'],
    googleFontsUrl: 'https://fonts.google.com/specimen/Space+Grotesk',
    downloadUrl: 'https://fonts.google.com/specimen/Space+Grotesk',
    licenseType: 'open-source',
    cssFamily: "'Space Grotesk', sans-serif",
    source: 'https://madegooddesigns.com/font-trends-2026/',
  },
  {
    id: 'instrument-serif',
    name: 'Instrument Serif',
    designer: 'Rodrigo Fuenzalida / Google Fonts',
    category: 'serif',
    status: 'rising',
    isNew: true,
    tagline: '에디토리얼 우아함 — 럭셔리 브랜드들이 선택한 세리프',
    description:
      '2026년 상반기 가장 빠르게 성장한 폰트. Didot 영향의 high-contrast serif이지만 스크린 가독성이 뛰어나다. 뮤트된 컬러 팔레트와 함께 쓸 때 럭셔리·에디토리얼 느낌이 극대화된다.',
    usedBy: ['Aesop', 'Stripe Press', 'The Verge'],
    specimen: '트렌드',
    specimenSize: 4,
    weight: '400',
    pairWith: ['Inter', 'Geist', 'Space Grotesk'],
    googleFontsUrl: 'https://fonts.google.com/specimen/Instrument+Serif',
    downloadUrl: 'https://fonts.google.com/specimen/Instrument+Serif',
    licenseType: 'open-source',
    cssFamily: "'Instrument Serif', serif",
    source: 'https://www.creativeboom.com/resources/top-50-fonts-in-2026/',
  },
  {
    id: 'geist',
    name: 'Geist',
    designer: 'Vercel',
    category: 'sans',
    status: 'peak',
    isNew: false,
    tagline: 'Vercel이 만든 개발자 미학의 산세리프',
    description:
      'Vercel이 자체 브랜드를 위해 제작하고 오픈소스로 공개한 산세리프. Inter보다 더 기하학적이고 정밀하다. 코드와 UI 텍스트에 모두 최적화돼 있어 개발자 도구·대시보드에 폭발적으로 채택됐다.',
    usedBy: ['Vercel', 'v0.dev', '수많은 Next.js 프로젝트'],
    specimen: 'Geist 2026',
    specimenSize: 3.5,
    weight: '500',
    pairWith: ['Geist Mono', 'Inter', 'Space Grotesk'],
    googleFontsUrl: null,
    downloadUrl: 'https://vercel.com/font',
    licenseType: 'open-source',
    cssFamily: "'Geist', sans-serif",
    source: 'https://madegooddesigns.com/font-trends-2026/',
  },
  {
    id: 'bricolage-grotesque',
    name: 'Bricolage Grotesque',
    designer: 'Mathieu Triay / Google Fonts',
    category: 'variable',
    status: 'rising',
    isNew: true,
    tagline: '가변 폰트의 교과서 — 굵기·너비가 실시간 변형',
    description:
      '2026 가변 폰트 트렌드를 이끄는 대표 폰트. 굵기(100~800)와 너비(75~100)를 자유롭게 제어할 수 있다. 스크롤·인터랙션에 반응하는 키네틱 타이포그래피 구현에 최적이다.',
    usedBy: ['Notion', '독립 디자인 스튜디오들', 'Framer 템플릿'],
    specimen: 'Variable',
    specimenSize: 3.5,
    weight: '200 800',
    pairWith: ['Inter', 'Instrument Serif', 'DM Mono'],
    googleFontsUrl: 'https://fonts.google.com/specimen/Bricolage+Grotesque',
    downloadUrl: 'https://fonts.google.com/specimen/Bricolage+Grotesque',
    licenseType: 'open-source',
    cssFamily: "'Bricolage Grotesque', sans-serif",
    source: 'https://madegooddesigns.com/font-trends-2026/',
  },
  {
    id: 'editorial-new',
    name: 'Editorial New',
    designer: 'Pangram Pangram Foundry',
    category: 'serif',
    status: 'peak',
    isNew: false,
    tagline: '2026 에디토리얼 세리프의 아이콘 — 잡지를 웹으로',
    description:
      '높은 대비와 날카로운 serif bracket이 에디토리얼 느낌을 극대화한다. Awwwards 수상작의 절반 이상이 헤드라인에 사용하고 있다. Italic 굵기가 특히 아름다워 제목에 em 태그와 함께 쓰는 것이 유행.',
    usedBy: ['Awwwards 수상작 다수', 'Loewe', '크리에이티브 에이전시'],
    specimen: 'Editorial',
    specimenSize: 3.8,
    weight: '300',
    pairWith: ['Neue Montreal', 'Inter', 'Space Grotesk'],
    googleFontsUrl: null,
    downloadUrl: 'https://pangrampangram.com/products/editorial-new',
    licenseType: 'paid',
    cssFamily: "'Editorial New', serif",
    source: 'https://www.creativeboom.com/resources/top-50-fonts-in-2026/',
  },
  {
    id: 'martian-mono',
    name: 'Martian Mono',
    designer: 'Roman Shamin / Google Fonts',
    category: 'mono',
    status: 'rising',
    isNew: true,
    tagline: '코드 이상의 모노스페이스 — UI 레이블에도 쓰인다',
    description:
      '기존 모노스페이스가 코드에만 쓰인다면, Martian Mono는 UI 레이블·날짜·수치 표시에도 아름답게 작동한다. 레트로 터미널 미학과 현대적 가독성을 동시에 가진 2026 모노스페이스 1위.',
    usedBy: ['개발자 포트폴리오', '대시보드 UI', 'CLI 툴 랜딩'],
    specimen: '#C8B4FF',
    specimenSize: 2.8,
    weight: '400',
    pairWith: ['Space Grotesk', 'Geist', 'Inter'],
    googleFontsUrl: 'https://fonts.google.com/specimen/Martian+Mono',
    downloadUrl: 'https://fonts.google.com/specimen/Martian+Mono',
    licenseType: 'open-source',
    cssFamily: "'Martian Mono', monospace",
    source: 'https://madegooddesigns.com/font-trends-2026/',
  },
  {
    id: 'syne',
    name: 'Syne',
    designer: 'Lucas Descroix / Google Fonts',
    category: 'display',
    status: 'rising',
    isNew: false,
    tagline: '글자 간격이 넓고 기하학적 — 미래적 디스플레이 폰트',
    description:
      '독특한 글자 구조와 넓은 자간이 특징. 대문자로 쓰면 포스터·히어로 섹션에서 강력한 존재감을 낸다. 2026년 브루탈리스트 트렌드와 함께 에이전시·포트폴리오 사이트에 많이 등장하고 있다.',
    usedBy: ['크리에이티브 포트폴리오', '뮤직 플랫폼', '아트 디렉션 사이트'],
    specimen: 'SYNE 26',
    specimenSize: 3.2,
    weight: '800',
    pairWith: ['Inter', 'DM Sans', 'Instrument Serif'],
    googleFontsUrl: 'https://fonts.google.com/specimen/Syne',
    downloadUrl: 'https://fonts.google.com/specimen/Syne',
    licenseType: 'open-source',
    cssFamily: "'Syne', sans-serif",
    source: 'https://elements.envato.com/learn/font-trends',
  },
  {
    id: 'fragment-mono',
    name: 'Fragment Mono',
    designer: 'Konstantinos Papadakis / Google Fonts',
    category: 'mono',
    status: 'rising',
    isNew: true,
    tagline: '시네마틱 다크모드에 어울리는 날카로운 모노스페이스',
    description:
      '2026년 다크 테마 UI에서 가장 많이 선택되는 새 모노스페이스. 글자가 날카롭고 각지며, 터미널 미학과 디자인 시스템 레이블을 모두 커버한다. Vercel 스타일 사이트에 완벽하게 어울린다.',
    usedBy: ['터미널 앱 UI', '개발자 도구', 'MX Agent 인터페이스'],
    specimen: '> 2026_',
    specimenSize: 2.6,
    weight: '400',
    pairWith: ['Geist', 'Space Grotesk', 'Inter'],
    googleFontsUrl: 'https://fonts.google.com/specimen/Fragment+Mono',
    downloadUrl: 'https://fonts.google.com/specimen/Fragment+Mono',
    licenseType: 'open-source',
    cssFamily: "'Fragment Mono', monospace",
    source: 'https://www.fontspring.com/trends',
  },
];

export function getGoogleFontsCssHref(font: TrendFont): string | null {
  if (!font.googleFontsUrl) return null;

  const family = font.name.replace(/ /g, '+');
  const weight = font.weight;

  if (weight.includes(' ')) {
    const [min, max] = weight.split(' ');
    return `https://fonts.googleapis.com/css2?family=${family}:wght@${min}..${max}&display=swap`;
  }

  return `https://fonts.googleapis.com/css2?family=${family}:wght@${weight}&display=swap`;
}
