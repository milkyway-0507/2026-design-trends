import { test, expect } from '@playwright/test';

test.describe('PRD 사용자 흐름 (Phase 7)', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('AC#1: 히어로 섹션과 트렌드 그리드가 표시된다', async ({ page }) => {
    await expect(page.getByRole('heading', { name: /2026 디자인 트렌드/ })).toBeVisible({
      timeout: 3000,
    });
    await expect(page.getByRole('heading', { name: '트렌드 둘러보기' })).toBeVisible({
      timeout: 3000,
    });
    await expect(page.getByRole('list', { name: /24개 트렌드/ })).toBeVisible({
      timeout: 3000,
    });
  });

  test('AC#2: 모션 필터 시 모션 카드만 표시된다', async ({ page }) => {
    await page.getByRole('tab', { name: '모션' }).click();
    await expect(page.getByRole('tab', { name: '모션' })).toHaveAttribute(
      'aria-selected',
      'true',
    );
    await expect(page.getByText('도파민 컬러')).not.toBeVisible();
    await expect(page.getByText('마이크로 딜라이트')).toBeVisible();
    await expect(page.getByText('키네틱 타이포그래피')).toBeVisible();
  });

  test('AC#3: 카드 클릭 시 라이브 프리뷰 모달이 열린다', async ({ page }) => {
    await page
      .getByRole('button', { name: '도파민 컬러 라이브 시연 보기' })
      .click();
    const dialog = page.getByRole('dialog');
    await expect(dialog).toBeVisible();
    await expect(dialog.getByRole('img')).toBeVisible();
    await expect(dialog.getByText('도파민 컬러')).toBeVisible();
  });

  test('AC#4: ESC 키로 모달이 닫힌다', async ({ page }) => {
    await page
      .getByRole('button', { name: '마이크로 딜라이트 라이브 시연 보기' })
      .click();
    await expect(page.getByRole('dialog')).toBeVisible();
    await page.keyboard.press('Escape');
    await expect(page.getByRole('dialog')).not.toBeVisible();
  });

  test('AC#6: 모바일 뷰포트에서 카드 1열 그리드', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    const grid = page.locator('.trend-grid');
    await expect(grid).toBeVisible();
    const style = await grid.evaluate((el) => getComputedStyle(el).gridTemplateColumns);
    expect(style.split(' ').length).toBe(1);
  });

  test('출처 링크에 noopener noreferrer가 적용된다', async ({ page }) => {
    const sourceLink = page.locator('.trend-card__source').first();
    await expect(sourceLink).toHaveAttribute('rel', 'noopener noreferrer');
    await expect(sourceLink).toHaveAttribute('target', '_blank');
  });

  test('필터 탭에 tablist / aria-selected가 적용된다', async ({ page }) => {
    const tablist = page.getByRole('tablist', { name: '트렌드 카테고리 필터' });
    await expect(tablist).toBeVisible();
    await expect(page.getByRole('tab', { name: '전체' })).toHaveAttribute(
      'aria-selected',
      'true',
    );
    await page.getByRole('tab', { name: '컬러' }).click();
    await expect(page.getByRole('tab', { name: '컬러' })).toHaveAttribute(
      'aria-selected',
      'true',
    );
    await expect(page.getByRole('tabpanel')).toBeVisible();
  });

  test('skip link와 테마 토글이 동작한다', async ({ page }) => {
    await expect(page.getByRole('link', { name: '본문으로 건너뛰기' })).toBeAttached();
    await expect(
      page.getByRole('button', { name: /테마:/ }),
    ).toBeVisible();
  });
});
