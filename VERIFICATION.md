# Phase 7 — 전체 연결 & 검증 체크리스트

2026 디자인 트렌드 사이트의 Phase 1–7 완료 상태와 PRD 수용 기준 검증 가이드입니다.

---

## 아키텍처 연결도

```
index.html
  └─ theme-init.js (FOUC 방지)
  └─ main.tsx
       └─ App.tsx
            ├─ Header → ThemeToggle → useTheme → lib/theme
            ├─ Hero → KineticText (framer-motion) + getMeta/getTrendCount
            ├─ TrendsSection (lazy)
            │    ├─ CategoryFilter (tablist / aria-selected)
            │    └─ TrendGrid → TrendCard → getTrendsByCategory
            ├─ TrendPreviewModal (lazy, ESC 닫기)
            │    └─ TrendPreviewRenderer → 10× CSS/SVG Preview
            └─ Footer → getMeta
```

---

## 자동 검증 명령

```powershell
cd C:\Users\user\study
npm install
npm run verify          # lint + 단위 테스트 + 빌드
npm run test:e2e        # Playwright E2E (빌드 후 preview 서버)
npm run dev             # 수동 확인
```

| 명령 | 검증 범위 |
|------|-----------|
| `npm run test:run` | 데이터 레이어, 필터 로직, 테마 lib, 프리뷰 매핑, HTTPS URL |
| `npm run test:e2e` | PRD 사용자 흐름 8건 (Playwright) |
| `npm run build` | TypeScript 컴파일 + 프로덕션 번들 |
| `npm run lint` | ESLint 정적 분석 |

---

## PRD §8 수용 기준 (Acceptance Criteria)

| # | 시나리오 | 자동 | 수동 확인 방법 |
|---|----------|------|----------------|
| AC-1 | 3초 이내 히어로 + 카드 그리드 표시 | E2E `AC#1` | `npm run dev` → Network Slow 3G 없이 로드 |
| AC-2 | 「모션」필터 시 모션 카드만 표시 | E2E `AC#2` + Unit | 탭 클릭 후 카드 수 · 이름 확인 |
| AC-3 | 카드 클릭 → 라이브 프리뷰 표시 | E2E `AC#3` | 10개 트렌드 각각 프리뷰 동작 확인 |
| AC-4 | ESC → 모달 닫힘 | E2E `AC#4` | 키보드만으로 닫기 테스트 |
| AC-5 | 시스템 다크모드 → 다크 테마 자동 적용 | — | OS 다크모드 ON → 새로고침 → 배경 `#0a0a0f` |
| AC-6 | 모바일 ≤767px → 카드 1열 | E2E `AC#6` | DevTools 375px → grid 1 column |
| AC-7 | reduced-motion → 애니메이션 비활성 | — | OS 「애니메이션 끄기」→ 히어로·프리뷰 정지 |

### AC-5 수동 절차
1. Windows: 설정 → 개인 설정 → 색 → 다크
2. `localStorage`에 `theme-preference` 없음 확인 (시스템 모드)
3. 새로고침 → `html[data-theme="dark"]` 확인

### AC-7 수동 절차
1. Windows: 설정 → 접근성 → 시각 효과 → 애니메이션 끄기
2. `html[data-reduced-motion="true"]` 확인
3. 히어로 글자 웨이브 · 도파민 그라디언트 회전 정지 확인

---

## PRD §6 기능 요구사항

| ID | 요구사항 | 상태 | 구현 위치 |
|----|----------|------|-----------|
| FR-1 | 트렌드 카드 10개 (이름·설명·미리보기·태그·난이도) | ✅ | `TrendCard.tsx`, `trends.json` |
| FR-2 | 카테고리 필터 (단일 선택) | ✅ | `CategoryFilter.tsx` |
| FR-3 | 라이브 시연 프리뷰 (ESC 닫기) | ✅ | `previews/*`, `TrendPreviewModal.tsx` |
| FR-4 | 반응형 1/2/4열 | ✅ | `trends.css` (`--grid-columns-*`) |
| FR-5 | 다크모드 (시스템 + 토글) | ✅ | `theme-init.js`, `ThemeToggle` |
| FR-6 | 출처 링크 `noopener noreferrer` | ✅ | `TrendCard`, E2E 검증 |

---

## PRD §7 비기능 요구사항

