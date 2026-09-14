import { useRef, useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { Paperclip } from "lucide-react";
import { planningOptions, submitProjectEnquiry } from "@/lib/enquiry.functions";

const inputClass =
  "mt-2 w-full border-b border-input bg-transparent py-3 text-base outline-none transition-all duration-300 placeholder:text-muted-foreground/60 hover:border-foreground focus:border-primary";

export function ProjectEnquiryForm() {
  const send = useServerFn(submitProjectEnquiry);
  const navigate = useNavigate();
  const fileRef = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState("");
  const [state, setState] = useState<"idle" | "sending" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    setState("sending");
    setError(null);
    try {
      await send({
        data: {
          name: String(fd.get("name") ?? ""),
          phone: String(fd.get("phone") ?? ""),
          email: String(fd.get("email") ?? ""),
          city: String(fd.get("city") ?? ""),
          planning: String(fd.get("planning") ?? "New Gym") as (typeof planningOptions)[number],
          description: String(fd.get("description") ?? ""),
          fileName,
        },
      });
      await navigate({ to: "/thank-you" });
    } catch (err) {
      setState("error");
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <label className="block">
          <span className="label-caps text-muted-foreground">Name</span>
          <input required name="name" type="text" placeholder="Your full name" className={inputClass} />
        </label>
        <label className="block">
          <span className="label-caps text-muted-foreground">Phone / WhatsApp</span>
          <input required name="phone" type="tel" placeholder="+91" className={inputClass} />
        </label>
        <label className="block">
          <span className="label-caps text-muted-foreground">Email</span>
          <input required name="email" type="email" placeholder="you@example.com" className={inputClass} />
        </label>
        <label className="block">
          <span className="label-caps text-muted-foreground">City / Location</span>
          <input required name="city" type="text" placeholder="Indore" className={inputClass} />
        </label>
      </div>

      <label className="block">
        <span className="label-caps text-muted-foreground">What are you planning</span>
        <select required name="planning" defaultValue="New Gym" className={inputClass}>
          {planningOptions.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
      </label>

      <label className="block">
        <span className="label-caps text-muted-foreground">Tell us about the space</span>
        <textarea
          required
          name="description"
          rows={4}
          maxLength={1200}
          placeholder="Floor area, what you plan to run in it, where you are in the process."
          className={`${inputClass} resize-none`}
        />
      </label>

      <div>
        <span className="label-caps text-muted-foreground">Plans or references (optional)</span>
        <input
          ref={fileRef}
          type="file"
          className="hidden"
          accept="image/*,.pdf,.dwg"
          onChange={(e) => setFileName(e.target.files?.[0]?.name ?? "")}
        />
        <button
          type="button"
          onClick={() => fileRef.current?.click()}
          className="label-caps mt-3 inline-flex items-center gap-2 border border-input px-5 py-3 transition-all duration-300 hover:border-primary hover:text-primary active:scale-[0.98]"
        >
          <Paperclip className="h-4 w-4" />
          {fileName || "Attach a file"}
        </button>
        <p className="mt-2 text-xs text-muted-foreground">
          Mock upload — the file name is passed with your enquiry and we'll ask for the file on the
          call until storage is wired up.
        </p>
      </div>

      {error && <p className="text-sm text-destructive">{error}</p>}

      <button
        type="submit"
        disabled={state === "sending"}
        className="label-caps w-full bg-primary px-8 py-4 text-primary-foreground transition-all duration-300 hover:bg-foreground active:scale-[0.98] disabled:opacity-60 sm:w-auto"
      >
        {state === "sending" ? "Sending…" : "Let's plan your gym"}
      </button>
      <p className="text-xs text-muted-foreground">
        Mock submission handler — Google Sheets destination to be wired up separately.
      </p>
    </form>
  );
}
