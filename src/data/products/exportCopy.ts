/**
 * Localized product copy used by the storefront.
 * Slugs, prices, and feature name lists stay in products.ts / pricing modules.
 */

import type { ProductOverview, ProductPage } from '../products';

export interface ProductCopyBundle {
  sharedGoodToKnow: string;
  sharedLimitations: string;
  acquisitionSteps: { num: string; title: string; desc: string }[];
  systemRequirements: string[];
  gallery: { alt: string; caption: string; captionDesc: string }[];
  tiers: Record<
    string,
    {
      about?: ProductPage['about'];
      body: ProductPage['body'];
      overview: ProductOverview;
      goodToKnow: string;
      limitations: string;
      acquisitionTitle: string;
      /** Same order as `fullFeatures` in products.ts. */
      fullFeatures?: string[];
    }
  >;
  utilities: Record<
    string,
    {
      body: ProductPage['body'];
      overview: ProductOverview;
      goodToKnow: string;
      limitations: string;
      acquisitionTitle: string;
      acquisitionSteps?: { num: string; title: string; desc: string }[];
      /** Same order as the utility's `systemRequirements` in products.ts. */
      systemRequirements?: string[];
      /** Same order as `fullFeatures` in products.ts. */
      fullFeatures?: string[];
      /** Same order as the utility's showcase slides. */
      gallery?: { alt: string; caption: string; captionDesc: string }[];
    }
  >;
}