| 영역 | 요구 | 상태 | 비고 |
|------|------|------|------|
| 성능 | Lighthouse ≥90, LCP ≤2.5s, JS ≤200KB gzip | ⬜ 수동 | `npm run build` 후 Lighthouse 실행 |
| 성능 | WebP + lazy load | ✅ | 이미지 없음; 섹션·모달 `React.lazy` |
| 접근성 | WCAG 2.1 AA | ⬜ 수동 | skip link, focus ring, aria tabs, sr-only |
| 접근성 | reduced-motion | ✅ | `motion.css`, `theme-init.js`, hooks |
| 보안 | CSP + 보안 헤더 | ✅ | `vercel.json`, `public/_headers` |
| 보안 | 외부 링크 noopener | ✅ | 단위·E2E 테스트 |
| 모니터링 | GA4 / Plausible | ⏸ Phase 2 | PRD 범위 외 (이번 작업 미포함) |
| 모니터링 | Sentry | ⏸ Phase 2 | PRD 범위 외 |

### Lighthouse 수동 실행
```powershell
npm run build
npm run preview
# Chrome DevTools → Lighthouse → Performance + Accessibility + SEO
```

---

## 10개 프리뷰 시연 체크리스트

| # | 트렌드 | previewType | CSS/SVG 시연 | 확인 |
|---|--------|-------------|--------------|------|
| 1 | 도파민 컬러 | `dopamine-gradient` | conic-gradient 회전 + SVG 링 | ⬜ |
| 2 | 키네틱 타이포 | `kinetic-text` | 글자 wave animation | ⬜ |
| 3 | 인터랙티브 3D | `css-3d` | CSS perspective cube | ⬜ |
| 4 | AI 코파일럿 | `ai-copilot` | ghost text + blink cursor | ⬜ |
| 5 | 마이크로 딜라이트 | `micro-delight` | 클릭 confetti | ⬜ |
| 6 | 노스탤지어 레트로 | `retro` | SVG 픽셀 + CRT 스캔라인 | ⬜ |
| 7 | 글래스모피즘 | `glass` | backdrop-filter blur | ⬜ |
| 8 | 브루탈리스트 | `brutalist` | 흑백 그리드 타이포 | ⬜ |
| 9 | 접근성 퍼스트 | `accessibility` | Bad/Good 대비 + focus | ⬜ |
| 10 | MX | `mx-agent` | 에이전트 터미널 UI | ⬜ |

---

## 크로스 브라우저 · 디바이스 (PRD §9 수동)

| 환경 | 확인 항목 | ⬜ |
|------|-----------|-----|
| Chrome 최신 | 전체 흐름 | ⬜ |
| Firefox 최신 | 필터 + 모달 | ⬜ |
| Safari 최신 | glass `backdrop-filter` | ⬜ |
| Edge 최신 | 테마 FOUC 없음 | ⬜ |
| iPhone 14 (375px) | 1열 그리드 | ⬜ |
| iPad (768px) | 2열 그리드 | ⬜ |
| Desktop (1280px+) | 4열 그리드 | ⬜ |
| VoiceOver / NVDA | 히어로 sr-only, tab 필터 | ⬜ |

---

## Phase 완료 현황

| Phase | 내용 | 상태 |
|-------|------|------|
| 1 | 프로젝트 뼈대, CSS 변수 | ✅ |
| 2 | TypeScript 타입 + 10개 트렌드 데이터 | ✅ |
| 3 | 히어로 키네틱 타이포 (Framer Motion) | ✅ |
| 4 | 필터 탭 + 카드 그리드 (a11y, 반응형) | ✅ |
| 5 | 10개 CSS/SVG 라이브 프리뷰 | ✅ |
| 6 | FOUC 방지, reduced-motion, lazy, 보안 헤더 | ✅ |
| 7 | 전체 연결 + 검증 체크리스트 | ✅ |

---

## 알려진 제한 · 향후 작업 (PRD 범위 외)

- 사용자 북마크 / 로그인 (Phase 2)
- CMS 관리자 패널 (Phase 2)
- GA4 · Plausible · Sentry 연동
- 다국어 (Phase 3)
- WebP 이미지 에셋 (현재 CSS/SVG 기반 시연)

---

## 배포 전 최종 체크

- [ ] `npm run verify` 통과
- [ ] `npm run test:e2e` 통과
- [ ] 10개 프리뷰 수동 확인
- [ ] AC-5 다크모드 FOUC 없음
- [ ] AC-7 reduced-motion 확인
- [ ] Lighthouse Performance ≥90 (목표)
- [ ] `vercel.json` / `_headers` 배포 환경에 적용
