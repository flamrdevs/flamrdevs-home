import { splitProps } from "solid-js";
import type { JSX } from "solid-js";

import * as ContainerCSS from "@flamrdevs/ui/core/Container.recipe.css";
import * as Sprinkles from "@flamrdevs/ui/core/.sprinkles.css";

import { ClassesKeys, classex } from "./../classes";

type ContainerProps = JSX.IntrinsicElements["div"] & ContainerCSS.Variants & Sprinkles.MarginShorthandsVariants & Sprinkles.PaddingShorthandsVariants;

const Container = (props: ContainerProps) => {
	const [classes, recipe, margin, padding, rest] = splitProps(props, ClassesKeys, ContainerCSS.RootKeys, Sprinkles.MarginKeys, Sprinkles.PaddingKeys);

	const className = () => classex([ContainerCSS.Root(recipe), Sprinkles.Margin(margin), Sprinkles.Padding(padding)], classes);

	return <div {...rest} class={className()} />;
};

export type { ContainerProps };
export default Container;
