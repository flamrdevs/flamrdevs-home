import fs from "fs/promises";
import path from "path";

import type { AstroIntegration } from "astro";
import type { AstroUserConfig } from "astro/config";

import { vanillaExtractPlugin as ve } from "@vanilla-extract/vite-plugin";

import mdx from "@astrojs/mdx";
import solid from "@astrojs/solid-js";
import sitemap from "@astrojs/sitemap";
import compress from "astro-compress";

const stats = () => {
	type Directory = {
		type: "directory";
		name: string;
		children: Child[];
	};

	type File = {
		type: "file";
		name: string;
		ext: string;
		size: string;
	};

	type Child = Directory | File;

	const dist = (...paths: string[]) => path.resolve("dist", ...paths);

	const exts = "html,css,js".split(",").map((s) => `.${s}`);

	const recursive = async (pathlike: string) => {
		const children: Child[] = [];

		const dirents = await fs.readdir(pathlike, { withFileTypes: true });

		for (const dirent of dirents) {
			if (dirent.isDirectory()) {
				children.push({
					type: "directory",
					name: dirent.name,
					children: await recursive(path.resolve(pathlike, dirent.name)),
				});
			} else if (dirent.isFile()) {
				const ext = path.extname(dirent.name);

				if (exts.includes(ext)) {
					const { size } = await fs.stat(path.resolve(dirent.path, dirent.name));
					children.push({
						type: "file",
						name: dirent.name,
						ext: ext,
						size: size >= 1048576 ? `${(size / 1048576).toFixed(2)} MB` : `${(size / 1024).toFixed(2)} KB`,
					});
				}
			}
		}

		return children;
	};

	const localeCompareByNameSortFn = <T extends { name: string }>(a: T, b: T) => a.name.localeCompare(b.name, undefined, { numeric: true });

	const sort = (children: Child[]): Child[] => {
		const directories: Directory[] = [];
		const files: File[] = [];

		children.forEach((child) => {
			if (child.type === "directory") {
				const { type, name, children } = child;
				directories.push({ type, name, children: sort(children) });
			} else if (child.type === "file") {
				files.push(child);
			}
		});

		return [...directories.sort(localeCompareByNameSortFn), ...files.sort(localeCompareByNameSortFn)];
	};

	const start = async () => {
		await fs.writeFile(dist("stats.json"), JSON.stringify(sort(await recursive(dist()))));
	};

	return {
		name: "stats",
		hooks: {
			"astro:build:done": async () => {
				try {
					await start();
				} catch (error) {
					console.error(error);
				}
			},
		},
	} satisfies AstroIntegration;
};

export default {
	site: "https://flamrdevs.vercel.app",
	integrations: [mdx(), solid(), sitemap(), compress({ logger: 1 }), stats()],
	server: { host: true, port: 3000 },
	vite: {
		plugins: [ve({ emitCssInSsr: true })],
		esbuild: { legalComments: "none" },
	},
} as AstroUserConfig;
