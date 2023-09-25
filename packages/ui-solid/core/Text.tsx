import { splitProps } from "solid-js";
import type { JSX } from "solid-js";

import * as Recipes from "@flamrdevs/ui/core/.recipes.css";
import * as Sprinkles from "@flamrdevs/ui/core/.sprinkles.css";

import { ClassesKeys, classex } from "./../classes";

type TextProps = Omit<JSX.IntrinsicElements["div"], "style"> & {
	family?: Recipes.TypographyVariants["ff"];
	size?: Recipes.TypographyVariants["fz"];
	style?: Recipes.TypographyVariants["fs"];
	weight?: Recipes.TypographyVariants["fw"];
	align?: Recipes.TypographyVariants["ta"];
} & Sprinkles.MarginShorthandsVariants &
	Sprinkles.PaddingShorthandsVariants;

const LocalKeys = ["family", "size", "style", "weight", "align"] as const;

const Text = (props: TextProps) => {
	const [classes, local, margin, padding, rest] = splitProps(props, ClassesKeys, LocalKeys, Sprinkles.MarginKeys, Sprinkles.PaddingKeys);

	const className = () =>
		classex(
			[
				Recipes.Typography({
					ff: local.family ?? "sans",
					fz: local.size ?? "3",
					fs: local.style ?? "n",
					fw: local.weight ?? "4",
					ta: local.align ?? ":--",
				}),
				Sprinkles.Margin(margin),
				Sprinkles.Padding(padding),
			],
			classes
		);

	return <div {...rest} class={className()} />;
};

export type { TextProps };
export default Text;
