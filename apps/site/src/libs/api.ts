import * as HOST from "@flamrdevs/utils/host";

type Tag = "npm" | "preact" | "react" | "solid" | "svelte" | "vue";

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
