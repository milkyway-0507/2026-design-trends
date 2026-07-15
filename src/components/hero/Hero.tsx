import { LazyMotion, domAnimation, m } from 'framer-motion';
import { getMeta, getTrendCount } from '@/data';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { KineticCount, KineticText, KineticWords } from './KineticText';

const meta = getMeta();
const trendCount = getTrendCount();

export function Hero() {
  const reducedMotion = useReducedMotion();

  return (
    <section className="hero" aria-labelledby="hero-title">
      <LazyMotion features={domAnimation} strict>
        <div className="hero__bg" aria-hidden="true">
          <m.div
            className="hero__orb hero__orb--1"
            animate={
              reducedMotion
                ? undefined
                : { x: [0, 30, 0], y: [0, -20, 0], scale: [1, 1.08, 1] }
            }
            transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          />
          <m.div
            className="hero__orb hero__orb--2"
            animate={
              reducedMotion
                ? undefined
                : { x: [0, -24, 0], y: [0, 16, 0], scale: [1, 1.12, 1] }
            }
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 1,
            }}
          />
        </div>

        <div className="container hero__inner">
          <p className="hero__eyebrow">
            <span className="sr-only">2026</span>
            <KineticText text="2026" className="hero__eyebrow-text" />
          </p>

          <h1 id="hero-title" className="hero__title">
            <span className="sr-only">
              {meta.title} {trendCount}가지
            </span>
            <span className="hero__title-visual" aria-hidden="true">
              <span className="hero__title-line">
                <KineticText text="디자인" wave={!reducedMotion} />
              </span>
              <span className="hero__title-line hero__title-line--accent">
                <KineticText
                  text="트렌드"
                  variant="gradient"
                  wave={!reducedMotion}
                />
              </span>
              <span className="hero__title-line hero__title-line--count">
                <KineticCount value={trendCount} suffix="가지" />
              </span>
            </span>
          </h1>

          <p className="hero__subtitle text-secondary">
            <span className="sr-only">{meta.subtitle}</span>
            <span aria-hidden="true">
              <KineticWords text={meta.subtitle} />
            </span>
          </p>

          <div className="hero__divider" aria-hidden="true">
            <span className="hero__divider-bar" />
          </div>
        </div>
      </LazyMotion>
    </section>
  );
}
