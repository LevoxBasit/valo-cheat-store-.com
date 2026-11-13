import type { SiteLocale } from '../../i18n/locales';
import { blogPostPath, ROUTES } from '../../utils/path';

const copy = {
  "en": {
    "badge": "Editorial example",
    "description": "Read-only archive of fictional editorial discussions about the VALORANT menu, overlays, and setup. Handles and experiences are illustrative. Compatibility claims in the examples are unverified.",
    "singular": "discussion",
    "plural": "discussions",
    "page": "Page {page}",
    "range": "Showing {first} to {last} of {total}",
    "sort": "Submission order",
    "categories": {
      "Aimbot Options": "Aimbot Options",
      "Player Visual Options": "Player Visual Options",
      "World Visual Options": "World Visual Options",
      "Misc Options": "Misc Options",
      "Requirements & Setup": "Requirements & Setup",
      "Cloud DMA": "Cloud DMA",
      "Comparisons": "Comparisons",
      "Gameplay": "Gameplay"
    }
  },
  "es": {
    "badge": "Ejemplo editorial",
    "description": "Archivo de solo lectura con debates editoriales ficticios sobre el menú, las visuales y la configuración de VALORANT. Los alias y las experiencias son ilustrativos. Las afirmaciones de compatibilidad no están verificadas.",
    "singular": "debate",
    "plural": "debates",
    "page": "Página {page}",
    "range": "Del {first} al {last} de {total}",
    "sort": "Orden de entrega",
    "categories": {
      "Aimbot Options": "Opciones de aimbot",
      "Player Visual Options": "Visuales de jugadores",
      "World Visual Options": "Visuales del entorno",
      "Misc Options": "Opciones varias",
      "Requirements & Setup": "Requisitos y configuración",
      "Cloud DMA": "Cloud DMA",
      "Comparisons": "Comparativas",
      "Gameplay": "Jugabilidad"
    }
  },
  "de": {
    "badge": "Redaktionelles Beispiel",
    "description": "Schreibgeschütztes Archiv mit fiktiven redaktionellen Diskussionen zu VALORANT-Menü, Anzeigen und Einrichtung. Namen und Erfahrungen dienen der Veranschaulichung. Aussagen zur Kompatibilität sind ungeprüft.",
    "singular": "Diskussion",
    "plural": "Diskussionen",
    "page": "Seite {page}",
    "range": "{first} bis {last} von {total}",
    "sort": "Einreichungsreihenfolge",
    "categories": {
      "Aimbot Options": "Aimbot-Optionen",
      "Player Visual Options": "Spieleranzeigen",
      "World Visual Options": "Weltanzeigen",
      "Misc Options": "Weitere Optionen",
      "Requirements & Setup": "Anforderungen und Einrichtung",
      "Cloud DMA": "Cloud DMA",
      "Comparisons": "Vergleiche",
      "Gameplay": "Spielablauf"
    }
  },
  "fr": {
    "badge": "Exemple éditorial",
    "description": "Archive en lecture seule de discussions éditoriales fictives sur le menu, les indicateurs et la configuration de VALORANT. Les pseudos et les expériences sont illustratifs. Les affirmations de compatibilité restent à vérifier.",
    "singular": "discussion",
    "plural": "discussions",
    "page": "Page {page}",
    "range": "De {first} à {last} sur {total}",
    "sort": "Ordre de réception",
    "categories": {
      "Aimbot Options": "Options d’aimbot",
      "Player Visual Options": "Indicateurs de joueurs",
      "World Visual Options": "Indicateurs du décor",
      "Misc Options": "Options diverses",
      "Requirements & Setup": "Prérequis et configuration",
      "Cloud DMA": "Cloud DMA",
      "Comparisons": "Comparatifs",
      "Gameplay": "Gameplay"
    }
  }
};

export function getForumCopy(locale: SiteLocale) {
  return copy[locale];
}

const resources = {
  'aimbot-smoothness-vs-speed': [blogPostPath('valorant-aimbot-settings'), 'aim'],
  'skeleton-esp-vs-box-esp': [blogPostPath('valorant-player-esp'), 'player'],
  'save-load-config': [blogPostPath('valorant-overlay-configurations'), 'config'],
  'valorant-retake-information': [blogPostPath('valorant-spike-tracking'), 'spike'],
  'cloud-dma-single-pc-setup': [ROUTES.cloudDma, 'dma'],
  'hwid-spoofer-vs-skin-changer': [ROUTES.productsHub, 'compare'],
} as const;

const resourceLabels = {
  en: { aim: 'Guide to FOV and smoothness', player: 'Guide to player ESP markers', config: 'Guide to saved overlay profiles', spike: 'Guide to spike time and defuse progress', dma: 'Cloud DMA setup and requirements', compare: 'Compare products and utilities' },
  es: { aim: 'Guía de FOV y suavidad', player: 'Guía de marcadores del ESP de jugadores', config: 'Guía de perfiles guardados', spike: 'Guía de tiempo y desactivación de la spike', dma: 'Configuración y requisitos de Cloud DMA', compare: 'Comparar productos y utilidades' },
  de: { aim: 'Anleitung zu FOV und Glättung', player: 'Anleitung zu Spieler-ESP-Markierungen', config: 'Anleitung zu gespeicherten Anzeigeprofilen', spike: 'Anleitung zu Spike-Zeit und Entschärfungsfortschritt', dma: 'Einrichtung und Anforderungen von Cloud DMA', compare: 'Produkte und Tools vergleichen' },
  fr: { aim: 'Guide du FOV et du lissage', player: 'Guide des repères ESP des joueurs', config: 'Guide des profils d’affichage enregistrés', spike: 'Guide du chronomètre et du désamorçage du spike', dma: 'Configuration et prérequis de Cloud DMA', compare: 'Comparer les produits et les utilitaires' },
};

