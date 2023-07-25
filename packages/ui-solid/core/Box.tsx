import { splitProps } from "solid-js";
import type { JSX } from "solid-js";

import * as Sprinkles from "@flamrdevs/ui/core/Sprinkles.css";

import clsx from "@flamrdevs/x/modules/clsx";

import { splitter } from "./core";

type BoxProps = JSX.IntrinsicElements["div"] & Sprinkles.DisplayShorthandsVariants & Sprinkles.MarginShorthandsVariants & Sprinkles.PaddingShorthandsVariants;

const Box = (props: BoxProps) => {
	const [classes, display, margin, padding, rest] = splitProps(props, splitter.classes, Sprinkles.splitter.display, Sprinkles.splitter.margin, Sprinkles.splitter.padding);

	const className = () => clsx(Sprinkles.Display(display), Sprinkles.Margin(margin), Sprinkles.Padding(padding), classes.class, classes.classList);

	return <div {...rest} class={className()} />;
};

export type { BoxProps };
export default Box;
