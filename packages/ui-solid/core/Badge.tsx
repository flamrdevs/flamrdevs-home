import { splitProps } from "solid-js";
import type { JSX, ParentProps } from "solid-js";

import * as BadgeCSS from "@flamrdevs/ui/core/Badge.recipe.css";

import clsx from "@flamrdevs/x/modules/clsx";

import { ClassesKeys } from "./../classes";
import type { ClassesProps } from "./../classes";
import { ChildrenKeys } from "./../children";

type BadgeProps = JSX.IntrinsicElements["span"] & BadgeCSS.Variants & BadgeCSS.InnerVariants & BadgeCSS.ChildVariants;

const Badge = <P extends ParentProps<ClassesProps> = JSX.IntrinsicElements["span"]>(props: P & BadgeProps) => {
	const [classes, child, recipe, rest] = splitProps(props as ParentProps<ClassesProps> & BadgeProps, ClassesKeys, ChildrenKeys, [...BadgeCSS.RootKeys, ...BadgeCSS.ChildKeys]);

	const className = () => clsx(BadgeCSS.Root({ color: recipe.color, size: recipe.size }), classes.class, classes.classList);
	const innerClassName = () => clsx(BadgeCSS.Inner({ color: recipe.color }));
	const childClassName = () => clsx(BadgeCSS.Child({ font: recipe.font, size: recipe.size }));

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
