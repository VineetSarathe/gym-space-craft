import { useEffect, useState } from "react";
import { CalendarDays, Clock, Globe } from "lucide-react";

const slots = ["Tue 10:00", "Tue 16:30", "Wed 11:00", "Wed 18:00", "Thu 09:30", "Fri 15:00"];

/** MOCK calendar embed — the real booking widget replaces this block. */
export function CalendarEmbed({ compact = false }: { compact?: boolean }) {
  const [tz, setTz] = useState<string | null>(null);
  const [picked, setPicked] = useState<string | null>(null);

  useEffect(() => {
    try {
      setTz(Intl.DateTimeFormat().resolvedOptions().timeZone);
    } catch {
      setTz(null);
    }
  }, []);

  return (
    <div className="border border-border bg-card p-6 md:p-8">
      <p className="label-caps text-primary">Book a discovery call</p>
      <h3 className="mt-4 font-display text-2xl uppercase">30 minutes, no pitch deck</h3>
      {!compact && (
        <p className="mt-3 text-sm text-muted-foreground">
          Your space, your model, your peak hour. You leave with an initial view on capacity and
          layout either way.
        </p>
      )}
      <div className="label-caps mt-6 flex flex-wrap gap-x-6 gap-y-2 text-muted-foreground">
        <span className="inline-flex items-center gap-2">
          <Clock className="h-4 w-4 text-primary" /> 30 min
        </span>
        <span className="inline-flex items-center gap-2">
          <CalendarDays className="h-4 w-4 text-primary" /> Mon–Sat
        </span>
        <span className="inline-flex items-center gap-2">
          <Globe className="h-4 w-4 text-primary" /> {tz ?? "Detecting timezone…"}
        </span>
      </div>
      <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
        {slots.map((s) => (
          <button
            key={s}
            type="button"
            onClick={() => setPicked(s)}
            className={`label-caps border px-3 py-3 transition-all duration-300 active:scale-[0.97] ${
              picked === s
                ? "border-primary bg-primary text-primary-foreground"
                : "border-input hover:border-primary hover:text-primary"
            }`}
          >
            {s}
          </button>
        ))}
      </div>
      <p className="mt-5 text-xs text-muted-foreground">
        {picked
          ? `Mock embed — ${picked} shown in your local time (${tz ?? "local"}). The live booking calendar is wired up separately.`
          : "Mock embed — slots shown in your detected local time. The live booking calendar is wired up separately."}
      </p>
    </div>
  );
}
