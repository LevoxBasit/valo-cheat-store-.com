import type { SiteLocale } from '../i18n/locales';

// The approved illustration is shared by the opening slide and the default social card.
export const DEFAULT_OG_GAMEPLAY_IMAGE = '/images/gameplay/valorant-overlay-illustration-compressed.webp';
export const DEFAULT_OG_GAMEPLAY_WIDTH = 1672;
export const DEFAULT_OG_GAMEPLAY_HEIGHT = 941;
export const DEFAULT_OG_GAMEPLAY_ALT_BY_LOCALE: Record<SiteLocale, string> = {
  "en": "Illustration of agents with colored player markers beside a purple aim settings panel.",
  "es": "Ilustración de agentes con marcadores de colores junto a un panel morado de puntería.",
  "de": "Illustration mit farbigen Spielermarkierungen neben einem violetten Zielmenü.",
  "fr": "Illustration montrant des agents avec des repères colorés à côté d’un panneau de visée violet."
};

/** Homepage and product gallery share the same order. */
export const SHOWCASE_GALLERY_KEYS = ["gpOverlayIllustration","gpAimbotMenu","gpWorldMenu"] as const;
