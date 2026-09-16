import { ClipboardList, LayoutGrid, Lightbulb, Ruler, Boxes } from "lucide-react";

export const problems = [
  {
    title: "EQUIPMENT BEFORE MOVEMENT",
    text: "When equipment dictates the layout, movement becomes an afterthought. Poor gym space planning can create bottlenecks, wasted space and a gym that becomes difficult to navigate.",
  },
  {
    title: "LEASE BEFORE TESTING THE SPACE",
    text: "A space might look right on paper and still fail as a gym. Testing the floor area early can reveal circulation, zoning, and equipment-planning problems before they become expensive changes.",
  },
  {
    title: "A GENERALIST LEARNING ON YOUR BUDGET",
    text: "Gym Interiors have their own functional requirements. Critical design choices can become costly lessons to the owner without experience in equipment layouts, training zones and user flow.",
  },
  {
    title: "DRAWINGS THAT CANNOT BE BUILT",
    text: "A good design needs clear buildable drawings. Missing documentation results in confusion on site, expensive changes and a final space that is a departure from the design intent.",
  },
];

export const method = [
  {
    title: "FUNCTION COMES BEFORE FINISH",
    text: "The circulation, zoning and placement of equipment are planned before a single material is chosen. The space is designed around how people move, train and use it.",
  },
  {
    title: "DESIGNED AROUND HOW THE BUSINESS RUNS",
    text: "The layout is shaped by class timetables, trainer schedules, staffed and unstaffed hours and retail paths. The floor is designed around the operating day, not just how it looks on a mood board.",
  },
  {
    title: "DRAWINGS YOUR CONTRACTOR CAN BUILD FROM",
    text: "Detailed 2D working drawings coordinated with services provide the contractor clarity on site and help to carry the design intent through the build.",
  },
];

export const deliverables = [
  {
    n: "01",
    icon: ClipboardList,
    title: "CONCEPT PRESENTATION",
    text: "The design direction, zoning logic and material intent, presented as one clear plan for how the space should work.",
    includes: ["Zoning rationale", "Reference imagery", "Material direction", "Capacity view"],
  },
  {
    n: "02",
    icon: LayoutGrid,
    title: "SPACE PLANNING & LAYOUT",
    text: "The core of the work. Equipment placement, circulation, training zones and changing-room flows are planned around how the gym will actually operate, including during peak hours.",
    includes: ["Circulation study", "Equipment placement", "Zone boundaries", "Peak-hour testing"],
  },
  {
    n: "03",
    icon: Lightbulb,
    title: "LIGHTING DESIGNED FOR HOW THE SPACE WORKS",
    text: "We design lighting for different zones and activities to achieve the right balance of function, visibility, and atmosphere.",
    includes: [
      "Zone-wise lighting levels",
      "Fixture layout",
      "Glare and mirror check",
      "Night-hours scheme",
    ],
  },
  {
    n: "04",
    icon: Ruler,
    title: "2D WORKING DRAWINGS",
    text: "Detailed drawings translate the design into clear instructions so your contractor knows exactly how to build your space.",
    includes: [
      "Setting-out plans",
      "Joinery details",
      "Ceiling & electrical layouts",
      "Finish schedules",
    ],
  },
  {
    n: "05",
    icon: Boxes,
    title: "SEE THE SPACE BEFORE IT IS BUILT",
    text: "Detailed drawings translate the design into clear instructions so your contractor knows exactly how to build your space.",
    includes: [
      "Key zone views",
      "Material verification",
      "Front-of-house views",
      "Design sign-off",
    ],
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
