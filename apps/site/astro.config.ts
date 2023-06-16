import { defineConfig } from "astro/config";

import { vanillaExtractPlugin as ve } from "@vanilla-extract/vite-plugin";

import mdx from "@astrojs/mdx";
import solid from "@astrojs/solid-js";
import sitemap from "@astrojs/sitemap";
import compress from "astro-compress";

export default defineConfig({
	site: "https://flamrdevs.vercel.app",
	integrations: [mdx(), solid(), sitemap(), compress()],
	server: { host: true, port: 3000 },
	vite: {
		plugins: [ve({ emitCssInSsr: true })],
		esbuild: { legalComments: "none" },
	},
});
