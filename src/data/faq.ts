import type { IconName } from '../components/icons/types';
import { normalizeInternalPath, ROUTES } from '../utils/path';
import type { SiteLocale } from '../i18n/locales';
import { getSiteFaqs as getSiteFaqsForLocale } from './faq/locale';
import { isUtilityEnabled } from '../config/catalog';
import { applySiteTokens } from '../i18n/brandTokens';

export type FaqTopic =
  | 'all'
  | 'plans'
  | 'esp'
  | 'aim'
  | 'safety'
  | 'products'
  | 'blog'
  | 'setup';

export interface SiteFaqItem {
  id: string;
  topic: FaqTopic;
  icon: IconName;
  q: string;
  a: string;
  aHtml?: string;
  scopes?: string[];
  /** Utility slugs the answer talks about; the item is hidden when any of them is not sold. */
  requires?: string[];
}

function a(text: string): string {
  return text;
}

function link(text: string, href: string): string {
  return `<a href="${normalizeInternalPath(href)}">${text}</a>`;
}

const cloudDma = link('Cloud DMA', ROUTES.cloudDma);
const skinChanger = link('Skin Changer', ROUTES.skinChanger);
const allProducts = link('products page', ROUTES.productsHub);
const faqPage = link('full FAQ', ROUTES.faq);
const blog = link('blog guides', ROUTES.blog);

