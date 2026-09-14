import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Instagram } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { ProjectCard } from "@/components/site/ProjectCard";
import { CtaBanner, Testimonial } from "@/components/site/CtaBanner";
import { Seam } from "@/components/site/PageKit";
import { categories, projects } from "@/data/projects";
import workHero from "@/assets/work-hero.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import caseImg from "@/assets/case-study.jpg";
import p5 from "@/assets/project-5.jpg";
import p6 from "@/assets/project-6.jpg";

export const Route = createFileRoute("/work/")({
  head: () => ({
    meta: [
      { title: "Gym & Wellness Studio Projects | Design Diaries" },
      {
        name: "description",
        content:
          "15+ gym and fitness spaces, designed around how they're actually used. Browse gym projects and wellness studios by Design Diaries, Indore.",
      },
      { property: "og:title", content: "Our Work | Design Diaries" },
      {
        property: "og:description",
        content: "15+ gym and fitness spaces, designed around how they're actually used.",
      },
    ],
  }),
  component: WorkListing,
});

const tabs = ["All", ...categories] as const;

const teasers = [
  {
    kind: "Blog",
    title: "Rack spacing: the 2.4m rule and when to break it",
    meta: "6 min read",
    img: gallery1,
  },
  {
    kind: "Download",
    title: "Gym floor planning checklist — pre-lease edition",
    meta: "PDF · 12 pages",
    img: caseImg,
  },
  {
    kind: "Blog",
    title: "What a 7am rush tells you about your layout",
    meta: "4 min read",
    img: p6,
  },
];

const reels = [
  { img: gallery1, caption: "Zoning a 6,200 sq ft floor in 40 seconds" },
  { img: p5, caption: "Why we test the section, not just the plan" },
  { img: p6, caption: "Turf lane placement, explained on site" },
  { img: caseImg, caption: "Material call: rubber vs. vinyl at year five" },
];

function WorkListing() {
  const [active, setActive] = useState<(typeof tabs)[number]>("All");
  const shown = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <>
      {/* Hero banner */}
      <section className="relative flex min-h-[62svh] items-end overflow-hidden bg-foreground">
        <img
          src={workHero}
          alt="Placeholder: warm-toned gym interior with oak slat ceiling and terracotta accent wall"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover opacity-60"
        />
        <div className="relative mx-auto w-full max-w-[110rem] px-5 pt-32 pb-14 text-background md:px-10 md:pb-20">
          <Reveal>
            <p className="label-caps text-primary">Our Work</p>
            <h1 className="display-lg mt-5 max-w-4xl">
              15+ gym and fitness spaces, designed around how they're actually used.
            </h1>
            <p className="mt-6 max-w-xl text-background/80">
              Every project below is shown with the thinking, not just the photograph — what the
              floor had to solve, and what changed because of the design.
            </p>
          </Reveal>
        </div>
      </section>

      <Seam to="cream" />

      {/* Filters + grid */}
      <section className="mx-auto max-w-[110rem] px-5 py-20 md:px-10 md:py-28">
        <Reveal className="flex flex-wrap items-center gap-3 border-b border-border pb-6">
          {tabs.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setActive(t)}
              aria-pressed={active === t}
              className={`label-caps px-5 py-3 transition-all duration-300 active:scale-[0.98] ${
                active === t
                  ? "bg-foreground text-background"
                  : "bg-secondary text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
            >
              {t}
            </button>
          ))}
          <span className="label-caps ml-auto text-muted-foreground">
            {shown.length} {shown.length === 1 ? "project" : "projects"}
          </span>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((p, i) => (
            <Reveal key={p.slug} delay={i * 90}>
              <ProjectCard project={p} number={i + 1} />
            </Reveal>
          ))}
        </div>
        <p className="mt-8 text-xs text-muted-foreground">
          Placeholder imagery and project names — real project photography to follow.
        </p>
      </section>

      <Testimonial
        quote="She planned the floor around our timetable and our trainers. Two years in, we haven't moved a single rack."
        author="Placeholder Client"
        role="Founder, Iron Standard"
      />

      <CtaBanner />

      {/* Blogs / downloads teaser */}
      <section className="mx-auto max-w-[110rem] px-5 py-20 md:px-10 md:py-28">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="label-caps text-primary">Resources</p>
            <h2 className="display-lg mt-5">Read the thinking</h2>
          </div>
          <Link to="/resources" className="label-caps link-underline hover:text-primary">
            All resources
          </Link>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {teasers.map((t, i) => (
            <Reveal key={t.title} delay={i * 90}>
              <Link to="/resources" className="group block">
                <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                  <img
                    src={t.img}
                    alt={`Placeholder image — ${t.title}`}
                    loading="lazy"
                    width={1400}
                    height={1000}
                    className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.06]"
                  />
                </div>
                <p className="label-caps mt-4 text-primary">{t.kind}</p>
                <h3 className="mt-2 font-display text-2xl uppercase transition-colors duration-300 group-hover:text-primary">
                  {t.title}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">{t.meta}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Reels */}
      <section className="bg-secondary">
        <div className="mx-auto max-w-[110rem] px-5 py-20 md:px-10 md:py-28">
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="label-caps text-primary">On Instagram</p>
              <h2 className="display-lg mt-5">Floors in motion</h2>
            </div>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer noopener"
              className="label-caps link-underline inline-flex items-center gap-2 hover:text-primary"
            >
              <Instagram className="h-4 w-4" /> Follow the studio
            </a>
          </Reveal>

          <div className="mt-14 grid gap-4 grid-cols-2 lg:grid-cols-4">
            {reels.map((r, i) => (
              <Reveal key={r.caption} delay={i * 80}>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="group block"
                >
                  <div className="relative aspect-[9/16] overflow-hidden bg-muted">
                    <img
                      src={r.img}
                      alt={`Placeholder reel — ${r.caption}`}
                      loading="lazy"
                      width={1200}
                      height={1500}
                      className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.06]"
                    />
                    <span className="absolute inset-0 flex items-end bg-gradient-to-t from-foreground/85 via-transparent to-transparent p-4 text-sm text-background opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                      {r.caption}
                    </span>
                    <Instagram className="absolute top-4 right-4 h-5 w-5 text-background/80" />
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
