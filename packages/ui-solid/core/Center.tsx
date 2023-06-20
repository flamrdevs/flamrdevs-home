import { splitProps } from "solid-js";
import type { JSX } from "solid-js";

import * as CenterCSS from "@flamrdevs/ui/core/Center.style.css";
import * as Sprinkles from "@flamrdevs/ui/core/Sprinkles.css";

import clsx from "@flamrdevs/x/modules/clsx";

import { splitter } from "./core";

type CenterProps = JSX.IntrinsicElements["div"] & Sprinkles.GapShorthandsVariants & Sprinkles.MarginShorthandsVariants & Sprinkles.PaddingShorthandsVariants;

const Center = (props: CenterProps) => {
	const [classes, gap, margin, padding, rest] = splitProps(props, splitter.classes, Sprinkles.splitter.gap, Sprinkles.splitter.margin, Sprinkles.splitter.padding);

	const className = () => clsx(CenterCSS.Root, Sprinkles.Gap(gap), Sprinkles.Margin(margin), Sprinkles.Padding(padding), classes.class, classes.classList);

	return <div {...rest} class={className()} />;
};

export type { CenterProps };
export default Center;
