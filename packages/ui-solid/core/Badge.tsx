import { splitProps } from "solid-js";
import type { JSX, ParentProps } from "solid-js";

import * as BadgeCSS from "@flamrdevs/ui/core/Badge.recipe.css";

import { ClassesKeys, classex } from "./../classes";
import type { ClassesProps } from "./../classes";
import { ChildrenKeys } from "./../children";

type BadgeProps = JSX.IntrinsicElements["span"] & BadgeCSS.Variants & BadgeCSS.InnerVariants & BadgeCSS.ChildVariants;

const Badge = <P extends ParentProps<ClassesProps> = JSX.IntrinsicElements["span"]>(props: P & BadgeProps) => {
	const [classes, child, recipe, rest] = splitProps(props as ParentProps<ClassesProps> & BadgeProps, ClassesKeys, ChildrenKeys, [...BadgeCSS.RootKeys, ...BadgeCSS.ChildKeys]);

	const className = () => classex(BadgeCSS.Root({ color: recipe.color, size: recipe.size }), classes);
	const innerClassName = () => BadgeCSS.Inner({ color: recipe.color });
	const childClassName = () => BadgeCSS.Child({ font: recipe.font, size: recipe.size });

	return (
		<span {...rest} class={className()}>
			<div class={innerClassName()}>
				<div class={childClassName()}>{child.children}</div>
			</div>
		</span>
	);
};

export type { BadgeProps };
export default Badge;
