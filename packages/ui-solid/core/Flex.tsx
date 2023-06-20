import { splitProps } from "solid-js";
import type { JSX } from "solid-js";

import * as FlexCSS from "@flamrdevs/ui/core/Flex.recipe.css";
import * as Sprinkles from "@flamrdevs/ui/core/Sprinkles.css";

import clsx from "@flamrdevs/x/modules/clsx";

import { splitter } from "./core";

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
		splitter.classes,
		["inline"],
		Sprinkles.splitter.align,
		Sprinkles.splitter.justify,
		Sprinkles.splitter.gap,
		Sprinkles.splitter.margin,
		Sprinkles.splitter.padding
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
