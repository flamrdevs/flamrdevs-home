import { defineConfig } from "vitest/config";

import { vanillaExtractPlugin as ve } from "@vanilla-extract/vite-plugin";

import solid from "vite-plugin-solid";

export default defineConfig({
	plugins: [ve(), solid()],
	test: {
		environment: "jsdom",
		include: ["**/*.test.[jt]s?(x)"],
		setupFiles: "./vitest.setup.ts",
		deps: { inline: [/solid-js/, /@solidjs\/router/] },
	},
});
