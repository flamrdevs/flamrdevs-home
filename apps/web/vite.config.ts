import fs from "fs/promises";
import path from "path";

import { defineConfig } from "vite";
import type { PluginOption } from "vite";

import { vanillaExtractPlugin as ve } from "@vanilla-extract/vite-plugin";

import solid from "vite-plugin-solid";

export default defineConfig(({ command }) => {
	return {
		plugins: [ve(), solid(), meta(command), stats()],
		server: { host: true, port: 5000 },
		preview: { host: true, port: 5000 },
		resolve: { alias: { "~": path.resolve(__dirname, "src") } },
		esbuild: { legalComments: "none" },
	};
});

const meta = (command: string) => {
	const PROD = command === "build";

	const HOST = {
		STATIC_DEV: "http://localhost:4000",
		STATIC_PROD: "https://flamrdevs.pages.dev",
	};

	const STATIC = (...paths: string[]) => [PROD ? HOST.STATIC_PROD : HOST.STATIC_DEV, ...paths].join("/");

	return {
		name: "meta",
		transformIndexHtml: (html) => {
			return html
				.replace(/{{TITLE}}/g, "flamrdevs")
				.replace(/{{DESCRIPTION}}/g, "flamrdevs")
				.replace(/{{FAVICON}}/g, STATIC("favicon.ico"))
				.replace(/{{STYLESHEET_NORMALIZE}}/g, STATIC("stylesheets", "normalize.css"))
				.replace(/{{STYLESHEET_FONTS}}/g, STATIC("stylesheets", "fonts.css"));
		},
	} satisfies PluginOption;
};

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
					const { size } = await fs.stat(path.resolve(pathlike, dirent.name));
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
		closeBundle: async () => {
			try {
				await start();
			} catch (error) {
				console.error(error);
			}
		},
	} satisfies PluginOption;
};
