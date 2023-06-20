import { recipe } from "@vanilla-extract/recipes";
import type { RecipeVariants } from "@vanilla-extract/recipes";

import { ColorsContract } from "./styles/contract.css";

type Variants = Exclude<RecipeVariants<typeof Root>, undefined>;

const Root = recipe({
	base: {
		display: "block",
		borderStyle: "none",
		borderWidth: 0,
		marginBlock: "auto",
		marginInline: "auto",
		backgroundColor: ColorsContract.neutral[5],

		selectors: {
			[`&[data-orientation="horizontal"]`]: {
				width: "100%",
				height: 1,
			},
			[`&[data-orientation="vertical"]`]: {
				width: 1,
				height: "100%",
			},
		},
	},
	variants: {
		margin: {
			"0": {
				selectors: {
					[`&[data-orientation="horizontal"]`]: {
						marginBlock: 0,
					},
					[`&[data-orientation="vertical"]`]: {
						marginInline: 0,
					},
				},
			},
			"1": {
				selectors: {
					[`&[data-orientation="horizontal"]`]: {
						marginBlock: "0.5rem",
					},
					[`&[data-orientation="vertical"]`]: {
						marginInline: "0.5rem",
					},
				},
			},
			"2": {
				selectors: {
					[`&[data-orientation="horizontal"]`]: {
						marginBlock: "1rem",
					},
					[`&[data-orientation="vertical"]`]: {
						marginInline: "1rem",
					},
				},
			},
			"3": {
				selectors: {
					[`&[data-orientation="horizontal"]`]: {
						marginBlock: "1.5rem",
					},
					[`&[data-orientation="vertical"]`]: {
						marginInline: "1.5rem",
					},
				},
			},
			"4": {
				selectors: {
					[`&[data-orientation="horizontal"]`]: {
						marginBlock: "2rem",
					},
					[`&[data-orientation="vertical"]`]: {
						marginInline: "2rem",
					},
				},
			},
		},
	},
	defaultVariants: {
		margin: "1",
	},
});

export type { Variants };
export { Root };