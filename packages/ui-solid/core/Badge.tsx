import { splitProps } from "solid-js";
import type { JSX } from "solid-js";

import * as BadgeCSS from "@flamrdevs/ui/core/Badge.recipe.css";

import { ClassesKeys, classex } from "./../classes";

type BadgeProps = JSX.IntrinsicElements["span"] & BadgeCSS.Variants;

const Badge = (props: BadgeProps) => {
	const [classes, recipe, rest] = splitProps(props, ClassesKeys, BadgeCSS.RootKeys);

	const className = () => classex(BadgeCSS.Root(recipe), classes);

	return <span {...rest} class={className()} />;
};

export type { BadgeProps };
export default Badge;
