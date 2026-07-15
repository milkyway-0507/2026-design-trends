import { m } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';

const STAGGER = 0.045;
const ENTER_DURATION = 0.55;

interface KineticTextProps {
  text: string;
  className?: string;
  variant?: 'default' | 'gradient';
  /** 입장 후 미세한 웨이브 루프 (reduced-motion 시 비활성) */
  wave?: boolean;
}

function splitGraphemes(text: string): string[] {
  return Array.from(text);
}

export function KineticText({
  text,
  className,
  variant = 'default',
  wave = false,
}: KineticTextProps) {
  const reducedMotion = useReducedMotion();
  const chars = splitGraphemes(text);

  return (
    <span
      className={[
        'kinetic-text',
        variant === 'gradient' && 'kinetic-text--gradient',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      aria-hidden="true"
    >
      {chars.map((char, i) => (
        <m.span
          key={`${char}-${i}`}
          className="kinetic-text__char"
          initial={reducedMotion ? false : { opacity: 0, y: '1.1em', rotateZ: -8 }}
          animate={
            reducedMotion
              ? { opacity: 1, y: 0, rotateZ: 0 }
              : {
                  opacity: 1,
                  y: wave ? [0, -6, 0] : 0,
                  rotateZ: 0,
                }
          }
          transition={
            reducedMotion
              ? { duration: 0 }
              : {
                  opacity: { duration: ENTER_DURATION, delay: i * STAGGER },
                  y: wave
                    ? {
                        duration: 2.4,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: i * STAGGER + 0.8 + i * 0.08,
                      }
                    : {
                        type: 'spring',
                        stiffness: 200,
                        damping: 18,
                        delay: i * STAGGER,
                      },
                  rotateZ: {
                    type: 'spring',
                    stiffness: 180,
                    damping: 16,
                    delay: i * STAGGER,
                  },
                }
          }
          style={{ display: 'inline-block' }}
        >
          {char === ' ' ? '\u00A0' : char}
        </m.span>
      ))}
    </span>
  );
}

interface KineticWordsProps {
  text: string;
  className?: string;
}

export function KineticWords({ text, className }: KineticWordsProps) {
  const reducedMotion = useReducedMotion();
  const words = text.split(/\s+/);

  return (
    <span className={['kinetic-words', className].filter(Boolean).join(' ')}>
      {words.map((word, i) => (
        <m.span
          key={`${word}-${i}`}
          className="kinetic-words__word"
          initial={reducedMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={
            reducedMotion
              ? { duration: 0 }
              : {
                  duration: 0.5,
                  delay: 0.6 + i * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }
          }
        >
          {word}
          {i < words.length - 1 ? '\u00A0' : ''}
        </m.span>
      ))}
    </span>
  );
}

interface KineticCountProps {
  value: number;
  suffix: string;
  className?: string;
}

export function KineticCount({ value, suffix, className }: KineticCountProps) {
  const reducedMotion = useReducedMotion();

  return (
    <span className={['kinetic-count', className].filter(Boolean).join(' ')}>
      <m.span
        className="kinetic-count__number"
        initial={reducedMotion ? false : { opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={
          reducedMotion
            ? { duration: 0 }
            : { type: 'spring', stiffness: 260, damping: 20, delay: 0.9 }
        }
      >
        {value}
      </m.span>
      <KineticText text={suffix} wave={!reducedMotion} />
    </span>
  );
}
