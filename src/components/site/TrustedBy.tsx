import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";
import ironworks from "@/assets/logo-ironworks.png";
import athleteLab from "@/assets/logo-athlete-lab.png";
import pulseHouse from "@/assets/logo-pulse-house.png";
import forgeClub from "@/assets/logo-forge-club.png";
import coreNine from "@/assets/logo-core-nine.png";
import apexFitness from "@/assets/logo-apex-fitness.png";

const brands = [
  { name: "Ironworks", logo: ironworks },
  { name: "Athlete Lab", logo: athleteLab },
  { name: "Pulse House", logo: pulseHouse },
  { name: "Forge Club", logo: forgeClub },
  { name: "Core Nine", logo: coreNine },
  { name: "Apex Fitness", logo: apexFitness },
];

/** Performance trust field: statement, proof link and pausable partner rail. */
export function TrustedBy({ compact = false }: { compact?: boolean }) {
  const row = [...brands, ...brands];
  return (
    <section className="border-b border-border bg-background">
      <div className={cn("mx-auto max-w-[110rem] px-5 md:px-10", compact ? "py-12 md:py-16" : "py-16 md:py-24")}>
        <Reveal>
          <div className="max-w-4xl">
            <p className="label-caps text-primary">Studio network</p>
            {compact ? (
              <h2 className="display-lg mt-4">Brands seen across our floors</h2>
            ) : (
              <h2 className="display-statement mt-6">
                Designing Spaces
                <br />
                <span className="text-primary">for Stronger Brands</span>
              </h2>
            )}
          </div>
        </Reveal>
        <div className={cn("group relative overflow-hidden py-8", compact ? "mt-7" : "mt-14")}>
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />
          <div className="marquee-track items-center gap-10 group-hover:[animation-play-state:paused] sm:gap-14 md:gap-16">
            {row.map((b, i) => (
              <img
                key={`${b.name}-${i}`}
                src={b.logo}
                alt={`${b.name} logo`}
                loading="lazy"
                width={260}
                height={88}
                className="h-10 w-auto shrink-0 opacity-50 grayscale transition-all duration-500 hover:scale-105 hover:opacity-100 hover:grayscale-0 sm:h-14 md:h-20"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
