import { splitProps } from "solid-js";
import type { JSX, ParentProps } from "solid-js";

import { Button as KobalteButton } from "@kobalte/core";

import * as IconButtonCSS from "@flamrdevs/ui/core/IconButton.recipe.css";

import { ClassesKeys, classex } from "./../classes";
import type { ClassesProps } from "./../classes";
import { ChildrenKeys } from "./../children";

type IconButtonProps = KobalteButton.ButtonRootOptions & IconButtonCSS.Variants & IconButtonCSS.InnerVariants & IconButtonCSS.ChildVariants;

const IconButton = <P extends ParentProps<ClassesProps> = JSX.IntrinsicElements["button"]>(props: P & IconButtonProps) => {
	const [classes, child, recipe, rest] = splitProps(props as ParentProps<ClassesProps> & IconButtonProps, ClassesKeys, ChildrenKeys, ["color", "size"]);

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
