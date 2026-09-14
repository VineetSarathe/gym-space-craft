import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p4 from "@/assets/project-4.jpg";
import p5 from "@/assets/project-5.jpg";
import p6 from "@/assets/project-6.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import caseImg from "@/assets/case-study.jpg";
import floorplan from "@/assets/floorplan.jpg";
import whyMaterials from "@/assets/why-materials.jpg";

/** Add a category here and the Resources filter tabs pick it up. */
export const blogCategories = [
  "Planning",
  "Equipment & Layout",
  "Materials & Maintenance",
  "Wellness Trends",
] as const;
export type BlogCategory = (typeof blogCategories)[number];

export type BlogPost = {
  slug: string;
  title: string;
  category: BlogCategory;
  readTime: string;
  excerpt: string;
  image: string;
  /** Slug of the project this article links into. */
  projectSlug: string;
  body: { heading: string; text: string }[];
};

export const posts: BlogPost[] = [
  {
    slug: "gym-planning-mistakes-first-time-owners-make",
    title: "The gym planning mistakes first-time owners make",
    category: "Planning",
    readTime: "7 min read",
    excerpt:
      "Almost every first floor plan we're sent has the same four problems — and all of them are cheaper to fix before the lease is signed.",
    image: p1,
    projectSlug: "iron-standard",
    body: [
      {
        heading: "Signing the lease before the shell is measured",
        text: "Column grid, slab height and the position of the single lift lobby decide more about your layout than any equipment list. A 5,000 sq ft unit with columns at 4.2m centres holds noticeably fewer racks than the same area at 6m. Measure the shell, test one zoning study against it, then sign.",
      },
      {
        heading: "Buying equipment before drawing circulation",
        text: "An equipment list is a shopping list, not a plan. When circulation is drawn first, the list becomes something you can place. When it is drawn last, you end up with a sled lane crossing the only path from the entry to the changing rooms.",
      },
      {
        heading: "Treating reception as a lobby",
        text: "Front-of-house is a revenue zone. Members pass it twice a day; if retail sits behind the desk instead of on the exit path, it does not sell. Rotating a desk off the entry axis costs nothing at drawing stage.",
      },
      {
        heading: "Choosing finishes against a photograph",
        text: "Every surface in a gym is a maintenance decision with a five-year cost. Pick finishes against the cleaning routine and the load they take, not against a reference image.",
      },
      {
        heading: "What to do instead",
        text: "Run the sequence in order: shell survey, zoning study, equipment placement, finishes, drawings. Each stage constrains the next, which is exactly the point.",
      },
    ],
  },
  {
    slug: "how-equipment-placement-affects-user-experience",
    title: "How equipment placement quietly decides your member experience",
    category: "Equipment & Layout",
    readTime: "6 min read",
    excerpt:
      "Wait times, drop-offs and the reason a whole corner of your floor goes unused are usually placement problems, not equipment problems.",
    image: p6,
    projectSlug: "forge-24",
    body: [
      {
        heading: "Peak hour is the only hour that matters",
        text: "A floor that works at 2pm tells you nothing. Plan against the 6–9am and 7–10pm compression, where two lifters need to load the same bar without stepping into a walkway.",
      },
      {
        heading: "Spacing is a number, not a feeling",
        text: "We fix rack centres at 2.4m before a single finish is selected. It looks generous on a drawing and reads as normal on the floor — which is the correct outcome.",
      },
      {
        heading: "Dead corners are placement failures",
        text: "The corner nobody uses is usually the one with no through-route, poor sightlines or a machine facing a wall. Give every zone a reason to be walked past.",
      },
      {
        heading: "Trainers need sightlines too",
        text: "PT bays placed where a trainer can hold a view across both zones let you sell personal training on the same floor as open gym at full rate.",
      },
    ],
  },
  {
    slug: "gym-mirrors-and-lighting-need-different-planning",
    title: "Why gym mirrors and lighting need to be planned separately",
    category: "Planning",
    readTime: "5 min read",
    excerpt:
      "Mirrors multiply whatever your lighting is doing. Plan them together and you get glare in exactly the spot people check their form.",
    image: p4,
    projectSlug: "rep-house-cycle",
    body: [
      {
        heading: "Mirrors are a functional tool",
        text: "They exist so a lifter can check form and a trainer can watch from behind. Placement follows those two jobs, not wall area.",
      },
      {
        heading: "Light the task, not the ceiling",
        text: "A uniform grid of downlights over a free-weight zone throws hard shadow across a bar path. Lighting should be planned per zone: strength, conditioning, studio, circulation and front-of-house all want different levels.",
      },
      {
        heading: "The glare test",
        text: "Stand where the member stands and look at the mirror. If a fitting is in the reflection at eye height, it moves. This is a five-minute check at drawing stage and an expensive one after handover.",
      },
      {
        heading: "Night levels",
        text: "In 24-hour spaces, training zones stay at full level and circulation drops. Members read that as safety, not as ambience.",
      },
    ],
  },
  {
    slug: "balancing-aesthetics-with-maintenance",
    title: "Balancing how a gym looks with what it costs to keep",
    category: "Materials & Maintenance",
    readTime: "6 min read",
    excerpt:
      "Every finish in a fitness space is a five-year cost. Here's how we price that in before it reaches a mood board.",
    image: whyMaterials,
    projectSlug: "still-house-recovery",
    body: [
      {
        heading: "Sweat, chalk, water, impact",
        text: "Those four things destroy a gym interior. A finish that survives them all is rare — so we zone materials by which of the four they actually face.",
      },
      {
        heading: "Rubber vs. vinyl at year five",
        text: "Vinyl photographs better on day one. Rubber survives dropped plates and looks the same after five years of it. Choose by zone, not by the whole floor.",
      },
      {
        heading: "Design the cleaning routine",
        text: "Grade wet-zone floors to concealed channels, keep skirting continuous, and avoid junctions the cleaning team cannot reach. A recovery studio we planned took its turnaround from an hour to twenty minutes on drainage alone.",
      },
      {
        heading: "Where to spend the visual budget",
        text: "Entry, front-of-house and one hero wall. Those three carry the brand. Everything else earns its place by durability.",
      },
    ],
  },
  {
    slug: "what-designing-multiple-gyms-taught-us",
    title: "What designing 15+ gyms taught the studio",
    category: "Planning",
    readTime: "8 min read",
    excerpt:
      "The lessons that only turn up after you've watched several floors run for two years — and the ones we now apply on day one.",
    image: caseImg,
    projectSlug: "north-block-strength",
    body: [
      {
        heading: "Draw the spine before the racks",
        text: "When circulation is decided first, the equipment list stops being a constraint and becomes a plan. This is the single change that improved our floors most.",
      },
      {
        heading: "Section work finds revenue in small rooms",
        text: "In studios under 2,000 sq ft, the plan is rarely where the capacity is. Tiering a cycling room found nine extra bikes inside the same lease.",
      },
      {
        heading: "Acoustics is a business decision",
        text: "Whether two formats can run at once decides how many classes a space sells in a day. That gets planned with the timetable, not after it.",
      },
      {
        heading: "Come back after opening",
        text: "A post-opening review is how a studio learns. Every rule above came from watching a floor we drew being used by people we did not brief.",
      },
    ],
  },
  {
    slug: "wrong-assumptions-about-gym-design",
    title: "Six assumptions about gym design that cost owners money",
    category: "Wellness Trends",
    readTime: "5 min read",
    excerpt:
      "More mirrors, more black paint, more equipment. The received wisdom about fitness interiors is mostly inherited, rarely tested.",
    image: p2,
    projectSlug: "sanctum-wellness",
    body: [
      {
        heading: "\u201cMore equipment means more members\u201d",
        text: "Past a point, more equipment means less usable floor and longer queues at the same three stations everyone actually wants.",
      },
      {
        heading: "\u201cDark interiors read as serious\u201d",
        text: "They read as dark. Warm neutrals with controlled contrast hold up better in photographs and in a 6am class.",
      },
      {
        heading: "\u201cWellness and strength cannot share a shell\u201d",
        text: "They can, with a planned acoustic buffer and staggered changeovers. We have run yoga and HIIT concurrently in 2,400 sq ft.",
      },
      {
        heading: "\u201cDesign is the last stage\u201d",
        text: "It is the stage that decides what the lease can hold. Bring it forward and it pays for itself before the fit-out starts.",
      },
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}

export type Download = {
  slug: string;
  title: string;
  format: string;
  useTime: string;
  summary: string;
  covers: string[];
  image: string;
  body: string[];
};

export const downloads: Download[] = [
  {
    slug: "first-time-gym-owners-planning-checklist",
    title: "A First-Time Gym Owner's Planning Checklist",
    format: "PDF checklist · 12 pages",
    useTime: "20 min to work through",
    summary:
      "The pre-lease and pre-fit-out checks we run on every new gym enquiry, in the order they should happen.",
    covers: [
      "Shell survey items to record before signing a lease",
      "Column grid and slab-height questions for the landlord",
      "Zoning sequence: spine, strength, conditioning, front-of-house",
      "Service and drainage checks that change the layout",
    ],
    image: floorplan,
    body: [
      "Most first-time owners come to us after the lease is signed and the equipment is ordered. By then, two of the biggest layout decisions have already been made for them.",
      "This checklist is the version of that conversation you can run yourself. Work through it with the landlord's drawings in front of you and you will know whether the unit holds the gym you have in mind.",
    ],
  },
  {
    slug: "equipment-layout-and-circulation-guide",
    title: "Gym Equipment Layout & Circulation Guide",
    format: "PDF guide · 18 pages",
    useTime: "30 min read",
    summary:
      "Clearances, rack centres and circulation widths we work to, with the reasoning behind each number.",
    covers: [
      "Rack, bench and machine clearances that survive peak hour",
      "Circulation spine widths and where they must not cross",
      "Placing turf lanes, sleds and functional zones",
      "Sightlines for trainers and for unstaffed hours",
    ],
    image: gallery1,
    body: [
      "Equipment spacing is where a floor is won or lost. Too tight and peak hour becomes a queue; too loose and you have paid rent on empty carpet.",
      "These are the working numbers we draw to, with the peak-hour logic that produced them.",
    ],
  },
  {
    slug: "budget-planning-worksheet-new-gym",
    title: "Budget Planning Worksheet for a New Gym Space",
    format: "Worksheet · editable PDF",
    useTime: "45 min to complete",
    summary:
      "A line-by-line worksheet separating design, fit-out, equipment and contingency so nothing lands as a surprise mid-build.",
    covers: [
      "Design and drawings vs. contractor scope, split clearly",
      "Fit-out line items owners routinely forget",
      "Equipment phasing across year one and year two",
      "Contingency ranges we see hold up in practice",
    ],
    image: p5,
    body: [
      "The most common budget failure is not overspending — it is discovering mid-build that a line item was never anyone's scope.",
      "This worksheet forces that split early, including the line between our drawings and your contractor's work.",
    ],
  },
  {
    slug: "mistakes-to-avoid-designing-a-fitness-space",
    title: "Mistakes to Avoid When Designing a Fitness Space",
    format: "PDF guide · 10 pages",
    useTime: "15 min read",
    summary:
      "The recurring errors we are asked to undo, each with the drawing-stage fix that would have prevented it.",
    covers: [
      "Layouts drawn around equipment instead of movement",
      "Mirror and lighting clashes that create glare",
      "Finishes specified without a maintenance cost",
      "Front-of-house planned as a lobby, not a revenue zone",
    ],
    image: p6,
    body: [
      "Roughly a third of our work is correction: floors that were drawn once, opened, and did not hold up under real use.",
      "Each mistake in this guide is paired with what it costs to fix later versus what it costs to avoid at drawing stage.",
    ],
  },
];

export function getDownload(slug: string) {
  return downloads.find((d) => d.slug === slug);
}

export const resourceFaqs = [
  {
    q: "Are the downloads actually free?",
    a: "Yes. We ask for a name and email so we know who is planning what — the guides themselves cost nothing and there is no follow-up sequence you have to unsubscribe from.",
  },
  {
    q: "Can I use these guides with my own designer or contractor?",
    a: "Please do. They are written as working documents, not as a sales pitch. If you reach the limit of what they cover, that is a good moment to talk to us.",
  },
  {
    q: "How often do you publish?",
    a: "When a project teaches us something worth writing down — typically every few weeks rather than on a content calendar.",
  },
  {
    q: "Can you write about a specific problem I'm facing?",
    a: "Send it through the enquiry form. Recurring questions become articles.",
  },
];
