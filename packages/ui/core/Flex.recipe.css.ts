import { recipe } from "@vanilla-extract/recipes";
import type { RecipeVariants } from "@vanilla-extract/recipes";

import { Display } from "./Sprinkles.css";

type Variants = Exclude<RecipeVariants<typeof Root>, undefined>;

const Root = recipe({
	variants: {
		inline: {
			true: Display({ d: "iflex" }),
			false: Display({ d: "flex" }),
		},
	},
	defaultVariants: {
		inline: false,
	},
});

export type { Variants };
export { Root };
