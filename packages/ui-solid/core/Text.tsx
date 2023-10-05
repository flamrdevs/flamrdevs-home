import { splitProps } from "solid-js";
import type { ComponentProps, ValidComponent } from "solid-js";
import { Dynamic } from "solid-js/web";

import * as Recipes from "@flamrdevs/ui/core/.recipes.css";
import * as Sprinkles from "@flamrdevs/ui/core/.sprinkles.css";

import { ClassesKeys, classex } from "./../classes";
import * as Polymorphic from "./../polymorphic";

type TextProps<C extends ValidComponent> = ComponentProps<C> &
	Polymorphic.Props<
		{
			family?: Recipes.TypographyVariants["ff"];
			size?: Recipes.TypographyVariants["fz"];
			weight?: Recipes.TypographyVariants["fw"];
			align?: Recipes.TypographyVariants["ta"];
			italic?: boolean;
		} & Sprinkles.MarginShorthandsVariants &
			Sprinkles.PaddingShorthandsVariants
	>;

const LocalKeys = ["family", "size", "weight", "align", "italic"] as const;

const Text = <C extends ValidComponent = "div">(props: TextProps<C>) => {
	const [polymorphic, classes, local, margin, padding, rest] = splitProps(
		props as TextProps<"div">,
		Polymorphic.Keys,
		ClassesKeys,
		LocalKeys,
		Sprinkles.MarginKeys,
		Sprinkles.PaddingKeys
	);

	const className = () =>
		classex(
			[
				Recipes.Typography({
					ff: local.family ?? "sans",
					fz: local.size ?? "3",
					fs: local.italic ? "i" : "n",
					fw: local.weight ?? "4",
					ta: local.align ?? ":--",
				}),
				Sprinkles.Margin(margin),
				Sprinkles.Padding(padding),
			],
			classes
		);

	return <Dynamic component={polymorphic.as ?? "div"} {...rest} class={className()} />;
};

export type { TextProps };
export default Text;
