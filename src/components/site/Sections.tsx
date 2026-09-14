import { Link } from "@tanstack/react-router";
import { Instagram } from "lucide-react";
import { Reveal } from "./Reveal";
import { ProjectCard } from "./ProjectCard";
import { projects } from "@/data/projects";
import gallery1 from "@/assets/gallery-1.jpg";
import caseImg from "@/assets/case-study.jpg";
import p5 from "@/assets/project-5.jpg";
import p6 from "@/assets/project-6.jpg";

export function ProjectsStrip({
  label = "Selected Work",
  title = "The floors behind the thinking.",
  slugs,
  limit = 3,
}: {
  label?: string;
  title?: string;
  slugs?: string[];
  limit?: number;
}) {
  const shown = (slugs ? projects.filter((p) => slugs.includes(p.slug)) : projects).slice(0, limit);
  return (
    <section className="mx-auto max-w-[110rem] px-5 py-20 md:px-10 md:py-28">
      <Reveal className="flex flex-col items-center text-center">
        <p className="label-caps text-primary">{label}</p>
        <h2 className="display-statement mt-5">{title}</h2>
        <Link to="/work" className="label-caps link-underline mt-7 hover:text-primary">
          See more work
        </Link>
      </Reveal>
      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((p, i) => (
          <Reveal key={p.slug} delay={i * 90}>
            <ProjectCard project={p} number={i + 1} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

const defaultReels = [
  { img: gallery1, caption: "Zoning a 6,200 sq ft floor in 40 seconds" },
  { img: p5, caption: "Why we test the section, not just the plan" },
  { img: p6, caption: "Turf lane placement, explained on site" },
  { img: caseImg, caption: "Material call: rubber vs. vinyl at year five" },
];

export function ReelsSection({
  label = "On Instagram",
  title = "Floors in motion.",
}: {
  label?: string;
  title?: string;
}) {
  return (
    <section className="bg-secondary">
      <div className="mx-auto max-w-[110rem] px-5 py-20 md:px-10 md:py-28">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="label-caps text-primary">{label}</p>
            <h2 className="display-lg mt-5">{title}</h2>
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

        <div className="mt-14 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {defaultReels.map((r, i) => (
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
  );
}

export function FaqSection({
  items,
  title = "Questions we're asked first.",
  id,
}: {
  items: { q: string; a: string }[];
  title?: string;
  id?: string;
}) {
  return (
    <section id={id} className="mx-auto max-w-[110rem] scroll-mt-24 px-5 py-20 md:px-10 md:py-28">
      <Reveal>
        <p className="label-caps text-primary">FAQ</p>
        <h2 className="display-lg mt-5">{title}</h2>
      </Reveal>
      <div className="mt-12 max-w-4xl">
        {items.map((f, i) => (
          <Reveal key={f.q} delay={i * 70}>
            <details className="group border-t border-border py-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-display text-xl uppercase transition-colors duration-300 hover:text-primary">
                {f.q}
                <span className="text-primary transition-transform duration-300 group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-4 max-w-2xl text-muted-foreground">{f.a}</p>
            </details>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function PageHero({
  label,
  title,
  intro,
  image,
  imageAlt,
}: {
  label: string;
  title: string;
  intro: string;
  image: string;
  imageAlt: string;
}) {
  return (
    <section className="relative flex min-h-[62svh] items-end overflow-hidden bg-foreground">
      <img
        src={image}
        alt={imageAlt}
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover opacity-60"
      />
      <div className="relative mx-auto w-full max-w-[110rem] px-5 pt-32 pb-14 text-background md:px-10 md:pb-20">
        <Reveal>
          <p className="label-caps text-primary">{label}</p>
          <h1 className="display-lg mt-5 max-w-4xl">{title}</h1>
          <p className="mt-6 max-w-xl text-background/80">{intro}</p>
        </Reveal>
      </div>
    </section>
  );
}
