import { splitProps } from "solid-js";
import type { JSX } from "solid-js";

import { Button as KobalteButton } from "@kobalte/core";

import * as IconButtonCSS from "@flamrdevs/ui/core/IconButton.recipe.css";

import clsx from "@flamrdevs/x/modules/clsx";

type ButtonProps = JSX.IntrinsicElements["button"] & KobalteButton.ButtonRootOptions & IconButtonCSS.Variants & IconButtonCSS.InnerVariants & IconButtonCSS.ChildVariants;

const Button = (props: ButtonProps) => {
	const [classes, recipe, child, rest] = splitProps(props, ["class", "classList"], ["color", "size"], ["children"]);

	const className = () => clsx(IconButtonCSS.Root({ color: recipe.color, size: recipe.size }), classes.class, classes.classList);
	const innerClassName = () => clsx(IconButtonCSS.Inner({ color: recipe.color }));
	const childClassName = () => clsx(IconButtonCSS.Child({ size: recipe.size }));

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
