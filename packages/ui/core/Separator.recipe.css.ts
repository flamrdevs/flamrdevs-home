import { recipe } from "@vanilla-extract/recipes";
import type { RecipeVariants } from "@vanilla-extract/recipes";

import { ColorsContract } from "./../styles/contract.css.ts";
import * as vars from "./../styles/variables.css.ts";

type Variants = Exclude<RecipeVariants<typeof Root>, undefined>;

const Root = recipe({
	base: {
		vars: {
			[vars.l_mb]: "auto",
			[vars.l_mi]: "auto",
		},
		display: "block",
		borderStyle: "none",
		borderWidth: 0,
		borderRadius: "100%",
		backgroundImage: `linear-gradient(${vars.l_lg_deg}, ${ColorsContract.neutral[3]}, ${ColorsContract.neutral[6]}, ${ColorsContract.neutral[3]})`,

		selectors: {
			[`&[data-orientation="horizontal"]`]: {
				vars: { [vars.l_lg_deg]: "90deg" },
				marginBlock: vars.l_mb,
				width: "100%",
				height: 1,
			},
			[`&[data-orientation="vertical"]`]: {
				vars: { [vars.l_lg_deg]: "0deg" },
				marginInline: vars.l_mi,
				width: 1,
				height: "100%",
			},
		},
	},
	variants: {
		margin: {
			"0": {
				vars: {
					[vars.l_mb]: "0",
					[vars.l_mi]: "0",
				},
			},
			"1": {
				vars: {
					[vars.l_mb]: "0.5rem",
					[vars.l_mi]: "0.5rem",
				},
			},
			"2": {
				vars: {
					[vars.l_mb]: "1rem",
					[vars.l_mi]: "1rem",
				},
			},
			"3": {
				vars: {
					[vars.l_mb]: "1.5rem",
					[vars.l_mi]: "1.5rem",
				},
			},
			"4": {
				vars: {
					[vars.l_mb]: "2rem",
					[vars.l_mi]: "2rem",
				},
			},
		},
	},
	defaultVariants: {
		margin: "1",
	},
});

const RootKeys = Root.variants();

export type { Variants };
export { Root };
export { RootKeys };
