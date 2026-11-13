import type { ForumPost } from './types';

/** Owner-supplied editorial examples, in submission order. */
export const enForumPosts: ForumPost[] = [
  {
    "slug": "aimbot-smoothness-vs-speed",
    "category": "Aimbot Options",
    "categoryTone": "purple",
    "title": "Speed, smoothness and stickiness — how do these three actually interact?",
    "excerpt": "Genuine question because the menu gives me three sliders that all sound like they do the same job. Smoothness, speed, stickiness. If I turn smoothness down, is that the same as…",
    "author": "@crosshair_cope",
    "authorship": "imported",
    "editorialExample": true,
    "originalLanguage": "en",
    "sourceId": "thread-01",
    "age": "",
    "published": "2026-09-04",
    "commentsCount": 5,
    "upvotes": 0,
    "body": [
      "Genuine question because the menu gives me three sliders that all sound like they do the same job. Smoothness, speed, stickiness. If I turn smoothness down, is that the same as turning speed up? And is stickiness just a slower version of the same thing or does it behave differently once the target moves?",
      "Trying to figure out an order of operations here instead of dragging all three around randomly and calling it tuning."
    ],
    "comments": [
      {
        "author": "@vandal_van_dyke",
        "body": "Smoothness reads like how gradual the pull is, speed reads like how fast the pull travels. Those are probably not the same axis even if they feel similar on a small FOV. Stickiness sounds more like target retention after the initial pick."
      },
      {
        "author": "@crosshair_cope",
        "body": "Ok so if speed is travel rate and stickiness is retention, then stickiness is the one that matters when someone strafes. That's the distinction I was missing."
      },
      {
        "author": "@tenz_adjacent",
        "body": "Docs don't spell out the interaction between speed and smoothness at all, so anyone telling you the exact math is guessing. Set one, leave the other alone, see what changes. Changing both at once tells you nothing."
      },
      {
        "author": "@kv_quiet",
        "body": "Stickiness too high is the one that would annoy me. You'd be glued to whoever got picked first instead of whoever is actually more killable."
      },
      {
        "author": "@crosshair_cope",
        "body": "Fair. Also fair point on changing one at a time, I was definitely about to do the opposite."
      }
    ]
  },
  {
    "slug": "aimbot-visible-check",
    "category": "Aimbot Options",
    "categoryTone": "purple",
    "title": "Does visible check respect smokes and Sage wall, or only hard geometry?",
    "excerpt": "There's a visible check toggle and the whole point of it is that you only get assistance on targets you can actually see. What I can't find anywhere is what the check treats as…",
    "author": "@omen_enjoyer",
    "authorship": "imported",
    "editorialExample": true,
    "originalLanguage": "en",
    "sourceId": "thread-02",
    "age": "",
    "published": "2026-09-11",
    "commentsCount": 5,
    "upvotes": 0,
    "body": [
      "There's a visible check toggle and the whole point of it is that you only get assistance on targets you can actually see. What I can't find anywhere is what the check treats as blocking.",
      "Walls and boxes, obviously. But smoke is not geometry, it's an entity. Same with Sage wall, same with a Cypher cage. If the check only raycasts against level geometry then standing in a smoke is basically free real estate for the aimbot and that changes how I'd set FOV.",
      "Anyone know how broad the check is?"
    ],
    "comments": [
      {
        "author": "@peek_a_boo",
        "body": "Realistically smoke is the hard case. Most visibility checks are built around geometry, and smokes are usually a separate system entirely."
      },
      {
        "author": "@omen_enjoyer",
        "body": "That's my worry. A check that ignores smoke is worse than no check in some spots because it lies to you."
      },
      {
        "author": "@harbor_h2o",
        "body": "\"Lies to you\" is dramatic. It still filters the guy behind the actual wall. It just doesn't filter the guy behind the grey blob."
      },
      {
        "author": "@peek_a_boo",
        "body": "Both of you are describing behaviour nobody has documented. Worth just running it in a custom with a friend in a smoke and seeing what happens."
      },
      {
        "author": "@omen_enjoyer",
        "body": "Custom with a friend it is. Will report back if the check does anything weird around cage."
      }
    ]
  },
  {
    "slug": "skeleton-esp-vs-box-esp",
    "category": "Player Visual Options",
    "categoryTone": "blue",
    "title": "Skeleton ESP is more useful than boxes and nobody wants to admit it",
    "excerpt": "A box tells you a player exists in a rectangle. That's it. It does not tell you if they're crouched behind half cover, if they're turned away, if they're mid-jump, or if the box…",
    "author": "@bonesandboxes",
    "authorship": "imported",
    "editorialExample": true,
    "originalLanguage": "en",
    "sourceId": "thread-03",
    "age": "",
    "published": "2026-08-27",
    "commentsCount": 5,
    "upvotes": 0,
    "body": [
      "A box tells you a player exists in a rectangle. That's it. It does not tell you if they're crouched behind half cover, if they're turned away, if they're mid-jump, or if the box is actually two players overlapping.",
      "Skeleton gives you posture. Posture is the entire read in this game. You know instantly whether someone is holding an angle or repositioning.",
      "Yes it's busier. Yes it takes a minute to get used to. But the information is strictly better and the head circle covers the part that actually matters anyway."
    ],
    "comments": [
      {
        "author": "@box_gang",
        "body": "Counterpoint: at range, skeleton turns into six pixels of noise and you can't read posture off it anyway. Box is legible at 40 metres. Skeleton isn't."
      },
      {
        "author": "@bonesandboxes",
        "body": "At 40 metres you're not reading posture off the model either, so that's a wash."
      },
      {
        "author": "@box_gang",
        "body": "You're reading it off the skeleton, which is drawn on top of everything and doesn't get lost in the background. That's the point."
      },
      {
        "author": "@mild_mannered_duelist",
        "body": "Why not both. Skeleton plus head circle plus box is like three people telling you the same thing slightly differently."
      },
      {
        "author": "@bonesandboxes",
        "body": "Because my screen already looks like a spreadsheet. But sure, run both if you've got the eyes for it."
      }
    ]
  },
  {
    "slug": "player-esp-max-distance",
    "category": "Player Visual Options",
    "categoryTone": "blue",
    "title": "What max distance do people actually run on player ESP?",
    "excerpt": "Full map distance sounds great until every fight you're looking at nine indicators through three walls for players who are nowhere near the action. It's noise.",
    "author": "@long_angle_larry",
    "authorship": "imported",
    "editorialExample": true,
    "originalLanguage": "en",
    "sourceId": "thread-04",
    "age": "",
    "published": "2026-09-19",
    "commentsCount": 5,
    "upvotes": 0,
    "body": [
      "Full map distance sounds great until every fight you're looking at nine indicators through three walls for players who are nowhere near the action. It's noise.",
      "So what's the sane number? I've been cutting it back and the screen gets cleaner but I keep worrying I'm hiding someone who's about to swing.",
      "Is there a rough rule, like half the map, or is it purely down to how much clutter you'll tolerate?"
    ],
    "comments": [
      {
        "author": "@ascent_anchor",
        "body": "Purely tolerance. There's no correct value. Cut it until the screen is readable, then stop."
      },
      {
        "author": "@long_angle_larry",
        "body": "That's not wrong but it's not helpful either."
      },
      {
        "author": "@ascent_anchor",
        "body": "It's genuinely the answer though. Someone on Breeze wants a totally different number than someone holding tight on Split."
      },
      {
        "author": "@peek_a_boo",
        "body": "I'd start generous and reduce. Starting tight means you never see the flank and you don't know what you're missing."
      },
      {
        "author": "@long_angle_larry",
        "body": "Yeah, going generous then trimming. Cheers."
      }
    ]
  },
  {
    "slug": "esp-view-direction",
    "category": "Player Visual Options",
    "categoryTone": "blue",
    "title": "View direction ESP — is this actually a big deal or a gimmick?",
    "excerpt": "Every other ESP element is some version of \"here is a person.\" View direction is the only one that tells you something you can't infer from a box, which is whether the person is…",
    "author": "@angle_holder_9",
    "authorship": "imported",
    "editorialExample": true,
    "originalLanguage": "en",
    "sourceId": "thread-05",
    "age": "",
    "published": "2026-10-02",
    "commentsCount": 5,
    "upvotes": 0,
    "body": [
      "Every other ESP element is some version of \"here is a person.\" View direction is the only one that tells you something you can't infer from a box, which is whether the person is looking at you or away from you.",
      "That seems like the single most decision-relevant indicator in the whole player section and it gets mentioned way less than boxes. Am I overrating it?"
    ],
    "comments": [
      {
        "author": "@flankwatch",
        "body": "Not overrating. Someone facing away is a free trade, someone facing you is a duel. That's the whole decision."
      },
      {
        "author": "@omen_enjoyer",
        "body": "Careful with it though. View direction shows where they're facing, not where they're looking. Crosshair placement and body facing drift apart all the time in this game."
      },
      {
        "author": "@angle_holder_9",
        "body": "True, people flick. But it's still better than nothing."
      },
      {
        "author": "@flankwatch",
        "body": "It's also the one that matters most post-plant when you're trying to work out which defender is watching the spike."
      },
      {
        "author": "@quiet_kj",
        "body": "Only if the indicator is accurate enough to trust in the first place. If it lags at all you'll walk into people."
      }
    ]
  },
  {
    "slug": "ability-esp-per-agent",
    "category": "World Visual Options",
    "categoryTone": "green",
    "title": "How granular is the per-agent ability ESP customisation?",
    "excerpt": "The world section advertises character-specific customisation for abilities, which implies you can configure this per agent instead of getting one generic \"ability\" label for…",
    "author": "@utility_nerd",
    "authorship": "imported",
    "editorialExample": true,
    "originalLanguage": "en",
    "sourceId": "thread-06",
    "age": "",
    "published": "2026-09-25",
    "commentsCount": 5,
    "upvotes": 0,
    "body": [
      "The world section advertises character-specific customisation for abilities, which implies you can configure this per agent instead of getting one generic \"ability\" label for everything.",
      "That's the interesting part to me, because a Cypher trip and a Raze satchel are completely different problems and deserve different treatment. But the docs never say which agents are covered or how deep the per-character settings go.",
      "Is it a real per-agent list or just a handful of supported characters with everything else falling back to default?"
    ],
    "comments": [
      {
        "author": "@harbor_h2o",
        "body": "Realistically it'll be the ability objects the devs bothered to map. Anything new probably falls back or does nothing until it's added."
      },
      {
        "author": "@utility_nerd",
        "body": "Which is why I'm asking. If half the roster is unsupported then the feature is much less interesting than it reads."
      },
      {
        "author": "@mild_mannered_duelist",
        "body": "Also worth remembering traps are a separate section from abilities. Trip wires and alarms probably live under trap ESP, not ability ESP, so don't judge the ability list by whether Cypher stuff shows up."
      },
      {
        "author": "@utility_nerd",
        "body": "That's a good catch actually, I was lumping them together."
      },
      {
        "author": "@quiet_kj",
        "body": "Someone needs to actually confirm the list rather than everyone assuming. Nobody in here has."
      }
    ]
  },
  {
    "slug": "trap-esp",
    "category": "World Visual Options",
    "categoryTone": "green",
    "title": "Trap ESP on defence — sentinel utility vs everything else on the map",
    "excerpt": "Defending is mostly about knowing which entrance has already been wired up and which one is wide open. Trap ESP is the section that would speak to that directly.",
    "author": "@site_anchor_main",
    "authorship": "imported",
    "editorialExample": true,
    "originalLanguage": "en",
    "sourceId": "thread-07",
    "age": "",
    "published": "2026-10-08",
    "commentsCount": 4,
    "upvotes": 0,
    "body": [
      "Defending is mostly about knowing which entrance has already been wired up and which one is wide open. Trap ESP is the section that would speak to that directly.",
      "Two things I want to understand. First, does it distinguish a placed trap from ordinary map props, because a lot of maps have decorative clutter that would be indistinguishable otherwise. Second, does show distance and max distance apply to traps the same way it applies to the rest of world ESP?"
    ],
    "comments": [
      {
        "author": "@flankwatch",
        "body": "Show distance and max distance are listed as world ESP options generally, so they should cover trap markers too. Whether a marker actually renders for a specific trap is a different question."
      },
      {
        "author": "@site_anchor_main",
        "body": "That's the distinction I keep tripping over. Generic options existing doesn't mean the object is mapped."
      },
      {
        "author": "@harbor_h2o",
        "body": "Also worth noting the docs never claim a full list of supported traps. Assume nothing about a brand new agent's utility until you've seen it."
      },
      {
        "author": "@site_anchor_main",
        "body": "Fair. Not going to plan a whole defensive setup around something unconfirmed."
      }
    ]
  },
  {
    "slug": "combat-mode-hotkey",
    "category": "Misc Options",
    "categoryTone": "orange",
    "title": "Combat mode hotkey — does it touch anything besides ability and trap ESP?",
    "excerpt": "The docs are pretty specific that the combat mode hotkey hides ability ESP and trap ESP. Nothing else. Not player ESP, not the aimbot.",
    "author": "@hotkey_hank",
    "authorship": "imported",
    "editorialExample": true,
    "originalLanguage": "en",
    "sourceId": "thread-08",
    "age": "",
    "published": "2026-10-14",
    "commentsCount": 5,
    "upvotes": 0,
    "body": [
      "The docs are pretty specific that the combat mode hotkey hides ability ESP and trap ESP. Nothing else. Not player ESP, not the aimbot.",
      "Which is a bit odd to me, because if the point is to declutter during a fight, the ability icons and trap markers are not the stuff that's actually in the way. Boxes, skeletons and distance labels are.",
      "So, two questions. Is the documented scope genuinely the full scope, or does it do more than the docs say? And is anyone else finding that hiding only world stuff doesn't declutter enough to bother?"
    ],
    "comments": [
      {
        "author": "@box_gang",
        "body": "It's still useful if your world ESP max distance is set long and you've got markers all over the site you're not fighting in."
      },
      {
        "author": "@hotkey_hank",
        "body": "Sure but that's a max distance problem, not a hotkey problem."
      },
      {
        "author": "@box_gang",
        "body": "Both can be true. The hotkey is a fast toggle, the slider is the permanent fix. Different tools."
      },
      {
        "author": "@mild_mannered_duelist",
        "body": "Documented scope is ability and trap. Everything past that is speculation. So if it's not enough for you, drop your world distance instead of hoping the key does more."
      },
      {
        "author": "@hotkey_hank",
        "body": "Yeah, trimming distance. Still think the scope is backwards though."
      }
    ]
  },
  {
    "slug": "spike-defuse-timer-esp",
    "category": "World Visual Options",
    "categoryTone": "green",
    "title": "Spike defuse progress and the timer — most underrated part of world ESP?",
    "excerpt": "Nobody talks about the spike fields. Defuse progress and time. That's it, two indicators, and they answer the single most stressful question in the game, which is whether you…",
    "author": "@post_plant_pete",
    "authorship": "imported",
    "editorialExample": true,
    "originalLanguage": "en",
    "sourceId": "thread-09",
    "age": "",
    "published": "2026-09-30",
    "commentsCount": 5,
    "upvotes": 0,
    "body": [
      "Nobody talks about the spike fields. Defuse progress and time. That's it, two indicators, and they answer the single most stressful question in the game, which is whether you have enough seconds to re-peek the defuser or whether you have to commit right now.",
      "Every other overlay element is about people. This one is about the objective, which is what the round is actually decided on.",
      "For anyone who's used this stuff on other games — is progress info as valuable as it sounds, or does it just duplicate a timer you're already watching?"
    ],
    "comments": [
      {
        "author": "@clutch_or_kick",
        "body": "Defuse progress is the part that isn't duplicated anywhere. The round timer doesn't tell you how far into the defuse someone is. That's genuinely new information."
      },
      {
        "author": "@post_plant_pete",
        "body": "Exactly. Half-defused is a completely different decision to freshly touched."
      },
      {
        "author": "@quiet_kj",
        "body": "Does the docs say anything about where the spike is though, or just the progress and time? Because location would matter as much."
      },
      {
        "author": "@post_plant_pete",
        "body": "Docs don't say location is separately highlighted. Just defuse progress and time under world visual options. Don't want to assume more than that."
      },
      {
        "author": "@clutch_or_kick",
        "body": "Progress plus time is already the important half. Location you can usually hear or infer."
      }
    ]
  },
  {
    "slug": "save-load-config",
    "category": "Misc Options",
    "categoryTone": "orange",
    "title": "What does Unload Config actually do?",
    "excerpt": "Create, save, load, unload. Three of those are obvious. Unload is the one that's never explained.",
    "author": "@config_carl",
    "authorship": "imported",
    "editorialExample": true,
    "originalLanguage": "en",
    "sourceId": "thread-10",
    "age": "",
    "published": "2026-10-21",
    "commentsCount": 5,
    "upvotes": 0,
    "body": [
      "Create, save, load, unload. Three of those are obvious. Unload is the one that's never explained.",
      "Does unload just detach the config file so the menu stops pointing at it, keeping your current settings live? Or does it revert everything to defaults? Those are very different outcomes and only one of them is safe to hit mid-session.",
      "Genuinely don't want to find out the hard way with a full custom setup loaded."
    ],
    "comments": [
      {
        "author": "@ascent_anchor",
        "body": "If it reverted to defaults it'd basically be a reset button, and they'd probably have called it reset."
      },
      {
        "author": "@config_carl",
        "body": "Naming isn't documentation though."
      },
      {
        "author": "@ascent_anchor",
        "body": "No, but it's a hint. Detaching the file is the more literal reading of \"unload.\""
      },
      {
        "author": "@utility_nerd",
        "body": "Test it with a throwaway config you don't care about. Make something with two settings changed, save it as a junk name, unload, see what survives."
      },
      {
        "author": "@config_carl",
        "body": "That's the plan. Junk config first, real one second."
      }
    ]
  },
  {
    "slug": "stream-proof-overlay",
    "category": "Misc Options",
    "categoryTone": "orange",
    "title": "Stream-proof overlay — which capture apps does it actually work with?",
    "excerpt": "The overlay is advertised as stream-proof, meaning menu and ESP elements don't show up in recordings or on stream. Cool in principle. But \"stream-proof\" is one of those terms…",
    "author": "@two_viewer_andrew",
    "authorship": "imported",
    "editorialExample": true,
    "originalLanguage": "en",
    "sourceId": "thread-11",
    "age": "",
    "published": "2026-11-05",
    "commentsCount": 5,
    "upvotes": 0,
    "body": [
      "The overlay is advertised as stream-proof, meaning menu and ESP elements don't show up in recordings or on stream. Cool in principle. But \"stream-proof\" is one of those terms that covers a huge range of implementations and only some of them work in every capture path.",
      "Capture through a card, capture through OBS game capture, capture through display capture, capture through the Windows built-in recorder — these are not equivalent. Some overlay methods get picked up by one and not the other.",
      "Has anyone confirmed which capture methods the exclusion actually holds up against? \"It's stream-proof\" on its own tells me nothing."
    ],
    "comments": [
      {
        "author": "@flankwatch",
        "body": "Display capture is usually the one that breaks this kind of thing, since it grabs whatever is composited on screen."
      },
      {
        "author": "@two_viewer_andrew",
        "body": "Right, which is why I'm asking rather than assuming. A stream-proof claim that only survives game capture is a very different product."
      },
      {
        "author": "@clutch_or_kick",
        "body": "Docs don't name any capture programs either, so the honest answer is probably \"test your specific setup.\""
      },
      {
        "author": "@two_viewer_andrew",
        "body": "Figured. Window capture test tonight, display capture after."
      },
      {
        "author": "@box_gang",
        "body": "Report back, half the people reading this stream."
      }
    ]
  },
  {
    "slug": "cloud-dma-single-pc-setup",
    "category": "Cloud DMA",
    "categoryTone": "green",
    "title": "Cloud DMA on a single PC — how does the Hyper-V arrangement actually work?",
    "excerpt": "The thing that put me off DMA for years was the hardware. Second machine, PCIe card, USB bridge, all of it. The Cloud DMA docs apparently describe a single-PC arrangement using a…",
    "author": "@one_rig_only",
    "authorship": "imported",
    "editorialExample": true,
    "originalLanguage": "en",
    "sourceId": "thread-13",
    "age": "",
    "published": "2026-10-27",
    "commentsCount": 5,
    "upvotes": 0,
    "body": [
      "The thing that put me off DMA for years was the hardware. Second machine, PCIe card, USB bridge, all of it. The Cloud DMA docs apparently describe a single-PC arrangement using a Hyper-V virtual environment and an external service connection, and explicitly say no second PC, no USB DMA bridge and no PCIe card.",
      "That's the version I'd actually consider. But the docs also name GREENWARD, Static Server and AWS as separate requirements, and they're listed as distinct components rather than alternatives, which sounds like three things to line up rather than one.",
      "Anyone further along able to explain how those pieces relate to each other? And does Windows edition matter, or is Pro just recommended for convenience?"
    ],
    "comments": [
      {
        "author": "@utility_nerd",
        "body": "Pro, Enterprise or Education is recommended for the Hyper-V setup specifically, with edition-specific guidance. Home is the awkward one."
      },
      {
        "author": "@one_rig_only",
        "body": "So it's a real constraint, not just a suggestion."
      },
      {
        "author": "@utility_nerd",
        "body": "It's framed as recommended. Whether Home works with workarounds isn't spelled out."
      },
      {
        "author": "@quiet_kj",
        "body": "Three separate components that all have to be in place is the bit that would worry me. Any one of them being down and you've got nothing."
      },
      {
        "author": "@one_rig_only",
        "body": "Yeah. Worth confirming they're all current requirements before building a plan around it rather than assuming they're bundled."
      }
    ]
  },
  {
    "slug": "hwid-spoofer-vs-skin-changer",
    "category": "Comparisons",
    "categoryTone": "purple",
    "title": "HWID spoofer and skin changer are not part of this — right?",
    "excerpt": "Seeing these three lumped together constantly and I want to get the boundaries straight, because they're completely different categories of thing.",
    "author": "@alt_account_andy",
    "authorship": "imported",
    "editorialExample": true,
    "originalLanguage": "en",
    "sourceId": "thread-14",
    "age": "",
    "published": "2026-11-02",
    "commentsCount": 5,
    "upvotes": 0,
    "body": [
      "Seeing these three lumped together constantly and I want to get the boundaries straight, because they're completely different categories of thing.",
      "The main product is the aimbot, player ESP, world ESP, spike info, configs, that whole toolkit. Fine. HWID spoofer is a separate utility about hardware identifiers. Skin changer is a separate utility about cosmetics. Neither is documented as included and neither is a mandatory dependency, as far as the docs go.",
      "So: spoofer doesn't change gameplay, skin changer doesn't change gameplay, and the main product is the only one that actually does anything in a match. Is that the correct split, or am I missing overlap?"
    ],
    "comments": [
      {
        "author": "@clutch_or_kick",
        "body": "That's the split. They're adjacent products, not modules."
      },
      {
        "author": "@alt_account_andy",
        "body": "Good. The way people talk you'd think a skin changer was going to help you win duels."
      },
      {
        "author": "@box_gang",
        "body": "It won't, but a different knife does make you feel better about losing them."
      },
      {
        "author": "@mild_mannered_duelist",
        "body": "One thing to be careful of: none of them guarantee anything about account safety. Spoofer changes identifiers, it doesn't promise a clean slate."
      },
      {
        "author": "@alt_account_andy",
        "body": "Right, \"spoofer\" gets sold as ban insurance a lot and it isn't."
      }
    ]
  },
  {
    "slug": "valorant-retake-information",
    "category": "Gameplay",
    "categoryTone": "orange",
    "title": "In a 2v2 retake, which ESP elements are actually decision-relevant?",
    "excerpt": "Retakes are the most information-dense situation in the game and the easiest to over-clutter. You've got the spike ticking, two defenders somewhere in the site, utility on the…",
    "author": "@retake_ronin",
    "authorship": "imported",
    "editorialExample": true,
    "originalLanguage": "en",
    "sourceId": "thread-15",
    "age": "",
    "published": "2026-11-11",
    "commentsCount": 6,
    "upvotes": 0,
    "body": [
      "Retakes are the most information-dense situation in the game and the easiest to over-clutter. You've got the spike ticking, two defenders somewhere in the site, utility on the floor, and about eight seconds to decide a path.",
      "If you had to strip the overlay down to only what changes your decision, what survives? My instinct is that health, shield, view direction and defuse progress are the ones that alter what you do, and most of the rest is context you could get from the minimap or from comms."
    ],
    "comments": [
      {
        "author": "@quiet_kj",
        "body": "Defuse progress first, obviously. Everything else is downstream of whether the clock lets you take a fight at all."
      },
      {
        "author": "@flankwatch",
        "body": "View direction and health. Knowing someone is one-shot and facing the other way is the whole read on which one to take first."
      },
      {
        "author": "@retake_ronin",
        "body": "Health and shield both? Or is shield redundant once you have health."
      },
      {
        "author": "@flankwatch",
        "body": "Shield matters because full shield changes how many bullets a trade costs you. Health alone understates it."
      },
      {
        "author": "@mild_mannered_duelist",
        "body": "Skeleton over box in a retake for me. Two defenders in a small site means overlapping boxes and you can't tell who's who. Posture reads better."
      },
      {
        "author": "@retake_ronin",
        "body": "Fair, though that's a lot of elements for an eight second window. Might be a combat-mode-and-trim situation rather than running all of it."
      }
    ]
  }
];
