import { splitProps } from "solid-js";
import type { JSX } from "solid-js";

import * as LoaderRecipe from "@flamrdevs/ui/core/Loader.recipe.css.ts";

import * as Classes from "../classes.ts";

type LoaderProps = Classes.WithProps<JSX.IntrinsicElements["svg"] & LoaderRecipe.Variants>;

const LoaderKeys = ["color", "size"] as const;

const Loader = (props: LoaderProps) => {
	const [classes, recipe, rest] = splitProps(props, Classes.Keys, LoaderKeys);

	return (
		<svg {...rest} class={Classes.x(LoaderRecipe.Root(recipe), classes)} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
			<g class={LoaderRecipe.G}>
				<circle class={LoaderRecipe.Circle} cx="12" cy="12" r="9.5" fill="none" stroke-width="2" />
			</g>
		</svg>
	);
};

export { Loader };
