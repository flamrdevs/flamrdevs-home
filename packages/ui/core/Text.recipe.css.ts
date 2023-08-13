import { recipe } from "@vanilla-extract/recipes";
import type { RecipeVariants } from "@vanilla-extract/recipes";

import * as FONTS from "./../styles/fonts";

type Variants = Exclude<RecipeVariants<typeof Root>, undefined>;

const Root = recipe({
	variants: {
		inline: {
			true: {
				display: "inline-block",
			},
			false: {
				display: "block",
			},
		},
		family: {
			sans: {
				fontFamily: FONTS.SANS,
			},
			mono: {
				fontFamily: FONTS.MONO,
			},
		},
		size: {
			xs: {
				fontSize: "0.75rem",
				lineHeight: "1rem",
			},
			sm: {
				fontSize: "0.875rem",
				lineHeight: "1.25rem",
			},
			md: {
				fontSize: "1rem",
				lineHeight: "1.5rem",
			},
			lg: {
				fontSize: "1.125rem",
				lineHeight: "1.75rem",
			},
			xl: {
				fontSize: "1.25rem",
				lineHeight: "1.75rem",
			},
			x2l: {
				fontSize: "1.5rem",
				lineHeight: "2rem",
			},
			x3l: {
				fontSize: "1.75rem",
				lineHeight: "2.25rem",
			},
			x4l: {
				fontSize: "2.25rem",
				lineHeight: "2.5rem",
			},
			x5l: {
				fontSize: "3rem",
				lineHeight: "1",
			},
			x6l: {
				fontSize: "3.75rem",
				lineHeight: "1",
			},
			x7l: {
				fontSize: "4.5rem",
				lineHeight: "1",
			},
			x8l: {
				fontSize: "6rem",
				lineHeight: "1",
			},
			x9l: {
				fontSize: "8rem",
				lineHeight: "1",
			},
		},
		weight: {
			300: {
				fontWeight: 300,
			},
			400: {
				fontWeight: 400,
			},
			500: {
				fontWeight: 500,
			},
			600: {
				fontWeight: 600,
			},
			700: {
				fontWeight: 700,
			},
		},
		align: {
			left: {
				textAlign: "left",
			},
			center: {
				textAlign: "center",
			},
			right: {
				textAlign: "right",
			},
		},
	},
	defaultVariants: {
		inline: false,
		family: "sans",
		size: "md",
		weight: 400,
		align: "left",
	},
});

const RootKeys = ["inline", "family", "size", "weight", "align"] as const satisfies readonly (keyof Variants)[];

export type { Variants };
export { Root };
export { RootKeys };
