import { splitProps } from "solid-js";
import type { ComponentProps, ValidComponent } from "solid-js";

import { Button as KobalteButton } from "@kobalte/core";

import * as ButtonCSS from "@flamrdevs/ui/core/Button.recipe.css";

import { ClassesKeys, classex } from "./../classes";
import { ChildrenKeys } from "./../children";
import * as Polymorphic from "./../polymorphic";

type ButtonProps = Polymorphic.Props<Polymorphic.PropsWithoutAsChild<KobalteButton.ButtonRootOptions & ButtonCSS.Variants & ButtonCSS.InnerVariants & ButtonCSS.ChildVariants>>;

const Button = <C extends ValidComponent = typeof KobalteButton.Root>(props: ComponentProps<C> & ButtonProps) => {
	const [classes, child, recipe, rest] = splitProps(props as ComponentProps<typeof KobalteButton.Root> & ButtonProps, ClassesKeys, ChildrenKeys, [
		...ButtonCSS.RootKeys,
		...ButtonCSS.ChildKeys,
	]);

	const className = () => classex(ButtonCSS.Root({ color: recipe.color, size: recipe.size }), classes);
	const innerClassName = () => ButtonCSS.Inner({ color: recipe.color });
	const childClassName = () => ButtonCSS.Child({ font: recipe.font, size: recipe.size });

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
