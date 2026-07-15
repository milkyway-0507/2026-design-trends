import { useCallback, useState, type CSSProperties, type MouseEvent } from 'react';

interface SwatchProps {
  hex: string;
  name: string;
  size?: 'sm' | 'md';
}

async function copyHex(hex: string): Promise<void> {
  try {
    await navigator.clipboard.writeText(hex);
  } catch {
    const el = document.createElement('textarea');
    el.value = hex;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  }
}

export function ColorSwatch({ hex, name, size = 'sm' }: SwatchProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(
    async (e: MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      await copyHex(hex);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    },
    [hex],
  );

  return (
    <button
      type="button"
      className={`color-swatch color-swatch--${size} ${copied ? 'color-swatch--copied' : ''}`}
      style={{ '--swatch-color': hex } as CSSProperties}
      onClick={handleCopy}
      aria-label={`${name} ${hex} 복사`}
      title={hex}
    >
      {copied && (
        <span className="color-swatch__check" aria-hidden="true">
          ✓
        </span>
      )}
      <span className="color-swatch__tooltip">
        {copied ? '복사됨!' : hex}
      </span>
    </button>
  );
}

interface ColorChipCopyProps {
  hex: string;
  name: string;
}

export function ColorChipCopy({ hex }: ColorChipCopyProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    await copyHex(hex);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };

  return (
    <button
      type="button"
      className="trend-card__color-chip-copy"
      data-copied={copied ? 'true' : undefined}
      onClick={handleCopy}
      aria-label={`${hex} 복사`}
    >
      {copied ? '복사됨' : '복사'}
    </button>
  );
}
