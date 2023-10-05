import { recipe } from "@vanilla-extract/recipes";
import type { RecipeVariants } from "@vanilla-extract/recipes";

import * as styles from "./../styles/styles.css";
import * as tokens from "./../styles/tokens";
import * as vars from "./../styles/variables.css";

import * as Recipes from "./.recipes.css";

type Variants = Exclude<RecipeVariants<typeof Root>, undefined>;

const Root = recipe({
	base: {
		display: "inline-flex",
		position: "relative",
		alignItems: "center",
		justifyContent: "center",
		borderStyle: "none",
		outline: "1px solid transparent",
		outlineOffset: 2,
		userSelect: "none",
		cursor: "pointer",
		...tokens.rounded_7,
		backgroundImage: `linear-gradient(125deg, ${vars.v_color_3}, ${vars.v_color_2})`,
		color: vars.v_color_11,

		":hover": {
			backgroundImage: `linear-gradient(125deg, ${vars.v_color_4}, ${vars.v_color_2})`,
		},

		":focus-visible": {
			outlineColor: vars.v_color_11,
		},

		":active": {
			backgroundImage: `linear-gradient(125deg, ${vars.v_color_5}, ${vars.v_color_3})`,
		},

		"::before": {
			content: "",
			display: "block",
			position: "absolute",
			zIndex: -10,
			inset: -1,
			...tokens.rounded_8,
			backgroundImage: `linear-gradient(125deg, ${vars.v_color_9}, ${vars.v_color_7}, ${vars.v_color_6})`,
		},

		"::after": {
			content: "",
			display: "block",
			position: "absolute",
			zIndex: 10,
			inset: 0,
			...tokens.rounded_7,
			overflow: "hidden",
			opacity: 0.1,
			backgroundImage: `linear-gradient(to bottom, #2222221a, #1111111a), ${vars.filter_noise_svg}`,
		},

		selectors: {
			"&:hover::before": {
				backgroundImage: `linear-gradient(125deg, ${vars.v_color_10}, ${vars.v_color_8}, ${vars.v_color_7})`,
			},

			"&:active::before": {
				backgroundImage: `linear-gradient(125deg, ${vars.v_color_11}, ${vars.v_color_9}, ${vars.v_color_8})`,
			},

			"&[data-disabled]": {
				pointerEvents: "none",
				backgroundImage: `linear-gradient(125deg, ${vars.v_color_2}, ${vars.v_color_1})`,
				color: vars.v_color_8,
			},

			"&[data-disabled]::before": {
				backgroundImage: `linear-gradient(125deg, ${vars.v_color_5}, ${vars.v_color_4}, ${vars.v_color_3})`,
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
					height: "2rem",
					padding: "0.125rem 1rem",
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
