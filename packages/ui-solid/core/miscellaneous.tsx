import { splitProps } from "solid-js";
import type { JSX } from "solid-js";

import { Separator as KobalteSeparator } from "@kobalte/core";

import * as SeparatorRecipe from "@flamrdevs/ui/core/Separator.recipe.css.ts";

import * as Classes from "../classes.ts";
import * as Polymorphic from "../polymorphic.ts";

type SeparatorProps = Classes.WithProps<
	Polymorphic.PropsWithoutAsChild<Omit<JSX.IntrinsicElements["hr"], "orientation"> & KobalteSeparator.SeparatorRootOptions & SeparatorRecipe.Variants>
>;

const SeparatorKeys = ["margin"] as const;

const Separator = (props: SeparatorProps) => {
	const [classes, recipe, rest] = splitProps(props, Classes.Keys, SeparatorKeys);
	return <KobalteSeparator.Root {...rest} class={Classes.x(SeparatorRecipe.Root(recipe), classes)} />;
};

export { Separator };
