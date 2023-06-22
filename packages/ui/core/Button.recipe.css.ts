import { recipe } from "@vanilla-extract/recipes";
import type { RecipeVariants } from "@vanilla-extract/recipes";

import * as FONTS from "./styles/fonts";
import { ColorsContract } from "./styles/contract.css";

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
			cursor: "pointer",
			userSelect: "none",
			outline: "1px solid transparent",
			outlineOffset: 1,
		},
		buttonDisabledStyles,
	],
	variants: {
		color: {
			neutral: [
				{
					backgroundImage: `linear-gradient(130deg, ${ColorsContract.neutral[11]}, ${ColorsContract.neutral[8]}, ${ColorsContract.neutral[6]})`,
					color: ColorsContract.neutral[11],

					":hover": {
						backgroundImage: `linear-gradient(130deg, ${ColorsContract.neutral[12]}, ${ColorsContract.neutral[8]}, ${ColorsContract.neutral[7]})`,
					},

					":focus-visible": {
						outlineColor: ColorsContract.neutral[11],
					},

					":active": {
						backgroundImage: `linear-gradient(130deg, ${ColorsContract.neutral[12]}, ${ColorsContract.neutral[9]}, ${ColorsContract.neutral[8]})`,
					},
				},
				colorNeutralDisabledStyles,
			],
			primary: [
				{
					backgroundImage: `linear-gradient(130deg, ${ColorsContract.primary[11]}, ${ColorsContract.primary[8]}, ${ColorsContract.primary[6]})`,
					color: ColorsContract.primary[11],

					":hover": {
						backgroundImage: `linear-gradient(130deg, ${ColorsContract.primary[12]}, ${ColorsContract.primary[8]}, ${ColorsContract.primary[7]})`,
					},

					":focus-visible": {
						outlineColor: ColorsContract.primary[11],
					},

					":active": {
						backgroundImage: `linear-gradient(130deg, ${ColorsContract.primary[12]}, ${ColorsContract.primary[9]}, ${ColorsContract.primary[8]})`,
					},
				},
				colorPrimaryDisabledStyles,
			],
		},
		size: {
			md: {
				height: "1.75rem",
				padding: 1,
			},
		},
	},
	defaultVariants: {
		color: "neutral",
		size: "md",
	},
});

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
				backgroundImage: `linear-gradient(130deg, ${ColorsContract.neutral[3]}, ${ColorsContract.neutral[1]})`,

				":hover": {
					backgroundImage: `linear-gradient(130deg, ${ColorsContract.neutral[4]}, ${ColorsContract.neutral[1]})`,
				},

				":active": {
					backgroundImage: `linear-gradient(130deg, ${ColorsContract.neutral[5]}, ${ColorsContract.neutral[2]})`,
				},
			},

			primary: {
				backgroundImage: `linear-gradient(130deg, ${ColorsContract.primary[3]}, ${ColorsContract.primary[1]})`,

				":hover": {
					backgroundImage: `linear-gradient(130deg, ${ColorsContract.primary[4]}, ${ColorsContract.primary[1]})`,
				},

				":active": {
					backgroundImage: `linear-gradient(130deg, ${ColorsContract.primary[5]}, ${ColorsContract.primary[2]})`,
				},
			},
		},
	},
	defaultVariants: {
		color: "neutral",
	},
});

type ChildVariants = Exclude<RecipeVariants<typeof Child>, undefined>;

const Child = recipe({
	base: {
		display: "inline-flex",
		position: "relative",
		justifyContent: "center",
		alignItems: "center",
		width: "100%",
		height: "100%",
		fontSize: "1rem",
		fontWeight: 500,
		lineHeight: "1.5rem",
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
				padding: "0.125rem 1rem",
			},
		},
	},
	defaultVariants: {
		font: "sans",
		size: "md",
	},
});

export type { Variants, InnerVariants, ChildVariants };
export { Root, Inner, Child };
