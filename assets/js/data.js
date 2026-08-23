const GAMES = [
  {
    slug: "armageddonica",
    title: "Armageddonica",
    hook: "A hero powerful enough to fight alone, and an army too large to fight without.",
    cover: "01.jpg",
    imageCount: 7,
    video: null,
    status: "Shipped — Steam",
    team: "Team of 11",
    engine: "Unity",
    year: "2025",
    role: "Gameplay & Tools Programmer",
    tags: ["ARPG", "RTS", "Steam", "Tools Programming"],
    links: [{ label: "Steam", url: "https://store.steampowered.com/app/3166960/Armageddonica/" }],
    description: [
      "A hybrid hack-and-slash ARPG and RTS — direct hero combat blended with commanding a large, self-managing army, released on Steam by an 11-person team.",
      "I split my time between day-to-day gameplay features and bug fixing, and a long list of editor tools that made the art and design team faster: an overhauled prefab-scattering tool that stopped props from clumping together, one-click cloud-shadow and minimap generation, a Terrain grass manager with saveable presets, and a loading screen that flat-out didn't exist before I built one.",
      "I also ended up as the person artists came to when something broke outside their own toolkit — Git conflicts, missing shadows, terrain you couldn't click on. Happened often enough that it became routine."
    ],
    highlights: [
      "Gameplay features & bug fixing on a live, shipping codebase",
      "Rebuilt the team's prefab-scattering tool into a daily-use art tool",
      "One-click editor tools: cloud shadows, minimap generation, terrain grass",
      "Text→TextMeshPro batch converter, ScriptableObject-driven tuning data"
    ]
  },
  {
    slug: "thrones-of-ashes",
    title: "Thrones of Ashes",
    hook: "The team went from three programmers to one. The game didn't stop.",
    cover: "01.jpg",
    imageCount: 5,
    video: null,
    status: "Unreleased",
    team: "3 → 2 → 1 programmer",
    engine: "Unity",
    year: "2025–2026",
    role: "Gameplay Programmer",
    tags: ["RPG", "Cutscene Systems", "Solo Engineering"],
    links: [],
    description: [
      "A lore-driven RPG with a full gear system — armor pieces with individual stats and enchantments, weapons with distinct effects, varied enemies and modes.",
      "I refactored a sizable legacy codebase while shipping new features across it, designed and built the game's cutscene system entirely from scratch, then followed it up with an editor tool so non-programmers on the team could put a scene together without touching code. I also worked closely with the animator to get combat and cutscene timing to land right.",
      "Over the project's lifetime, the programming team shrank from three people to two to just me. I carried the engineering side solo for the final stretch instead of letting the project stall."
    ],
    highlights: [
      "Refactored legacy codebase while shipping new gameplay features",
      "Designed & built a cutscene system from scratch, plus an editor tool for it",
      "Full gear/stats system: armor, enchantments, weapon effects",
      "Carried engineering solo after the team shrank to one programmer"
    ]
  },
  {
    slug: "hermit-night-2",
    title: "Hermit Night 2",
    hook: "A path you don't remember, leading somewhere you don't want to go.",
    cover: "03.jpg",
    imageCount: 5,
    video: null,
    status: "Shipped — itch.io",
    team: "Solo",
    engine: "Unity",
    year: "2025",
    role: "Solo developer",
    tags: ["Horror", "Narrative", "Cutscene Systems"],
    links: [{ label: "itch.io", url: "https://thenexystudio.itch.io/hermit-night-2" }],
    description: [
      "A direct continuation of the first game, built around a much heavier cutscene system than anything I'd made before.",
      "The player wakes under a bed, wanders the house at night, and eventually finds a path outside they don't remember — one that leads through a beautiful, unsettling stretch of scenery, a broken radio tower, and a submarine dream sequence that means more than it first seems to.",
      "The most visually ambitious of the Hermit Night games, and honestly the one that took the most out of me to finish."
    ],
    highlights: [
      "Custom cutscene sequencing system, built solo",
      "Dynamic lighting & particle work for atmosphere",
      "Radio/audio-driven narrative pacing"
    ]
  },
  {
    slug: "hermit-night-1",
    title: "Hermit Night",
    hook: "Lock the windows. Kill the lights. Wait for instructions that never come.",
    cover: "03.jpg",
    imageCount: 9,
    video: null,
    status: "Shipped — itch.io",
    team: "Solo",
    engine: "Unity",
    year: "2024",
    role: "Solo developer",
    tags: ["Horror", "Narrative", "First Solo Horror"],
    links: [{ label: "itch.io", url: "https://thenexystudio.itch.io/hermit-night" }],
    description: [
      "A quiet evening at home gets interrupted by an emergency broadcast about something in the sky. You seal the house, grab a radio, and wait — until the evacuation you were promised gets cancelled mid-sentence.",
      "Built the tension almost entirely through UI and lighting: a lights/windows checklist that tracks how sealed the house actually is, directional-light flashes timed to thunder, and a slow fade from safety to a very large shadow outside the window."
    ],
    highlights: [
      "Diegetic UI tracking house state (lights sealed / windows closed)",
      "Lightning sequence: particle system + timed directional light flash",
      "Interactable story notes and event-driven audio"
    ]
  },
  {
    slug: "locked-in-nonsense",
    title: "Locked In Nonsense",
    hook: "Steal some stuff, watch some memes, don't get caught by the guy doing the Gangnam Style.",
    cover: "01.jpg",
    imageCount: 6,
    video: { count: 2 },
    status: "Shipped — itch.io",
    team: "Solo",
    engine: "Unity",
    year: "2025",
    role: "Solo developer",
    tags: ["Horror", "Comedy", "FSM AI"],
    links: [{ label: "itch.io", url: "https://thenexystudio.itch.io/locked-in-nonsense" }],
    description: [
      "What started as an inside joke for a small group of friends turned into a full comedic horror-exploration game once I decided it deserved a real release.",
      "A wandering AI breaks into a dance the moment it spots you, then gives chase. Every item earns its place: a video player that plays meme cassette tapes directly on its in-world screen, a security camera that lets you scout which room the AI is in, and a prop gun that's actually a flashlight in disguise.",
      "The main quest is exactly as ridiculous as it sounds — toilet paper, a vending machine puzzle, a fridge code, and a cow that needs to end up in the bathroom."
    ],
    highlights: [
      "Patrol/chase finite-state AI with a distinct 'caught' scare beat",
      "Full custom item system, each item with a real mechanical purpose",
      "In-world playable video player object (plays actual video on a 3D screen)",
      "Camera-based room monitoring system"
    ]
  },
  {
    slug: "tanks",
    title: "Multiplayer Tank Game",
    hook: "Every turret fires differently. Every hull takes damage differently. Every match is a build.",
    cover: "01.jpg",
    imageCount: 4,
    video: { count: 1 },
    status: "Work in progress",
    team: "Solo",
    engine: "Unity + Mirror",
    year: "2025–ongoing",
    role: "Solo developer",
    tags: ["Multiplayer", "Custom Netcode", "WIP"],
    links: [],
    description: [
      "A multiplayer tank shooter with netcode built entirely from scratch — client-side prediction, movement reconciliation, and lag compensation, no off-the-shelf networking solution doing the heavy lifting.",
      "Full loadout customization across hull, turret, and commander, each with real mechanical identity: turrets range from a charge-based heavy hitter to a flamethrower to a Clash Royale-style beam that ramps up damage the longer it stays locked on.",
      "Game modes (DM, TDM, CTF) are config-driven — built as ScriptableObjects wired through Zenject, so adding a new mode doesn't touch core code. 20,000+ lines of code and still growing."
    ],
    highlights: [
      "Custom netcode: client-side prediction, reconciliation, lag compensation",
      "Modular hull / turret / commander loadout system",
      "Config-driven game modes via ScriptableObjects + Zenject",
      "20,000+ lines of code, zero off-the-shelf multiplayer framework"
    ]
  },
  {
    slug: "shootemup-64",
    title: "shootemup-64",
    hook: "Only shoot the color the floor is right now.",
    cover: "01.jpg",
    imageCount: 6,
    video: { count: 1 },
    status: "Shipped — GitHub",
    team: "Solo",
    engine: "Unity",
    year: "2024",
    role: "Solo developer",
    tags: ["Arcade", "Rhythm", "Solo"],
    links: [{ label: "GitHub", url: "https://github.com/ggStrider/shootemup-64" }],
    description: [
      "A rhythm-driven arcade shooter: enemies approach from every side, and you can only damage the ones matching the floor's current color — which shifts on the beat of the music.",
      "Extended the base concept with a purchasable power-up economy (piercing shots, slow and haste zones) bought with currency earned each run, plus post-run stats."
    ],
    highlights: [
      "Music-synced color-matching combat loop",
      "Power-up economy: piercing shots, slow/haste zones",
      "Post-run statistics screen"
    ]
  },
  {
    slug: "interpressure",
    title: "Interpressure",
    hook: "A city where every building costs you something to keep.",
    cover: "01.jpg",
    imageCount: 6,
    video: null,
    status: "Shipped — itch.io · Game Jam",
    team: "4-person team (2 programmers)",
    engine: "Unity",
    year: "2024",
    role: "Programmer",
    tags: ["City Builder", "Game Jam", "Team"],
    links: [{ label: "itch.io", url: "https://ggstrider.itch.io/interpressure" }],
    description: [
      "Built with a 4-person team (2 programmers) for a game jam themed 'Bubbles.'",
      "Every building you place produces a resource but also consumes one — a farm needs workers but feeds them, and so on — so growth means constantly balancing trade-offs rather than just placing more buildings.",
      "Shipped with session save/load, a hand-illustrated tutorial, a 2D cutscene, and small drone units that collect resources from passing meteors."
    ],
    highlights: [
      "Resource-driven building system with real trade-offs",
      "Session save/load",
      "Hand-illustrated in-game tutorial + 2D cutscene"
    ]
  },
  {
    slug: "anexprmnt",
    title: "AnExprmnt",
    hook: "Built to make friends laugh. Everyone survived. The AI, less so.",
    cover: "01.jpg",
    imageCount: 9,
    video: null,
    status: "One-off build",
    team: "Solo",
    engine: "Unity",
    year: "2024",
    role: "Solo developer",
    tags: ["Horror", "Comedy", "FSM AI"],
    links: [],
    description: [
      "A backrooms-style horror game made purely as a joke, meant to be played once with friends watching.",
      "An AI enemy alternates between wandering random waypoints and hunting the player, occasionally shouting voice lines recorded from a friend's Discord calls. Three items carry real mechanical weight: a throwable that repels and briefly freezes the enemy, a healing item that stacks in threes, and one item that's the only thing standing between you and instant death if the enemy catches you.",
      "It ends with an absurd cutscene nobody saw coming — pure chaos, exactly as intended."
    ],
    highlights: [
      "Patrol/chase finite-state AI with periodic forced aggro",
      "3-item risk/reward combat loop",
      "\"Smash-button\" interaction mechanic"
    ]
  },
  {
    slug: "dhcdname",
    title: "dhCDNAME",
    hook: "A tired man comes home, sets the table, and something in the storm doesn't want him to rest.",
    cover: "01.jpg",
    imageCount: 5,
    video: null,
    status: "Shipped — itch.io",
    team: "Solo",
    engine: "Unity",
    year: "2023",
    role: "Solo developer — first shipped project",
    tags: ["Horror", "Narrative", "First Project"],
    links: [{ label: "itch.io", url: "https://thenexystudio.itch.io/dhcdname" }],
    description: [
      "My first shipped project. You come home exhausted, cook a small meal, and sit down to unwind — while a thunderstorm outside slowly turns into something else.",
      "Built a lightweight quest system with readable objective text that crosses itself out as you finish each step, interactable notes carrying the story, and a lightning sequence driven by a particle system paired with a directional-light flash timed to the thunder."
    ],
    highlights: [
      "Mini-quest/objective tracking with visual completion feedback",
      "Interactable story notes",
      "Event-driven lighting & audio for the thunderstorm sequence"
    ]
  },
  {
    slug: "slowmo-kenr",
    title: "slowmo kenr",
    hook: "Nothing is trying to kill you. Everything is trying to hit you.",
    cover: "01.jpg",
    imageCount: 2,
    video: { count: 1 },
    status: "Prototype",
    team: "Solo",
    engine: "Unity",
    year: "2024",
    role: "Solo developer",
    tags: ["Bullet Hell", "Prototype"],
    links: [],
    description: [
      "A bullet-hell arena with no enemies to fight — just an escalating sequence of attack patterns: homing rockets, sine-wave bullet streams, sweeping lasers, and delayed bomb bursts that spawn a ring of projectiles after a few seconds.",
      "The core mechanic is a slow-motion button that turns the last second of a dodge into a puzzle instead of a reflex test — the camera eases in during slow-mo to sell the moment."
    ],
    highlights: [
      "Time-slow mechanic with camera-zoom feedback",
      "Multiple attack pattern types (homing, sinusoidal, laser, timed bombs)"
    ]
  },
  {
    slug: "twbg",
    title: "twbG",
    hook: "Point in a direction. That's down now.",
    cover: "01.jpg",
    imageCount: 1,
    video: { count: 1 },
    status: "Prototype",
    team: "Solo",
    engine: "Unity",
    year: "2024",
    role: "Solo developer",
    tags: ["Movement Prototype"],
    links: [],
    description: [
      "A short movement experiment: the player can redirect their own gravity on the fly, picking a direction and getting pulled toward it immediately.",
      "Interactive objects and collectible coins scattered through the level give the core mechanic something to actually play with."
    ],
    highlights: [
      "Player-controlled gravity redirection",
      "Interactive objects & collectibles"
    ]
  },
  {
    slug: "dare-to-share",
    title: "Dare to Share",
    hook: "A deck of prompts for a group of friends, minus the physical cards.",
    cover: "01.jpg",
    imageCount: 3,
    video: null,
    status: "Shipped — Android",
    team: "Solo",
    engine: "Unity",
    year: "2023",
    role: "Solo developer",
    tags: ["Utility", "Android"],
    links: [],
    description: [
      "Built in a single day, mostly for fun. Pick a category of prompts — or mix them all into one deck — and work through the cards together, with full undo/redo so you can step back to a previous question or skip ahead.",
      "Closer to a card-game app than a traditional 'game,' but a good exercise in shipping something small, complete, and actually usable end to end."
    ],
    highlights: [
      "Full undo/redo history stack",
      "Category filtering / deck mixing",
      "Built and shipped in a single day"
    ]
  }
];
