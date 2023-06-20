import { splitProps } from "solid-js";
import type { JSX, ParentProps } from "solid-js";

import { Button as KobalteButton } from "@kobalte/core";

import * as ButtonCSS from "@flamrdevs/ui/core/Button.recipe.css";

import clsx from "@flamrdevs/x/modules/clsx";

import { splitter } from "./core";
import type { ClassesProps } from "./core";

type ButtonProps = KobalteButton.ButtonRootOptions & ButtonCSS.Variants & ButtonCSS.InnerVariants & ButtonCSS.ChildVariants;

const Button = <P extends ParentProps<ClassesProps> = JSX.IntrinsicElements["button"]>(props: P & ButtonProps) => {
	const [classes, child, recipe, rest] = splitProps(props as ParentProps<ClassesProps> & ButtonProps, splitter.classes, splitter.children, ["color", "font", "size"]);

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
