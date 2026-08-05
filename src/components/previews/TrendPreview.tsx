import { Suspense } from 'react';
import type { Trend } from '@/types';
import { FallbackPreview } from './FallbackPreview';
import { PreviewVariantProvider, type PreviewVariant } from './PreviewVariantContext';
import { previewMap } from './index';

function PreviewSkeleton() {
  return (
    <div className="preview-skeleton" aria-label="시연 로딩 중">
      <div className="preview-skeleton__shimmer" />
    </div>
  );
}

export function TrendPreview({
  trend,
  variant = 'default',
}: {
  trend: Trend;
  variant?: PreviewVariant;
}) {
  const Component =
    previewMap[trend.previewType as keyof typeof previewMap] ?? FallbackPreview;

  return (
    <PreviewVariantProvider variant={variant}>
      <Suspense fallback={<PreviewSkeleton />}>
        <Component trend={trend} />
      </Suspense>
    </PreviewVariantProvider>
  );
}
