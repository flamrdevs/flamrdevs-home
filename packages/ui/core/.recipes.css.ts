import { recipe } from "@vanilla-extract/recipes";
import type { RecipeVariants } from "@vanilla-extract/recipes";

import * as FONTS from "./../styles/fonts";

type TypographyVariants = Exclude<RecipeVariants<typeof Typography>, undefined>;

const Typography = recipe({
	variants: {
		ff: {
			sans: {
				fontFamily: FONTS.SANS,
			},
			mono: {
				fontFamily: FONTS.MONO,
			},
		},
		fz: {
			"1": {
				fontSize: "0.75rem",
				lineHeight: "1rem",
			},
			"2": {
				fontSize: "0.875rem",
				lineHeight: "1.25rem",
			},
			"3": {
				fontSize: "1rem",
				lineHeight: "1.5rem",
			},
			"4": {
				fontSize: "1.125rem",
				lineHeight: "1.75rem",
			},
			"5": {
				fontSize: "1.25rem",
				lineHeight: "1.75rem",
			},
			"6": {
				fontSize: "1.5rem",
				lineHeight: "2rem",
			},
			"7": {
				fontSize: "1.75rem",
				lineHeight: "2.25rem",
			},
			"8": {
				fontSize: "2.25rem",
				lineHeight: "2.5rem",
			},
			"9": {
				fontSize: "3rem",
				lineHeight: "1",
			},
			"10": {
				fontSize: "3.75rem",
				lineHeight: "1",
			},
			"11": {
				fontSize: "4.5rem",
				lineHeight: "1",
			},
			"12": {
				fontSize: "6rem",
				lineHeight: "1",
			},
			"13": {
				fontSize: "8rem",
				lineHeight: "1",
			},
		},
		fs: {
			n: {
				fontStyle: "normal",
			},
			i: {
				fontStyle: "italic",
			},
		},
		fw: {
			"2": {
				fontWeight: 200,
			},
			"3": {
				fontWeight: 300,
			},
			"4": {
				fontWeight: 400,
			},
			"5": {
				fontWeight: 500,
			},
			"6": {
				fontWeight: 600,
			},
			"7": {
				fontWeight: 700,
			},
			"8": {
				fontWeight: 800,
			},
		},
		ta: {
			":--": {
				textAlign: "left",
			},
			"-:-": {
				textAlign: "center",
			},
			"--:": {
				textAlign: "right",
			},
		},
	},
});

const TypographyKeys = Typography.variants();

export type { TypographyVariants };
export { Typography };
export { TypographyKeys };
