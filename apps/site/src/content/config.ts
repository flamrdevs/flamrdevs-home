import { z, defineCollection } from "astro:content";

type PostSchema = z.infer<typeof PostSchema>;
const PostSchema = z.object({
	title: z.string(),
	description: z.string(),
});

export type { PostSchema };
export const collections = {
	blog: defineCollection({
		type: "content",
		schema: PostSchema,
	}),
};
