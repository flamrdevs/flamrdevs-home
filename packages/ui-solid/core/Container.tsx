import { splitProps } from "solid-js";
import type { ComponentProps, ValidComponent } from "solid-js";
import { Dynamic } from "solid-js/web";

import * as ContainerCSS from "@flamrdevs/ui/core/Container.recipe.css";
import * as Sprinkles from "@flamrdevs/ui/core/.sprinkles.css";

import { ClassesKeys, classex } from "./../classes";
import * as Polymorphic from "./../polymorphic";

type ContainerProps<C extends ValidComponent> = ComponentProps<C> &
	Polymorphic.Props<ContainerCSS.Variants & Sprinkles.MarginShorthandsVariants & Sprinkles.PaddingShorthandsVariants>;

const Container = <C extends ValidComponent = "div">(props: ContainerProps<C>) => {
	const [polymorphic, classes, recipe, margin, padding, rest] = splitProps(
		props as ContainerProps<"div">,
		Polymorphic.Keys,
		ClassesKeys,
		ContainerCSS.RootKeys,
		Sprinkles.MarginKeys,
		Sprinkles.PaddingKeys
	);

	const className = () => classex([ContainerCSS.Root(recipe), Sprinkles.Margin(margin), Sprinkles.Padding(padding)], classes);

	return <Dynamic component={polymorphic.as ?? "div"} {...rest} class={className()} />;
};

export type { ContainerProps };
export default Container;
