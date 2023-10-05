import { splitProps } from "solid-js";
import type { ComponentProps, ValidComponent } from "solid-js";
import { Dynamic } from "solid-js/web";

import * as Recipes from "@flamrdevs/ui/core/.recipes.css";
import * as Sprinkles from "@flamrdevs/ui/core/.sprinkles.css";

import { ClassesKeys, classex } from "./../classes";
import * as Polymorphic from "./../polymorphic";

type BoxProps<C extends ValidComponent> = ComponentProps<C> &
	Polymorphic.Props<
		Recipes.TypographyVariants &
			Sprinkles.LayoutShorthandsVariants &
			Sprinkles.PositionShorthandsVariants &
			Sprinkles.MarginShorthandsVariants &
			Sprinkles.PaddingShorthandsVariants
	>;

const Box = <C extends ValidComponent = "div">(props: BoxProps<C>) => {
	const [polymorphic, classes, typography, layout, position, margin, padding, rest] = splitProps(
		props as BoxProps<"div">,
		Polymorphic.Keys,
		ClassesKeys,
		Recipes.TypographyKeys,
		Sprinkles.LayoutKeys,
		Sprinkles.PositionKeys,
		Sprinkles.MarginKeys,
		Sprinkles.PaddingKeys
	);

	const className = () =>
		classex([Recipes.Typography(typography), Sprinkles.Layout(layout), Sprinkles.Position(position), Sprinkles.Margin(margin), Sprinkles.Padding(padding)], classes);

	return <Dynamic component={polymorphic.as ?? "div"} {...rest} class={className()} />;
};

export type { BoxProps };
export default Box;
