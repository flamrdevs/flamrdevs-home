import { recipe } from "@vanilla-extract/recipes";
import type { RecipeVariants } from "@vanilla-extract/recipes";

type Variants = Exclude<RecipeVariants<typeof Root>, undefined>;

const Root = recipe({
	variants: {
		inline: {
			true: {
				display: "inline-flex",
			},
			false: {
				display: "flex",
			},
		},
	},
	defaultVariants: {
		inline: false,
	},
});

export type { Variants };
export { Root };
