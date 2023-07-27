import { HOST } from "@flamrdevs/utils/exports";

type Tag =
	| "astro"
	| "cloudflare-pages"
	| "deno"
	| "fastify"
	| "hono"
	| "netlify"
	| "node"
	| "npm"
	| "preact"
	| "react"
	| "solid"
	| "svelte"
	| "tailwindcss"
	| "turborepo"
	| "vanilla-extract"
	| "vercel"
	| "vue";

interface IProject {
	name: string;
	description: string;
	slug: string;
	site?: string;
	repo?: string;
	tags?: Tag[];
}

const projects = {
	find: async () => {
		return await fetch(HOST.API("content/projects")).then((res) => res.json() as Promise<IProject[]>);
	},
};

export type { IProject };
export { projects };
