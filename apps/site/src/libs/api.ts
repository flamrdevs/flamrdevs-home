import { HOST } from "@flamrdevs/utils/exports";

type Tag =
	| "api"
	| "astro"
	| "cloudflare-pages"
	| "deno"
	| "fastify"
	| "github"
	| "hono"
	| "netlify"
	| "node"
	| "npm"
	| "preact"
	| "react"
	| "solid"
	| "svelte"
	| "svg"
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

const og = {
	blog: async ({ title, subtitle }: { title: string; subtitle: string }) => {
		return await fetch(HOST.IMAGE(`og/blog?${new URLSearchParams({ title, subtitle })}`)).then((res) => res.arrayBuffer() as Promise<ArrayBuffer>);
	},
};

export type { IProject };
export { projects, og };
