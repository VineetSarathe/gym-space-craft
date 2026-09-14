/**
 * Company content. Every list is additive — new awards, press pieces,
 * certifications or testimonials can be appended without touching layout.
 */

export const storyArc = [
  {
    year: "Class 12",
    title: "Architecture considered, interiors chosen",
    text: "Sagrika weighed architecture seriously, then chose interior design — the scale where a decision is felt daily by the people inside the room.",
  },
  {
    year: "2018",
    title: "Instagram as the first portfolio",
    text: "No studio, no website. Work was posted as it was drawn, and the first clients arrived through the grid rather than a pitch.",
  },
  {
    year: "2019–2021",
    title: "Residential into commercial",
    text: "Homes taught detail and patience. Commercial work introduced the harder question — how does this space perform on its busiest day?",
  },
  {
    year: "2021",
    title: "The first gym, through a personal connection",
    text: "A referral from someone who trusted her with a floor she had never designed before. Equipment logic, circulation and durability had to be learned from the ground up.",
  },
  {
    year: "Since",
    title: "Word of mouth turned it into a specialisation",
    text: "One gym owner told another. Fifteen-plus fitness floors later, gym interiors are not a category the studio takes on — they are what the studio does.",
  },
];

export const methodSteps = [
  { k: "Understand", d: "Your members, your model, your operating hours." },
  { k: "Research", d: "Equipment specs, footfall data, comparable floors." },
  { k: "Plan", d: "Zoning and circulation before aesthetics." },
  { k: "Design", d: "Concept, lighting, 3D views, 2D working drawings." },
  { k: "Build", d: "Drawing support through execution on site." },
  { k: "Learn", d: "Post-opening review that feeds the next project." },
];

/** Empty this array and the Awards sub-section disappears — no padding. */
export const awards = [
  { title: "Emerging Interior Designer", source: "Regional Design Awards", year: "2024" },
  {
    title: "Commercial Space of the Year — Shortlist",
    source: "India Interiors Forum",
    year: "2023",
  },
  { title: "Featured Studio", source: "Fitness Business India", year: "2023" },
];

/** Each entry links to the original piece. Placeholder URLs for now. */
export const press = [
  {
    outlet: "Fitness Business India",
    title: "Why gym layouts fail in year two",
    year: "2024",
    url: "https://example.com/placeholder-press-1",
  },
  {
    outlet: "Indore Design Weekly",
    title: "The studio designing Indore's strength floors",
    year: "2023",
    url: "https://example.com/placeholder-press-2",
  },
];

export const certifications = [
  { title: "B.Sc. Interior Design", source: "Placeholder institution", year: "2018" },
  { title: "Commercial Space Planning", source: "Placeholder certification body", year: "2021" },
  { title: "Fire & Life Safety for Assembly Spaces", source: "Placeholder course", year: "2023" },
];

export const clientVoices = [
  {
    quote:
      "She asked how our floor runs at 7am before she asked what we wanted it to look like. That's the whole difference.",
    author: "Owner",
    project: "Iron Standard",
    slug: "iron-standard",
    type: "written" as const,
  },
  {
    quote:
      "The zoning drawing settled arguments we'd been having for months. Our contractor built from it without a single call back to us.",
    author: "Founder",
    project: "Sanctum Wellness",
    slug: "sanctum-wellness",
    type: "video" as const,
  },
];

export const roles: { title: string; type: string; location: string; text: string }[] = [];

export const generalFaqs = [
  {
    q: "Do you take remote or international clients?",
    a: "Yes. Roughly a third of our work is outside Indore. Everything up to working drawings is handled remotely over shared drawings and calls, with a site survey either by our team or by your contractor against our checklist. Out-of-city site visits are planned in advance and billed at cost.",
  },
  {
    q: "How long does a typical gym design project take?",
    a: "Six to ten weeks from first call to a full drawing set for a floor between 3,000 and 8,000 sq ft. Concept lands in weeks two to three, layout is frozen around week four, and working drawings follow. Larger floors and multi-level spaces run longer.",
  },
  {
    q: "Do you only design gyms, or other fitness and wellness spaces too?",
    a: "Gyms are the core, but the same thinking applies to pilates, yoga and cycling studios, recovery and physiotherapy spaces, and the fitness floors inside hotels and residential clubhouses.",
  },
  {
    q: "What is the process from first call to completed space?",
    a: "Understand, Research, Plan, Design, Build, Learn. A 30-minute discovery call, a shell and business review, zoning and circulation, then concept, lighting, 3D views and dimensioned drawings. Your contractor builds; we stay available for drawing queries and review the floor once it has been running.",
  },
  {
    q: "Do you handle execution and build, or design only?",
    a: "Design and drawings only. Construction, fit-out, procurement and site labour sit with your own contractor under your contract. It keeps our advice on materials and equipment independent of who is supplying them.",
  },
  {
    q: "What information do you need before the first consultation?",
    a: "Floor area, city, a rough equipment list or member target, and any drawing of the shell you already have — even a broker's plan. Photos or a walkthrough video of the raw space help more than anything else.",
  },
];

export const startFaqs = [
  {
    q: "Can you work on a gym outside my city?",
    a: "Yes — remote projects are normal here. Drawings, calls and a structured site survey cover most of it, with planned visits where the floor needs eyes on it.",
  },
  {
    q: "What's a typical timeline?",
    a: "Six to ten weeks from first call to a complete drawing set for most floors.",
  },
  {
    q: "How does the first call work?",
    a: "Thirty minutes. Your space, your model, your peak hour. You leave with an initial view on capacity and layout whether or not we work together.",
  },
  {
    q: "Do you build the space too?",
    a: "No. Design and drawings only — your own contractor executes, and we support them through the build with drawing clarifications.",
  },
];

export const WHATSAPP_URL = "https://wa.me/910000000000";
