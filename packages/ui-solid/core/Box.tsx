import { splitProps } from "solid-js";
import type { JSX } from "solid-js";

import * as Sprinkles from "@flamrdevs/ui/core/Sprinkles.css";

import clsx from "@flamrdevs/x/modules/clsx";

type BoxProps = JSX.IntrinsicElements["div"] & Sprinkles.MarginShorthandsVariants & Sprinkles.PaddingShorthandsVariants;

const Box = (props: BoxProps) => {
	const [classes, margin, padding, rest] = splitProps(props, ["class", "classList"], ["m", "mx", "my", "mt", "mr", "mb", "ml"], ["p", "px", "py", "pt", "pr", "pb", "pl"]);

	const className = () => clsx(Sprinkles.Margin(margin), Sprinkles.Padding(padding), classes.class, classes.classList);

	return <div {...rest} class={className()} />;
};

export type { BoxProps };
export default Box;
