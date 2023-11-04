import type { APIRoute, GetStaticPaths } from "astro";
import { getCollection } from "astro:content";

import * as image from "~/libs/api/image.ts";

export const getStaticPaths: GetStaticPaths = async () => {
	const collection = await getCollection("blog");

	return collection.map((item) => ({
		params: { slug: item.slug },
		props: { title: item.data.title, subtitle: item.data.description },
	}));
};

export const GET: APIRoute<{ title: string; subtitle: string }> = async ({ props }) => {
	return new Response(await image.og.blog(props), {
		headers: {
			"Content-Type": "image/png",
		},
	});
};
