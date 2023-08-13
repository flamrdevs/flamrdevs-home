import { recipe } from "@vanilla-extract/recipes";
import type { RecipeVariants } from "@vanilla-extract/recipes";

import { Display } from "./.sprinkles.css";

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

const RootKeys = ["inline"] as const satisfies readonly (keyof Variants)[];

export type { Variants };
export { Root };
export { RootKeys };
