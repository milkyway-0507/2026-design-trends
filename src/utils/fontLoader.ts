const loadedFonts = new Set<string>();

export function loadFont(url: string): Promise<void> {
  if (loadedFonts.has(url)) return Promise.resolve();

  return new Promise((resolve) => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = url;
    link.onload = () => {
      loadedFonts.add(url);
      resolve();
    };
    link.onerror = () => resolve();
    document.head.appendChild(link);
  });
}

export const FONT_URLS = {
  instrumentSerif:
    'https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap',
  bricolageGrotesque:
    'https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@200;400;700;800&display=swap',
  martianMono:
    'https://fonts.googleapis.com/css2?family=Martian+Mono:wght@400;700&display=swap',
  fragmentMono:
    'https://fonts.googleapis.com/css2?family=Fragment+Mono&display=swap',
  syne:
    'https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&display=swap',

  notoSansKR:
    'https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&display=swap',
  notoSerifKR:
    'https://fonts.googleapis.com/css2?family=Noto+Serif+KR:wght@300;400;700&display=swap',

  notoSansJP:
    'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;700&display=swap',
  notoSerifJP:
    'https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@300;400;700&display=swap',
  mPlusRounded1c:
    'https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@400;700&display=swap',
  zenKakuGothicNew:
    'https://fonts.googleapis.com/css2?family=Zen+Kaku+Gothic+New:wght@300;400;500;700&display=swap',
  shipporiMincho:
    'https://fonts.googleapis.com/css2?family=Shippori+Mincho:wght@400;500;700&display=swap',

  pretendard:
    'https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css',
  suit:
    'https://cdn.jsdelivr.net/gh/sun-typeface/SUIT@2/fonts/static/woff2/SUIT.css',
  spoqaHanSansNeo:
    'https://cdn.jsdelivr.net/gh/spoqa/spoqa-han-sans@latest/css/SpoqaHanSansNeo.css',
} as const;
