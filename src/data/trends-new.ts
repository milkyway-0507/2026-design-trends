import type { Trend } from '@/types';

export const newTrends: Trend[] = [
  {
    id: 'functional-minimalism',
    nameKo: '기능적 미니멀리즘',
    nameEn: 'Functional Minimalism',
    tagline: '빠른 로딩과 명확한 CTA로 시선을 방해하지 않는 UI.',
    description:
      '과도한 애니메이션·자동재생 영상의 퇴장. 빠른 로딩, 명확한 CTA, 시선을 방해하지 않는 UI가 2026년의 기준이 됐다.',
    detailDescription:
      "기능적 미니멀리즘은 '예쁘지만 느린' 사이트에서 '빠르고 명확한' 사이트로의 패러다임 전환입니다. 히어로 섹션의 자동재생 영상, 불필요한 패럴랙스, 장식용 마이크로 인터랙션을 과감히 제거하고, 정보 위계와 단일 CTA에 집중합니다. Linear·Stripe·Notion처럼 SaaS 리더들이 채택한 이 방식은 Lighthouse 성능 점수와 전환율을 동시에 끌어올리며, 모바일 퍼스트 환경에서 특히 효과적입니다. CSS와 HTML 구조를 단순화해 유지보수 비용도 줄어듭니다.",
    categories: ['layout'],
    difficulty: 'easy',
    keywords: ['미니멀', '성능', 'CTA', '로딩 속도', '정보 위계'],
    colors: [
      { name: 'Slate Mist', hex: '#94A3B8', role: 'primary' },
      { name: 'Cool Gray', hex: '#64748B', role: 'secondary' },
      { name: 'Cloud White', hex: '#F8FAFC', role: 'background' },
      { name: 'Ink Black', hex: '#0F172A', role: 'neutral' },
      { name: 'Signal Blue', hex: '#3B82F6', role: 'accent' },
    ],
    brands: [
      {
        name: 'Linear',
        context: '불필요한 장식 없이 이슈 트래킹 핵심 기능에만 집중한 초경량 인터페이스.',
        url: 'https://linear.com',
      },
      {
        name: 'Stripe',
        context: '결제 플로우에서 단계별 명확한 CTA와 여백 중심 레이아웃으로 전환율을 극대화합니다.',
        url: 'https://stripe.com',
      },
      {
        name: 'Notion',
        context: '블록 기반 에디터에서 콘텐츠와 기능만 남기고 UI 크롬을 최소화했습니다.',
        url: 'https://notion.so',
      },
    ],
    sources: [
      {
        title: 'Web Design Trends 2026',
        url: 'https://madegooddesigns.com/web-design-trends-2026/',
        publisher: 'Made Good Designs',
      },
    ],
    previewType: 'brutalist',
    lastUpdated: '2026-07-13',
    publishedAt: '2026-07',
    updatedAt: '2026-07-13',
    isNew: true,
    status: 'peak',
    month: '7월 신규',
  },
  {
    id: 'mature-dark-mode',
    nameKo: '다크모드 성숙기',
    nameEn: 'Mature Dark Mode',
    tagline: 'elevation 토큰과 모드별 최적화로 완성된 다크 시스템.',
    description:
      '단순히 색을 반전시키는 수준을 넘어, 표면별 elevation 토큰 체계와 모드별 최적화된 그림자·테두리를 갖춘 성숙한 다크 시스템.',
    detailDescription:
      "2026년의 다크모드는 '검은 배경 + 흰 글자'를 넘어 디자인 시스템의 핵심 축입니다. surface-1~surface-5 elevation 토큰으로 깊이감을 표현하고, 라이트·다크 모드 각각에 최적화된 box-shadow와 border-opacity를 정의합니다. Vercel·GitHub·Linear는 색상 반전이 아닌 '다크 전용 팔레트'를 별도 설계하며, WCAG 4.5:1 대비를 유지하면서 눈의 피로를 줄이는 muted accent 색상을 사용합니다. OS 설정 연동과 수동 토글 모두를 지원하는 것이 기본입니다.",
    categories: ['visual'],
    difficulty: 'medium',
    keywords: ['다크모드', 'elevation', '디자인 토큰', '표면 계층', '대비'],
    colors: [
      { name: 'Slate Surface', hex: '#475569', role: 'primary' },
      { name: 'Deep Navy', hex: '#1E293B', role: 'background' },
      { name: 'Elevated Gray', hex: '#334155', role: 'secondary' },
      { name: 'Soft White', hex: '#F1F5F9', role: 'neutral' },
      { name: 'Accent Cyan', hex: '#22D3EE', role: 'accent' },
    ],
    brands: [
      {
        name: 'Vercel',
        context: '다크 배경에 미세한 elevation 단계와 글로우 accent로 깊이감 있는 대시보드를 구현합니다.',
        url: 'https://vercel.com',
      },
      {
        name: 'GitHub',
        context: 'Primer 디자인 시스템의 다크 테마는 표면별 토큰과 semantic color를 체계적으로 정의합니다.',
        url: 'https://github.com',
      },
      {
        name: 'Linear',
        context: '다크모드 전용 그림자·보더 토큰으로 UI 요소 간 시각적 계층을 명확히 구분합니다.',
        url: 'https://linear.com',
      },
    ],
    sources: [
      {
        title: 'Web Design Trends 2026',
        url: 'https://madegooddesigns.com/web-design-trends-2026/',
        publisher: 'Made Good Designs',
      },
    ],
    previewType: 'glass',
    lastUpdated: '2026-07-13',
    publishedAt: '2026-07',
    updatedAt: '2026-07-13',
    isNew: true,
    status: 'peak',
    month: '7월 신규',
  },
  {
    id: 'predictive-ux',
    nameKo: '예측형 UX',
    nameEn: 'Predictive UX',
    tagline: '사용자 행동 전에 인터페이스가 먼저 다음 단계를 제안합니다.',
    description:
      '사용자가 다음 행동을 하기 전에 인터페이스가 먼저 예측한다. 자동완성, 스마트 폼 채우기, 다음 스텝 예측 등이 표준이 됐다.',
    detailDescription:
      "예측형 UX는 AI와 휴리스틱을 결합해 사용자의 의도를 선행 파악하는 패턴입니다. 검색 자동완성, 폼 필드 스마트 채우기, '다음에 할 일' 제안 카드, 컨텍스트 기반 단축키 노출 등이 대표적입니다. Google·Notion AI·Webflow는 사용자 행동 로그와 세션 맥락을 분석해 UI를 동적으로 재배치하며, 핵심은 '예측이 틀렸을 때' 쉽게 되돌릴 수 있는 escape hatch를 제공하는 것입니다. 과도한 자동화는 오히려 신뢰를 해치므로, 제안 근거를 투명하게 보여주는 것이 2026년 모범 사례입니다.",
    categories: ['ai-ux'],
    difficulty: 'advanced',
    keywords: ['예측 UI', '자동완성', '스마트 폼', '맥락 인식', 'AI 제안'],
    colors: [
      { name: 'Sky Blue', hex: '#0EA5E9', role: 'primary' },
      { name: 'Deep Ocean', hex: '#0369A1', role: 'secondary' },
      { name: 'Ice White', hex: '#F0F9FF', role: 'background' },
      { name: 'Slate Ink', hex: '#1E293B', role: 'neutral' },
      { name: 'Glow Cyan', hex: '#38BDF8', role: 'accent' },
    ],
    brands: [
      {
        name: 'Google',
        context: '검색·Gmail·Maps에서 사용자 입력 패턴을 학습해 다음 액션을 선제적으로 제안합니다.',
        url: 'https://google.com',
      },
      {
        name: 'Notion AI',
        context: '문서 작성 중 다음 문단·템플릿·데이터베이스 필드를 AI가 예측해 인라인으로 제안합니다.',
        url: 'https://notion.so',
      },
      {
        name: 'Webflow',
        context: '디자인 에디터에서 레이아웃·컴포넌트 배치를 AI가 추천해 제작 시간을 단축합니다.',
        url: 'https://webflow.com',
      },
    ],
    sources: [
      {
        title: 'UX/UI Design Trends for 2026',
        url: 'https://www.webfx.com/blog/web-design/ux-ui-trends/',
        publisher: 'WebFX',
      },
    ],
    previewType: 'ai-copilot',
    lastUpdated: '2026-07-13',
    publishedAt: '2026-07',
    updatedAt: '2026-07-13',
    isNew: true,
    status: 'rising',
    month: '7월 신규',
  },
  {
    id: 'digital-texture',
    nameKo: '디지털 텍스처',
    nameEn: 'Digital Texture',
    tagline: '클레이·젤리·크롬 질감으로 촉각적 UI를 되살립니다.',
    description:
      '플랫 디자인 이후 시대. 버튼이 젤리처럼 탄성 있고, 카드가 클레이 질감을 가지며, 아이콘이 크롬 광택을 낸다. 촉각적 UI의 귀환.',
    detailDescription:
      "디지털 텍스처는 skeuomorphism의 정교한 재해석입니다. CSS filter, SVG noise, 3D lighting으로 버튼에 젤리 탄성, 카드에 클레이 질감, 아이콘에 크롬 반사광을 표현합니다. Spotify의 Wrapped UI, Apple Vision Pro의 glass/clay 하이브리드, Figma의 3D 아이콘 시스템이 대표 사례입니다. flat 2.0의 지루함을 넘어 '만지고 싶은' 인터페이스를 만들되, 과도한 사실주의는 성능과 접근성을 해치므로 핵심 인터랙션 포인트에만 선택적으로 적용하는 것이 2026년 접근법입니다.",
    categories: ['visual'],
    difficulty: 'advanced',
    keywords: ['클레이모피즘', '젤리 UI', '크롬', '촉각 디자인', '3D 질감'],
    colors: [
      { name: 'Soft Violet', hex: '#A78BFA', role: 'primary' },
      { name: 'Lavender Glow', hex: '#C4B5FD', role: 'secondary' },
      { name: 'Chrome Silver', hex: '#E2E8F0', role: 'accent' },
      { name: 'Clay Warm', hex: '#F5D0FE', role: 'accent' },
      { name: 'Deep Purple', hex: '#5B21B6', role: 'background' },
    ],
    brands: [
      {
        name: 'Spotify',
        context: 'Wrapped 캠페인에서 3D 클레이 오브젝트와 젤리 버튼으로 몰입형 경험을 제공합니다.',
        url: 'https://spotify.com',
      },
      {
        name: 'Apple Vision Pro',
        context: 'glass·aluminum·fabric 질감을 디지털 UI에 재현해 공간 computing의 촉각적 피드백을 구현합니다.',
        url: 'https://apple.com',
      },
      {
        name: 'Figma',
        context: '3D 아이콘과 material preset으로 디자이너가 텍스처 UI를 쉽게 프로토타이핑할 수 있게 합니다.',
        url: 'https://figma.com',
      },
    ],
    sources: [
      {
        title: '8 Top-Notch UX/UI Design Trends 2026',
        url: 'https://medium.com/@focotik.agency/8-top-notch-ux-ui-design-trends-2026',
        publisher: 'Focotik Agency',
      },
    ],
    previewType: 'css-3d',
    lastUpdated: '2026-07-13',
    publishedAt: '2026-07',
    updatedAt: '2026-07-13',
    isNew: true,
    status: 'rising',
    month: '7월 신규',
  },
  {
    id: 'sound-design-ux',
    nameKo: '사운드 디자인 UX',
    nameEn: 'Sound Design UX',
    tagline: '알림·클릭·성공음이 브랜드 정체성의 일부가 됩니다.',
    description:
      '알림음, 버튼 클릭음, 성공/오류 사운드가 브랜드 정체성의 일부가 됐다. 무음 환경 대응 토글과 함께 설계하는 것이 기본.',
    detailDescription:
      "2026년 UX에서 사운드는 장식이 아닌 기능적 피드백 채널입니다. 버튼 클릭, 알림 도착, 작업 성공/실패, 레벨업 등 각 이벤트에 브랜드 톤앤매너를 반영한 짧은 사운드를 매핑합니다. Duolingo의 정답 효과음, Slack의 알림음, Apple의 시스템 사운드가 벤치마크입니다. 필수 구현 사항은 (1) 전역 사운드 on/off 토글, (2) OS '무음 모드' 존중, (3) `prefers-reduced-motion`과 연동한 사운드 비활성화, (4) 시각적 fallback(햅틱·애니메이션) 병행입니다.",
    categories: ['interaction'],
    difficulty: 'medium',
    keywords: ['사운드 UX', '오디오 피드백', '브랜드 사운드', '햅틱', '접근성'],
    colors: [
      { name: 'Amber Glow', hex: '#F59E0B', role: 'primary' },
      { name: 'Warm Gold', hex: '#FBBF24', role: 'secondary' },
      { name: 'Deep Amber', hex: '#D97706', role: 'accent' },
      { name: 'Sound Wave', hex: '#FEF3C7', role: 'background' },
      { name: 'Charcoal', hex: '#292524', role: 'neutral' },
    ],
    brands: [
      {
        name: 'Duolingo',
        context: '정답·오답·스트릭 달성마다 고유 사운드로 학습 동기를 강화합니다.',
        url: 'https://duolingo.com',
      },
      {
        name: 'Slack',
        context: '커스터마이징 가능한 알림음으로 팀 커뮤니케이션의 브랜드 경험을 형성합니다.',
        url: 'https://slack.com',
      },
      {
        name: 'Apple',
        context: '시스템 전반의 사운드 언어(Siri, 알림, 키보드)를 일관된 UX 피드백으로 통합합니다.',
        url: 'https://apple.com',
      },
    ],
    sources: [
      {
        title: 'Web Design Trends 2026',
        url: 'https://muz.li/blog/web-design-trends-2026/',
        publisher: 'Muz.li',
      },
    ],
    previewType: 'micro-delight',
    lastUpdated: '2026-07-13',
    publishedAt: '2026-07',
    updatedAt: '2026-07-13',
    isNew: true,
    status: 'rising',
    month: '7월 신규',
  },
  {
    id: 'nature-distilled',
    nameKo: '네이처 디스틸드',
    nameEn: 'Nature Distilled',
    tagline: '어스 톤과 뮤트 팔레트로 디지털에 온기와 진정성을 더합니다.',
    description:
      "2026 팬톤 컬러 오브 더 이어 'Cloud Dancer'를 필두로, 피부·목재·흙의 뮤트된 어스 톤이 디지털에 온기와 진정성을 더한다.",
    detailDescription:
      "네이처 디스틸드는 디지털 화면의 차가움을 자연에서 추출한 색으로 중화하는 컬러 트렌드입니다. Pantone 2026 'Cloud Dancer'(오프화이트 베이지)를 중심으로, 테라코타·세이지·샌드·웜 그레이 등 저채도 어스 톤을 배경·텍스처·일러스트에 활용합니다. Gormley & Gamble, Patagonia, Aesop처럼 지속가능성·웰니스·럭셔리 브랜드에서 두드러지며, AI 시대의 '인간적 따뜻함'을 시각적으로 전달하는 핵심 수단입니다. 고채도 accent는 최소화하고, 자연광 그림자 톤을 CSS gradient로 재현하는 패턴이 보편화되고 있습니다.",
    categories: ['color'],
    difficulty: 'easy',
    keywords: ['어스 톤', 'Cloud Dancer', '뮤트 컬러', '웰니스', '자연'],
    colors: [
      { name: 'Warm Sand', hex: '#D4A574', role: 'primary' },
      { name: 'Cloud Dancer', hex: '#F0EBE3', role: 'background' },
      { name: 'Terracotta', hex: '#C67B5C', role: 'secondary' },
      { name: 'Sage Green', hex: '#9CAF88', role: 'accent' },
      { name: 'Earth Brown', hex: '#8B7355', role: 'neutral' },
    ],
    brands: [
      {
        name: 'Gormley & Gamble',
        context: '테일러링 브랜드 사이트에서 어스 톤 배경과 자연광 사진으로 프리미엄 진정성을 표현합니다.',
        url: 'https://gormleyandgamble.com',
      },
      {
        name: 'Patagonia',
        context: '아웃도어 브랜드 아이덴티티에 세이지·샌드·스톤 팔레트를 일관되게 적용합니다.',
        url: 'https://patagonia.com',
      },
      {
        name: 'Aesop',
        context: '미니멀 레이아웃과 뮤트 베이지·그레이 톤으로 스킨케어의 자연주의를 시각화합니다.',
        url: 'https://aesop.com',
      },
    ],
    sources: [
      {
        title: 'The 11 Biggest Web Design Trends of 2026',
        url: 'https://www.wix.com/blog/web-design-trends',
        publisher: 'Wix Blog',
      },
    ],
    previewType: 'dopamine-gradient',
    lastUpdated: '2026-07-13',
    publishedAt: '2026-07',
    updatedAt: '2026-07-13',
    isNew: true,
    status: 'rising',
    month: '7월 신규',
  },
  {
    id: 'variable-font',
    nameKo: '가변 폰트',
    nameEn: 'Variable Font',
    tagline: '하나의 폰트 파일로 살아있는 타이포그래피를 구현합니다.',
    description:
      '하나의 폰트 파일로 굵기·너비·기울기를 실시간으로 변형한다. 스크롤·마우스 위치·다크모드에 반응하는 살아있는 타이포그래피.',
    detailDescription:
      'Variable Font(가변 폰트)는 wght, wdth, slnt, opsz 등 CSS axis를 통해 하나의 @font-face로 무한한 타이포그래피 변형을 제공합니다. 스크롤 진행률에 따라 font-weight가 300→900으로 변하거나, 호버 시 letter-spacing이 확장되는 인터랙션이 2026년 히어로 섹션의 표준입니다. Google Fonts의 Variable Font 컬렉션, NYT의 에디토리얼 헤드라인, The Verge의 반응형 타이틀이 대표 사례입니다. font-variation-settings와 @property를 조합하면 60fps 부드러운 타이포 애니메이션을 JS 없이 구현할 수 있습니다.',
    categories: ['typography'],
    difficulty: 'medium',
    keywords: ['Variable Font', 'font-variation-settings', '반응형 타이포', 'wght axis', 'CSS'],
    colors: [
      { name: 'Indigo Soft', hex: '#818CF8', role: 'primary' },
      { name: 'Deep Indigo', hex: '#4338CA', role: 'secondary' },
      { name: 'Periwinkle', hex: '#A5B4FC', role: 'accent' },
      { name: 'Paper White', hex: '#FAFAFA', role: 'background' },
      { name: 'Type Black', hex: '#18181B', role: 'neutral' },
    ],
    brands: [
      {
        name: 'Google Fonts',
        context: 'Inter, Roboto Flex 등 variable font 컬렉션으로 웹 타이포그래피 진입 장벽을 낮췄습니다.',
        url: 'https://fonts.google.com',
      },
      {
        name: 'NYT',
        context: 'Cheltanham 등 custom variable font로 디지털 에디토리얼의 위계와 품격을 유지합니다.',
        url: 'https://nytimes.com',
      },
      {
        name: 'The Verge',
        context: '히어로 헤드라인에서 viewport 크기에 따라 font-weight와 width가 동적으로 변합니다.',
        url: 'https://theverge.com',
      },
    ],
    sources: [
      {
        title: 'Web Design Trends 2026',
        url: 'https://muz.li/blog/web-design-trends-2026/',
        publisher: 'Muz.li',
      },
    ],
    previewType: 'kinetic-text',
    lastUpdated: '2026-07-13',
    publishedAt: '2026-07',
    updatedAt: '2026-07-13',
    isNew: true,
    status: 'peak',
    month: '7월 신규',
  },
  {
    id: 'scroll-storytelling',
    nameKo: '스크롤 스토리텔링',
    nameEn: 'Scroll Storytelling',
    tagline: '스크롤이 내러티브 컨트롤러가 되는 롱폼 경험.',
    description:
      '스크롤이 곧 내러티브 컨트롤러가 된다. 가로 스크롤, 패럴랙스, 핀 섹션으로 콘텐츠를 영화처럼 전개하는 롱폼 경험.',
    detailDescription:
      '스크롤 스토리텔링은 Scroll-driven Animations API와 GSAP ScrollTrigger를 활용해 스크롤 입력을 시간축으로 변환하는 기법입니다. Apple 제품 페이지의 핀(pin) 섹션, Stripe의 가로 스크롤 내러티브, Webflow 쇼케이스의 패럴랙스 레이어가 업계 표준입니다. 2026년에는 `animation-timeline: scroll()` CSS 속성으로 JS 의존도가 줄었지만, `prefers-reduced-motion` 환경에서는 정적 fallback이 필수입니다. 핵심은 스크롤 매핑이 콘텐츠 이해를 돕는지, 아니면 장식인지를 구분하는 것입니다.',
    categories: ['motion'],
    difficulty: 'advanced',
    keywords: ['스크롤 애니메이션', '패럴랙스', '핀 섹션', 'Scroll-driven', '내러티브'],
    colors: [
      { name: 'Emerald', hex: '#34D399', role: 'primary' },
      { name: 'Forest Green', hex: '#059669', role: 'secondary' },
      { name: 'Mint Glow', hex: '#6EE7B7', role: 'accent' },
      { name: 'Story Black', hex: '#0A0A0A', role: 'background' },
      { name: 'Fog White', hex: '#ECFDF5', role: 'neutral' },
    ],
    brands: [
      {
        name: 'Apple',
        context: 'iPhone·Mac 제품 페이지에서 스크롤에 따라 3D 제품이 회전·분해되는 시네마틱 내러티브.',
        url: 'https://apple.com',
      },
      {
        name: 'Stripe',
        context: 'Press·Sessions 페이지에서 가로 스크롤과 핀 섹션으로 복잡한 정보를 서사적으로 전달합니다.',
        url: 'https://stripe.com',
      },
      {
        name: 'Webflow',
        context: '노코드로 scroll-triggered 애니메이션을 구현해 에이전시 쇼케이스의 표준 도구가 됐습니다.',
        url: 'https://webflow.com',
      },
    ],
    sources: [
      {
        title: 'Web Design Trends 2026',
        url: 'https://uxpilot.ai/blogs/web-design-trends-2026',
        publisher: 'UX Pilot',
      },
    ],
    previewType: 'kinetic-text',
    lastUpdated: '2026-07-13',
    publishedAt: '2026-07',
    updatedAt: '2026-07-13',
    isNew: true,
    status: 'peak',
    month: '7월 신규',
  },
  {
    id: 'dynamic-personalization',
    nameKo: '다이나믹 개인화 UI',
    nameEn: 'Dynamic Personalization',
    tagline: 'AI가 사용자 맥락에 따라 레이아웃과 콘텐츠를 실시간 큐레이션합니다.',
    description:
      '사용자 행동·시간대·위치에 따라 레이아웃과 콘텐츠 우선순위가 실시간으로 바뀐다. AI가 UX 큐레이터 역할을 한다.',
    detailDescription:
      "다이나믹 개인화 UI는 A/B 테스트를 넘어 개별 사용자 세션 단위로 인터페이스를 재구성하는 패턴입니다. Spotify의 Discover Weekly UI, Netflix의 행 기반 추천 레이아웃, Myntra FWD의 시간대별 홈피드가 대표 사례입니다. AI 모델이 사용자의 과거 행동·디바이스·시간대·위치를 입력받아 카드 순서, CTA 문구, 배너 이미지를 실시간 결정합니다. 2026년 핵심 과제는 '왜 이 콘텐츠가 보이는가'를 사용자에게 설명하는 투명성과, 개인화 필터 버블을 벗어날 수 있는 탐색 경로를 유지하는 것입니다.",
    categories: ['ai-ux'],
    difficulty: 'advanced',
    keywords: ['개인화', '추천 UI', 'AI 큐레이션', '적응형 레이아웃', '리텐션'],
    colors: [
      { name: 'Pink Glow', hex: '#F472B6', role: 'primary' },
      { name: 'Rose Deep', hex: '#DB2777', role: 'secondary' },
      { name: 'Blush Light', hex: '#FBCFE8', role: 'accent' },
      { name: 'Personal White', hex: '#FFF1F2', role: 'background' },
      { name: 'Midnight', hex: '#1C1917', role: 'neutral' },
    ],
    brands: [
      {
        name: 'Spotify',
        context: '홈 피드·Discover Weekly·Daily Mix를 청취 패턴에 따라 매일 다른 레이아웃으로 재구성합니다.',
        url: 'https://spotify.com',
      },
      {
        name: 'Netflix',
        context: '행(row) 순서·썸네일·카테고리를 시청 이력과 시간대에 맞춰 동적으로 배치합니다.',
        url: 'https://netflix.com',
      },
      {
        name: 'Myntra FWD',
        context: '패션 피드에서 트렌드·구매 이력·계절에 따라 상품 카드 우선순위를 AI가 실시간 조정합니다.',
        url: 'https://myntra.com',
      },
    ],
    sources: [
      {
        title: '8 Top-Notch UX/UI Design Trends 2026',
        url: 'https://medium.com/@focotik.agency/8-top-notch-ux-ui-design-trends-2026',
        publisher: 'Focotik Agency',
      },
    ],
    previewType: 'mx-agent',
    lastUpdated: '2026-07-13',
    publishedAt: '2026-07',
    updatedAt: '2026-07-13',
    isNew: true,
    status: 'rising',
    month: '7월 신규',
  },
  {
    id: 'cyberpunk-dark',
    nameKo: '사이버펑크 다크',
    nameEn: 'Cyberpunk Dark',
    tagline: '딥 블랙 위에 네온 레이어를 쌓은 미래적 다크 팔레트.',
    description:
      '딥 블랙 배경에 네온 핑크·일렉트릭 블루·홀로그래픽 실버를 레이어링한 미래적 팔레트. 다크모드의 맥시멀리스트 버전.',
    detailDescription:
      "사이버펑크 다크는 mature dark mode의 반대 극 — 채도 높은 accent와 딥 블랙 배경의 극적 대비입니다. 네온 핑크(#FF2D78), 일렉트릭 블루(#0EA5E9), 홀로그래픽 실버 gradient를 border·glow·text-shadow에 레이어링합니다. Vercel·Raycast·Linear의 다크모드는 이 미학을 SaaS UI에 적용한 사례로, 개발자·크리에이터 타겟 제품에서 '기술적 미래감'을 전달합니다. 구현 시 glow 효과는 성능에 영향을 주므로 CSS box-shadow와 pseudo-element로 제한적으로 사용하고, WCAG 대비 검증을 반드시 수행해야 합니다.",
    categories: ['color'],
    difficulty: 'medium',
    keywords: ['사이버펑크', '네온', '다크 팔레트', '글로우', '홀로그래픽'],
    colors: [
      { name: 'Electric Violet', hex: '#7C3AED', role: 'primary' },
      { name: 'Neon Pink', hex: '#FF2D78', role: 'secondary' },
      { name: 'Electric Blue', hex: '#0EA5E9', role: 'accent' },
      { name: 'Holo Silver', hex: '#CBD5E1', role: 'accent' },
      { name: 'Void Black', hex: '#030712', role: 'background' },
    ],
    brands: [
      {
        name: 'Vercel',
        context: '다크 배경에 보라·시안 glow accent로 개발자 플랫폼의 미래적 정체성을 강화합니다.',
        url: 'https://vercel.com',
      },
      {
        name: 'Raycast',
        context: '딥 블랙 UI에 네온 highlight와 glassmorphism으로 macOS 런처의 프리미엄 경험을 제공합니다.',
        url: 'https://raycast.com',
      },
      {
        name: 'Linear',
        context: '다크모드에서 보라·파랑 glow border로 이슈 트래킹 UI에 사이버펑크 미학을 적용합니다.',
        url: 'https://linear.com',
      },
    ],
    sources: [
      {
        title: '8 Top-Notch UX/UI Design Trends 2026',
        url: 'https://medium.com/@focotik.agency/8-top-notch-ux-ui-design-trends-2026',
        publisher: 'Focotik Agency',
      },
    ],
    previewType: 'dopamine-gradient',
    lastUpdated: '2026-07-13',
    publishedAt: '2026-07',
    updatedAt: '2026-07-13',
    isNew: true,
    status: 'rising',
    month: '7월 신규',
  },
  {
    id: 'gamification-ux',
    nameKo: '게이미피케이션 UX',
    nameEn: 'Gamification UX',
    tagline: '진행 바·스트릭·뱃지가 리텐션의 핵심 인프라가 됐습니다.',
    description:
      '진행 바, 스트릭, 뱃지, 레벨업이 생산성·학습 앱의 필수 요소가 됐다. 의미 있는 보상 구조가 단순 알림보다 리텐션에 효과적임이 입증됐다.',
    detailDescription:
      "게이미피케이션 UX는 extrinsic motivation(포인트·뱃지·리더보드)과 intrinsic motivation(성취감·마스터리)을 균형 있게 설계하는 패턴입니다. Duolingo의 스트릭·XP·리그, GitHub Contributions 그래프, Notion의 템플릿 갤러리 뱃지가 대표 사례입니다. 2026년 핵심은 '공허한 게이미피케이션'을 피하고, 사용자의 실제 목표 달성과 연결된 보상 구조를 만드는 것입니다. progress bar는 0%에서 시작해 즉각 피드백을 주고, streak은 손실 회피(loss aversion)보다 성취 축하에 초점을 맞추는 윤리적 설계가 트렌드입니다.",
    categories: ['interaction'],
    difficulty: 'medium',
    keywords: ['게이미피케이션', '스트릭', '뱃지', '진행 바', '리텐션'],
    colors: [
      { name: 'Success Green', hex: '#10B981', role: 'primary' },
      { name: 'Level Gold', hex: '#FBBF24', role: 'secondary' },
      { name: 'Streak Orange', hex: '#F97316', role: 'accent' },
      { name: 'Quest White', hex: '#F0FDF4', role: 'background' },
      { name: 'XP Purple', hex: '#8B5CF6', role: 'accent' },
    ],
    brands: [
      {
        name: 'Duolingo',
        context: '스트릭·XP·리그·뱃지 시스템으로 학습 앱 게이미피케이션의 글로벌 벤치마크를 세웠습니다.',
        url: 'https://duolingo.com',
      },
      {
        name: 'GitHub',
        context: 'Contributions 그래프(잔디)로 개발 활동을 시각적 보상으로 전환해 지속적 커밋을 유도합니다.',
        url: 'https://github.com',
      },
      {
        name: 'Notion',
        context: '템플릿 갤러리·워크스페이스 마일스톤으로 생산성 도구에 성취 기반 UX를 더했습니다.',
        url: 'https://notion.so',
      },
    ],
    sources: [
      {
        title: 'UX/UI Design Trends for 2026',
        url: 'https://www.webfx.com/blog/web-design/ux-ui-trends/',
        publisher: 'WebFX',
      },
    ],
    previewType: 'micro-delight',
    lastUpdated: '2026-07-13',
    publishedAt: '2026-07',
    updatedAt: '2026-07-13',
    isNew: true,
    status: 'peak',
    month: '7월 신규',
  },
  {
    id: 'token-design-system',
    nameKo: '토큰 기반 디자인 시스템',
    nameEn: 'Token-Based Design Systems',
    tagline: 'CSS 변수 한 줄로 다크모드·브랜드·접근성을 전환합니다.',
    description:
      '색상·간격·모션 타이밍을 변수로 관리해 다크모드·브랜드 변경·접근성 설정을 CSS 한 줄로 전환한다. 확장 가능한 디자인의 인프라.',
    detailDescription:
      "토큰 기반 디자인 시스템은 color, spacing, typography, motion, elevation을 semantic token(--color-text-primary)과 primitive token(--gray-900)으로 계층화합니다. Figma Tokens, Shopify Polaris, Radix UI가 이 접근의 선두주자로, 다크모드 전환은 `data-theme=\\\"dark\\\"` 한 속성으로, 접근성 모드는 `--font-size-scale: 1.25` 토큰 오버라이드로 처리합니다. 2026년에는 Style Dictionary·Tokens Studio로 Figma↔Code 동기화가 표준이 되었으며, 디자이너-개발자 간 '토큰이 SSOT(Single Source of Truth)'라는 인식이 확립됐습니다.",
    categories: ['accessibility'],
    difficulty: 'medium',
    keywords: ['디자인 토큰', 'CSS 변수', '디자인 시스템', '다크모드', 'SSOT'],
    colors: [
      { name: 'Token Slate', hex: '#64748B', role: 'primary' },
      { name: 'System Gray', hex: '#94A3B8', role: 'secondary' },
      { name: 'Token Blue', hex: '#3B82F6', role: 'accent' },
      { name: 'Canvas Light', hex: '#F8FAFC', role: 'background' },
      { name: 'Token Dark', hex: '#1E293B', role: 'neutral' },
    ],
    brands: [
      {
        name: 'Figma Tokens',
        context: 'Figma Variables와 Tokens Studio로 디자인-코드 간 semantic token을 양방향 동기화합니다.',
        url: 'https://figma.com',
      },
      {
        name: 'Shopify Polaris',
        context: 'color·spacing·typography token 체계로 수천 개 머천트 UI의 일관성을 보장합니다.',
        url: 'https://shopify.com',
      },
      {
        name: 'Radix UI',
        context: 'headless component + CSS variable token으로 접근성·테마 커스터마이징을 분리합니다.',
        url: 'https://radix-ui.com',
      },
    ],
    sources: [
      {
        title: 'UX/UI Design Trends',
        url: 'https://elements.envato.com/learn/ux-ui-design-trends',
        publisher: 'Envato Elements',
      },
    ],
    previewType: 'accessibility',
    lastUpdated: '2026-07-13',
    publishedAt: '2026-07',
    updatedAt: '2026-07-13',
    isNew: true,
    status: 'peak',
    month: '7월 신규',
  },
  {
    id: 'hero-clarity',
    nameKo: '히어로 명료함',
    nameEn: 'Hero Clarity',
    tagline: '5초 안에 읽히는 가치 제안과 단일 CTA가 전환율을 높입니다.',
    description:
      '자동재생 영상·슬라이더·복잡한 애니메이션을 걷어낸 히어로 섹션. 5초 안에 읽히는 가치 제안 + 단일 CTA가 전환율을 높인다는 것이 증명됐다.',
    detailDescription:
      '히어로 명료함은 landing page 최적화의 2026년 결론입니다. 자동재생 hero video, carousel slider, multi-CTA 버튼을 제거하고, headline(10단어 이내) + subhead(1문장) + single primary CTA + social proof 1줄로 구성합니다. Stripe·Linear·Vercel의 랜딩 페이지는 Above the Fold에서 제품 가치를 즉시 전달하며, A/B 테스트 결과 single CTA가 multi-CTA 대비 전환율 20-40% 높다는 데이터가 업계에 공유되고 있습니다. 모바일에서는 hero 높이를 100vh 이하로 제한해 스크롤 유도를 병행합니다.',
    categories: ['layout'],
    difficulty: 'easy',
    keywords: ['히어로 섹션', '전환율', '단일 CTA', '가치 제안', '랜딩'],
    colors: [
      { name: 'Clarity White', hex: '#F8FAFC', role: 'primary' },
      { name: 'Soft Gray', hex: '#E2E8F0', role: 'secondary' },
      { name: 'CTA Blue', hex: '#2563EB', role: 'accent' },
      { name: 'Pure White', hex: '#FFFFFF', role: 'background' },
      { name: 'Headline Black', hex: '#0F172A', role: 'neutral' },
    ],
    brands: [
      {
        name: 'Stripe',
        context: '미니멀 hero에 headline + 단일 CTA + 제품 스크린샷으로 결제 플랫폼 가치를 즉시 전달합니다.',
        url: 'https://stripe.com',
      },
      {
        name: 'Linear',
        context: '다크 hero에 한 줄 headline과 primary CTA 하나로 이슈 트래킹 도구의 속도감을 표현합니다.',
        url: 'https://linear.com',
      },
      {
        name: 'Vercel',
        context: 'Above the Fold에서 deploy CTA와 간결한 copy로 개발자 전환을 극대화합니다.',
        url: 'https://vercel.com',
      },
    ],
    sources: [
      {
        title: 'Web Design Trends 2026',
        url: 'https://madegooddesigns.com/web-design-trends-2026/',
        publisher: 'Made Good Designs',
      },
    ],
    previewType: 'brutalist',
    lastUpdated: '2026-07-13',
    publishedAt: '2026-07',
    updatedAt: '2026-07-13',
    isNew: true,
    status: 'peak',
    month: '7월 신규',
  },
  {
    id: 'multimodal-interaction',
    nameKo: '멀티모달 인터랙션',
    nameEn: 'Multimodal Interaction',
    tagline: '텍스트·음성·제스처·시선이 하나의 인터페이스에서 공존합니다.',
    description:
      '텍스트·음성·제스처·시선 추적이 하나의 인터페이스에서 공존한다. Apple Vision Pro와 AI 에이전트가 이 방향을 가속화하고 있다.',
    detailDescription:
      '멀티모달 인터랙션은 단일 입력 방식(마우스+키보드)에서 벗어나 텍스트, 음성, 제스처, 시선, 터치를 맥락에 맞게 조합하는 UX 패러다임입니다. Apple Vision Pro의 eye tracking + pinch gesture, Gemini의 voice + image input, GPT-4o의 real-time audio+vision이 대표 사례입니다. 2026년 웹에서는 Web Speech API, MediaPipe hand tracking, conversational UI overlay가 점진적으로 도입되며, 핵심 설계 원칙은 (1) 입력 방식 간 seamless 전환, (2) 각 모달리티의 fallback 제공, (3) 프라이버시·동의 UX를 선행하는 것입니다.',
    categories: ['interaction'],
    difficulty: 'advanced',
    keywords: ['멀티모달', '음성 UI', '제스처', 'Vision Pro', 'AI 에이전트'],
    colors: [
      { name: 'Cyan Pulse', hex: '#06B6D4', role: 'primary' },
      { name: 'Teal Deep', hex: '#0D9488', role: 'secondary' },
      { name: 'Aqua Glow', hex: '#22D3EE', role: 'accent' },
      { name: 'Modal Dark', hex: '#0C4A6E', role: 'background' },
      { name: 'Signal White', hex: '#ECFEFF', role: 'neutral' },
    ],
    brands: [
      {
        name: 'Apple Vision Pro',
        context: '시선 추적·손 제스처·음성 명령을 spatial computing UI에서 seamless하게 통합합니다.',
        url: 'https://apple.com',
      },
      {
        name: 'Gemini',
        context: '텍스트·이미지·음성·코드를 단일 대화 인터페이스에서 멀티모달로 처리합니다.',
        url: 'https://gemini.google.com',
      },
      {
        name: 'GPT-4o',
        context: 'real-time audio·vision input으로 대화형 AI의 멀티모달 인터랙션 표준을 제시합니다.',
        url: 'https://openai.com',
      },
    ],
    sources: [
      {
        title: 'UX Design Trends & Future',
        url: 'https://codewave.com/insights/ux-design-trends-future/',
        publisher: 'Codewave',
      },
    ],
    previewType: 'mx-agent',
    lastUpdated: '2026-07-13',
    publishedAt: '2026-07',
    updatedAt: '2026-07-13',
    isNew: true,
    status: 'rising',
    month: '7월 신규',
  },
];
