import { type CSSProperties } from 'react';
import { useColorCopy } from '@/hooks/useColorCopy';

interface SwatchProps {
  hex: string;
  name: string;
  size?: 'sm' | 'md';
}

export function ColorSwatch({ hex, name, size = 'sm' }: SwatchProps) {
  const { copied, handleCopy } = useColorCopy();
  const isCopied = copied === hex;

  return (
    <button
      type="button"
      className={`color-swatch color-swatch--${size} ${isCopied ? 'color-swatch--copied' : ''}`}
      style={{ '--swatch-color': hex } as CSSProperties}
      onClick={(e) => handleCopy(e, hex)}
      aria-label={`${name} ${hex} 복사`}
      title={hex}
    >
      {isCopied && (
        <span className="color-swatch__check" aria-hidden="true">
          ✓
        </span>
      )}
      <span className="color-swatch__tooltip">
        {isCopied ? '복사됨!' : hex}
      </span>
    </button>
  );
}

interface ColorChipCopyProps {
  hex: string;
  name: string;
}

export function ColorChipCopy({ hex }: ColorChipCopyProps) {
  const { copied, handleCopy } = useColorCopy();
  const isCopied = copied === hex;

  return (
    <button
      type="button"
      className="trend-card__color-chip-copy"
      data-copied={isCopied ? 'true' : undefined}
      onClick={(e) => handleCopy(e, hex)}
      aria-label={`${hex} 복사`}
    >
      {isCopied ? '✓ 복사됨' : '복사'}
    </button>
  );
}
