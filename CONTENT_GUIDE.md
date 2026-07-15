## 매달 트렌드 업데이트 방법

### 신규 트렌드 추가 (매월 1일)

1. `src/data/trends.ts` 열기
2. 새 트렌드 객체를 배열 맨 위에 추가 (또는 `src/data/trends-new.ts`에 추가 후 `trends.ts`에서 import)
3. `isNew: true`, `publishedAt: "2026-MM"` 으로 설정
4. git push → Vercel 자동 배포

### 기존 트렌드 수정 (매월 15일)

1. 해당 트렌드 찾아서 `description`, `brands` 업데이트
2. `updatedAt`을 오늘 날짜로 변경
3. git push

### 트렌드 아카이브 (분기말)

1. `status`를 `'fading'`으로 변경
2. `isNew: false`로 설정
3. 다음 분기에 완전히 제거하거나 `archived: true` 추가

### isNew 자동 해제

- `publishedAt`이 2개월 이상 지난 트렌드는 자동으로 `isNew: false` 처리됨
  (`useMonthlyUpdate` 훅이 렌더링 시점 기준으로 계산)
