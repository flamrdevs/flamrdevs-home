import { recipe } from "@vanilla-extract/recipes";
import type { RecipeVariants } from "@vanilla-extract/recipes";

import { ColorsContract } from "./../styles/contract.css";
import * as vars from "./../styles/variables.css";

type Variants = Exclude<RecipeVariants<typeof Root>, undefined>;

const Root = recipe({
	base: {
		display: "block",
		borderStyle: "none",
		borderWidth: 0,
		marginBlock: "auto",
		marginInline: "auto",
		borderRadius: "100%",
		backgroundImage: `linear-gradient(${vars.lg_deg}, ${ColorsContract.neutral[3]}, ${ColorsContract.neutral[6]}, ${ColorsContract.neutral[3]})`,

		selectors: {
			[`&[data-orientation="horizontal"]`]: {
				vars: { [vars.lg_deg]: "90deg" },
				width: "100%",
				height: 1,
			},
			[`&[data-orientation="vertical"]`]: {
				vars: { [vars.lg_deg]: "0deg" },
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

const RootKeys = Root.variants();

export type { Variants };
export { Root };
export { RootKeys };
