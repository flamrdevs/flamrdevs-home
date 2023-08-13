import { splitProps } from "solid-js";
import type { JSX } from "solid-js";

import * as CenterCSS from "@flamrdevs/ui/core/Center.style.css";
import * as Sprinkles from "@flamrdevs/ui/core/.sprinkles.css";

import clsx from "@flamrdevs/x/modules/clsx";

import { ClassesKeys } from "./../classes";

type CenterProps = JSX.IntrinsicElements["div"] & Sprinkles.GapShorthandsVariants & Sprinkles.MarginShorthandsVariants & Sprinkles.PaddingShorthandsVariants;

const Center = (props: CenterProps) => {
	const [classes, gap, margin, padding, rest] = splitProps(props, ClassesKeys, Sprinkles.GapKeys, Sprinkles.MarginKeys, Sprinkles.PaddingKeys);

	const className = () => clsx(CenterCSS.Root, Sprinkles.Gap(gap), Sprinkles.Margin(margin), Sprinkles.Padding(padding), classes.class, classes.classList);

	return <div {...rest} class={className()} />;
};

export type { CenterProps };
export default Center;