export const siteFaqs: SiteFaqItem[] = [
  {
    id: 'status',
    topic: 'setup',
    icon: 'faqStatus',
    q: "How do I confirm compatibility before buying?",
    a: "Ask support to confirm your Windows version, current VALORANT build and the Cloud DMA prerequisites.",
  },
  {
    id: 'after-buy',
    topic: 'setup',
    icon: 'faqAfterBuy',
    q: "What happens after I buy?",
    a: "Follow the delivery and setup instructions supplied with your order. Contact support if a download or activation detail is missing.",
  },
  {
    id: 'ban-risk',
    topic: 'safety',
    icon: 'faqBanRisk',
    q: "Can using Valorant Cheats lead to account penalties?",
    a: "Yes. Riot can sanction accounts for third-party gameplay modifications. Game and Vanguard updates can also affect compatibility.",
  },
  {
    id: 'platforms',
    topic: 'setup',
    icon: 'faqPlatforms',
    q: "Which platforms are supported?",
    a: "The product is documented for Windows PC. Ask support which Windows versions and builds are currently supported.",
  },
  {
    id: 'license-move',
    topic: 'setup',
    icon: 'faqLicenseMove',
    q: "Can I move my license to a new PC?",
    a: "Ask support to confirm the transfer policy for your order before changing PCs.",
  },
  {
    id: 'products-page',
    topic: 'products',
    icon: 'faqProductsPage',
    q: 'Where are products and utilities listed?',
    a: `Every product is on the ${allProducts}: {productList}. Each product page lists its features and links to checkout.`,
  },
  {
    id: 'cloud-dma-what',
    topic: 'products',
    icon: 'accountRecovery',
    q: 'What does Cloud DMA install?',
    a: `${cloudDma} sets up a Hyper-V virtual environment on one Windows PC and activates it over an encrypted connection.`,
    scopes: ['cloud-dma'],
    requires: ['cloud-dma'],
  },
  {
    id: 'cloud-dma-requires',
    topic: 'safety',
    icon: 'faqBanRisk',
    q: 'What else do I need to buy?',
    a: `GREENWARD, Static Server and AWS are all required. Each is a separate purchase.`,
    scopes: ['cloud-dma'],
    requires: ['cloud-dma'],
  },
  {
    id: 'cloud-dma-license',
    topic: 'products',
    icon: 'faqHwidWhen',
    q: 'What does the Cloud DMA license cost?',
    a: `Current options, access terms and pricing are shown at checkout.`,
    scopes: ['cloud-dma'],
    requires: ['cloud-dma'],
  },
  {
    id: 'skin-visible',
    topic: 'products',
    icon: 'cosmetic',
    q: 'Will Skin Changer put cosmetics into my inventory?',
    a: `No. ${skinChanger} draws the cosmetic on your client only. The inventory stays empty. A trade stays impossible. Other players are not expected to see the finish.`,
    scopes: ['skin-changer'],
    requires: ['skin-changer'],
  },
  {
    id: 'skin-games',
    topic: 'products',
    icon: 'faqPlatforms',
    q: "How do I confirm Skin Changer coverage?",
    a: "Ask support whether the current build of your game and the cosmetic type you want are supported before buying.",
    scopes: ['skin-changer'],
    requires: ['skin-changer'],
  },
  {
    id: 'utility-requirements',
    topic: 'setup',
    icon: 'faqPlatforms',
    q: "What Windows setup do the utilities need?",
    a: "Each utility lists 64-bit Windows 10 or 11 and its security requirements. Cloud DMA adds Hyper-V and virtualization prerequisites. HWID Spoofer also lists administrator rights.",
    scopes: ['hwid-spoofer', 'cloud-dma', 'skin-changer'],
  },
  {
    id: 'what-is-esp',
    topic: 'esp',
    icon: 'faqWhatIsEsp',
    q: "What is Valorant player ESP?",
    a: "Player ESP can show location, posture, view direction and details like agent, equipment, health and shields, including player positions obscured by cover.",
    scopes: ['elite'],
  },
  {
    id: 'esp-vs-aim',
    topic: 'esp',
    icon: 'faqEspVsScripts',
    q: "How does ESP differ from aimbot?",
    a: "ESP displays information about players or supported world objects. The aimbot is a separate module with its own targeting settings.",
  },
  {
    id: 'cloud-dma-dependency',
    topic: 'plans',
    icon: 'faqEliteSlots',
    q: "Does the main product require Cloud DMA?",
    a: "Full functionality on supported builds requires Cloud DMA. It has its own license and prerequisites.",
    scopes: ['elite'],
  },
  {
    id: 'stream-proof',
    topic: 'esp',
    icon: 'faqStreamProof',
    q: "Will the overlay appear in recordings?",
    a: "The overlay is advertised as stream-proof. Compatibility with specific capture apps, methods and settings is unverified.",
  },
  {
    id: 'build-status',
    topic: 'safety',
    icon: 'faqUndetected',
    q: "Can an update affect availability?",
    a: "Game and Vanguard updates can affect compatibility. Ask support to confirm the current game build and supported Windows version.",
  },
  {
    id: 'esp-safer',
    topic: 'safety',
    icon: 'faqEspSafer',
    q: "Does disabling aimbot eliminate account risk?",
    a: "Riot can enforce its rules against third-party modifications. The overlay has account risks even when the aiming module is disabled.",
  },
  {
    id: 'hwid-when',
    topic: 'products',
    icon: 'faqHwidWhen',
    q: "What does the HWID Spoofer cover?",
    a: "It lists disk serials, MAC addresses, GPU identifiers and related device fields. A hardware tool cannot remove an account-level sanction.",
    scopes: ['hwid-spoofer'],
    requires: ['hwid-spoofer'],
  },
  {
    id: 'external-loader',
    topic: 'products',
    icon: 'faqExternalLoader',
    q: "Where can I confirm the installation procedure?",
    a: "Follow the setup notes supplied with the order. Contact support to confirm any prerequisite before changing Windows settings.",
  },
  {
    id: 'blog-vs-cheats',
    topic: 'blog',
    icon: 'faqBlogVsCheats',
    q: "Where is the complete feature list?",
    a: "Open the Valorant Cheats product page for the documented controls, dependency and compatibility caveats.",
  },
  {
    id: 'blog-setup',
    topic: 'blog',
    icon: 'faqBlogSetup',
    q: "Where can I review setup requirements?",
    a: "Review the requirements on the product page. Cloud DMA has separate Windows, Hyper-V and service prerequisites.",
  },
  {
    id: 'who-cheats',
    topic: 'plans',
    icon: 'faqWhoElite',
    q: "What does the main product cover?",
    a: "The main product combines configurable aiming, player and world overlays, spike data and saved settings.",
    scopes: ['elite'],
  },
  {
    id: 'after-vanguard-update',
    topic: 'safety',
    icon: 'faqVacUpdate',
    q: "What should I do after a game or Vanguard update?",
    a: "Ask support to confirm compatibility for the new build before relying on an existing setup.",
  },
  {
    id: 'discord-help',
    topic: 'setup',
    icon: 'headphones',
    q: "How do I get install help?",
    a: "Open a support ticket with your order number, Windows version, VALORANT build and the exact error or a screenshot.",
  },
  {
    id: 'combat-mode',
    topic: 'plans',
    icon: 'faqTurboRanked',
    q: "What does Combat Mode hide?",
    a: "The hotkey hides Ability and Trap ESP. The documented scope is those two groups of markers.",
  },
  {
    id: 'spike-tracking',
    topic: 'esp',
    icon: 'faqZoomHack',
    q: "What appears under Spike in World Visual Options?",
    a: "Time and Defuse Progress are listed. Other objective states and spike location are unconfirmed.",
    scopes: ['elite'],
  },
  {
    id: 'aim-target-controls',
    topic: 'aim',
    icon: 'faqAutoFarm',
    q: "Which target controls are documented?",
    a: "The menu lists FOV, speed, smoothness, stickiness, a target filter, bone selection and a visibility check.",
    scopes: ['elite'],
  },
  {
    id: 'saved-configs',
    topic: 'safety',
    icon: 'faqPrivateCheats',
    q: "Can I reuse a configuration?",
    a: "Create and save a configuration in Misc Options. Use Load Config to bring it back later.",
  },
  {
    id: 'faq-more',
    topic: 'all',
    icon: 'faqMore',
    q: 'Where is the full FAQ?',
    a: `Short answers sit on the homepage and on each product page. The ${faqPage} holds the full set, and ${blog} is where longer guides go when they are published.`,
  },
];

