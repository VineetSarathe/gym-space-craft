import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import p4 from "@/assets/project-4.jpg";
import p5 from "@/assets/project-5.jpg";
import p6 from "@/assets/project-6.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import caseImg from "@/assets/case-study.jpg";
import floorplan from "@/assets/floorplan.jpg";
import heroGym from "@/assets/hero-gym.jpg";

/**
 * Add a new category by adding it here — the Work listing tabs and the
 * project cards read from this list, so no restructuring is needed.
 */
export const categories = ["Gym Projects", "Wellness Studios"] as const;
export type Category = (typeof categories)[number];

export type Project = {
  slug: string;
  name: string;
  location: string;
  category: Category;
  area: string;
  year: string;
  clientType: string;
  cardLabel?: string;
  hideCardMeta?: boolean;
  insight: string;
  card: string;
  hero: string;
  gallery: { src: string; alt: string; caption?: string }[];
  plan?: { src: string; alt: string; caption: string };
  study: { brief: string; user: string; challenge: string; decisions: string; outcome: string; learning: string };
  testimonial: { quote: string; author: string; role: string };
};

export const projects: Project[] = [
  {
    slug: "iron-standard",
    name: "THE STRENGTH CULTURE",
    location: "Jammu (J&K), India",
    category: "Gym Projects",
    cardLabel: "GYM INTERIOR DESIGN PROJECTS",
    hideCardMeta: true,
    area: "6,200 sq ft",
    year: "2024",
    clientType: "STRENGTH TRAINING GYM",
    insight:
      "All-black strength gym to maintain the focus on training with clear circulation and movement planned around the workout.",
    card: p1,
    hero: heroGym,
    gallery: [
      { src: gallery1, alt: "Placeholder: barbell storage against micro-cement wall at Iron Standard", caption: "Loading zones sized for two lifters, not one." },
      { src: caseImg, alt: "Placeholder: main training floor at Iron Standard", caption: "The strength floor reads as one room, but runs as four zones." },
    ],
    plan: {
      src: floorplan,
      alt: "Placeholder zoning diagram: circulation spine through the Iron Standard floor",
      caption: "Zoning study — a single circulation spine keeps the free-weight and machine zones from crossing.",
    },
    study: {
      brief:
        "A 6,200 sq ft first floor taken raw, with a members' target of 700 and a plan to run personal training on the same floor as open gym. The owner had a signed lease and an equipment list, and no layout that made the two work together.",
      user:
        "Serious lifters between 22 and 40 training in a compressed 6–9am and 7–10pm window, plus PT clients paying premium rates who cannot be pushed into the busiest corner of the floor.",
      challenge:
        "One entry, one lift lobby and a column grid at 5.4m. The equipment list needed 14 racks, a turf lane and a full machine circuit — the naive layout put the sled lane across the only path from the entry to the changing rooms.",
      decisions:
        "We rezoned the floor around a single 2.1m circulation spine with strength on one side and conditioning on the other, moved cardio off the window wall to the mezzanine edge, and set the PT bays where trainers hold sightlines across both zones. Rack spacing was fixed at 2.4m centres before any finish was selected.",
      outcome:
        "Peak-hour equipment wait dropped by roughly half against the owner's earlier floor, the turf lane runs without interrupting entry traffic, and PT sessions are booked on the same floor at full rate.",
      learning:
        "When circulation is decided first, the equipment list stops being a constraint and becomes a plan. We now draw the spine before the racks on every strength floor.",
    },
    testimonial: {
      quote:
        "Sagrika asked about our class timings and trainer roster before she asked about colours. That is why the floor works at 7am.",
      author: "Placeholder Client",
      role: "Founder, Iron Standard",
    },
  },
  {
    slug: "sanctum-wellness",
    name: "A3 FITNESS GYM & SPA",
    location: "JAMMU, INDIA · 3,500 SQ FT",
    category: "Gym Projects",
    cardLabel: "GYM INTERIOR DESIGN PROJECTS",
    hideCardMeta: true,
    area: "3,500 sq ft",
    year: "2024",
    clientType: "LIFESTYLE-FOCUSED FITNESS SPACE",
    insight:
      "A 3,500 sq ft fitness space planned around cardio, Zumba, dumbbells and strength training, using ceilings and flooring to define each zone.",
    card: p2,
    hero: p2,
    gallery: [
      { src: p5, alt: "Placeholder: calm studio room with warm oak floor at Sanctum Wellness", caption: "The quiet room sits furthest from the entry, not nearest the window." },
      { src: gallery1, alt: "Placeholder: material study at Sanctum Wellness" },
    ],
    plan: {
      src: floorplan,
      alt: "Placeholder zoning diagram: acoustic buffer between the two studio rooms",
      caption: "Storage and changing rooms were used as an acoustic buffer between the two studios.",
    },
    study: {
      brief:
        "Two class formats — yoga and HIIT — sold on the same timetable, in a single 2,400 sq ft shell with one shared reception.",
      user:
        "Members arriving for a 45-minute class and leaving within the hour. Throughput at the door matters more than floor area inside.",
      challenge:
        "Sound. A HIIT class at 60 beats per minute of dropped weight is not compatible with a breathing sequence eight metres away, and the client could not afford to lose either format.",
      decisions:
        "Wet areas and storage were placed as a solid mass between the two rooms, the HIIT studio was given a floating floor build-up, and the timetable was designed with the client so class changeovers stagger by seven minutes at the door.",
      outcome:
        "Both formats run concurrently at full capacity. Reception handles two changeovers without a queue reaching the street door.",
      learning:
        "Acoustic planning is a business decision before it is a technical one — it decides how many classes the space can sell in a day.",
    },
    testimonial: {
      quote: "We were told we would have to pick one format. We run both, at the same time.",
      author: "Placeholder Client",
      role: "Director, Sanctum Wellness",
    },
  },
  {
    slug: "north-block-strength",
    name: "FIT FIRST GYM",
    location: "RAJKOT, INDIA",
    category: "Gym Projects",
    cardLabel: "GYM INTERIOR DESIGN PROJECTS",
    hideCardMeta: true,
    area: "3,900 sq ft",
    year: "2023",
    clientType: "FITNESS ARENA",
    insight:
      "A massive fitness arena imagined from far-off Delhi, with meticulous planning and detailed drawings linking design to execution in Rajkot.",
    card: p6,
    hero: p6,
    gallery: [{ src: gallery1, alt: "Placeholder: interior detail at North Block Strength" }],
    study: {
      brief: "A neighbourhood gym rebuilding its front-of-house after four years of trading.",
      user: "Members who train for 50 minutes and pass reception twice a day.",
      challenge: "Reception blocked the entry, so members walked around it and never saw the retail shelf.",
      decisions:
        "The desk was rotated off the entry axis, retail was placed on the exit path at eye level, and the changing-room door was moved so the two flows stopped crossing.",
      outcome: "Retail pick-up roughly doubled and the entry queue at 7pm disappeared.",
      learning: "Front-of-house is a revenue zone, not a lobby.",
    },
    testimonial: {
      quote: "Same shelf, same stock, different position. It sells now.",
      author: "Placeholder Client",
      role: "Owner, North Block Strength",
    },
  },
  {
    slug: "rep-house-cycle",
    name: "THE BODY MOVE FITNESS",
    location: "New Delhi, India",
    category: "Gym Projects",
    cardLabel: "GYM INTERIOR DESIGN PROJECTS",
    hideCardMeta: true,
    area: "1,600 sq ft",
    year: "2023",
    clientType: "CLUB-BASED FITNESS SPACE",
    insight:
      "A nature-inspired fitness space with wood, stone, limewash textures and natural light to create an experience beyond the typical dark gym.",
    card: p4,
    hero: p4,
    gallery: [
      { src: p5, alt: "Placeholder: studio interior at Rep House Cycle" },
      { src: gallery1, alt: "Placeholder: material detail at Rep House Cycle" },
    ],
    plan: {
      src: floorplan,
      alt: "Placeholder section study: tiered cycling deck levels",
      caption: "Three tiers at 300mm rise — nine more bikes inside the same lease.",
    },
    study: {
      brief: "A cycling studio whose class economics only worked above 32 bikes, in a room that fitted 23.",
      user: "Class-pack buyers booking a fixed 45-minute slot, who need a clear view of the instructor from every bike.",
      challenge:
        "Adding bikes on a flat floor kills sightlines to the instructor and makes the back rows unsellable.",
      decisions:
        "The room was tiered in three levels at 300mm rise, the instructor podium was dropped to the lowest level, and ventilation was rebalanced so the top tier does not run hot.",
      outcome: "32 bikes, every one of them sold at the same price, inside the original footprint.",
      learning:
        "Section work — not plan work — is where small studios find their revenue. We now study the section on every studio under 2,000 sq ft.",
    },
    testimonial: {
      quote: "Nine more bikes per class changed the maths of the whole business.",
      author: "Placeholder Client",
      role: "Founder, Rep House Cycle",
    },
  },
  {
    slug: "forge-24",
    name: "A3 FITNESS GYM 2",
    location: "",
    category: "Gym Projects",
    cardLabel: "GYM INTERIOR DESIGN PROJECTS",
    hideCardMeta: true,
    area: "4,800 sq ft",
    year: "2023",
    clientType: "EXPANDED FITNESS GYM",
    insight:
      "A bigger gym cut out of a former car garage, with existing mirrors, sectional ceilings and layered lighting to create a more premium fitness space.",
    card: p3,
    hero: p3,
    gallery: [
      { src: p6, alt: "Placeholder: turf sled lane at Forge 24", caption: "The sled lane runs parallel to circulation, never across it." },
      { src: caseImg, alt: "Placeholder: main floor at Forge 24" },
    ],
    study: {
      brief:
        "A 24-hour unstaffed gym where members train alone at 2am and the layout has to do the supervising.",
      user: "Shift workers and early risers, often training solo with no floor staff present.",
      challenge:
        "Safety and sightlines without staff. Every blind corner is a liability, and heavy lifting happens without a spotter.",
      decisions:
        "Sightlines from the entry were kept unbroken to every corner, the free-weight zone was placed within camera coverage, and rack safeties were specified as standard rather than optional. Lighting runs at full level through the night in the training zones and drops only in circulation.",
      outcome:
        "No blind zones on the floor, and the collision point between the sled lane and the main aisle was removed entirely in the plan stage.",
      learning:
        "Unstaffed hours change the brief completely. The layout has to replace the floor manager.",
    },
    testimonial: {
      quote: "The night shift is our busiest quiet hour. The floor holds up without anyone watching it.",
      author: "Placeholder Client",
      role: "Owner, Forge 24",
    },
  },
  {
    slug: "still-house-recovery",
    name: "DAWN'S GYM",
    location: "AMRITSAR, INDIA",
    category: "Gym Projects",
    cardLabel: "GYM INTERIOR DESIGN PROJECTS",
    hideCardMeta: true,
    area: "1,900 sq ft",
    year: "2022",
    clientType: "LUXURY MULTI-FLOOR GYM",
    insight:
      "A multi-level gym that combines strength training, crossfit, women's training and hospitality spaces, all in one coherent design language.",
    card: p5,
    hero: p5,
    gallery: [{ src: p2, alt: "Placeholder: recovery room at Still House" }],
    study: {
      brief: "A recovery studio combining sauna, cold plunge and mobility work on one floor.",
      user: "Members arriving straight from training elsewhere, in gym kit, wet on exit.",
      challenge: "Water travelling into the dry mobility zone, and a cleaning cycle eating an hour a day.",
      decisions:
        "The plan splits wet and dry at the threshold, floors are graded to concealed channels, and every wet-zone finish was specified against a five-year maintenance cost.",
      outcome: "Turnaround between sessions dropped and the dry floor stayed dry through peak days.",
      learning: "In recovery spaces the drainage plan is the layout. Everything else follows it.",
    },
    testimonial: {
      quote: "Our cleaning routine went from an hour to twenty minutes.",
      author: "Placeholder Client",
      role: "Founder, Still House Recovery",
    },
  },
  {
    slug: "fitness-manzil-gym",
    name: "FITNESS MANZIL GYM",
    location: "South Delhi, India",
    category: "Gym Projects",
    cardLabel: "GYM INTERIOR DESIGN PROJECTS",
    hideCardMeta: true,
    area: "",
    year: "",
    clientType: "PREMIUM FITNESS GYM",
    insight:
      "Smart zoning of a basement gym with little natural light to bring daylight into the cardio and studio areas.",
    card: caseImg,
    hero: caseImg,
    gallery: [
      { src: p1, alt: "Fitness Manzil Gym basement training floor" },
      { src: gallery1, alt: "Fitness Manzil Gym cardio and studio daylight zoning" },
    ],
    study: {
      brief: "A basement gym in South Delhi with almost no natural light, needing cardio and studio zones that still felt open.",
      user: "Members training across cardio, group studio and strength in a below-ground shell.",
      challenge: "Little daylight and a basement plan that made cardio and studio spaces feel closed in.",
      decisions:
        "Zoning, ceiling treatment and light paths were used to pull daylight into the cardio and studio areas without adding partitions.",
      outcome: "The basement reads as a premium gym, with cardio and studio zones that feel brighter and easier to use.",
      learning: "In a dark shell, zoning and light matter more than decoration.",
    },
    testimonial: {
      quote: "The basement no longer feels like a basement.",
      author: "Placeholder Client",
      role: "Owner, Fitness Manzil Gym",
    },
  },
  {
    slug: "outwork-fitness-gym",
    name: "OUTWORK FITNESS GYM",
    location: "South Delhi, India",
    category: "Gym Projects",
    cardLabel: "GYM INTERIOR DESIGN PROJECTS",
    hideCardMeta: true,
    area: "",
    year: "",
    clientType: "TWO-FLOOR FITNESS GYM",
    insight:
      "A two-floor fitness zone for different training groups, with a layout rethought around unexpected structural constraints.",
    card: p4,
    hero: p4,
    gallery: [
      { src: p6, alt: "Outwork Fitness Gym two-floor training layout" },
      { src: p3, alt: "Outwork Fitness Gym circulation around structural constraints" },
    ],
    study: {
      brief: "A two-floor gym in South Delhi for different training groups, with structure that did not match the first plan.",
      user: "Separate training groups needing clear floors without mixing circulation.",
      challenge: "Unexpected structural constraints forced the original layout to be rethought.",
      decisions:
        "The plan was redrawn around the existing structure so each floor could serve a different training group without fighting the shell.",
      outcome: "Two floors work as one gym, with a layout that fits the structure rather than ignoring it.",
      learning: "Structure is part of the brief. The layout has to start from what is already there.",
    },
    testimonial: {
      quote: "The constraints became the plan.",
      author: "Placeholder Client",
      role: "Owner, Outwork Fitness Gym",
    },
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export const projectFaqs = [
  {
    q: "Do you only work on gyms?",
    a: "Gyms and fitness spaces are the specialism — strength gyms, studios, recovery spaces and the front-of-house around them. That focus is the point: it is where 15+ projects of accumulated equipment, circulation and durability knowledge sits.",
  },
  {
    q: "Do you work outside Indore?",
    a: "Yes. Projects run across Madhya Pradesh and Maharashtra, with site visits planned around the drawing and execution stages.",
  },
  {
    q: "Can you work with equipment we have already bought?",
    a: "Often, yes. We start by measuring what you own against the floor you have, and tell you plainly where the two do not fit before anything is drawn.",
  },
  {
    q: "At what stage should we bring you in?",
    a: "Before the lease is signed if possible. A shell survey and a zoning study at that point is the cheapest design decision you will make.",
  },
  {
    q: "Do you support execution on site?",
    a: "Yes — 2D working drawings and drawing support through build, plus a post-opening review that feeds the next project.",
  },
];
