import { createContext, useContext, type ReactNode } from 'react';

export type PreviewVariant = 'default' | 'card';

const PreviewVariantContext = createContext<PreviewVariant>('default');

export function PreviewVariantProvider({
  variant,
  children,
}: {
  variant: PreviewVariant;
  children: ReactNode;
}) {
  return (
    <PreviewVariantContext.Provider value={variant}>
      {children}
    </PreviewVariantContext.Provider>
  );
}

export function usePreviewVariant(): PreviewVariant {
  return useContext(PreviewVariantContext);
}
