import { resolve } from "node:path";

import { defineConfig } from "vite";

import { vanillaExtractPlugin as ve } from "@vanilla-extract/vite-plugin";

import solid from "vite-plugin-solid";

export default defineConfig(({ command }) => {
	const PROD = command === "build";

	const HOST = {
		STATIC_DEV: "http://localhost:4000",
		STATIC_PROD: "https://flamrdevs.pages.dev",
	};

	const STATIC = (...paths: string[]) => [PROD ? HOST.STATIC_PROD : HOST.STATIC_DEV, ...paths].join("/");

	return {
		plugins: [
			ve(),
			solid(),
			{
				name: "meta#flamrdevs",
				transformIndexHtml: (html) => {
					return html
						.replace(/{{TITLE}}/g, "flamrdevs")
						.replace(/{{DESCRIPTION}}/g, "flamrdevs")
						.replace(/{{FAVICON}}/g, STATIC("favicon.ico"))
						.replace(/{{STYLESHEET_RESET}}/g, STATIC("stylesheets", "reset.css"))
						.replace(/{{STYLESHEET_FONTS}}/g, STATIC("stylesheets", "fonts.css"));
				},
			},
		],
		server: { host: true, port: 5000 },
		preview: { host: true, port: 5000 },
		resolve: { alias: { "~": resolve(__dirname, "src") } },
		esbuild: { legalComments: "none" },
	};
});
