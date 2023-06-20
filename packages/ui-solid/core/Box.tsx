import { splitProps } from "solid-js";
import type { JSX } from "solid-js";

import * as BoxCSS from "@flamrdevs/ui/core/Box.recipe.css";
import * as Sprinkles from "@flamrdevs/ui/core/Sprinkles.css";

import clsx from "@flamrdevs/x/modules/clsx";

import { splitter } from "./core";

type BoxProps = JSX.IntrinsicElements["div"] & BoxCSS.Variants & Sprinkles.MarginShorthandsVariants & Sprinkles.PaddingShorthandsVariants;

const Box = (props: BoxProps) => {
	const [classes, box, margin, padding, rest] = splitProps(props, splitter.classes, ["inline"], Sprinkles.splitter.margin, Sprinkles.splitter.padding);

	const className = () => clsx(BoxCSS.Root(box), Sprinkles.Margin(margin), Sprinkles.Padding(padding), classes.class, classes.classList);

	return <div {...rest} class={className()} />;
};

export type { BoxProps };
export default Box;
