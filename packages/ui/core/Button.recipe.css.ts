import { recipe } from "@vanilla-extract/recipes";
import type { RecipeVariants } from "@vanilla-extract/recipes";

import * as tokens from "./../styles/tokens.ts";
import * as vars from "./../styles/variables.css.ts";

import * as Recipes from "./.recipes.css.ts";

type Variants = Exclude<RecipeVariants<typeof Root>, undefined>;

const Root = recipe({
	base: {
		vars: {
			[vars.xpg]: `${vars.v_a_3}, ${vars.v_a_2}`,
			[vars.xbg]: `${vars.v_a_9}, ${vars.v_a_7}, ${vars.v_a_6}`,
		},
		display: "inline-flex",
		position: "relative",
		alignItems: "center",
		justifyContent: "center",
		userSelect: "none",
		cursor: "pointer",
		border: "1px solid transparent",
		outline: "1px solid transparent",
		outlineOffset: 2,
		...tokens.rounded_8,
		background: `padding-box linear-gradient(125deg, ${vars.xpg}), border-box linear-gradient(125deg, ${vars.xbg})`,
		color: vars.v_a_11,

		":hover": {
			vars: {
				[vars.xpg]: `${vars.v_a_4}, ${vars.v_a_2}`,
				[vars.xbg]: `${vars.v_a_10}, ${vars.v_a_8}, ${vars.v_a_7}`,
			},
		},

		":focus-visible": {
			outlineColor: vars.v_a_11,
		},

		":active": {
			vars: {
				[vars.xpg]: `${vars.v_a_5}, ${vars.v_a_3}`,
				[vars.xbg]: `${vars.v_a_11}, ${vars.v_a_9}, ${vars.v_a_8}`,
			},
		},

		"::after": {
			content: "",
			display: "block",
			position: "absolute",
			zIndex: 10,
			inset: 0,
			...tokens.rounded_8,
			overflow: "hidden",
			opacity: 0.1,
			background: vars.default_filter_noise_background,
		},

		selectors: {
			"&[data-disabled]": {
				vars: {
					[vars.xpg]: `${vars.v_a_2}, ${vars.v_a_1}`,
					[vars.xbg]: `${vars.v_a_5}, ${vars.v_a_4}, ${vars.v_a_3}`,
				},
				color: vars.v_a_8,
				pointerEvents: "none",
			},
		},
	},
	variants: {
		size: {
			md: [
				{
					height: "2rem",
					padding: "0.125rem 1rem",
					fontWeight: 500,
				},
				Recipes.Typography({ fz: "3" }),
			],
		},
	},
	defaultVariants: {
		size: "md",
	},
});

const RootKeys = Root.variants();

export type { Variants };
export { Root };
export { RootKeys };
