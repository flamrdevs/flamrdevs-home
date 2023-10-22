import { recipe } from "@vanilla-extract/recipes";
import type { RecipeVariants } from "@vanilla-extract/recipes";

import * as styles from "./../styles/styles.css";
import * as tokens from "./../styles/tokens";
import * as vars from "./../styles/variables.css";

import * as Recipes from "./.recipes.css";

type Variants = Exclude<RecipeVariants<typeof Root>, undefined>;

const Root = recipe({
	base: {
		vars: {
			[vars.xpg]: `${vars.v_color_3}, ${vars.v_color_2}`,
			[vars.xbg]: `${vars.v_color_9}, ${vars.v_color_6}`,
		},
		display: "inline-flex",
		position: "relative",
		alignItems: "center",
		justifyContent: "center",
		userSelect: "none",
		border: "1px solid transparent",
		...tokens.rounded_7,
		background: `padding-box linear-gradient(125deg, ${vars.xpg}), border-box linear-gradient(125deg, ${vars.xbg})`,
		color: vars.v_color_11,

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
		color: {
			neutral: styles.varsNeutral,
			primary: styles.varsPrimary,
			success: styles.varsSuccess,
			info: styles.varsInfo,
			warning: styles.varsWarning,
			danger: styles.varsDanger,
		},
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
		color: "neutral",
		size: "md",
	},
});

const RootKeys = Root.variants();

export type { Variants };
export { Root };
export { RootKeys };
