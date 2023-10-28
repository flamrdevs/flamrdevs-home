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
			[vars.xbg]: `${vars.v_a_9}, ${vars.v_a_6}`,
		},
		display: "inline-flex",
		position: "relative",
		alignItems: "center",
		justifyContent: "center",
		userSelect: "none",
		border: "1px solid transparent",
		...tokens.rounded_7,
		background: `padding-box linear-gradient(125deg, ${vars.xpg}), border-box linear-gradient(125deg, ${vars.xbg})`,
		color: vars.v_a_11,

		"::after": {
			content: "",
			display: "block",
			position: "absolute",
			zIndex: 10,
			inset: 0,
			...tokens.rounded_7,
			overflow: "hidden",
			opacity: 0.1,
			background: vars.default_filter_noise_background,
		},
	},
	variants: {
		size: {
			md: [
				{
					height: "1rem",
					padding: "0 0.25rem",
					fontWeight: 400,
				},
				Recipes.Typography({ fz: "1" }),
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