/** Shared FAQ block copy + filters (home, /faq/, products, blog). */
export const SITE_FAQ_SECTION_COPY = {
  eyebrow: 'All topics',
  title: 'Faq: Browse by category',
  subtitle: 'Plans, ESP, aim, products, setup, and the longer answers.',
} as const;

export const SITE_FAQ_FILTER_TOPICS: FaqTopic[] = [
  'all',
  'plans',
  'esp',
  'aim',
  'safety',
  'products',
  'blog',
  'setup',
];

/** Section copy when FAQ list is scoped to the current page (not /faq/). */
export const CONTEXTUAL_FAQ_SECTION_COPY = {
  eyebrow: 'FAQ',
  title: 'Questions about this page',
  subtitle: 'Answers for this page. The FAQ page holds the rest.',
} as const;

export function faqFilterTopicsForItems(items: SiteFaqItem[]): FaqTopic[] {
  const present = new Set(items.map((item) => item.topic));
  const topics: FaqTopic[] = ['all'];
  for (const topic of SITE_FAQ_FILTER_TOPICS) {
    if (topic !== 'all' && present.has(topic)) topics.push(topic);
  }
  return topics;
}

export { getProductFaqs, getSiteFaqs, getLandingFaqs, getAllFaqs } from './faq/locale';

const BLOG_FAQ_IDS: Record<string, string[]> = {
  'valorant-cheats-buying-checklist': ['status', 'platforms', 'cloud-dma-dependency', 'after-buy'],
  'valorant-aimbot-settings': ['aim-target-controls', 'esp-vs-aim', 'saved-configs'],
  'valorant-windows-setup': ['platforms', 'cloud-dma-dependency', 'utility-requirements'],
  'valorant-player-esp': ['what-is-esp', 'esp-vs-aim', 'esp-safer'],
  'valorant-world-esp': ['combat-mode', 'spike-tracking', 'what-is-esp'],
  'valorant-spike-tracking': ['spike-tracking', 'combat-mode'],
  'valorant-overlay-configurations': ['saved-configs', 'stream-proof', 'combat-mode'],
};

const DEFAULT_BLOG_FAQ_IDS = ['blog-vs-cheats', 'blog-setup', 'status', 'after-buy', 'platforms'];

function pickFaqItems(ids: string[], locale: SiteLocale): SiteFaqItem[] {
  const localized = getSiteFaqsForLocale(locale);
  const seen = new Set<string>();
  return ids
    .map((id) => localized.find((item) => item.id === id))
    .filter((item): item is SiteFaqItem => Boolean(item))
    .filter((item) => (item.requires ?? []).every(isUtilityEnabled))
    .filter((item) => {
      if (seen.has(item.id)) return false;
      seen.add(item.id);
      return true;
    })
    .slice(0, 5)
    .map((item) => ({ ...item, q: applySiteTokens(item.q), a: applySiteTokens(item.a) }));
}

export function getBlogFaqs(_tag: string, slug: string, locale: SiteLocale = 'en'): SiteFaqItem[] {
  return pickFaqItems(BLOG_FAQ_IDS[slug] ?? DEFAULT_BLOG_FAQ_IDS, locale);
}

export function getForumFaqs(slug: string, locale: SiteLocale = 'en'): SiteFaqItem[] {
  const ids = ['status', 'after-buy', 'ban-risk', 'platforms'];
  if (slug.includes('hwid')) ids.unshift('hwid-when');
  if (slug.includes('skin')) ids.unshift('skin-visible');
  if (slug.includes('esp') || slug.includes('minimap')) ids.unshift('what-is-esp');
  if (slug.includes('aim')) ids.unshift('esp-vs-aim');
  if (slug.includes('license') || slug.includes('lifetime')) ids.unshift('cloud-dma-dependency');
  if (slug.includes('ban-risk') || slug.includes('cheat-ban')) ids.unshift('build-status');
  return pickFaqItems(ids, locale);
}

