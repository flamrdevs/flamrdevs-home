import { splitProps } from "solid-js";
import type { JSX } from "solid-js";

import * as CenterCSS from "@flamrdevs/ui/core/Center.style.css";
import * as Sprinkles from "@flamrdevs/ui/core/Sprinkles.css";

import clsx from "@flamrdevs/x/modules/clsx";

type CenterProps = JSX.IntrinsicElements["div"] & Sprinkles.MarginShorthandsVariants & Sprinkles.PaddingShorthandsVariants & Sprinkles.GapShorthandsVariants;

const Center = (props: CenterProps) => {
	const [classes, margin, padding, gap, rest] = splitProps(
		props,
		["class", "classList"],
		["m", "mx", "my", "mt", "mr", "mb", "ml"],
		["p", "px", "py", "pt", "pr", "pb", "pl"],
		["gap", "gapr", "gapc"]
	);

	const className = () => clsx(CenterCSS.Root, Sprinkles.Margin(margin), Sprinkles.Padding(padding), Sprinkles.Gap(gap), classes.class, classes.classList);

	return <div {...rest} class={className()} />;
};

export type { CenterProps };
export default Center;
