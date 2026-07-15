import type { ReactNode } from 'react';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface PreviewCanvasProps {
  children: ReactNode;
  label: string;
  className?: string;
}

/** 모든 라이브 프리뷰의 공통 래퍼 */
export function PreviewCanvas({
  children,
  label,
  className,
}: PreviewCanvasProps) {
  const reducedMotion = useReducedMotion();

  return (
    <div
      className={[
        'preview-canvas',
        reducedMotion && 'preview-canvas--static',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      role="img"
      aria-label={label}
    >
      {children}
    </div>
  );
}
