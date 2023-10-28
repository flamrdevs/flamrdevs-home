import fs from "node:fs/promises";
import path from "node:path";

import libs from "./libs.ts";

const create = () => {
	const symbols: string[] = [];

	for (const name in libs) {
		const [, , children] = libs[name as keyof typeof libs];

		if (children) {
			const node = children
				.map(
					([tag, attrs]) =>
						`<${tag} ${Object.entries(attrs)
							.map(([key, value]) => `${key}="${value}"`)
							.join(" ")} />`
				)
				.map((node) => `    ${node}`)
				.join("\n");

			symbols.push(`  <symbol id="i-${name}">
${node}
  </symbol>`);
		}
	}

	const svg = `<svg xmlns="http://www.w3.org/2000/svg">
${symbols.join("\n")}
</svg>`;

	const keys = Object.keys(libs);
	const types = ["export type IconName =", keys.map((key, index) => `  | '${key}'${index === keys.length - 1 ? ";" : ""}`).join("\n"), ""].join("\n");

	return { svg, svgmin: svg.replace(/[\r\n\t]/g, "").replace(/>\s+</g, "><"), types } as const;
};

const build = async () => {
	const cwd = process.cwd();
	const current = (pathname: string) => path.resolve(cwd, "icons", pathname);
	const app = (pathname: string) => path.resolve(cwd, "../../apps", pathname);

	const { svg, svgmin, types } = create();

	const send = async (name: string) => {
		await fs.access(app(`${name}/public`));
		await fs.writeFile(app(`${name}/public/icons.svg`), svgmin);
	};

	await Promise.all([
		//
		fs.writeFile(current("icons.svg"), svg),
		fs.writeFile(current("types.ts"), types),

		send("site"),
		send("web"),
	]);
};

build();
