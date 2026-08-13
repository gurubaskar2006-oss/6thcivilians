export const brand = {
  name: "PR Partners",
  mark: "PR",
  tagline: "Public Relations & Partnerships",
};

export const navLinks = [
  { label: "Who We Are", href: "#who-we-are" },
  { label: "Philosophy", href: "#philosophy" },
  { label: "Team", href: "#team" },
  { label: "Values", href: "#values" },
  { label: "Contact", href: "#contact" },
];

export type Member = {
  name: string;
  title: string;
  focus: string;
  initials: string;
  highlighted?: boolean;
  badge?: string;
  image?: string;
};

export const members: Member[] = [
  {
    name: "Sarath Abimanyu",
    title: "Strategy Mastermind",
    focus:
      "Shapes the vision behind every partnership, turning ideas into lasting impact.",
    initials: "SA",
    highlighted: true,
    badge: "Team Head",
    image: "/team/sarath.jpeg",
  },
  {
    name: "Stanly Rumald",
    title: "Partnership Development",
    focus:
      "Builds and nurtures relationships that stand the test of time.",
    initials: "SR",
    image: "/team/stanly.jpeg",
  },
  {
    name: "Hemanth Sachin",
    title: "Communications & Engagement",
    focus:
      "Crafts the voice that connects our story to every audience.",
    initials: "HS",
    image: "/team/sachin.jpeg",
  },
  {
    name: "Santhosh",
    title: "Institution Relations",
    focus:
      "Bridges trust between institutions and the people they serve.",
    initials: "SA",
    image: "/team/santhosh.jpeg",
  },
  {
    name: "Sarveshwaran",
    title: "Operations & Coordination",
    focus:
      "Keeps every moving part aligned, precise, and on point.",
    initials: "SW",
    image: "/team/sarvesh.jpeg",
  },
  {
    name: "Selva Ganesh",
    title: "Growth & Outreach",
    focus:
      "Expands our reach while keeping every connection genuine.",
    initials: "SG",
    image: "/team/selva_ganesh.jpeg",
  },
];

export const manifestoLines = [
  "The work we do lives in the spaces between people —",
  "where a message becomes trust,",
  "and a promise becomes a partnership.",
];

export const manifestoBody =
  "We are a small, deliberate team. Six Pillars, one standard: every relationship we build should be worthy of the people who trust it.";

export const metrics = [
  { value: "06", label: "Pillars" },
  { value: "01", label: "Shared Standard" },
  { value: "∞", label: "Commitment" },
];

export type Pillar = {
  index: string;
  title: string;
  copy: string;
};

export const pillars: Pillar[] = [
  {
    index: "01",
    title: "Trust",
    copy: "Trust is never requested — it is built, quietly and consistently, until it becomes the foundation every decision stands on.",
  },
  {
    index: "02",
    title: "Relationships",
    copy: "We invest in people before outcomes. A strong relationship is the only channel that never stops working.",
  },
  {
    index: "03",
    title: "Commitment",
    copy: "We stay when it is hard. Commitment is what turns a one-time engagement into a partnership that endures.",
  },
  {
    index: "04",
    title: "Impact",
    copy: "Impact is measured in outcomes that outlast the effort — reputation that compounds long after the work is done.",
  },
];

export type Value = {
  icon: string;
  title: string;
  copy: string;
};

export const values: Value[] = [
  {
    icon: "ShieldCheck",
    title: "Trust",
    copy: "Every decision protects the trust our partners place in us.",
  },
  {
    icon: "Users",
    title: "Collaboration",
    copy: "The best outcomes are built together, never in isolation.",
  },
  {
    icon: "BadgeCheck",
    title: "Commitment",
    copy: "We see every engagement through to the end — and beyond.",
  },
  {
    icon: "Briefcase",
    title: "Professionalism",
    copy: "Quiet precision in everything we do, from first call to final result.",
  },
  {
    icon: "TrendingUp",
    title: "Impact",
    copy: "We measure success in change that lasts, not noise that fades.",
  },
  {
    icon: "Infinity",
    title: "Long-Term Partnership",
    copy: "We think in decades, not deadlines.",
  },
];

export const socialLinks = [
  { label: "LinkedIn", href: "#" },
];
