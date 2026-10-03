export const links = {
  guide: "https://stillsurviving.netlify.app",
  youtube: "https://www.youtube.com/@TheMindshift_Movement",
  instagram: "https://instagram.com/themindshift_movement",
  tiktok: "https://www.tiktok.com/@themindshiftmovement",
  facebook: "https://facebook.com/Mindshiftmethod",
  linktree: "https://linktr.ee/themindshiftmovement",
} as const;

export const pillars = [
  {
    kicker: "Mindset",
    text: "The stories that keep sending you back to the same place.",
  },
  {
    kicker: "Nervous system",
    text: "Why willpower loses when the body is still in survival.",
  },
  {
    kicker: "Self-leadership",
    text: "Calm, clarity, and confidence you can actually practise.",
  },
] as const;

export const method = [
  {
    word: "Awareness",
    text: "Name the pattern before you try to outthink it. Seeing it is the first shift.",
  },
  {
    word: "Alignment",
    text: "Come back to what is true in the body, not only what looks acceptable.",
  },
  {
    word: "Action",
    text: "Choose the next small move from clarity — not from the old survival script.",
  },
] as const;

export type PatternId =
  | "pleaser"
  | "overthinker"
  | "performer"
  | "dissociator"
  | "busy";

export const patterns: {
  id: PatternId;
  index: string;
  name: string;
  line: string;
  result: string;
}[] = [
  {
    id: "pleaser",
    index: "01",
    name: "The People Pleaser",
    line: "You keep the peace by leaving yourself out of it.",
    result:
      "You regulate the room before you check in with yourself. Connection stays safe. You come last.",
  },
  {
    id: "overthinker",
    index: "02",
    name: "The Overthinker",
    line: "If you can understand it, maybe you can finally stop feeling it.",
    result:
      "Thinking feels like safety. The loop stays loud because stopping would mean feeling what is underneath.",
  },
  {
    id: "performer",
    index: "03",
    name: "The Performer",
    line: "You look regulated. You are running on the costume.",
    result:
      "Competence became the way you stay respectable. You can look fine and still be empty.",
  },
  {
    id: "dissociator",
    index: "04",
    name: "The Dissociator",
    line: "Leaving the moment was intelligent. Staying gone has a cost.",
    result:
      "Distance kept you intact when closeness was too much. The life you want asks you to come back into it.",
  },
  {
    id: "busy",
    index: "05",
    name: "The Busy Procrastinator",
    line: "Motion looks like progress. It can also be a hiding place.",
    result:
      "Busyness is a polite way to avoid the thing that matters. Full days. The same unfinished centre.",
  },
];

export const questions: {
  prompt: string;
  options: { id: PatternId; label: string }[];
}[] = [
  {
    prompt: "When someone is disappointed in you, what happens first?",
    options: [
      { id: "pleaser", label: "I rearrange myself so they feel okay again." },
      { id: "overthinker", label: "I replay it until I can explain every angle." },
      { id: "performer", label: "I get polished, useful, and hard to fault." },
      { id: "dissociator", label: "I go somewhere else in my head." },
      { id: "busy", label: "I suddenly have twenty things that cannot wait." },
    ],
  },
  {
    prompt: "A quiet afternoon with nothing scheduled feels…",
    options: [
      { id: "pleaser", label: "Risky. Someone might need me and I will miss it." },
      { id: "overthinker", label: "Loud. The thoughts get the whole room." },
      { id: "performer", label: "Exposed. With nothing to do, who am I performing for?" },
      { id: "dissociator", label: "Foggy. I drift out instead of arriving." },
      { id: "busy", label: "Wrong. I invent a task so I can feel in motion." },
    ],
  },
  {
    prompt: "Which sentence has been running in the background?",
    options: [
      { id: "pleaser", label: "If I say no, I will lose them." },
      { id: "overthinker", label: "If I stop analysing, I will miss the danger." },
      { id: "performer", label: "If they see the real me, the respect goes." },
      { id: "dissociator", label: "If I stay in my body, it will be too much." },
      { id: "busy", label: "If I slow down, everything will fall apart." },
    ],
  },
  {
    prompt: "You've done the journaling, the courses, the books — and still land in the same place. That feels like…",
    options: [
      { id: "pleaser", label: "I understood it, then went back to managing everyone." },
      { id: "overthinker", label: "More insight. Same loop. I need one more explanation." },
      { id: "performer", label: "I looked like someone who was healing." },
      { id: "dissociator", label: "I knew the words. I wasn't in the room for them." },
      { id: "busy", label: "I scheduled the work and never actually sat in it." },
    ],
  },
];

