import * as HOST from "@flamrdevs/utils/host";

interface IProject {
	name: string;
	description: string;
	slug: string;
}

const projects = {
	find: async () => {
		return await fetch(HOST.API("projects")).then((res) => res.json() as Promise<IProject[]>);
	},
};

export type { IProject };
export { projects };
