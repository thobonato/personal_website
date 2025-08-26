import { z } from "zod";

export const LinkSchema = z.object({
  name: z.string(),
  url: z.string()
});

export type LinkType = z.infer<typeof LinkSchema>;