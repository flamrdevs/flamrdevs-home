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
			[vars.xbg]: `${vars.v_color_9}, ${vars.v_color_7}, ${vars.v_color_6}`,
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
		background: `padding-box linear-gradient(140deg, ${vars.xpg}), border-box linear-gradient(140deg, ${vars.xbg})`,
		color: vars.v_color_11,

		":hover": {
			vars: {
				[vars.xpg]: `${vars.v_color_4}, ${vars.v_color_2}`,
				[vars.xbg]: `${vars.v_color_10}, ${vars.v_color_8}, ${vars.v_color_7}`,
			},
		},

		":focus-visible": {
			outlineColor: vars.v_color_11,
		},

		":active": {
			vars: {
				[vars.xpg]: `${vars.v_color_5}, ${vars.v_color_3}`,
				[vars.xbg]: `${vars.v_color_11}, ${vars.v_color_9}, ${vars.v_color_8}`,
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
					[vars.xpg]: `${vars.v_color_2}, ${vars.v_color_1}`,
					[vars.xbg]: `${vars.v_color_5}, ${vars.v_color_4}, ${vars.v_color_3}`,
				},
				color: vars.v_color_8,
				pointerEvents: "none",
			},
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
					width: "2rem",
					height: "2rem",
					padding: "0.125rem",
					fontWeight: 500,
				},
				Recipes.Typography({ fz: "3" }),
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
