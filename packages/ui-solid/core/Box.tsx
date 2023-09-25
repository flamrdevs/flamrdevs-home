import { splitProps } from "solid-js";
import type { JSX } from "solid-js";

import * as Recipes from "@flamrdevs/ui/core/.recipes.css";
import * as Sprinkles from "@flamrdevs/ui/core/.sprinkles.css";

import { ClassesKeys, classex } from "./../classes";

type BoxProps = JSX.IntrinsicElements["div"] &
	Recipes.TypographyVariants &
	Sprinkles.LayoutShorthandsVariants &
	Sprinkles.PositionShorthandsVariants &
	Sprinkles.MarginShorthandsVariants &
	Sprinkles.PaddingShorthandsVariants;

const Box = (props: BoxProps) => {
	const [classes, typography, layout, position, margin, padding, rest] = splitProps(
		props,
		ClassesKeys,
		Recipes.TypographyKeys,
		Sprinkles.LayoutKeys,
		Sprinkles.PositionKeys,
		Sprinkles.MarginKeys,
		Sprinkles.PaddingKeys
	);

	const className = () =>
		classex([Recipes.Typography(typography), Sprinkles.Layout(layout), Sprinkles.Position(position), Sprinkles.Margin(margin), Sprinkles.Padding(padding)], classes);

	return <div {...rest} class={className()} />;
};

export type { BoxProps };
export default Box;
