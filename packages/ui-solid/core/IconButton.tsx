import { splitProps } from "solid-js";
import type { ComponentProps, ValidComponent } from "solid-js";

import { Button as KobalteButton } from "@kobalte/core";

import * as IconButtonCSS from "@flamrdevs/ui/core/IconButton.recipe.css";

import { ClassesKeys, classex } from "./../classes";
import { ChildrenKeys } from "./../children";
import * as Polymorphic from "./../polymorphic";

type IconButtonProps = Polymorphic.Props<
	Polymorphic.PropsWithoutAsChild<KobalteButton.ButtonRootOptions & IconButtonCSS.Variants & IconButtonCSS.InnerVariants & IconButtonCSS.ChildVariants>
>;

const IconButton = <C extends ValidComponent = typeof KobalteButton.Root>(props: ComponentProps<C> & IconButtonProps) => {
	const [classes, child, recipe, rest] = splitProps(props as ComponentProps<typeof KobalteButton.Root> & IconButtonProps, ClassesKeys, ChildrenKeys, ["color", "size"]);

	const className = () => classex(IconButtonCSS.Root({ color: recipe.color, size: recipe.size }), classes);
	const innerClassName = () => IconButtonCSS.Inner({ color: recipe.color });
	const childClassName = () => IconButtonCSS.Child({ size: recipe.size });

	return (
		<KobalteButton.Root {...rest} class={className()}>
			<div class={innerClassName()}>
				<div class={childClassName()}>{child.children}</div>
			</div>
		</KobalteButton.Root>
	);
};

export type { IconButtonProps };
export default IconButton;
