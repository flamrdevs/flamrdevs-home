import type { AstroUserConfig } from "astro/config";

import { vanillaExtractPlugin as ve } from "@vanilla-extract/vite-plugin";

import mdx from "@astrojs/mdx";
import solid from "@astrojs/solid-js";
import sitemap from "@astrojs/sitemap";

import { stats } from "./astro.integrations";

import { SITE_PROD } from "@flamrdevs/const/host.ts";

export default {
	site: SITE_PROD,
	integrations: [
		mdx(),
		solid(),
		sitemap(),
		stats({
			exts: ["html", "css", "js", "json", "png", "svg", "ico", "ttf"],
		}),
		{
			name: "vanilla-extract",
			hooks: {
				"astro:config:setup": ({ command, updateConfig }) => {
					const PROD = command === "build",
						DEV = !PROD;

					updateConfig({
						vite: {
							plugins: [
								ve({
									emitCssInSsr: true,
									esbuildOptions: {
										define: {
											"import.meta.env.DEV": `${DEV}`,
											"import.meta.env.PROD": `${PROD}`,
										},
									},
								}),
							],
							esbuild: { legalComments: "none" },
						},
					});
				},
			},
		},
	],
	server: { host: true, port: 3000 },
	vite: {
		ssr: {
			noExternal: ["@kobalte/core"],
		},
	},
} as AstroUserConfig;