export function getForumResource(slug: string, locale: SiteLocale) {
  if (!Object.hasOwn(resources, slug)) return undefined;
  const [href, key] = resources[slug as keyof typeof resources];
  return { href, label: resourceLabels[locale][key] };
}

const threadTopics: Record<SiteLocale, Record<string, string>> = {
  "en": {
    "aimbot-smoothness-vs-speed": "Smoothness, speed and target retention",
    "aimbot-visible-check": "Visibility checks around smokes and walls",
    "skeleton-esp-vs-box-esp": "Skeleton and box marker readability",
    "player-esp-max-distance": "Player overlay range and screen clutter",
    "esp-view-direction": "What view direction can tell you",
    "ability-esp-per-agent": "Ability overlay settings by agent",
    "trap-esp": "Trap markers and distance settings",
    "combat-mode-hotkey": "What the Combat Mode shortcut hides",
    "spike-defuse-timer-esp": "Spike timing and defuse progress",
    "save-load-config": "What happens when you unload a profile",
    "stream-proof-overlay": "Overlay visibility across capture methods",
    "cloud-dma-single-pc-setup": "Single-PC Hyper-V and Cloud DMA prerequisites",
    "hwid-spoofer-vs-skin-changer": "How the two separate utilities differ",
    "valorant-retake-information": "Which overlay details matter in a 2v2 retake"
  },
  "es": {
    "aimbot-smoothness-vs-speed": "Suavidad, velocidad y fijación del objetivo",
    "aimbot-visible-check": "Visibilidad con humos y muros",
    "skeleton-esp-vs-box-esp": "Legibilidad de esqueletos y recuadros",
    "player-esp-max-distance": "Alcance del ESP de jugadores",
    "esp-view-direction": "Qué indica la dirección de la mirada",
    "ability-esp-per-agent": "Ajustes de habilidades por agente",
    "trap-esp": "Marcadores de trampas y distancia",
    "combat-mode-hotkey": "Qué oculta el atajo de Modo Combate",
    "spike-defuse-timer-esp": "Tiempo de la spike y desactivación",
    "save-load-config": "Qué ocurre al descargar un perfil",
    "stream-proof-overlay": "Visibilidad según el método de captura",
    "cloud-dma-single-pc-setup": "Cloud DMA en un PC con Hyper-V",
    "hwid-spoofer-vs-skin-changer": "Diferencias entre las dos utilidades",
    "valorant-retake-information": "Qué datos importan al retomar en 2 contra 2"
  },
  "de": {
    "aimbot-smoothness-vs-speed": "Glättung, Tempo und Zielbindung",
    "aimbot-visible-check": "Sichtprüfung bei Rauch und Wänden",
    "skeleton-esp-vs-box-esp": "Lesbarkeit von Skeletten und Boxen",
    "player-esp-max-distance": "Reichweite der Spieleranzeigen",
    "esp-view-direction": "Aussagekraft der Blickrichtung",
    "ability-esp-per-agent": "Fähigkeitenanzeigen pro Agent",
    "trap-esp": "Fallenmarkierungen und Distanz",
    "combat-mode-hotkey": "Was die Kampfmodus-Taste ausblendet",
    "spike-defuse-timer-esp": "Spike-Zeit und Entschärfungsfortschritt",
    "save-load-config": "Was beim Entladen eines Profils passiert",
    "stream-proof-overlay": "Anzeigen bei verschiedenen Aufnahmemethoden",
    "cloud-dma-single-pc-setup": "Cloud DMA und Hyper-V auf einem PC",
    "hwid-spoofer-vs-skin-changer": "Unterschiede zwischen beiden Tools",
    "valorant-retake-information": "Relevante Anzeigen bei einem 2-gegen-2-Retake"
  },
  "fr": {
    "aimbot-smoothness-vs-speed": "Lissage, vitesse et maintien de la cible",
    "aimbot-visible-check": "Contrôle de visibilité, fumées et murs",
    "skeleton-esp-vs-box-esp": "Lisibilité des squelettes et des cadres",
    "player-esp-max-distance": "Portée des indicateurs de joueurs",
    "esp-view-direction": "Ce qu’indique la direction du regard",
    "ability-esp-per-agent": "Réglages des capacités par agent",
    "trap-esp": "Repères de pièges et distance",
    "combat-mode-hotkey": "Ce que masque le raccourci du mode combat",
    "spike-defuse-timer-esp": "Chronomètre du spike et désamorçage",
    "save-load-config": "Effet du déchargement d’un profil",
    "stream-proof-overlay": "Visibilité selon le mode de capture",
    "cloud-dma-single-pc-setup": "Prérequis Cloud DMA et Hyper-V sur un PC",
    "hwid-spoofer-vs-skin-changer": "Différences entre les deux utilitaires",
    "valorant-retake-information": "Indicateurs utiles en reprise de site à deux"
  }
};

export function forumThreadDescription(post: import('./types').ForumPost, locale: SiteLocale): string {
  if (!post.editorialExample) return post.excerpt;
  const { badge, categories, description } = getForumCopy(locale);
  const label = (categories as Record<string, string>)[post.category] ?? post.category;
  return [badge, threadTopics[locale][post.slug] ?? label, description].join(' · ');
}
