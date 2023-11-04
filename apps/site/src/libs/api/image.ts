import { HOST } from "@flamrdevs/utils/exports.ts";

const og = {
	blog: async ({ title, subtitle }: { title: string; subtitle: string }) => {
		return await fetch(HOST.IMAGE(`og/blog?${new URLSearchParams({ title, subtitle })}`)).then((res) => res.arrayBuffer() as Promise<ArrayBuffer>);
	},
};

export { og };
