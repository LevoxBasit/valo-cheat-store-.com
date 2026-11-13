import type { Translations } from './types';
import {
  HWID_SPOOFER_PATH,
  PRODUCT_BASE,
  PRODUCTS_HUB_PATH,
  SITE_DOMAIN,
  SITE_NAME,
  SKIN_CHANGER_PATH,
  CLOUD_DMA_PATH,
} from '../config/site';

const productBase = PRODUCT_BASE;

export const en: Translations = {
  site: {
    name: SITE_NAME,
    domain: SITE_DOMAIN,
    title: "Valorant Cheats | Aimbot & ESP | VALO CHEAT STORE",
    description:
      "Explore Valorant Cheats for Windows with configurable aimbot controls, player ESP, wallhack visuals, ability tracking, spike information, and saved settings.",
  },
  nav: [
    {
      id: 'products',
      href: PRODUCTS_HUB_PATH,
      label: 'Products',
      shortLabel: 'Products',
      sheetLabel: 'Browse products',
    },
    { id: 'blog', href: '/blog/', label: 'Blog', sheetLabel: 'Read the blog' },
    { id: 'forum', href: '/forum/', label: 'Forum', sheetLabel: 'Open the forum' },
    { id: 'faq', href: '/faq/', label: 'FAQ', sheetLabel: 'Pre-purchase questions' },
    { id: 'support', href: '/support/', label: 'Support', sheetLabel: 'Get support' },
  ],
  hero: {
    status: "Confirm current Windows and VALORANT compatibility before checkout.",
    eyebrow: 'Unleash Your True Advantage',
    titleLead: 'Valorant ',
    titleAccent: 'Cheats for Windows PC',
    subtitle:
      "Adjust your aim, see player positions around cover, and track supported abilities and spike progress in one Windows menu.",
    ctaPrimary: 'View products',
    metrics: [
    {
      "label": "Aim FOV",
      "strong": "Adjustable"
    },
    {
      "label": "Spike",
      "strong": "Time"
    },
    {
      "label": "Player ESP",
      "strong": "Custom"
    },
    {
      "label": "Help",
      "strong": "Support"
    }
  ],
    statusPills: [
    "Aimbot",
    "Aim smoothness",
    "Player ESP",
    "Wallhack",
    "View direction",
    "Shield bars",
    "Ability ESP",
    "Combat Mode",
    "Saved configs",
    "Support",
    "Spike time"
  ],
  },
  features: {
    eyebrow: 'Features',
    title: "Aim, player overlays and world information",
    subtitle:
      "Review the controls for aiming, player visibility, agent utility and the spike.",
    items: [
      {
        title: "Player ESP",
        subtitle: "Player details at a glance",
        desc: "Boxes, skeletons and head markers show player position and posture. Add health, shields, agent identity or equipment when you need more context.",
        bullets: [
    "Boxes and skeletons",
    "Health and shield bars",
    "Agent and equipment labels",
    "Rank, level and distance"
  ],
        tags: [
    "player esp",
    "skeleton",
    "shields"
  ],
        bento: 'sm:col-span-2 lg:col-span-12 lg:col-start-1 lg:row-start-1',
      },
      {
        title: "Wallhack visuals",
        subtitle: "Position around cover",
        desc: "Player overlays can show positions obscured by cover. Snaplines and view direction add a reference for where a player is and which way they face.",
        bullets: [
    "Snaplines",
    "View direction",
    "Distance controls"
  ],
        tags: [
    "wallhack",
    "snaplines",
    "view direction"
  ],
        bento: 'sm:col-span-2 lg:col-span-8 lg:col-start-1 lg:row-start-2',
      },
      {
        title: "Aimbot",
        subtitle: "Adjust how aim responds",
        desc: "Field of view sets the targeting area. Smoothness and speed control how aim assistance moves toward a selected target.",
        bullets: [
    "Field of view",
    "Smoothness",
    "Speed",
    "FOV indicator"
  ],
        tags: [
    "aimbot",
    "fov",
    "smoothness"
  ],
        bento: 'sm:col-span-2 lg:col-span-6 lg:col-start-1 lg:row-start-3',
      },
      {
        title: "Target controls",
        subtitle: "Choose the targeting conditions",
        desc: "Use bone selection, stickiness and the visibility check to control which targets the aiming module considers and how it follows them.",
        bullets: [
    "Target bone",
    "Stickiness",
    "Visibility check",
    "Target line"
  ],
        tags: [
    "targeting",
    "visibility",
    "bone selection"
  ],
        bento: 'sm:col-span-2 lg:col-span-6 lg:col-start-7 lg:row-start-3',
      },
      {
        title: "Ability ESP",
        subtitle: "Track supported utility",
        desc: "World ESP can mark supported agent abilities. Icons and distance labels help distinguish utility from player markers.",
        bullets: [
    "Ability indicators",
    "Agent-specific options",
    "Icons and distance"
  ],
        tags: [
    "ability esp",
    "world esp",
    "utility"
  ],
        bento:
          'sm:col-span-2 lg:col-span-8 lg:row-span-2 lg:col-start-1 lg:row-start-4',
      },
      {
        title: "Spike tracking",
        subtitle: "Follow the objective",
        desc: "Spike Time and Defuse Progress put objective information in the world overlay during supported spike states.",
        bullets: [
    "Spike time",
    "Defuse progress"
  ],
        tags: [
    "spike",
    "defuse",
    "objective"
  ],
        bento:
          'sm:col-span-2 lg:col-span-4 lg:row-span-2 lg:col-start-9 lg:row-start-4',
      },
      {
        title: "Combat Mode",
        subtitle: "Clear ability and trap markers",
        desc: "The Combat Mode hotkey hides Ability and Trap ESP so utility markers take up less space during a fight.",
        bullets: [
    "Combat Mode hotkey",
    "Hides Ability ESP",
    "Hides Trap ESP"
  ],
        tags: [
    "combat mode",
    "overlay",
    "hotkey"
  ],
        bento: 'sm:col-span-2 lg:col-span-6 lg:col-start-1 lg:row-start-6',
      },
      {
        title: "Trap ESP",
        subtitle: "Identify placed traps",
        desc: "Trap ESP marks supported placed utility. The World Visual Options menu includes a separate maximum distance for these indicators.",
        bullets: [
    "Trap markers",
    "World range limit",
    "Per-agent options"
  ],
        tags: [
    "trap esp",
    "utility",
    "range"
  ],
        bento: 'sm:col-span-2 lg:col-span-6 lg:col-start-7 lg:row-start-6',
      },
      {
        title: "Saved configurations",
        subtitle: "Keep a reusable setup",
        desc: "Create and save configurations for different overlay layouts. Load a saved config or unload it from the menu.",
        bullets: [
    "Create and save",
    "Load and unload",
    "Menu font size"
  ],
        tags: [
    "configurations",
    "font size",
    "menu"
  ],
        bento: 'sm:col-span-2 lg:col-span-4 lg:col-start-9 lg:row-start-2',
      },
    ],
  },
  whyUs: {
    eyebrow: 'Why us',
    title: "What comes with Valorant Cheats",
    subtitle:
      "Compare the documented aim controls, overlays and configuration options.",
    usLabel: '{siteName}',
    otherLabel: 'Other providers',
    variesLabel: 'Varies',
    rows: [
    {
      "title": "Adjustable aiming",
      "desc": "Set the aiming FOV, movement speed and smoothness, with separate visibility and target bone options."
    },
    {
      "title": "Player overlays",
      "desc": "Show position, view direction, shields, health and equipment with configurable player markers."
    },
    {
      "title": "Ability and trap indicators",
      "desc": "Display supported world objects with optional icons and distance labels."
    },
    {
      "title": "Spike information",
      "desc": "Read Time and Defuse Progress in World Visual Options."
    },
    {
      "title": "Combat Mode",
      "desc": "Use the hotkey to hide Ability and Trap ESP."
    },
    {
      "title": "Saved settings",
      "desc": "Create, save, load and unload configurations in the Misc menu."
    }
  ],
    metrics: [
    {
      "value": "2",
      "title": "Overlay groups",
      "desc": "Player Visual Options and World Visual Options each have their own controls."
    },
    {
      "value": "4",
      "title": "Menu categories",
      "desc": "Aim, player visuals, world visuals and miscellaneous settings."
    },
    {
      "value": "1",
      "title": "Combat Mode hotkey",
      "desc": "Hide ability and trap markers together."
    }
  ],
  },
  setup: {
    eyebrow: 'Setup guide',
    titleLead: "Get ready with",
    titleHighlight: "three setup checks",
    intro:
      "Confirm compatibility and the Cloud DMA requirements before ordering Valorant Cheats.",
    ctaPrimary: 'View product',
    ctaSecondary: 'Read the setup FAQ',
    ctaPrimaryHref: productBase,
    ctaSecondaryHref: '/faq/',
    steps: [
    {
      "step": "Step 1",
      "title": "Confirm your Windows build",
      "desc": "Give support your PC details and current game build before checkout."
    },
    {
      "step": "Step 2",
      "title": "Check Cloud DMA prerequisites",
      "desc": "Cloud DMA is a separate product required for full functionality on supported builds."
    },
    {
      "step": "Step 3",
      "title": "Follow your order instructions",
      "desc": "Use the setup instructions provided after purchase. Save settings from the Misc menu when your setup is ready."
    }
  ],
  },
  compatibility: {
    eyebrow: 'Platform support',
    title: "Check your Windows setup",
    subtitle: "Confirm the current game build and review the separate Cloud DMA requirements before purchase.",
    items: [
    "Windows PC",
    "VALORANT",
    "Riot Vanguard",
    "Cloud DMA",
    "Current game build",
    "Stable connection",
    "Account restrictions"
  ],
  },
  cheats: {
    eyebrow: 'Main product',
    title: "Valorant Cheats",
    subtitle: "Adjustable aim, player ESP and world information for VALORANT.",
    viewAll: 'View product details',
    explore: 'Explore',
    items: [
      {
        badge: 'Main product',
        tier: 'Valorant',
        name: "Valorant Cheats",
        title: "Valorant Cheat Menu for Windows",
        desc: "Adjustable aimbot, wallhack visuals, player and world ESP, and spike information.",
        homeDesc:
          "Manage aim behavior, player markers and utility overlays separately. Follow spike timing and save your preferred setup.",
        heroDesc:
          "Tune aim FOV, smoothness and target selection. Add player, ability and spike data to the overlay, then save your settings. Full functionality on supported builds requires Cloud DMA.",
        features: [
    "Aimbot",
    "Player ESP",
    "Wallhack",
    "Ability ESP",
    "Spike tracking",
    "Saved configs"
  ],
        more: 20,
        href: productBase,
        variant: 'essential',
      },
    ],
  },
  products: {
    eyebrow: 'Store',
    title: 'Our products',
    subtitle:
      'Compare the cheat menu and the utilities on this grid. Open a product page for the feature list and checkout.',
    viewAll: 'View all cheats',
    backToCheats: 'Back to product',
    showcaseHeading: 'Product Overview',
    experience: {
      eyebrow: 'Experience',
      title: 'Menu layers · After checkout',
      subtitle:
        "Review the menu options and check what you need for delivery and setup.",
      previewLabel: 'In-game layers',
      accessDividerTop: 'Preview',
      accessDividerBottom: 'Access',
    },
    hwidPage: {
      showcaseHeading: 'Product preview',
      overviewSubtitle:
        'Which IDs the panel rewrites, which anti-cheat families are listed, and how a machine flag differs from an account sanction.',
      highlights: {
        eyebrow: 'At a glance',
        title: 'Hwid Spoofer: What a hardware refresh covers',
        desc: 'After a hardware flag, the panel can rewrite disk IDs. It can rewrite MAC IDs and GPU IDs, and related IDs. The aim is a sign-in on this PC. Tables lower on the page list the rows.',
      },
      featuresSection: {
        eyebrow: 'Listed rows',
        title: 'IDs and the published families',
        desc: 'A row names a fingerprint field the panel edits, or an anti-cheat family written on this page.',
      },
      experience: {
        eyebrow: 'After checkout',
        title: 'Panel notes, then portal order',
        subtitle:
          'Callouts for the panel are on the left. License delivery and the setup order are on the right.',
        previewLabel: 'Panel illustration',
        accessDividerTop: 'Panel',
        accessDividerBottom: 'Order',
      },
      highlightsMore: '{count} further rows are in the feature table lower on the page.',
    },
    utilityPages: {
      'cloud-dma': {
        showcaseHeading: 'Cloud DMA setup',
        overviewSubtitle: 'Check Windows, Hyper-V and the separate purchases before ordering.',
        highlights: { eyebrow: 'In short', title: 'A Hyper-V environment on one PC', desc: 'The guided installer sets up the virtual environment and activates the service over an encrypted connection.' },
        featuresSection: { eyebrow: 'Included', title: 'Cloud DMA features', desc: 'The lifetime license covers the Cloud DMA infrastructure layer.' },
        experience: { eyebrow: 'Setup', title: 'From purchase to activation', subtitle: 'Follow the Windows and Hyper-V checks before you run the installer.', previewLabel: 'Setup', accessDividerTop: 'Setup', accessDividerBottom: 'Order' },
        highlightsMore: '{count} more capability rows are further down this page.',
      },
      'skin-changer': {
        showcaseHeading: 'Client frames',
        overviewSubtitle:
          'Where the finish is drawn, what stays out of your inventory, and how to check a title before checkout.',
        highlights: {
          eyebrow: 'Library',
          title: 'The finish library on this PC',
          desc: 'Premium weapon skins are in the library. So are outfits and knife styles, inside supported games. Each item is not its own purchase.',
        },
        featuresSection: {
          eyebrow: 'Groups',
          title: 'Cosmetic groups',
          desc: 'These finish types are available once the cosmetic license is active.',
        },
        experience: {
          eyebrow: 'When access arrives',
          title: 'Shots, then portal access',
          subtitle: 'Shot notes stay on the left side. The right side covers portal access, then how the menu is set up.',
          previewLabel: 'Shots',
          accessDividerTop: 'Frames',
          accessDividerBottom: 'Order',
        },
        highlightsMore: '{count} cosmetic rows continue lower on this page.',
      },
    },
    swipeHint: 'Swipe for more screenshots',
    checkoutEyebrow: 'Checkout',
    checkoutSelect: 'Select subscription',
    checkoutSingle: 'Purchase option',
    checkoutTotal: 'Total',
    bestValue: 'Best value',
    planWeekly: '1 Week',
    planWeeklyNote: '7 days',
    planMonthly: 'Monthly',
    planLifetime: 'Lifetime',
    planOneTime: 'One-time access',
    planPerMonth: '31 days of access',
    planOneTimeNote: 'Unlimited access',
    get: 'Get',
    explore: 'Explore',
    buyNow: 'View Purchase Options',
    viewDetails: 'View details',
    items: [
      {
        badge: 'Available',
        category: 'Hardware utility',
        title: "HWID Spoofer",
        subtitle:
          "Review which disk, network and GPU identifiers the utility handles.",
        desc: "Covers disk serials, MAC addresses, GPU identifiers and related hardware fields. Includes a trace cleaner.",
        features: ['Disk serial rewrite', 'MAC rewrite', 'GPU ID rewrite', 'Cleaner in the license'],
        more: 0,
        href: HWID_SPOOFER_PATH,
      },
      {
        badge: 'Available',
        category: 'Single-PC infrastructure',
        title: 'Cloud DMA',
        subtitle: 'A Hyper-V environment for one Windows PC with guided installation and encrypted activation.',
        desc: "GREENWARD, Static Server and AWS are required separately. Review the Hyper-V and Windows requirements before checkout.",
        features: ['Single-PC setup', 'Guided Hyper-V installation', 'Encrypted activation', 'Lifetime access'],
        more: 0,
        href: CLOUD_DMA_PATH,
      },
      {
        badge: 'Available',
        category: 'On-screen cosmetics',
        title: 'Client Skin Changer for Supported Titles',
        subtitle:
          "Preview weapon finishes, outfits and knife styles on your display in supported games.",
        desc: "Choose looks from a local library. Confirm game coverage before purchase.",
        features: ['Weapon finish looks', 'Outfit looks', 'Knife style looks', 'Major titles covered'],
        more: 0,
        href: SKIN_CHANGER_PATH,
      },
    ],
  },
  blog: {
    eyebrow: 'Blog',
    title: 'Guides and updates',
    subtitle: "Guides to VALORANT aim controls, overlays, PC requirements and purchase checks.",
    latestTitle: "Valorant Guides",
    latestSubtitle: "Find practical explanations of menu controls, prerequisites and account risks.",
    filterAll: 'All articles',
    emptyFilter: 'No articles match this filter.',
    emptyArchive: 'No articles yet. New guides will show up here.',
    viewAll: 'View all articles',
    read: 'Read full article',
    articleActionsAria: 'Continue reading',
    buyCta: "Buy Valorant Cheats",
    buyHwidCta: 'Buy the HWID license',
    moreArticles: 'More articles',
    sidebarAria: 'Article sidebar',
    tocTitle: 'In this article',
    relatedTitle: 'Related guides',
    filterToolbarAria: 'Filter articles by topic',
    items: [],
  },
  workflow: {
    eyebrow: 'How it works',
    badge: '4 easy steps',
    titleBefore: 'From status check to',
    titleHighlight: 'saved profile.',
    subtitle: "Check setup requirements, choose the product and save your menu settings.",
    ctaLabel: 'View product',
    ctaHref: productBase,
    ctaSecondary: 'Setup FAQ',
    ctaSecondaryHref: '/faq/',
    items: [
      {
        num: '01',
        phase: 'Before purchase',
        title: "Confirm compatibility",
        desc: "Check your Windows version, the current VALORANT build and the Cloud DMA dependency.",
      },
      {
        num: '02',
        phase: 'Checkout',
        title: 'Choose your product',
        desc: "Review the main product and verify which separately licensed utilities your setup requires.",
      },
      {
        num: '03',
        phase: "Setup",
        title: "Follow the order instructions",
        desc: "Open the instructions included with your order and contact support if a step is unclear.",
      },
      {
        num: '04',
        phase: 'In-game',
        title: 'Save your profile',
        desc: "Create and save a configuration in Misc Options. Load it again when you want those settings.",
      },
    ],
  },
  support: {
    eyebrow: 'Support',
    title: "Valorant Cheats Support",
    subtitle: 'Get help with an order, find setup instructions, or look up a common question.',
    channels: [
      {
        id: 'tickets',
        title: 'Support tickets',
        desc: 'Sign in to get help with an order, account, or installation and track replies in one place.',
        linkLabel: 'Open a ticket',
      },
      {
        id: 'documentation',
        title: 'Setup guides',
        desc: 'Find installation instructions, learn where to find your license key, and troubleshoot common errors.',
        linkLabel: 'View setup guides',
      },
      {
        id: 'faq',
        title: 'Common questions',
        desc: 'Find answers about payment, delivery, account access, and order status.',
        linkLabel: 'Read the FAQ',
      },
    ],
    ticketTitle: 'What to include in a ticket',
    ticketItems: [
      { title: 'Order number', desc: 'Include your order number for payment or delivery questions.' },
      { title: 'Setup details', desc: 'For technical issues, include the product name and your Windows version.' },
      { title: 'What happened', desc: 'Describe the step that failed and include the exact error or a screenshot.' },
    ],
  },
  faq: {
    eyebrow: 'FAQ',
    title: "Questions before checkout",
    subtitle: "Windows compatibility, Cloud DMA, account risks and order help.",
    items: [
    {
      "num": "01",
      "q": "How do I confirm compatibility before buying?",
      "a": "Ask support to confirm the current VALORANT build, your Windows version and the Cloud DMA setup before you order."
    },
    {
      "num": "02",
      "q": "What happens after I buy?",
      "a": "Use the delivery and setup instructions provided with the order. Contact support if a download or activation detail is missing."
    },
    {
      "num": "03",
      "q": "Can using Valorant Cheats lead to account penalties?",
      "a": "Yes. Riot can sanction accounts for third-party gameplay modifications. Compatibility can also change after game and Vanguard updates."
    },
    {
      "num": "04",
      "q": "Which platforms are supported?",
      "a": "The product is documented for Windows PC. Confirm your exact Windows version and build with support before purchase."
    },
    {
      "num": "05",
      "q": "Can I move my license to a new PC?",
      "a": "Ask support to confirm the transfer policy for your order before changing PCs."
    },
    {
      "num": "06",
      "q": "Where are products and utilities listed?",
      "a": "The products page lists Valorant Cheats and the three separate utilities. Open each product page for requirements and checkout."
    }
  ],
  },
  footer: {
    homeLink: '{siteName}',
    tagline: "Valorant Cheats for Windows with aimbot, player ESP, world overlays and saved settings.",
    trademark: '{game} is a trademark of its respective owner. {siteDomain} is not affiliated with or endorsed by that owner.',
    explore: 'Explore',
    exploreLinks: [
      { id: 'products', href: '/', label: 'Feature overview', ariaLabel: 'Features', scrollTarget: 'features' },
      { id: 'products', href: PRODUCTS_HUB_PATH, label: 'All products', ariaLabel: 'All products' },
      { id: 'products', href: productBase, label: 'Cheat features and modules', ariaLabel: '{cheatProduct}' },
      { id: 'hwidSpoofer', href: HWID_SPOOFER_PATH, label: 'HWID panel', ariaLabel: 'HWID Spoofer' },
      { id: 'products', href: CLOUD_DMA_PATH, label: 'Cloud DMA', ariaLabel: 'Cloud DMA' },
      { id: 'products', href: SKIN_CHANGER_PATH, label: 'Skin client', ariaLabel: 'Skin Changer' },
      { id: 'blog', href: '/blog/', label: 'Guides and articles', ariaLabel: 'Blog' },
      { id: 'forum', href: '/forum/', label: 'Community forum', ariaLabel: 'Forum' },
    ],
    supportLinks: [
      { href: '/faq/', label: 'Pre-purchase FAQ', ariaLabel: 'FAQ' },
      { href: '/support/', label: 'Contact support', ariaLabel: 'Support' },
    ],
    support: 'Support',
    legal: 'Legal',
    privacy: 'Privacy Policy',
    terms: 'Terms & Conditions',
    about: 'About',
  },
  legalPages: {
    about: {
      title: 'About {siteName}',
      description:
        '{siteName} publishes {cheatProduct}, the utility pages, and support notes at {siteDomain}.',
      sections: [
        {
          heading: 'About VALO CHEAT STORE',
          paragraphs: [
            '{siteName} is a PC catalog for VALORANT tools. The site lists the cheat menu, HWID Spoofer, Cloud DMA, and Skin Changer.',
            'The catalog covers product features and requirements. External checkout handles the order.',
          ],
        },
        {
          heading: 'What we publish',
          paragraphs: [
            'The main product lists adjustable aim assistance, player and world overlays, and saved configurations.',
            'Current prices are shown at checkout. The guides cover aiming controls, visual overlays, and Windows setup.',
            'Pages change when a patch lands or a menu option moves. Check the supported build with support before use.',
          ],
        },
        {
          heading: 'How setup works',
          paragraphs: [
            'After payment, the operator portal opens. Download the current Windows loader there.',
            'Confirm compatibility before ordering. Game and Vanguard updates can change which features work.',
          ],
        },
        {
          heading: 'Requirements',
          paragraphs: [
            'The cheat is listed for 64-bit Windows 10 or Windows 11. macOS and Linux are not on that list.',
            'Utilities also ask for HVCI, Core Isolation, TPM, and Secure Boot where their pages say so.',
          ],
        },
        {
          heading: 'Support',
          paragraphs: [
            'Use the Support page to open a ticket for order or setup issues. Include your order number or the exact error, depending on the issue.',
            'The FAQ and the read-only forum archive cover setup notes too. Check the supported build with support before use.',
          ],
        },
      ],
    },
    privacy: {
      title: 'Privacy Policy',
      description:
        'Analytics, cookies, and the email you send with a support ticket on {siteDomain}.',
      sections: [
        {
          heading: 'Information we collect',
          paragraphs: [
            'If Google Analytics is on, it can record page views, device type, browser, and an approximate region. Payment and license delivery run on external checkout pages. {siteDomain} does not keep payment card numbers.',
          ],
        },
        {
          heading: 'How we use data',
          paragraphs: [
            'Those analytics show which guides and product pages get used, so broken links and thin pages can be fixed. A support ticket can keep the email and the message until that issue is closed.',
          ],
        },
        {
          heading: 'Cookies',
          paragraphs: [
            'Cookies on this site are limited to analytics. Block them in the browser and the pages still load.',
          ],
        },
        {
          heading: 'Support',
          paragraphs: [
            'Privacy questions go through the Support page. Purchase and refund rules are in the Terms & Conditions.',
          ],
        },
      ],
    },
    terms: {
      title: 'Terms & Conditions',
      description:
        'What you buy, how licenses work, when a refund can be considered, and the account penalty you accept on {siteDomain}.',
      sections: [
        {
          heading: 'Agreement',
          paragraphs: [
            'Last updated: September 2026. Using {siteDomain}, or finishing checkout for a product listed here, means you accept these Terms & Conditions and the Privacy Policy.',
          ],
        },
        {
          heading: 'What you purchase',
          paragraphs: [
            'The products are {cheatProduct} and the utilities on the products page. The order provides access and setup instructions.',
            'Each product page states what that purchase includes at the time you pay. A VALORANT update or an anti-cheat update can change the modules.',
          ],
        },
        {
          heading: 'Checkout and delivery',
          paragraphs: [
            'Payment and the license are handled on external checkout pages. {siteDomain} does not process or store payment card numbers.',
            'Use the delivery and setup instructions included with your order.',
          ],
        },
        {
          heading: 'License use',
          paragraphs: [
            'A license is for you alone. Do not share loader files, portal logins, or license keys. HWID and device limits follow the tier and are enforced in the portal.',
          ],
        },
        {
          heading: 'Refunds and purchases',
          paragraphs: [
            'Review the refund conditions shown at external checkout before ordering.',
            'If you need help with a product, use the Support page. Include the order email, Windows version, game build, and a screenshot or the exact loader error.',
            'Contact support for help with delivery or access issues.',
          ],
        },
        {
          heading: 'Availability and risk',
          paragraphs: [
            'Third-party tools for VALORANT can stop working after a game update or an anti-cheat update. Using them can lead to account action.',
            'Check the supported build with support before use. Compatibility can change after a game or Vanguard update.',
          ],
        },
        {
          heading: 'Changes',
          paragraphs: [
            'These terms can be updated. The Last updated date at the top changes when that happens. Using the site after that date means you accept the revised terms.',
          ],
        },
        {
          heading: 'Support',
          paragraphs: [
            'Terms, billing, and loader questions go through the buttons on the Support page. The Privacy Policy covers how site data is handled.',
          ],
        },
      ],
    },
    support: {
      title: '{siteName} Support',
      description:
        'Loader errors, HWID resets, and checkout questions are handled from {siteDomain}.',
    },
  },
  common: {
    breadcrumbHome: 'Home',
    breadcrumbProducts: 'Products',
    breadcrumbBlog: 'Blog',
    breadcrumbForum: 'Forum',
    breadcrumbFaq: 'FAQ',
    breadcrumbAbout: 'About',
    breadcrumbPrivacy: 'Privacy',
    breadcrumbTerms: 'Terms',
    breadcrumbSupport: 'Support',
    contactSupport: 'Contact support',
  },
  notFound: {
    metaDescription:
      'This address is not a page on {siteDomain}. Open the homepage or the product list to keep browsing.',
    title: 'Page not found',
    documentTitle: 'This address is not a page',
    body: 'That address is missing. Go back to the homepage or open the product list.',
    backHome: 'Back to home',
    viewProducts: 'View products',
    viewElite: 'View product page',
  },
  pages: {
    faq: {
      eyebrow: 'Help center',
      title: "Valorant Cheats FAQ",
      description:
        "Check Windows and Cloud DMA prerequisites, order delivery, aiming options and overlay controls.",
      schemaName: "Valorant Cheats FAQ",
      schemaDescription:
        "Find answers about Windows compatibility, Cloud DMA, aiming controls, visual overlays, ordering and support.",
    },
    forum: {
      eyebrow: "VALORANT forum",
      title: "Valorant Forum",
      description:
        "Read-only discussion archive. Replies are closed.",
      exploreGuides: 'Explore the guides',
      postsAria: 'Community posts',
      sortAria: 'Post sorting',
      sortPopular: 'Popular',
      sortLatest: 'Latest',
      sortTop: 'Most discussed',
      filterAria: 'Filter discussions by topic',
      filterAll: 'All topics',
      resultsCount: 'guide discussions',
      voteAria: 'Discussion voting',
      upvoteAria: 'Upvote this discussion',
      downvoteUnavailableAria: 'Downvoting is unavailable',
      guideTeam: '{siteName} guide team',
      guideBasedQa: 'Guide-based Q&A',
      fromGuide: 'From the guide:',
      comments: 'comments',
      closedThread: 'Closed thread',
      closedBy: 'Closed by archive',
      repliesClosed: 'Replies are closed',
      readDiscussion: 'Read discussion',
      empty: 'No discussions match. Try another search or topic.',
      emptyArchive: 'No discussions yet. New threads will show up here.',
      categoryGeneral: 'General',
      categoryGuides: 'Guides & Builds',
      categoryPatch: 'Patch Talk',
      categoryCommunity: 'Community',
      categoryLabels: {
        'Gameplay Questions': 'Gameplay Questions',
        'Product Questions': 'Product Questions',
        'Setup & Support': 'Setup & Support',
        'Game Updates': 'Game Updates',
        'Features & Customization': 'Features & Customization',
        'Account & PC Questions': 'Account & PC Questions',
        'PC Performance & Support': 'PC Performance & Support',
      },
      paginationAria: 'Discussion pages',
      pagePrevious: 'Previous',
      pageNext: 'Next',
      sidebarTitle: '{siteName} Community',
      sidebarIntro: 'Read-only archive. Threads stay up for reference, you cannot start a thread or reply.',
      statsDiscussions: 'guide discussions',
      statsTopics: 'topics',
      exploreAllGuides: 'Explore all guides',
      communitiesHeading: 'Communities',
      browseRelated: 'Browse related Q&A',
      browseAllCommunities: 'Browse all communities',
      guidelinesHeading: 'Community guidelines',
      guideline1: 'Keep it friendly and constructive',
      guideline2: 'Stay on topic and add context',
      guideline3: 'Mark spoilers and sensitive content',
      readFullGuidelines: 'Read the full guidelines',
      sidebarFoot: 'About · Guidelines · Privacy · Terms',
    },
    utilities: {
      title: 'HWID Spoofer',
      description: 'Hardware identifiers are refreshed when other PCs accept a login and this one rejects it at once.',
      viewDetails: 'Open the utility page',
      includes: 'In the license:',
      schemaName: 'HWID Spoofer',
    },
  },
  pageSeo: {
    '/': {
      title: "Valorant Cheats | Aimbot & ESP | VALO CHEAT STORE",
      description:
        "Explore Valorant Cheats for Windows with configurable aimbot controls, player ESP, wallhack visuals, ability tracking, spike information, and saved settings.",
    },
    '/cheats/': {
      title: "Valorant Cheat Menu | Aimbot, Player ESP & Spike Tracking",
      description:
        "Review aim controls, player and world ESP, Spike Time, Defuse Progress, saved configurations and the Cloud DMA dependency for Valorant Cheats.",
    },
    '/hwid-spoofer/': {
      title: "HWID Spoofer | Hardware IDs & Windows Requirements",
      description:
        "Review disk, network and GPU identifiers, the included cleaner and Windows requirements for the HWID Spoofer.",
    },
    '/products/': {
      title: "VALO CHEAT STORE Products | Compare Cheats & Utilities",
      description:
        "Compare Valorant Cheats, HWID Spoofer, Cloud DMA and Skin Changer by features, requirements and purchase options.",
    },
    '/cloud-dma/': {
      title: "Cloud DMA | Hyper-V Requirements & Setup",
      description:
        "Check the Windows, virtualization and memory requirements for Cloud DMA, plus the three separate services needed before setup.",
    },
    '/skin-changer/': {
      title: "Skin Changer | Local Cosmetic Previews for PC",
      description:
        "Explore local weapon, outfit and knife previews for supported games. Review Windows requirements and confirm game coverage before checkout.",
    },
    '/blog/': {
      title: "Valorant Guides | Aimbot, ESP & PC Setup",
      description:
        "Understand VALORANT aim controls, player and world overlays, objective information and Windows setup requirements.",
    },
    '/forum/': {
      title: "Valorant Forum | Read-only Discussion Archive",
      description:
        "Browse the read-only discussion archive from VALO CHEAT STORE.",
    },
    '/faq/': {
      title: "Valorant Cheats FAQ | Windows, Cloud DMA & Checkout",
      description:
        "Find answers about Windows compatibility, Cloud DMA, aiming controls, visual overlays, ordering and support.",
    },
    '/terms/': {
      title: 'Terms of Sale | Licenses and Refunds',
      description:
        'Review how orders and licenses are handled and where to find the applicable refund conditions.',
    },
    '/privacy/': {
      title: 'Privacy Policy | Analytics, Cookies and Tickets',
      description:
        'What {siteDomain} collects in analytics, which cookies it sets, and how long a support ticket keeps your email.',
    },
    '/about/': {
      title: "About VALO CHEAT STORE | Products & Support",
      description:
        "Learn what VALO CHEAT STORE covers and where to find product requirements, checkout links and support.",
    },
    '/support/': {
      title: 'Support | Loader, Orders and Setup Help',
      description:
        'Open a support ticket for order or setup issues, find installation guides, and read common questions about payment and account access.',
    },
  },
  ui: {
    skipLink: 'Skip to main content',
    browseCheatsNav: 'Try Now',
    browseCheatsNavMobile: 'View product',
    homeAria: "VALO CHEAT STORE home",
    menuOpen: 'Open menu',
    themeLight: 'Switch to light mode',
    languageSwitcherLabel: 'Language',
    languageNames: {
      en: 'English',
      es: 'Español',
      de: 'Deutsch',
      fr: 'Français',
    },
  },
};
