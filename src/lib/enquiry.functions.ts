import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

// MOCK SUBMISSION HANDLER — the real Google Sheets / CRM destination is wired
// up separately. This validates and logs the enquiry, then returns success.
const enquirySchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  phone: z.string().trim().min(7, "Please enter a valid phone number").max(20),
  email: z.string().trim().email("Please enter a valid email").max(160),
  city: z.string().trim().min(2, "Please enter your city").max(80),
});

export type EnquiryInput = z.infer<typeof enquirySchema>;

export const submitEnquiry = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => enquirySchema.parse(data))
  .handler(async ({ data }) => {
    console.log("[MOCK ENQUIRY — pending Google Sheets integration]", {
      ...data,
      receivedAt: new Date().toISOString(),
    });
    return { ok: true as const };
  });

// MOCK DOWNLOAD LEAD HANDLER — routes to the same lead destination as the
// main enquiry form once the real Google Sheets / CRM wiring is in place.
const downloadLeadSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  email: z.string().trim().email("Please enter a valid email").max(160),
  phone: z.string().trim().max(20).optional().or(z.literal("")),
  resource: z.string().trim().min(1).max(160),
});

export type DownloadLeadInput = z.infer<typeof downloadLeadSchema>;

export const submitDownloadLead = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => downloadLeadSchema.parse(data))
  .handler(async ({ data }) => {
    console.log("[MOCK DOWNLOAD LEAD — same destination as enquiry form]", {
      ...data,
      receivedAt: new Date().toISOString(),
    });
    return { ok: true as const };
  });

// MOCK PROJECT ENQUIRY HANDLER — the full Start a Project form. Same mock
// destination as above until the Google Sheets / CRM wiring lands.
export const planningOptions = ["New Gym", "Renovation", "Fitness Studio", "Other"] as const;

const projectEnquirySchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  phone: z.string().trim().min(7, "Please enter a valid phone number").max(20),
  email: z.string().trim().email("Please enter a valid email").max(160),
  city: z.string().trim().min(2, "Please enter your city").max(80),
  planning: z.enum(planningOptions),
  description: z.string().trim().min(10, "Tell us a little more").max(1200),
  fileName: z.string().trim().max(200).optional().or(z.literal("")),
});

export type ProjectEnquiryInput = z.infer<typeof projectEnquirySchema>;

export const submitProjectEnquiry = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => projectEnquirySchema.parse(data))
  .handler(async ({ data }) => {
    console.log("[MOCK PROJECT ENQUIRY — pending Google Sheets integration]", {
      ...data,
      receivedAt: new Date().toISOString(),
    });
    return { ok: true as const };
  });
