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

	const { svg, svgmin, types } = create();

	await fs.access(path.resolve(cwd, "src/components/icons"));
	await fs.access(path.resolve(cwd, "public"));

	await Promise.all([
		//
		fs.writeFile(path.resolve(cwd, "src/components/icons/icons.svg"), svg),
		fs.writeFile(path.resolve(cwd, "src/components/icons/types.ts"), types),
		fs.writeFile(path.resolve(cwd, "public/icons.svg"), svgmin),
	]);
};

build();
