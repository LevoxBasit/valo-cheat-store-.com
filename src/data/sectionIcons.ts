import type { IconName } from '../components/icons/types';

export const featureIcons: IconName[] = [
  'featureEsp',
  'lootEsp',
  'featureAimbot',
  'softAim',
  'featureRadar',
  'heroStatClock',
  'settings',
  'featureUtilitySuite',
  'compareCloudBackup',
];

export const setupStepIcons: IconName[] = ['acqPackage', 'acqSettings', 'acqCheck'];

export const blogTagIcons: Record<string, IconName> = {
  Guides: 'navBlog',
  Setup: 'settings',
  Features: 'layers',
  Updates: 'refresh',
  Troubleshooting: 'alert',
  'Buyer Guides': 'tag',
  'Anti-Cheat': 'shieldCheck',
  'Ban Help': 'alert',
  'Setup Guides': 'settings',
  Tools: 'settings',
  Comparisons: 'layers',
  Safety: 'shieldCheck',
};

/** Icon order matches `hero.statusPills` in each locale dictionary. */
/** Parallel to hero.statusPills; update both together if future game changes label order. */
export const heroStatusPillIcons: IconName[] = [
  'featureAimbot',
  'softAim',
  'featureEsp',
  'skeletonEsp',
  'featureRadar',
  'shieldCheck',
  'featureUtilitySuite',
  'settings',
  'compareCloudBackup',
  'support247',
  'heroStatClock',
];

export const heroStatIcons: IconName[] = [
  'softAim',
  'heroStatClock',
  'featureEsp',
  'heroStatHeadphones',
];

export const cheatTierIcons: Record<string, IconName> = {
  Lite: 'tierLite',
  Pro: 'tierPro',
  Elite: 'tierElite',
};

export const productCategoryIcons: Record<string, IconName> = {
  'Core product': 'coreProduct',
  'External suite': 'externalSuite',
  'DMA hardware': 'dmaHardware',
  'System utility': 'systemUtility',
  'Account recovery': 'accountRecovery',
  Cosmetic: 'cosmetic',
};

/** After-purchase timeline on product detail, one distinct icon per step */
export const productAcquisitionStepIcons: IconName[] = [
  'liveStatus',
  'acqPackage',
  'headphones',
  'acqCheck',
];

export const compatibilityIcons: IconName[] = [
  'compatWindows',
  'compatPackage',
  'compatShield',
  'compareCloudBackup',
  'compatRefresh',
  'compatWifi',
  'compatShield',
];
