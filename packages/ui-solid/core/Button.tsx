import { splitProps } from "solid-js";
import type { JSX } from "solid-js";

import { Button as KobalteButton } from "@kobalte/core";

import * as ButtonCSS from "@flamrdevs/ui/core/Button.recipe.css";

import clsx from "@flamrdevs/x/modules/clsx";

type ButtonProps = JSX.IntrinsicElements["button"] & KobalteButton.ButtonRootOptions & ButtonCSS.Variants & ButtonCSS.InnerVariants & ButtonCSS.ChildVariants;

const Button = (props: ButtonProps) => {
	const [classes, recipe, child, rest] = splitProps(props, ["class", "classList"], ["color", "font", "size"], ["children"]);

	const className = () => clsx(ButtonCSS.Root({ color: recipe.color, size: recipe.size }), classes.class, classes.classList);
	const innerClassName = () => clsx(ButtonCSS.Inner({ color: recipe.color }));
	const childClassName = () => clsx(ButtonCSS.Child({ font: recipe.font, size: recipe.size }));

	return (
		<KobalteButton.Root {...rest} class={className()}>
			<div class={innerClassName()}>
				<div class={childClassName()}>{child.children}</div>
			</div>
		</KobalteButton.Root>
	);
};

export type { ButtonProps };
export default Button;
