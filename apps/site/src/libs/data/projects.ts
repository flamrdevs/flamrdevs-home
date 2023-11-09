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

const projects: IProject[] = [
	{
		name: "flamrdevs-home",
		description: "main apps",
		slug: "flamrdevs-home",
		repo: "https://github.com/flamrdevs/flamrdevs-home",
		tags: ["astro", "netlify", "solid", "turborepo", "vanilla-extract", "vercel"],
	},
	{
		name: "flamrdevs-static",
		description: "static assets",
		slug: "flamrdevs-static",
		repo: "https://github.com/flamrdevs/flamrdevs-static",
		tags: ["astro", "cloudflare-pages", "solid", "tailwindcss"],
	},
	{
		name: "flamrdevs-api",
		description: "main api",
		slug: "flamrdevs-api",
		repo: "https://github.com/flamrdevs/flamrdevs-api",
		tags: ["api", "deno", "hono"],
	},
	{
		name: "flamrdevs-image",
		description: "image generation",
		slug: "flamrdevs-image",
		repo: "https://github.com/flamrdevs/flamrdevs-image",
		tags: ["api", "fastify", "node"],
	},
	{
		name: "klass",
		description: "Class variant utility",
		slug: "klass",
		site: "https://klass.pages.dev",
		repo: "https://github.com/flamrdevs/klass",
		tags: ["npm", "preact", "react", "solid"],
	},
	{
		name: "none",
		description: "Colorful SVG generation",
		slug: "none",
		repo: "https://github.com/flamrdevs/none",
		tags: ["api", "deno", "hono", "node", "svg"],
	},
	{
		name: "hiiiits",
		description: "Hits counter for GitHub",
		slug: "hiiiits",
		repo: "https://github.com/hiiiits/hiiiits",
		tags: ["api", "deno", "github", "hono", "svg"],
	},
	{
		name: "coloradix",
		description: "color radix",
		slug: "coloradix",
		repo: "https://github.com/coloradix/coloradix",
		tags: ["npm"],
	},
	{
		name: "propsplit",
		description: "Split props",
		slug: "propsplit",
		repo: "https://github.com/flamrdevs/propsplit",
		tags: ["npm"],
	},
	{
		name: "ixclone",
		description: "Simple state management",
		slug: "ixclone",
		repo: "https://github.com/flamrdevs/ixclone",
		tags: ["npm"],
	},
	{
		name: "ixstore",
		description: "Simple state management",
		slug: "ixstore",
		repo: "https://github.com/flamrdevs/ixstore",
		tags: ["npm"],
	},
	{
		name: "ixstorage",
		description: "Simple storage",
		slug: "ixstorage",
		repo: "https://github.com/flamrdevs/ixstorage",
		tags: ["npm"],
	},
	{
		name: "ixstoragest",
		description: "Simple state management with storage",
		slug: "ixstoragest",
		repo: "https://github.com/flamrdevs/ixstoragest",
		tags: ["npm"],
	},
	{
		name: "ixevent",
		description: "Simple event emitter",
		slug: "ixevent",
		repo: "https://github.com/flamrdevs/ixevent",
		tags: ["npm"],
	},
	{
		name: "ixbroadcastr",
		description: "Simple broadcast channel",
		slug: "ixbroadcastr",
		repo: "https://github.com/flamrdevs/ixbroadcastr",
		tags: ["npm"],
	},
	{
		name: "hvrsn",
		description: "Simplest haversine",
		slug: "hvrsn",
		repo: "https://github.com/flamrdevs/hvrsn",
		tags: ["npm"],
	},
	{
		name: "haaveersiinee",
		description: "Simple haversine",
		slug: "haaveersiinee",
		repo: "https://github.com/flamrdevs/haaveersiinee",
		tags: ["npm"],
	},
];

export type { IProject };
export default projects.slice(0, 1);
