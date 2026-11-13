import {
  ALL_UTILITY_PRODUCT_SLUGS,
  CHEAT_PRODUCT_SLUGS,
  CHEATS_PRIMARY_SLUG,
  HWID_SPOOFER_SLUG,
  SKIN_CHANGER_SLUG,
  CLOUD_DMA_SLUG,
  UTILITY_PRODUCT_PATHS,
  UTILITY_PRODUCT_SLUGS,
  type UtilityProductSlug,
} from '../config/catalog';
import { PRODUCT_BASE } from '../config/site';
import { CHEAT_PRODUCT_NAME } from '../config/game';
import { getTranslations } from '../i18n';
import { deepApplySiteTokens } from '../i18n/brandTokens';
import type { SiteLocale } from '../i18n/locales';
import type { Translations } from '../i18n/types';
import { checkoutForSlug } from '../config/checkout';
import { SHOWCASE_GALLERY_KEYS } from '../config/gameplayMedia';
import { HWID_GALLERY_KEYS } from '../config/hwidMedia';
import type { IconName } from '../components/icons/types';
import { type ProductCopyBundle } from './products/exportCopy';
import esProductCopy from './products/locales/es.json';
import deProductCopy from './products/locales/de.json';
import frProductCopy from './products/locales/fr.json';

export interface ProductSlide {
  /** Still image, or the poster frame when `videoSrc` is set. */
  src: string;
  alt: string;
  caption: string;
  captionDesc: string;
  width?: number;
  height?: number;
  /** `image` unless a clip is attached. */
  kind?: 'image' | 'video';
  /** MP4 or WebM. The slider shows this instead of the still; `src` stays the poster. */
  videoSrc?: string;
}

export interface ProductOverview {
  title: string;
  paragraphs: string[];
}

export interface AcquisitionStep {
  num: string;
  title: string;
  desc: string;
}

export interface ProductAcquisition {
  title: string;
  steps: AcquisitionStep[];
}

export interface SystemRequirement {
  icon: IconName;
  text: string;
}

export interface ProductPage {
  slug: string;
  kind: 'tier' | 'utility';
  badge: string;
  category?: string;
  tier?: string;
  name: string;
  title: string;
  subtitle: string;
  desc: string;
  features: string[];
  more: number;
  variant?: 'essential' | 'popular';
  buyUrl: string;
  images: ProductSlide[];
  overview: ProductOverview;
  acquisition: ProductAcquisition;
  goodToKnow: string;
  limitations: string;
  fullFeatures: string[];
  systemRequirements: SystemRequirement[];
  about?: { type: 'h2' | 'p'; text: string }[];
  body: { type: 'h2' | 'p'; text: string }[];
  relatedBlogSlugs: string[];
  relatedForumSlugs: string[];
}

/** Guides paired with each product detail page */
export const productRelatedBlogSlugs: Record<string, string[]> = {
  "elite": [
    "valorant-cheats-buying-checklist",
    "valorant-aimbot-settings",
    "valorant-windows-setup",
    "valorant-player-esp",
    "valorant-world-esp",
    "valorant-spike-tracking",
    "valorant-overlay-configurations"
  ],
  "hwid-spoofer": [
    "valorant-windows-setup",
    "valorant-cheats-buying-checklist"
  ],
  "cloud-dma": [
    "valorant-windows-setup",
    "valorant-cheats-buying-checklist"
  ],
  "skin-changer": [
    "valorant-cheats-buying-checklist",
    "valorant-windows-setup"
  ]
};

/** Relevant editorial examples shown in the existing related-discussions section. */
export const productRelatedForumSlugs: Record<string, string[]> = {
  elite: ['aimbot-smoothness-vs-speed', 'valorant-retake-information', 'save-load-config'],
  'cloud-dma': ['cloud-dma-single-pc-setup'],
  'hwid-spoofer': ['hwid-spoofer-vs-skin-changer'],
  'skin-changer': ['hwid-spoofer-vs-skin-changer'],
};

