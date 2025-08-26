import { z } from "zod";

export const ExperienceSchema = z.object({
  title: z.string(),
  company: z.string().optional(),
  period: z.string(),
  logo: z.string().optional(),
  isActive: z.boolean(),
  description: z.string().optional(),
  link: z.string().optional()
});

export type Experience = z.infer<typeof ExperienceSchema>;

export type ViewMode = 'list' | 'mosaic'; 