import { splitProps } from "solid-js";
import type { JSX } from "solid-js";

import { Separator as KobalteSeparator } from "@kobalte/core";

import * as SeparatorCSS from "@flamrdevs/ui/core/Separator.recipe.css";

import clsx from "@flamrdevs/x/modules/clsx";

import { ClassesKeys } from "./../classes";

type SeparatorProps = Omit<JSX.IntrinsicElements["hr"], "orientation"> & KobalteSeparator.SeparatorRootOptions & SeparatorCSS.Variants;

const Separator = (props: SeparatorProps) => {
	const [classes, recipe, rest] = splitProps(props, ClassesKeys, ["margin"]);

	const className = () => clsx(SeparatorCSS.Root(recipe), classes.class, classes.classList);

	return <KobalteSeparator.Root {...rest} class={className()} />;
};

export type { SeparatorProps };
export default Separator;
