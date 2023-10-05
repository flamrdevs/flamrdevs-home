import { splitProps } from "solid-js";
import type { JSX } from "solid-js";

import { Separator as KobalteSeparator } from "@kobalte/core";

import * as SeparatorCSS from "@flamrdevs/ui/core/Separator.recipe.css";

import { ClassesKeys, classex } from "./../classes";
import * as Polymorphic from "./../polymorphic";

type SeparatorProps = Polymorphic.PropsWithoutAsChild<Omit<JSX.IntrinsicElements["hr"], "orientation"> & KobalteSeparator.SeparatorRootOptions & SeparatorCSS.Variants>;

const Separator = (props: SeparatorProps) => {
	const [classes, recipe, rest] = splitProps(props, ClassesKeys, ["margin"]);

	const className = () => classex(SeparatorCSS.Root(recipe), classes);

	return <KobalteSeparator.Root {...rest} class={className()} />;
};

export type { SeparatorProps };
export default Separator;
