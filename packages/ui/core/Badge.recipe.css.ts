import { recipe } from "@vanilla-extract/recipes";
import type { RecipeVariants } from "@vanilla-extract/recipes";

import * as FONTS from "./../styles/fonts";
import { ColorsContract } from "./../styles/contract.css";

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
		},
		buttonDisabledStyles,
	],
	variants: {
		color: {
			neutral: [
				{
					backgroundImage: `linear-gradient(130deg, ${ColorsContract.neutral[9]}, ${ColorsContract.neutral[6]})`,
					color: ColorsContract.neutral[11],

					":hover": {
						backgroundImage: `linear-gradient(130deg, ${ColorsContract.neutral[10]}, ${ColorsContract.neutral[6]})`,
					},
				},
				colorNeutralDisabledStyles,
			],
			primary: [
				{
					backgroundImage: `linear-gradient(130deg, ${ColorsContract.primary[9]}, ${ColorsContract.primary[6]})`,
					color: ColorsContract.primary[11],

					":hover": {
						backgroundImage: `linear-gradient(130deg, ${ColorsContract.primary[10]}, ${ColorsContract.primary[6]})`,
					},
				},
				colorPrimaryDisabledStyles,
			],
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

const RootKeys = ["color", "size"] as const satisfies readonly (keyof Variants)[];

type InnerVariants = Exclude<RecipeVariants<typeof Inner>, undefined>;

const Inner = recipe({
	base: {
		display: "block",
		position: "relative",
		overflow: "hidden",
		width: "100%",
		height: "100%",
		borderRadius: "0.35rem",
	},
	variants: {
		color: {
			neutral: {
				backgroundImage: `linear-gradient(130deg, ${ColorsContract.neutral[5]}, ${ColorsContract.neutral[2]})`,

				":hover": {
					backgroundImage: `linear-gradient(130deg, ${ColorsContract.neutral[6]}, ${ColorsContract.neutral[3]})`,
				},
			},

			primary: {
				backgroundImage: `linear-gradient(130deg, ${ColorsContract.primary[5]}, ${ColorsContract.primary[2]})`,

				":hover": {
					backgroundImage: `linear-gradient(130deg, ${ColorsContract.primary[6]}, ${ColorsContract.primary[3]})`,
				},
			},
		},
	},
	defaultVariants: {
		color: "neutral",
	},
});

const InnerKeys = ["color"] as const satisfies readonly (keyof InnerVariants)[];

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
			sans: {
				fontFamily: FONTS.SANS,
			},
			mono: {
				fontFamily: FONTS.MONO,
			},
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

const ChildKeys = ["font", "size"] as const satisfies readonly (keyof ChildVariants)[];

export type { Variants, InnerVariants, ChildVariants };
export { Root, Inner, Child };
export { RootKeys, InnerKeys, ChildKeys };
