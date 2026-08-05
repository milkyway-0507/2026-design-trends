import { lazy } from 'react';

const DopamineGradientPreview = lazy(() =>
  import('./DopamineGradientPreview').then((m) => ({
    default: m.DopamineGradientPreview,
  })),
);
const KineticTextPreview = lazy(() =>
  import('./KineticTextPreview').then((m) => ({
    default: m.KineticTextPreview,
  })),
);
const Css3dPreview = lazy(() =>
  import('./Css3dPreview').then((m) => ({ default: m.Css3dPreview })),
);
const AiCopilotPreview = lazy(() =>
  import('./AiCopilotPreview').then((m) => ({
    default: m.AiCopilotPreview,
  })),
);
const MicroDelightPreview = lazy(() =>
  import('./MicroDelightPreview').then((m) => ({
    default: m.MicroDelightPreview,
  })),
);
const RetroPreview = lazy(() =>
  import('./RetroPreview').then((m) => ({ default: m.RetroPreview })),
);
const GlassPreview = lazy(() =>
  import('./GlassPreview').then((m) => ({ default: m.GlassPreview })),
);
const BrutalistPreview = lazy(() =>
  import('./BrutalistPreview').then((m) => ({
    default: m.BrutalistPreview,
  })),
);
const AccessibilityPreview = lazy(() =>
  import('./AccessibilityPreview').then((m) => ({
    default: m.AccessibilityPreview,
  })),
);
const MxAgentPreview = lazy(() =>
  import('./MxAgentPreview').then((m) => ({ default: m.MxAgentPreview })),
);

const LiquidGlassPreview = lazy(() =>
  import('./LiquidGlassPreview').then((m) => ({
    default: m.LiquidGlassPreview,
  })),
);
const BentoGridPreview = lazy(() =>
  import('./BentoGridPreview').then((m) => ({
    default: m.BentoGridPreview,
  })),
);
const CinematicDarkPreview = lazy(() =>
  import('./CinematicDarkPreview').then((m) => ({
    default: m.CinematicDarkPreview,
  })),
);
const AmbientAiPreview = lazy(() =>
  import('./AmbientAiPreview').then((m) => ({
    default: m.AmbientAiPreview,
  })),
);
const LowStimulusPreview = lazy(() =>
  import('./LowStimulusPreview').then((m) => ({
    default: m.LowStimulusPreview,
  })),
);
const MotionIdentityPreview = lazy(() =>
  import('./MotionIdentityPreview').then((m) => ({
    default: m.MotionIdentityPreview,
  })),
);
const GenerativeUiPreview = lazy(() =>
  import('./GenerativeUiPreview').then((m) => ({
    default: m.GenerativeUiPreview,
  })),
);
const ExpressiveTypographyPreview = lazy(() =>
  import('./ExpressiveTypographyPreview').then((m) => ({
    default: m.ExpressiveTypographyPreview,
  })),
);
const ContextualNavPreview = lazy(() =>
  import('./ContextualNavPreview').then((m) => ({
    default: m.ContextualNavPreview,
  })),
);
const AiReadabilityPreview = lazy(() =>
  import('./AiReadabilityPreview').then((m) => ({
    default: m.AiReadabilityPreview,
  })),
);
const FunctionalMinimalismPreview = lazy(() =>
  import('./FunctionalMinimalismPreview').then((m) => ({
    default: m.FunctionalMinimalismPreview,
  })),
);
const MatureDarkModePreview = lazy(() =>
  import('./MatureDarkModePreview').then((m) => ({
    default: m.MatureDarkModePreview,
  })),
);
const PredictiveUxPreview = lazy(() =>
  import('./PredictiveUxPreview').then((m) => ({
    default: m.PredictiveUxPreview,
  })),
);
const DigitalTexturePreview = lazy(() =>
  import('./DigitalTexturePreview').then((m) => ({
    default: m.DigitalTexturePreview,
  })),
);

export const previewMap = {
  'dopamine-gradient': DopamineGradientPreview,
  'kinetic-text': KineticTextPreview,
  'css-3d': Css3dPreview,
  'ai-copilot': AiCopilotPreview,
  'micro-delight': MicroDelightPreview,
  retro: RetroPreview,
  glass: GlassPreview,
  brutalist: BrutalistPreview,
  accessibility: AccessibilityPreview,
  'mx-agent': MxAgentPreview,

  'liquid-glass': LiquidGlassPreview,
  'bento-grid': BentoGridPreview,
  'cinematic-dark': CinematicDarkPreview,
  'ambient-ai': AmbientAiPreview,
  'low-stimulus': LowStimulusPreview,
  'motion-identity': MotionIdentityPreview,
  'generative-ui': GenerativeUiPreview,
  'expressive-typography': ExpressiveTypographyPreview,
  'contextual-nav': ContextualNavPreview,
  'ai-readability': AiReadabilityPreview,
  'functional-minimalism': FunctionalMinimalismPreview,
  'mature-dark-mode': MatureDarkModePreview,
  'predictive-ux': PredictiveUxPreview,
  'digital-texture': DigitalTexturePreview,
};

export { PreviewCanvas } from './PreviewCanvas';
export { TrendPreview } from './TrendPreview';
export { TrendPreview as TrendPreviewRenderer } from './TrendPreview';
export { FallbackPreview } from './FallbackPreview';