const productBase = PRODUCT_BASE;

const hwidAcquisitionSteps: AcquisitionStep[] = [
  {
    num: '01',
    title: 'Match your title to the list',
    desc: 'Published coverage names Riot Vanguard. Easy Anti-Cheat sits with BattlEye on that list. Ricochet is there with related families. Compare your title with the published coverage and confirm the current build with support.',
  },
  {
    num: '02',
    title: 'Review available access options',
    desc: 'Either license includes the operator panel and the trace cleaner.',
  },
  {
    num: '03',
    title: 'Set Windows before the first spoof',
    desc: 'In Windows Security, turn HVCI and Core Isolation on. In firmware, turn TPM and Secure Boot on. Do both before the first session. Administrator rights on this PC are also required for the spoof and the cleaner.',
  },
  {
    num: '04',
    title: 'Change IDs, clean, then launch',
    desc: 'The portal guide order is the identifier change, then the bundled cleanup, then the game client.',
  },
];

const cloudDmaAcquisitionSteps: AcquisitionStep[] = [
  { num: '01', title: 'Check Windows and firmware', desc: 'Confirm that your Windows edition supports Hyper-V and turn on CPU virtualization in firmware.' },
  { num: '02', title: 'Check the separate purchases', desc: 'You also need GREENWARD, Static Server and AWS. Each is purchased separately.' },
  { num: '03', title: 'Review checkout terms', desc: 'Current options, access terms and pricing are shown at checkout.' },
  { num: '04', title: 'Run the guided setup', desc: 'Install the Hyper-V environment and activate it over a stable internet connection.' },
];

const skinChangerAcquisitionSteps: AcquisitionStep[] = [
  {
    num: '01',
    title: 'Ask if your game is still listed',
    desc: 'Major titles are covered, and a patch can move that list. Email support the game name before checkout and ask if those cosmetics are still listed.',
  },
  {
    num: '02',
    title: 'Review cosmetic access terms',
    desc: 'The library itself does not change with the term. Current options, access terms and pricing are shown at checkout.',
  },
  {
    num: '03',
    title: 'Prepare Windows for the cosmetic client',
    desc: 'Before the first session, Windows Security needs HVCI and Core Isolation. Firmware needs TPM and Secure Boot.',
  },
  {
    num: '04',
    title: 'Choose looks inside the client',
    desc: 'When the portal has delivered access, open the lightweight client. For that session, choose a weapon skin, an outfit, or a knife variant.',
  },
];

const defaultAcquisitionSteps: AcquisitionStep[] = [
  {
    "num": "01",
    "title": "Check compatibility",
    "desc": "Confirm the game build and your Windows version with support."
  },
  {
    "num": "02",
    "title": "Review the Cloud DMA dependency",
    "desc": "Full functionality on supported builds requires Cloud DMA, with a separate license and prerequisites."
  },
  {
    "num": "03",
    "title": "Open purchase options",
    "desc": "Check current purchase terms on the external checkout page."
  },
  {
    "num": "04",
    "title": "Follow the order instructions",
    "desc": "Use the current delivery and setup notes provided with your order."
  }
];

function acquisitionFor(productName: string): ProductAcquisition {
  return {
    title: `How to get ${productName}`,
    steps: defaultAcquisitionSteps,
  };
}

const sharedGoodToKnow =
  'Full functionality on supported builds requires Cloud DMA. Confirm your Windows version, game build and setup before checkout.';

const sharedLimitations =
  'Third-party cheat software can be detected, can stop after a game update, and can lead to account penalties. Compatibility can change before this page is edited.';

const mainProductSystemRequirements: SystemRequirement[] = [
  { icon: 'reqWindows', text: 'Confirm the current game version before launch.' },
  { icon: 'reqSettings', text: 'Patches and anti-cheat updates can change compatibility.' },
];

