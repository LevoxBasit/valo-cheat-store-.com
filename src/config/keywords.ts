import { CHEAT_PRODUCT_NAME } from './game';

export const PRIMARY_KEYWORD = CHEAT_PRODUCT_NAME;

/** One representative search intent for each page. */
export const SECONDARY_KEYWORD_BY_PATH: Record<string, string> = {
  "/": "Valorant Cheats for Windows",
  "/cheats/": "Valorant cheat menu, aimbot, ESP and spike features",
  "/products/": "Compare Valorant Cheats and separate utilities",
  "/hwid-spoofer/": "HWID Spoofer hardware identifiers and Windows requirements",
  "/skin-changer/": "Skin Changer local cosmetic previews",
  "/cloud-dma/": "Cloud DMA requirements and Hyper-V setup",
  "/faq/": "Valorant Cheats compatibility, checkout and support FAQ",
  "/blog/": "Valorant setup and feature guides",
  "/blog/valorant-cheats-buying-checklist/": "Buying Valorant Cheats: What to Check",
  "/blog/valorant-aimbot-settings/": "Valorant Aimbot Settings: FOV and Smoothness",
  "/blog/valorant-windows-setup/": "VALORANT on Windows: Game and Product Requirements",
  "/blog/valorant-player-esp/": "Valorant Player ESP: Boxes, Skeletons and Labels",
  "/blog/valorant-world-esp/": "Valorant World ESP: Ability and Trap Indicators",
  "/blog/valorant-spike-tracking/": "Valorant Spike Time and Defuse Progress",
  "/blog/valorant-overlay-configurations/": "Valorant Overlay Profiles and Combat Mode"
};

export const SECONDARY_KEYWORD_HOME: Record<string, string> = Object.fromEntries(
  Object.entries(SECONDARY_KEYWORD_BY_PATH).map(([path, keyword]) => [keyword, path]),
);
