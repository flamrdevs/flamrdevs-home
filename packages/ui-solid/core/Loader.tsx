import { splitProps } from "solid-js";
import type { JSX } from "solid-js";

import * as LoaderCSS from "@flamrdevs/ui/core/Loader.recipe.css";

import clsx from "@flamrdevs/x/modules/clsx";

import { splitter } from "./core";

type LoaderProps = JSX.IntrinsicElements["svg"] & LoaderCSS.Variants;

const Loader = (props: LoaderProps) => {
	const [classes, recipe, rest] = splitProps(props, splitter.classes, ["color", "size"]);

	const className = () => clsx(LoaderCSS.Root(recipe), classes.class, classes.classList);

	return (
		<svg {...rest} class={className()} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
			<g class={LoaderCSS.G}>
				<circle class={LoaderCSS.Circle} cx="12" cy="12" r="9.5" fill="none" stroke-width="2" />
			</g>
		</svg>
	);
};

export type { LoaderProps };
export default Loader;