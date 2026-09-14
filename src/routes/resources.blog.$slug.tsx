import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowUpRight, Clock } from "lucide-react";
import { Reveal, useInView } from "@/components/site/Reveal";
import { CtaBanner } from "@/components/site/CtaBanner";
import { ReelsSection } from "@/components/site/Sections";
import { Statement } from "@/components/site/Statement";
import { CinematicHero, DarkBand, Seam, VisualBand } from "@/components/site/PageKit";
import { getPost, posts, type BlogPost } from "@/data/resources";
import { getProject } from "@/data/projects";
import gallery1 from "@/assets/gallery-1.jpg";
import floorplan from "@/assets/floorplan.jpg";
import caseImg from "@/assets/case-study.jpg";
import materials from "@/assets/why-materials.jpg";
import layout from "@/assets/gym-layout.jpg";

export const Route = createFileRoute("/resources/blog/$slug")({
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Article not found | Design Diaries" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const p = loaderData.post;
    const title = `${p.title} | Design Diaries`;
    return {
      meta: [
        { title },
        { name: "description", content: p.excerpt },
        { property: "og:title", content: title },
        { property: "og:description", content: p.excerpt },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: BlogDetail,
});

/** Thin orange bar showing how far through the article the reader is. */
function ReadingProgress() {
  const [pct, setPct] = useState(0);
  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const h = document.documentElement.scrollHeight - window.innerHeight;
        setPct(h > 0 ? Math.min(100, Math.max(0, (window.scrollY / h) * 100)) : 0);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);
  return (
    <div aria-hidden className="fixed inset-x-0 top-0 z-50 h-0.5 bg-transparent">
      <div
        className="h-full bg-primary transition-[width] duration-150 ease-out"
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}

const sectionArt = [materials, floorplan, layout, gallery1, caseImg];

function BlogDetail() {
  const { post } = Route.useLoaderData() as { post: BlogPost };
  const project = getProject(post.projectSlug);
  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 3);
  const { ref: bodyRef, visible: bodyVisible } = useInView<HTMLDivElement>(0.05);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll<HTMLElement>("[data-chapter]"));
    if (!nodes.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(Number((e.target as HTMLElement).dataset.chapter));
        });
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );
    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, [post.slug]);

  return (
    <>
      <ReadingProgress />

      <CinematicHero
        key={post.slug}
        label={post.category}
        title={post.title}
        image={post.image}
        imageAlt={`Cover image — ${post.title}`}
        meta={[
          { k: "Read", v: post.readTime },
          { k: "Category", v: post.category },
          { k: "Studio", v: "Design Diaries" },
          { k: "Focus", v: "Gym interiors" },
        ]}
      >
        <div className="mt-6 flex flex-wrap items-center gap-4">
          <Link
            to="/resources"
            className="label-caps link-underline text-background/70 hover:text-primary"
          >
            All resources
          </Link>
          <span className="label-caps inline-flex items-center gap-1.5 text-background/60">
            <Clock className="h-3.5 w-3.5" /> {post.readTime}
          </span>
        </div>
      </CinematicHero>

      {/* Article body — dark, centred, with a live chapter rail */}
      <DarkBand>
        <div
          ref={bodyRef}
          className="grid gap-14 lg:grid-cols-[13rem_minmax(0,1fr)] lg:gap-20"
        >
          {/* Chapter rail */}
          <aside className="hidden lg:block">
            <div className="sticky top-28">
              <p className="label-caps text-background/45">In this piece</p>
              <ul className="mt-6 space-y-4">
                {post.body.map((s, i) => (
                  <li key={s.heading} className="flex items-start gap-3">
                    <span
                      aria-hidden
                      className={`mt-2 block h-px shrink-0 transition-all duration-500 ${
                        active === i ? "w-8 bg-primary" : "w-4 bg-background/25"
                      }`}
                    />
                    <span
                      className={`text-[0.8rem] leading-snug uppercase transition-colors duration-500 ${
                        active === i ? "text-primary" : "text-background/45"
                      }`}
                    >
                      {s.heading}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          <article className="mx-auto max-w-3xl text-center">
            <Reveal>
              <p className="font-display text-xl leading-snug uppercase md:text-2xl">
                {post.excerpt}
              </p>
              <span aria-hidden className="mx-auto mt-8 block h-px w-16 bg-primary" />
            </Reveal>

            <div className="mt-10">
              {post.body.map((s, i) => (
                <div
                  key={s.heading}
                  data-chapter={i}
                  className="border-t border-background/15 py-12"
                >
                  <div
                    style={{ transitionDelay: `${i * 60}ms` }}
                    className={`transition-all duration-700 ease-out ${
                      bodyVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                    }`}
                  >
                    <p className="label-caps text-primary">0{i + 1}</p>
                    <h2 className="mt-4 font-display text-xl uppercase leading-tight">
                      {s.heading}
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-background/70">
                      {s.text}
                    </p>
                  </div>

                  {/* One supporting visual every other chapter */}
                  {i % 2 === 1 && (
                    <figure className="group mx-auto mt-10 max-w-2xl overflow-hidden border border-background/15">
                      <img
                        src={sectionArt[i % sectionArt.length]}
                        alt={`Supporting visual — ${s.heading}`}
                        loading="lazy"
                        width={1200}
                        height={750}
                        className="aspect-[16/10] w-full object-cover transition-transform duration-[1100ms] ease-out group-hover:scale-[1.04]"
                      />
                    </figure>
                  )}
                </div>
              ))}
            </div>

            {/* Pull quote */}
            <Reveal className="border-t border-background/15 pt-12">
              <p className="font-display text-[clamp(1.4rem,2.6vw,2.1rem)] leading-[1.15] uppercase">
                A floor either <span className="accent-italic">works at peak hour</span> or it does
                not. Everything else is decoration.
              </p>
              <p className="label-caps mt-6 text-background/50">Sagrika Saraf — Design Diaries</p>
            </Reveal>
          </article>
        </div>

        <div className="mt-16">
          <VisualBand
            columns={3}
            items={[
              { src: gallery1, alt: "Detail from a designed gym floor", caption: "Detail on site" },
              { src: floorplan, alt: "Zoning study drawing", caption: "The zoning behind it" },
              { src: caseImg, alt: "Finished strength floor", caption: "How it runs at peak hour" },
            ]}
          />
        </div>
      </DarkBand>

      <Statement words={["Read", "Plan", "Build better"]} tone="ink" />

      <Seam to="cream" />

      {/* Linked project */}
      {project && (
        <section className="blend-cream-bottom">
          <div className="mx-auto max-w-[110rem] px-5 py-20 md:px-10 md:py-28">
            <Reveal className="grid items-center gap-10 md:grid-cols-2">
              <div className="group overflow-hidden">
                <img
                  src={project.card}
                  alt={`${project.name}, ${project.location}`}
                  loading="lazy"
                  width={1200}
                  height={900}
                  className="aspect-[5/4] w-full object-cover transition-transform duration-[1100ms] ease-out group-hover:scale-[1.04]"
                />
              </div>
              <div>
                <p className="label-caps text-primary">Seen on a project</p>
                <h2 className="display-lg mt-4">
                  {project.name} {project.location}
                </h2>
                <p className="mt-4 max-w-xl text-muted-foreground">{project.insight}</p>
                <Link
                  to="/work/$slug"
                  params={{ slug: project.slug }}
                  className="label-caps link-underline mt-7 inline-block hover:text-primary"
                >
                  Read the case study
                </Link>
              </div>
            </Reveal>
          </div>
        </section>
      )}

      <CtaBanner
        label="Start a Project"
        title="Apply this to your own floor"
        body="Send the area, the city and what you plan to run in it. You'll get a considered reply, not a brochure."
        image={caseImg}
      />

      {/* Related articles */}
      <section className="mx-auto max-w-[110rem] px-5 py-20 md:px-10 md:py-28">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <h2 className="display-lg">Related reading</h2>
          <Link to="/resources" className="label-caps link-underline hover:text-primary">
            All resources
          </Link>
        </Reveal>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((p, i) => (
            <Reveal key={p.slug} delay={i * 80}>
              <Link to="/resources/blog/$slug" params={{ slug: p.slug }} className="group block">
                <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                  <img
                    src={p.image}
                    alt={`Cover image — ${p.title}`}
                    loading="lazy"
                    width={1400}
                    height={1000}
                    className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.06]"
                  />
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-0 bg-foreground/0 transition-colors duration-500 group-hover:bg-foreground/35"
                  />
                  <span
                    aria-hidden
                    className="absolute top-3 right-3 flex h-9 w-9 items-center justify-center rounded-full border border-background/50 text-background opacity-0 transition-all duration-300 group-hover:opacity-100"
                  >
                    <ArrowUpRight size={16} />
                  </span>
                  <span
                    aria-hidden
                    className="pointer-events-none absolute bottom-0 left-0 h-0.5 w-0 bg-primary transition-all duration-700 group-hover:w-full"
                  />
                </div>
                <div className="mt-4 flex items-center gap-3">
                  <span className="label-caps text-primary">{p.category}</span>
                  <span className="label-caps text-muted-foreground">{p.readTime}</span>
                </div>
                <h3 className="mt-3 font-display text-lg uppercase leading-tight transition-colors duration-300 group-hover:text-primary">
                  {p.title}
                </h3>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <ReelsSection />
    </>
  );
}
