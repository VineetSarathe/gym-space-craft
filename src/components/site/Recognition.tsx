import {
  useEffect,
  useRef,
  useState,
  type KeyboardEvent,
  type PointerEvent,
} from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

export type RecognitionItem = {
  number: string;
  category: string;
  title: string;
  year: string;
  image: string;
  images?: string[];
  description?: string;
  slug?: string;
  link?: string;
};

type RecognitionCardProps = {
  item: RecognitionItem;
  active: boolean;
  onActivate: () => void;
  register: (node: HTMLElement | null) => void;
};

export function RecognitionCard({ item, active, onActivate, register }: RecognitionCardProps) {
  const gallery = Array.from(new Set([item.image, ...(item.images ?? [])]));
  const [imageIndex, setImageIndex] = useState(0);
  const swipeStart = useRef<number | null>(null);

  const changeImage = (direction: number) => {
    if (gallery.length < 2) return;
    setImageIndex((current) => (current + direction + gallery.length) % gallery.length);
  };

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== "mouse" && gallery.length > 1) swipeStart.current = event.clientX;
  };

  const handlePointerUp = (event: PointerEvent<HTMLDivElement>) => {
    if (swipeStart.current === null || event.pointerType === "mouse") return;
    const distance = event.clientX - swipeStart.current;
    swipeStart.current = null;
    if (Math.abs(distance) > 42) changeImage(distance > 0 ? -1 : 1);
  };

  const cardContent = (
    <>
      <div
        className="relative aspect-[4/3] touch-pan-y overflow-hidden bg-muted md:aspect-[5/4]"
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onPointerCancel={() => {
          swipeStart.current = null;
        }}
      >
        {gallery.map((src, index) => (
          <img
            key={`${src}-${index}`}
            src={src}
            alt={`${item.title}, ${item.category.toLowerCase()}, ${item.year}${index ? `, view ${index + 1}` : ""}`}
            loading="lazy"
            width={960}
            height={768}
            className={cn(
              "absolute inset-0 h-full w-full object-cover transition-[opacity,transform] duration-500 ease-out motion-reduce:transition-none",
              index === imageIndex ? "opacity-100" : "pointer-events-none opacity-0",
              active && index === imageIndex && "scale-[1.06]",
            )}
          />
        ))}
        <span
          className={cn(
            "pointer-events-none absolute inset-0 transition-colors duration-500 motion-reduce:transition-none",
            active ? "bg-foreground/25" : "bg-foreground/5",
          )}
        />
        <span className="label-caps absolute top-3 left-3 z-20 bg-foreground px-2.5 py-1.5 text-background">
          {item.number}
        </span>
        <span
          className={cn(
            "absolute top-3 right-3 z-20 flex h-10 w-10 items-center justify-center rounded-full border backdrop-blur-sm transition-[background-color,border-color,color] duration-300 motion-reduce:transition-none",
            active
              ? "border-primary bg-primary text-primary-foreground"
              : "border-background/65 bg-foreground/15 text-background",
          )}
        >
          <ArrowUpRight
            className={cn(
              "h-4 w-4 transition-transform duration-300 motion-reduce:transform-none",
              active && "translate-x-1 -translate-y-1",
            )}
          />
        </span>

        {gallery.length > 1 && active && (
          <div className="absolute inset-x-4 bottom-4 z-30 flex items-center justify-between gap-4">
            <Button
              type="button"
              variant="ghost"
              size="icon"
              aria-label={`Previous image of ${item.title}`}
              onClick={(event) => {
                event.preventDefault();
                event.stopPropagation();
                changeImage(-1);
              }}
              className="h-9 w-9 rounded-full border border-background/60 bg-foreground/35 text-background backdrop-blur-sm hover:border-primary hover:bg-primary hover:text-primary-foreground"
            >
              <ArrowLeft />
            </Button>
            <div className="flex items-center gap-1.5" aria-label={`${item.title} image ${imageIndex + 1} of ${gallery.length}`}>
              {gallery.map((_, index) => (
                <Button
                  key={index}
                  type="button"
                  variant="ghost"
                  aria-label={`Show image ${index + 1} of ${item.title}`}
                  aria-pressed={imageIndex === index}
                  onClick={(event) => {
                    event.preventDefault();
                    event.stopPropagation();
                    setImageIndex(index);
                  }}
                  className={cn(
                    "h-8 w-8 rounded-none p-0 shadow-none hover:bg-transparent",
                    "after:h-0.5 after:w-6 after:transition-colors",
                    imageIndex === index ? "after:bg-primary" : "after:bg-background/55",
                  )}
                />
              ))}
            </div>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              aria-label={`Next image of ${item.title}`}
              onClick={(event) => {
                event.preventDefault();
                event.stopPropagation();
                changeImage(1);
              }}
              className="h-9 w-9 rounded-full border border-background/60 bg-foreground/35 text-background backdrop-blur-sm hover:border-primary hover:bg-primary hover:text-primary-foreground"
            >
              <ArrowRight />
            </Button>
          </div>
        )}
      </div>

      <div className="flex min-h-44 flex-1 flex-col px-5 py-5">
        <div className="flex items-start justify-between gap-4">
          <p className={cn("label-caps transition-colors duration-500", active ? "text-primary" : "text-muted-foreground")}>
            {item.category}
          </p>
          <p className={cn("label-caps transition-colors duration-500", active ? "text-background/60" : "text-muted-foreground")}>
            {item.year}
          </p>
        </div>
        <h3 className={cn("display-md mt-3 transition-colors duration-500", active ? "text-background" : "text-foreground")}>
          {item.title}
        </h3>
        <p
          className={cn(
            "mt-3 line-clamp-2 min-h-10 text-sm leading-relaxed transition-[opacity,color,transform] duration-500 motion-reduce:transform-none",
            active ? "translate-y-0 text-background/65 opacity-100" : "translate-y-1 text-muted-foreground opacity-70",
          )}
        >
          {item.description}
        </p>
        <div className={cn("mt-auto flex items-center justify-between border-t pt-4 transition-colors duration-500", active ? "border-background/20" : "border-border")}>
          <span className={cn("label-caps transition-colors duration-500", active ? "text-background/55" : "text-muted-foreground")}>
            View recognition
          </span>
          <ArrowRight className={cn("h-4 w-4 transition-[color,transform] duration-300 motion-reduce:transform-none", active ? "translate-x-1 text-primary" : "text-muted-foreground")} />
        </div>
      </div>
    </>
  );

  return (
    <article
      ref={register}
      onMouseEnter={onActivate}
      onFocusCapture={onActivate}
      data-active={active}
      className={cn(
        "group relative flex h-full snap-center flex-col overflow-hidden border transition-[transform,opacity,background-color,border-color] duration-500 ease-out focus-within:z-10 motion-reduce:transform-none motion-reduce:transition-none",
        "w-[84vw] shrink-0 sm:w-[58vw] md:w-[44vw] lg:w-auto",
        active
          ? "z-10 scale-[1.02] border-foreground bg-foreground opacity-100 lg:scale-[1.03]"
          : "border-border bg-card opacity-80 hover:opacity-100",
      )}
    >
      {cardContent}
      <a
        href={item.link ?? (item.slug ? `/about#${item.slug}` : "/about#recognition")}
        aria-label={`View recognition: ${item.title}`}
        className="absolute inset-0 z-10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-3px] focus-visible:outline-primary"
      />
    </article>
  );
}