const galleryRaw = {
  "gpOverlayIllustration": {
    "width": 1672,
    "height": 941,
    "src": "/images/gameplay/valorant-overlay-illustration-compressed.webp",
    "alt": "Illustration of agents with colored player markers beside a purple aim settings panel.",
    "caption": "Overlay illustration",
    "captionDesc": "A stylized VALORANT scene pairs player markers with an illustrated menu."
  },
  "gpAimbotMenu": {
    "width": 1330,
    "height": 840,
    "src": "/images/gameplay/valorant-aimbot-menu.webp",
    "alt": "Aimbot panel showing sliders for smoothness, speed, field of view and stickiness.",
    "caption": "Aimbot panel preview",
    "captionDesc": "The panel preview shows aiming sliders and a visibility check."
  },
  "gpWorldMenu": {
    "width": 1330,
    "height": 840,
    "src": "/images/gameplay/valorant-world-menu.webp",
    "alt": "World panel showing switches for spike information, traps and abilities, with a distance slider.",
    "caption": "World panel preview",
    "captionDesc": "The panel preview groups spike information, traps and abilities with distance controls."
  }
} satisfies Record<
  string,
  {
    src: string;
    alt: string;
    caption: string;
    captionDesc: string;
    width: number;
    height: number;
    videoSrc?: string;
  }
>;

type GalleryKey = keyof typeof galleryRaw;

function slide(...keys: GalleryKey[]): ProductSlide[] {
  return keys.map((key) => {
    const item: ProductSlide = galleryRaw[key];
    if (!item) throw new Error(`Missing gallery key: ${String(key)}`);
    const { src, alt, caption, captionDesc, width, height, videoSrc } = item;
    return {
      src,
      alt,
      caption,
      captionDesc,
      width,
      height,
      ...(videoSrc ? { videoSrc, kind: 'video' as const } : {}),
    };
  });
}

const showcaseSlides = slide(...SHOWCASE_GALLERY_KEYS);

const hwidGalleryRaw = {
  hwidBanner: {
    src: '/images/hwid-spoofer/hwid-spoofer-banner.webp',
    width: 1672,
    height: 941,
    alt: 'VALORANT scene beside an illustrated HWID Spoofer control panel.',
    caption: 'HWID Spoofer illustration',
    captionDesc: 'Promotional artwork showing a mockup of the HWID Spoofer panel.',
  },
} satisfies Record<
  string,
  { src: string; alt: string; caption: string; captionDesc: string; width: number; height: number; videoSrc?: string }
>;

type HwidGalleryKey = keyof typeof hwidGalleryRaw;

function hwidSlide(...keys: HwidGalleryKey[]): ProductSlide[] {
  return keys.map((key) => {
    const item: ProductSlide = hwidGalleryRaw[key];
    const { src, alt, caption, captionDesc, width, height, videoSrc } = item;
    return {
      src,
      alt,
      caption,
      captionDesc,
      width,
      height,
      ...(videoSrc ? { videoSrc, kind: 'video' as const } : {}),
    };
  });
}

const hwidShowcaseSlides = hwidSlide(...HWID_GALLERY_KEYS);

const skinChangerShowcaseSlides: ProductSlide[] = [
  {
    src: '/images/skin-changer/skin-changer.webp',
    width: 1213,
    height: 682,
    alt: 'Shield mark labeled Skin Changer, with crossed rifles, revolvers, and star highlights.',
    caption: 'Cosmetic mark',
    captionDesc: 'Weapon finishes, character outfits, and knife styles are drawn on your screen alone.',
  },
];

