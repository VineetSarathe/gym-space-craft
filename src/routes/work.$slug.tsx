import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { ProjectCard } from "@/components/site/ProjectCard";
import { CtaBanner, Testimonial } from "@/components/site/CtaBanner";
import { ProjectOutcomeRail, ProjectPlanFeature, ProjectVisualStory } from "@/components/site/ProjectStory";
import {
  CinematicHero,
  DarkBand,
  Seam,
} from "@/components/site/PageKit";
import { getProject, projectFaqs, projects, type Project } from "@/data/projects";

export const Route = createFileRoute("/work/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Project not found | Design Diaries" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const p = loaderData.project;
    const title = `${p.name}, ${p.location} — ${p.category} | Design Diaries`;
    const description = `${p.area} ${p.category.toLowerCase()} in ${p.location}, ${p.year}. ${p.insight}`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: ProjectDetail,
});

function DiscussCta({ className = "", invert = false }: { className?: string; invert?: boolean }) {
  return (
    <Link
      to="/start-a-project"
      className={`label-caps inline-block bg-primary px-7 py-4 text-primary-foreground transition-all duration-300 active:scale-[0.98] ${
        invert ? "hover:bg-background hover:text-foreground" : "hover:bg-foreground"
      } ${className}`}
    >
      Discuss a Similar Space
    </Link>
  );
}

function ProjectDetail() {
  const { project } = Route.useLoaderData() as { project: Project };
  const related = projects.filter((p) => p.slug !== project.slug).slice(0, 3);

  return (
    <>
      <CinematicHero
        label={project.category}
        title={`${project.name} — ${project.location}`.replace(" — ", " · ")}
        intro={project.insight}
        image={project.hero}
        imageAlt={`${project.name}, ${project.location} — main training floor`}
        meta={[
          { k: "", v: project.clientType },
          { k: "Area", v: project.area },
          { k: "Year", v: project.year },
          { k: "Location", v: project.location },
        ].filter((item) => item.v)}
      >
        <div className="mt-8 flex flex-wrap items-center gap-6">
          <DiscussCta invert />
          <Link
            to="/work"
            className="label-caps link-underline text-background/70 hover:text-primary"
          >
            All work
          </Link>
        </div>
      </CinematicHero>

      <ProjectOutcomeRail project={project} />
      <ProjectVisualStory project={project} />
      <ProjectPlanFeature project={project} />

      <Testimonial {...project.testimonial} />

      <Seam to="dark" />

      {/* Related — dark */}
      <DarkBand>
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <h2 className="display-lg">More projects</h2>
          <Link to="/work" className="label-caps link-underline hover:text-primary">
            See all work
          </Link>
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((p, i) => (
            <Reveal key={p.slug} delay={i * 90}>
              <ProjectCard project={p} number={i + 1} />
            </Reveal>
          ))}
        </div>
      </DarkBand>

      <CtaBanner
        label="Discuss a Similar Space"
        title="Your floor with this thinking applied"
        body="Send the area, the city and what you plan to run in it. We'll tell you what the space can realistically hold."
        cta="Discuss a Similar Space"
      />

      {/* FAQ */}
      <section className="mx-auto max-w-[110rem] px-5 py-20 md:px-10 md:py-28">
        <Reveal>
          <p className="label-caps text-primary">FAQ</p>
          <h2 className="display-lg mt-4">Questions we're asked first</h2>
        </Reveal>
        <div className="mt-10 max-w-4xl">
          {projectFaqs.map((f, i) => (
            <Reveal key={f.q} delay={i * 70}>
              <details className="group border-t border-border py-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-display text-lg uppercase transition-colors duration-300 hover:text-primary">
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
    </>
  );
}
