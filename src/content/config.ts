import { defineCollection, z } from "astro:content";

export const collections = {
	projects: defineCollection({
		schema: z.object({
			title: z.string(),
			tech: z.array(z.string()),
			github: z.string().url(),
			projectDate: z.date(),
		}),
	}),
};
