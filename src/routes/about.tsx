import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Instagram, MoveDownRight } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { AwardsMarquee } from "@/components/site/AwardsMarquee";
import { AboutJourney } from "@/components/site/AboutJourney";
import { awards, press, storyArc } from "@/data/company";
import founderImg from "@/assets/founder.jpg";
import aboutHero from "@/assets/case-study.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import materials from "@/assets/why-materials.jpg";
import floorplan from "@/assets/floorplan.jpg";
import gymLayout from "@/assets/gym-layout.jpg";
import heroGym from "@/assets/hero-gym.jpg";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import p4 from "@/assets/project-4.jpg";
import p5 from "@/assets/project-5.jpg";
import p6 from "@/assets/project-6.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Sagrika & Design Diaries | Gym Interior Specialist" },
      {
        name: "description",
        content:
          "Meet Sagrika and discover the journey, philosophy and recognition behind Design Diaries, a specialist gym interior studio in Indore.",
      },
      { property: "og:title", content: "About Design Diaries" },
      {
        property: "og:description",
        content: "FUNCTION FIRST. AESTHETICS WITH PURPOSE. — the studio and the founder behind it.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  const journey = storyArc.map((item, index) => ({
    ...item,
    image: [founderImg, gallery1, p2, aboutHero, p1][index] ?? founderImg,
  }));
  const social = [
    { image: p1, label: "Strength floor study" },
    { image: p2, label: "Wellness studio details" },
    { image: p4, label: "Movement and light" },
    { image: gallery1, label: "Material decisions" },
  ];

  return (
    <>
      <section className="relative min-h-[82svh] overflow-hidden bg-foreground pt-24 text-background md:pt-28">
        <img src={heroGym} alt="A completed Design Diaries gym interior" width={1800} height={1200} className="absolute inset-0 h-full w-full scale-105 object-cover opacity-45 motion-safe:animate-[about-drift_18s_ease-in-out_infinite_alternate]" />
        <span className="absolute inset-0 bg-gradient-to-r from-foreground via-foreground/70 to-foreground/25" />
        <span className="absolute inset-0 bg-gradient-to-t from-foreground via-transparent to-foreground/45" />
        <div className="relative mx-auto grid min-h-[calc(82svh-6rem)] max-w-[110rem] items-end gap-10 px-5 py-12 md:px-10 md:py-16 lg:grid-cols-[0.92fr_0.72fr_0.55fr]">
          <Reveal className="self-center lg:pb-10">
            <p className="label-caps text-primary">Design Diaries by Sagrika</p>
            <h1 className="display-statement mt-6 max-w-3xl">More Than Interiors</h1>
            <p className="mt-7 max-w-lg text-base leading-relaxed text-background/70 md:text-lg">
              I think good design has to be more than just good-looking. It has to know the people,
              purpose and possibilities of each space.
            </p>
            <Link to="/start-a-project" className="label-caps group mt-8 inline-flex items-center gap-3 bg-primary px-6 py-4 text-primary-foreground transition-colors hover:bg-background hover:text-foreground">
              Start a project <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>

          <Reveal delay={120} className="group relative mx-auto w-full max-w-md overflow-hidden border border-background/20 lg:self-end">
            <img src={founderImg} alt="Sagrika founder of Design Diaries" width={1000} height={1250} className="aspect-[4/5] w-full object-cover object-top transition-transform duration-[1400ms] group-hover:scale-[1.035]" />
            <span className="absolute inset-0 bg-gradient-to-t from-foreground/85 via-transparent to-transparent" />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5">
              <div><p className="label-caps text-primary">Founder</p><p className="mt-2 font-serif text-2xl">Sagrika</p></div>
              <MoveDownRight className="h-7 w-7 text-primary transition-transform duration-500 group-hover:translate-x-1 group-hover:translate-y-1" />
            </div>
          </Reveal>

          <Reveal delay={240} className="hidden self-center border-l border-background/20 pl-6 lg:block">
            <p className="font-serif text-2xl leading-snug">
              Spaces need to do more for the people who use them
            </p>
            <p className="label-caps mt-6 text-primary">The studio belief</p>
            <div className="mt-10 grid grid-cols-2 gap-px bg-background/15">
              <div className="bg-foreground/80 p-4"><p className="font-display text-2xl text-primary">15+</p><p className="label-caps mt-2 text-background/45">Gym projects</p></div>
              <div className="bg-foreground/80 p-4"><p className="font-display text-2xl text-primary">8</p><p className="label-caps mt-2 text-background/45">Cities</p></div>
            </div>
          </Reveal>
        </div>
      </section>

      <AboutJourney items={journey} />

      <section className="overflow-hidden bg-foreground text-background">
        <div className="mx-auto max-w-[110rem] px-5 py-18 md:px-10 md:py-28">
          <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
            <Reveal className="relative z-10 lg:pr-8">
              <p className="label-caps text-primary">Meet the founder</p>
              <h2 className="display-statement mt-5">A specialist by <span className="accent-italic">practice</span></h2>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-background/75">
                My expertise as a gym interior designer came from years of designing, observing and learning from
                real spaces. Every project has taught me to look beyond aesthetics to understand movement,
                equipment, people and how a gym has to work everyday.
              </p>
              <blockquote className="mt-10 border-l-2 border-primary pl-6 font-serif text-2xl leading-snug text-background/90">
                The best-looking gym still fails if its busiest hour doesn’t work.
              </blockquote>
              <Link to="/work" className="label-caps group mt-9 inline-flex items-center gap-3 text-primary">See the work <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></Link>
            </Reveal>
            <div className="grid grid-cols-[0.8fr_1.2fr] items-end gap-3 md:gap-5">
              <Reveal className="group relative mb-10 overflow-hidden">
                <img src={floorplan} alt="Gym floor plan developed by Design Diaries" loading="lazy" width={900} height={1100} className="aspect-[3/4] w-full object-cover opacity-70 transition-all duration-[1000ms] group-hover:scale-[1.04] group-hover:opacity-95" />
                <span className="absolute inset-0 border border-background/20" />
                <span className="label-caps absolute bottom-4 left-4 bg-foreground/80 px-3 py-2 text-background">Plan before palette</span>
              </Reveal>
              <Reveal delay={120} className="group relative overflow-hidden">
                <img src={aboutHero} alt="Sagrika reviewing a completed fitness interior" loading="lazy" width={1200} height={1500} className="aspect-[4/5] w-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.04]" />
                <span className="absolute inset-0 bg-gradient-to-t from-foreground/65 via-transparent to-transparent" />
                <span className="label-caps absolute bottom-5 left-5 text-background">On site with the work</span>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-foreground text-background">
        <div className="mx-auto max-w-[110rem] px-5 py-18 md:px-10 md:py-28">
          <Reveal className="mb-10 flex flex-wrap items-end justify-between gap-6">
            <h2 className="display-statement">Studio <span className="accent-italic">philosophy</span></h2>
            <p className="max-w-sm text-background/60">FUNCTION FIRST. AESTHETICS WITH PURPOSE.</p>
          </Reveal>
          <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr_1fr]">
            {[
              {
                image: materials,
                title: "BUILT FOR REAL USE",
                text:
                  "The materials are chosen to withstand daily training, regular maintenance and years of use.",
              },
              {
                image: gymLayout,
                title: "DRAWN FOR MOVEMENT",
                text:
                  "Every layout begins with the movement, training and interaction of people with the space.",
              },
              {
                image: p6,
                title: "DESIGNED FOR BUSINESS",
                text: "We consider the design, member flow, operations and revenue together.",
              },
            ].map((item, index) => (
              <Reveal key={item.title} delay={index * 90} className="group relative min-h-[25rem] overflow-hidden border border-background/15 lg:even:translate-y-10">
                <img src={item.image} alt={item.title} loading="lazy" width={1200} height={900} className="absolute inset-0 h-full w-full object-cover opacity-65 transition-all duration-[1000ms] group-hover:scale-[1.05] group-hover:opacity-40" />
                <span className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/15 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <span className="font-display text-xs text-primary">0{index + 1}</span>
                  <h3 className="mt-3 text-lg">{item.title}</h3>
                  <p className="mt-3 max-w-xs text-sm text-background/65">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="recognition" className="scroll-mt-24 bg-foreground text-background">
        <div className="mx-auto max-w-[110rem] px-5 pb-20 md:px-10 md:pb-28">
          <Reveal className="grid gap-8 border-t border-background/15 py-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="label-caps text-primary">Awards and recognition</p>
              <h2 className="display-lg mt-5">Recognition that follows <span className="accent-italic">the work</span></h2>
            </div>
            <div className="grid gap-px bg-background/15 sm:grid-cols-2">
              {[...awards, ...press].map((item, index) => {
                const title = "title" in item ? item.title : "";
                const source = "source" in item ? item.source : item.outlet;
                return <div key={`${title}-${index}`} className="group relative overflow-hidden bg-foreground p-5 transition-colors hover:bg-background/[0.06]"><span className="absolute inset-y-0 left-0 w-0.5 origin-bottom scale-y-0 bg-primary transition-transform duration-500 group-hover:scale-y-100" /><span className="font-display text-xs text-primary">{String(index + 1).padStart(2, "0")}</span><h3 className="mt-4 text-sm">{title}</h3><p className="mt-2 text-sm text-background/50">{source} {item.year}</p></div>;
              })}
            </div>
          </Reveal>
          <AwardsMarquee />
        </div>
      </section>

      <section className="bg-foreground text-background">
        <div className="mx-auto max-w-[110rem] px-5 pb-20 md:px-10 md:pb-28">
          <Reveal className="flex flex-wrap items-end justify-between gap-5 border-t border-background/15 pt-12">
            <h2 className="display-lg">All over the <span className="accent-italic">social media</span></h2>
            <a href="https://instagram.com" aria-label="Follow Design Diaries on Instagram" className="label-caps group inline-flex items-center gap-3 text-primary">Follow the studio <Instagram className="h-4 w-4" /><ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></a>
          </Reveal>
          <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-12">
            {social.map((item, index) => (
              <Reveal key={item.label} delay={index * 80} className={`group relative overflow-hidden md:col-span-3 ${index === 0 || index === 3 ? "md:col-span-4" : "md:col-span-2"}`}>
                <img src={item.image} alt={item.label} loading="lazy" width={900} height={1125} className="aspect-[4/5] h-full min-h-56 w-full object-cover opacity-80 transition-all duration-[900ms] group-hover:scale-[1.05] group-hover:opacity-55" />
                <span className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent" />
                <span className="label-caps absolute bottom-4 left-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">{item.label}</span>
              </Reveal>
            ))}
          </div>
          <div className="mt-14 grid grid-cols-3 border-y border-background/15 py-8 text-center">
            {[{ n: "15+", t: "Gym projects" }, { n: "8", t: "Cities" }, { n: "100%", t: "Design first" }].map((stat) => <Reveal key={stat.t}><p className="font-display text-2xl text-primary md:text-4xl">{stat.n}</p><p className="label-caps mt-2 text-background/45">{stat.t}</p></Reveal>)}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-foreground text-background">
        <img src={p3} alt="A Design Diaries gym interior" loading="lazy" width={1800} height={1100} className="absolute inset-0 h-full w-full object-cover opacity-45" />
        <span className="absolute inset-0 bg-gradient-to-r from-foreground via-foreground/85 to-foreground/35" />
        <div className="relative mx-auto grid min-h-[28rem] max-w-[110rem] items-end gap-8 px-5 py-16 md:px-10 md:py-24 lg:grid-cols-[1fr_auto]">
          <Reveal>
            <p className="label-caps text-primary">Start a project</p>
            <h2 className="display-statement mt-5 max-w-3xl">Bring Sagrika into the room <span className="accent-italic">early</span></h2>
            <p className="mt-6 max-w-xl text-background/70">
              Tell us your floor area, location and what you want to build. The sooner I understand the
              space, the better I can mould its gym interior design.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <Link to="/start-a-project" className="label-caps group inline-flex items-center gap-4 bg-primary px-7 py-5 text-primary-foreground transition-colors hover:bg-background hover:text-foreground">Tell us about the space <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
