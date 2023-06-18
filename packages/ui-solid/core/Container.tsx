import { splitProps } from "solid-js";
import type { JSX } from "solid-js";

import * as ContainerCSS from "@flamrdevs/ui/core/Container.recipe.css";

import clsx from "@flamrdevs/x/modules/clsx";

type ContainerProps = JSX.IntrinsicElements["div"] & ContainerCSS.Variants;

const Container = (props: ContainerProps) => {
	const [classes, recipe, rest] = splitProps(props, ["class", "classList"], ["center", "max"]);

	const className = () => clsx(ContainerCSS.Root(recipe), classes.class, classes.classList);

	return <div {...rest} class={className()} />;
};

export type { ContainerProps };
export default Container;
