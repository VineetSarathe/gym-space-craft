import { Reveal } from "./Reveal";
import ironworks from "@/assets/logo-ironworks.png";
import athleteLab from "@/assets/logo-athlete-lab.png";
import pulseHouse from "@/assets/logo-pulse-house.png";
import forgeClub from "@/assets/logo-forge-club.png";
import coreNine from "@/assets/logo-core-nine.png";
import apexFitness from "@/assets/logo-apex-fitness.png";

const marks = [
  { name: "Ironworks", logo: ironworks },
  { name: "Athlete Lab", logo: athleteLab },
  { name: "Pulse House", logo: pulseHouse },
  { name: "Forge Club", logo: forgeClub },
  { name: "Core Nine", logo: coreNine },
  { name: "Apex Fitness", logo: apexFitness },
];

export function AwardsMarquee() {
  const movingMarks = [...marks, ...marks];

  return (
    <Reveal className="border-y border-background/15 py-8">
      <p className="label-caps mb-7 text-background/45">Selected studio network</p>
      <div className="group relative overflow-hidden">
        <span className="pointer-events-none absolute inset-y-0 left-0 z-10 w-14 bg-gradient-to-r from-foreground to-transparent md:w-28" />
        <span className="pointer-events-none absolute inset-y-0 right-0 z-10 w-14 bg-gradient-to-l from-foreground to-transparent md:w-28" />
        <div className="marquee-track items-center gap-10 group-hover:[animation-play-state:paused] md:gap-16">
          {movingMarks.map((mark, index) => (
            <img
              key={`${mark.name}-${index}`}
              src={mark.logo}
              alt={`${mark.name} logo`}
              loading="lazy"
              width={240}
              height={80}
              className="h-12 w-auto shrink-0 brightness-0 invert opacity-55 grayscale transition-all duration-500 hover:scale-105 hover:opacity-100 md:h-16"
            />
          ))}
        </div>
      </div>
    </Reveal>
  );
}