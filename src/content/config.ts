import { defineCollection, z } from "astro:content";

const projects = defineCollection({
	schema: z.object({
		title: z.string(),
		tech: z.array(z.string()),
		github: z.string().url().optional(),
		projectDate: z.date(),
		featured: z.boolean().optional().default(false),
	}),
});

const work = defineCollection({
	schema: z.object({
		jobTitle: z.string(),
		company: z.string(),
		startDate: z.date(),
		endDate: z.date().optional(),
	}),
});

const education = defineCollection({
	schema: z.object({
		degree: z.string(),
		institution: z.string(),
		startDate: z.date(),
		endDate: z.date().optional(),
	}),
});

export const collections = { projects, work, education };
