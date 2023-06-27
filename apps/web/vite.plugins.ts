import fs from "fs/promises";
import path from "path";

import type { PluginOption } from "vite";

const meta = () => {
	let PROD: boolean | undefined;

	return {
		name: "meta",
		configResolved: ({ command }) => {
			PROD = command === "build";
		},
		transformIndexHtml: (html) => {
			const HOST = {
				STATIC_DEV: "http://localhost:4000",
				STATIC_PROD: "https://flamrdevs.pages.dev",
				WEB_DEV: "http://localhost:5000",
				WEB_PROD: "https://flamrdevs.netlify.app",
			};

			const STATIC = (...paths: string[]) => [PROD ? HOST.STATIC_PROD : HOST.STATIC_DEV, ...paths].join("/");
			const WEB = (...paths: string[]) => [PROD ? HOST.WEB_PROD : HOST.WEB_DEV, ...paths].join("/");

			return html
				.replace(/{{TITLE}}/g, "flamrdevs")
				.replace(/{{DESCRIPTION}}/g, "flamrdevs")
				.replace(/{{URL}}/g, WEB())
				.replace(/{{IMAGE}}/g, STATIC("~", "d1200x628.png"))
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

export { meta, stats };
