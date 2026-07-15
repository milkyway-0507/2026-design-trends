import type { ComponentType } from 'react';
import type { PreviewType, Trend } from '@/types';
import { AccessibilityPreview } from './AccessibilityPreview';
import { AiCopilotPreview } from './AiCopilotPreview';
import { BrutalistPreview } from './BrutalistPreview';
import { Css3dPreview } from './Css3dPreview';
import { DopamineGradientPreview } from './DopamineGradientPreview';
import { GlassPreview } from './GlassPreview';
import { KineticTextPreview } from './KineticTextPreview';
import { MicroDelightPreview } from './MicroDelightPreview';
import { MxAgentPreview } from './MxAgentPreview';
import { RetroPreview } from './RetroPreview';

const PREVIEW_COMPONENTS: Record<
  PreviewType,
  ComponentType<{ trend: Trend }>
> = {
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
};

interface TrendPreviewRendererProps {
  trend: Trend;
}

export function TrendPreviewRenderer({ trend }: TrendPreviewRendererProps) {
  const Preview = PREVIEW_COMPONENTS[trend.previewType];
  return <Preview trend={trend} />;
}

export {
  AccessibilityPreview,
  AiCopilotPreview,
  BrutalistPreview,
  Css3dPreview,
  DopamineGradientPreview,
  GlassPreview,
  KineticTextPreview,
  MicroDelightPreview,
  MxAgentPreview,
  RetroPreview,
};
