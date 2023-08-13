import { splitProps } from "solid-js";
import type { JSX } from "solid-js";

import * as FlexCSS from "@flamrdevs/ui/core/Flex.recipe.css";
import * as Sprinkles from "@flamrdevs/ui/core/.sprinkles.css";

import clsx from "@flamrdevs/x/modules/clsx";

import { ClassesKeys } from "./../classes";

type FlexProps = JSX.IntrinsicElements["div"] &
	FlexCSS.Variants &
	Sprinkles.AlignShorthandsVariants &
	Sprinkles.JustifyShorthandsVariants &
	Sprinkles.GapShorthandsVariants &
	Sprinkles.MarginShorthandsVariants &
	Sprinkles.PaddingShorthandsVariants;

const Flex = (props: FlexProps) => {
	const [classes, flex, align, justify, gap, margin, padding, rest] = splitProps(
		props,
		ClassesKeys,
		FlexCSS.RootKeys,
		Sprinkles.AlignKeys,
		Sprinkles.JustifyKeys,
		Sprinkles.GapKeys,
		Sprinkles.MarginKeys,
		Sprinkles.PaddingKeys
	);

	const className = () =>
		clsx(
			FlexCSS.Root(flex),
			Sprinkles.Align(align),
			Sprinkles.Justify(justify),
			Sprinkles.Gap(gap),
			Sprinkles.Margin(margin),
			Sprinkles.Padding(padding),
			classes.class,
			classes.classList
		);

	return <div {...rest} class={className()} />;
};

export type { FlexProps };
export default Flex;
