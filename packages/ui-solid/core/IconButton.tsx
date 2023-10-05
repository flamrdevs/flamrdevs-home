import { splitProps } from "solid-js";
import type { ComponentProps, ValidComponent } from "solid-js";

import { Button as KobalteButton } from "@kobalte/core";

import * as IconButtonCSS from "@flamrdevs/ui/core/IconButton.recipe.css";

import { ClassesKeys, classex } from "./../classes";
import * as Polymorphic from "./../polymorphic";

import { getButtonAttrs } from "./attributes/button";
import type { ButtonOptions } from "./attributes/button";

type IconButtonProps = Polymorphic.Props<Polymorphic.PropsWithoutAsChild<KobalteButton.ButtonRootOptions & ButtonOptions & IconButtonCSS.Variants>>;

const IconButton = <C extends ValidComponent = typeof KobalteButton.Root>(props: ComponentProps<C> & IconButtonProps) => {
	const [classes, options, recipe, rest] = splitProps(props as ComponentProps<typeof KobalteButton.Root> & IconButtonProps, ClassesKeys, ["disabled"], IconButtonCSS.RootKeys);

	const className = () => classex(IconButtonCSS.Root(recipe), classes);

	return <KobalteButton.Root {...rest} class={className()} {...getButtonAttrs(options, rest.as)} />;
};

export type { IconButtonProps };
export default IconButton;
