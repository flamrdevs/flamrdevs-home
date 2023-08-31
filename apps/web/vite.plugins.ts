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
				STATIC: (...paths: string[]) => [PROD ? "https://flamrdevs.pages.dev" : "http://localhost:4000", ...paths].join("/"),
				WEB: (...paths: string[]) => [PROD ? "https://flamrdevs.netlify.app" : "http://localhost:5000", ...paths].join("/"),
			};

			return html
				.replace(/{{TITLE}}/g, "flamrdevs")
				.replace(/{{DESCRIPTION}}/g, "flamrdevs")
				.replace(/{{URL}}/g, HOST.WEB())
				.replace(/{{IMAGE}}/g, HOST.STATIC("og", "cover-ghost-1200x628-dark.png"))
				.replace(/{{FAVICON-DARK}}/g, HOST.STATIC("favicon-dark.ico"))
				.replace(/{{FAVICON-LIGHT}}/g, HOST.STATIC("favicon-light.ico"))
				.replace(/{{STYLESHEET\/NORMALIZE}}/g, HOST.STATIC("css", "normalize.css"))
				.replace(/{{STYLESHEET\/FONTS}}/g, HOST.STATIC("css", "fonts.css"));
		},
	} satisfies PluginOption;
};

const stats = (options: { exts: string[] }) => {
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

	const exts = options.exts.map((s) => `.${s}`);

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
