import { keyframes, style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import type { RecipeVariants } from "@vanilla-extract/recipes";

import { ColorsContract } from "./../styles/contract.css";

type Variants = Exclude<RecipeVariants<typeof Root>, undefined>;

const Root = recipe({
	variants: {
		color: {
			neutral: {
				stroke: ColorsContract.neutral[9],
			},
			primary: {
				stroke: ColorsContract.primary[9],
			},
		},
		size: {
			sm: {
				width: "2rem",
				height: "2rem",
			},
			md: {
				width: "2.5rem",
				height: "2.5rem",
			},
			lg: {
				width: "3rem",
				height: "3rem",
			},
		},
	},
	defaultVariants: {
		color: "primary",
		size: "md",
	},
});

const RootKeys = Root.variants();

const LoaderSpinO = keyframes({
	"100%": {
		transform: "rotate(360deg)",
	},
});

const G = style({
	transformOrigin: "center",
	animation: `${LoaderSpinO} 2s linear infinite`,
});

const LoaderSpinI = keyframes({
	"0%": {
		strokeDasharray: "0 150",
		strokeDashoffset: "0",
	},
	"47.5%": {
		strokeDasharray: "42 150",
		strokeDashoffset: "-16",
	},
	"95%, 100%": {
		strokeDasharray: "42 150",
		strokeDashoffset: "-59",
	},
});

const Circle = style({
	strokeLinecap: "round",
	animation: `${LoaderSpinI} 1.5s ease-in-out infinite`,
});

export type { Variants };
export { Root, G, Circle };
export { RootKeys };
