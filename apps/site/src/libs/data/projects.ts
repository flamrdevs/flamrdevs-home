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

const host_github = (...paths: string[]) => ["https://github.com", ...paths].join("/");

const projects: IProject[] = [
	{
		name: "flamrdevs-home",
		description: "main apps",
		slug: "flamrdevs-home",
		repo: host_github("flamrdevs/flamrdevs-home"),
		tags: ["astro", "netlify", "solid", "turborepo", "vanilla-extract", "vercel"],
	},
	{
		name: "flamrdevs-static",
		description: "static assets",
		slug: "flamrdevs-static",
		repo: host_github("flamrdevs/flamrdevs-static"),
		tags: ["astro", "cloudflare-pages", "solid", "tailwindcss"],
	},
	{
		name: "flamrdevs-api",
		description: "main api",
		slug: "flamrdevs-api",
		repo: host_github("flamrdevs/flamrdevs-api"),
		tags: ["api", "deno", "hono"],
	},
	{
		name: "flamrdevs-image",
		description: "image generation",
		slug: "flamrdevs-image",
		repo: host_github("flamrdevs/flamrdevs-image"),
		tags: ["api", "fastify", "node"],
	},
	{
		name: "klass",
		description: "Class variant utility",
		slug: "klass",
		site: "https://klass.pages.dev",
		repo: host_github("flamrdevs/klass"),
		tags: ["npm", "preact", "react", "solid"],
	},
	{
		name: "none",
		description: "Colorful SVG generation",
		slug: "none",
		repo: host_github("flamrdevs/none"),
		tags: ["api", "deno", "hono", "node", "svg"],
	},
	{
		name: "hiiiits",
		description: "Hits counter for GitHub",
		slug: "hiiiits",
		repo: host_github("hiiiits/hiiiits"),
		tags: ["api", "deno", "github", "hono", "svg"],
	},
	{
		name: "coloradix",
		description: "color radix",
		slug: "coloradix",
		repo: host_github("coloradix/coloradix"),
		tags: ["npm"],
	},
	{
		name: "propsplit",
		description: "Split props",
		slug: "propsplit",
		repo: host_github("flamrdevs/propsplit"),
		tags: ["npm"],
	},
	{
		name: "ixclone",
		description: "Simple state management",
		slug: "ixclone",
		repo: host_github("flamrdevs/ixclone"),
		tags: ["npm"],
	},
	{
		name: "ixstore",
		description: "Simple state management",
		slug: "ixstore",
		repo: host_github("flamrdevs/ixstore"),
		tags: ["npm"],
	},
	{
		name: "ixstorage",
		description: "Simple storage",
		slug: "ixstorage",
		repo: host_github("flamrdevs/ixstorage"),
		tags: ["npm"],
	},
	{
		name: "ixstoragest",
		description: "Simple state management with storage",
		slug: "ixstoragest",
		repo: host_github("flamrdevs/ixstoragest"),
		tags: ["npm"],
	},
	{
		name: "ixevent",
		description: "Simple event emitter",
		slug: "ixevent",
		repo: host_github("flamrdevs/ixevent"),
		tags: ["npm"],
	},
	{
		name: "ixbroadcastr",
		description: "Simple broadcast channel",
		slug: "ixbroadcastr",
		repo: host_github("flamrdevs/ixbroadcastr"),
		tags: ["npm"],
	},
	{
		name: "hvrsn",
		description: "Simplest haversine",
		slug: "hvrsn",
		repo: host_github("flamrdevs/hvrsn"),
		tags: ["npm"],
	},
	{
		name: "haaveersiinee",
		description: "Simple haversine",
		slug: "haaveersiinee",
		repo: host_github("flamrdevs/haaveersiinee"),
		tags: ["npm"],
	},
];

export type { IProject };
export default projects.slice(0, 1);
