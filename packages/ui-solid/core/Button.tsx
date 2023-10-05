import { splitProps } from "solid-js";
import type { ComponentProps, ValidComponent } from "solid-js";

import { Button as KobalteButton } from "@kobalte/core";

import * as ButtonCSS from "@flamrdevs/ui/core/Button.recipe.css";

import { ClassesKeys, classex } from "./../classes";
import * as Polymorphic from "./../polymorphic";

import { getButtonAttrs } from "./attributes/button";
import type { ButtonOptions } from "./attributes/button";

type ButtonProps = Polymorphic.Props<Polymorphic.PropsWithoutAsChild<KobalteButton.ButtonRootOptions & ButtonOptions & ButtonCSS.Variants>>;

const Button = <C extends ValidComponent = typeof KobalteButton.Root>(props: ComponentProps<C> & ButtonProps) => {
	const [classes, options, recipe, rest] = splitProps(props as ComponentProps<typeof KobalteButton.Root> & ButtonProps, ClassesKeys, ["disabled"], ButtonCSS.RootKeys);

	const className = () => classex(ButtonCSS.Root(recipe), classes);

	return <KobalteButton.Root {...rest} class={className()} {...getButtonAttrs(options, rest.as)} />;
};

export type { ButtonProps };
export default Button;
