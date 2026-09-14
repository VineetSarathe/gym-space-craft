import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowRight, Play } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { TrustedBy } from "@/components/site/TrustedBy";
import { CountUp } from "@/components/site/CountUp";
import { EnquiryForm } from "@/components/site/EnquiryForm";
import { EnquiryPopup } from "@/components/site/EnquiryPopup";
import { WhyGymZones } from "@/components/site/WhyGymZones";
import { ProjectShowcase } from "@/components/site/ProjectShowcase";
import { Recognition } from "@/components/site/Recognition";
import { Statement } from "@/components/site/Statement";
import { SagrikaMethod } from "@/components/site/SagrikaMethod";
import { AboutSagrika } from "@/components/site/AboutSagrika";
import { CaseStudySpotlight } from "@/components/site/CaseStudySpotlight";

import heroImg from "@/assets/hero-gym.jpg";
import heroVideo from "@/assets/hero-gym.mp4.asset.json";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import p4 from "@/assets/project-4.jpg";
import p5 from "@/assets/project-5.jpg";
import p6 from "@/assets/project-6.jpg";
import floorplan from "@/assets/floorplan.jpg";
import caseImg from "@/assets/case-study.jpg";
import founderImg from "@/assets/founder.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import materials from "@/assets/why-materials.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Gym Interior Design Studio in Indore | Design Diaries" },
      {
        name: "description",
        content:
          "Design Diaries is a specialist gym and fitness interior design studio in Indore. 15+ gyms designed around equipment logic, circulation, durability and business impact.",
      },
      { property: "og:title", content: "Gyms, Designed to Perform | Design Diaries" },
      {
        property: "og:description",
        content:
          "Specialised interior design for gyms and fitness spaces — built around function, performance and the people who use them.",
      },
    ],
  }),
  component: Home,
});

const projects = [
  {
    slug: "iron-standard",
    images: [p1, caseImg, floorplan],
    name: "Iron Standard",
    location: "Indore, MP",
    category: "Gym Interior",
    area: "6,200 sq ft",
    year: "2024",
    insight: "Zoned circulation cut equipment wait-time in half at peak hours.",
  },
  {
    slug: "sanctum-wellness",
    images: [p2, gallery1, materials],
    name: "Sanctum Wellness",
    location: "Pune, MH",
    category: "Wellness Studio",
    area: "2,400 sq ft",
    year: "2024",
    insight: "Acoustic separation let yoga and HIIT run in the same shell.",
  },
  {
    slug: "forge-24",
    images: [p3, p5, gallery1],
    name: "Forge 24",
    location: "Bhopal, MP",
    category: "Gym Interior",
    area: "4,800 sq ft",
    year: "2023",
    insight: "Turf lane placed off the main aisle removed the daily collision point.",
  },
  {
    slug: "rep-house-cycle",
    images: [p4, p6, materials],
    name: "Rep House Cycle",
    location: "Indore, MP",
    category: "Wellness Studio",
    area: "1,600 sq ft",
    year: "2023",
    insight: "Tiered deck added nine bikes without touching the footprint.",
  },
];

const steps = [
  { k: "Understand", d: "Your members, your model, your operating hours." },
  { k: "Research", d: "Equipment specs, footfall data, comparable floors." },
  { k: "Plan", d: "Zoning and circulation before aesthetics." },
  { k: "Design", d: "Concept, lighting, 3D views, 2D working drawings." },
  { k: "Build", d: "Drawing support through execution on site." },
  { k: "Learn", d: "Post-opening review that feeds the next project." },
];

const recognition = [
  {
    number: "01",
    image: gallery1,
    title: "Architects Wow Awards",
    description: "Emerging Interior Designer — Shortlist",
    category: "Award",
    year: "2024",
    link: "/about#recognition",
  },
  {
    number: "02",
    image: materials,
    title: "Rising Star, Central India",
    description: "Regional Design Awards",
    category: "Industry Recognition",
    year: "2024",
    link: "/about#recognition",
  },
  {
    number: "03",
    image: caseImg,
    title: "Published at IDAC Expo",
    description: "Fitness Business India",
    category: "Publication",
    year: "2023",
    link: "/about#recognition",
  },
];

