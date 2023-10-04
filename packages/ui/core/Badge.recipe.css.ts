import { recipe } from "@vanilla-extract/recipes";
import type { RecipeVariants } from "@vanilla-extract/recipes";

import * as styles from "./../styles/styles.css";
import * as vars from "./../styles/variables.css";

import { Typography } from "./.recipes.css";

import { buttonDisabledStyles, colorNeutralDisabledStyles, colorPrimaryDisabledStyles } from "./core.css";

type Variants = Exclude<RecipeVariants<typeof Root>, undefined>;

const Root = recipe({
	base: [
		{
			display: "inline-block",
			position: "relative",
			overflow: "hidden",
			borderStyle: "none",
			borderRadius: "0.4rem",
			userSelect: "none",
			backgroundImage: `linear-gradient(125deg, ${vars.v_color_9}, ${vars.v_color_6})`,
			color: vars.v_color_11,

			":hover": {
				backgroundImage: `linear-gradient(125deg, ${vars.v_color_10}, ${vars.v_color_6})`,
			},
		},
		buttonDisabledStyles,
	],
	variants: {
		color: {
			neutral: [styles.varsNeutral, colorNeutralDisabledStyles],
			primary: [styles.varsPrimary, colorPrimaryDisabledStyles],
		},
		size: {
			md: {
				height: "1.25rem",
				padding: 1,
			},
		},
	},
	defaultVariants: {
		color: "neutral",
		size: "md",
	},
});

const RootKeys = Root.variants();

type InnerVariants = Exclude<RecipeVariants<typeof Inner>, undefined>;

const Inner = recipe({
	base: {
		display: "block",
		position: "relative",
		overflow: "hidden",
		width: "100%",
		height: "100%",
		borderRadius: "0.35rem",
		backgroundImage: `linear-gradient(125deg, ${vars.v_color_5}, ${vars.v_color_2})`,

		":hover": {
			backgroundImage: `linear-gradient(125deg, ${vars.v_color_6}, ${vars.v_color_3})`,
		},
	},
	variants: {
		color: {
			neutral: [styles.varsNeutral],
			primary: [styles.varsPrimary],
		},
	},
	defaultVariants: {
		color: "neutral",
	},
});

const InnerKeys = Inner.variants();

type ChildVariants = Exclude<RecipeVariants<typeof Child>, undefined>;

const Child = recipe({
	base: {
		display: "inline-flex",
		position: "relative",
		justifyContent: "center",
		alignItems: "center",
		width: "100%",
		height: "100%",
		fontSize: "0.875rem",
		fontWeight: 500,
		lineHeight: "1.25rem",
	},
	variants: {
		font: {
			sans: Typography({ ff: "sans" }),
			mono: Typography({ ff: "mono" }),
		},
		size: {
			md: {
				padding: "0 0.25rem",
			},
		},
	},
	defaultVariants: {
		font: "sans",
		size: "md",
	},
});

const ChildKeys = Child.variants();

export type { Variants, InnerVariants, ChildVariants };
export { Root, Inner, Child };
export { RootKeys, InnerKeys, ChildKeys };
