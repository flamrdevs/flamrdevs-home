import { splitProps } from "solid-js";
import type { JSX } from "solid-js";

import * as ContainerCSS from "@flamrdevs/ui/core/Container.recipe.css";
import * as Sprinkles from "@flamrdevs/ui/core/Sprinkles.css";

import clsx from "@flamrdevs/x/modules/clsx";

import { splitter } from "./core";

type ContainerProps = JSX.IntrinsicElements["div"] & ContainerCSS.Variants & Sprinkles.MarginShorthandsVariants & Sprinkles.PaddingShorthandsVariants;

const Container = (props: ContainerProps) => {
	const [classes, recipe, margin, padding, rest] = splitProps(props, splitter.classes, ["center", "max"], Sprinkles.splitter.margin, Sprinkles.splitter.padding);

	const className = () => clsx(ContainerCSS.Root(recipe), Sprinkles.Margin(margin), Sprinkles.Padding(padding), classes.class, classes.classList);

	return <div {...rest} class={className()} />;
};

export type { ContainerProps };
export default Container;
