import { resolve } from "node:path";

import { defineConfig } from "vite";

import { vanillaExtractPlugin as ve } from "@vanilla-extract/vite-plugin";

import solid from "vite-plugin-solid";

import { meta, stats } from "./vite.plugins";

export default defineConfig(({ command }) => {
	return {
		plugins: [ve(), solid(), meta(command), stats()],
		server: { host: true, port: 5000 },
		preview: { host: true, port: 5000 },
		resolve: { alias: { "~": resolve(__dirname, "src") } },
		esbuild: { legalComments: "none" },
	};
});
