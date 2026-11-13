/**
 * The game this site sells cheats for. Change these values when re-using the template for another title.
 *
 * Shared copy (utility products, catalog page, legal footer) reads these through the
 * `{gameName}`, `{gameShort}`, `{gamePublisher}` and `{antiCheat}` tokens. Game-specific
 * marketing copy (homepage, cheat product page, blog, forum) still has to be rewritten per game.
 */
export const GAME = {
  name: 'VALORANT',
  shortName: 'VALORANT',
  publisher: 'Riot Games',
  antiCheat: 'Riot Vanguard',
  officialUrl: 'https://playvalorant.com/',
} as const;

/** Display name of the main cheat product, used in menus, cards and comparison headers. */
export const CHEAT_PRODUCT_NAME = 'Valorant Cheats';
