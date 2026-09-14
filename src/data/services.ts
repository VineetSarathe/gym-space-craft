import { ClipboardList, LayoutGrid, Lightbulb, Ruler, Boxes } from "lucide-react";

export const problems = [
  {
    title: "A layout drawn around equipment, not movement",
    text: "The equipment list arrives first and the floor is arranged to fit it. Peak hour then runs as a queue at three stations while a whole corner goes unused.",
  },
  {
    title: "A lease signed before anyone tested the shell",
    text: "Column grid and slab height decide capacity. Owners discover the unit holds fourteen racks, not twenty, after the rent is committed.",
  },
  {
    title: "A generalist designer learning gyms on your budget",
    text: "Residential instincts produce beautiful photographs and floors that fail under dropped plates, chalk and a 7am rush.",
  },
  {
    title: "Drawings a contractor cannot build from",
    text: "Renders without dimensioned working drawings send the contractor guessing on site, and every guess becomes a variation you pay for.",
  },
];

export const method = [
  {
    title: "Function is decided before finish",
    text: "Circulation, zoning and equipment placement are fixed before a single material is selected. The spine is drawn before the racks.",
  },
  {
    title: "Planned against how the business runs",
    text: "Class timetable, trainer roster, staffed and unstaffed hours, retail path. The floor is designed against the operating day, not a mood board.",
  },
  {
    title: "15+ gyms of accumulated numbers",
    text: "Rack centres, aisle widths, wet-zone drainage, night lighting levels — carried forward from floors we have watched run for years.",
  },
  {
    title: "Drawings your contractor can build from",
    text: "Dimensioned 2D working drawings, coordinated with services, plus drawing support through the build.",
  },
];

export const deliverables = [
  {
    n: "01",
    icon: ClipboardList,
    title: "Concept Presentation",
    text: "The design direction, zoning logic and material intent, presented as one clear argument for how the space should work — not a selection of options to pick from.",
    includes: ["Zoning rationale", "Material direction", "Reference imagery", "Capacity view"],
  },
  {
    n: "02",
    icon: LayoutGrid,
    title: "Space Planning & Layout",
    text: "The core of the work. Circulation spine, equipment placement, zone boundaries, front-of-house and changing-room flows, tested against your peak hour.",
    includes: ["Circulation study", "Equipment placement", "Zone boundaries", "Peak-hour test"],
  },
  {
    n: "03",
    icon: Lightbulb,
    title: "Lighting Design",
    text: "Levels planned per zone — strength, conditioning, studio, circulation, front-of-house — with mirror positions checked against glare before anything is fixed.",
    includes: ["Zone-wise levels", "Fitting layout", "Glare and mirror check", "Night-hours scheme"],
  },
  {
    n: "04",
    icon: Ruler,
    title: "2D Working Drawings",
    text: "Dimensioned drawings for execution: floor plans, setting-out, ceiling and electrical layouts, joinery and finish schedules your contractor builds from.",
    includes: ["Setting-out plans", "Ceiling & electrical", "Joinery details", "Finish schedule"],
  },
  {
    n: "05",
    icon: Boxes,
    title: "3D Views of the Space",
    text: "Views of the agreed layout so you and your team can see the floor before it is built — used to confirm decisions, not to sell a look.",
    includes: ["Key zone views", "Front-of-house view", "Material verification", "Sign-off set"],
  },
];

export const serviceFaqs = [
  {
    q: "Do you build the gym as well?",
    a: "No. Design Diaries is a design consultancy: concept, layout, lighting, 3D views and 2D working drawings. Construction and fit-out are carried out by your own contractor, working from our drawings. We stay available through the build for drawing clarifications and site queries.",
  },
  {
    q: "Why don't you take on execution?",
    a: "Because the drawings stay honest that way. We specify what the floor needs rather than what a build team is set up to supply, and you keep control of contractor pricing.",
  },
  {
    q: "Can you recommend a contractor?",
    a: "We can point you toward vendors and suppliers we have worked alongside, but the contract stays between you and them.",
  },
  {
    q: "Is there only one service level?",
    a: "One offering, done properly. The scope scales with the size and complexity of the space, not into tiers where the useful parts sit behind a premium package.",
  },
  {
    q: "What do you need from us to start?",
    a: "Floor area, city, the landlord's drawings if you have them, your intended formats and timetable, and any equipment already bought or shortlisted.",
  },
  {
    q: "How long does the design stage take?",
    a: "Typically four to eight weeks from survey to issued working drawings, depending on area and how quickly decisions are signed off.",
  },
];

export const partnerFaqs = [
  {
    q: "Are brand partners paid placements?",
    a: "No. Specification follows what the floor needs. These are the suppliers whose products have held up on projects we have delivered.",
  },
  {
    q: "Can we supply our own equipment brand?",
    a: "Yes. We measure what you own or intend to buy against the floor you have, and tell you plainly where the two do not fit.",
  },
  {
    q: "We're a brand — can we work with you?",
    a: "Send an introduction through the enquiry form. We take on a small number of supplier relationships and only where the product has been used on a live project.",
  },
  {
    q: "Can we speak to a past client?",
    a: "Once a project is at a suitable stage, yes — client references are arranged directly.",
  },
];
