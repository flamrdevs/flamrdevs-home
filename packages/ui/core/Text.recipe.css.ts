import { recipe } from "@vanilla-extract/recipes";
import type { RecipeVariants } from "@vanilla-extract/recipes";

import * as FONTS from "./styles/fonts";

type Variants = Exclude<RecipeVariants<typeof Root>, undefined>;

const Root = recipe({
	variants: {
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
				fontSize: "0.750rem",
			},
			sm: {
				fontSize: "0.875rem",
			},
			md: {
				fontSize: "1.000rem",
			},
			lg: {
				fontSize: "1.125rem",
			},
			xl: {
				fontSize: "1.250rem",
			},
			x2l: {
				fontSize: "1.500rem",
			},
			x3l: {
				fontSize: "1.875rem",
			},
			x4l: {
				fontSize: "2.250rem",
			},
			x5l: {
				fontSize: "3.000rem",
			},
			x6l: {
				fontSize: "3.750rem",
			},
			x7l: {
				fontSize: "4.500rem",
			},
			x8l: {
				fontSize: "6.000rem",
			},
			x9l: {
				fontSize: "8.000rem",
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
		family: "sans",
		size: "md",
		weight: 400,
		align: "left",
	},
});

export type { Variants };
export { Root };
