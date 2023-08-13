import { splitProps } from "solid-js";
import type { JSX } from "solid-js";

import * as Sprinkles from "@flamrdevs/ui/core/.sprinkles.css";

import clsx from "@flamrdevs/x/modules/clsx";

import { ClassesKeys } from "./../classes";

type BoxProps = JSX.IntrinsicElements["div"] & Sprinkles.DisplayShorthandsVariants & Sprinkles.MarginShorthandsVariants & Sprinkles.PaddingShorthandsVariants;

const Box = (props: BoxProps) => {
	const [classes, display, margin, padding, rest] = splitProps(props, ClassesKeys, Sprinkles.DisplayKeys, Sprinkles.MarginKeys, Sprinkles.PaddingKeys);

	const className = () => clsx(Sprinkles.Display(display), Sprinkles.Margin(margin), Sprinkles.Padding(padding), classes.class, classes.classList);

	return <div {...rest} class={className()} />;
};

export type { BoxProps };
export default Box;
