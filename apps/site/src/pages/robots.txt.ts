import type { APIRoute } from "astro";

import { HOST } from "@flamrdevs/utils/exports.ts";

export const GET: APIRoute = () => {
	return new Response(
		`
User-agent: *
Allow: /

Sitemap: ${HOST.SITE("sitemap-index.xml")}
`.trim(),
		{
			headers: {
				"Content-Type": "text/plain",
			},
		}
	);
};