export const meditations = [
  {
    id: "wXv4pvn0rBk",
    title: "Step Into the Garden of Abundance",
    detail: "888Hz · prosperity and growth · 15 min",
    image: "/brand/med-888.jpg",
    blurb: "A guided meditation for slowing down and inviting a wider sense of enough.",
  },
  {
    id: "wfsUMpbsX0U",
    title: "777Hz Sleep Meditation",
    detail: "Winning call · abundance, luck and alignment · 15 min",
    image: "/brand/med-777.jpg",
    blurb: "A night practice for peace before bed — frequency, affirmation, and rest.",
  },
] as const;

export type ShopGroup = "all" | "journal" | "magnets";

export const products: {
  id: string;
  title: string;
  price: string;
  group: Exclude<ShopGroup, "all">;
  image: string;
  href: string;
  blurb: string;
  words: string[];
}[] = [
  {
    id: "volume-1",
    title: "Mindshift · Volume 1",
    price: "A$60",
    group: "journal",
    image: "/brand/volume1.png",
    href: "https://jasberrie.gumroad.com/l/MindshiftV1",
    blurb:
      "The guided journal. Awareness, alignment, action — a place to practise the method, not just read about it.",
    words: ["Awareness", "Alignment", "Action"],
  },
  {
    id: "bundle",
    title: "Complete Affirmagnet Collection",
    price: "A$60",
    group: "magnets",
    image: "/brand/bundle.jpeg",
    href: "https://jasberrie.gumroad.com/l/bundlepack",
    blurb: "All three packs. Words you can put where your eyes already land.",
    words: ["I AM", "I FEEL", "I ATTRACT"],
  },
  {
    id: "iam",
    title: "Affirmagnets · I AM",
    price: "A$22",
    group: "magnets",
    image: "/brand/iam.jpeg",
    href: "https://jasberrie.gumroad.com/l/IAM",
    blurb: "Identity, said simply and left in sight.",
    words: ["Enough", "Confident", "Loved", "Grounded", "Beautiful"],
  },
  {
    id: "ifeel",
    title: "Affirmagnets · I FEEL",
    price: "A$22",
    group: "magnets",
    image: "/brand/ifeel.jpeg",
    href: "https://jasberrie.gumroad.com/l/IFEEL",
    blurb: "States worth practising until the body believes them.",
    words: ["Worthy", "Fierce", "Inspired", "Successful", "Healthy"],
  },
  {
    id: "iattract",
    title: "Affirmagnets · I ATTRACT",
    price: "A$22",
    group: "magnets",
    image: "/brand/iattract.jpeg",
    href: "https://jasberrie.gumroad.com/l/IATTRACT",
    blurb: "What you are willing to let come closer.",
    words: ["Respect", "Positivity", "Abundance", "Wealth", "Peace"],
  },
];

export const socials = [
  {
    name: "Instagram",
    handle: "@themindshift_movement",
    href: links.instagram,
    text: "The visual home. Short shifts, words, and the day-to-day of the method.",
  },
  {
    name: "TikTok",
    handle: "@themindshiftmovement",
    href: links.tiktok,
    text: "Grew up in dysfunction and still living in survival mode? You're not broken. You're patterned.",
  },
  {
    name: "YouTube",
    handle: "The Mindshift Movement",
    href: links.youtube,
    text: "Jasmine’s channel to slow down, reconnect, and remember your power. Meditations and frequency practices.",
  },
  {
    name: "Facebook",
    handle: "Mindshift Method",
    href: links.facebook,
    text: "The longer room. Community around mindset, the nervous system, and self-leadership.",
  },
] as const;