const testimonials = [
  {
    q: "She asked about our peak-hour headcount before she asked about finishes. That's when I knew the layout would actually hold up.",
    a: "Owner",
    c: "Iron Standard, Indore",
    tag: "Commercial Gym",
    img: p1,
  },
  {
    q: "Circulation and equipment placement were solved before a single material was chosen. Nothing felt like an afterthought.",
    a: "Founder",
    c: "Forge 24, Bhopal",
    tag: "Strength Club",
    img: p3,
  },
  {
    q: "Functional, calm and built for long-term growth. Rare to find a designer who understands both design and the business of fitness.",
    a: "Founder",
    c: "Sanctum Wellness, Pune",
    tag: "Wellness Studio",
    img: p2,
  },
  {
    q: "They don't just design a gym, they design a community experience. The impact is visible in member engagement.",
    a: "Founder",
    c: "Athlete Lab, Bengaluru",
    tag: "Athlete Performance",
    img: p4,
  },
];

const featured = testimonials[0]!;

function Home() {
  const [stage, setStage] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const a = setTimeout(() => setStage(1), 120);
    const b = setTimeout(() => setStage(2), 800);
    const c = setTimeout(() => setStage(3), 1400);
    return () => {
      clearTimeout(a);
      clearTimeout(b);
      clearTimeout(c);
    };
  }, []);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <EnquiryPopup />

      {/* 01 — Performance-led hero with gym video */}
      <section className="relative flex min-h-[80svh] items-center overflow-hidden bg-foreground pt-24">
        <div
          className="absolute inset-0"
          style={{ transform: `translateY(${Math.min(scrollY * 0.18, 160)}px)` }}
        >
          <video
            src={heroVideo.url}
            poster={heroImg}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-hidden="true"
            className="h-full w-full scale-105 object-cover transition-[opacity,transform] duration-[1800ms] ease-out"
            style={{ opacity: stage >= 2 ? 0.72 : 0 }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/75 via-foreground/30 to-foreground" />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/65 via-transparent to-foreground/35" />

        <div className="relative mx-auto w-full max-w-[110rem] px-5 py-24 text-background md:px-10 md:py-32">
          <div
            className="mx-auto max-w-5xl text-center transition-all duration-1000 ease-out"
            style={{
              opacity: stage >= 1 ? 1 : 0,
              transform: stage >= 1 ? "none" : "translateY(28px)",
            }}
          >
            <p className="label-caps inline-flex items-center border border-background/25 bg-foreground/45 px-4 py-2 text-background/75 backdrop-blur-md">
              <span className="mr-3 h-1.5 w-1.5 rounded-full bg-primary" />
              Gym &amp; Fitness Interior Specialists
            </p>
            <h1 className="display-xl mt-6 md:text-[3.6rem] lg:text-[4.4rem]">
              Gyms designed to perform
            </h1>
          </div>

          <div
            className="mx-auto text-center transition-all delay-200 duration-1000 ease-out"
            style={{
              opacity: stage >= 3 ? 1 : 0,
              transform: stage >= 3 ? "none" : "translateY(20px)",
            }}
          >
            <p className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-background/75 md:text-lg">
              Specialised interior design for gyms and fitness spaces — built around function,
              performance and the people who use them.
            </p>
            <div className="mx-auto mt-10 grid max-w-2xl gap-3 sm:grid-cols-2">
              <Link
                to="/start-a-project"
                className="label-caps group relative overflow-hidden bg-primary px-8 py-5 text-primary-foreground transition-all duration-300 active:scale-[0.98]"
              >
                <span className="absolute inset-0 origin-left scale-x-0 bg-background transition-transform duration-500 ease-out group-hover:scale-x-100" />
                <span className="relative transition-colors duration-300 group-hover:text-foreground">
                  Start Your Gym Project
                </span>
              </Link>
              <Link
                to="/work"
                className="label-caps group inline-flex items-center justify-center gap-3 border border-background/45 bg-foreground/30 px-8 py-5 backdrop-blur-md transition-all duration-300 hover:border-primary hover:bg-foreground/70 hover:text-primary"
              >
                <Play size={13} className="translate-x-[1px]" />
                View Our Work
              </Link>
            </div>
            <div className="label-caps mt-10 flex flex-col items-center gap-3 border-t border-background/15 pt-6 text-background/55 md:hidden">
              <span>15+ gym projects</span>
              <span className="h-px w-8 bg-primary/60" aria-hidden="true" />
              <span>Function before decoration</span>
              <span className="h-px w-8 bg-primary/60" aria-hidden="true" />
              <span>Indore · Designing everywhere</span>
            </div>
          </div>
        </div>


        <div className="absolute inset-x-0 bottom-0 hidden border-t border-background/15 text-background/60 md:block">
          <div className="mx-auto grid max-w-[110rem] grid-cols-3 divide-x divide-background/15 px-10">
            <p className="label-caps py-5">15+ gym projects</p>
            <p className="label-caps py-5 text-center">Function before decoration</p>
            <p className="label-caps py-5 text-right">Indore · Designing everywhere</p>
          </div>
        </div>
      </section>

      {/* 02 — Trusted by */}
      <div className="seam-to-cream" />
      <TrustedBy />

      {/* 03 — Selected Work */}
      <section className="blend-cream-bottom">
        <div className="mx-auto max-w-[110rem] px-5 py-16 md:px-10 md:py-24">
          <Reveal className="flex flex-col items-center text-center">
            <p className="label-caps flex items-center gap-4 text-muted-foreground">
              <span className="hidden h-px w-16 bg-border sm:block" />
              Our gym projects
              <span className="hidden h-px w-16 bg-border sm:block" />
            </p>
            <h2 className="display-statement mt-4">
              Spaces Designed <span className="accent-italic">to perform</span>
            </h2>
            <p className="label-caps mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-muted-foreground">
              <span>People</span>
              <span className="h-1 w-1 rounded-full bg-primary" aria-hidden="true" />
              <span>Spaces</span>
              <span className="h-1 w-1 rounded-full bg-primary" aria-hidden="true" />
              <span>Movement</span>
              <span className="h-1 w-1 rounded-full bg-primary" aria-hidden="true" />
              <span>Impact</span>
              <span className="hidden h-4 w-px bg-border sm:block" aria-hidden="true" />
              <span className="text-foreground/70">From concept to completion</span>
            </p>
          </Reveal>

          <ProjectShowcase projects={projects.slice(0, 3)} />

          <Reveal className="mt-12 flex flex-wrap items-center justify-between gap-6 border-t border-border pt-6">
            <p className="label-caps text-muted-foreground">
              <span className="text-foreground">01</span> — 03 &nbsp;·&nbsp; Placeholder imagery and
              project names
            </p>
            <Link
              to="/work"
              className="label-caps group inline-flex items-center gap-3 transition-colors duration-300 hover:text-primary"
            >
              View all projects
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-border transition-all duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
                <ArrowRight size={15} />
              </span>
            </Link>
          </Reveal>
        </div>
      </section>

      <Statement
        words={[
          "Function First",
          "Aesthetics With Purpose",
          "Built For Peak Hour",
          "Designed To Perform",
        ]}
        tone="ink"
      />

      {/* 04 — Why Gym Interiors */}
      <WhyGymZones />

      {/* 05 — The Sagrika Method */}
      <SagrikaMethod steps={steps} />

      {/* 06 — About Sagrika */}
      <AboutSagrika
        portrait={founderImg}
        background={caseImg}
        introduction="Sagrika Saraf leads Design Diaries. Trained as an interior designer, she treats a room as a place people inhabit, not simply as a piece of art. A single gym project became many — and each one added to a growing understanding of how equipment, movement and daily use shape a space long before aesthetics do."
        story="She considered architecture, chose interior design, and started posting work on Instagram in 2018 as an early portfolio. Residential turned commercial. A referral brought the first gym project — and word of mouth turned that one project into a specialisation."
      />

      <div className="seam-to-cream" />

      {/* 07 — Case Study Spotlight */}
      <CaseStudySpotlight
        meta="Indore, MP  |  6,200 sq ft  |  2024"
        titleTop="Iron"
        titleBottom="Standard"
        kicker={"More than a gym,\na higher standard."}
        summary="A performance-driven space designed for people who take their fitness — and their lifestyle — seriously."
        href="/work"
        images={[
          { src: heroImg, alt: "Film of the finished gym floor in use", video: heroVideo.url },
          { src: caseImg, alt: "Mezzanine cardio deck above the main strength floor" },
          { src: p1, alt: "Strength training zone with racks along the wall" },
          { src: gallery1, alt: "Functional training area with open floor space" },
          { src: materials, alt: "Material and finish detail from the fit-out" },
        ]}
        metrics={[
          { v: "-48%", l: "Peak hour equipment wait" },
          { v: "3", l: "Distinct training zones" },
          { v: "6,200", l: "Sq ft replanned" },
          { v: "100%", l: "Natural light in core area" },
        ]}
        note="A space designed to elevate performance, community and everyday well-being."
        journeyBackground={p3}
        journey={[
          {
            n: "01",
            t: "The Challenge",
            d: "The brief was to reimagine an existing space into a high-performance gym with better flow and functionality.",
          },
          {
            n: "02",
            t: "The Thinking",
            d: "We analysed member flow, equipment relationships and zoned the space to suit different training styles.",
          },
          {
            n: "03",
            t: "The Design",
            d: "A clean, modern, functional design with natural light, warm materials and a motivating atmosphere.",
          },
          {
            n: "04",
            t: "The Outcome",
            d: "A future-ready gym that drives higher engagement, better member experience and a stronger community.",
          },
        ]}
      />



      {/* 08 — Recognition */}
      <Recognition items={recognition} />

      <div className="seam-to-dark" />

      {/* 09 — What clients say */}
      <section className="blend-ink text-background">
        <div className="mx-auto max-w-[110rem] px-5 pb-16 md:px-10 md:pb-24">
          <Reveal>
            <div className="label-caps flex flex-wrap items-center justify-between gap-4">
              <p className="flex items-center gap-4 text-primary">
                Client testimonials
                <span className="hidden h-px w-24 bg-primary/40 sm:block" />
              </p>
              <p className="hidden text-background/40 md:block">
                Spaces&nbsp;&nbsp;/&nbsp;&nbsp;People&nbsp;&nbsp;/&nbsp;&nbsp;Movement&nbsp;&nbsp;/&nbsp;&nbsp;Impact
              </p>
            </div>
            <div className="mt-5 grid items-end gap-8 lg:grid-cols-[minmax(0,1fr)_22rem]">
              <h2 className="display-statement leading-[0.94]">
                The right people
                <br />
                <span className="accent-italic">Recognise the work</span>
                <span className="heading-rule" aria-hidden="true" />
              </h2>
              <p className="text-sm leading-relaxed text-background/55 lg:justify-self-end lg:text-right">
                Real conversations with the people who live, work and train in our spaces.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-px bg-background/12 lg:grid-cols-[1.15fr_1fr]">
            {/* Featured quote — quote overlaid on image */}
            <Reveal className="h-full">
              <figure className="group relative flex h-full min-h-[26rem] flex-col justify-end overflow-hidden bg-foreground md:min-h-[32rem]">
                <img
                  src={featured.img}
                  alt="Placeholder: gym floor referenced in the featured testimonial"
                  loading="lazy"
                  width={1400}
                  height={900}
                  className="absolute inset-0 h-full w-full object-cover opacity-80 transition-transform duration-[900ms] ease-out group-hover:scale-[1.03] motion-reduce:transform-none"
                />
                <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-foreground via-foreground/50 to-foreground/10" />
                <span className="label-caps absolute top-5 left-5 bg-primary px-3 py-2 text-primary-foreground">
                  {featured.tag}
                </span>
                <span className="label-caps absolute top-5 right-5 text-background/60">01 / 04</span>
                <div className="relative z-10 p-7 md:p-10">
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -top-10 left-6 font-display text-[9rem] leading-none text-primary md:text-[11rem]"
                  >
                    &ldquo;
                  </span>
                  <blockquote className="relative z-10 mt-10 max-w-[34ch] font-display text-[1.5rem] uppercase leading-[1.12] tracking-tight text-background md:text-[2rem]">
                    {featured.q}
                  </blockquote>
                  <figcaption className="relative z-10 mt-8 flex items-center justify-between gap-4 border-t border-background/20 pt-6">
                    <span>
                      <span className="label-caps block text-primary">{featured.a}</span>
                      <span className="mt-1 block text-sm text-background/60">
                        {featured.c}
                      </span>
                    </span>
                  </figcaption>
                </div>
                <span className="absolute inset-x-0 bottom-0 z-10 h-px w-0 bg-primary transition-[width] duration-700 group-hover:w-full" />
              </figure>
            </Reveal>

            {/* Supporting quotes — photo left, quote right */}
            <div className="grid gap-px bg-background/12">
              {testimonials.slice(1).map((t, i) => (
                <Reveal key={t.c} delay={(i + 1) * 130} className="h-full">
                  <figure className="group relative grid h-full grid-cols-[6.5rem_minmax(0,1fr)] gap-5 bg-foreground p-5 transition-colors duration-500 hover:bg-background/[0.05] sm:grid-cols-[8rem_minmax(0,1fr)] sm:gap-6 sm:p-6 md:grid-cols-[9.5rem_minmax(0,1fr)] md:p-7">
                    <div className="relative overflow-hidden">
                      <img
                        src={t.img}
                        alt="Placeholder: project referenced in the testimonial"
                        loading="lazy"
                        width={300}
                        height={380}
                        className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:scale-[1.04] group-hover:grayscale-0 motion-reduce:transform-none"
                      />
                    </div>
                    <div className="flex min-w-0 flex-col">
                      <span className="label-caps flex items-center gap-3 text-primary">
                        <span className="h-px w-6 bg-primary/50" />
                        {t.tag}
                      </span>
                      <blockquote className="mt-4 text-sm leading-relaxed text-background/80 md:text-base">
                        {t.q}
                      </blockquote>
                      <figcaption className="mt-auto flex items-end justify-between gap-4 border-t border-background/12 pt-4">
                        <span>
                          <span className="label-caps block text-background">{t.a}</span>
                          <span className="mt-1 block text-xs text-background/50">{t.c}</span>
                        </span>
                        <span className="label-caps shrink-0 text-background/30">
                          0{i + 2} / 04
                        </span>
                      </figcaption>
                    </div>
                    <span className="absolute inset-x-0 bottom-0 h-px w-0 bg-primary transition-[width] duration-500 group-hover:w-full" />
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Proof rail */}
          <div className="mt-14 grid gap-10 sm:grid-cols-3">
            {[
              { n: 15, s: "+", l: "Gym & fitness projects" },
              { n: 6, s: " cities", l: "Across India" },
              { n: 100, s: "%", l: "Function-first briefs" },
            ].map((s, i) => (
              <Reveal
                key={s.l}
                delay={i * 140}
                className="group flex flex-col items-center px-4 py-6 text-center transition-transform duration-500 hover:-translate-y-1 motion-reduce:transform-none"
              >
                <p className="font-display text-5xl leading-none tracking-tight transition-all duration-500 group-hover:scale-105 group-hover:text-primary md:text-6xl motion-reduce:transform-none">
                  <CountUp to={s.n} suffix={s.s} />
                </p>
                <span className="mt-4 block h-px w-8 bg-primary/0 transition-all duration-500 group-hover:w-16 group-hover:bg-primary" />
                <p className="label-caps mt-4 text-background/45 transition-colors duration-500 group-hover:text-background/80">
                  {s.l}
                </p>
              </Reveal>
            ))}
          </div>

        </div>



        {/* 10 — Enquiry CTA */}
        <div id="enquire" className="relative overflow-hidden border-t border-background/10">
          <img
            src={gallery1}
            alt=""
            aria-hidden="true"
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover opacity-45"
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-r from-foreground/95 via-foreground/70 to-foreground/40"
          />
          <div className="relative mx-auto grid max-w-[110rem] gap-14 px-5 py-16 md:px-10 md:py-24 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <Reveal>
              <p className="label-caps text-primary">Start a project</p>
              <h2 className="display-xl mt-5">
                Let's plan
                <br />
                <span className="text-primary">your gym</span>
              </h2>
              <p className="mt-7 max-w-md leading-relaxed text-background/65">
                Tell us about the space, the equipment, and how people will train. A short form,
                then a real conversation — Sagrika reviews every enquiry personally.
              </p>
            </Reveal>

            <Reveal delay={140} className="bg-background/95 p-6 text-foreground backdrop-blur-sm md:p-10">
              <EnquiryForm />
            </Reveal>
          </div>
        </div>

      </section>
    </>
  );
}
