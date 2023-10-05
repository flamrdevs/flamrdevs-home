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
		userSelect: "none",
		...tokens.rounded_6,
		backgroundImage: `linear-gradient(125deg, ${vars.v_color_3}, ${vars.v_color_2})`,
		color: vars.v_color_11,

		"::before": {
			content: "",
			display: "block",
			position: "absolute",
			zIndex: -10,
			inset: -1,
			...tokens.rounded_7,
			backgroundImage: `linear-gradient(125deg, ${vars.v_color_9}, ${vars.v_color_6})`,
		},

		"::after": {
			content: "",
			display: "block",
			position: "absolute",
			zIndex: 10,
			inset: 0,
			...tokens.rounded_6,
			overflow: "hidden",
			opacity: 0.1,
			backgroundImage: `linear-gradient(to bottom, #2222221a, #1111111a), ${vars.filter_noise_svg}`,
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
