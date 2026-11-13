import type { BlogPostFull } from '../types';

export const enBlogArticles: BlogPostFull[] = [
  {
    "slug": "valorant-cheats-buying-checklist",
    "title": "Buying Valorant Cheats: What to Check",
    "desc": "Confirm which build is supported, what Cloud DMA requires and who handles delivery before you pay.",
    "tag": "Buyer Guides",
    "date": "2026-11-13",
    "readTime": "3 min read",
    "featured": true,
    "image": "/images/gameplay/valorant-overlay-illustration-compressed.webp",
    "imageWidth": 1672,
    "imageHeight": 941,
    "imageAlt": "Illustration of agents with colored player markers beside a purple aim settings panel.",
    "body": [
      {
        "type": "p",
        "text": "Confirm which build is supported, what Cloud DMA requires and who handles delivery before you pay."
      },
      {
        "type": "h2",
        "text": "Check your PC"
      },
      {
        "type": "p",
        "text": "Ask support about the exact Windows release and VALORANT build. The product brief specifies Windows PC and requires Cloud DMA for full functionality on supported builds."
      },
      {
        "type": "h2",
        "text": "Read both product pages"
      },
      {
        "type": "p",
        "text": "Cloud DMA has separate Hyper-V, memory and service requirements. Review [Cloud DMA](/cloud-dma/) before placing the main order so you can account for separately required services."
      },
      {
        "type": "h2",
        "text": "Read the checkout terms"
      },
      {
        "type": "p",
        "text": "Open purchase options from [the product page](/cheats/). The external checkout shows the current terms. Keep your order reference for delivery and setup questions."
      }
    ]
  },
  {
    "slug": "valorant-aimbot-settings",
    "title": "Valorant Aimbot Settings: FOV and Smoothness",
    "desc": "The aiming menu separates target eligibility from movement and on-screen feedback.",
    "tag": "Features",
    "date": "2026-11-13",
    "readTime": "3 min read",
    "image": "/images/gameplay/valorant-aimbot-menu.webp",
    "imageWidth": 1330,
    "imageHeight": 840,
    "imageAlt": "Aimbot panel showing sliders for smoothness, speed, field of view and stickiness.",
    "body": [
      {
        "type": "p",
        "text": "The aiming menu separates target eligibility from movement and on-screen feedback."
      },
      {
        "type": "h2",
        "text": "FOV and target eligibility"
      },
      {
        "type": "p",
        "text": "FOV defines the region used to consider targets. Bone selection specifies the point on a target model, while the visibility check adds a separate condition. The available filter categories are undocumented."
      },
      {
        "type": "h2",
        "text": "Smoothness, speed and stickiness"
      },
      {
        "type": "p",
        "text": "Smoothness controls how gradually aim moves. Speed controls the rate of movement. Their exact interaction is undocumented. Stickiness concerns how the module stays associated with a selected target. Read the [editorial discussion on smoothness, speed and stickiness](/forum/aimbot-smoothness-vs-speed/) for the questions these controls raise."
      },
      {
        "type": "h2",
        "text": "On-screen feedback"
      },
      {
        "type": "p",
        "text": "Draw FOV shows the configured region. Draw Target Line provides a visual reference for the selected target. Both are listed separately from the controls that determine movement."
      }
    ]
  },
  {
    "slug": "valorant-windows-setup",
    "title": "VALORANT on Windows: Game and Product Requirements",
    "desc": "Riot’s PC requirements and the product’s Cloud DMA prerequisites are separate checks.",
    "tag": "Setup Guides",
    "date": "2026-11-13",
    "readTime": "3 min read",
    "image": "/images/gameplay/valorant-overlay-illustration-compressed.webp",
    "imageWidth": 1672,
    "imageHeight": 941,
    "imageAlt": "Illustration of agents with colored player markers beside a purple aim settings panel.",
    "body": [
      {
        "type": "p",
        "text": "Riot’s PC requirements and the product’s Cloud DMA prerequisites are separate checks."
      },
      {
        "type": "h2",
        "text": "Check the game first"
      },
      {
        "type": "p",
        "text": "If VALORANT displays a Vanguard restriction, use the code in the message to find [Riot’s official instructions](https://support.riotgames.com/en-us/riot/performance/vanguard-security-requirements). The wording of the error tells you which game requirement applies."
      },
      {
        "type": "h2",
        "text": "Check the product next"
      },
      {
        "type": "p",
        "text": "The main product is documented for Windows PC. Ask support to confirm the exact Windows release and game build. Use the [Cloud DMA requirements](/cloud-dma/) to check Hyper-V, virtualization and service dependencies."
      },
      {
        "type": "h2",
        "text": "Give support the context"
      },
      {
        "type": "p",
        "text": "Include your Windows version, game build, exact error, and order reference if relevant. State whether the error appears in the regular game or during product setup. Send those details through [setup support](/support/)."
      }
    ]
  },
  {
    "slug": "valorant-player-esp",
    "title": "Valorant Player ESP: Boxes, Skeletons and Labels",
    "desc": "Player ESP can display position and status using several independent markers.",
    "tag": "Features",
    "date": "2026-11-13",
    "readTime": "3 min read",
    "image": "/images/gameplay/valorant-overlay-illustration-compressed.webp",
    "imageWidth": 1672,
    "imageHeight": 941,
    "imageAlt": "Illustration of agents with colored player markers beside a purple aim settings panel.",
    "body": [
      {
        "type": "p",
        "text": "Player ESP can display position and status using several independent markers."
      },
      {
        "type": "h2",
        "text": "Position and posture"
      },
      {
        "type": "p",
        "text": "Boxes show the player’s outline area. Skeletons convey posture. A head circle adds a separate reference point, and a snapline connects the player’s position to your view. The [editorial discussion on skeletons and boxes](/forum/skeleton-esp-vs-box-esp/) explores the trade-off between posture detail and readability."
      },
      {
        "type": "h2",
        "text": "Identity and status"
      },
      {
        "type": "p",
        "text": "Agent identity, equipped items, rank and account level are separate fields. Health and shield bars represent different values. View direction indicates which way a player is facing."
      },
      {
        "type": "h2",
        "text": "Limit on-screen density"
      },
      {
        "type": "p",
        "text": "Player Visual Options includes a maximum distance. World indicators have their own range control. Read the [World ESP guide](/blog/valorant-world-esp/) for the other set of markers."
      }
    ]
  },
  {
    "slug": "valorant-world-esp",
    "title": "Valorant World ESP: Ability and Trap Indicators",
    "desc": "World Visual Options covers supported utility and gives it its own display controls.",
    "tag": "Features",
    "date": "2026-11-13",
    "readTime": "3 min read",
    "image": "/images/gameplay/valorant-world-menu.webp",
    "imageWidth": 1330,
    "imageHeight": 840,
    "imageAlt": "World panel showing switches for spike information, traps and abilities, with a distance slider.",
    "body": [
      {
        "type": "p",
        "text": "World Visual Options covers supported utility and gives it its own display controls."
      },
      {
        "type": "h2",
        "text": "Ability and Trap settings"
      },
      {
        "type": "p",
        "text": "The menu lists abilities and traps separately. Agent-specific options apply to supported objects. The product documentation does not provide a complete list of supported agents or items."
      },
      {
        "type": "h2",
        "text": "Icons and distance"
      },
      {
        "type": "p",
        "text": "Show Icon and Show Distance change what appears beside a world object. The maximum distance for world indicators is separate from the player ESP limit."
      },
      {
        "type": "h2",
        "text": "Clear the view"
      },
      {
        "type": "p",
        "text": "[The Combat Mode hotkey](/blog/valorant-overlay-configurations/) hides Ability and Trap ESP. The product brief documents these two groups as the scope of the hotkey."
      }
    ]
  },
  {
    "slug": "valorant-spike-tracking",
    "title": "Valorant Spike Time and Defuse Progress",
    "desc": "Two documented fields cover timing and defusing in supported spike states.",
    "tag": "Features",
    "date": "2026-11-13",
    "readTime": "3 min read",
    "image": "/images/gameplay/valorant-world-menu.webp",
    "imageWidth": 1330,
    "imageHeight": 840,
    "imageAlt": "World panel showing switches for spike information, traps and abilities, with a distance slider.",
    "body": [
      {
        "type": "p",
        "text": "Two documented fields cover timing and defusing in supported spike states."
      },
      {
        "type": "h2",
        "text": "Read the two fields"
      },
      {
        "type": "p",
        "text": "Spike Time provides a timing indicator. Defuse Progress represents progress on the objective during a defuse. They appear in [World Visual Options](/blog/valorant-world-esp/)."
      },
      {
        "type": "h2",
        "text": "Interpret objective data"
      },
      {
        "type": "p",
        "text": "A timer describes the objective state, while progress describes an ongoing action. The brief does not specify the exact timer format, whether the location is marked, or every match state in which either field appears."
      },
      {
        "type": "h2",
        "text": "Keep markers distinct"
      },
      {
        "type": "p",
        "text": "Ability and Trap ESP have their own controls. Combat Mode specifically hides those two markers. The behavior of the spike fields under that hotkey is unconfirmed."
      }
    ]
  },
  {
    "slug": "valorant-overlay-configurations",
    "title": "Valorant Overlay Profiles and Combat Mode",
    "desc": "Save a repeatable layout and understand which markers the hotkey hides.",
    "tag": "Guides",
    "date": "2026-11-13",
    "readTime": "3 min read",
    "image": "/images/gameplay/valorant-world-menu.webp",
    "imageWidth": 1330,
    "imageHeight": 840,
    "imageAlt": "World panel showing switches for spike information, traps and abilities, with a distance slider.",
    "body": [
      {
        "type": "p",
        "text": "Save a repeatable layout and understand which markers the hotkey hides."
      },
      {
        "type": "h2",
        "text": "Create, save and load"
      },
      {
        "type": "p",
        "text": "Create Config establishes a profile. Save Config stores it and Load Config restores it. [Unload Config](/forum/save-load-config/) is available, but whether it resets values to defaults is undocumented."
      },
      {
        "type": "h2",
        "text": "Organize visual information"
      },
      {
        "type": "p",
        "text": "Player Visual Options and World Visual Options have separate range controls. Font Size in Misc Options changes the menu text. The ability and trap markers can both be hidden with the Combat Mode hotkey."
      },
      {
        "type": "h2",
        "text": "Recording compatibility"
      },
      {
        "type": "p",
        "text": "The overlay is advertised as stream-proof. Support for specific capture apps and recording methods is unverified."
      }
    ]
  }
];
