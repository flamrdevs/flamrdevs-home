import { recipe } from "@vanilla-extract/recipes";
import type { RecipeVariants } from "@vanilla-extract/recipes";

import { SCREEN } from "./.sprinkles.css.ts";

type Variants = Exclude<RecipeVariants<typeof Root>, undefined>;

const Root = recipe({
	base: {
		width: "100%",

		"@media": {
			[`(min-width: ${SCREEN.xs})`]: {
				maxWidth: SCREEN.xs,
			},
			[`(min-width: ${SCREEN.sm})`]: {
				maxWidth: SCREEN.sm,
			},
			[`(min-width: ${SCREEN.md})`]: {
				maxWidth: SCREEN.md,
			},
			[`(min-width: ${SCREEN.lg})`]: {
				maxWidth: SCREEN.lg,
			},
			[`(min-width: ${SCREEN.xl})`]: {
				maxWidth: SCREEN.xl,
			},
		},
	},
	variants: {
		center: {
			true: {
				marginRight: "auto",
				marginLeft: "auto",
			},
		},
		max: {
			xs: {
				maxWidth: `${SCREEN.xs} !important`,
			},
			sm: {
				maxWidth: `${SCREEN.sm} !important`,
			},
			md: {
				maxWidth: `${SCREEN.md} !important`,
			},
			lg: {
				maxWidth: `${SCREEN.lg} !important`,
			},
			xl: {
				maxWidth: `${SCREEN.xl} !important`,
			},
		},
	},
	defaultVariants: {
		center: true,
	},
});

const RootKeys = Root.variants();

export type { Variants };
export { Root };
export { RootKeys };
