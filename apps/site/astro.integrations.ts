import fs from "fs/promises";
import path from "path";

import type { AstroIntegration } from "astro";

const stats = (options: { exts: string[] }) => {
	type Directory<T extends string | number = number> = {
		type: "directory";
		name: string;
		children: Child<T>[];
		size: T;
	};

	type File<T extends string | number = number> = {
		type: "file";
		name: string;
		ext: string;
		size: T;
	};

	type Child<T extends string | number = number> = Directory<T> | File<T>;

	const dist = (...paths: string[]) => path.resolve("dist", ...paths);

	const exts = options.exts.map((s) => `.${s}`);

	const recursive = async (pathlike: string) => {
		const result: {
			children: Child<number>[];
			size: number;
		} = {
			children: [],
			size: 0,
		};

		const dirents = await fs.readdir(pathlike, { withFileTypes: true });

		for (const dirent of dirents) {
			if (dirent.isDirectory()) {
				const { children, size } = await recursive(path.resolve(pathlike, dirent.name));

				result.children.push({
					type: "directory",
					name: dirent.name,
					children,
					size: size,
				});
				result.size += size;
			} else if (dirent.isFile()) {
				const ext = path.extname(dirent.name);

				if (exts.includes(ext)) {
					const { size } = await fs.stat(path.resolve(pathlike, dirent.name));
					result.children.push({
						type: "file",
						name: dirent.name,
						ext: ext,
						size: size,
					});
					result.size += size;
				}
			}
		}

		return result;
	};

	const format = (size: number) => (size >= 1048576 ? `${(size / 1048576).toFixed(2)} MB` : `${(size / 1024).toFixed(2)} KB`);

	const localeCompareByNameSortFn = <T extends { name: string }>(a: T, b: T) => a.name.localeCompare(b.name, undefined, { numeric: true });

	const friendly = (children: Child<number>[]): Child<string>[] => {
		const directories: Directory<string>[] = [];
		const files: File<string>[] = [];

		children.forEach((child) => {
			if (child.type === "directory") {
				const { type, name, children, size } = child;
				directories.push({ type, name, children: friendly(children), size: format(size) });
			} else if (child.type === "file") {
				const { type, name, ext, size } = child;
				files.push({ type, name, ext, size: format(size) });
			}
		});

		return [...directories.sort(localeCompareByNameSortFn), ...files.sort(localeCompareByNameSortFn)];
	};

	const start = async () => {
		const { children, size } = await recursive(dist());
		const root: Directory<string> = {
			type: "directory",
			name: "",
			children: friendly(children),
			size: format(size),
		};
		await fs.writeFile(dist("stats.json"), JSON.stringify(root));
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

export { stats };
