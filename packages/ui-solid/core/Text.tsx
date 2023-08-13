import { splitProps } from "solid-js";
import type { JSX } from "solid-js";

import * as TextCSS from "@flamrdevs/ui/core/Text.recipe.css";

import clsx from "@flamrdevs/x/modules/clsx";

import { ClassesKeys } from "./../classes";

type TextProps = JSX.IntrinsicElements["div"] & TextCSS.Variants;

const Text = (props: TextProps) => {
	const [classes, recipe, rest] = splitProps(props, ClassesKeys, ["inline", "family", "size", "weight", "align"]);

	const className = () => clsx(TextCSS.Root(recipe), classes.class, classes.classList);

	return <div {...rest} class={className()} />;
};

export type { TextProps };
export default Text;