export function RecognitionSection({ items }: { items: RecognitionItem[] }) {
  const [active, setActive] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<Array<HTMLElement | null>>([]);

  useEffect(() => {
    if (window.matchMedia("(min-width: 768px)").matches) {
      setActive(Math.min(1, items.length - 1));
    }
  }, [items.length]);

  useEffect(() => {
    if (items.length === 0) setActive(0);
    else if (active > items.length - 1) setActive(items.length - 1);
  }, [active, items.length]);

  const select = (index: number) => {
    if (!items.length) return;
    const next = (index + items.length) % items.length;
    setActive(next);
    if (window.matchMedia("(max-width: 767px)").matches) {
      cardRefs.current[next]?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
    }
  };

  const handleTrackScroll = () => {
    if (!trackRef.current || !window.matchMedia("(max-width: 767px)").matches) return;
    const center = trackRef.current.getBoundingClientRect().left + trackRef.current.clientWidth / 2;
    let nearest = 0;
    let distance = Number.POSITIVE_INFINITY;
    cardRefs.current.forEach((card, index) => {
      if (!card) return;
      const rect = card.getBoundingClientRect();
      const nextDistance = Math.abs(rect.left + rect.width / 2 - center);
      if (nextDistance < distance) {
        distance = nextDistance;
        nearest = index;
      }
    });
    setActive(nearest);
  };

  const handleKeys = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      select(active - 1);
    }
    if (event.key === "ArrowRight") {
      event.preventDefault();
      select(active + 1);
    }
  };

  if (!items.length) return null;

  return (
    <section className="bg-secondary" aria-labelledby="recognition-heading" onKeyDown={handleKeys}>
      <div className="mx-auto max-w-[110rem] px-5 py-16 md:px-10 md:py-24">
        <Reveal className="grid items-end gap-8 lg:grid-cols-[minmax(0,1fr)_22rem]">
          <div>
            <p className="label-caps flex items-center gap-4 text-primary">
              Recognition
              <span className="h-px w-16 bg-primary/40" />
            </p>
            <h2 id="recognition-heading" className="display-statement mt-4 lg:whitespace-nowrap">
              Trusted Recognised
              <br />
              <span className="accent-italic">Making an impact</span>
              <span className="heading-rule" aria-hidden="true" />
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-muted-foreground lg:justify-self-end">
            Awards, press features and industry recognition that follow function-first work.
          </p>
        </Reveal>

        <div
          ref={trackRef}
          onScroll={handleTrackScroll}
          className="-mx-5 mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 py-4 [scrollbar-width:none] md:-mx-10 md:px-10 lg:mx-0 lg:grid lg:grid-cols-3 lg:items-center lg:gap-6 lg:overflow-visible lg:px-0 lg:py-5 [&::-webkit-scrollbar]:hidden"
        >
          {items.map((item, index) => (
            <RecognitionCard
              key={`${item.number}-${item.title}`}
              item={item}
              active={active === index}
              onActivate={() => setActive(index)}
              register={(node) => {
                cardRefs.current[index] = node;
              }}
            />
          ))}
        </div>

        <div className="mt-8 flex items-center justify-between border-t border-border pt-6">
          <p className="label-caps hidden items-center gap-4 text-muted-foreground sm:flex">
            <span className="h-px w-12 bg-primary/45" />
            Spaces that move people
          </p>
          <div className="ml-auto flex items-center gap-3">
            <Button
              type="button"
              variant="outline"
              size="icon"
              aria-label="Previous recognition"
              onClick={() => select(active - 1)}
              className="h-11 w-11 rounded-full border-border bg-transparent hover:border-primary hover:bg-primary hover:text-primary-foreground"
            >
              <ArrowLeft />
            </Button>
            <Button
              type="button"
              variant="outline"
              size="icon"
              aria-label="Next recognition"
              onClick={() => select(active + 1)}
              className="h-11 w-11 rounded-full border-border bg-transparent hover:border-primary hover:bg-primary hover:text-primary-foreground"
            >
              <ArrowRight />
            </Button>
            <span className="label-caps ml-3 min-w-16 text-muted-foreground" aria-live="polite">
              {String(active + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export const Recognition = RecognitionSection;