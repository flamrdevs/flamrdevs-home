import type { APIRoute } from "astro";

import * as HOST from "@flamrdevs/utils/host";

export const get: APIRoute = () => {
	return {
		body: `
User-agent: *
Allow: /

Sitemap: ${HOST.SITE("sitemap-index.xml")}
`.trim(),
	};
};
