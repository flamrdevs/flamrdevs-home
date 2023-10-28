import { recipe } from "@vanilla-extract/recipes";
import type { RecipeVariants } from "@vanilla-extract/recipes";

import { ColorsContract } from "./../styles/contract.css.ts";
import * as vars from "./../styles/variables.css.ts";

type Variants = Exclude<RecipeVariants<typeof Root>, undefined>;

const Root = recipe({
	base: {
		vars: {
			[vars.margin_block]: "auto",
			[vars.margin_inline]: "auto",
		},
		display: "block",
		borderStyle: "none",
		borderWidth: 0,
		borderRadius: "100%",
		backgroundImage: `linear-gradient(${vars.lg_deg}, ${ColorsContract.neutral[3]}, ${ColorsContract.neutral[6]}, ${ColorsContract.neutral[3]})`,

		selectors: {
			[`&[data-orientation="horizontal"]`]: {
				vars: { [vars.lg_deg]: "90deg" },
				marginBlock: vars.margin_block,
				width: "100%",
				height: 1,
			},
			[`&[data-orientation="vertical"]`]: {
				vars: { [vars.lg_deg]: "0deg" },
				marginInline: vars.margin_inline,
				width: 1,
				height: "100%",
			},
		},
	},
	variants: {
		margin: {
			"0": {
				vars: {
					[vars.margin_block]: "0",
					[vars.margin_inline]: "0",
				},
			},
			"1": {
				vars: {
					[vars.margin_block]: "0.5rem",
					[vars.margin_inline]: "0.5rem",
				},
			},
			"2": {
				vars: {
					[vars.margin_block]: "1rem",
					[vars.margin_inline]: "1rem",
				},
			},
			"3": {
				vars: {
					[vars.margin_block]: "1.5rem",
					[vars.margin_inline]: "1.5rem",
				},
			},
			"4": {
				vars: {
					[vars.margin_block]: "2rem",
					[vars.margin_inline]: "2rem",
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
