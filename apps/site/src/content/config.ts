import { z, defineCollection } from "astro:content";

type PostSchema = z.infer<typeof PostSchema>;
const PostSchema = z.object({
	title: z.string(),
	description: z.string(),
});

type PackageSchema = z.infer<typeof PackageSchema>;
const PackageSchema = z.object({
	name: z.string(),
	description: z.string(),
	type: z.object({
		npm: z
			.object({
				name: z.string(),
			})
			.optional(),
	}),
});

type ProjectSchema = z.infer<typeof ProjectSchema>;
const ProjectSchema = z.object({
	name: z.string(),
	description: z.string(),
});

export type { PostSchema };
export const collections = {
	blog: defineCollection({
		type: "content",
		schema: PostSchema,
	}),
	packages: defineCollection({
		type: "data",
		schema: PackageSchema,
	}),
	projects: defineCollection({
		type: "data",
		schema: ProjectSchema,
	}),
};