function slugFromHref(href: string): string {
  const normalized = href.replace(/^\//, '').replace(/\/$/, '');
  for (const slug of ALL_UTILITY_PRODUCT_SLUGS) {
    if (normalized === slug || normalized.endsWith(`/${slug}`)) return slug;
  }
  const segment = href.replace(productBase, '').replace(/^\//, '').replace(/\/$/, '');
  if (!segment || segment === 'cheats' || segment === 'product') {
    return CHEATS_PRIMARY_SLUG;
  }
  return segment;
}

const tierAbout: Record<string, ProductPage['about']> = {
  "elite": [
    {
      "type": "h2",
      "text": "Aim response"
    },
    {
      "type": "p",
      "text": "The Aimbot Options menu separates the area searched for targets from the way assistance moves. FOV sets the area. Smoothness adjusts how gradually aim moves and Speed controls the movement rate. Stickiness affects how long the module stays associated with a selected target."
    },
    {
      "type": "p",
      "text": "The menu also lists a filter, a target bone selector and a visibility check. Draw FOV and Draw Target Line show the targeting area and the selected target visually."
    },
    {
      "type": "h2",
      "text": "Player ESP and wallhack visuals"
    },
    {
      "type": "p",
      "text": "Use boxes, skeletons, head circles or snaplines to mark players. Agent names and equipment labels help identify who is on an angle and what they are carrying. Health and shield bars are separate fields, alongside rank, level, distance and view direction."
    },
    {
      "type": "p",
      "text": "A maximum distance limits how far player indicators appear. Colors and visibility controls let you decide how much information to display."
    },
    {
      "type": "h2",
      "text": "World ESP, traps and spike information"
    },
    {
      "type": "p",
      "text": "World Visual Options has separate Ability and Trap settings, with options for icons, distance and supported agent-specific utility. World ESP has its own range limit. Coverage can vary by agent and object."
    },
    {
      "type": "p",
      "text": "Time and Defuse Progress are listed under Spike. Combat Mode hides Ability and Trap ESP with a hotkey when utility markers crowd the view."
    },
    {
      "type": "h2",
      "text": "Configurations and capture"
    },
    {
      "type": "p",
      "text": "Use Create Config, Save Config, Load Config and Unload Config in Misc Options. The menu also has an adjustable font size. The overlay is advertised as stream-proof. Compatibility with individual recording or streaming applications is unverified."
    }
  ]
};

const tierBodies: Record<string, ProductPage['body']> = {
  "elite": [
    {
      "type": "h2",
      "text": "Checkout and delivery"
    },
    {
      "type": "p",
      "text": "Open View Purchase Options to see the current purchase terms on the checkout site. Follow the setup and delivery instructions provided with the order."
    },
    {
      "type": "h2",
      "text": "Windows and Cloud DMA"
    },
    {
      "type": "p",
      "text": "Valorant Cheats is documented for Windows PC. Full functionality on supported builds requires Cloud DMA, a separate product with its own Windows, Hyper-V and service requirements. The [Windows setup guide](/blog/valorant-windows-setup/) explains what to check. Confirm the supported Windows release, game build and any additional prerequisites with [support](/support/) before ordering."
    }
  ]
};

const utilityBodies: Record<string, ProductPage['body']> = {
  "hwid-spoofer": [
    {
      "type": "h2",
      "text": "Hardware identifiers covered"
    },
    {
      "type": "p",
      "text": "The HWID Spoofer lists disk serials, MAC addresses and GPU identifiers alongside related device fields. The panel reports which values changed. An account penalty remains tied to the affected account."
    },
    {
      "type": "h2",
      "text": "Published coverage"
    },
    {
      "type": "p",
      "text": "The coverage notes list Riot Vanguard, Easy Anti-Cheat, BattlEye, Ricochet, ACE and Javelin. Confirm current coverage for your game and build before checkout. Publisher updates can affect compatibility."
    },
    {
      "type": "h2",
      "text": "Trace cleaner"
    },
    {
      "type": "p",
      "text": "The license includes a separate trace cleaner. The product documentation covers when it is used and which setup conditions apply."
    },
    {
      "type": "h2",
      "text": "Windows requirements"
    },
    {
      "type": "p",
      "text": "The utility lists 64-bit Windows 10 or 11, administrator rights and an internet connection. It also lists HVCI, Core Isolation, TPM and Secure Boot as required."
    }
  ],
  "cloud-dma": [
    {
      "type": "h2",
      "text": "Hyper-V setup on one PC"
    },
    {
      "type": "p",
      "text": "Cloud DMA runs a virtual environment on the Windows gaming PC. The guided installer provisions that environment and activation uses an encrypted connection. Check whether Hyper-V is available on your edition of Windows and whether the processor supports virtualization. See the [Windows setup guide](/blog/valorant-windows-setup/) for the separate game and product checks."
    },
    {
      "type": "h2",
      "text": "What you need before checkout"
    },
    {
      "type": "p",
      "text": "The Cloud DMA license covers the infrastructure layer. GREENWARD, Static Server and AWS are required as separate purchases. Check the service requirements alongside the Windows, RAM and firmware requirements before ordering."
    }
  ],
  "skin-changer": [
    {
      "type": "h2",
      "text": "Cosmetics in the local client"
    },
    {
      "type": "p",
      "text": "Browse weapon finishes, character outfits and knife variants in the local library for supported games. A single cosmetic license covers the available library."
    },
    {
      "type": "h2",
      "text": "What other players see"
    },
    {
      "type": "p",
      "text": "The preview is drawn on your screen during the session. It creates no inventory entry or tradeable item, and it ends when you close the client."
    },
    {
      "type": "h2",
      "text": "Check game coverage"
    },
    {
      "type": "p",
      "text": "Ask support about your title and the cosmetic category you want before buying. Game and Windows updates can change coverage. Publisher rules can apply to third-party cosmetic clients."
    },
    {
      "type": "h2",
      "text": "PC setup"
    },
    {
      "type": "p",
      "text": "The utility lists 64-bit Windows 10 or 11, internet and loader access. Core Isolation, HVCI, TPM and Secure Boot are also listed."
    }
  ]
};

const productContent: Record<
  string,
  Pick<ProductPage, 'overview' | 'images' | 'fullFeatures' | 'goodToKnow' | 'limitations' | 'systemRequirements'>
> = {
  elite: {
    images: showcaseSlides,
    goodToKnow: sharedGoodToKnow,
    limitations: sharedLimitations,
    systemRequirements: mainProductSystemRequirements,
    fullFeatures: [
      "Aimbot toggle",
      "Aim FOV and FOV display",
      "Smoothness and speed",
      "Target stickiness",
      "Target filter",
      "Bone selection",
      "Visibility check",
      "Target line",
      "Boxes and skeletons",
      "Head circles and snaplines",
      "View direction",
      "Health and shield bars",
      "Agent identity",
      "Rank and account level",
      "Equipped item",
      "Player range limit",
      "Ability ESP",
      "Trap ESP",
      "World icons and distance",
      "Agent-specific ability and trap options",
      "Spike Time",
      "Defuse Progress",
      "Combat Mode hotkey",
      "Overlay colors",
      "Configuration management",
      "Menu font size"
    ],
    overview: {
      title: "Aim and visibility controls for VALORANT",
      paragraphs: [
        "Set the aiming area, how assistance moves and which body region it targets. Player Visual Options controls position, identity, equipment and health indicators, including what appears through cover.",
        "World Visual Options covers supported abilities and traps, plus spike time and defuse progress. Use the separate range controls and Combat Mode to keep the overlay readable.",
      ],
    },
  },
  'hwid-spoofer': {
    images: hwidShowcaseSlides,
    goodToKnow:
      'Run the identifier change and the cleaner, in the portal guide order, before you open the game that raised the hardware flag. Confirm current compatibility with support before you order.',
    limitations:
      'This product is for hardware ID flags. An account sanction that is still active stays active. Spoofing can conflict with publisher terms and can bring new penalties. A vendor update can end a listed anti-cheat note without a warning on this page first.',
    systemRequirements: [
      { icon: 'reqWindows', text: 'Windows 10 or 11, 64-bit.' },
      { icon: 'reqShieldGuide', text: 'In Windows Security, HVCI and Core Isolation on.' },
      { icon: 'reqSettings', text: 'Administrator rights for the spoof and the cleaner.' },
      { icon: 'reqWifi', text: 'Internet that stays up for activation and updates.' },
      { icon: 'reqSettings', text: 'TPM and Secure Boot on, in BIOS/UEFI.' },
    ],
    fullFeatures: [
      'Disk serial rewrite',
      'MAC address rewrite',
      'GPU identifier rewrite',
      'Related hardware fingerprints',
      'Trace cleaner in the license',
      'ACE, Javelin, and comparable stacks',
      'Riot Vanguard (Valorant)',
      'BattlEye',
      'Easy Anti-Cheat',
      'Ricochet (Call of Duty)',
    ],
    overview: {
      title: 'A refresh when the block is this PC',
      paragraphs: [
        'Start here after a hardware flag. Refresh disk serials on this machine. The same work covers MAC addresses and GPU IDs, plus related fingerprints, so sign-in can proceed. The coverage notes name Vanguard. They also name Easy Anti-Cheat and BattlEye. Ricochet is named with similar stacks. A cleaner is in the package.',
        'Other computers can take a new login while this one stops it at once. That is the case for this product. A sanction stored on the account record stays. Tooling on the two licenses is the same.',
      ],
    },
  },
  'cloud-dma': {
    images: [{
      src: '/images/cloud-dma/product.webp',
      width: 400,
      height: 400,
      alt: 'Cloud DMA icon with a glowing purple and blue cloud',
      caption: 'Single-PC setup',
      captionDesc: 'Hyper-V runs on the gaming PC and connects to the service for activation.',
    }],
    goodToKnow: 'GREENWARD, Static Server and AWS are each required and purchased separately.',
    limitations: 'Cloud DMA is the infrastructure layer. It is designed for one PC. Setups that require an external DMA device or a second physical computer are outside its scope.',
    systemRequirements: [
      { icon: 'reqWindows', text: '64-bit Windows 10 or 11 with Hyper-V available. Pro, Enterprise or Education is recommended.' },
      { icon: 'reqSettings', text: 'Intel VT-x or AMD-V enabled in firmware, with TPM and Secure Boot on.' },
      { icon: 'reqShieldGuide', text: 'HVCI and Core Isolation enabled in Windows Security.' },
      { icon: 'reqSettings', text: 'At least 8 GB RAM. 16 GB is recommended.' },
      { icon: 'reqWifi', text: 'Stable broadband for activation and ongoing connectivity.' },
    ],
    fullFeatures: ['Single-PC setup', 'Guided Hyper-V installation', 'Encrypted activation', 'Lifetime access'],
    overview: {
      title: 'Cloud DMA on one Windows PC',
      paragraphs: [
        'Cloud DMA runs its virtual environment on your gaming PC. The installer sets up Hyper-V and activates the service over an encrypted connection.',
        'GREENWARD, Static Server and AWS are required separately. Check your Windows edition, available memory and virtualization support before checkout.',
      ],
    },
  },
  'skin-changer': {
    images: skinChangerShowcaseSlides,
    goodToKnow:
      'The cosmetic shows inside your local client only. The inventory does not receive the item. Ask staff whether the title is covered before checkout.',
    limitations:
      'A cosmetic client can still conflict with game terms and can lead to account action. A finish is not a real good. It cannot be traded. It leaves when the client exits. A patch or a Windows update can change which games and items are listed.',
    systemRequirements: [
      { icon: 'reqWindows', text: 'Windows 10 or 11, 64-bit.' },
      { icon: 'reqShieldGuide', text: 'Core Isolation and HVCI enabled in Windows Security.' },
      { icon: 'reqSettings', text: 'Secure Boot and TPM enabled in BIOS/UEFI.' },
      { icon: 'reqWifi', text: 'Internet, plus loader access, after you purchase.' },
    ],
    fullFeatures: [
      'Presets for premium weapon finishes',
      'Presets for character outfits',
      'Presets for rare knife styles',
      'Coverage across major titles',
      'A lightweight client on this PC',
      'Cosmetic drawing on this screen only',
      'Monthly and lifetime cosmetic licenses',
      'Windows 10 and Windows 11 support',
    ],
    overview: {
      title: 'Finishes drawn here, not bought one by one',
      paragraphs: [
        'Skin Changer draws premium weapon skins onto supported games. Outfits and knife variants are in that same library. You do not buy each cosmetic on its own.',
        'The picture stays on your machine. It is not written to the account inventory. One library is shared by both plans. Before you purchase, ask support to confirm the title.',
      ],
    },
  },
};

const utilityAcquisitionSteps: Record<UtilityProductSlug, AcquisitionStep[]> = {
  [HWID_SPOOFER_SLUG]: hwidAcquisitionSteps,
  [CLOUD_DMA_SLUG]: cloudDmaAcquisitionSteps,
  [SKIN_CHANGER_SLUG]: skinChangerAcquisitionSteps,
};

const utilityAcquisitionTitles: Record<UtilityProductSlug, string> = {
  [HWID_SPOOFER_SLUG]: 'Order for this HWID license',
  [CLOUD_DMA_SLUG]: 'Setting up Cloud DMA',
  [SKIN_CHANGER_SLUG]: 'Before the cosmetic client',
};

function buildTierPages(t: Translations): ProductPage[] {
  return t.cheats.items.map((cheat) => {
    const slug = slugFromHref(cheat.href);
    const content = productContent[slug];
    const displayName = CHEAT_PRODUCT_NAME;
    return {
      slug,
      kind: 'tier',
      badge: cheat.badge,
      tier: cheat.tier,
      name: cheat.name,
      title: cheat.title,
      subtitle: cheat.heroDesc ?? cheat.desc,
      desc: cheat.desc,
      features: cheat.features,
      more: cheat.more,
      variant: cheat.variant,
      buyUrl: checkoutForSlug(slug),
      images: content.images,
      overview: content.overview,
      acquisition: acquisitionFor(displayName),
      goodToKnow: content.goodToKnow,
      limitations: content.limitations,
      fullFeatures: content.fullFeatures,
      systemRequirements: content.systemRequirements,
      about: tierAbout[slug],
      body: tierBodies[slug] ?? [],
      relatedBlogSlugs: productRelatedBlogSlugs[slug] ?? [],
      relatedForumSlugs: productRelatedForumSlugs[slug] ?? [],
    };
  });
}

function findProductCard(t: Translations, slug: UtilityProductSlug) {
  const match = (items: Translations['products']['items']) =>
    items.find((item) => slugFromHref(item.href) === slug);
  return match(t.products.items) ?? match(getTranslations('en').products.items);
}

function buildUtilityPages(t: Translations): ProductPage[] {
  return UTILITY_PRODUCT_SLUGS.flatMap((slug) => {
    const product = findProductCard(t, slug);
    const content = productContent[slug];
    if (!product || !content) return [];

    return [
      {
        slug,
        kind: 'utility' as const,
        badge: product.badge,
        category: product.category,
        name: product.title,
        title: product.title,
        subtitle: product.subtitle,
        desc: product.desc,
        features: product.features,
        more: Math.max(0, content.fullFeatures.length - product.features.length),
        buyUrl: checkoutForSlug(slug),
        images: content.images,
        overview: content.overview,
        acquisition: {
          title: utilityAcquisitionTitles[slug],
          steps: utilityAcquisitionSteps[slug],
        },
        goodToKnow: content.goodToKnow,
        limitations: content.limitations,
        fullFeatures: content.fullFeatures,
        systemRequirements: content.systemRequirements,
        body: utilityBodies[slug] ?? [],
        relatedBlogSlugs: productRelatedBlogSlugs[slug] ?? [],
        relatedForumSlugs: productRelatedForumSlugs[slug] ?? [],
      },
    ];
  });
}

export function getProductPages(locale: SiteLocale): ProductPage[] {
  const t = getTranslations(locale);
  return [...buildTierPages(t), ...buildUtilityPages(t)].map((page) =>
    deepApplySiteTokens(applyProductCopy(page, locale)),
  );
}

export function getCheatPages(locale: SiteLocale) {
  return getProductPages(locale).filter((p) => p.kind === 'tier');
}

export function getProductPage(slug: string, locale: SiteLocale) {
  return getProductPages(locale).find((p) => p.slug === slug);
}

/** Tier slugs for sitemap extras, store lives at `PRODUCT_BASE` only. */
export function getAllProductSlugs(): string[] {
  const slugs = getAllCheatSlugs();
  const catalog = new Set<string>(CHEAT_PRODUCT_SLUGS);
  for (const slug of slugs) {
    if (!catalog.has(slug as (typeof CHEAT_PRODUCT_SLUGS)[number])) {
      throw new Error(`Cheat slug "${slug}" missing from CHEAT_PRODUCT_SLUGS in src/config/catalog.ts`);
    }
  }
  return [];
}

export function getHwidSpooferPage(locale: SiteLocale) {
  return getProductPage(HWID_SPOOFER_SLUG, locale);
}

export function getUtilityPages(locale: SiteLocale) {
  return getProductPages(locale).filter((p) => p.kind === 'utility');
}

export function utilityProductPath(slug: UtilityProductSlug): string {
  return UTILITY_PRODUCT_PATHS[slug];
}

export function getAllCheatSlugs() {
  return getCheatPages('en').map((p) => p.slug);
}

export function getHeroSlides(locale: SiteLocale): ProductSlide[] {
  if (locale === 'en') return showcaseSlides;
  const gallery = productCopyByLocale[locale].gallery;
  return showcaseSlides.map((slide, index) => {
    const copy = gallery[index];
    if (!copy) return slide;
    return { ...slide, alt: copy.alt, caption: copy.caption, captionDesc: copy.captionDesc };
  });
}

const productCopyByLocale: Record<Exclude<SiteLocale, 'en'>, ProductCopyBundle> = {
  es: esProductCopy as ProductCopyBundle,
  de: deProductCopy as ProductCopyBundle,
  fr: frProductCopy as ProductCopyBundle,
};

function applyProductCopy(page: ProductPage, locale: SiteLocale): ProductPage {
  if (locale === 'en') return page;
  const copy = productCopyByLocale[locale];
  const bucket = page.kind === 'tier' ? copy.tiers[page.slug] : copy.utilities[page.slug];
  if (!bucket) return page;

  const isTier = page.kind === 'tier';
  const localizedSteps = isTier ? copy.acquisitionSteps : 'acquisitionSteps' in bucket ? bucket.acquisitionSteps : undefined;
  const localizedRequirements = isTier
    ? copy.systemRequirements
    : 'systemRequirements' in bucket
      ? bucket.systemRequirements
      : undefined;

  const acquisition: ProductAcquisition = {
    title: bucket.acquisitionTitle,
    steps: localizedSteps?.map((step) => ({ ...step })) ?? page.acquisition.steps,
  };

  const localizedGallery = isTier ? copy.gallery : 'gallery' in bucket ? bucket.gallery : undefined;
  const images = localizedGallery
    ? page.images.map((slide, index) => {
        const g = localizedGallery[index];
        if (!g) return slide;
        return { ...slide, alt: g.alt, caption: g.caption, captionDesc: g.captionDesc };
      })
    : page.images;
  const fullFeatures =
    'fullFeatures' in bucket && bucket.fullFeatures?.length ? bucket.fullFeatures : page.fullFeatures;

  const systemRequirements = page.systemRequirements.map((req, index) => ({
    ...req,
    text: localizedRequirements?.[index] ?? req.text,
  }));

  return {
    ...page,
    overview: bucket.overview,
    body: bucket.body,
    about: 'about' in bucket ? bucket.about : page.about,
    goodToKnow: bucket.goodToKnow,
    limitations: bucket.limitations,
    acquisition,
    images,
    fullFeatures,
    systemRequirements,
  };
}
