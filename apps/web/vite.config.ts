import path from "path";

import { defineConfig } from "vite";

import { vanillaExtractPlugin as ve } from "@vanilla-extract/vite-plugin";

import solid from "vite-plugin-solid";

import { meta, stats } from "./vite.plugins";

export default defineConfig({
	plugins: [
		ve(),
		solid(),
		meta(),
		stats({
			exts: ["html", "css", "js"],
		}),
	],
	server: { host: true, port: 5000 },
	preview: { host: true, port: 5000 },
	resolve: { alias: { "~": path.resolve(__dirname, "src") } },
	esbuild: { legalComments: "none" },
});
