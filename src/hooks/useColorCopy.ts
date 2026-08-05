import { useCallback, useState, type MouseEvent } from 'react';
import { showToast } from '@/utils/showToast';

export function useColorCopy() {
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = useCallback(async (e: MouseEvent, hex: string) => {
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(hex);
      setCopied(hex);
      setTimeout(() => setCopied(null), 1400);
    } catch {
      try {
        const el = document.createElement('textarea');
        el.value = hex;
        el.style.position = 'fixed';
        el.style.opacity = '0';
        document.body.appendChild(el);
        el.focus();
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
        setCopied(hex);
        setTimeout(() => setCopied(null), 1400);
      } catch {
        showToast('복사에 실패했습니다. 직접 선택해서 복사해주세요.');
      }
    }
  }, []);

  return { copied, handleCopy };
}
