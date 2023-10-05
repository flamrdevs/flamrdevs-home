import path from "path";

import { defineConfig } from "vite";
import type { Plugin } from "vite";

import { vanillaExtractPlugin as ve } from "@vanilla-extract/vite-plugin";

import solid from "vite-plugin-solid";

import { meta, stats } from "./vite.plugins";

export default defineConfig(({ command }) => {
	const PROD = command === "build";
	const DEV = !PROD;

	return {
		plugins: [
			ve({
				esbuildOptions: {
					define: {
						"import.meta.env.DEV": `${DEV}`,
						"import.meta.env.PROD": `${PROD}`,
					},
				},
			}) as Plugin,
			solid(),
			meta(),
			stats({
				exts: ["html", "css", "js", "json", "png", "svg", "ico", "ttf"],
			}),
		],
		server: { host: true, port: 5000 },
		preview: { host: true, port: 5000 },
		resolve: { alias: { "~": path.resolve(__dirname, "src") } },
		esbuild: { legalComments: "none" },
		build: {
			rollupOptions: {
				output: {
					manualChunks: (() => {
						const include = path.join(process.cwd(), "src/pages").replace(/\\/g, "/");
						const slicer = include.length + 1;

						return (id) => {
							if (id.includes(include)) {
								const name = id.slice(slicer);

								const create = (folder: string, suffix: string) => ({ is: name.endsWith(suffix), name: `${folder}/${name.slice(0, -suffix.length)}`.replace(/\./g, "/") });
								let created: ReturnType<typeof create>;

								created = create("pages", ".page.tsx");
								if (created.is) return created.name;

								created = create("layouts", ".layout.tsx");
								if (created.is) return created.name;
							}
						};
					})(),
				},
			},
		},
	};
});
