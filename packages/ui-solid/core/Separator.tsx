import { splitProps } from "solid-js";
import type { JSX } from "solid-js";

import { Separator as KobalteSeparator } from "@kobalte/core";

import * as SeparatorCSS from "@flamrdevs/ui/core/Separator.style.css";

import clsx from "@flamrdevs/x/modules/clsx";

type SeparatorProps = Omit<JSX.IntrinsicElements["hr"], "orientation"> & KobalteSeparator.SeparatorRootOptions;

const Separator = (props: SeparatorProps) => {
	const [classes, rest] = splitProps(props, ["class", "classList"]);

	const className = () => clsx(SeparatorCSS.Root, classes.class, classes.classList);

	return <KobalteSeparator.Root {...rest} class={className()} />;
};

export type { SeparatorProps };
export default Separator;
