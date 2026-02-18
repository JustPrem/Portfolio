import { defineCollection, z } from "astro:content";

const projects = defineCollection({
	schema: z.object({
		title: z.string(),
		description: z.string(),
		tech: z.array(z.string()),
		github: z.string().url(),
		demo: z.string().url().optional(),
	}),
});

export const collections = {
	projects,
};
