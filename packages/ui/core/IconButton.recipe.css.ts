import { recipe } from "@vanilla-extract/recipes";
import type { RecipeVariants } from "@vanilla-extract/recipes";

import { ColorsContract } from "./styles/contract.css";

type Variants = Exclude<RecipeVariants<typeof Root>, undefined>;

const Root = recipe({
	base: {
		display: "inline-block",
		position: "relative",
		overflow: "hidden",
		border: "none",
		borderRadius: "0.4rem",
		cursor: "pointer",
		userSelect: "none",
	},
	variants: {
		color: {
			neutral: {
				backgroundImage: `linear-gradient(130deg, ${ColorsContract.neutral[11]}, ${ColorsContract.neutral[8]}, ${ColorsContract.neutral[6]})`,
				color: ColorsContract.neutral[11],

				":hover": {
					backgroundImage: `linear-gradient(130deg, ${ColorsContract.neutral[12]}, ${ColorsContract.neutral[8]}, ${ColorsContract.neutral[7]})`,
				},

				":active": {
					backgroundImage: `linear-gradient(130deg, ${ColorsContract.neutral[12]}, ${ColorsContract.neutral[9]}, ${ColorsContract.neutral[8]})`,
				},
			},
		},
		size: {
			md: {
				width: "1.750rem",
				height: "1.750rem",
				padding: 1,
			},
		},
	},
	defaultVariants: {
		color: "neutral",
		size: "md",
	},
});

type InnerVariants = Exclude<RecipeVariants<typeof Inner>, undefined>;

const Inner = recipe({
	base: {
		display: "block",
		position: "relative",
		overflow: "hidden",
		width: "100%",
		height: "100%",
		borderRadius: "0.35rem",
	},
	variants: {
		color: {
			neutral: {
				backgroundImage: `linear-gradient(130deg, ${ColorsContract.neutral[3]}, ${ColorsContract.neutral[1]})`,

				":hover": {
					backgroundImage: `linear-gradient(130deg, ${ColorsContract.neutral[4]}, ${ColorsContract.neutral[1]})`,
				},

				":active": {
					backgroundImage: `linear-gradient(130deg, ${ColorsContract.neutral[5]}, ${ColorsContract.neutral[2]})`,
				},
			},
		},
	},
	defaultVariants: {
		color: "neutral",
	},
});

type ChildVariants = Exclude<RecipeVariants<typeof Child>, undefined>;

const Child = recipe({
	base: {
		display: "inline-flex",
		position: "relative",
		justifyContent: "center",
		alignItems: "center",
		width: "100%",
		height: "100%",
	},
	variants: {
		size: {
			md: {
				padding: "0.2rem",
			},
		},
	},
	defaultVariants: {
		size: "md",
	},
});

export type { Variants, InnerVariants, ChildVariants };
export { Root, Inner, Child };
