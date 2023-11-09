import { splitProps } from "solid-js";
import type { JSX } from "solid-js";

import { Separator as KobalteSeparator } from "@kobalte/core";

import * as SeparatorKlass from "@flamrdevs/ui/core/Separator/klass.ts";

import * as Classes from "../classes.ts";
import * as Polymorphic from "../polymorphic.ts";

type SeparatorProps = Classes.WithProps<
	Polymorphic.PropsWithoutAsChild<Omit<JSX.IntrinsicElements["hr"], "orientation"> & KobalteSeparator.SeparatorRootOptions & SeparatorKlass.Variants>
>;

const Separator = (props: SeparatorProps) => {
	const [classes, root, rest] = splitProps(props, Classes.Keys, SeparatorKlass.Root.vk);
	return <KobalteSeparator.Root {...rest} class={Classes.x(SeparatorKlass.Root(root), classes)} />;
};

export type { SeparatorProps };
export { Separator };
