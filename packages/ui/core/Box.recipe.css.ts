import { recipe } from "@vanilla-extract/recipes";
import type { RecipeVariants } from "@vanilla-extract/recipes";

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
	},
	defaultVariants: {
		inline: false,
	},
});

export type { Variants };
export { Root };
